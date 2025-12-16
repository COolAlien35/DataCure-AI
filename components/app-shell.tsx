"use client"

import type React from "react"

import { GlassHeader } from "@/components/GlassHeader"
import { CurtainSidebar } from "@/components/CurtainSidebar"
import { Footer } from "@/components/Footer"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Global Sidebar */}
      <CurtainSidebar />

      {/* Global Header */}
      <GlassHeader />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
