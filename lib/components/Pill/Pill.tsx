import React from 'react'
import { FC } from 'react'
import styled from '@emotion/styled'
import { Text, IconButton } from 'components'
import { FiX } from 'react-icons/fi'

export interface PillProps {
  className?: string
  onClose?: () => void
  text: string
}

const Pill: FC<PillProps> = ({ className, onClose, text }) => (
  <div className={className}>
    <Text size="small">{text}</Text>
    {onClose ? (
      <IconButton aria-label="close" onMouseDown={onClose}>
        <FiX />
      </IconButton>
    ) : null}
  </div>
)

export default styled(Pill)`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  margin: 8px 0;
  border-radius: 40px;
  margin-right: 16px;
  background: ${({ theme }) => theme.color.blue[400]};
  & > button {
    margin-left: 8px;
    > {
      color: ${({ theme }) => theme.color.white[100]};
    }
  }
`
