import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Alert } from 'components'
import { Theme } from './decorators'

export default {
  title: 'Alert',
  component: Alert,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story = (args) => <Alert {...args}>Click</Alert>

export const Primary = Template.bind({})
Primary.args = {
  size: 'small',
}
