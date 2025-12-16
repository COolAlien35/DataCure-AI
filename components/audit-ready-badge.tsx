"use client"

import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Shield } from "lucide-react"

interface AuditReadyBadgeProps {
  variant?: "default" | "compact"
}

export function AuditReadyBadge({ variant = "default" }: AuditReadyBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant="outline"
            className="bg-success/10 text-success border-success/30 cursor-help whitespace-nowrap"
          >
            <Shield className="h-3 w-3 mr-1" />
            {variant === "default" ? "Audit Ready" : "Audit"}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="font-medium mb-1">Compliance Ready</p>
          <p className="text-xs text-muted-foreground">
            All validation steps are logged and traceable. Records meet healthcare compliance requirements for audit
            purposes.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
