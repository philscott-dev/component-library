import { handleIndexOrStringPaths } from './handleIndexOrString'
import { createTemplateString } from './createTemplateString'
import type { PathMap, ObjPaths } from './types'

export function getPaths<T>(data?: T[]) {
  if (!data) {
    return {}
  }
  const pathMap: PathMap = {}
  let nodes: ObjPaths<T>[] = [
    {
      data,
      path: [],
    },
  ]
  while (nodes.length > 0) {
    const lastIndex = nodes.length - 1

    // get the last node
    const node = nodes.slice(lastIndex)[0]

    // remove that index from the array
    nodes = nodes.slice(0, lastIndex)

    // generate indicies or keys or empty array
    const keys = Array.isArray(node.data)
      ? Array.from({ length: node.data.length }, (_, i) => i)
      : Object.keys(node.data)

    // temp holder for object keys
    let objKeys: (string | number)[] = []

    for (const key of keys) {
      if (typeof key === 'number' && typeof node.data[key] === 'object') {
        // handle nested objects and arrays
        const path = handleIndexOrStringPaths(node.path, key)
        const template = createTemplateString(path)
        const pathString = path.join('.')
        pathMap[template] = [...(pathMap?.[template] ?? []), pathString]
        nodes = [
          {
            data: node.data[key] as any,
            path,
          },
          ...nodes,
        ]
      } else {
        // collect the keys that are on top level objects
        objKeys = [...objKeys, key]
      }
    }

    for (const k of objKeys) {
      // add top level keys to path array
      const path = handleIndexOrStringPaths(node.path, k)
      const template = createTemplateString(path)
      const pathString = path.join('.')
      pathMap[template] = [...(pathMap?.[template] ?? []), pathString]
    }
  }

  return pathMap
}
