import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahavor Foods - Nourishing Lives. Empowering Futures.",
  description:
    "Ahavor Foods produces nutritious, affordable, and culturally rooted food products like Tombrown to support healthy living and sustainable impact.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    images: [
      {
        url: "/ahavor-logo.png",
        width: 1200,
        height: 630,
        alt: "Ahavor Foods Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Ahavor Watermark - Fixed, Unscrollable, Subtle */}
        <div className="fixed inset-0 z-[-1] flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <div className="relative w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] opacity-[0.04] flex items-center justify-center">
            <img
              src="placeholder-logo.png"
              alt="Ahavor Watermark"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
