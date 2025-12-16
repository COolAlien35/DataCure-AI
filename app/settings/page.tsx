"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CheckCircle2, Shield, Bot, Gauge, FileCheck, Info } from "lucide-react"

export default function SettingsPage() {
  const [agents, setAgents] = useState({
    npiValidator: true,
    addressEnrichment: true,
    licenseVerification: true,
    webScraping: true,
    mapsEnrichment: true,
    specialtyClassifier: true,
  })

  const [performance, setPerformance] = useState({
    parallelJobs: 3,
    batchSize: 100,
  })

  const [compliance, setCompliance] = useState({
    auditLogging: true,
    dataRetention: true,
    hipaaMode: true,
  })

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const toggleAgent = (key: keyof typeof agents) => {
    setAgents((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleCompliance = (key: keyof typeof compliance) => {
    setCompliance((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const AgentToggle = ({
    id,
    label,
    description,
    tooltip,
    checked,
    onToggle,
  }: {
    id: string
    label: string
    description: string
    tooltip: string
    checked: boolean
    onToggle: () => void
  }) => (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5 flex-1">
        <div className="flex items-center gap-1.5">
          <Label htmlFor={id} className="text-base">
            {label}
          </Label>
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
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Switch id={id} checked={checked} onCheckedChange={onToggle} />
    </div>
  )

  return (
    <AppShell>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-2xl font-bold">Validation Settings</h1>
          <p className="text-muted-foreground">
            Configure AI validation agents and compliance controls for your organization
          </p>
        </div>

        {saved && (
          <Alert className="bg-success/10 border-success/30">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <AlertDescription className="text-success">Settings saved successfully.</AlertDescription>
          </Alert>
        )}

        {/* Role Display */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Account Role
            </CardTitle>
            <CardDescription>Your current permission level and access rights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Badge className="bg-primary text-primary-foreground">Admin</Badge>
              <span className="text-sm text-muted-foreground">
                Full access to all features, agents, and compliance settings
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              AI Validation Agents
            </CardTitle>
            <CardDescription>
              Enable or disable individual validation agents. Each agent validates a specific aspect of provider data.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <AgentToggle
              id="npi-validator"
              label="NPI Validator"
              description="Validate NPI numbers against the NPPES registry"
              tooltip="Connects to the National Plan and Provider Enumeration System to verify NPI numbers are active and match provider information."
              checked={agents.npiValidator}
              onToggle={() => toggleAgent("npiValidator")}
            />
            <div className="border-t border-border" />
            <AgentToggle
              id="address-enrichment"
              label="Address Enrichment"
              description="Standardize and geocode provider addresses"
              tooltip="Uses USPS standards and geocoding services to validate, standardize, and enrich address data with coordinates."
              checked={agents.addressEnrichment}
              onToggle={() => toggleAgent("addressEnrichment")}
            />
            <div className="border-t border-border" />
            <AgentToggle
              id="license-verification"
              label="License Verification"
              description="Verify medical licenses with state boards"
              tooltip="Cross-references provider licenses against state medical board databases to verify status and expiration dates."
              checked={agents.licenseVerification}
              onToggle={() => toggleAgent("licenseVerification")}
            />
            <div className="border-t border-border" />
            <AgentToggle
              id="web-scraping"
              label="Web Intelligence Agent"
              description="Gather provider information from hospital websites"
              tooltip="Collects supplementary provider information from official hospital and practice websites to enhance data accuracy."
              checked={agents.webScraping}
              onToggle={() => toggleAgent("webScraping")}
            />
            <div className="border-t border-border" />
            <AgentToggle
              id="maps-enrichment"
              label="Maps Enrichment"
              description="Verify addresses using mapping services"
              tooltip="Uses Google Maps API to verify address existence, get standardized formatting, and retrieve geographic coordinates."
              checked={agents.mapsEnrichment}
              onToggle={() => toggleAgent("mapsEnrichment")}
            />
            <div className="border-t border-border" />
            <AgentToggle
              id="specialty-classifier"
              label="Specialty Classifier"
              description="Map specialties to CMS taxonomy codes"
              tooltip="Classifies provider specialties to standardized CMS Healthcare Provider Taxonomy codes for compliance."
              checked={agents.specialtyClassifier}
              onToggle={() => toggleAgent("specialtyClassifier")}
            />
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5" />
              Performance
            </CardTitle>
            <CardDescription>Configure processing performance and throughput settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-base">Parallel Jobs</Label>
                <span className="text-sm text-muted-foreground font-mono">{performance.parallelJobs}</span>
              </div>
              <Slider
                value={[performance.parallelJobs]}
                onValueChange={([v]) => setPerformance((p) => ({ ...p, parallelJobs: v }))}
                min={1}
                max={10}
                step={1}
              />
              <p className="text-sm text-muted-foreground">Maximum validation jobs to process simultaneously</p>
            </div>
            <div className="border-t border-border" />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-base">Batch Size</Label>
                <span className="text-sm text-muted-foreground font-mono">{performance.batchSize} records</span>
              </div>
              <Slider
                value={[performance.batchSize]}
                onValueChange={([v]) => setPerformance((p) => ({ ...p, batchSize: v }))}
                min={10}
                max={500}
                step={10}
              />
              <p className="text-sm text-muted-foreground">Number of provider records to process per batch</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5" />
              Compliance & Governance
            </CardTitle>
            <CardDescription>
              Healthcare compliance and data governance settings. These controls ensure regulatory compliance.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="audit-logging" className="text-base">
                  Audit Logging
                </Label>
                <p className="text-sm text-muted-foreground">
                  Log all data access and modifications with immutable timestamps
                </p>
              </div>
              <Switch
                id="audit-logging"
                checked={compliance.auditLogging}
                onCheckedChange={() => toggleCompliance("auditLogging")}
              />
            </div>
            <div className="border-t border-border" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="data-retention" className="text-base">
                  Data Retention Policy
                </Label>
                <p className="text-sm text-muted-foreground">
                  Automatically purge validation data older than 7 years per HIPAA requirements
                </p>
              </div>
              <Switch
                id="data-retention"
                checked={compliance.dataRetention}
                onCheckedChange={() => toggleCompliance("dataRetention")}
              />
            </div>
            <div className="border-t border-border" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="hipaa-mode" className="text-base">
                  HIPAA Compliance Mode
                </Label>
                <p className="text-sm text-muted-foreground">
                  Enhanced security controls for protected health information (PHI)
                </p>
              </div>
              <Switch
                id="hipaa-mode"
                checked={compliance.hipaaMode}
                onCheckedChange={() => toggleCompliance("hipaaMode")}
              />
            </div>
          </CardContent>
        </Card>

        <Button onClick={handleSave} className="w-full sm:w-auto">
          Save Settings
        </Button>
      </div>
    </AppShell>
  )
}
