"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"

const logMessages = [
    { icon: "✓", text: "Dr. Sarah Johnson - NPI Verified", type: "success" },
    { icon: "⚠", text: "Address updated to Suite 400, Medical Plaza", type: "warning" },
    { icon: "✓", text: "License CA-49202 confirmed active", type: "success" },
    { icon: "⟳", text: "Sanction check passed - OIG clear", type: "info" },
    { icon: "✓", text: "Dr. Michael Chen - All validations passed", type: "success" },
    { icon: "⚠", text: "Phone number corrected: (555) 123-4567", type: "warning" },
    { icon: "✓", text: "NPI 1234567890 matched to NPPES registry", type: "success" },
    { icon: "✓", text: "Board certification verified - Internal Medicine", type: "success" },
    { icon: "⟳", text: "Processing batch: Q4_Providers_2024.csv", type: "info" },
    { icon: "✓", text: "Dr. Emily Rodriguez - 98% confidence score", type: "success" },
]

export function LiveTerminal() {
    const containerRef = useRef<HTMLDivElement>(null)
    const tickerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!tickerRef.current) return

        const ticker = tickerRef.current
        const content = ticker.innerHTML
        ticker.innerHTML = content + content // Duplicate for seamless loop

        gsap.to(ticker, {
            x: "-50%",
            duration: 30,
            ease: "none",
            repeat: -1,
        })
    }, [])

    return (
        <section ref={containerRef} className="py-4 bg-black/50 border-y border-emerald-500/20 overflow-hidden">
            <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 pointer-events-none" />

                {/* Terminal prefix */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center gap-2 bg-black/80 px-3 py-1 rounded">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-500">LIVE</span>
                </div>

                {/* Scrolling ticker */}
                <div ref={tickerRef} className="flex items-center gap-8 whitespace-nowrap py-3 pl-24">
                    {logMessages.map((msg, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 font-mono text-sm"
                        >
                            <span
                                className={
                                    msg.type === "success" ? "text-emerald-400" :
                                        msg.type === "warning" ? "text-amber-400" :
                                            "text-cyan-400"
                                }
                            >
                                {msg.icon}
                            </span>
                            <span className="text-muted-foreground">{msg.text}</span>
                            <span className="text-muted-foreground/30">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
