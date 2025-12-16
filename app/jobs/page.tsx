"use client"

import { AppShell } from "@/components/app-shell"
import { JobsTable } from "@/components/jobs-table"
import { AuditReadyBadge } from "@/components/audit-ready-badge"
import { useJobs } from "@/hooks/api/useJobs"

export default function JobsPage() {
  // Fetch jobs from API
  const { data: jobs, isLoading } = useJobs()

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Validation Jobs</h1>
            <p className="text-muted-foreground">
              Track and manage all provider data validation jobs with full audit trails
            </p>
          </div>
          <AuditReadyBadge />
        </div>

        <p className="text-sm text-muted-foreground border-l-2 border-primary/30 pl-3">
          All validation steps are logged and traceable. Click any job to view detailed records, agent logs, and export
          options.
        </p>

        <JobsTable jobs={jobs || []} isLoading={isLoading} />
      </div>
    </AppShell>
  )
}
