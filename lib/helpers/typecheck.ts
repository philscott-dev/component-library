import { parseISO, isDate } from 'date-fns'

export function isDateString(x: any) {
  if (isDate(x)) {
    return false
  }
  const date = parseISO(x)
  return date instanceof Date && !isNaN(date.getTime())
}

export function isNumber(x: any) {
  return typeof x === 'number'
}

export function isString(x: any) {
  return typeof x === 'string'
}

export function isBoolean(x: any) {
  return typeof x === 'boolean'
}

export function isFunction(x: any) {
  return typeof x === 'function'
}

export function isObject(x: any) {
  return !!x && !Array.isArray(x) && x.constructor === Object
}
