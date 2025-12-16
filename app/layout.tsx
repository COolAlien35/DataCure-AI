import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers"
import { SidebarProvider } from "@/lib/contexts/SidebarContext"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DataCure AI - Healthcare Provider Validation",
  description: "AI-powered healthcare provider directory validation and data quality platform",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <SidebarProvider>
          <Providers>
            {children}
          </Providers>
        </SidebarProvider>
        <Analytics />
      </body>
    </html>
  )
}
