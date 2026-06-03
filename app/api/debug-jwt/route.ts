import { type NextRequest, NextResponse } from "next/server"

function toBase64Url(input: string | Uint8Array): string {
  const str = typeof input === "string" 
    ? input 
    : String.fromCharCode(...Array.from(input as Uint8Array))
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

export async function GET(request: NextRequest) {
  try {
    const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS
    if (!credentials) return NextResponse.json({ error: "no credentials" })

    const parsed = JSON.parse(credentials)
    
    // Check what the private key looks like after parsing
    const rawKey = parsed.private_key
    const replacedKey = rawKey.replace(/\\n/g, "\n")
    
    const pemContents = replacedKey
      .replace("-----BEGIN PRIVATE KEY-----", "")
      .replace("-----END PRIVATE KEY-----", "")
      .replace(/\s/g, "")

    // Try importing the key
    let keyImportError = null
    try {
      const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0))
      await crypto.subtle.importKey(
        "pkcs8", binaryKey,
        { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
        false, ["sign"]
      )
    } catch (e) {
      keyImportError = String(e)
    }

    return NextResponse.json({
      hasNewlines: rawKey.includes("\n"),
      hasLiteralBackslashN: rawKey.includes("\\n"),
      keyStart: replacedKey.substring(0, 50),
      pemLength: pemContents.length,
      keyImportError,
      clientEmail: parsed.client_email,
    })
  } catch (e) {
    return NextResponse.json({ error: String(e) })
  }
}