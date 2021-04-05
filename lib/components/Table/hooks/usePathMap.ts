import { useEffect, useState } from 'react'
import { getPaths, excludePathMaps, PathMap } from 'utils/pathMap'

export function usePathMap<T>(data?: T[]) {
  const [pathMap, setPathMap] = useState<PathMap>()
  const [pathKeys, setPathKeys] = useState<string[]>()
  const [paths, setPaths] = useState<string[]>()

  useEffect(() => {
    if (!data) return
    const initialMap = getPaths(data)
    const pathMap = excludePathMaps(initialMap)
    const keys = Object.keys(pathMap)
    const mappedKeys = keys.map((path) => {
      // remove first 2 characters *.
      const string = path.substr(2)
      return string.split('[*]').join('')
    })
    const paths = keys.filter((path) => {
      return !path.endsWith('[*]')
    })
    setPathMap(pathMap)
    setPathKeys(mappedKeys)
    setPaths(paths)
  }, [data])

  return { pathMap, pathKeys, paths }
}
