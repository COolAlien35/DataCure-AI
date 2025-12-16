"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"

// Indian cities with approximate positions (percentage-based on India outline)
const cities = [
    { name: "Delhi", x: 48, y: 22 },
    { name: "Mumbai", x: 32, y: 52 },
    { name: "Bangalore", x: 42, y: 78 },
    { name: "Chennai", x: 55, y: 75 },
    { name: "Hyderabad", x: 46, y: 60 },
    { name: "Kolkata", x: 68, y: 42 },
    { name: "Pune", x: 35, y: 56 },
    { name: "Ahmedabad", x: 28, y: 40 },
    { name: "Jaipur", x: 40, y: 30 },
    { name: "Lucknow", x: 55, y: 32 },
]

export function GeoDataPulse() {
    const containerRef = useRef<HTMLDivElement>(null)
    const pulsesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current || !pulsesRef.current) return

        const pulsesContainer = pulsesRef.current
        let interval: NodeJS.Timeout

        const createPulse = () => {
            const city = cities[Math.floor(Math.random() * cities.length)]
            const isError = Math.random() < 0.2

            const pulse = document.createElement("div")
            pulse.className = "absolute pointer-events-none"
            pulse.style.left = `${city.x}%`
            pulse.style.top = `${city.y}%`
            pulse.innerHTML = `
        <div class="relative -translate-x-1/2 -translate-y-1/2">
          <div class="pulse-ring absolute w-4 h-4 rounded-full border-2 ${isError ? 'border-red-500' : 'border-emerald-500'}"></div>
          <div class="pulse-ring-2 absolute w-4 h-4 rounded-full border ${isError ? 'border-red-400' : 'border-emerald-400'}"></div>
          <div class="w-2 h-2 rounded-full ${isError ? 'bg-red-500' : 'bg-emerald-500'} shadow-lg ${isError ? 'shadow-red-500/50' : 'shadow-emerald-500/50'}"></div>
        </div>
      `

            pulsesContainer.appendChild(pulse)

            const rings = pulse.querySelectorAll(".pulse-ring, .pulse-ring-2")
            gsap.to(rings, {
                scale: 4,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power2.out",
                onComplete: () => pulse.remove(),
            })
        }

        interval = setInterval(createPulse, 800)
        createPulse()

        return () => clearInterval(interval)
    }, [])

    return (
        <section ref={containerRef} className="py-8 bg-gradient-to-b from-muted/5 to-background w-full overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">India Data Pulse</h3>
                    <p className="text-muted-foreground">
                        Real-time validation activity across India
                    </p>
                </div>

                {/* Map Container */}
                <div className="relative w-full max-w-3xl mx-auto aspect-[3/4] rounded-xl overflow-hidden bg-background/50 border border-border">
                    {/* Dotted background */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 130" preserveAspectRatio="xMidYMid slice">
                        <pattern id="dots" width="3" height="3" patternUnits="userSpaceOnUse">
                            <circle cx="1.5" cy="1.5" r="0.4" fill="currentColor" className="text-primary" />
                        </pattern>
                        <rect width="100" height="130" fill="url(#dots)" />
                    </svg>

                    {/* India outline (simplified) */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 130" preserveAspectRatio="xMidYMid slice">
                        <path
                            d="M45,5 L55,8 L65,10 L70,15 L75,20 L78,30 L80,40 L75,45 L78,55 L72,65 L68,75 L60,85 L55,95 L50,105 L48,110 L45,100 L40,90 L35,85 L30,75 L25,65 L22,55 L20,45 L25,35 L28,25 L35,15 L40,8 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.8"
                            className="text-primary/40"
                        />
                        {/* Kashmir region */}
                        <path
                            d="M40,5 L45,5 L50,10 L55,8 L52,15 L45,12 L40,10 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className="text-primary/30"
                        />
                        {/* Sri Lanka hint */}
                        <ellipse cx="55" cy="115" rx="5" ry="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
                    </svg>

                    {/* City dots (static) */}
                    {cities.map((city) => (
                        <div
                            key={city.name}
                            className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
                            style={{
                                left: `${city.x}%`,
                                top: `${city.y}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    ))}

                    {/* Pulse container */}
                    <div ref={pulsesRef} className="absolute inset-0" />

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 flex gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-muted-foreground">Validated</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="text-muted-foreground">Correction</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute top-4 right-4 text-right">
                        <p className="text-2xl font-bold text-emerald-500">847</p>
                        <p className="text-xs text-muted-foreground">records/min</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
