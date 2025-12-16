"use client"

import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface ConfidenceLabelProps {
  value: number
  showTooltip?: boolean
  showValue?: boolean
  size?: "sm" | "md" | "lg"
}

function getConfidenceInfo(value: number) {
  if (value >= 90) {
    return {
      label: "High Confidence",
      description: "Data has been cross-verified by multiple agents with strong matches.",
      className: "text-success bg-success/10",
    }
  }
  if (value >= 70) {
    return {
      label: "Medium Confidence",
      description: "Data is likely accurate but may benefit from manual verification.",
      className: "text-warning bg-warning/10",
    }
  }
  return {
    label: "Low Confidence",
    description: "Data has significant discrepancies. Manual review is required.",
    className: "text-error bg-error/10",
  }
}

export function ConfidenceLabel({ value, showTooltip = true, showValue = true, size = "md" }: ConfidenceLabelProps) {
  const { label, description, className } = getConfidenceInfo(value)

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        className,
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-2.5 py-1 text-xs",
        size === "lg" && "px-3 py-1.5 text-sm",
      )}
      data-animate="confidence-meter"
      data-confidence={value}
    >
      {label}
      {showValue && <span className="font-mono opacity-80">({value}%)</span>}
      {showTooltip && <Info className="h-3 w-3 opacity-60" />}
    </span>
  )

  if (!showTooltip) return content

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
