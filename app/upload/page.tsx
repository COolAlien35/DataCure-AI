"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { AppShell } from "@/components/app-shell"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ValidationPipeline } from "@/components/validation-pipeline"
import { Upload, FileSpreadsheet, CheckCircle2, ArrowRight, Info } from "lucide-react"
import { cn } from "@/lib/utils"

const columnMappings = [
  { source: "NPI", target: "npi", description: "National Provider Identifier" },
  { source: "Provider Name", target: "name", description: "Full legal name" },
  { source: "Address", target: "address", description: "Practice address" },
  { source: "Phone", target: "phone", description: "Contact number" },
  { source: "Specialty", target: "specialty", description: "Medical specialty" },
]

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const [isUploaded, setIsUploaded] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.name.endsWith(".csv")) {
      setUploadedFile(file.name)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file.name)
    }
  }, [])

  const handleUpload = () => {
    setIsUploaded(true)
  }

  return (
    <AppShell>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold">Upload Provider Data</h1>
          <p className="text-muted-foreground">
            Upload a CSV file containing provider information. Our AI agents will validate each record against
            authoritative sources.
          </p>
        </div>

        {isUploaded && (
          <Alert className="bg-success/10 border-success/30">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <AlertTitle className="text-success">Validation Started</AlertTitle>
            <AlertDescription className="text-success/80">
              Your file has been uploaded and AI validation agents are now processing your data. You can track progress
              in the Validation Jobs page.
            </AlertDescription>
          </Alert>
        )}

        {uploadedFile && !isUploaded && (
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="py-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Validation Pipeline Preview</p>
                  <p className="text-xs text-muted-foreground">Your data will be processed through these stages:</p>
                </div>
                <ValidationPipeline
                  stages={[
                    {
                      id: "ingest",
                      label: "Ingest",
                      description: "Parse and validate CSV structure",
                      status: "pending",
                    },
                    { id: "npi", label: "NPI", description: "Validate against NPPES", status: "pending" },
                    { id: "address", label: "Address", description: "Standardize addresses", status: "pending" },
                    { id: "license", label: "License", description: "Verify licenses", status: "pending" },
                    { id: "confidence", label: "Score", description: "Calculate confidence", status: "pending" },
                  ]}
                  compact
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* File Upload Card */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5" />
              CSV File Upload
            </CardTitle>
            <CardDescription>
              Drag and drop your provider data file or click to browse. Supported format: CSV with headers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors",
                isDragging ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/50",
                uploadedFile && "border-success bg-success/5",
              )}
            >
              <input
                type="file"
                accept=".csv"
                onChange={handleFileSelect}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
              {uploadedFile ? (
                <>
                  <CheckCircle2 className="h-12 w-12 text-success mb-4" />
                  <p className="text-lg font-medium">{uploadedFile}</p>
                  <p className="text-sm text-muted-foreground">Ready to start validation</p>
                </>
              ) : (
                <>
                  <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium">Drop your CSV file here</p>
                  <p className="text-sm text-muted-foreground">or click to browse your files</p>
                </>
              )}
            </div>

            <Button onClick={handleUpload} disabled={!uploadedFile || isUploaded} className="w-full">
              {isUploaded ? "Validation In Progress" : "Upload & Start AI Validation"}
            </Button>
          </CardContent>
        </Card>

        {/* Column Mapping Preview */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Expected Column Mapping
              <Info className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
            <CardDescription>
              Your CSV should include these columns. Column headers will be automatically matched to our validation
              schema.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {columnMappings.map((mapping) => (
                <div key={mapping.source} className="flex items-center gap-4 rounded-lg bg-secondary/50 p-3">
                  <div className="flex-1">
                    <span className="text-sm font-medium">{mapping.source}</span>
                    <p className="text-xs text-muted-foreground">{mapping.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <span className="font-mono text-sm text-primary">{mapping.target}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
