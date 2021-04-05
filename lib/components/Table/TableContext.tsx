import type { BreadCrumb, Data } from './types'
import { get } from 'helpers'
import { flattenData, getMetadata, PathMap } from 'utils/pathMap'
import { getPathsFromTemplates } from 'lib/utils/pathMap/getPathsFromTemplates'
import { excludePathMaps, getPaths } from 'utils/pathMap'
import {
  FC,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react'

export interface TableContextProps {
  tableData?: Data[]
  tablePath?: string[][]
  breadCrumbs?: BreadCrumb[]
  data?: Data[]
  userPaths?: string[]
  pathMap?: PathMap
  originalPathMap?: PathMap
  setBreadCrumbs?: Dispatch<SetStateAction<BreadCrumb[]>>
  setTablePath?: Dispatch<SetStateAction<string[][]>>
  setUserPaths?: Dispatch<SetStateAction<string[]>>
}

export const TableContext = createContext<TableContextProps>({
  tableData: [],
  tablePath: [],
  data: [],
  breadCrumbs: [],
})

export interface TableContextProviderProps {
  data?: Data[]
}

export const TableContextProvider: FC<TableContextProviderProps> = ({
  children,
  data,
}) => {
  const originalPathMap = useMemo(() => {
    const initialMap = getPaths(data)
    return excludePathMaps(initialMap)
  }, [data])

  const [tableData, setTableData] = useState<Data[] | undefined>(data)
  const [tablePath, setTablePath] = useState<string[][]>([])
  const [breadCrumbs, setBreadCrumbs] = useState<BreadCrumb[]>([])
  const [userPaths, setUserPaths] = useState<string[]>([])
  const [pathMap, setPathMap] = useState<PathMap>()

  useEffect(() => {
    const d = get(data, tablePath?.join() ?? '', data)
    const initialMap = getPaths(d)
    const pathMap = excludePathMaps(initialMap)
    if (userPaths && userPaths.length) {
      const paths = getPathsFromTemplates(userPaths, pathMap)
      const metadata = getMetadata(d, paths)

      // get flat data and map
      const flat = flattenData(metadata)
      const initialFlatMap = getPaths(flat)
      const flatMap = excludePathMaps(initialFlatMap)
      setTableData(flat)
      setPathMap(flatMap)
    } else {
      setTableData(d)
      setPathMap(pathMap)
    }
  }, [userPaths, tablePath, data])

  useEffect(() => {
    setTablePath([])
    setBreadCrumbs([])
  }, [userPaths])

  return (
    <TableContext.Provider
      value={{
        breadCrumbs,
        tablePath,
        tableData,
        data,
        pathMap,
        originalPathMap,
        setTablePath,
        setBreadCrumbs,
        setUserPaths,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}
