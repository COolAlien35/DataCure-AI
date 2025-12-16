/**
 * Provider records API service layer
 * 
 * Centralizes all provider record related API calls. Currently returns mock data.
 * TODO: Replace with actual API calls when backend is ready
 */

import { mockProviderRecords } from "@/lib/mock-data"
import type { ProviderRecord } from "@/types"

/**
 * Fetch provider records for a specific job
 * TODO: Replace with GET /api/jobs/:jobId/records
 * 
 * Future implementation should support:
 * - Pagination parameters (page, pageSize)
 * - Filtering by recommendation type
 * - Sorting by confidence, name, etc.
 * - Confidence range filtering
 */
export async function getRecordsByJobId(
    jobId: string,
    options?: {
        page?: number
        pageSize?: number
        recommendation?: string
        minConfidence?: number
        maxConfidence?: number
        search?: string
    }
): Promise<ProviderRecord[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Mock implementation - returns all records regardless of jobId
    let records = [...mockProviderRecords]

    // Apply filters if provided
    if (options?.recommendation && options.recommendation !== "all") {
        records = records.filter((r) => r.recommendation === options.recommendation)
    }

    if (options?.minConfidence !== undefined) {
        records = records.filter((r) => r.overallConfidence >= options.minConfidence!)
    }

    if (options?.maxConfidence !== undefined) {
        records = records.filter((r) => r.overallConfidence <= options.maxConfidence!)
    }

    if (options?.search) {
        const query = options.search.toLowerCase()
        records = records.filter(
            (r) =>
                r.name.toLowerCase().includes(query) ||
                r.npi.includes(query)
        )
    }

    return records
}

/**
 * Fetch a single provider record by ID
 * TODO: Replace with GET /api/records/:id
 */
export async function getRecordById(recordId: string): Promise<ProviderRecord | null> {
    await new Promise((resolve) => setTimeout(resolve, 50))
    return mockProviderRecords.find((record) => record.id === recordId) || null
}

/**
 * Update provider record recommendation
 * TODO: Replace with PATCH /api/records/:id
 */
export async function updateRecordRecommendation(
    recordId: string,
    recommendation: "auto-approve" | "manual-review" | "reject"
): Promise<ProviderRecord> {
    await new Promise((resolve) => setTimeout(resolve, 100))

    const record = await getRecordById(recordId)
    if (!record) throw new Error("Record not found")

    return { ...record, recommendation }
}

/**
 * Export records that meet confidence threshold
 * TODO: Replace with POST /api/jobs/:jobId/export
 */
export async function exportRecords(
    jobId: string,
    format: "csv" | "json",
    minConfidence: number
): Promise<Blob> {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const records = await getRecordsByJobId(jobId, { minConfidence })
    const data = JSON.stringify(records, null, 2)

    return new Blob([data], { type: `application/${format}` })
}
