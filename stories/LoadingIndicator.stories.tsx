import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { LoadingIndicator, LoadingIndicatorProps } from 'components'

export default {
  title: 'Loading Indicator',
  component: LoadingIndicator,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {},
} as Meta

const Template: Story<LoadingIndicatorProps> = (args) => (
  <LoadingIndicator {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  isLoading: true,
}
