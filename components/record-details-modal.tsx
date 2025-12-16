"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConfidenceIndicator } from "@/components/confidence-indicator"
import { ConfidenceLabel } from "@/components/confidence-label"
import { AgentActivityBadge } from "@/components/agent-activity-badge"
import { StatusBadge } from "@/components/status-badge"
import type { ProviderRecord } from "@/types"
import { ArrowRight, Clock, Bot, AlertCircle, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface RecordDetailsModalProps {
  record: ProviderRecord | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RecordDetailsModal({ record, open, onOpenChange }: RecordDetailsModalProps) {
  if (!record) return null

  const comparisonFields = [
    { label: "Name", input: record.name, enriched: record.enrichedData?.name },
    { label: "Address", input: record.address, enriched: record.enrichedData?.address },
    { label: "Phone", input: record.phone, enriched: record.enrichedData?.phone },
    { label: "Specialty", input: record.specialty, enriched: record.enrichedData?.specialty },
    { label: "License Status", input: record.licenseStatus, enriched: record.enrichedData?.licenseStatus },
  ]

  const changedFields = comparisonFields.filter((field) => field.enriched && field.input !== field.enriched)

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getFieldConfidence = (label: string) => {
    switch (label) {
      case "Name":
        return record.npiConfidence
      case "Address":
        return record.addressConfidence
      case "License Status":
        return record.licenseConfidence
      default:
        return record.overallConfidence
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <DialogTitle className="text-xl">Validated Provider Record</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">NPI: {record.npi}</p>
            </div>
            <div className="flex items-center gap-2">
              <ConfidenceLabel value={record.overallConfidence} size="md" />
              <StatusBadge status={record.recommendation} />
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <AgentActivityBadge
            agentCount={record.agentsInvolved.length}
            verifiedSources={["NPPES Registry", "State Licensing Board", "Address Verification Service"]}
          />

          {changedFields.length > 0 && (
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-primary" />
                  Data Corrections Applied
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3">
                  The following fields were updated based on authoritative source verification:
                </p>
                <ul className="space-y-2">
                  {changedFields.map((field) => (
                    <li key={field.label} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="font-medium min-w-[80px]">{field.label}:</span>
                      <span className="text-muted-foreground line-through">{field.input}</span>
                      <ArrowRight className="h-3 w-3 flex-shrink-0" />
                      <span className="text-success font-medium">{field.enriched}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {changedFields.length === 0 && (
            <Card className="bg-success/5 border-success/20">
              <CardContent className="py-4">
                <div className="flex items-center gap-2 text-success">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-medium">All data verified - no corrections needed</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 ml-7">
                  Input data matches authoritative sources across all validated fields.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Data Comparison with per-field confidence */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-secondary/30 border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Original Input Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {comparisonFields.map((field) => (
                  <div key={field.label}>
                    <p className="text-xs text-muted-foreground mb-1">{field.label}</p>
                    <p className="text-sm">{field.input}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-success/5 border-success/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-success">AI-Validated Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {comparisonFields.map((field) => {
                  const isChanged = field.enriched && field.input !== field.enriched
                  const confidence = getFieldConfidence(field.label)
                  return (
                    <div key={field.label}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-muted-foreground">{field.label}</p>
                        <span
                          className={cn(
                            "text-xs font-mono",
                            confidence >= 80 ? "text-success" : confidence >= 50 ? "text-warning" : "text-error",
                          )}
                        >
                          {confidence}%
                        </span>
                      </div>
                      <p className={cn("text-sm", isChanged && "text-success font-medium")}>{field.enriched || "-"}</p>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Confidence Breakdown */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base">Confidence Score Breakdown</CardTitle>
              <p className="text-sm text-muted-foreground">
                Each validation dimension is scored independently by specialized AI agents.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-around gap-6">
                <ConfidenceIndicator value={record.npiConfidence} label="NPI" size="lg" />
                <ConfidenceIndicator value={record.addressConfidence} label="Address" size="lg" />
                <ConfidenceIndicator value={record.licenseConfidence} label="License" size="lg" />
                <ConfidenceIndicator value={record.overallConfidence} label="Overall" size="lg" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Audit Trail
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Immutable validation record for compliance and regulatory purposes.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Validation Timestamp</p>
                  <p className="font-mono text-sm">{formatTimestamp(record.validatedAt)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Record ID</p>
                  <p className="font-mono text-sm">{record.id}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm text-muted-foreground mb-2">AI Agents Involved</p>
                  <div className="flex flex-wrap gap-1.5">
                    {record.agentsInvolved.map((agent: string) => (
                      <Badge key={agent} variant="outline" className="text-xs">
                        <Bot className="h-3 w-3 mr-1" />
                        {agent}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
