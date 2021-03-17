import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { Portal, PortalProps } from 'components'

export default {
  title: 'Portal',
  component: Portal,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {},
} as Meta

const Template: Story<PortalProps> = (args) => <Portal {...args}>Click</Portal>

export const Default = Template.bind({})
Default.args = {
  mountId: 'mount-id',
}
