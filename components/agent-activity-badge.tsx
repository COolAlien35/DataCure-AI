"use client"

import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Bot, ShieldCheck } from "lucide-react"

interface AgentActivityBadgeProps {
  agentCount: number
  verifiedSources?: string[]
}

export function AgentActivityBadge({ agentCount, verifiedSources = [] }: AgentActivityBadgeProps) {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-1.5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 cursor-help">
              <Bot className="h-3 w-3 mr-1" />
              Validated by {agentCount} agents
            </Badge>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p className="font-medium mb-1">AI Agent Validation</p>
            <p className="text-xs text-muted-foreground">
              This record was processed by {agentCount} specialized AI agents working in parallel to verify data
              accuracy.
            </p>
          </TooltipContent>
        </Tooltip>
        {verifiedSources.length > 0 && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline" className="bg-success/10 text-success border-success/30 cursor-help">
                <ShieldCheck className="h-3 w-3 mr-1" />
                Cross-checked with {verifiedSources.length} sources
              </Badge>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="font-medium mb-1">Verified Sources</p>
              <ul className="text-xs text-muted-foreground space-y-0.5">
                {verifiedSources.map((source) => (
                  <li key={source}>• {source}</li>
                ))}
              </ul>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  )
}
