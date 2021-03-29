import { useState, useRef } from 'react'
import { useOnClickOutside } from 'hooks'
import { Story, Meta } from '@storybook/react'
import {
  DropdownProps,
  DropdownMenu,
  DropdownHeading,
  DropdownOption,
  Text,
  DropdownDivider,
  Button,
} from 'components'
import { Theme } from './Decorators'

export default {
  title: 'Dropdown',
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<DropdownProps> = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const button2Ref = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  useOnClickOutside({
    ref: dropdownRef,
    ignoreRefs: [buttonRef, button2Ref],
    handler: () => setDropdownVisible(false),
    shouldListen: isDropdownVisible,
  })

  const handleButtonClick = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  const handleOptionClick = (value: any) => {
    console.log(value)
    setDropdownVisible(false)
  }
  return (
    <div>
      <Button ref={buttonRef} onMouseDown={handleButtonClick}>
        Summon Me
      </Button>
      <DropdownMenu ref={dropdownRef} isVisible={isDropdownVisible}>
        <DropdownHeading>Options</DropdownHeading>
        {['one', 'two', 'three'].map((value, i) => (
          <DropdownOption key={i} value={value} onMouseDown={handleOptionClick}>
            <Text>Option {i}</Text>
          </DropdownOption>
        ))}
        <DropdownDivider />
        <DropdownOption>
          <Text variant="deemphasized">Alt Option</Text>
        </DropdownOption>
      </DropdownMenu>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
