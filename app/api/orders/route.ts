import { type NextRequest, NextResponse } from "next/server"
import { sendOrderNotification } from "@/lib/telegram"

// Resolves env vars across Cloudflare (no prefix) and Vercel (NEXT_PUBLIC_ prefix)
function getEnv(key: string): string | undefined {
  return process.env[key] || process.env[`NEXT_PUBLIC_${key}`]
}

function toBase64Url(input: string | Uint8Array): string {
  const str = typeof input === "string"
    ? input
    : String.fromCharCode(...Array.from(input as Uint8Array))
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

async function getAccessToken(credentials: any): Promise<string> {
  // Use Google's server time to avoid clock skew on Cloudflare Workers edge runtime
  const timeProbe = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=dummy",
  })
  const serverDate = timeProbe.headers.get("date")
  const serverTime = serverDate
    ? Math.floor(new Date(serverDate).getTime() / 1000)
    : Math.floor(Date.now() / 1000)

  const header = toBase64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }))
  const payload = toBase64Url(JSON.stringify({
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: serverTime + 3600,
    iat: serverTime,
  }))

  const signingInput = `${header}.${payload}`

  const privateKey = credentials.private_key.replace(/\\n/g, "\n")
  const pemContents = privateKey
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "")

  const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0))

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  )

  const signatureBuffer = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(signingInput)
  )

  const jwt = `${signingInput}.${toBase64Url(new Uint8Array(signatureBuffer))}`

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  })

  const tokenData = await tokenResponse.json() as any
  if (!tokenData.access_token) {
    throw new Error(`Failed to get access token: ${JSON.stringify(tokenData)}`)
  }
  return tokenData.access_token
}

async function sheetsAppend(accessToken: string, spreadsheetId: string, range: string, values: any[][]) {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    }
  )
  if (!res.ok) throw new Error(`Sheets append failed: ${await res.text()}`)
}

async function sheetsGet(accessToken: string, spreadsheetId: string, range: string) {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )
  if (!res.ok) throw new Error(`Sheets get failed: ${await res.text()}`)
  return res.json() as any
}

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // Works on Cloudflare (GOOGLE_SHEET_ID) and Vercel (NEXT_PUBLIC_GOOGLE_SHEET_ID)
    const spreadsheetId = getEnv("GOOGLE_SHEET_ID")
    if (!spreadsheetId) throw new Error("Google Sheet ID not configured")

    // Works on Cloudflare (GOOGLE_SHEETS_CREDENTIALS) and Vercel (NEXT_PUBLIC_GOOGLE_SHEETS_CREDENTIALS)
    const credentials = getEnv("GOOGLE_SHEETS_CREDENTIALS")
    if (!credentials) throw new Error("Google Sheets credentials not configured")

    const parsedCredentials = JSON.parse(credentials)
    const accessToken = await getAccessToken(parsedCredentials)

    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    const date = new Date()
    const orderDate = `${date.getDate()}-${date.toLocaleString("default", { month: "long" })}-${date.getFullYear()}; ${date.toLocaleTimeString("default", { hour: "numeric", minute: "2-digit", hour12: true })}`

    await sheetsAppend(accessToken, spreadsheetId, "Orders!A1", [[
      orderId,
      orderDate,
      orderData.customer.name,
      orderData.customer.phone,
      orderData.customer.email,
      orderData.customer.address,
      JSON.stringify(orderData.items),
      orderData.total,
      orderData.note || "No note",
      "Pending",
    ]])

    // Works on Cloudflare (TELEGRAM_BOT_TOKEN) and Vercel (NEXT_PUBLIC_TELEGRAM_BOT_TOKEN)
    await sendOrderNotification(orderData, orderId)

    const customersData = await sheetsGet(accessToken, spreadsheetId, "Customers!A2:Z1000")
    const customers = customersData.values || []
    const customerExists = customers.some((row: any[]) => row[1] === orderData.customer.phone)

    if (!customerExists) {
      await sheetsAppend(accessToken, spreadsheetId, "Customers!A1", [[
        orderData.customer.name,
        orderData.customer.phone,
        orderData.customer.address,
        `First order: ${orderId}`,
        orderDate,
      ]])
    }

    return NextResponse.json({ success: true, orderId, message: "Order processed successfully" })
  } catch (error) {
    console.error("Error processing order:", error)
    return NextResponse.json(
      { error: "Failed to process order", detail: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}