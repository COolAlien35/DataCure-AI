"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

// Create a client with sensible defaults
function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                // Don't refetch on window focus (prevents animation interruptions)
                refetchOnWindowFocus: false,
                // Data is considered fresh for 30 seconds
                staleTime: 30 * 1000,
                // Garbage collection time - cached data expires after 5 minutes
                gcTime: 5 * 60 * 1000,
                // Retry failed requests once
                retry: 1,
                // Don't retry on 404s
                retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
            },
            mutations: {
                // Retry mutations once
                retry: 1,
            },
        },
    })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
    if (typeof window === 'undefined') {
        // Server: always make a new query client
        return makeQueryClient()
    } else {
        // Browser: make a new query client if we don't have one
        if (!browserQueryClient) browserQueryClient = makeQueryClient()
        return browserQueryClient
    }
}

export function Providers({ children }: { children: React.ReactNode }) {
    // NOTE: Avoid useState when initializing the query client if you don't
    // have a suspense boundary between this and the code that may
    // suspend because React will throw away the client on the initial
    // render if it suspends and there is no boundary
    const [queryClient] = useState(() => getQueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {process.env.NODE_ENV === 'development' && (
                <ReactQueryDevtools initialIsOpen={false} position="bottom" />
            )}
        </QueryClientProvider>
    )
}
