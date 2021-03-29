import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { arrayToCsv } from 'utils/csv'
import Fuse from 'fuse.js'
import { PathMap } from 'utils/pathMap'

export interface ClientTableOptions<T> {
  data?: T[]
  term?: string
  limit: number
  pathMap?: PathMap
  pathKeys?: string[]
}

export interface ClientTableState<T> {
  pageCount: number
  pageData?: T[]
  page: number
  pageIndex: { start: number; end: number }
  count: number
}

export function useTable<T>({
  data,
  term,
  pathMap,
  pathKeys,
  limit = 10,
}: ClientTableOptions<T>): [
  ClientTableState<T>,
  Dispatch<SetStateAction<number>>,
] {
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState<number>(1)
  const [pageData, setPageData] = useState<T[]>()
  const [pageIndex, setPageIndex] = useState({ start: 0, end: 0 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!data) return

    /**
     * Fuse Fuzzy Search Config
     */
    const fuse = new Fuse(data, {
      keys: pathKeys,
      caseSensitive: false,
      threshold: 0.2,
    })
    const tableData = term && term.length ? fuse.search(term) : data

    /**
     * Pagingation
     */
    const start = (page - 1) * limit
    const end = start + limit
    const length = tableData?.length ?? 0
    const paginated = tableData.slice(start, end)

    setPageIndex({ start: start + 1, end: Math.min(end, length) })
    setPageCount(Math.ceil(tableData.length / limit))
    setPageData(paginated)
    setCount(length)
  }, [data, page, limit, term, pathKeys])

  return [{ pageCount, pageData, page, pageIndex, count }, setPage]
}
