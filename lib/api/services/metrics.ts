import { apiClient } from '../client'
import { ENDPOINTS } from '../endpoints'
import type { DashboardMetrics } from '@/types'

// Metrics API Service
export const metricsApi = {
    // Get dashboard-level metrics
    async getDashboardMetrics(): Promise<DashboardMetrics> {
        const { data } = await apiClient.get<DashboardMetrics>(
            ENDPOINTS.DASHBOARD_METRICS
        )
        return data
    },
}
