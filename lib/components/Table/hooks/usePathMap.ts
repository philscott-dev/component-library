import { useEffect, useState } from 'react'
import { getPaths, excludePathMaps, PathMap } from 'utils/pathMap'

export function usePathMap<T>(data?: T[]) {
  const [pathMap, setPathMap] = useState<PathMap>()
  const [pathKeys, setPathKeys] = useState<string[]>()

  useEffect(() => {
    if (!data) return
    const paths = getPaths(data)
    const map = excludePathMaps(paths)
    const keys = Object.keys(map).map((path) => {
      // remove first 2 characters *.
      const string = path.substr(2)
      return string.split('[*]').join('')
    })
    setPathMap(map)
    setPathKeys(keys)
  }, [data])

  return { pathMap, pathKeys }
}
