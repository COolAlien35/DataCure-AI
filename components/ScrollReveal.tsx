"use client"

import { useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    y?: number
    blur?: number
}

/**
 * ScrollReveal wrapper component
 * Un-blurs and lifts content as it enters viewport
 * Uses GSAP ScrollTrigger for performance
 */
export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    y = 30,
    blur = 8
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (!elementRef.current) return

        const element = elementRef.current

        gsap.set(element, {
            y,
            autoAlpha: 0,
            filter: `blur(${blur}px)`,
        })

        const animation = gsap.to(element, {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.8,
            delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none none",
            },
        })

        return () => {
            animation.kill()
        }
    }, [delay, y, blur])

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    )
}
