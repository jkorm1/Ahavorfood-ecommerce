import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  return NextResponse.json({
    hasCredentials: !!process.env.GOOGLE_SHEETS_CREDENTIALS,
    hasSheetId: !!process.env.GOOGLE_SHEET_ID || !!process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
    credentialsLength: process.env.GOOGLE_SHEETS_CREDENTIALS?.length || 0,
    allEnvKeys: Object.keys(process.env).filter(k => !k.includes("PRIVATE")),
  })
}