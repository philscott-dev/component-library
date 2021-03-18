import { parseIndexPath } from './parseIndexPath'

/**
 * Converts array indicies to * or [*] and stringifies keys
 */

export function createTemplateString(path: (string | number)[]) {
  return path
    .map((p) => {
      if (typeof p === 'number') {
        return '*'
      }
      if (p.endsWith(']')) {
        const { key } = parseIndexPath(p)
        return `${key}[*]`
      }
      return p
    })
    .join('.')
}
