import { apiClient } from '../client'
import { ENDPOINTS } from '../endpoints'
import type {
    ValidationJob,
    ProviderRecord,
    JobFilters,
    PaginatedResponse,
} from '@/types'

// Jobs API Service
export const jobsApi = {
    // Get all jobs with optional filtering
    async getJobs(filters?: JobFilters): Promise<ValidationJob[]> {
        const params = new URLSearchParams()
        if (filters?.status) params.append('status', filters.status)
        if (filters?.search) params.append('search', filters.search)

        const { data } = await apiClient.get<ValidationJob[]>(
            `${ENDPOINTS.JOBS}?${params.toString()}`
        )
        return data
    },

    // Get single job by ID
    async getJob(jobId: string): Promise<ValidationJob> {
        const { data } = await apiClient.get<ValidationJob>(
            ENDPOINTS.JOB_DETAIL(jobId)
        )
        return data
    },

    // Get job records with pagination
    async getJobRecords(
        jobId: string,
        page = 1,
        pageSize = 50,
        filters?: Record<string, unknown>
    ): Promise<PaginatedResponse<ProviderRecord>> {
        const params = new URLSearchParams({
            page: page.toString(),
            page_size: pageSize.toString(),
        })

        if (filters) {
            Object.entries(filters).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    params.append(key, String(value))
                }
            })
        }

        const { data } = await apiClient.get<PaginatedResponse<ProviderRecord>>(
            `${ENDPOINTS.JOB_RECORDS(jobId)}?${params.toString()}`
        )
        return data
    },

    // Get single record detail
    async getJobRecord(jobId: string, recordId: string): Promise<ProviderRecord> {
        const { data } = await apiClient.get<ProviderRecord>(
            ENDPOINTS.JOB_RECORD_DETAIL(jobId, recordId)
        )
        return data
    },

    // Create new validation job
    async createJob(file: File): Promise<ValidationJob> {
        const formData = new FormData()
        formData.append('file', file)

        const { data } = await apiClient.post<ValidationJob>(
            ENDPOINTS.JOBS,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        return data
    },

    // Export job results
    async exportJob(jobId: string, format: 'csv' | 'xlsx' = 'csv'): Promise<Blob> {
        const { data } = await apiClient.post<Blob>(
            ENDPOINTS.JOB_EXPORT(jobId),
            { format },
            {
                responseType: 'blob',
            }
        )
        return data
    },

    // Get job metrics
    async getJobMetrics(jobId: string) {
        const { data } = await apiClient.get(
            ENDPOINTS.JOB_METRICS(jobId)
        )
        return data
    },
}
