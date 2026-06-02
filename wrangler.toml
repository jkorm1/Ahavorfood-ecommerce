import { writeFileSync } from "fs";

const config = {
  name: "ahavorfoods",
  main: ".open-next/worker.js",
  compatibility_date: "2024-09-23",
  compatibility_flags: ["nodejs_compat"],
  assets: { directory: ".open-next/assets", binding: "ASSETS" },
  observability: { logs: { enabled: false, invocation_logs: true } },
  vars: {
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID || "",
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || "",
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID || "",
    GOOGLE_SHEETS_CREDENTIALS: process.env.GOOGLE_SHEETS_CREDENTIALS || "",
  },
};

writeFileSync("wrangler.json", JSON.stringify(config, null, 2));
console.log("wrangler.json generated successfully");