"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Upload, Brain, Sparkles, ShieldCheck } from "lucide-react"

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const stages = [
    {
        id: "ingest",
        label: "Data Ingestion",
        description: "CSV files parsed and validated for schema compliance",
        icon: Upload,
        position: 0,
    },
    {
        id: "agents",
        label: "AI Multi-Agent Processing",
        description: "Parallel validation across NPI, License, Address, and Sanction databases",
        icon: Brain,
        position: 50,
    },
    {
        id: "output",
        label: "Golden Record Output",
        description: "Enriched, validated, audit-ready provider data",
        icon: Sparkles,
        position: 100,
    },
]

export function LiquidLightPipeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const fillRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (!containerRef.current || !fillRef.current) return

        const ctx = gsap.context(() => {
            // Initial state: fill at 0%, stages hidden
            gsap.set(fillRef.current, { height: "0%" })

            stages.forEach((stage) => {
                gsap.set(`.stage-${stage.id}`, {
                    opacity: 0.3,
                    scale: 0.9,
                })
                gsap.set(`.stage-${stage.id} .stage-icon`, {
                    scale: 0,
                    rotation: -180,
                })
                gsap.set(`.stage-${stage.id} .stage-content`, {
                    x: -30,
                    opacity: 0,
                })
            })

            // Master timeline linked to scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom 30%",
                    scrub: 0.5,
                },
            })

            // Fill bar grows
            tl.to(fillRef.current, {
                height: "100%",
                duration: 3,
                ease: "none",
            })

            // Stage 1 activation at 0-33%
            tl.to(".stage-ingest", { opacity: 1, scale: 1, duration: 0.3 }, 0)
            tl.to(".stage-ingest .stage-icon", { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.7)" }, 0.1)
            tl.to(".stage-ingest .stage-content", { x: 0, opacity: 1, duration: 0.3 }, 0.2)

            // Stage 2 activation at 33-66%
            tl.to(".stage-agents", { opacity: 1, scale: 1, duration: 0.3 }, 1)
            tl.to(".stage-agents .stage-icon", { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.7)" }, 1.1)
            tl.to(".stage-agents .stage-content", { x: 0, opacity: 1, duration: 0.3 }, 1.2)

            // Stage 3 activation at 66-100%
            tl.to(".stage-output", { opacity: 1, scale: 1, duration: 0.3 }, 2)
            tl.to(".stage-output .stage-icon", { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.7)" }, 2.1)
            tl.to(".stage-output .stage-content", { x: 0, opacity: 1, duration: 0.3 }, 2.2)

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        How DataCure <span className="text-primary">Validates</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Watch your data flow through our intelligent validation pipeline
                    </p>
                </div>

                {/* Vertical Pipeline */}
                <div ref={containerRef} className="relative max-w-3xl mx-auto">
                    {/* Track (gray background) */}
                    <div
                        ref={trackRef}
                        className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-muted/50 rounded-full overflow-hidden"
                    >
                        {/* Fill bar (liquid light) */}
                        <div
                            ref={fillRef}
                            className="absolute top-0 left-0 right-0 rounded-full"
                            style={{
                                background: "linear-gradient(to bottom, #22c55e, #10b981, #14b8a6)",
                                boxShadow: "0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3)",
                            }}
                        />
                    </div>

                    {/* Stages */}
                    <div className="relative space-y-24 py-8">
                        {stages.map((stage, idx) => {
                            const Icon = stage.icon
                            const isLeft = idx % 2 === 0

                            return (
                                <div
                                    key={stage.id}
                                    className={cn(
                                        `stage-${stage.id}`,
                                        "relative flex items-center gap-6",
                                        isLeft ? "flex-row" : "flex-row-reverse"
                                    )}
                                >
                                    {/* Content */}
                                    <Card className={cn(
                                        "stage-content flex-1 p-6 bg-card/80 backdrop-blur-sm border-2 border-border",
                                        isLeft ? "text-right" : "text-left"
                                    )}>
                                        <h3 className="text-xl font-semibold mb-2">{stage.label}</h3>
                                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                                    </Card>

                                    {/* Icon Node */}
                                    <div className="stage-icon relative z-10 w-16 h-16 rounded-full bg-background border-4 border-success shadow-lg shadow-success/30 flex items-center justify-center">
                                        <Icon className="w-7 h-7 text-success" />
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1" />
                                </div>
                            )
                        })}
                    </div>

                    {/* Final Badge */}
                    <div className="text-center mt-12 relative z-10">
                        <Badge className="bg-success/20 text-success border-success/30 px-6 py-2 text-base">
                            <ShieldCheck className="h-4 w-4 mr-2" />
                            98% Confidence Score
                        </Badge>
                    </div>
                </div>
            </div>
        </section>
    )
}
