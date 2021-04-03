import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from 'components'
import { Theme } from './decorators'

export default {
  title: 'Button',
  component: Button,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Click</Button>

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: 'tertiary',
}

export const Alt = Template.bind({})
Alt.args = {
  variant: 'alt',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
}
