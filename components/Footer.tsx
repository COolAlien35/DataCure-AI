"use client"

import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/90 backdrop-blur-sm py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left - Brand & Status */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-lg font-bold text-emerald-400">DataCure AI</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs text-gray-500">System Nominal</span>
                        </div>
                    </div>

                    {/* Center - Legal */}
                    <div className="text-center">
                        <p className="text-xs text-gray-600">
                            © 2025 DataCure Inc. Secured Audit Trails Active.
                        </p>
                        <p className="text-xs text-gray-700 mt-1">
                            HIPAA Compliant • SOC 2 Type II Certified
                        </p>
                    </div>

                    {/* Right - Links */}
                    <div className="flex items-center gap-4 text-sm">
                        <Link
                            href="/privacy"
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            Privacy Protocol
                        </Link>
                        <span className="text-gray-700">•</span>
                        <Link
                            href="/status"
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            Server Status
                        </Link>
                        <span className="text-gray-700">•</span>
                        <Link
                            href="/admin"
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            Admin Portal
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
