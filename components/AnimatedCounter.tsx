"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"

interface AnimatedCounterProps {
    value: number | string
    duration?: number
    className?: string
    decimals?: number
}

/**
 * Animated counter using GSAP
 * Counts from 0 to target value with smooth easing
 */
export function AnimatedCounter({
    value,
    duration = 1.5,
    className = "",
    decimals = 0
}: AnimatedCounterProps) {
    const counterRef = useRef<HTMLSpanElement>(null)
    const valueNum = typeof value === "string" ? parseFloat(value.replace(/,/g, "")) || 0 : value

    useIsomorphicLayoutEffect(() => {
        if (!counterRef.current || isNaN(valueNum)) return

        const counter = { value: 0 }

        gsap.to(counter, {
            value: valueNum,
            duration,
            ease: "power3.out",
            onUpdate: () => {
                if (counterRef.current) {
                    const formatted = decimals > 0
                        ? counter.value.toFixed(decimals)
                        : Math.round(counter.value).toLocaleString()
                    counterRef.current.textContent = formatted
                }
            },
        })
    }, [valueNum, duration, decimals])

    return <span ref={counterRef} className={className}>0</span>
}
