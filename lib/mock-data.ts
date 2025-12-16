/**
 * Mock data for DataCure AI validation platform
 * 
 * TODO: Replace with API calls when backend is ready
 * - Jobs: GET /api/jobs
 * - Records: GET /api/jobs/:id/records
 * - Logs: GET /api/jobs/:id/logs
 * - Metrics: GET /api/dashboard/metrics
 */

import type { ValidationJob, ProviderRecord, AgentLog, DashboardMetrics, MetricTooltips } from "@/types"

/**
 * Mock validation jobs
 * TODO: Replace with API call - GET /api/jobs
 */
export const mockJobs: ValidationJob[] = [
  {
    id: "JOB-001",
    name: "Q4 Provider Update",
    filename: "providers_q4_2024.csv",
    status: "completed",
    progress: 100,
    completedRecords: 2847,
    totalRecords: 2847,
    createdAt: "2024-12-14T10:30:00Z",
    autoApprovedPercent: 78,
    manualReviewPercent: 18,
    rejectedPercent: 4,
  },
  {
    id: "JOB-002",
    name: "New Enrollments Dec",
    filename: "new_providers_dec.csv",
    status: "processing",
    progress: 67,
    completedRecords: 1205,
    totalRecords: 1800,
    createdAt: "2024-12-15T08:15:00Z",
    autoApprovedPercent: 72,
    manualReviewPercent: 22,
    rejectedPercent: 6,
    etaRemaining: "~12 min",
  },
  {
    id: "JOB-003",
    name: "Address Verification",
    filename: "address_updates.csv",
    status: "queued",
    progress: 0,
    completedRecords: 0,
    totalRecords: 950,
    createdAt: "2024-12-15T09:45:00Z",
    etaRemaining: "Pending",
  },
  {
    id: "JOB-004",
    name: "Specialty Review",
    filename: "specialty_audit.csv",
    status: "failed",
    progress: 23,
    completedRecords: 115,
    totalRecords: 500,
    createdAt: "2024-12-13T14:20:00Z",
    autoApprovedPercent: 65,
    manualReviewPercent: 30,
    rejectedPercent: 5,
  },
  {
    id: "JOB-005",
    name: "License Renewal Check",
    filename: "license_check_dec.csv",
    status: "completed",
    progress: 100,
    completedRecords: 1200,
    totalRecords: 1200,
    createdAt: "2024-12-12T16:00:00Z",
    autoApprovedPercent: 82,
    manualReviewPercent: 14,
    rejectedPercent: 4,
  },
  {
    id: "JOB-006",
    name: "Network Expansion",
    filename: "new_network_providers.csv",
    status: "processing",
    progress: 34,
    completedRecords: 340,
    totalRecords: 1000,
    createdAt: "2024-12-15T11:00:00Z",
    autoApprovedPercent: 70,
    manualReviewPercent: 25,
    rejectedPercent: 5,
    etaRemaining: "~28 min",
  },
]

/**
 * Mock provider records
 * TODO: Replace with API call - GET /api/jobs/:id/records
 */
export const mockProviderRecords: ProviderRecord[] = [
  {
    id: "REC-001",
    name: "Dr. Sarah Johnson",
    npi: "1234567890",
    address: "123 Medical Center Dr, Boston, MA 02115",
    phone: "(617) 555-0123",
    specialty: "Internal Medicine",
    licenseStatus: "Active",
    overallConfidence: 98,
    npiConfidence: 100,
    addressConfidence: 95,
    licenseConfidence: 99,
    recommendation: "auto-approve",
    severity: "low",
    validatedAt: "2024-12-15T08:20:00Z",
    agentsInvolved: ["NPI Validator", "Address Enrichment", "License Verification"],
    enrichedData: {
      name: "Dr. Sarah M. Johnson, MD",
      address: "123 Medical Center Drive, Suite 400, Boston, MA 02115",
      phone: "(617) 555-0123",
      specialty: "Internal Medicine - General",
      licenseStatus: "Active - Expires 12/2025",
    },
  },
  {
    id: "REC-002",
    name: "Dr. Michael Chen",
    npi: "0987654321",
    address: "456 Healthcare Blvd, Cambridge, MA",
    phone: "(617) 555-0456",
    specialty: "Cardiology",
    licenseStatus: "Active",
    overallConfidence: 72,
    npiConfidence: 100,
    addressConfidence: 65,
    licenseConfidence: 85,
    recommendation: "manual-review",
    severity: "medium",
    validatedAt: "2024-12-15T08:22:00Z",
    agentsInvolved: ["NPI Validator", "Address Enrichment", "License Verification", "Web Scraper"],
    enrichedData: {
      name: "Dr. Michael Chen, MD, FACC",
      address: "456 Healthcare Boulevard, Floor 2, Cambridge, MA 02139",
      phone: "(617) 555-0456",
      specialty: "Cardiovascular Disease",
      licenseStatus: "Active - Expires 06/2025",
    },
  },
  {
    id: "REC-003",
    name: "Dr. Emily Rodriguez",
    npi: "1122334455",
    address: "789 Wellness Way, Somerville, MA",
    phone: "(617) 555-0789",
    specialty: "Pediatrics",
    licenseStatus: "Expired",
    overallConfidence: 35,
    npiConfidence: 90,
    addressConfidence: 40,
    licenseConfidence: 0,
    recommendation: "reject",
    severity: "high",
    validatedAt: "2024-12-15T08:24:00Z",
    agentsInvolved: ["NPI Validator", "Address Enrichment", "License Verification"],
    enrichedData: {
      name: "Dr. Emily Rodriguez, MD",
      address: "789 Wellness Way, Somerville, MA 02143",
      phone: "(617) 555-0789",
      specialty: "Pediatrics",
      licenseStatus: "Expired - 03/2024",
    },
  },
  {
    id: "REC-004",
    name: "Dr. James Wilson",
    npi: "5566778899",
    address: "321 Health Plaza, Boston, MA 02116",
    phone: "(617) 555-0321",
    specialty: "Orthopedics",
    licenseStatus: "Active",
    overallConfidence: 94,
    npiConfidence: 98,
    addressConfidence: 92,
    licenseConfidence: 95,
    recommendation: "auto-approve",
    severity: "low",
    validatedAt: "2024-12-15T08:26:00Z",
    agentsInvolved: ["NPI Validator", "Address Enrichment", "License Verification", "Specialty Classifier"],
    enrichedData: {
      name: "Dr. James R. Wilson, MD",
      address: "321 Health Plaza, Suite 100, Boston, MA 02116",
      phone: "(617) 555-0321",
      specialty: "Orthopedic Surgery",
      licenseStatus: "Active - Expires 09/2026",
    },
  },
  {
    id: "REC-005",
    name: "Dr. Lisa Park",
    npi: "6677889900",
    address: "555 Care Center Ave, Brookline, MA",
    phone: "(617) 555-0555",
    specialty: "Dermatology",
    licenseStatus: "Active",
    overallConfidence: 68,
    npiConfidence: 85,
    addressConfidence: 60,
    licenseConfidence: 78,
    recommendation: "manual-review",
    severity: "medium",
    validatedAt: "2024-12-15T08:28:00Z",
    agentsInvolved: ["NPI Validator", "Address Enrichment", "License Verification", "Web Scraper"],
    enrichedData: {
      name: "Dr. Lisa Park, MD, FAAD",
      address: "555 Care Center Avenue, Brookline, MA 02445",
      phone: "(617) 555-0555",
      specialty: "Dermatology",
      licenseStatus: "Active - Expires 01/2026",
    },
  },
  {
    id: "REC-006",
    name: "Dr. Robert Kim",
    npi: "7788990011",
    address: "200 Clinic Road, Newton, MA",
    phone: "(617) 555-0200",
    specialty: "Family Medicine",
    licenseStatus: "Active",
    overallConfidence: 88,
    npiConfidence: 95,
    addressConfidence: 85,
    licenseConfidence: 90,
    recommendation: "auto-approve",
    severity: "low",
    validatedAt: "2024-12-15T08:30:00Z",
    agentsInvolved: ["NPI Validator", "Address Enrichment", "License Verification"],
    enrichedData: {
      name: "Dr. Robert Kim, MD",
      address: "200 Clinic Road, Suite 5, Newton, MA 02458",
      phone: "(617) 555-0200",
      specialty: "Family Medicine",
      licenseStatus: "Active - Expires 08/2025",
    },
  },
  {
    id: "REC-007",
    name: "Dr. Amanda Foster",
    npi: "8899001122",
    address: "777 Medical Way, Quincy, MA",
    phone: "(617) 555-0777",
    specialty: "Psychiatry",
    licenseStatus: "Pending Renewal",
    overallConfidence: 52,
    npiConfidence: 80,
    addressConfidence: 55,
    licenseConfidence: 45,
    recommendation: "manual-review",
    severity: "high",
    validatedAt: "2024-12-15T08:32:00Z",
    agentsInvolved: ["NPI Validator", "Address Enrichment", "License Verification", "Web Scraper"],
    enrichedData: {
      name: "Dr. Amanda Foster, MD",
      address: "777 Medical Way, Quincy, MA 02169",
      phone: "(617) 555-0777",
      specialty: "Psychiatry",
      licenseStatus: "Pending Renewal - Due 01/2025",
    },
  },
]

/**
 * Mock agent execution logs
 * TODO: Replace with API call - GET /api/jobs/:id/logs
 * Consider WebSocket for real-time log streaming
 */
export const mockAgentLogs: AgentLog[] = [
  {
    id: "LOG-001",
    agentName: "NPI Validator",
    status: "success",
    executionTime: "124ms",
    message: "Successfully validated NPI against NPPES registry",
    timestamp: "2024-12-15T08:15:32Z",
    structuredOutput: {
      npi: "1234567890",
      entityType: "Individual",
      status: "Active",
      lastUpdated: "2024-11-01",
    },
  },
  {
    id: "LOG-002",
    agentName: "Address Enrichment",
    status: "success",
    executionTime: "892ms",
    message: "Address standardized and geocoded via Google Maps API",
    timestamp: "2024-12-15T08:15:33Z",
    structuredOutput: {
      inputAddress: "123 Medical Center Dr, Boston, MA",
      standardizedAddress: "123 Medical Center Drive, Suite 400, Boston, MA 02115",
      confidence: 0.95,
      geocoded: true,
    },
  },
  {
    id: "LOG-003",
    agentName: "License Verification",
    status: "warning",
    executionTime: "2.1s",
    message: "License found but approaching expiration date",
    timestamp: "2024-12-15T08:15:35Z",
    structuredOutput: {
      licenseNumber: "MA-12345",
      expirationDate: "2025-03-15",
      daysUntilExpiration: 90,
      status: "Active",
    },
  },
  {
    id: "LOG-004",
    agentName: "Web Scraper",
    status: "error",
    executionTime: "5.2s",
    message: "Failed to retrieve data from hospital website - timeout",
    timestamp: "2024-12-15T08:15:40Z",
    structuredOutput: {
      targetUrl: "https://hospital.example.com/providers",
      errorCode: "TIMEOUT",
      retryCount: 3,
    },
  },
  {
    id: "LOG-005",
    agentName: "Specialty Classifier",
    status: "success",
    executionTime: "456ms",
    message: "Specialty code mapped to CMS taxonomy",
    timestamp: "2024-12-15T08:15:41Z",
    structuredOutput: {
      inputSpecialty: "Internal Medicine",
      taxonomyCode: "207R00000X",
      classification: "Internal Medicine",
    },
  },
  {
    id: "LOG-006",
    agentName: "Duplicate Detector",
    status: "info",
    executionTime: "234ms",
    message: "No duplicate records found in database",
    timestamp: "2024-12-15T08:15:41Z",
    structuredOutput: {
      recordsScanned: 12847,
      potentialMatches: 0,
      confidence: 1.0,
    },
  },
  {
    id: "LOG-007",
    agentName: "NPI Validator",
    status: "info",
    executionTime: "98ms",
    message: "Starting NPI validation batch process",
    timestamp: "2024-12-15T08:15:30Z",
  },
  {
    id: "LOG-008",
    agentName: "Address Enrichment",
    status: "warning",
    executionTime: "1.5s",
    message: "Partial address match - missing suite number",
    timestamp: "2024-12-15T08:15:45Z",
    structuredOutput: {
      inputAddress: "456 Healthcare Blvd, Cambridge, MA",
      matchConfidence: 0.75,
      missingComponents: ["suite_number", "zip_code"],
    },
  },
]

/**
 * Mock dashboard metrics
 * TODO: Replace with API call - GET /api/dashboard/metrics
 */
export const dashboardMetrics: DashboardMetrics = {
  totalProvidersValidated: 12847,
  totalProvidersChange: 12.5,
  averageConfidenceScore: 87.3,
  confidenceChange: 2.1,
  activeJobs: 3,
  activeJobsChange: -1,
  recordsRequiringReview: 234,
  reviewChange: -18,
}

export const metricTooltips: MetricTooltips = {
  totalProviders:
    "Total number of healthcare providers validated through the AI pipeline in the current billing period. Each provider is cross-referenced against government registries.",
  averageConfidence:
    "The weighted average confidence score across all validated records. Scores above 80% indicate high-quality data matches with authoritative sources like NPPES and state licensing boards.",
  activeJobs:
    "Number of validation jobs currently queued or being processed by AI agents. Jobs typically complete within minutes depending on file size.",
  recordsReview:
    "Records flagged for manual review due to confidence scores below threshold or data discrepancies that require human verification before export.",
}
