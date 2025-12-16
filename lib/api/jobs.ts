/**
 * Jobs API service layer
 * 
 * Centralizes all job-related API calls. Currently returns mock data.
 * TODO: Replace with actual API calls when backend is ready
 */

import { mockJobs } from "@/lib/mock-data"
import type { ValidationJob, ApiResponse, PaginatedResponse } from "@/types"

/**
 * Fetch all validation jobs
 * TODO: Replace with GET /api/jobs
 */
export async function getJobs(): Promise<ValidationJob[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockJobs
}

/**
 * Fetch a single job by ID
 * TODO: Replace with GET /api/jobs/:id
 */
export async function getJobById(id: string): Promise<ValidationJob | null> {
    await new Promise((resolve) => setTimeout(resolve, 50))
    return mockJobs.find((job) => job.id === id) || null
}

/**
 * Create a new validation job from uploaded file
 * TODO: Replace with POST /api/jobs
 */
export async function createJob(file: File): Promise<ValidationJob> {
    await new Promise((resolve) => setTimeout(resolve, 200))

    // Mock implementation
    const newJob: ValidationJob = {
        id: `JOB-${Date.now()}`,
        name: file.name.replace(".csv", ""),
        filename: file.name,
        status: "queued",
        progress: 0,
        completedRecords: 0,
        totalRecords: 0,
        createdAt: new Date().toISOString(),
    }

    return newJob
}

/**
 * Cancel a running job
 * TODO: Replace with DELETE /api/jobs/:id
 */
export async function cancelJob(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    // Implementation pending
}

/**
 * Retry a failed job
 * TODO: Replace with POST /api/jobs/:id/retry
 */
export async function retryJob(id: string): Promise<ValidationJob> {
    await new Promise((resolve) => setTimeout(resolve, 150))
    const job = await getJobById(id)
    if (!job) throw new Error("Job not found")
    return { ...job, status: "queued", progress: 0 }
}
