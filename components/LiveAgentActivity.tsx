"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import { cn } from "@/lib/utils"

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const agents = [
    { id: "npi", name: "NPI Validator", status: "active", angle: 0 },
    { id: "license", name: "License Verifier", status: "active", angle: 72 },
    { id: "address", name: "Address Enrichment", status: "processing", angle: 144 },
    { id: "sanction", name: "Sanction Check", status: "active", angle: 216 },
    { id: "confidence", name: "Confidence Scorer", status: "idle", angle: 288 },
]

export function LiveAgentActivity() {
    const containerRef = useRef<HTMLDivElement>(null)
    const coreRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            // Initial state: nodes scattered
            gsap.set(".agent-node", {
                scale: 0,
                opacity: 0,
            })

            gsap.set(".core-ring", {
                scale: 0,
                opacity: 0,
            })

            gsap.set(".connection-line", {
                scaleX: 0,
                opacity: 0,
            })

            // Assembly timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: 0.5,
                },
            })

            // Core assembles first
            tl.to(".core-ring", {
                scale: 1,
                opacity: 1,
                stagger: 0.1,
                duration: 0.3,
                ease: "back.out(1.7)",
            })

            // Agent nodes spiral in
            tl.to(".agent-node", {
                scale: 1,
                opacity: 1,
                stagger: 0.08,
                duration: 0.4,
                ease: "back.out(1.4)",
            }, "-=0.2")

            // Connection lines grow
            tl.to(".connection-line", {
                scaleX: 1,
                opacity: 1,
                stagger: 0.05,
                duration: 0.3,
            }, "-=0.3")

            // Pulse animation (continuous, not scrubbed)
            gsap.to(".core-pulse", {
                scale: 1.5,
                opacity: 0,
                duration: 1.5,
                repeat: -1,
                ease: "power2.out",
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-12">
            <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Live Agent Activity</h3>
                <p className="text-sm text-muted-foreground">
                    AI agents processing in parallel
                </p>
            </div>

            <div className="relative h-64 flex items-center justify-center">
                {/* Central Core */}
                <div ref={coreRef} className="relative">
                    {/* Core rings */}
                    <div className="core-ring absolute inset-0 w-20 h-20 rounded-full border-2 border-primary/30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                    <div className="core-ring absolute w-16 h-16 rounded-full border-2 border-primary/50 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                    <div className="core-ring absolute w-12 h-12 rounded-full bg-primary/20 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center">
                        <div className="core-pulse absolute w-12 h-12 rounded-full bg-primary/30" />
                        <span className="text-xs font-bold text-primary z-10">CORE</span>
                    </div>
                </div>

                {/* Agent Nodes */}
                {agents.map((agent, idx) => {
                    const radius = 100
                    const angleRad = (agent.angle * Math.PI) / 180
                    const x = Math.cos(angleRad) * radius
                    const y = Math.sin(angleRad) * radius

                    return (
                        <div
                            key={agent.id}
                            className="agent-node absolute flex flex-col items-center"
                            style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {/* Connection Line */}
                            <div
                                className="connection-line absolute w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent origin-left"
                                style={{
                                    transform: `rotate(${agent.angle + 180}deg)`,
                                    left: "50%",
                                    top: "50%",
                                }}
                            />

                            {/* Node */}
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                                    agent.status === "active" && "border-success bg-success/20 text-success",
                                    agent.status === "processing" && "border-warning bg-warning/20 text-warning",
                                    agent.status === "idle" && "border-muted bg-muted/20 text-muted-foreground"
                                )}
                            >
                                {agent.id.charAt(0).toUpperCase()}
                            </div>

                            {/* Label */}
                            <span className="text-[10px] text-muted-foreground mt-1 whitespace-nowrap">
                                {agent.name}
                            </span>
                        </div>
                    )
                })}
            </div>

            {/* Status indicators */}
            <div className="flex justify-center gap-6 mt-4 text-xs">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-muted-foreground">Active</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                    <span className="text-muted-foreground">Processing</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-muted" />
                    <span className="text-muted-foreground">Idle</span>
                </div>
            </div>
        </section>
    )
}
