"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NeuralStreamTable } from "@/components/NeuralStreamTable"
import { StatusBadge } from "@/components/status-badge"
import { ProgressBar } from "@/components/progress-bar"
import { NoJobsEmpty } from "@/components/empty-states"
import type { ValidationJob } from "@/types"
import { Eye, Search, ChevronLeft, ChevronRight } from "lucide-react"

interface JobsTableProps {
  jobs: ValidationJob[]
  compact?: boolean
  onUpload?: () => void
  isLoading?: boolean
}

const ITEMS_PER_PAGE = 5

export function JobsTable({ jobs, compact = false, onUpload }: JobsTableProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.filename.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = statusFilter === "all" || job.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [jobs, searchQuery, statusFilter])

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const handleRowClick = (jobId: string) => {
    router.push(`/jobs/${jobId}`)
  }

  if (jobs.length === 0) {
    return <NoJobsEmpty onUpload={onUpload} />
  }

  return (
    <div className="space-y-4">
      {!compact && (
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by filename or job ID..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-9"
            />
          </div>
          <Select
            value={statusFilter}
            onValueChange={(value) => {
              setStatusFilter(value)
              setCurrentPage(1)
            }}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="queued">Queued</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {filteredJobs.length === 0 ? (
        <div className="rounded-lg border border-border border-dashed p-8 text-center">
          <p className="text-muted-foreground">No jobs match your search criteria.</p>
        </div>
      ) : (
        <>
          <div className="rounded-lg border border-border overflow-hidden">
            <NeuralStreamTable>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  {!compact && <TableHead className="text-muted-foreground">Job ID</TableHead>}
                  <TableHead className="text-muted-foreground">Job Name</TableHead>
                  {!compact && <TableHead className="text-muted-foreground">Filename</TableHead>}
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground">Progress</TableHead>
                  {!compact && <TableHead className="text-muted-foreground">Records</TableHead>}
                  <TableHead className="text-muted-foreground">Created</TableHead>
                  <TableHead className="text-right text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedJobs.map((job) => (
                  <TableRow
                    key={job.id}
                    className="hover:bg-muted/30 cursor-pointer transition-colors"
                    onClick={() => handleRowClick(job.id)}
                    data-animate="job-row"
                    data-job-status={job.status}
                  >
                    {!compact && <TableCell className="font-mono text-sm text-muted-foreground">{job.id}</TableCell>}
                    <TableCell className="font-medium">{job.name}</TableCell>
                    {!compact && <TableCell className="text-muted-foreground">{job.filename}</TableCell>}
                    <TableCell>
                      <StatusBadge status={job.status} />
                    </TableCell>
                    <TableCell className="min-w-[120px]">
                      <ProgressBar value={job.progress} size="sm" />
                    </TableCell>
                    {!compact && (
                      <TableCell className="text-muted-foreground">
                        {job.completedRecords.toLocaleString()} / {job.totalRecords.toLocaleString()}
                      </TableCell>
                    )}
                    <TableCell className="text-muted-foreground">{formatDate(job.createdAt)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                        <Link href={`/jobs/${job.id}`}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </NeuralStreamTable>
          </div>

          {!compact && totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredJobs.length)} of {filteredJobs.length} jobs
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
