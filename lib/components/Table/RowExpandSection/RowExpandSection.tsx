import styled from '@emotion/styled'
import { FC, useState, useEffect } from 'react'
import { splitAndUpperCase } from 'helpers'
import RowExpandTitle from './RowExpandTitle'
import RowExpandValue from './RowExpandValue'
import { Data, CellClickFunction, TableDropdownConfig } from '../types'

interface RowExpandSectionProps {
  className?: string
  expandIndex: number
  rowIndex: number
  cellKey: string
  expandKey: string
  row: Data
  data?: Data[]
  dropdownConfig?: TableDropdownConfig
  onCellClick?: CellClickFunction
}
const RowExpandSection: FC<RowExpandSectionProps> = ({
  className,
  expandIndex,
  rowIndex,
  row,
  data,
  cellKey,
  expandKey,
  dropdownConfig,
  onCellClick,
}) => {
  const [title, setTitle] = useState('')
  useEffect(() => {
    setTitle(splitAndUpperCase(cellKey || ''))
  }, [cellKey])

  return (
    <section className={className}>
      <RowExpandTitle>{title}</RowExpandTitle>
      <div>
        {Object.keys(row || []).map((key, i) => (
          <RowExpandValue
            key={i}
            expandIndex={expandIndex}
            rowIndex={rowIndex}
            cellKey={key}
            expandKey={expandKey}
            row={row}
            data={data}
            dropdownConfig={dropdownConfig}
            onCellClick={onCellClick}
          />
        ))}
      </div>
    </section>
  )
}

export default styled(RowExpandSection)`
  box-sizing: border-box;
  padding: 6px;
  background: ${({ theme }) => theme.color.indigo[300]};
  border-bottom: 1px solid ${({ theme }) => theme.color.indigo[600]};
  &:nth-last-of-type(1) {
    border-radius: 0 0 8px 8px;
    border-bottom: none;
  }
`
