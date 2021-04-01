import { FC } from 'react'
import styled from '@emotion/styled'
import { Text, IconButton } from 'components'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import PageDropdown from './PageDropdown'

export type MenuVertical = 'up' | 'down'
export type MenuHorizontal = 'left' | 'right'

export interface PaginationProps {
  className?: string
  page: number
  pageCount: number
  onChangePage: (nextPage: number) => void
  menuVertical?: MenuVertical
  menuHorizontal?: MenuHorizontal
}

const Pagination: FC<PaginationProps> = ({
  className,
  page,
  pageCount,
  menuVertical,
  menuHorizontal,
  onChangePage,
}) => {
  const handlePageUp = () => {
    const nextPage = page + 1
    if (nextPage <= pageCount) {
      onChangePage(nextPage)
    }
  }

  const handlePageDown = () => {
    const nextPage = page - 1
    if (nextPage >= 1) {
      onChangePage(nextPage)
    }
  }

  const handleClickPage = (nextPage: number) => {
    onChangePage(nextPage)
  }
  return (
    <div className={className}>
      <IconButton onMouseDown={handlePageDown}>
        <FiChevronLeft />
      </IconButton>
      <hr />
      <PageDropdown
        page={page}
        pageCount={pageCount}
        onClickPage={handleClickPage}
        menuHorizontal={menuHorizontal}
        menuVertical={menuVertical}
      />
      <Text variant="light">of</Text>
      <Text>{pageCount}</Text>
      <hr />
      <IconButton onMouseDown={handlePageUp}>
        <FiChevronRight />
      </IconButton>
    </div>
  )
}

export default styled(Pagination)`
  display: inline-flex;
  align-items: center;
  padding: 6px;
  background: ${({ theme }) => theme.color.indigo[400]};
  border-radius: 4px;
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    > svg {
      font-size: 20px;
    }
  }
  > p {
    margin-left: 8px;
  }
  > hr {
    height: 24px;
    margin: 0 8px;
    border: 1px solid #545454;
  }
`
