"use client"

import { useState } from "react"
import { CurtainSidebar } from "@/components/CurtainSidebar"
import { GlassHeader } from "@/components/GlassHeader"
import { FloatingParticles } from "@/components/FloatingParticles"
import { MagneticMetricCard } from "@/components/MagneticMetricCard"
import { GeoDataPulse } from "@/components/GeoDataPulse"
import { MassiveNeuralCore } from "@/components/MassiveNeuralCore"
import { LiveTerminal } from "@/components/LiveTerminal"
import { LiquidLightPipeline } from "@/components/LiquidLightPipeline"
import { ScannerJobsTable } from "@/components/ScannerJobsTable"
import { Footer } from "@/components/Footer"
import { MetricCardSkeleton, JobsTableSkeleton } from "@/components/skeleton-loaders"
import { Card } from "@/components/ui/card"
import { useDashboardMetrics, useRecentJobs } from "@/hooks/api/useDashboard"
import { metricTooltips } from "@/lib/mock-data"
import { Users, Target, Briefcase, AlertTriangle } from "lucide-react"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Fetch dashboard data with React Query
  const { data: metrics, isLoading: metricsLoading } = useDashboardMetrics()
  const { data: jobs, isLoading: jobsLoading } = useRecentJobs(4)

  const isLoading = metricsLoading || jobsLoading
  const recentJobs = jobs || []

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-background">
      {/* Floating particles */}
      <FloatingParticles />

      {/* Curtain Sidebar */}
      <CurtainSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Glass Header */}
      <GlassHeader onMenuClick={() => setSidebarOpen(true)} />

      {/* Main content - FULL WIDTH */}
      <main className="relative z-10">
        {/* Hero KPIs */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading ? (
              <>
                <MetricCardSkeleton />
                <MetricCardSkeleton />
                <MetricCardSkeleton />
                <MetricCardSkeleton />
              </>
            ) : (
              <>
                <MagneticMetricCard
                  title="Total Providers Validated"
                  value={(metrics?.totalProvidersValidated ?? 0).toLocaleString()}
                  change={metrics?.totalProvidersChange ?? 0}
                  changeLabel="vs last month"
                  icon={<Users className="h-5 w-5 text-muted-foreground" />}
                  tooltip={metricTooltips.totalProviders}
                />
                <MagneticMetricCard
                  title="Average Confidence Score"
                  value={`${metrics?.averageConfidenceScore ?? 0}%`}
                  change={metrics?.confidenceChange ?? 0}
                  changeLabel="vs last month"
                  icon={<Target className="h-5 w-5 text-muted-foreground" />}
                  tooltip={metricTooltips.averageConfidence}
                />
                <MagneticMetricCard
                  title="Active Jobs"
                  value={metrics?.activeJobs ?? 0}
                  change={metrics?.activeJobsChange ?? 0}
                  changeLabel="vs yesterday"
                  icon={<Briefcase className="h-5 w-5 text-muted-foreground" />}
                  tooltip={metricTooltips.activeJobs}
                />
                <MagneticMetricCard
                  title="Pending Manual Review"
                  value={metrics?.recordsRequiringReview ?? 0}
                  change={metrics?.reviewChange ?? 0}
                  changeLabel="vs last week"
                  icon={<AlertTriangle className="h-5 w-5 text-muted-foreground" />}
                  tooltip={metricTooltips.recordsReview}
                />
              </>
            )}
          </div>
        </section>

        {/* Geo Data Pulse */}
        <GeoDataPulse />

        {/* MASSIVE Neural Core */}
        <MassiveNeuralCore />

        {/* Live Terminal */}
        <LiveTerminal />

        {/* Liquid Light Pipeline */}
        <LiquidLightPipeline />

        {/* Jobs Table */}
        <section className="container mx-auto px-4 py-12">
          {isLoading ? (
            <Card className="bg-card border-border p-6">
              <JobsTableSkeleton rows={4} compact />
            </Card>
          ) : (
            <ScannerJobsTable jobs={recentJobs} />
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
