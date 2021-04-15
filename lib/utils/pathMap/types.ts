export interface Metadata<T> {
  index: number
  prop: string
  data: T
  path: string
}

export interface ObjPaths<T> {
  data: T[]
  path: (string | number)[]
}

export interface PathMap {
  [template: string]: string[]
}
