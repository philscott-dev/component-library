import { FC, createContext, useState, Dispatch, SetStateAction } from 'react'
import { BreadCrumb } from './types'

export interface TableContextProps {
  tablePath?: string[][]
  breadCrumbs?: BreadCrumb[]
  setBreadCrumbs?: Dispatch<SetStateAction<BreadCrumb[]>>
  setTablePath?: Dispatch<SetStateAction<string[][]>>
}

export const TableContext = createContext<TableContextProps>({
  tablePath: [],
  breadCrumbs: [],
})

export const TableContextProvider: FC = ({ children }) => {
  const [tablePath, setTablePath] = useState<string[][]>([])
  const [breadCrumbs, setBreadCrumbs] = useState<BreadCrumb[]>([])

  return (
    <TableContext.Provider
      value={{ breadCrumbs, tablePath, setTablePath, setBreadCrumbs }}
    >
      {children}
    </TableContext.Provider>
  )
}
