import { FC, useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Tbody from './Tbody'
import Thead from './Thead'
import Th from './Th'
import Tr, { Row } from './Tr'
import useUniqueKeys from './hooks/useUniqueKeys'
import { get, splitCamalized } from 'helpers'
import {
  Data,
  ExtraTableData,
  CellClickFunction,
  TableDropdownConfig,
} from './types'
import { TableContext } from './TableContext'

export interface TableProps {
  data?: Data[]
  extraData?: ExtraTableData
  exclude?: string[]
  include?: string[]
  isScrollable?: boolean
  className?: string
  headingDropdownConfig?: TableDropdownConfig
  cellDropdownConfig?: TableDropdownConfig
  onCellClick?: CellClickFunction
}

const Table: FC<TableProps> = ({
  className,
  data,
  extraData,
  exclude,
  include,
  isScrollable,
  headingDropdownConfig,
  cellDropdownConfig,
  onCellClick,
}) => {
  /**
   * Optional TableContext hook
   * <Table> still works if not wrapped in <TableContextProvider>
   */
  const { breadCrumbs, tablePath, setBreadCrumbs, setTablePath } = useContext(
    TableContext,
  )

  const [tableData, setTableData] = useState<Data[]>([])

  const keys = useUniqueKeys({ data: tableData, extraData, include, exclude })

  // _.get path and get data to load
  useEffect(() => {
    const d = get(data, tablePath?.join() ?? '', data)
    setTableData(d)
  }, [data, tablePath])

  const handleLoadTable = (r: number, keys: string[], key: string) => {
    const row = String(r)
    const label = splitCamalized(key).join(' ')
    if (tablePath && breadCrumbs && setBreadCrumbs && setTablePath) {
      setTablePath([...tablePath, [row, ...keys, key]])
      setBreadCrumbs([...breadCrumbs, { label: `[${r}] ${label}` }])
    }
  }

  const genrateRowKey = (index: number) => {
    const i = String(index)

    if (!breadCrumbs) {
      return '__home' + i
    }

    const len = breadCrumbs.length - 1
    return breadCrumbs[len]?.label + i ?? '__home' + i
  }

  return (
    <table className={className}>
      <Thead>
        <Row>
          {/* <Th
              key={'table__checkbox'}
              heading={'table__checkbox'}
              extraData={{
                table__checkbox: {
                  heading: () => <div></div>,
                  cell: () => <div></div>,
                },
              }}
            /> */}
          {keys.map((key) => (
            <Th
              key={key}
              heading={key}
              extraData={extraData}
              dropdownConfig={headingDropdownConfig}
            />
          ))}
        </Row>
      </Thead>
      <Tbody isScrollable={isScrollable}>
        {tableData?.map((obj, index) => {
          return (
            <Tr
              key={genrateRowKey(index)}
              rowIndex={index}
              keys={keys}
              originalRow={obj}
              extraData={extraData}
              data={data}
              onLoadTable={handleLoadTable}
              onCellClick={onCellClick}
              dropdownConfig={cellDropdownConfig}
            />
          )
        })}
      </Tbody>
    </table>
  )
}

export default styled(Table)`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 0;
`
