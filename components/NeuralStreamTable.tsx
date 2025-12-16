"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { Table, TableBody } from "@/components/ui/table"
import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect"

interface NeuralStreamTableProps {
    children: ReactNode
    stagger?: number
    delay?: number
}

/**
 * Neural Stream effect for table rows
 * Applies cascading slide-up + un-blur animation
 * 
 * Wraps standard Table and TableBody with GSAP stagger effect
 */
export function NeuralStreamTable({
    children,
    stagger = 0.05,
    delay = 0.2
}: NeuralStreamTableProps) {
    const tableRef = useRef<HTMLTableElement>(null)

    useIsomorphicLayoutEffect(() => {
        if (!tableRef.current) return

        const rows = tableRef.current.querySelectorAll('[data-animate="job-row"], [data-animate="table-row"]')

        if (rows.length === 0) return

        // Set initial state
        gsap.set(rows, {
            y: 20,
            autoAlpha: 0,
            filter: "blur(10px)",
        })

        // Animate in with stagger
        const animation = gsap.to(rows, {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.6,
            stagger,
            delay,
            ease: "power3.out",
            clearProps: "filter", // Remove filter after animation for performance
        })

        return () => {
            animation.kill()
        }
    }, [stagger, delay])

    return (
        <Table ref={tableRef}>
            {children}
        </Table>
    )
}
