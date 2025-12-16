"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import { Brain, Target, ShieldCheck, MapPin, Activity, Database, Zap } from "lucide-react"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const agents = [
    { id: "npi", name: "NPI Validator", icon: Target, color: "#3b82f6", angle: 0 },
    { id: "license", name: "License Check", icon: ShieldCheck, color: "#22c55e", angle: 60 },
    { id: "address", name: "Address API", icon: MapPin, color: "#a855f7", angle: 120 },
    { id: "sanction", name: "Sanctions DB", icon: Activity, color: "#f97316", angle: 180 },
    { id: "database", name: "NPPES Registry", icon: Database, color: "#06b6d4", angle: 240 },
    { id: "scoring", name: "Confidence AI", icon: Zap, color: "#eab308", angle: 300 },
]

// MASSIVE orbit radius - fills screen width
const ORBIT_RADIUS_X = 550 // Horizontal radius (near screen edges)
const ORBIT_RADIUS_Y = 300 // Vertical radius (elliptical)

export function MassiveNeuralCore() {
    const containerRef = useRef<HTMLDivElement>(null)
    const particlesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            // Brain breathing animation
            gsap.to(".brain-core", {
                scale: 1.1,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            })

            // Core glow pulse
            gsap.to(".core-glow", {
                opacity: 0.9,
                scale: 1.5,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
            })

            // Data particles flowing in from far edges
            const createParticle = () => {
                if (!particlesRef.current) return

                const particle = document.createElement("div")
                const angle = Math.random() * Math.PI * 2
                const startRadius = 800 // Start from far outside
                const startX = Math.cos(angle) * startRadius
                const startY = Math.sin(angle) * startRadius

                particle.className = "absolute w-2 h-2 rounded-full bg-emerald-400"
                particle.style.left = "50%"
                particle.style.top = "50%"
                particle.style.transform = `translate(${startX}px, ${startY}px)`
                particle.style.boxShadow = "0 0 10px rgba(52, 211, 153, 0.9)"

                particlesRef.current.appendChild(particle)

                gsap.to(particle, {
                    x: 0,
                    y: 0,
                    opacity: 0,
                    duration: 3,
                    ease: "power2.in",
                    onComplete: () => particle.remove(),
                })
            }

            const particleInterval = setInterval(createParticle, 80)
            return () => clearInterval(particleInterval)
        }, containerRef)

        return () => ctx.revert()
    }, [])

    useIsomorphicLayoutEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            // SPIRAL DEPLOYMENT with MASSIVE radius
            agents.forEach((agent) => {
                const angleRad = (agent.angle * Math.PI) / 180
                const finalX = Math.cos(angleRad) * ORBIT_RADIUS_X
                const finalY = Math.sin(angleRad) * ORBIT_RADIUS_Y

                gsap.set(`.agent-node-${agent.id}`, {
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 0,
                })

                gsap.to(`.agent-node-${agent.id}`, {
                    x: finalX,
                    y: finalY,
                    scale: 1,
                    opacity: 1,
                    rotation: 720, // Two full rotations for dramatic spiral
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "center center",
                        scrub: 1.5,
                    },
                })
            })

            // Slow continuous orbit rotation
            gsap.to(".agents-container", {
                rotation: 360,
                duration: 60,
                repeat: -1,
                ease: "none",
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[110vh] overflow-hidden"
            style={{
                background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12) 0%, transparent 50%)",
            }}
        >
            {/* Header */}
            <div className="text-center pt-16 pb-8">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                    Neural Processing <span className="text-emerald-500">Core</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                    Scroll to deploy AI validation agents into orbit
                </p>
            </div>

            {/* Main visualization - centered in the massive space */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ top: "10%" }}>
                {/* Particles */}
                <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

                {/* MASSIVE Central Brain Core */}
                <div className="brain-core relative z-10" style={{ willChange: "transform" }}>
                    {/* Huge outer glow */}
                    <div className="core-glow absolute w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />

                    {/* Multiple rings for depth */}
                    <div className="absolute w-72 h-72 rounded-full border border-emerald-500/10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                    <div className="absolute w-64 h-64 rounded-full border border-emerald-500/20 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-pulse" />
                    <div className="absolute w-56 h-56 rounded-full border-2 border-emerald-500/30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                    <div className="absolute w-48 h-48 rounded-full border-2 border-emerald-500/50 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />

                    {/* Core center - HUGE */}
                    <div
                        className="relative w-44 h-44 rounded-full flex items-center justify-center"
                        style={{
                            background: "radial-gradient(circle, rgba(16, 185, 129, 0.5), rgba(16, 185, 129, 0.1))",
                            boxShadow: "0 0 100px rgba(16, 185, 129, 0.6), inset 0 0 50px rgba(16, 185, 129, 0.4)",
                        }}
                    >
                        <Brain className="w-24 h-24 text-emerald-400" />
                    </div>
                </div>

                {/* MASSIVE Agent Nodes Container */}
                <div
                    className="agents-container absolute"
                    style={{
                        width: `${ORBIT_RADIUS_X * 2 + 150}px`,
                        height: `${ORBIT_RADIUS_Y * 2 + 150}px`
                    }}
                >
                    {agents.map((agent) => {
                        const Icon = agent.icon
                        return (
                            <div
                                key={agent.id}
                                className={`agent-node-${agent.id} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                                style={{ willChange: "transform, opacity" }}
                            >
                                {/* Bigger agent bubble */}
                                <div
                                    className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center backdrop-blur-md border border-white/20"
                                    style={{
                                        background: `linear-gradient(135deg, ${agent.color}35, ${agent.color}15)`,
                                        boxShadow: `0 0 40px ${agent.color}50, 0 10px 40px rgba(0,0,0,0.4)`,
                                    }}
                                >
                                    <Icon className="w-10 h-10" style={{ color: agent.color }} />
                                    <span className="text-xs text-white/80 mt-2 font-medium">{agent.name.split(" ")[0]}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Stats bar at bottom */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-16 text-sm">
                <div className="text-center">
                    <p className="text-4xl font-bold text-emerald-400">98.7%</p>
                    <p className="text-sm text-muted-foreground mt-2">Accuracy Rate</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-400">847</p>
                    <p className="text-sm text-muted-foreground mt-2">Records/min</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-purple-400">6</p>
                    <p className="text-sm text-muted-foreground mt-2">Active Agents</p>
                </div>
            </div>
        </section>
    )
}
