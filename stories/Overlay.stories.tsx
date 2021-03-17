import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { Overlay, OverlayProps } from 'components'

export default {
  title: 'Overlay',
  component: Overlay,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {},
} as Meta

const Template: Story<OverlayProps> = (args) => <Overlay {...args} />

export const Default = Template.bind({})
Default.args = {
  isVisible: true,
}
