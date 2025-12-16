"use client"

import { AppShell } from "@/components/app-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AuditReadyBadge } from "@/components/audit-ready-badge"
import { SampleDataBadge } from "@/components/sample-data-badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"

const confidenceDistribution = [
  { range: "0-20%", count: 45, label: "Low" },
  { range: "21-40%", count: 89, label: "Low" },
  { range: "41-60%", count: 234, label: "Medium" },
  { range: "61-80%", count: 567, label: "Medium" },
  { range: "81-100%", count: 1892, label: "High" },
]

const validationResults = [
  { name: "Auto-approved", value: 1892, color: "oklch(0.72 0.19 160)" },
  { name: "Manual Review", value: 567, color: "oklch(0.80 0.16 85)" },
  { name: "Flagged", value: 134, color: "oklch(0.55 0.22 25)" },
]

export default function AnalyticsPage() {
  const totalRecords = validationResults.reduce((sum, r) => sum + r.value, 0)

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Validation Analytics</h1>
            <p className="text-muted-foreground">
              Performance insights and data quality metrics across your validation pipeline
            </p>
          </div>
          <div className="flex items-center gap-2">
            <SampleDataBadge />
            <AuditReadyBadge />
          </div>
        </div>

        <Card className="bg-success/5 border-success/20">
          <CardContent className="py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="font-medium text-success">High Data Quality Score</p>
                <p className="text-sm text-muted-foreground">
                  {((validationResults[0].value / totalRecords) * 100).toFixed(1)}% of records auto-approved with high
                  confidence
                </p>
              </div>
              <p className="text-2xl font-bold text-success">A+</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Confidence Distribution */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Confidence Score Distribution</CardTitle>
              <CardDescription>
                Distribution of AI-calculated confidence scores. Higher scores indicate more reliable data matches with
                authoritative sources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={confidenceDistribution}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.005 250)" />
                    <XAxis
                      dataKey="range"
                      tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }}
                      axisLine={{ stroke: "oklch(0.28 0.005 250)" }}
                    />
                    <YAxis
                      tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }}
                      axisLine={{ stroke: "oklch(0.28 0.005 250)" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "oklch(0.17 0.005 250)",
                        border: "1px solid oklch(0.28 0.005 250)",
                        borderRadius: "8px",
                        color: "oklch(0.95 0 0)",
                      }}
                      formatter={(value: number) => [`${value.toLocaleString()} records`, "Count"]}
                    />
                    <Bar dataKey="count" fill="oklch(0.72 0.19 160)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Validation Results */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Validation Outcomes</CardTitle>
              <CardDescription>
                Breakdown of AI recommendations. Auto-approved records meet quality thresholds; flagged records require
                attention.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={validationResults}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {validationResults.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "oklch(0.17 0.005 250)",
                        border: "1px solid oklch(0.28 0.005 250)",
                        borderRadius: "8px",
                        color: "oklch(0.95 0 0)",
                      }}
                      formatter={(value: number) => [
                        `${value.toLocaleString()} (${((value / totalRecords) * 100).toFixed(1)}%)`,
                        "Records",
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                {validationResults.map((result) => (
                  <div key={result.name} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: result.color }} />
                    <span className="text-sm text-muted-foreground">{result.name}</span>
                    <span className="text-sm font-medium">{result.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
