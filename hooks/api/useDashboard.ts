import { useQuery } from '@tanstack/react-query'
import { metricsApi } from '@/lib/api/services/metrics'
import { QUERY_KEYS } from '@/lib/api/endpoints'
import { jobsApi } from '@/lib/api/services/jobs'
import { dashboardMetrics, mockJobs } from '@/lib/mock-data'

// Get dashboard metrics (fallback to mock data on error)
export function useDashboardMetrics() {
    return useQuery({
        queryKey: QUERY_KEYS.dashboard.metrics(),
        queryFn: () => metricsApi.getDashboardMetrics(),
        staleTime: 60 * 1000, // 1 minute - metrics don't change as frequently
        // Fallback to mock data if API fails
        placeholderData: dashboardMetrics,
    })
}

// Get recent jobs for dashboard (fallback to mock data on error)
export function useRecentJobs(limit = 4) {
    return useQuery({
        queryKey: [...QUERY_KEYS.jobs.lists(), { limit }],
        queryFn: async () => {
            const jobs = await jobsApi.getJobs()
            return jobs.slice(0, limit)
        },
        staleTime: 30 * 1000,
        // Fallback to mock data if API fails
        placeholderData: mockJobs.slice(0, limit),
    })
}
