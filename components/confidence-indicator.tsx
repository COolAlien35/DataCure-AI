import { cn } from "@/lib/utils"

interface ConfidenceIndicatorProps {
  value: number
  label?: string
  size?: "sm" | "md" | "lg"
}

export function ConfidenceIndicator({ value, label, size = "md" }: ConfidenceIndicatorProps) {
  const getColor = () => {
    if (value >= 80) return "text-success"
    if (value >= 50) return "text-warning"
    return "text-error"
  }

  const getBgColor = () => {
    if (value >= 80) return "bg-success/20"
    if (value >= 50) return "bg-warning/20"
    return "bg-error/20"
  }

  const sizeStyles = {
    sm: { container: "h-12 w-12", text: "text-sm", label: "text-[10px]" },
    md: { container: "h-16 w-16", text: "text-lg", label: "text-xs" },
    lg: { container: "h-20 w-20", text: "text-xl", label: "text-sm" },
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={cn("flex items-center justify-center rounded-full", sizeStyles[size].container, getBgColor())}>
        <span className={cn("font-bold", sizeStyles[size].text, getColor())}>{value}%</span>
      </div>
      {label && <span className={cn("text-muted-foreground", sizeStyles[size].label)}>{label}</span>}
    </div>
  )
}
