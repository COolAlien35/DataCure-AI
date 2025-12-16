"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatusBadge } from "@/components/status-badge"
import { ProgressBar } from "@/components/progress-bar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Eye } from "lucide-react"
import type { ValidationJob } from "@/types"

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface ScannerJobsTableProps {
    jobs: ValidationJob[]
}

function formatDate(timestamp: string) {
    return new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

export function ScannerJobsTable({ jobs }: ScannerJobsTableProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const scannerRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (!containerRef.current || !scannerRef.current) return

        const ctx = gsap.context(() => {
            // Assembly animation
            gsap.set(".scanner-card", { scaleY: 0, opacity: 0, transformOrigin: "top" })
            gsap.set(".scanner-row", { x: (i) => (i % 2 === 0 ? -40 : 40), opacity: 0 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    end: "center center",
                    scrub: 0.5,
                },
            })

            tl.to(".scanner-card", { scaleY: 1, opacity: 1, duration: 0.5 })
            tl.to(".scanner-row", { x: 0, opacity: 1, stagger: 0.1, duration: 0.3 }, "-=0.2")

            // Scanner effect (continuous)
            gsap.to(scannerRef.current, {
                top: "100%",
                duration: 3,
                repeat: -1,
                ease: "power1.inOut",
                yoyo: true,
            })

        }, containerRef)

        return () => ctx.revert()
    }, [jobs])

    return (
        <div ref={containerRef} className="relative">
            <Card className="scanner-card bg-card border-border overflow-hidden">
                <CardHeader>
                    <CardTitle>Recent Validation Jobs</CardTitle>
                    <CardDescription>AI-powered validation with real-time scanning</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    {/* Scanner line */}
                    <div
                        ref={scannerRef}
                        className="absolute left-0 right-0 h-0.5 z-10 pointer-events-none"
                        style={{
                            top: 0,
                            background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.8), transparent)",
                            boxShadow: "0 0 10px rgba(34,197,94,0.5), 0 0 20px rgba(34,197,94,0.3)",
                        }}
                    />

                    <div className="rounded-lg border border-border overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead className="text-muted-foreground">Job Name</TableHead>
                                    <TableHead className="text-muted-foreground">Status</TableHead>
                                    <TableHead className="text-muted-foreground">Progress</TableHead>
                                    <TableHead className="text-muted-foreground">Created</TableHead>
                                    <TableHead className="text-right text-muted-foreground">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {jobs.map((job) => (
                                    <TableRow key={job.id} className="scanner-row hover:bg-muted/30">
                                        <TableCell className="font-medium">{job.name}</TableCell>
                                        <TableCell><StatusBadge status={job.status} /></TableCell>
                                        <TableCell className="min-w-[120px]"><ProgressBar value={job.progress} size="sm" /></TableCell>
                                        <TableCell className="text-muted-foreground">{formatDate(job.createdAt)}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm" asChild>
                                                <Link href={`/jobs/${job.id}`}><Eye className="h-4 w-4 mr-1" />View</Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
