"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Info } from "lucide-react"
import { AnimatedCounter } from "@/components/AnimatedCounter"

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface AssemblyMetricCardProps {
    title: string
    value: string | number
    change?: number
    changeLabel?: string
    icon?: React.ReactNode
    tooltip?: string
    index?: number
}

export function AssemblyMetricCard({
    title,
    value,
    change,
    changeLabel,
    icon,
    tooltip,
    index = 0
}: AssemblyMetricCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isPositive = change && change > 0
    const isNegative = change && change < 0

    useIsomorphicLayoutEffect(() => {
        if (!cardRef.current) return

        const ctx = gsap.context(() => {
            // Initial state
            gsap.set(".metric-icon-wrapper", {
                scale: 0,
                rotation: -180,
                opacity: 0,
            })

            gsap.set(".metric-title", {
                y: 20,
                opacity: 0,
            })

            gsap.set(".metric-value", {
                y: 30,
                opacity: 0,
                scale: 0.8,
            })

            gsap.set(".metric-change", {
                x: -20,
                opacity: 0,
            })

            // Assembly timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",
                    end: "top 60%",
                    scrub: 0.3,
                },
            })

            // Icon spins in
            tl.to(".metric-icon-wrapper", {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.7)",
            })

            // Title slides up
            tl.to(".metric-title", {
                y: 0,
                opacity: 1,
                duration: 0.3,
            }, "-=0.2")

            // Value pops in
            tl.to(".metric-value", {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.4)",
            }, "-=0.2")

            // Change slides in
            tl.to(".metric-change", {
                x: 0,
                opacity: 1,
                duration: 0.2,
            }, "-=0.1")

        }, cardRef)

        return () => ctx.revert()
    }, [])

    return (
        <Card
            ref={cardRef}
            className="bg-card border-border transition-colors hover:bg-card/80"
            data-animate="metric-card"
        >
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <p className="metric-title text-sm font-medium text-muted-foreground">{title}</p>
                            {tooltip && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Info className="h-3.5 w-3.5 text-muted-foreground/50 cursor-help" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="max-w-xs text-sm">{tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                        </div>
                        <p className="metric-value text-3xl font-bold text-card-foreground">
                            {typeof value === "number" ? (
                                <AnimatedCounter value={value} />
                            ) : typeof value === "string" && !value.includes("%") ? (
                                <AnimatedCounter value={value} />
                            ) : (
                                value
                            )}
                        </p>
                        {change !== undefined && (
                            <div className="metric-change flex items-center gap-1.5">
                                {isPositive && <TrendingUp className="h-4 w-4 text-success" />}
                                {isNegative && <TrendingDown className="h-4 w-4 text-error" />}
                                <span
                                    className={cn(
                                        "text-sm font-medium",
                                        isPositive && "text-success",
                                        isNegative && "text-error",
                                        !isPositive && !isNegative && "text-muted-foreground"
                                    )}
                                >
                                    {isPositive && "+"}
                                    {change}%
                                </span>
                                {changeLabel && <span className="text-sm text-muted-foreground">{changeLabel}</span>}
                            </div>
                        )}
                    </div>
                    {icon && (
                        <div className="metric-icon-wrapper rounded-lg bg-muted p-3">
                            {icon}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
