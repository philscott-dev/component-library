import type { PathMap } from './types'

export function getPathsFromTemplates(
  userTemplates: string[],
  pathMap: PathMap,
) {
  return userTemplates
    .map((template) => pathMap?.[template])
    .flat()
    .filter(Boolean)
}
