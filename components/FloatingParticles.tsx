"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface Particle {
    x: number
    y: number
    size: number
    speed: number
    type: "cross" | "dot"
    opacity: number
}

export function FloatingParticles() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const particles: HTMLDivElement[] = []
        const count = 20

        // Create particles
        for (let i = 0; i < count; i++) {
            const particle = document.createElement("div")
            const isCross = Math.random() > 0.5
            const size = 4 + Math.random() * 8

            particle.className = "absolute pointer-events-none"
            particle.style.width = `${size}px`
            particle.style.height = `${size}px`
            particle.style.left = `${Math.random() * 100}%`
            particle.style.top = `${Math.random() * 100}%`
            particle.style.opacity = `${0.1 + Math.random() * 0.2}`

            if (isCross) {
                particle.innerHTML = `
          <svg viewBox="0 0 10 10" class="w-full h-full text-primary/30">
            <path d="M5 0v10M0 5h10" stroke="currentColor" stroke-width="1.5" fill="none"/>
          </svg>
        `
            } else {
                particle.innerHTML = `
          <div class="w-full h-full rounded-full bg-primary/20"></div>
        `
            }

            container.appendChild(particle)
            particles.push(particle)

            // Float animation
            gsap.to(particle, {
                y: -window.innerHeight - 100,
                x: `+=${(Math.random() - 0.5) * 100}`,
                duration: 15 + Math.random() * 20,
                repeat: -1,
                ease: "none",
                delay: Math.random() * 10,
                onRepeat: () => {
                    gsap.set(particle, {
                        y: window.innerHeight + 50,
                        x: `${Math.random() * 100}%`,
                    })
                },
            })
        }

        return () => {
            particles.forEach((p) => p.remove())
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none overflow-hidden z-0"
            aria-hidden="true"
        />
    )
}
