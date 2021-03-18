import React from 'react'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { Subtitle, SubtitleProps } from 'components'

export default {
  title: 'Subtitle',
  component: Subtitle,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<SubtitleProps> = (args) => (
  <Subtitle {...args}>Click</Subtitle>
)

export const Default = Template.bind({})
Default.args = {
  size: 'normal',
  weight: 'normal',
}
