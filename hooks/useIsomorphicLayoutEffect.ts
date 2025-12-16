import { useEffect, useLayoutEffect } from "react"

/**
 * Isomorphic layout effect hook for GSAP animations
 * Uses useLayoutEffect on client, useEffect on server
 * Prevents hydration mismatches in React strict mode
 */
export const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect
