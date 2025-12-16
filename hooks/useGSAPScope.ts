import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

/**
 * GSAP context wrapper for React strict-mode safety
 * Automatically cleans up GSAP animations on unmount
 * 
 * @returns Ref to scope container and cleanup context
 */
export function useGSAPScope<T extends HTMLElement = HTMLDivElement>() {
    const scopeRef = useRef<T>(null)
    const ctxRef = useRef<gsap.Context | null>(null)

    useIsomorphicLayoutEffect(() => {
        // Create GSAP context scoped to this component
        if (scopeRef.current) {
            ctxRef.current = gsap.context(() => { }, scopeRef.current)
        }

        // Cleanup on unmount
        return () => {
            ctxRef.current?.revert()
        }
    }, [])

    return { scopeRef, ctx: ctxRef.current }
}
