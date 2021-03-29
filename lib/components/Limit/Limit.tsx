import styled from '@emotion/styled'
import { FC, useRef, useState, MouseEvent } from 'react'
import { useOnClickOutside } from 'hooks'
import { IconButton, Text } from 'components'
import { FiChevronDown } from 'react-icons/fi'
import { DropdownMenu, DropdownOption } from '../Dropdown'

export interface LimitProps {
  className?: string
  value: number
  options?: number[]
  onChange: (value: number) => void
}

const Limit: FC<LimitProps> = ({
  className,
  value,
  options = [10, 50, 100],
  onChange,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  useOnClickOutside({
    ref: dropdownRef,
    ignoreRefs: [buttonRef],
    handler: () => setDropdownVisible(false),
    shouldListen: isDropdownVisible,
  })

  const handleButtonClick = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  const handleOptionClick = (e: MouseEvent<HTMLButtonElement>) => {
    setDropdownVisible(false)
    onChange(Number(e.currentTarget.value))
  }
  return (
    <span className={className}>
      <Text variant="deemphasized">RESULTS PER PAGE</Text>
      <div>
        <IconButton ref={buttonRef} onMouseDown={handleButtonClick}>
          <Text>{value}</Text>
          <FiChevronDown />
        </IconButton>
        <DropdownMenu ref={dropdownRef} isVisible={isDropdownVisible}>
          {options.map((option, i) => (
            <DropdownOption
              key={i}
              value={option}
              onMouseDown={handleOptionClick}
            >
              <Text>{option}</Text>
            </DropdownOption>
          ))}
        </DropdownMenu>
      </div>
    </span>
  )
}

export default styled(Limit)`
  display: inline-flex;
  align-items: center;
  > p {
    margin-right: 16px;
    font-size: 14px;
    font-weight: 500;
  }
  > div {
    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      padding: 2px 8px;
      border: ${({ theme }) => `1px solid ${theme.color.white[100]}`};
      > p {
        margin-right: 2px;
      }
    }
  }
`
