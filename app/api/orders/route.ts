import { type NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"
import { JWT } from "google-auth-library"
import { sendOrderNotification } from "@/lib/telegram"

// Works on Cloudflare (no prefix) and Vercel (NEXT_PUBLIC_ prefix)
function getEnv(key: string): string | undefined {
  return process.env[key] || process.env[`NEXT_PUBLIC_${key}`]
}

async function getSheetsClient() {
  const credentials = getEnv("GOOGLE_SHEETS_CREDENTIALS")
  if (!credentials) {
    throw new Error("Google Sheets credentials not configured")
  }

  const parsedCredentials = JSON.parse(credentials)

  const auth = new JWT({
    email: parsedCredentials.client_email,
    key: parsedCredentials.private_key.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  return google.sheets({ version: "v4", auth })
}

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()
    const sheets = await getSheetsClient()
    const spreadsheetId = getEnv("GOOGLE_SHEET_ID")

    if (!spreadsheetId) {
      throw new Error("Google Sheet ID not configured")
    }

    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    const date = new Date()
    const orderDate = `${date.getDate()}-${date.toLocaleString("default", { month: "long" })}-${date.getFullYear()}; ${date.toLocaleTimeString("default", { hour: "numeric", minute: "2-digit", hour12: true })}`

    const orderRow = [
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
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Orders!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [orderRow] },
      insertDataOption: "INSERT_ROWS",
    })

    await sendOrderNotification(orderData, orderId)

    const customersResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Customers!A2:Z1000",
    })

    const customers = customersResponse.data.values || []
    let customerExists = false

    for (let i = 0; i < customers.length; i++) {
      if (customers[i][1] === orderData.customer.phone) {
        customerExists = true
        break
      }
    }

    if (!customerExists) {
      const customerRow = [
        orderData.customer.name,
        orderData.customer.phone,
        orderData.customer.address,
        `First order: ${orderId}`,
        `${new Date().getDate()}-${new Date().toLocaleString("default", { month: "long" })}-${new Date().getFullYear()}; ${new Date().toLocaleTimeString("default", { hour: "numeric", minute: "2-digit", hour12: true })}`,
      ]

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Customers!A1",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [customerRow] },
        insertDataOption: "INSERT_ROWS",
      })
    }

    return NextResponse.json({
      success: true,
      orderId,
      message: "Order processed successfully",
    })
  } catch (error) {
    console.error("Error processing order:", error)
    return NextResponse.json(
      {
        error: "Failed to process order",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}