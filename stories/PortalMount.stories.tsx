import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { PortalMount, PortalMountProps } from 'components'

export default {
  title: 'PortalMount',
  component: PortalMount,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {},
} as Meta

const Template: Story<PortalMountProps> = (args) => <PortalMount {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'mount-id',
}
