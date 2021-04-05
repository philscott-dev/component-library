import styled from '@emotion/styled'
import { FC } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface PageArrowsProps {
  className?: string
}

const PageArrows: FC<PageArrowsProps> = ({ className }) => {
  return (
    <div className={className}>
      <FiChevronUp />
      <FiChevronDown />
    </div>
  )
}

export default styled(PageArrows)`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  > svg {
    font-size: 10px;
  }
`
