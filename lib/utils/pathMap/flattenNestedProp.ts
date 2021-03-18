import { isObject } from 'helpers'
import { parseKey } from '.'
import { Metadata } from './types'

/**
 * Paths selected will be written back to top level of each object and removed
 * from their original position.If used, you should not allow paths with length
 * of 2 because those paths are the object themselves.
 * = NOT USING IN DEMO index.ts =
 */

export function flattenNestedProp(response: any, metadata: Metadata[]) {
  for (const { index, prop, data, path } of metadata) {
    // spread the original data and add the flattened data to the top level
    if (response[index][prop]) {
      // if the path already exists add value as a new line
      response[index][prop] = `${response[index][prop]}\r\n ${data}`
    } else {
      // else create a new prop top level and add data
      response[index] = { ...response[index], [prop]: data }
    }

    // delete the old data at path
    const paths = path.split('.')
    paths.reduce((obj, key, index) => {
      let temp = obj
      const [k, i] = parseKey(key, index)

      // as long as theres an array or object nested
      if (k && isObject(temp)) {
        if (typeof temp[k] === 'object') {
          // if the value is an object or array, assign and continue
          temp = temp[k]
        } else {
          // IMPORTANT: else, it's a value, so delete the nested key!
          delete temp[k]
        }
      }

      // assign array element and continue
      if (typeof i === 'number' && Array.isArray(temp)) {
        temp = temp[i]
      }

      return temp
    }, response)
  }

  return response
}
