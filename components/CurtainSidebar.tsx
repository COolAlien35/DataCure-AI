"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    ClipboardList,
    Upload,
    BarChart3,
    Settings,
    X,
} from "lucide-react"

const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/jobs", label: "Validation Jobs", icon: ClipboardList },
    { href: "/upload", label: "Upload Providers", icon: Upload },
    { href: "/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/settings", label: "Settings", icon: Settings },
]

interface CurtainSidebarProps {
    isOpen: boolean
    onClose: () => void
}

export function CurtainSidebar({ isOpen, onClose }: CurtainSidebarProps) {
    const sidebarRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (!sidebarRef.current) return

        if (isOpen) {
            // Make visible first, then animate in
            setIsVisible(true)
            gsap.fromTo(
                sidebarRef.current,
                { yPercent: -100 },
                { yPercent: 0, duration: 0.5, ease: "power3.out" }
            )
        } else if (isVisible) {
            // Animate out, then hide
            gsap.to(sidebarRef.current, {
                yPercent: -100,
                duration: 0.4,
                ease: "power3.in",
                onComplete: () => setIsVisible(false),
            })
        }
    }, [isOpen, isVisible])

    // Don't render if not visible
    if (!isVisible && !isOpen) return null

    return (
        <div
            ref={sidebarRef}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-lg"
            style={{ willChange: "transform" }}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <nav className="flex flex-col items-center justify-center h-full gap-6">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={cn(
                                "flex items-center gap-4 px-8 py-4 text-2xl font-medium rounded-xl transition-all",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                        >
                            <Icon className="w-8 h-8" />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            {/* Brand */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-sm text-muted-foreground">DataCure AI</p>
                <p className="text-xs text-muted-foreground/50">v2.0 Command Center</p>
            </div>
        </div>
    )
}
