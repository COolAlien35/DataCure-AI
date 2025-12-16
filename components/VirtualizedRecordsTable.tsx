"use client"

import React, { useRef, useMemo } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { ConfidenceLabel } from '@/components/confidence-label'
import { StatusBadge } from '@/components/status-badge'
import { Eye } from 'lucide-react'
import type { ProviderRecord } from '@/types'

interface VirtualizedRecordsTableProps {
    records: ProviderRecord[]
    selectedRecords: string[]
    onSelectRecord: (id: string) => void
    onSelectAll: (checked: boolean) => void
    onViewRecord: (record: ProviderRecord) => void
    containerHeight?: number
}

export function VirtualizedRecordsTable({
    records,
    selectedRecords,
    onSelectRecord,
    onSelectAll,
    onViewRecord,
    containerHeight = 600,
}: VirtualizedRecordsTableProps) {
    const parentRef = useRef<HTMLDivElement>(null)

    // Initialize virtualizer
    const rowVirtualizer = useVirtualizer({
        count: records.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 60, // Estimated row height in pixels
        overscan: 5, // Render 5 extra rows above/below viewport for smooth scrolling
    })

    const allSelected = records.length > 0 && selectedRecords.length === records.length

    return (
        <div className="border rounded-lg overflow-hidden">
            {/* Table Header - Fixed */}
            <div className="bg-muted/50 border-b">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">
                                <Checkbox
                                    checked={allSelected}
                                    onCheckedChange={onSelectAll}
                                    aria-label="Select all"
                                />
                            </TableHead>
                            <TableHead>Provider</TableHead>
                            <TableHead>NPI</TableHead>
                            <TableHead>Specialty</TableHead>
                            <TableHead>Overall Confidence</TableHead>
                            <TableHead>Recommendation</TableHead>
                            <TableHead className="w-24">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            </div>

            {/* Virtualized Table Body - Scrollable */}
            <div
                ref={parentRef}
                style={{ height: `${containerHeight}px`, overflow: 'auto' }}
                className="relative"
            >
                <div
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const record = records[virtualRow.index]
                        const isSelected = selectedRecords.includes(record.id)

                        return (
                            <div
                                key={record.id}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: `${virtualRow.size}px`,
                                    transform: `translateY(${virtualRow.start}px)`,
                                }}
                            >
                                <Table>
                                    <TableBody>
                                        <TableRow className="hover:bg-muted/50 transition-colors">
                                            <TableCell className="w-12">
                                                <Checkbox
                                                    checked={isSelected}
                                                    onCheckedChange={() => onSelectRecord(record.id)}
                                                    aria-label={`Select ${record.name}`}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <div>
                                                    <div className="font-medium">{record.name}</div>
                                                    <div className="text-sm text-muted-foreground">{record.address}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-mono text-sm">{record.npi}</TableCell>
                                            <TableCell>{record.specialty}</TableCell>
                                            <TableCell>
                                                <ConfidenceLabel
                                                    value={record.overallConfidence}
                                                    label={`${Math.round(record.overallConfidence * 100)}%`}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <StatusBadge status={record.recommendation} />
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => onViewRecord(record)}
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Footer with count */}
            <div className="border-t bg-muted/30 px-4 py-2 text-sm text-muted-foreground">
                Showing {records.length} record{records.length !== 1 ? 's' : ''}
                {selectedRecords.length > 0 && ` • ${selectedRecords.length} selected`}
            </div>
        </div>
    )
}
