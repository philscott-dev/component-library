import React from 'react'
import { Theme } from './decorators'
import { Story, Meta } from '@storybook/react'
import { Overlay, OverlayProps } from 'components'

export default {
  title: 'Overlay',
  component: Overlay,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<OverlayProps> = (args) => <Overlay {...args} />

export const Default = Template.bind({})
Default.args = {
  isVisible: true,
}
