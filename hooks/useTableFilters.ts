import { useState, useMemo } from "react"

/**
 * Generic hook for managing table state: filtering, sorting, and pagination
 * @template T The type of items in the table
 */
export function useTableFilters<T>(
    items: T[],
    options: {
        searchFields?: (keyof T)[]
        pageSize?: number
    } = {}
) {
    const { searchFields = [], pageSize = 10 } = options

    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [sortField, setSortField] = useState<keyof T | null>(null)
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

    const filteredItems = useMemo(() => {
        let result = items

        // Apply search filter
        if (searchQuery && searchFields.length > 0) {
            result = result.filter((item) => {
                return searchFields.some((field) => {
                    const value = item[field]
                    if (typeof value === "string") {
                        return value.toLowerCase().includes(searchQuery.toLowerCase())
                    }
                    return false
                })
            })
        }

        // Apply sorting
        if (sortField) {
            result = [...result].sort((a, b) => {
                const aVal = a[sortField]
                const bVal = b[sortField]

                if (typeof aVal === "number" && typeof bVal === "number") {
                    return sortDirection === "asc" ? aVal - bVal : bVal - aVal
                }

                return sortDirection === "asc"
                    ? String(aVal).localeCompare(String(bVal))
                    : String(bVal).localeCompare(String(aVal))
            })
        }

        return result
    }, [items, searchQuery, searchFields, sortField, sortDirection])

    const totalPages = Math.ceil(filteredItems.length / pageSize)
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    )

    const toggleSort = (field: keyof T) => {
        if (sortField === field) {
            setSortDirection((d) => (d === "asc" ? "desc" : "asc"))
        } else {
            setSortField(field)
            setSortDirection("desc")
        }
    }

    const resetFilters = () => {
        setSearchQuery("")
        setCurrentPage(1)
        setSortField(null)
        setSortDirection("desc")
    }

    return {
        // State
        searchQuery,
        currentPage,
        sortField,
        sortDirection,

        // Setters
        setSearchQuery: (query: string) => {
            setSearchQuery(query)
            setCurrentPage(1) // Reset to first page on search
        },
        setCurrentPage,
        toggleSort,
        resetFilters,

        // Computed values
        filteredItems,
        paginatedItems,
        totalPages,
        totalItems: filteredItems.length,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
    }
}
