import { parseIndexPath } from '.'

export function parseKey(
  key: string,
  index: number,
): [string | undefined, number | undefined] {
  if (index === 0) {
    const n = parseInt(key, 10)
    return [undefined, n]
  }

  if (key.endsWith(']')) {
    const parsed = parseIndexPath(key)
    return [parsed.key, parsed.index]
  }

  return [key, undefined]
}
