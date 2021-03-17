import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { Text, TextProps } from 'components'

export default {
  title: 'Text',
  component: Text,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {},
} as Meta

const Template: Story<TextProps> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
  </Text>
)

export const Default = Template.bind({})
Default.args = {
  size: 'normal',
  variant: 'primary',
  align: 'left',
  ellipsis: false,
}
