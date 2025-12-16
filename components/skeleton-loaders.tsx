import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function MetricCardSkeleton() {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-10 w-10 rounded-lg" />
        </div>
      </CardContent>
    </Card>
  )
}

export function TableRowSkeleton({ columns = 6 }: { columns?: number }) {
  return (
    <tr className="border-b border-border">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="p-4">
          <Skeleton className="h-4 w-full max-w-[120px]" />
        </td>
      ))}
    </tr>
  )
}

export function JobsTableSkeleton({ rows = 4, compact = false }: { rows?: number; compact?: boolean }) {
  const columns = compact ? 5 : 8
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className="p-4 text-left">
                <Skeleton className="h-4 w-20" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <TableRowSkeleton key={i} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function RecordTableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr>
            <th className="p-4 w-10">
              <Skeleton className="h-4 w-4" />
            </th>
            <th className="p-4 text-left">
              <Skeleton className="h-4 w-24" />
            </th>
            <th className="p-4 text-left">
              <Skeleton className="h-4 w-16" />
            </th>
            <th className="p-4 text-left">
              <Skeleton className="h-4 w-20" />
            </th>
            <th className="p-4 text-left">
              <Skeleton className="h-4 w-28" />
            </th>
            <th className="p-4 text-right">
              <Skeleton className="h-4 w-12" />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="border-b border-border">
              <td className="p-4">
                <Skeleton className="h-4 w-4" />
              </td>
              <td className="p-4">
                <Skeleton className="h-4 w-32" />
              </td>
              <td className="p-4">
                <Skeleton className="h-4 w-24" />
              </td>
              <td className="p-4">
                <Skeleton className="h-4 w-20" />
              </td>
              <td className="p-4">
                <Skeleton className="h-5 w-24 rounded-full" />
              </td>
              <td className="p-4 text-right">
                <Skeleton className="h-8 w-16 ml-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LogEntrySkeleton() {
  return (
    <div className="flex items-start gap-4 rounded-lg bg-secondary/50 p-4">
      <Skeleton className="h-5 w-20 rounded-full" />
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-4 w-full max-w-md" />
      </div>
      <Skeleton className="h-4 w-24" />
    </div>
  )
}

export function AgentLogsSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }).map((_, i) => (
        <LogEntrySkeleton key={i} />
      ))}
    </div>
  )
}
