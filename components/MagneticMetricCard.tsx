"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Info } from "lucide-react"
import { AnimatedCounter } from "@/components/AnimatedCounter"

interface MagneticMetricCardProps {
    title: string
    value: string | number
    change?: number
    changeLabel?: string
    icon?: React.ReactNode
    tooltip?: string
}

export function MagneticMetricCard({
    title,
    value,
    change,
    changeLabel,
    icon,
    tooltip,
}: MagneticMetricCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isPositive = change && change > 0
    const isNegative = change && change < 0

    useIsomorphicLayoutEffect(() => {
        if (!cardRef.current) return

        const card = cardRef.current

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            const rotateX = (y / rect.height) * -10
            const rotateY = (x / rect.width) * 10

            gsap.to(card, {
                rotateX,
                rotateY,
                duration: 0.3,
                ease: "power2.out",
                transformPerspective: 1000,
            })
        }

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)",
            })
        }

        card.addEventListener("mousemove", handleMouseMove)
        card.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            card.removeEventListener("mousemove", handleMouseMove)
            card.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <Card
            ref={cardRef}
            className="bg-card border-border transition-shadow hover:shadow-xl hover:shadow-primary/10"
            style={{ willChange: "transform", transformStyle: "preserve-3d" }}
        >
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-muted-foreground">{title}</p>
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
                        <p className="text-3xl font-bold text-card-foreground">
                            {typeof value === "number" ? (
                                <AnimatedCounter value={value} />
                            ) : typeof value === "string" && !value.includes("%") ? (
                                <AnimatedCounter value={value} />
                            ) : (
                                value
                            )}
                        </p>
                        {change !== undefined && (
                            <div className="flex items-center gap-1.5">
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
                    {icon && <div className="rounded-lg bg-muted p-3">{icon}</div>}
                </div>
            </CardContent>
        </Card>
    )
}
