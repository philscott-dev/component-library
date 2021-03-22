import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'
import fuse from 'fuse.js'

export interface ClientTableOptions<T> {
  data?: T[]
  term?: string
  limit: number
}

export interface ClientTableState<T> {
  pageCount: number
  pageData?: T[]
  page: number
}

export function useClientTable<T>({
  data,
  term,
  limit = 10,
}: ClientTableOptions<T>): [
  ClientTableState<T>,
  Dispatch<SetStateAction<number>>,
] {
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState<number>(1)
  const [pageData, setPageData] = useState<T[]>()

  useEffect(() => {
    if (!data) return

    const tableData = term && term.length ? data.filter((row) => row) : data

    const start = (page - 1) * limit
    const end = start + limit

    setPageCount(Math.ceil(tableData.length / limit))
    setPageData(tableData.slice(start, end))
  }, [data, page, limit])

  const paginationState: ClientTableState<T> = { pageCount, pageData, page }

  return [paginationState, setPage]
}

/**
 * Helpers
 */
