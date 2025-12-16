"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileX2, Inbox, Terminal, AlertCircle, RefreshCw, CloudOff } from "lucide-react"

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  suggestion?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function EmptyState({ icon, title, description, suggestion, action }: EmptyStateProps) {
  return (
    <Card className="bg-card border-border border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary mb-4">
          {icon || <Inbox className="h-7 w-7 text-muted-foreground" />}
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-sm mb-2">{description}</p>
        {suggestion && <p className="text-sm text-primary max-w-sm mb-4">{suggestion}</p>}
        {action && (
          <Button variant="outline" onClick={action.onClick}>
            {action.label}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export function NoJobsEmpty({ onUpload }: { onUpload?: () => void }) {
  return (
    <EmptyState
      icon={<FileX2 className="h-7 w-7 text-muted-foreground" />}
      title="No validation jobs yet"
      description="Upload a provider CSV file to start your first validation job. Our AI agents will validate each record in parallel."
      suggestion="Try uploading a sample file to see the validation pipeline in action."
      action={onUpload ? { label: "Upload Providers", onClick: onUpload } : undefined}
    />
  )
}

export function NoRecordsEmpty() {
  return (
    <EmptyState
      icon={<Inbox className="h-7 w-7 text-muted-foreground" />}
      title="No records match your filters"
      description="No provider records match your current search and filter criteria."
      suggestion="Try adjusting your confidence range or clearing filters to see more records."
    />
  )
}

export function NoLogsEmpty() {
  return (
    <EmptyState
      icon={<Terminal className="h-7 w-7 text-muted-foreground" />}
      title="No agent logs available"
      description="Execution logs will appear here once AI validation agents begin processing records."
      suggestion="Logs are generated in real-time as each agent completes its validation step."
    />
  )
}

interface PartialSuccessStateProps {
  successPercent: number
  totalRecords: number
  failedCount: number
  onRetry?: () => void
}

export function PartialSuccessState({ successPercent, totalRecords, failedCount, onRetry }: PartialSuccessStateProps) {
  return (
    <Card className="bg-warning/5 border-warning/20">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-warning/10 mb-4">
          <CloudOff className="h-7 w-7 text-warning" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Partial Validation Complete</h3>
        <p className="text-sm text-muted-foreground max-w-sm mb-2">
          {successPercent}% of {totalRecords.toLocaleString()} records validated successfully.
        </p>
        <p className="text-sm text-warning mb-4">
          {failedCount} records could not be validated at this time due to external service issues.
        </p>
        {onRetry && (
          <Button variant="outline" onClick={onRetry}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry Failed Records
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

interface ErrorStateProps {
  title?: string
  message: string
  suggestion?: string
  onRetry?: () => void
}

export function ErrorState({ title = "Unable to complete request", message, suggestion, onRetry }: ErrorStateProps) {
  return (
    <Card className="bg-error/5 border-error/20">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-error/10 mb-4">
          <AlertCircle className="h-7 w-7 text-error" />
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-sm mb-2">{message}</p>
        {suggestion && <p className="text-sm text-muted-foreground max-w-sm mb-4">{suggestion}</p>}
        {onRetry && (
          <Button variant="outline" onClick={onRetry}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
