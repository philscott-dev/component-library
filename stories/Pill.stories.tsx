import React from 'react'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { Pill, PillProps } from 'components'

export default {
  title: 'Pill',
  component: Pill,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<PillProps> = (args) => <Pill {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Pill Component',
  onClose: undefined,
}

export const Close = Template.bind({})
Close.args = {
  text: 'Close Me',
  onClose: () => false,
}
