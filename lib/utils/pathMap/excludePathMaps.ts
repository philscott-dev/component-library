import type { PathMap } from './types'

/**
 * Remove paths from the path map based on some logic
 * Udate this function with more rules/behaior as necessary!!!
 */

export function excludePathMaps(pathMap: PathMap) {
  for (const [template, _paths] of Object.entries(pathMap)) {
    // remove base path always
    if (template === '*') {
      delete pathMap[template]
    }
  }
  return pathMap
}
