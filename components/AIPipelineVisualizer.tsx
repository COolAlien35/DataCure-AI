"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { CheckCircle2, Loader2, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ValidationStage {
    id: string
    name: string
    description: string
}

const VALIDATION_STAGES: ValidationStage[] = [
    { id: 'npi', name: 'NPI Validation', description: 'Verify provider ID' },
    { id: 'address', name: 'Address Geocoding', description: 'Validate location' },
    { id: 'license', name: 'License Check', description: 'Verify credentials' },
    { id: 'specialty', name: 'Specialty Match', description: 'Confirm expertise' },
]

interface AIPipelineVisualizerProps {
    activeStage?: string  // Current agent stage from WebSocket
    completedStages?: string[]  // Completed stages
    variant?: 'horizontal' | 'vertical'
    className?: string
}

export function AIPipelineVisualizer({
    activeStage,
    completedStages = [],
    variant = 'horizontal',
    className,
}: AIPipelineVisualizerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const prevActiveStage = useRef<string | undefined>(activeStage)

    useEffect(() => {
        if (!containerRef.current || activeStage === prevActiveStage.current) return

        // Animate stage transition when active stage changes
        const stageIndex = VALIDATION_STAGES.findIndex((s) => s.id === activeStage)
        if (stageIndex === -1) return

        const stageElement = containerRef.current.querySelector(`[data-stage="${activeStage}"]`)
        if (!stageElement) return

        // Pulse animation for active stage
        gsap.fromTo(
            stageElement,
            { scale: 1 },
            {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1,
            }
        )

        prevActiveStage.current = activeStage
    }, [activeStage])

    const getStageStatus = (stageId: string) => {
        if (completedStages.includes(stageId)) return 'completed'
        if (activeStage === stageId) return 'active'
        return 'pending'
    }

    const StageIcon = ({ status }: { status: string }) => {
        switch (status) {
            case 'completed':
                return <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            case 'active':
                return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
            default:
                return <Circle className="h-5 w-5 text-muted-foreground/30" />
        }
    }

    const isHorizontal = variant === 'horizontal'

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative p-4 rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm",
                className
            )}
        >
            {/* Header */}
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-foreground">AI Validation Pipeline</h3>
                <p className="text-xs text-muted-foreground">Multi-agent verification in progress</p>
            </div>

            {/* Pipeline Stages */}
            <div
                className={cn(
                    "flex gap-2",
                    isHorizontal ? "flex-row items-center" : "flex-col"
                )}
            >
                {VALIDATION_STAGES.map((stage, index) => {
                    const status = getStageStatus(stage.id)
                    const isCompleted = status === 'completed'
                    const isActive = status === 'active'
                    const isPending = status === 'pending'

                    return (
                        <React.Fragment key={stage.id}>
                            {/* Stage Node */}
                            <div
                                data-stage={stage.id}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300",
                                    "border backdrop-blur-sm",
                                    isActive && "border-blue-500/50 bg-blue-500/10 shadow-lg shadow-blue-500/20",
                                    isCompleted && "border-emerald-500/30 bg-emerald-500/5",
                                    isPending && "border-white/10 bg-black/10 opacity-50"
                                )}
                            >
                                <StageIcon status={status} />
                                <div className="flex-1 min-w-0">
                                    <div className={cn(
                                        "text-sm font-medium",
                                        isActive && "text-blue-400",
                                        isCompleted && "text-emerald-400",
                                        isPending && "text-muted-foreground"
                                    )}>
                                        {stage.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground truncate">
                                        {stage.description}
                                    </div>
                                </div>
                            </div>

                            {/* Connector Line */}
                            {index < VALIDATION_STAGES.length - 1 && (
                                <div
                                    className={cn(
                                        "transition-all duration-300",
                                        isHorizontal
                                            ? "h-0.5 w-8 bg-gradient-to-r"
                                            : "w-0.5 h-8 ml-6 bg-gradient-to-b",
                                        isCompleted
                                            ? "from-emerald-500/50 to-emerald-500/50"
                                            : "from-white/10 to-white/10"
                                    )}
                                />
                            )}
                        </React.Fragment>
                    )
                })}
            </div>

            {/* Progress Indicator */}
            <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{completedStages.length} / {VALIDATION_STAGES.length} stages</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-500"
                        style={{
                            width: `${(completedStages.length / VALIDATION_STAGES.length) * 100}%`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
