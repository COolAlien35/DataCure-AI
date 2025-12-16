"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ConfidenceImprovementProps {
    originalConfidence?: number
    currentConfidence: number
    className?: string
    animate?: boolean  // Only animate once when record completes
}

export function ConfidenceImprovement({
    originalConfidence,
    currentConfidence,
    className,
    animate = false,
}: ConfidenceImprovementProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const hasAnimated = useRef(false)

    // Only show improvement if we have original confidence
    if (!originalConfidence) {
        return (
            <div className={cn("flex items-center gap-1", className)}>
                <span className="font-semibold">{Math.round(currentConfidence * 100)}%</span>
            </div>
        )
    }

    const improvement = currentConfidence - originalConfidence
    const improvementPercent = Math.round(improvement * 100)

    // Color coding based on final confidence
    const getConfidenceColor = (conf: number) => {
        if (conf >= 0.95) return 'text-emerald-500'
        if (conf >= 0.85) return 'text-amber-500'
        return 'text-red-500'
    }

    const originalColor = getConfidenceColor(originalConfidence)
    const currentColor = getConfidenceColor(currentConfidence)

    useEffect(() => {
        if (!animate || hasAnimated.current || !containerRef.current) return

        // Animate confidence improvement ONCE when record completes
        const tl = gsap.timeline()

        tl.fromTo(
            containerRef.current.querySelector('.original'),
            { opacity: 1, scale: 1 },
            { opacity: 0.5, scale: 0.9, duration: 0.3 }
        )
            .fromTo(
                containerRef.current.querySelector('.arrow'),
                { opacity: 0, x: -10 },
                { opacity: 1, x: 0, duration: 0.2 }
            )
            .fromTo(
                containerRef.current.querySelector('.improved'),
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    ease: 'back.out(1.7)',
                }
            )
            .fromTo(
                containerRef.current.querySelector('.badge'),
                { opacity: 0, y: -5 },
                { opacity: 1, y: 0, duration: 0.3 },
                '-=0.2'
            )

        hasAnimated.current = true

        return () => {
            tl.kill()
        }
    }, [animate])

    return (
        <div ref={containerRef} className={cn("flex items-center gap-2", className)}>
            {/* Original Confidence */}
            <div className="original flex flex-col items-end">
                <span className={cn("text-xs font-medium opacity-60", originalColor)}>
                    {Math.round(originalConfidence * 100)}%
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    Before
                </span>
            </div>

            {/* Arrow */}
            <ArrowUpRight className="arrow h-4 w-4 text-muted-foreground opacity-0" />

            {/* Improved Confidence */}
            <div className="improved flex flex-col items-start opacity-0">
                <span className={cn("text-sm font-bold", currentColor)}>
                    {Math.round(currentConfidence * 100)}%
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    After AI
                </span>
            </div>

            {/* Improvement Badge */}
            {improvementPercent > 0 && (
                <div className="badge opacity-0 ml-1">
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                        <TrendingUp className="h-3 w-3 text-emerald-500" />
                        <span className="text-[10px] font-semibold text-emerald-500">
                            +{improvementPercent}%
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}
