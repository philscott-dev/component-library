import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { Subtitle, SubtitleProps } from 'components'

export default {
  title: 'Subtitle',
  component: Subtitle,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
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
