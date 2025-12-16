"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Info } from "lucide-react"
import { AnimatedCounter } from "@/components/AnimatedCounter"

interface MetricCardProps {
  title: string
  value: string | number
  change?: number
  changeLabel?: string
  icon?: React.ReactNode
  tooltip?: string
  animate?: boolean
}

export function MetricCard({ title, value, change, changeLabel, icon, tooltip, animate = true }: MetricCardProps) {
  const isPositive = change && change > 0
  const isNegative = change && change < 0

  return (
    <Card className="bg-card border-border transition-colors hover:bg-card/80" data-animate="metric-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              {tooltip && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3.5 w-3.5 text-muted-foreground/60 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>{tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <p className="text-3xl font-bold text-card-foreground">
              {animate && typeof value === "number" ? (
                <AnimatedCounter value={value} />
              ) : animate && typeof value === "string" && !value.includes("%") ? (
                <AnimatedCounter value={value} />
              ) : (
                value
              )}
            </p>
            {change !== undefined && (
              <div className="flex items-center gap-1.5">
                {isPositive && <TrendingUp className="h-4 w-4 text-success" />}
                {isNegative && <TrendingDown className="h-4 w-4 text-error" />}
                <span
                  className={cn(
                    "text-sm font-medium",
                    isPositive && "text-success",
                    isNegative && "text-error",
                    !isPositive && !isNegative && "text-muted-foreground",
                  )}
                >
                  {isPositive && "+"}
                  {change}%
                </span>
                {changeLabel && <span className="text-sm text-muted-foreground">{changeLabel}</span>}
              </div>
            )}
          </div>
          {icon && <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  )
}
