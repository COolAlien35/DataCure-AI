// API Base URL - Override with environment variable
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
export const WS_BASE_URL = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8000'

// API Version
export const API_VERSION = 'v1'

// API Endpoints
export const ENDPOINTS = {
    // Jobs
    JOBS: `/api/${API_VERSION}/jobs`,
    JOB_DETAIL: (jobId: string) => `/api/${API_VERSION}/jobs/${jobId}`,
    JOB_RECORDS: (jobId: string) => `/api/${API_VERSION}/jobs/${jobId}/records`,
    JOB_RECORD_DETAIL: (jobId: string, recordId: string) =>
        `/api/${API_VERSION}/jobs/${jobId}/records/${recordId}`,
    JOB_EXPORT: (jobId: string) => `/api/${API_VERSION}/jobs/${jobId}/export`,

    // Metrics
    DASHBOARD_METRICS: `/api/${API_VERSION}/metrics/dashboard`,
    JOB_METRICS: (jobId: string) => `/api/${API_VERSION}/jobs/${jobId}/metrics`,

    // WebSocket
    WS_JOB: (jobId: string) => `/api/${API_VERSION}/ws/jobs/${jobId}`,
} as const

// Query Keys Factory
export const QUERY_KEYS = {
    jobs: {
        all: ['jobs'] as const,
        lists: () => [...QUERY_KEYS.jobs.all, 'list'] as const,
        list: (filters?: Record<string, unknown>) =>
            [...QUERY_KEYS.jobs.lists(), filters] as const,
        details: () => [...QUERY_KEYS.jobs.all, 'detail'] as const,
        detail: (id: string) => [...QUERY_KEYS.jobs.details(), id] as const,
        records: (id: string) => [...QUERY_KEYS.jobs.detail(id), 'records'] as const,
        record: (jobId: string, recordId: string) =>
            [...QUERY_KEYS.jobs.records(jobId), recordId] as const,
        metrics: (id: string) => [...QUERY_KEYS.jobs.detail(id), 'metrics'] as const,
    },
    dashboard: {
        all: ['dashboard'] as const,
        metrics: () => [...QUERY_KEYS.dashboard.all, 'metrics'] as const,
    },
} as const
