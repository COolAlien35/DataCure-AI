import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Status =
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

const statusStyles: Record<Status, string> = {
  queued: "bg-muted text-muted-foreground border-muted",
  processing: "bg-chart-2/20 text-chart-2 border-chart-2/30",
  completed: "bg-success/20 text-success border-success/30",
  failed: "bg-error/20 text-error border-error/30",
  "auto-approve": "bg-success/20 text-success border-success/30",
  "manual-review": "bg-warning/20 text-warning border-warning/30",
  reject: "bg-error/20 text-error border-error/30",
  success: "bg-success/20 text-success border-success/30",
  warning: "bg-warning/20 text-warning border-warning/30",
  error: "bg-error/20 text-error border-error/30",
  info: "bg-primary/20 text-primary border-primary/30",
}

const statusLabels: Record<Status, string> = {
  queued: "Queued",
  processing: "Processing",
  completed: "Completed",
  failed: "Failed",
  "auto-approve": "Auto Approve",
  "manual-review": "Manual Review",
  reject: "Reject",
  success: "Success",
  warning: "Warning",
  error: "Error",
  info: "Info",
}

interface StatusBadgeProps {
  status: Status
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <Badge variant="outline" className={cn(statusStyles[status], className)} data-status={status}>
      {statusLabels[status]}
    </Badge>
  )
}
