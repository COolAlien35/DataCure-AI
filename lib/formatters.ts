/**
 * Utility functions for formatting data across the application
 */

/**
 * Format a timestamp to a localized date string
 */
export function formatDate(timestamp: string | Date): string {
    return new Date(timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

/**
 * Format a timestamp with seconds for detailed logs
 */
export function formatTimestamp(timestamp: string | Date): string {
    return new Date(timestamp).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
}

/**
 * Format a number with locale-specific thousand separators
 */
export function formatNumber(value: number): string {
    return value.toLocaleString()
}

/**
 * Format a percentage value
 */
export function formatPercent(value: number, decimals: number = 1): string {
    return `${value.toFixed(decimals)}%`
}

/**
 * Format confidence score with appropriate precision
 */
export function formatConfidence(confidence: number): string {
    return `${confidence}%`
}

/**
 * Calculate percentage from two numbers
 */
export function calculatePercent(value: number, total: number): number {
    if (total === 0) return 0
    return (value / total) * 100
}
