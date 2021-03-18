/**
 * CSV Export by selected paths
 */

export function arrayToCsv(items: any[], paths: string[]) {
  const header = paths.map((path) => {
    const p = path.split('.')
    const h = p[p.length - 1]
    return h.endsWith(']') ? h.substring(0, h.indexOf('[')) : h
  })
  return [
    header.join(','), // header row first
    ...items.map((row) =>
      header
        .map((fieldName) => {
          let field = row[fieldName]

          if (Array.isArray(field)) {
            field = field.join('\r\n')
          }
          return JSON.stringify(field, (key: string, value: any) =>
            value === null ? '' : value,
          )
        })
        .join(','),
    ),
  ]
    .join('\r\n')
    .split('\\r\\n') // doing this for nested arrays that should be split
    .join('\r\n') // TODO: get rid of this...
}
