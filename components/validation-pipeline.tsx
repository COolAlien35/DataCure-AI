"use client"

import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CheckCircle2, Loader2, Circle } from "lucide-react"

interface PipelineStage {
  id: string
  label: string
  description: string
  status: "completed" | "active" | "pending"
}

interface ValidationPipelineProps {
  stages?: PipelineStage[]
  compact?: boolean
}

const defaultStages: PipelineStage[] = [
  { id: "ingest", label: "Ingest", description: "Data ingestion and parsing", status: "completed" },
  { id: "npi", label: "NPI", description: "NPI validation against NPPES registry", status: "completed" },
  { id: "address", label: "Address", description: "Address standardization and geocoding", status: "active" },
  { id: "license", label: "License", description: "License verification with state boards", status: "pending" },
  { id: "confidence", label: "Score", description: "Final confidence score calculation", status: "pending" },
]

export function ValidationPipeline({ stages = defaultStages, compact = false }: ValidationPipelineProps) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center", compact ? "gap-1" : "gap-2")}>
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "flex items-center justify-center rounded-full transition-colors",
                    compact ? "h-6 w-6" : "h-8 w-8",
                    stage.status === "completed" && "bg-success/20 text-success",
                    stage.status === "active" && "bg-primary/20 text-primary",
                    stage.status === "pending" && "bg-muted text-muted-foreground",
                  )}
                  data-animate="pipeline-stage"
                  data-stage-status={stage.status}
                  data-stage-id={stage.id}
                >
                  {stage.status === "completed" && <CheckCircle2 className={cn(compact ? "h-3 w-3" : "h-4 w-4")} />}
                  {stage.status === "active" && (
                    <Loader2 className={cn("animate-spin", compact ? "h-3 w-3" : "h-4 w-4")} />
                  )}
                  {stage.status === "pending" && <Circle className={cn(compact ? "h-3 w-3" : "h-4 w-4")} />}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium">{stage.label}</p>
                <p className="text-xs text-muted-foreground">{stage.description}</p>
              </TooltipContent>
            </Tooltip>
            {!compact && (
              <span className={cn("ml-1 text-xs font-medium", stage.status === "pending" && "text-muted-foreground")}>
                {stage.label}
              </span>
            )}
            {index < stages.length - 1 && (
              <div className={cn("mx-2 h-0.5 w-4", stage.status === "completed" ? "bg-success/50" : "bg-border")} />
            )}
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}
