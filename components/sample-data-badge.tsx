"use client"

import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FlaskConical } from "lucide-react"

export function SampleDataBadge() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/30 cursor-help">
            <FlaskConical className="h-3 w-3 mr-1" />
            Sample Data
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="font-medium mb-1">Demo Mode</p>
          <p className="text-xs text-muted-foreground">
            This dashboard is displaying sample data for demonstration purposes. Connect your data sources to see real
            validation results.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
