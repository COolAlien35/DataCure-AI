/**
 * WebSocket Manager for Real-time Job Updates
 * 
 * Manages WebSocket connections for job progress updates.
 * Implements automatic reconnection and event handling.
 */

import { WS_BASE_URL, ENDPOINTS } from '../api/endpoints'

export type WebSocketEvent =
    | { type: 'progress_update'; data: { progress: number; completedRecords: number } }
    | { type: 'record_completed'; data: { recordId: string; status: string } }
    | { type: 'agent_log'; data: { message: string; level: string } }
    | { type: 'job_completed'; data: { jobId: string } }
    | { type: 'job_failed'; data: { jobId: string; error: string } }

type EventCallback = (event: WebSocketEvent) => void

export class WebSocketManager {
    private ws: WebSocket | null = null
    private reconnectAttempts = 0
    private maxReconnectAttempts = 5
    private reconnectDelay = 1000
    private callbacks: Set<EventCallback> = new Set()
    private jobId: string

    constructor(jobId: string) {
        this.jobId = jobId
    }

    connect() {
        if (this.ws?.readyState === WebSocket.OPEN) {
            return // Already connected
        }

        const wsUrl = `${WS_BASE_URL}${ENDPOINTS.WS_JOB(this.jobId)}`
        this.ws = new WebSocket(wsUrl)

        this.ws.onopen = () => {
            console.log(`WebSocket connected for job ${this.jobId}`)
            this.reconnectAttempts = 0
        }

        this.ws.onmessage = (event) => {
            try {
                const data: WebSocketEvent = JSON.parse(event.data)
                this.callbacks.forEach((callback) => callback(data))
            } catch (error) {
                console.error('Failed to parse WebSocket message:', error)
            }
        }

        this.ws.onerror = (error) => {
            console.error('WebSocket error:', error)
        }

        this.ws.onclose = () => {
            console.log('WebSocket closed')
            this.attemptReconnect()
        }
    }

    private attemptReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++
            const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1)

            setTimeout(() => {
                console.log(`Reconnecting... (attempt ${this.reconnectAttempts})`)
                this.connect()
            }, delay)
        } else {
            console.error('Max reconnection attempts reached')
        }
    }

    on(callback: EventCallback) {
        this.callbacks.add(callback)
        return () => this.callbacks.delete(callback) // Return cleanup function
    }

    disconnect() {
        if (this.ws) {
            this.ws.close()
            this.ws = null
        }
        this.callbacks.clear()
    }

    send(data: unknown) {
        if (this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(data))
        } else {
            console.warn('WebSocket not connected')
        }
    }
}
