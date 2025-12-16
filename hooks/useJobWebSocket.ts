import { useEffect, useRef } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { WebSocketManager, WebSocketEvent } from '@/lib/websocket/manager'
import { QUERY_KEYS } from '@/lib/api/endpoints'

/**
 * Hook to manage WebSocket connection for real-time job updates
 * 
 * Automatically connects/disconnects based on component lifecycle
 * and updates React Query cache when events are received.
 */
export function useJobWebSocket(jobId: string) {
    const queryClient = useQueryClient()
    const wsManagerRef = useRef<WebSocketManager | null>(null)

    useEffect(() => {
        if (!jobId) return

        // Create WebSocket manager
        const wsManager = new WebSocketManager(jobId)
        wsManagerRef.current = wsManager

        // Handle WebSocket events
        const unsubscribe = wsManager.on((event: WebSocketEvent) => {
            switch (event.type) {
                case 'progress_update':
                    // Update job progress in cache
                    queryClient.setQueryData(
                        QUERY_KEYS.jobs.detail(jobId),
                        (oldData: any) => {
                            if (!oldData) return oldData
                            return {
                                ...oldData,
                                progress: event.data.progress,
                                completedRecords: event.data.completedRecords,
                            }
                        }
                    )
                    break

                case 'record_completed':
                    // Invalidate records query to refetch
                    queryClient.invalidateQueries({
                        queryKey: QUERY_KEYS.jobs.records(jobId),
                    })
                    break

                case 'agent_log':
                    // Could update logs in cache if we're displaying them
                    console.log('Agent log:', event.data.message)
                    break

                case 'job_completed':
                    // Job finished - refetch everything
                    queryClient.invalidateQueries({
                        queryKey: QUERY_KEYS.jobs.detail(jobId),
                    })
                    queryClient.invalidateQueries({
                        queryKey: QUERY_KEYS.jobs.records(jobId),
                    })
                    queryClient.invalidateQueries({
                        queryKey: QUERY_KEYS.dashboard.metrics(),
                    })
                    break

                case 'job_failed':
                    // Job failed - update status
                    queryClient.setQueryData(
                        QUERY_KEYS.jobs.detail(jobId),
                        (oldData: any) => {
                            if (!oldData) return oldData
                            return {
                                ...oldData,
                                status: 'failed',
                            }
                        }
                    )
                    break
            }
        })

        // Connect WebSocket
        wsManager.connect()

        // Cleanup on unmount
        return () => {
            unsubscribe()
            wsManager.disconnect()
        }
    }, [jobId, queryClient])

    return wsManagerRef.current
}
