import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { Alert } from 'components'

export default {
  title: 'Alert',
  component: Alert,
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

const Template: Story = (args) => <Alert {...args}>Click</Alert>

export const Primary = Template.bind({})
Primary.args = {
  size: 'small',
}
