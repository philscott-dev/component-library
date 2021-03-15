import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Anchor, AnchorProps } from 'components'
import { Theme } from './Decorators'

export default {
  title: 'Anchor',
  component: Anchor,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<AnchorProps> = (args) => <Anchor {...args}>Click</Anchor>

export const Primary = Template.bind({})
Primary.args = {
  size: 'small',
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'large',
}
