/**
 * Core domain types for DataCure AI validation platform
 * 
 * These interfaces define the shape of data throughout the application.
 * Currently used with mock data, ready for API integration.
 */

/**
 * Validation job tracking provider data processing
 */
export interface ValidationJob {
  id: string
  name: string
  filename: string
  status: "queued" | "processing" | "completed" | "failed"
  progress: number
  completedRecords: number
  totalRecords: number
  createdAt: string
  autoApprovedPercent?: number
  manualReviewPercent?: number
  rejectedPercent?: number
  etaRemaining?: string
}

/**
 * Provider record with validation results
 */
export interface ProviderRecord {
  id: string
  name: string
  npi: string
  address: string
  phone: string
  specialty: string
  licenseStatus: string
  // Confidence scores
  originalConfidence?: number  // Before validation (for demo story)
  overallConfidence: number     // After validation
  npiConfidence: number
  addressConfidence: number
  licenseConfidence: number
  recommendation: "auto-approve" | "manual-review" | "reject"
  severity: "low" | "medium" | "high"
  validatedAt: string
  agentsInvolved: string[]
  enrichedData?: {
    name: string
    address: string
    phone: string
    specialty: string
    licenseStatus: string
  }
}

/**
 * Agent execution log entry
 */
export interface AgentLog {
  id: string
  agentName: string
  status: "success" | "warning" | "error" | "info"
  executionTime: string
  message: string
  timestamp: string
  structuredOutput?: Record<string, unknown>
}

/**
 * Dashboard metrics aggregation
 */
export interface DashboardMetrics {
  totalProvidersValidated: number
  totalProvidersChange: number
  averageConfidenceScore: number
  confidenceChange: number
  activeJobs: number
  activeJobsChange: number
  recordsRequiringReview: number
  reviewChange: number
}

/**
 * Job query filters
 */
export interface JobFilters {
  status?: string
  search?: string
  page?: number
  pageSize?: number
}

/**
 * Metric tooltip descriptions
 */
export interface MetricTooltips {
  totalProviders: string
  averageConfidence: string
  activeJobs: string
  recordsReview: string
}

/**
 * Pipeline stage configuration
 */
export interface PipelineStage {
  id: string
  label: string
  description: string
  status: "pending" | "active" | "completed" | "error"
}

/**
 * Status types used across badges and indicators
 */
export type StatusType =
  | "queued"
  | "processing"
  | "completed"
  | "failed"
  | "auto-approve"
  | "manual-review"
  | "reject"
  | "success"
  | "warning"
  | "error"
  | "info"

/**
 * API response wrapper (for future use)
 * @template T The type of data in the response
 */
export interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

/**
 * Paginated API response (for future use)
 * @template T The type of items in the paginated list
 */
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}
