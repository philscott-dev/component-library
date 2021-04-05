import { get } from 'helpers'
import type { Metadata } from './types'

/**
 * Get the data and position information of keys at selected paths
 */

export function getMetadata<T>(data: T, paths: string[]): Metadata<T>[] {
  return paths.map((path) => {
    // split the path
    const keys = path.split('.')

    // working with table data, 1st split should always be a number
    const index = parseInt(keys[0], 10)

    // get property at the end of the template
    const prop = keys[keys.length - 1]

    // get data for path
    const result = get(data, path)

    // return the gathered info to work with
    return { index, prop, path, data: result }
  })
}
