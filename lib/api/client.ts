import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios'
import { API_BASE_URL } from './endpoints'

// Create axios instance with defaults
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - Add auth token if available
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token from localStorage/sessionStorage if needed
    const token = typeof window !== 'undefined'
      ? localStorage.getItem('auth_token')
      : null

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - Handle errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle common error scenarios
    if (error.response) {
      const status = error.response.status

      switch (status) {
        case 401:
          // Unauthorized - redirect to login if needed
          if (typeof window !== 'undefined') {
            console.error('Unauthorized access - authentication required')
          }
          break

        case 403:
          // Forbidden - user doesn't have permission
          console.error('Access forbidden - insufficient permissions')
          break

        case 404:
          // Not found
          console.error('Resource not found')
          break

        case 500:
          // Server error
          console.error('Internal server error')
          break

        default:
          console.error(`API error: ${status}`)
      }
    } else if (error.request) {
      // Request made but no response received
      console.error('No response from server - network error')
    } else {
      // Something else happened
      console.error('Request error:', error.message)
    }

    return Promise.reject(error)
  }
)

// Helper to extract error message safely (no PII logging)
export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message || 'An error occurred'
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'An unknown error occurred'
}
