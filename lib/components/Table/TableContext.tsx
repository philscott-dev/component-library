import type { BreadCrumb, Data } from './types'
import { get } from 'helpers'
import {
  FC,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'

export interface TableContextProps {
  tableData?: Data[]
  tablePath?: string[][]
  breadCrumbs?: BreadCrumb[]
  data?: Data[]
  setBreadCrumbs?: Dispatch<SetStateAction<BreadCrumb[]>>
  setTablePath?: Dispatch<SetStateAction<string[][]>>
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
  const [tableData, setTableData] = useState<Data[] | undefined>(data)
  const [tablePath, setTablePath] = useState<string[][]>([])
  const [breadCrumbs, setBreadCrumbs] = useState<BreadCrumb[]>([])

  // _.get path and get data to load
  useEffect(() => {
    const d = get(data, tablePath?.join() ?? '', data)
    setTableData(d)
  }, [data, tablePath])

  return (
    <TableContext.Provider
      value={{
        breadCrumbs,
        tablePath,
        tableData,
        data,
        setTablePath,
        setBreadCrumbs,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}
