"use client"

import { useState, use, useMemo } from "react"
import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { StatusBadge } from "@/components/status-badge"
import { ProgressBar } from "@/components/progress-bar"
import { RecordDetailsModal } from "@/components/record-details-modal"
import { RecordTableSkeleton, AgentLogsSkeleton } from "@/components/skeleton-loaders"
import { NoRecordsEmpty, NoLogsEmpty, PartialSuccessState } from "@/components/empty-states"
import { ValidationPipeline } from "@/components/validation-pipeline"
import { ConfidenceLabel } from "@/components/confidence-label"
import { AgentActivityBadge } from "@/components/agent-activity-badge"
import { AuditReadyBadge } from "@/components/audit-ready-badge"
import { mockAgentLogs } from "@/lib/mock-data"
import type { ProviderRecord } from "@/types"
import { useJob, useJobRecords } from "@/hooks/api/useJobs"
import { useJobWebSocket } from "@/hooks/useJobWebSocket"
import { NeuralStreamTable } from "@/components/NeuralStreamTable"
import { AIPipelineVisualizer } from "@/components/AIPipelineVisualizer"
import { ConfidenceImprovement } from "@/components/ConfidenceImprovement"
import {
  ArrowLeft,
  Download,
  Eye,
  FileText,
  Terminal,
  Share,
  Search,
  ArrowUpDown,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Loader2,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [selectedRecord, setSelectedRecord] = useState<ProviderRecord | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [confidenceThreshold, setConfidenceThreshold] = useState([80])

  const [recordSearch, setRecordSearch] = useState("")
  const [recommendationFilter, setRecommendationFilter] = useState<string>("all")
  const [confidenceRange, setConfidenceRange] = useState([0, 100])
  const [sortField, setSortField] = useState<"confidence" | "name" | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [selectedRecords, setSelectedRecords] = useState<string[]>([])

  const [logLevelFilter, setLogLevelFilter] = useState<string>("all")
  const [agentFilter, setAgentFilter] = useState<string>("all")
  const [expandedLogs, setExpandedLogs] = useState<string[]>([])

  const [exportFormat, setExportFormat] = useState<"csv" | "json">("csv")
  const [isExporting, setIsExporting] = useState(false)

  // Fetch job from backend
  const { data: job, isLoading: jobLoading } = useJob(id)

  // Fetch records from backend
  const { data: recordsData, isLoading: recordsLoading } = useJobRecords(
    id,
    1,      // page
    10000   // pageSize - get all for now
  )

  // Connect to WebSocket for live updates
  useJobWebSocket(id)

  const isLoading = jobLoading || recordsLoading
  const allRecords = recordsData?.items || []

  const handleViewRecord = (record: ProviderRecord) => {
    setSelectedRecord(record)
    setModalOpen(true)
  }

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const filteredRecords = useMemo(() => {
    let records = allRecords.filter((record: ProviderRecord) => {
      const matchesSearch =
        record.name.toLowerCase().includes(recordSearch.toLowerCase()) || record.npi.includes(recordSearch)
      const matchesRecommendation = recommendationFilter === "all" || record.recommendation === recommendationFilter
      const matchesConfidence =
        record.overallConfidence >= confidenceRange[0] && record.overallConfidence <= confidenceRange[1]
      return matchesSearch && matchesRecommendation && matchesConfidence
    })

    if (sortField) {
      records = [...records].sort((a, b) => {
        const aVal = sortField === "confidence" ? a.overallConfidence : a.name
        const bVal = sortField === "confidence" ? b.overallConfidence : b.name
        if (typeof aVal === "number" && typeof bVal === "number") {
          return sortDirection === "asc" ? aVal - bVal : bVal - aVal
        }
        return sortDirection === "asc"
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal))
      })
    }

    return records
  }, [recordSearch, recommendationFilter, confidenceRange, sortField, sortDirection, allRecords])

  const filteredLogs = useMemo(() => {
    return mockAgentLogs.filter((log) => {
      const matchesLevel = logLevelFilter === "all" || log.status === logLevelFilter
      const matchesAgent = agentFilter === "all" || log.agentName === agentFilter
      return matchesLevel && matchesAgent
    })
  }, [logLevelFilter, agentFilter])

  const uniqueAgents = [...new Set(mockAgentLogs.map((log) => log.agentName))]

  const toggleSort = (field: "confidence" | "name") => {
    if (sortField === field) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"))
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const toggleRecordSelection = (recordId: string) => {
    setSelectedRecords((prev) => (prev.includes(recordId) ? prev.filter((id) => id !== recordId) : [...prev, recordId]))
  }

  const toggleAllRecords = () => {
    if (selectedRecords.length === filteredRecords.length) {
      setSelectedRecords([])
    } else {
      setSelectedRecords(filteredRecords.map((r) => r.id))
    }
  }

  const toggleLogExpand = (logId: string) => {
    setExpandedLogs((prev) => (prev.includes(logId) ? prev.filter((id) => id !== logId) : [...prev, logId]))
  }

  const handleExport = () => {
    setIsExporting(true)
    setTimeout(() => setIsExporting(false), 2000)
  }

  const exportableRecords = allRecords.filter((r: ProviderRecord) => r.overallConfidence >= confidenceThreshold[0])

  const getRowConfidenceClass = (confidence: number) => {
    if (confidence < 50) return "bg-error/5"
    if (confidence < 70) return "bg-warning/5"
    return ""
  }

  const getLogLevelColor = (status: string) => {
    switch (status) {
      case "error":
        return "border-l-error bg-error/5"
      case "warning":
        return "border-l-warning bg-warning/5"
      case "success":
        return "border-l-success bg-success/5"
      default:
        return "border-l-muted-foreground bg-secondary/50"
    }
  }

  const getPipelineStages = () => {
    if (job.status === "completed") {
      return [
        { id: "ingest", label: "Ingest", description: "Data ingestion and parsing", status: "completed" as const },
        { id: "npi", label: "NPI", description: "NPI validation against NPPES registry", status: "completed" as const },
        {
          id: "address",
          label: "Address",
          description: "Address standardization and geocoding",
          status: "completed" as const,
        },
        {
          id: "license",
          label: "License",
          description: "License verification with state boards",
          status: "completed" as const,
        },
        {
          id: "confidence",
          label: "Score",
          description: "Final confidence score calculation",
          status: "completed" as const,
        },
      ]
    }
    if (job.status === "processing") {
      const progress = job.progress
      return [
        { id: "ingest", label: "Ingest", description: "Data ingestion and parsing", status: "completed" as const },
        {
          id: "npi",
          label: "NPI",
          description: "NPI validation against NPPES registry",
          status: progress > 20 ? ("completed" as const) : ("active" as const),
        },
        {
          id: "address",
          label: "Address",
          description: "Address standardization and geocoding",
          status: progress > 40 ? ("completed" as const) : progress > 20 ? ("active" as const) : ("pending" as const),
        },
        {
          id: "license",
          label: "License",
          description: "License verification with state boards",
          status: progress > 60 ? ("completed" as const) : progress > 40 ? ("active" as const) : ("pending" as const),
        },
        {
          id: "confidence",
          label: "Score",
          description: "Final confidence score calculation",
          status: progress > 80 ? ("active" as const) : ("pending" as const),
        },
      ]
    }
    return [
      { id: "ingest", label: "Ingest", description: "Data ingestion and parsing", status: "pending" as const },
      { id: "npi", label: "NPI", description: "NPI validation against NPPES registry", status: "pending" as const },
      {
        id: "address",
        label: "Address",
        description: "Address standardization and geocoding",
        status: "pending" as const,
      },
      {
        id: "license",
        label: "License",
        description: "License verification with state boards",
        status: "pending" as const,
      },
      {
        id: "confidence",
        label: "Score",
        description: "Final confidence score calculation",
        status: "pending" as const,
      },
    ]
  }

  return (
    <AppShell>
      {isLoading || !job ? (
        <div className="space-y-6">
          <RecordTableSkeleton />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/jobs">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Back to jobs</span>
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{job.name}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-mono">{job.id}</span>
                  <span>•</span>
                  <span>Created {new Date(job.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AuditReadyBadge variant="compact" />
              <StatusBadge status={job.status} />
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Validation Pipeline</h3>
                  <ValidationPipeline stages={getPipelineStages()} />
                </div>
                <AuditReadyBadge
                  verifiedAgents={6}
                  verifiedSources={["NPPES Registry", "State Licensing Boards", "Google Maps API", "CMS Taxonomy"]}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Filename</p>
                  <p className="font-medium">{job.filename}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Records Processed</p>
                  <p className="font-medium">
                    {job.completedRecords.toLocaleString()} / {job.totalRecords.toLocaleString()}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Overall Progress</span>
                    <ProgressBar value={job.progress} className="flex-1" />
                    <span className="text-sm font-medium">{job.progress}%</span>
                  </div>
                  {job.status === "processing" && job.etaRemaining && (
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      ETA: {job.etaRemaining}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Validation Summary</p>
                  <div className="flex flex-wrap gap-2">
                    {job.autoApprovedPercent !== undefined && (
                      <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        {job.autoApprovedPercent}% Auto-approved
                      </Badge>
                    )}
                    {job.manualReviewPercent !== undefined && (
                      <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                        {job.manualReviewPercent}% Manual Review
                      </Badge>
                    )}
                    {job.rejectedPercent !== undefined && (
                      <Badge variant="outline" className="bg-error/10 text-error border-error/30">
                        {job.rejectedPercent}% Flagged
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {job.status === "failed" && (
            <PartialSuccessState
              successPercent={Math.round((job.completedRecords / job.totalRecords) * 100)}
              totalRecords={job.totalRecords}
              failedCount={job.totalRecords - job.completedRecords}
              onRetry={() => { }}
            />
          )}

          {/* Tabs */}
          <Tabs defaultValue="records" className="space-y-4">
            <TabsList className="bg-secondary">
              <TabsTrigger value="records" className="gap-2">
                <FileText className="h-4 w-4" />
                Validated Records
              </TabsTrigger>
              <TabsTrigger value="logs" className="gap-2">
                <Terminal className="h-4 w-4" />
                Agent Logs
              </TabsTrigger>
              <TabsTrigger value="export" className="gap-2">
                <Share className="h-4 w-4" />
                Export
              </TabsTrigger>
            </TabsList>

            {/* Records Tab */}
            <TabsContent value="records" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Each provider record below has been validated by our AI agents. Click any row to view detailed validation
                results and data changes.
              </p>

              {isLoading ? (
                <RecordTableSkeleton rows={5} />
              ) : (
                <>
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by provider name or NPI..."
                        value={recordSearch}
                        onChange={(e) => setRecordSearch(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                    <Select value={recommendationFilter} onValueChange={setRecommendationFilter}>
                      <SelectTrigger className="w-full lg:w-[180px]">
                        <SelectValue placeholder="Recommendation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Recommendations</SelectItem>
                        <SelectItem value="auto-approve">Auto Approve</SelectItem>
                        <SelectItem value="manual-review">Manual Review</SelectItem>
                        <SelectItem value="reject">Reject</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center gap-3 min-w-[200px]">
                      <span className="text-sm text-muted-foreground whitespace-nowrap">Confidence:</span>
                      <Slider
                        value={confidenceRange}
                        onValueChange={setConfidenceRange}
                        min={0}
                        max={100}
                        step={5}
                        className="flex-1"
                      />
                      <span className="text-sm font-mono text-muted-foreground w-20">
                        {confidenceRange[0]}-{confidenceRange[1]}%
                      </span>
                    </div>
                  </div>

                  {selectedRecords.length > 0 && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="text-sm font-medium">
                        {selectedRecords.length} record{selectedRecords.length > 1 ? "s" : ""} selected
                      </span>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedRecords([])}>
                        Clear selection
                      </Button>
                    </div>
                  )}

                  {filteredRecords.length === 0 ? (
                    <NoRecordsEmpty />
                  ) : (
                    <div className="rounded-lg border border-border overflow-hidden">
                      <NeuralStreamTable stagger={0.04} delay={0.1}>
                        <TableHeader>
                          <TableRow className="bg-muted/50 hover:bg-muted/50">
                            <TableHead className="w-10">
                              <Checkbox
                                checked={selectedRecords.length === filteredRecords.length && filteredRecords.length > 0}
                                onCheckedChange={toggleAllRecords}
                              />
                            </TableHead>
                            <TableHead
                              className="text-muted-foreground cursor-pointer hover:text-foreground"
                              onClick={() => toggleSort("name")}
                            >
                              <div className="flex items-center gap-1">
                                Provider Name
                                <ArrowUpDown className="h-3 w-3" />
                              </div>
                            </TableHead>
                            <TableHead className="text-muted-foreground">NPI</TableHead>
                            <TableHead
                              className="text-muted-foreground cursor-pointer hover:text-foreground"
                              onClick={() => toggleSort("confidence")}
                            >
                              <div className="flex items-center gap-1">
                                Confidence
                                <ArrowUpDown className="h-3 w-3" />
                              </div>
                            </TableHead>
                            <TableHead className="text-muted-foreground">Recommendation</TableHead>
                            <TableHead className="text-right text-muted-foreground">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredRecords.map((record) => (
                            <TableRow
                              key={record.id}
                              className={cn("hover:bg-muted/30", getRowConfidenceClass(record.overallConfidence))}
                              data-animate="table-row"
                              data-recommendation={record.recommendation}
                            >
                              <TableCell>
                                <Checkbox
                                  checked={selectedRecords.includes(record.id)}
                                  onCheckedChange={() => toggleRecordSelection(record.id)}
                                />
                              </TableCell>
                              <TableCell>
                                <div>
                                  <span className="font-medium">{record.name}</span>
                                  {record.recommendation === "manual-review" && (
                                    <Badge
                                      variant="outline"
                                      className="ml-2 text-[10px] bg-warning/10 text-warning border-warning/30"
                                    >
                                      Review Required
                                    </Badge>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="font-mono text-sm text-muted-foreground">{record.npi}</TableCell>
                              <TableCell>
                                <ConfidenceLabel value={record.overallConfidence} size="sm" />
                              </TableCell>
                              <TableCell>
                                <StatusBadge status={record.recommendation} />
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm" onClick={() => handleViewRecord(record)}>
                                  <Eye className="h-4 w-4 mr-1" />
                                  Details
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </NeuralStreamTable>
                    </div>
                  )}
                </>
              )}
            </TabsContent>

            {/* Agent Logs Tab */}
            <TabsContent value="logs" className="space-y-4">
              {isLoading ? (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-base">Agent Execution Logs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AgentLogsSkeleton rows={6} />
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-base">Agent Execution Logs</CardTitle>
                        <CardDescription>
                          Complete audit trail of all AI agent activity. Logs are immutable and timestamped for
                          compliance.
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Select value={logLevelFilter} onValueChange={setLogLevelFilter}>
                          <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Log level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Levels</SelectItem>
                            <SelectItem value="info">Info</SelectItem>
                            <SelectItem value="success">Success</SelectItem>
                            <SelectItem value="warning">Warning</SelectItem>
                            <SelectItem value="error">Error</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select value={agentFilter} onValueChange={setAgentFilter}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Agent" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Agents</SelectItem>
                            {uniqueAgents.map((agent) => (
                              <SelectItem key={agent} value={agent}>
                                {agent}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {filteredLogs.length === 0 ? (
                      <NoLogsEmpty />
                    ) : (
                      <div className="space-y-2 max-h-[500px] overflow-y-auto">
                        {filteredLogs.map((log) => (
                          <div
                            key={log.id}
                            className={cn(
                              "rounded-lg p-4 font-mono text-sm border-l-4 transition-colors",
                              getLogLevelColor(log.status),
                            )}
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-24">
                                <StatusBadge status={log.status} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold text-foreground">{log.agentName}</span>
                                  <span className="text-muted-foreground">•</span>
                                  <span className="text-muted-foreground">{log.executionTime}</span>
                                </div>
                                <p className="text-muted-foreground break-words">
                                  {log.status === "error"
                                    ? log.message
                                      .replace("Failed", "Unable to complete")
                                      .replace("timeout", "service temporarily unavailable")
                                    : log.message}
                                </p>
                                {log.structuredOutput && (
                                  <button
                                    onClick={() => toggleLogExpand(log.id)}
                                    className="flex items-center gap-1 mt-2 text-xs text-primary hover:underline"
                                  >
                                    {expandedLogs.includes(log.id) ? (
                                      <ChevronDown className="h-3 w-3" />
                                    ) : (
                                      <ChevronRight className="h-3 w-3" />
                                    )}
                                    View structured output
                                  </button>
                                )}
                                {expandedLogs.includes(log.id) && log.structuredOutput && (
                                  <pre className="mt-2 p-3 rounded bg-background/50 text-xs overflow-x-auto">
                                    {JSON.stringify(log.structuredOutput, null, 2)}
                                  </pre>
                                )}
                              </div>
                              <div className="flex-shrink-0 text-xs text-muted-foreground">
                                {formatTimestamp(log.timestamp)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Export Tab */}
            <TabsContent value="export" className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">Export Validated Dataset</CardTitle>
                      <CardDescription>
                        Download AI-validated provider records. Only records meeting your confidence threshold will be
                        included.
                      </CardDescription>
                    </div>
                    <AuditReadyBadge variant="compact" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Minimum Confidence Threshold</label>
                      <span className="text-sm text-muted-foreground font-mono">{confidenceThreshold[0]}%</span>
                    </div>
                    <Slider
                      value={confidenceThreshold}
                      onValueChange={setConfidenceThreshold}
                      max={100}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground">
                      Records with confidence scores at or above <strong>{confidenceThreshold[0]}%</strong> will be
                      exported. Lower-confidence records require manual review before export.
                    </p>
                  </div>

                  {confidenceThreshold[0] < 50 && (
                    <Alert className="bg-warning/10 border-warning/30">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <AlertTitle className="text-warning">Low Threshold Warning</AlertTitle>
                      <AlertDescription className="text-warning/80">
                        Exporting records below 50% confidence may include unreliable data. We recommend manual review of
                        these records before use in production systems.
                      </AlertDescription>
                    </Alert>
                  )}

                  {confidenceThreshold[0] >= 80 && (
                    <Alert className="bg-success/10 border-success/30">
                      <ShieldCheck className="h-4 w-4 text-success" />
                      <AlertTitle className="text-success">High Confidence Export</AlertTitle>
                      <AlertDescription className="text-success/80">
                        Records at this threshold have been thoroughly validated and cross-referenced with multiple
                        authoritative sources.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Export Format</label>
                    <div className="flex gap-2">
                      <Button
                        variant={exportFormat === "csv" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setExportFormat("csv")}
                      >
                        CSV
                      </Button>
                      <Button
                        variant={exportFormat === "json" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setExportFormat("json")}
                      >
                        JSON
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg bg-secondary/50 p-4">
                    <div className="flex-1">
                      <p className="font-medium">{exportableRecords.length} records ready</p>
                      <p className="text-sm text-muted-foreground">
                        {exportableRecords.length > 0
                          ? `Matching ${confidenceThreshold[0]}%+ confidence threshold`
                          : "No records match your criteria"}
                      </p>
                    </div>
                    <Button onClick={handleExport} disabled={isExporting || exportableRecords.length === 0}>
                      {isExporting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Preparing Export...
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          Export as {exportFormat.toUpperCase()}
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
      <RecordDetailsModal record={selectedRecord} open={modalOpen} onOpenChange={setModalOpen} />
    </AppShell>
  )
}
