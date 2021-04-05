import type { Metadata } from './types'

/**
 * Generate new copy of tableData array, with ONLY flattened properties
 */

export function flattenData<T>(metadata: Metadata<T>[]) {
  const temp: any[] = []
  // flatten the table by selected path
  for (const { index, data, prop: p } of metadata) {
    //get the prop name without the [*] index
    const prop = p.endsWith(']') ? p.substring(0, p.indexOf('[')) : p

    if (temp[index]?.[prop]) {
      // if the data exists, add it to the flattened prop
      if (Array.isArray(temp[index][prop])) {
        // spread the data if the array exists
        temp[index][prop] = [...temp[index][prop], data]
      } else {
        // else create an array for the first time
        temp[index][prop] = [temp[index][prop], data]
      }
    } else {
      // else create a new prop top level and add data
      temp[index] = { ...(temp[index] ?? {}), [prop]: data }
    }
  }
  return temp
}
