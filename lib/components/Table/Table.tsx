import { FC, useContext } from 'react'
import styled from '@emotion/styled'
import Tbody from './Tbody'
import Thead from './Thead'
import Th from './Th'
import Tr, { Row } from './Tr'
import useUniqueKeys from './hooks/useUniqueKeys'
import { splitCamalized } from 'helpers'
import { TableContext } from './TableContext'
import type {
  Data,
  ExtraTableData,
  CellClickFunction,
  TableDropdownConfig,
} from './types'

export interface TableProps {
  tableData?: Data[]
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
  tableData = [],
  className,
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

  const keys = useUniqueKeys({ data: tableData, extraData, include, exclude })

  const handleLoadTable = (r: number, keys: string[], key: string) => {
    const row = String(r)
    const label = splitCamalized(key).join(' ')
    if (tablePath && breadCrumbs && setBreadCrumbs && setTablePath) {
      setTablePath([...tablePath, [row, ...keys, key]])
      setBreadCrumbs([...breadCrumbs, { label: `${label}` }])
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
              data={tableData}
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
