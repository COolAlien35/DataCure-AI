"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import { cn } from "@/lib/utils"
import { Brain, Target, ShieldCheck, MapPin, Activity, Database } from "lucide-react"

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const orbitingAgents = [
    { id: "npi", name: "NPI Validator", icon: Target, color: "from-blue-500 to-cyan-500", angle: 0 },
    { id: "license", name: "License Check", icon: ShieldCheck, color: "from-green-500 to-emerald-500", angle: 60 },
    { id: "address", name: "Address API", icon: MapPin, color: "from-purple-500 to-pink-500", angle: 120 },
    { id: "sanction", name: "Sanctions", icon: Activity, color: "from-orange-500 to-red-500", angle: 180 },
    { id: "database", name: "NPPES DB", icon: Database, color: "from-indigo-500 to-violet-500", angle: 240 },
    { id: "score", name: "Confidence", icon: Brain, color: "from-amber-500 to-yellow-500", angle: 300 },
]

export function NeuralCore() {
    const containerRef = useRef<HTMLDivElement>(null)
    const coreRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (!containerRef.current || !coreRef.current) return

        const ctx = gsap.context(() => {
            // Continuous orbit animation
            orbitingAgents.forEach((agent, idx) => {
                const bubble = document.querySelector(`.agent-bubble-${agent.id}`)
                if (!bubble) return

                gsap.to(bubble, {
                    rotation: 360,
                    duration: 20 + idx * 2,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "0 0",
                })
            })

            // Core pulse
            gsap.to(".core-glow", {
                scale: 1.2,
                opacity: 0.3,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            })

            // Scrub: agents pull tighter on scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                },
            })

            // Tighten orbit radius
            tl.to(".orbit-path", {
                scale: 0.7,
                duration: 1,
            })

            // Light beams to center
            tl.to(".energy-beam", {
                opacity: 1,
                scaleY: 1,
                duration: 0.5,
                stagger: 0.1,
            }, "-=0.5")

            // Core intensifies
            tl.to(".core-center", {
                boxShadow: "0 0 80px rgba(34, 197, 94, 0.8)",
                scale: 1.1,
                duration: 0.5,
            }, "-=0.3")

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative w-screen -ml-[calc((100vw-100%)/2)] py-20 overflow-hidden"
            style={{
                background: "radial-gradient(ellipse at center, rgba(34,197,94,0.1) 0%, transparent 50%), linear-gradient(to bottom, hsl(var(--background)), hsl(var(--muted)/0.3), hsl(var(--background)))",
            }}
        >
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-2">Live AI Processing Core</h3>
                <p className="text-muted-foreground">
                    Multiple agents validating data in parallel
                </p>
            </div>

            {/* Neural Core Visualization */}
            <div className="relative h-[400px] flex items-center justify-center">
                {/* Central Core */}
                <div ref={coreRef} className="relative z-10">
                    {/* Glow effect */}
                    <div className="core-glow absolute inset-0 w-32 h-32 rounded-full bg-success/20 blur-xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />

                    {/* Core rings */}
                    <div className="absolute w-28 h-28 rounded-full border border-success/20 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-pulse" />
                    <div className="absolute w-24 h-24 rounded-full border-2 border-success/40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />

                    {/* Core center */}
                    <div className="core-center absolute w-20 h-20 rounded-full bg-gradient-to-br from-success/30 to-success/10 backdrop-blur-sm border border-success/50 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex items-center justify-center shadow-lg shadow-success/30">
                        <Brain className="w-10 h-10 text-success" />
                    </div>
                </div>

                {/* Orbiting Agents */}
                <div className="orbit-path absolute inset-0 flex items-center justify-center" style={{ willChange: "transform" }}>
                    {orbitingAgents.map((agent) => {
                        const Icon = agent.icon
                        const radius = 140
                        const angleRad = (agent.angle * Math.PI) / 180
                        const x = Math.cos(angleRad) * radius
                        const y = Math.sin(angleRad) * radius * 0.6 // Elliptical

                        return (
                            <div
                                key={agent.id}
                                className={cn(`agent-bubble-${agent.id}`, "absolute")}
                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                }}
                            >
                                {/* Energy beam to core */}
                                <div
                                    className="energy-beam absolute w-0.5 h-16 origin-bottom opacity-0 scale-y-0"
                                    style={{
                                        background: `linear-gradient(to top, transparent, rgba(34,197,94,0.5))`,
                                        transform: `rotate(${agent.angle + 90}deg)`,
                                    }}
                                />

                                {/* Glassmorphism bubble */}
                                <div
                                    className={cn(
                                        "relative w-14 h-14 rounded-xl -translate-x-1/2 -translate-y-1/2",
                                        "bg-gradient-to-br backdrop-blur-md border border-white/20",
                                        "flex flex-col items-center justify-center gap-1",
                                        "shadow-lg",
                                        agent.color
                                    )}
                                    style={{
                                        background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                                        boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)`,
                                    }}
                                >
                                    <Icon className="w-5 h-5 text-white/90" />
                                    <span className="text-[8px] text-white/70 font-medium truncate max-w-[50px]">
                                        {agent.name.split(" ")[0]}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Status bar */}
            <div className="flex justify-center gap-8 mt-8 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-muted-foreground">6 Agents Active</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-muted-foreground">Processing 847 records/min</span>
                </div>
            </div>
        </section>
    )
}
