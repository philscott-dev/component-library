import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { } from 'components'

export default {
  title: 'Modal',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button.Primary {...args}>Click</Button.Primary>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'small',
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'large',
}
