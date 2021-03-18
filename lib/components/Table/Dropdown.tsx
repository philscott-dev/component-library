import styled from '@emotion/styled'
import { forwardRef, RefObject, useMemo, useState, MouseEvent } from 'react'
import { TableDropdownConfig } from './types'
import { DropdownOption, DropdownHeading, DropdownMenu } from 'components'
import { useOnClickOutside, useOnClick } from 'hooks'
import { CellState } from './types_new'
import { isFunction } from 'helpers'
// import { ServiceLinkHeading } from 'components/ServiceLinkHeading'

interface DropdownProps {
  className?: string
  config?: TableDropdownConfig
  cell: CellState
}

const Dropdown = forwardRef<HTMLElement, DropdownProps>(
  ({ className, cell, config }, ref) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false)
    useOnClickOutside(
      ref as RefObject<HTMLElement>,
      () => setDropdownVisible(false),
      true,
    )

    useOnClick(
      ref as RefObject<HTMLElement>,
      () => setDropdownVisible(true),
      true,
    )

    const title = useMemo(() => config?.title(cell), [config, cell])
    const options = useMemo(() => config?.options(cell), [config, cell])
    const shouldRender = useMemo(
      () =>
        isFunction(config?.shouldRender) ? config?.shouldRender(cell) : true,
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
          <DropdownHeading>{title}</DropdownHeading>
          {options?.map((option, index) => (
            <DropdownOption
              key={index}
              value={option.value}
              onMouseDown={handleOptionClick}
            >
              {/* Pivot Secific*/}
              {/* <ServiceLinkHeading
                isCollapsed={false}
                onMouseDown={() => {}}
                title={option.title}
                subtitle={option.subtitle}
                color={option.color}
                showCount={false}
                css={css`
                  margin-top: 8px;
                  margin-bottom: 0;
                `}
              /> */}
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
