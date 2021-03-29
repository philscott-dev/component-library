import { FC } from 'react'
import styled from '@emotion/styled'
import { Text, IconButton } from 'components'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export interface PaginationProps {
  className?: string
  page: number
  pageCount: number
  onChangePage: (nextPage: number) => void
}

const Pagination: FC<PaginationProps> = ({
  className,
  page,
  pageCount,
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
  return (
    <div className={className}>
      <IconButton onMouseDown={handlePageDown}>
        <FiChevronLeft />
      </IconButton>
      <Text variant="primary">
        {page} of {pageCount}
      </Text>
      <IconButton onMouseDown={handlePageUp}>
        <FiChevronRight />
      </IconButton>
    </div>
  )
}

export default styled(Pagination)`
  display: inline-flex;
  align-items: center;
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    width: 24px;
    height: 24px;
  }
  > p {
    margin: 0 8px;
    text-transform: uppercase;
  }
`
