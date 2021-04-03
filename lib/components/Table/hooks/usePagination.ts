import { useEffect, useState, Dispatch, SetStateAction } from 'react'

export interface PaginaationOptions<T> {
  data?: T[]
  limit: number
}

export interface PaginationState<T> {
  pageCount: number
  pageData?: T[]
  page: number
  pageIndex: { start: number; end: number }
  count: number
}

export function usePagination<T>({
  data,
  limit = 10,
}: PaginaationOptions<T>): [
  PaginationState<T>,
  Dispatch<SetStateAction<number>>,
] {
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState<number>(1)
  const [pageData, setPageData] = useState<T[]>()
  const [pageIndex, setPageIndex] = useState({ start: 0, end: 0 })
  const [count, setCount] = useState(0)

  // reset to page 1 if the data changes
  useEffect(() => {
    setPage(1)
  }, [data])

  useEffect(() => {
    if (!data) return

    /**
     * Pagingation
     */
    const start = (page - 1) * limit
    const end = start + limit
    const length = data?.length ?? 0
    const paginated = data.slice(start, end)

    setPageIndex({ start: start + 1, end: Math.min(end, length) })
    setPageCount(Math.ceil(data.length / limit))
    setPageData(paginated)
    setCount(length)
  }, [data, page, limit])

  return [{ pageCount, pageData, page, pageIndex, count }, setPage]
}
