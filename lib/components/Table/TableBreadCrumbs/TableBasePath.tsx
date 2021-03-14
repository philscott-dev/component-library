import React from 'react'
import { FC } from 'react'
import styled from '@emotion/styled'
import { FiHome } from 'react-icons/fi'
import { Anchor } from 'components'

interface TableBasePathProps {
  className?: string
  label: string
  href?: string
  onClick: () => void
}
const TableBasePath: FC<TableBasePathProps> = ({
  className,
  label,
  href,
  onClick,
}) => {
  return (
    <Anchor
      className={className}
      aria-label="Home"
      href={href}
      onMouseDown={onClick}
      size="small"
    >
      {label?.length ? label : <FiHome />}
    </Anchor>
  )
}

export default styled(TableBasePath)`
  display: flex;
  align-items: center;
  line-height: unset;
  text-transform: uppercase;
  text-decoration: none;

  font-weight: 500;
  color: ${({ theme }) => theme.color.gray[300]};
`
