"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
    Upload,
    Brain,
    Sparkles,
    Target,
    Activity,
    ShieldCheck,
    MapPin
} from "lucide-react"

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const stages = [
    {
        id: "ingest",
        label: "Data Ingestion",
        description: "CSV files uploaded, parsed, and validated for schema compliance",
        icon: Upload,
        color: "text-blue-400",
        glowColor: "rgba(96, 165, 250, 0.5)",
    },
    {
        id: "agents",
        label: "AI Multi-Agent Processing",
        description: "Parallel validation across NPI Registry, State Licensing, Address APIs, and Sanction databases",
        icon: Brain,
        color: "text-purple-400",
        glowColor: "rgba(168, 85, 247, 0.5)",
        subAgents: [
            { name: "NPI Validator", icon: Target },
            { name: "License Verifier", icon: ShieldCheck },
            { name: "Address Enrichment", icon: MapPin },
            { name: "Sanction Check", icon: Activity },
        ],
    },
    {
        id: "output",
        label: "Golden Record Output",
        description: "Enriched, validated, audit-ready provider data with confidence scores",
        icon: Sparkles,
        color: "text-amber-400",
        glowColor: "rgba(251, 191, 36, 0.5)",
    },
]

export function PipelineVisualizer() {
    const containerRef = useRef<HTMLDivElement>(null)
    const pulseRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (!containerRef.current || !pulseRef.current || !trackRef.current) return

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                },
            })

            // Pulse travels down the vertical line
            tl.to(pulseRef.current, {
                top: "100%",
                ease: "none",
            })

            // Stage activation: light up as pulse passes
            stages.forEach((stage, idx) => {
                const progress = idx / (stages.length - 1)

                tl.to(`.stage-${stage.id}`, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                }, progress)

                tl.to(`.stage-${stage.id} .icon-wrapper`, {
                    boxShadow: `0 0 30px ${stage.glowColor}`,
                    scale: 1.1,
                    duration: 0.2,
                }, progress)

                // Dim after pulse passes
                if (idx < stages.length - 1) {
                    tl.to(`.stage-${stage.id}`, {
                        opacity: 0.5,
                        scale: 0.98,
                        duration: 0.2,
                    }, progress + 0.15)

                    tl.to(`.stage-${stage.id} .icon-wrapper`, {
                        boxShadow: "none",
                        scale: 1,
                        duration: 0.2,
                    }, progress + 0.15)
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="relative py-24 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        How DataCure <span className="text-primary">Validates</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Your healthcare provider data flows through our intelligent validation pipeline,
                        powered by specialized AI agents working in parallel.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div ref={containerRef} className="relative max-w-4xl mx-auto">
                    {/* Central Vertical Track */}
                    <div
                        ref={trackRef}
                        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-amber-500/30"
                    />

                    {/* Pulse (Data Packet) */}
                    <div
                        ref={pulseRef}
                        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/50 z-20"
                        style={{ willChange: "transform" }}
                    >
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    </div>

                    {/* Stages */}
                    <div className="relative space-y-32">
                        {stages.map((stage, idx) => {
                            const Icon = stage.icon
                            const isLeft = idx % 2 === 0

                            return (
                                <div
                                    key={stage.id}
                                    className={cn(
                                        `stage-${stage.id}`,
                                        "relative opacity-50 scale-95 transition-all duration-300"
                                    )}
                                >
                                    <div className={cn(
                                        "flex items-center gap-8",
                                        isLeft ? "flex-row" : "flex-row-reverse"
                                    )}>
                                        {/* Content Card */}
                                        <Card className="flex-1 p-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-colors">
                                            <div className={cn(
                                                "flex items-start gap-4",
                                                isLeft ? "flex-row" : "flex-row-reverse text-right"
                                            )}>
                                                <div className={cn("flex-1", isLeft ? "" : "flex flex-col items-end")}>
                                                    <h3 className="text-xl font-semibold mb-2">{stage.label}</h3>
                                                    <p className="text-sm text-muted-foreground mb-4">
                                                        {stage.description}
                                                    </p>

                                                    {/* Sub-agents for middle stage */}
                                                    {stage.subAgents && (
                                                        <div className={cn(
                                                            "grid grid-cols-2 gap-2 mt-4",
                                                            isLeft ? "" : "justify-items-end"
                                                        )}>
                                                            {stage.subAgents.map((agent) => {
                                                                const AgentIcon = agent.icon
                                                                return (
                                                                    <Badge
                                                                        key={agent.name}
                                                                        variant="outline"
                                                                        className="flex items-center gap-1 bg-background/50"
                                                                    >
                                                                        <AgentIcon className="h-3 w-3" />
                                                                        <span className="text-xs">{agent.name}</span>
                                                                    </Badge>
                                                                )
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Card>

                                        {/* Icon Node */}
                                        <div className="relative z-10">
                                            <div
                                                className={cn(
                                                    "icon-wrapper",
                                                    "p-6 rounded-full bg-background border-4 border-border transition-all duration-300"
                                                )}
                                                style={{ willChange: "transform, box-shadow" }}
                                            >
                                                <Icon className={cn("h-10 w-10", stage.color)} />
                                            </div>
                                        </div>

                                        {/* Spacer for alternating layout */}
                                        <div className="flex-1" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Final Badge */}
                    <div className="text-center mt-20 relative z-10">
                        <Badge className="bg-success/20 text-success border-success/30 px-6 py-2 text-base">
                            <ShieldCheck className="h-4 w-4 mr-2" />
                            Audit-Ready Output
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-4">
                            Average Confidence Score: <span className="text-success font-bold">98%</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
