import styled from '@emotion/styled'
import { forwardRef, RefObject, useMemo, useState, MouseEvent } from 'react'
import { TableDropdownConfig, CellState } from './types'
import { useOnClickOutside, useOnClick } from 'hooks'
import { isFunction } from 'helpers'
import {
  DropdownOption,
  DropdownHeading,
  DropdownMenu,
  Anchor,
  Text,
} from 'components'
// import { ServiceLinkHeading } from 'components/ServiceLinkHeading'

interface DropdownProps {
  className?: string
  config?: TableDropdownConfig
  cell: CellState
}

const Dropdown = forwardRef<HTMLElement, DropdownProps>(
  ({ className, cell, config }, ref) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false)
    useOnClickOutside({
      ref: ref as RefObject<HTMLElement>,
      handler: () => setDropdownVisible(false),
    })

    useOnClick({
      ref: ref as RefObject<HTMLElement>,
      handler: () => setDropdownVisible(true),
    })

    const title = useMemo(() => config?.title(cell), [config, cell])
    const options = useMemo(() => config?.options(cell), [config, cell])
    const shouldRender = useMemo(
      () =>
        config && config.shouldRender && isFunction(config.shouldRender)
          ? config.shouldRender(cell)
          : true,
      [config, cell],
    )

    const handleOptionClick = (e: MouseEvent<HTMLButtonElement>) => {
      setDropdownVisible(false)
      config?.onClick(e, cell)
    }

    if (!shouldRender || (cell.type !== 'text' && cell.type !== 'date')) {
      return null
    }

    return (
      <div className={className}>
        <DropdownMenu isVisible={isDropdownVisible}>
          {title ? <DropdownHeading>{title}</DropdownHeading> : null}
          {options?.map((option, index) => (
            <DropdownOption
              key={index}
              value={option.value}
              onMouseDown={handleOptionClick}
            >
              <div>
                <Anchor>{option.title}</Anchor>
                <Text variant="deemphasized" size="small">
                  {option.subtitle}
                </Text>
              </div>
            </DropdownOption>
          ))}
        </DropdownMenu>
      </div>
    )
  },
)

export default styled(Dropdown)`
  position: absolute;
`
