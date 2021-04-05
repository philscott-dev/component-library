export function handleIndexOrStringPaths(
  path: (string | number)[],
  key: string | number,
) {
  if (!path.length) {
    return [key]
  }
  if (typeof key === 'number') {
    return [
      ...path.slice(0, path.length - 1),
      path[path.length - 1] + `[${key}]`,
    ]
  }
  return path.concat(key)
}
