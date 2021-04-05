import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { FC, useEffect, useState, MouseEvent, useRef } from 'react'
import { FiDatabase } from 'react-icons/fi'
import { splitAndUpperCase } from 'helpers'
import { Data, CellClickFunction, TableDropdownConfig } from '../types'
import { useValueType } from '../hooks/useValueType'
import RowExpandArrow from './RowExpandArrow'
import RowExpandValueHeading from './RowExpandValueHeading'
import RowExpandValueText from './RowExpandValueText'
import Dropdown from '../Dropdown'

interface RowExpandValueProps {
  className?: string
  cellKey: string
  expandKey: string
  expandIndex: number
  rowIndex: number
  row: Data
  data?: Data[]
  dropdownConfig?: TableDropdownConfig
  onCellClick?: CellClickFunction
}
const RowExpandValue: FC<RowExpandValueProps> = ({
  className,
  cellKey,
  expandKey,
  expandIndex,
  rowIndex,
  row,
  data,
  dropdownConfig,
  onCellClick,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const cell = useValueType(rowIndex, cellKey, row)
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(splitAndUpperCase(cellKey || ''))
  }, [cellKey])

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onCellClick) {
      onCellClick(
        e,
        cellKey,
        cell.type,
        rowIndex,
        expandIndex,
        row[cellKey],
        row,
        data,
      )
    }
  }
  return (
    <Wrapper ref={ref}>
      <ValueButton
        className={className}
        isActive={expandKey === cellKey}
        onMouseDown={handleClick}
      >
        <RowExpandValueHeading>{title}</RowExpandValueHeading>
        <Flex>
          {cell.type === 'table' ? (
            <DataIconWrap>
              <FiDatabase />
            </DataIconWrap>
          ) : null}
          <RowExpandValueText>{cell.value}</RowExpandValueText>
          {cell.type === 'object' || cell.type === 'array' ? (
            <RowExpandArrow isActive={expandKey === cellKey} />
          ) : null}
        </Flex>
      </ValueButton>
      {dropdownConfig ? (
        <Dropdown
          ref={ref}
          cell={cell}
          config={dropdownConfig}
          css={css`
            top: 50px;
            left: 0;
          `}
        />
      ) : null}
    </Wrapper>
  )
}

export default RowExpandValue

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
`

const ValueButton = styled.button<{ isActive: boolean }>`
  box-sizing: border-box;
  padding: 6px;
  margin: 0;
  margin-right: 24px;
  min-width: 88px;
  min-height: 55px;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
  background: transparent;
  user-select: text;
  border: 2px solid
    ${({ theme, isActive }) =>
      isActive ? theme.color.blue[300] : 'transparent'};
  &:hover {
    border: 2px solid ${({ theme }) => theme.color.blue[300]};
  }
  transition: all 0.1s ease-in-out;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const DataIconWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${({ theme }) => theme.color.white[100]};
`
