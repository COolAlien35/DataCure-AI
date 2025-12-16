import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { jobsApi } from '@/lib/api/services/jobs'
import { QUERY_KEYS } from '@/lib/api/endpoints'
import { mockJobs } from '@/lib/mock-data'
import type { ValidationJob, JobFilters } from '@/types'

// Get all jobs (fallback to mock data on error)
export function useJobs(filters?: JobFilters) {
    return useQuery({
        queryKey: QUERY_KEYS.jobs.list(filters as Record<string, unknown>),
        queryFn: () => jobsApi.getJobs(filters),
        // Keep data fresh for 30 seconds
        staleTime: 30 * 1000,
        // Fallback to mock data if API fails
        placeholderData: mockJobs,
    })
}

// Get single job
export function useJob(jobId: string) {
    return useQuery({
        queryKey: QUERY_KEYS.jobs.detail(jobId),
        queryFn: () => jobsApi.getJob(jobId),
        enabled: !!jobId, // Only fetch if jobId exists
        staleTime: 30 * 1000,
    })
}

// Get job records
export function useJobRecords(
    jobId: string,
    page = 1,
    pageSize = 50,
    filters?: Record<string, unknown>
) {
    return useQuery({
        queryKey: [...QUERY_KEYS.jobs.records(jobId), { page, pageSize, filters }],
        queryFn: () => jobsApi.getJobRecords(jobId, page, pageSize, filters),
        enabled: !!jobId,
        staleTime: 30 * 1000,
        // Keep previous data while fetching new page
        placeholderData: (previousData) => previousData,
    })
}

// Get single record
export function useJobRecord(jobId: string, recordId: string) {
    return useQuery({
        queryKey: QUERY_KEYS.jobs.record(jobId, recordId),
        queryFn: () => jobsApi.getJobRecord(jobId, recordId),
        enabled: !!jobId && !!recordId,
    })
}

// Get job metrics
export function useJobMetrics(jobId: string) {
    return useQuery({
        queryKey: QUERY_KEYS.jobs.metrics(jobId),
        queryFn: () => jobsApi.getJobMetrics(jobId),
        enabled: !!jobId,
        staleTime: 30 * 1000,
    })
}

// Create job mutation
export function useCreateJob() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (file: File) => jobsApi.createJob(file),
        onSuccess: () => {
            // Invalidate jobs list to show new job
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.jobs.lists() })
        },
    })
}

// Export job mutation
export function useExportJob(jobId: string) {
    return useMutation({
        mutationFn: (format: 'csv' | 'xlsx' = 'csv') => jobsApi.exportJob(jobId, format),
        onSuccess: (blob, format) => {
            // Trigger download
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `job-${jobId}.${format}`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
        },
    })
}
