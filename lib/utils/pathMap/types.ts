export interface Metadata {
  index: number
  prop: string
  data: any
  path: string
}

export interface ObjPaths {
  data: any
  path: (string | number)[]
}

export interface PathMap {
  [template: string]: string[]
}
