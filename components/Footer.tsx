"use client"

import { Github } from "lucide-react"

export function Footer() {
    const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE !== 'false'

    return (
        <footer className="w-full border-t border-white/10 bg-black/90 backdrop-blur-sm mt-auto">
            <div className="container mx-auto px-4 py-6">
                {/* Demo Disclaimer (prominent if in demo mode) */}
                {isDemoMode && (
                    <div className="mb-4 pb-4 border-b border-white/5">
                        <div className="flex items-center justify-center gap-2 text-amber-400/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            <p className="text-sm font-medium">
                                Demo Build – Simulated Data for Demonstration Purposes
                            </p>
                        </div>
                    </div>
                )}

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left - Brand & Tech Stack */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-base font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            DataCure AI
                        </span>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
                            <span>Next.js 16</span>
                            <span>•</span>
                            <span>React 19</span>
                            <span>•</span>
                            <span>FastAPI</span>
                            <span>•</span>
                            <span>GSAP</span>
                            <span>•</span>
                            <span>TanStack Query</span>
                        </div>
                    </div>

                    {/* Center - Copyright */}
                    <div className="text-center">
                        <p className="text-xs text-gray-600">
                            © 2025 DataCure. Healthcare Data Validation Platform.
                        </p>
                        <p className="text-xs text-gray-700 mt-0.5">
                            Built with AI-powered validation agents
                        </p>
                    </div>

                    {/* Right - Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all group"
                            aria-label="View on GitHub"
                        >
                            <Github className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                        </a>
                        <div className="text-xs text-gray-600">
                            <a href="mailto:demo@datacure.ai" className="hover:text-emerald-400 transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
