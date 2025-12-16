"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { Menu, User } from "lucide-react"

interface GlassHeaderProps {
    onMenuClick: () => void
}

export function GlassHeader({ onMenuClick }: GlassHeaderProps) {
    const headerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!headerRef.current) return

        // Slide down from top on mount
        gsap.fromTo(
            headerRef.current,
            { yPercent: -100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 }
        )
    }, [])

    return (
        <header
            ref={headerRef}
            className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/40 border-b border-white/10"
            style={{ willChange: "transform" }}
        >
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left - Control Zone */}
                <div className="flex items-center gap-4">
                    {/* Sidebar Trigger */}
                    <button
                        onClick={onMenuClick}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                        aria-label="Open menu"
                    >
                        <Menu className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                    </button>

                    {/* Holographic Logo */}
                    <div className="flex items-center gap-2">
                        <span
                            className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                            style={{
                                animation: "gradient 3s linear infinite",
                            }}
                        >
                            DataCure AI
                        </span>
                        <span className="text-xs text-gray-600 hidden sm:inline">v2.0</span>
                    </div>
                </div>

                {/* Right - Status HUD */}
                <div className="flex items-center gap-4">
                    {/* Live Status Badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-xs font-medium text-emerald-400 hidden sm:inline">
                            System Nominal
                        </span>
                    </div>

                    {/* Profile Avatar */}
                    <button className="relative p-0.5 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-[length:200%_auto] hover:animate-gradient group">
                        <div className="p-2 rounded-full bg-black/80 group-hover:bg-black/60 transition-colors">
                            <User className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Gradient border glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
      `}</style>
        </header>
    )
}
