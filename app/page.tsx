"use client"

import { FloatingParticles } from "@/components/FloatingParticles"
import { MassiveNeuralCore } from "@/components/MassiveNeuralCore"
import { LiveTerminal } from "@/components/LiveTerminal"
import { LiquidLightPipeline } from "@/components/LiquidLightPipeline"
import { AnimatedJobsTable } from "@/components/AnimatedJobsTable"
import { AssemblyMetricCard } from "@/components/AssemblyMetricCard"
import { GlassHeader } from "@/components/GlassHeader"
import { CurtainSidebar } from "@/components/CurtainSidebar"
import { Footer } from "@/components/Footer"
import { useDashboardMetrics, useRecentJobs } from "@/hooks/api/useDashboard"
import {
  Activity,
  TrendingUp,
  AlertOctagon,
  CheckCircle,
} from "lucide-react"

export default function DashboardPage() {
  // Fetch real data from backend
  const { data: metrics, isLoading: metricsLoading } = useDashboardMetrics()
  const { data: recentJobs, isLoading: jobsLoading } = useRecentJobs()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <FloatingParticles />

      {/* Global Sidebar - uses context */}
      <CurtainSidebar />

      {/* Global Header - has hamburger toggle */}
      <GlassHeader />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Metrics */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AssemblyMetricCard
              title="Total Providers Validated"
              value={metrics?.totalProvidersValidated || 0}
              change={metrics?.totalProvidersChange || 0}
              changeLabel="vs last month"
              icon={<CheckCircle className="h-5 w-5 text-emerald-400" />}
            />
            <AssemblyMetricCard
              title="Average Confidence Score"
              value={`${Math.round((metrics?.averageConfidenceScore || 0) * 100)}%`}
              change={metrics?.confidenceChange || 0}
              changeLabel="vs last month"
              icon={<Activity className="h-5 w-5 text-cyan-400" />}
            />
            <AssemblyMetricCard
              title="Active Validation Jobs"
              value={metrics?.activeJobs || 0}
              change={metrics?.activeJobsChange || 0}
              changeLabel="from yesterday"
              icon={<TrendingUp className="h-5 w-5 text-blue-400" />}
            />
            <AssemblyMetricCard
              title="Records Requiring Review"
              value={metrics?.recordsRequiringReview || 0}
              change={metrics?.reviewChange || 0}
              changeLabel="pending review"
              icon={<AlertOctagon className="h-5 w-5 text-amber-400" />}
            />
          </div>
        </section>

        {/* MASSIVE Neural Core */}
        <MassiveNeuralCore />

        {/* Live Terminal */}
        <LiveTerminal />

        {/* Liquid Light Pipeline */}
        <LiquidLightPipeline />

        {/* Jobs Table */}
        <section className="container mx-auto px-4 py-12">
          <AnimatedJobsTable jobs={recentJobs || []} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
