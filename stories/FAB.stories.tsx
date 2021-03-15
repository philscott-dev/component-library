import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FAB, FABProps } from 'components'
import { Theme } from './Decorators'

export default {
  title: 'FAB',
  component: FAB,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<FABProps> = (args) => <FAB {...args} />

export const Primary = Template.bind({})
Primary.args = {}
