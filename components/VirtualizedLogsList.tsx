"use client"

import React, { useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { AgentLog } from '@/types'

interface VirtualizedLogsListProps {
    logs: AgentLog[]
    expandedLogs: string[]
    onToggleExpand: (logId: string) => void
    containerHeight?: number
}

export function VirtualizedLogsList({
    logs,
    expandedLogs,
    onToggleExpand,
    containerHeight = 500,
}: VirtualizedLogsListProps) {
    const parentRef = useRef<HTMLDivElement>(null)

    // Initialize virtualizer
    const rowVirtualizer = useVirtualizer({
        count: logs.length,
        getScrollElement: () => parentRef.current,
        estimateSize: (index) => {
            // Expanded logs are taller
            const log = logs[index]
            return expandedLogs.includes(log.id) ? 120 : 80
        },
        overscan: 3,
    })

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'success':
                return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
            case 'warning':
                return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30'
            case 'error':
                return 'bg-red-500/10 text-red-500 border-red-500/30'
            default:
                return 'bg-blue-500/10 text-blue-500 border-blue-500/30'
        }
    }

    const formatTimestamp = (timestamp: string) => {
        return new Date(timestamp).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
    }

    return (
        <div
            ref={parentRef}
            style={{ height: `${containerHeight}px`, overflow: 'auto' }}
            className="space-y-2 pr-2"
        >
            <div
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const log = logs[virtualRow.index]
                    const isExpanded = expandedLogs.includes(log.id)

                    return (
                        <div
                            key={log.id}
                            data-index={virtualRow.index}
                            ref={rowVirtualizer.measureElement}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                transform: `translateY(${virtualRow.start}px)`,
                            }}
                        >
                            <div className="border rounded-lg p-4 bg-card hover:bg-muted/50 transition-colors">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="outline" className={getStatusColor(log.status)}>
                                                {log.status.toUpperCase()}
                                            </Badge>
                                            <span className="font-semibold text-sm">{log.agentName}</span>
                                            <span className="text-xs text-muted-foreground">
                                                {formatTimestamp(log.timestamp)}
                                            </span>
                                        </div>
                                        <p className="text-sm text-foreground mb-2">{log.message}</p>
                                        {isExpanded && log.structuredOutput && (
                                            <pre className="text-xs bg-muted p-2 rounded overflow-x-auto mt-2">
                                                {JSON.stringify(log.structuredOutput, null, 2)}
                                            </pre>
                                        )}
                                    </div>
                                    {log.structuredOutput && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => onToggleExpand(log.id)}
                                            className="shrink-0"
                                        >
                                            {isExpanded ? (
                                                <ChevronDown className="h-4 w-4" />
                                            ) : (
                                                <ChevronRight className="h-4 w-4" />
                                            )}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
