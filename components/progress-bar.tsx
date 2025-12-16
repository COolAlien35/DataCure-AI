import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number
  max?: number
  className?: string
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
}

export function ProgressBar({ value, max = 100, className, showLabel = false, size = "md" }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)

  const sizeStyles = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  }

  const getColor = () => {
    if (percentage >= 80) return "bg-success"
    if (percentage >= 50) return "bg-warning"
    return "bg-chart-2"
  }

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("w-full rounded-full bg-secondary overflow-hidden", sizeStyles[size])}>
        <div
          className={cn("h-full rounded-full transition-all duration-300", getColor())}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && <p className="mt-1 text-xs text-muted-foreground text-right">{Math.round(percentage)}%</p>}
    </div>
  )
}
