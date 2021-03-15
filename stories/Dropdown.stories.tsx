import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Dropdown, DropdownProps } from 'components'
import { Theme } from './Decorators'

export default {
  title: 'Dropdown',
  component: Dropdown,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<DropdownProps> = (args) => <Dropdown {...args}></Dropdown>

export const Primary = Template.bind({})
Primary.args = {}
