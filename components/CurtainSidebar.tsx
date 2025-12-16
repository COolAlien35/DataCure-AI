"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/lib/contexts/SidebarContext"
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

export function CurtainSidebar() {
    const { isOpen, closeSidebar } = useSidebar()
    const pathname = usePathname()

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar - slides from left */}
            <div
                className={cn(
                    "fixed left-0 top-0 bottom-0 z-50 w-80 bg-background/98 backdrop-blur-lg border-r border-white/10",
                    "flex flex-col transition-transform duration-300 ease-out",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Close button */}
                <button
                    onClick={closeSidebar}
                    className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    aria-label="Close sidebar"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Navigation */}
                <nav className="flex flex-col justify-center flex-1 gap-3 px-6 py-20">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeSidebar}
                                className={cn(
                                    "flex items-center gap-4 px-6 py-3 text-lg font-medium rounded-xl transition-all",
                                    isActive
                                        ? "bg-primary text-primary-foreground shadow-lg"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                )}
                            >
                                <Icon className="w-6 h-6" />
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Brand */}
                <div className="px-6 py-8 text-center border-t border-white/10">
                    <p className="text-sm font-semibold text-foreground">DataCure AI</p>
                    <p className="text-xs text-muted-foreground/70">v2.0 Command Center</p>
                </div>
            </div>
        </>
    )
}
