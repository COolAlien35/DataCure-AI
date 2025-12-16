import { useState, useEffect } from "react"
import type { ValidationJob } from "@/types"

/**
 * Hook to manage animated job progress for processing jobs
 * Simulates smooth progress animation and prepares for WebSocket updates
 */
export function useJobProgress(job: ValidationJob) {
    const [animatedProgress, setAnimatedProgress] = useState(job.progress)

    useEffect(() => {
        // For processing jobs, animate progress smoothly
        if (job.status === "processing") {
            setAnimatedProgress(job.progress)

            // Simulate incremental progress updates
            // TODO: Replace with WebSocket updates when backend is ready
            const interval = setInterval(() => {
                setAnimatedProgress((prev) => {
                    if (prev >= 100) return 100
                    return Math.min(prev + 0.5, job.progress + 5)
                })
            }, 500)

            return () => clearInterval(interval)
        } else {
            // For completed/failed jobs, show exact progress
            setAnimatedProgress(job.progress)
        }
    }, [job.status, job.progress])

    return animatedProgress
}
