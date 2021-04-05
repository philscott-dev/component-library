import { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { PathMap } from 'utils/pathMap'

export interface SearchOptions<T> {
  data?: T[]
  search?: string
  pathMap?: PathMap
}

export function useSearch<T>({ data, search, pathMap }: SearchOptions<T>): T[] {
  const [searchResult, setSearchResult] = useState<T[]>([])

  useEffect(() => {
    if (!data || !pathMap) return

    /**
     * Fuse Fuzzy Search Config
     */
    const fuse = new Fuse(data, {
      caseSensitive: false,
      threshold: 0.2,
      keys: Object.keys(pathMap).map((path) => {
        // remove first 2 characters *.
        const string = path.substr(2)
        return string.split('[*]').join('')
      }),
    })
    const result = search && search.length ? fuse.search(search) : data

    setSearchResult(result)
  }, [data, search, pathMap])

  return searchResult
}
