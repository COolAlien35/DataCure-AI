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

interface AnimatedJobsTableProps {
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

export function AnimatedJobsTable({ jobs }: AnimatedJobsTableProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            // Initial state
            gsap.set(".jobs-card", {
                scaleY: 0,
                opacity: 0,
                transformOrigin: "top center",
            })

            gsap.set(".jobs-header", {
                y: -30,
                opacity: 0,
            })

            gsap.set(".jobs-row", {
                x: (idx) => (idx % 2 === 0 ? -50 : 50),
                opacity: 0,
            })

            // Assembly timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    end: "center center",
                    scrub: 0.5,
                },
            })

            // Card expands
            tl.to(".jobs-card", {
                scaleY: 1,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            })

            // Header slides down
            tl.to(".jobs-header", {
                y: 0,
                opacity: 1,
                duration: 0.3,
            }, "-=0.2")

            // Rows stagger in from sides
            tl.to(".jobs-row", {
                x: 0,
                opacity: 1,
                stagger: 0.08,
                duration: 0.3,
                ease: "power2.out",
            }, "-=0.1")

        }, containerRef)

        return () => ctx.revert()
    }, [jobs])

    return (
        <div ref={containerRef}>
            <Card className="jobs-card bg-card border-border overflow-hidden">
                <CardHeader className="jobs-header">
                    <CardTitle>Recent Validation Jobs</CardTitle>
                    <CardDescription>Latest provider data files processed through the AI validation pipeline</CardDescription>
                </CardHeader>
                <CardContent>
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
                                    <TableRow
                                        key={job.id}
                                        className="jobs-row hover:bg-muted/30"
                                    >
                                        <TableCell className="font-medium">{job.name}</TableCell>
                                        <TableCell>
                                            <StatusBadge status={job.status} />
                                        </TableCell>
                                        <TableCell className="min-w-[120px]">
                                            <ProgressBar value={job.progress} size="sm" />
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">{formatDate(job.createdAt)}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm" asChild>
                                                <Link href={`/jobs/${job.id}`}>
                                                    <Eye className="h-4 w-4 mr-1" />
                                                    View
                                                </Link>
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
