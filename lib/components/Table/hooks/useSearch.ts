import { useEffect, useState } from 'react'
import Fuse from 'fuse.js'

export interface SearchOptions<T> {
  data?: T[]
  search?: string
  pathKeys?: string[]
}

export function useSearch<T>({
  data,
  search,
  pathKeys,
}: SearchOptions<T>): T[] {
  const [searchResult, setSearchResult] = useState<T[]>([])

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
    const result = search && search.length ? fuse.search(search) : data

    setSearchResult(result)
  }, [data, search, pathKeys])

  return searchResult
}
