import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IconButton } from 'components'
import { Theme } from './Decorators'
import { FiInfo } from 'react-icons/fi'

export default {
  title: 'IconButton',
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story = (args) => (
  <IconButton {...args}>
    <FiInfo />
  </IconButton>
)
export const Primary = Template.bind({})
Primary.args = {}
