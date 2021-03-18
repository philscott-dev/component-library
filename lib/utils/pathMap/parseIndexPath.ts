// path templates that look like "myKey[100]""
export function parseIndexPath(key: string) {
  const start = key.indexOf('[')
  const end = key.indexOf(']')

  if (start < 0 || end < 0 || end < start) {
    return { key }
  }

  return {
    key: key.substring(0, start),
    index: parseInt(key.substring(start + 1, end), 10),
  }
}
