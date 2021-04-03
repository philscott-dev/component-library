import React from 'react'
import { Theme } from './decorators'
import { Story, Meta } from '@storybook/react'
import { Portal, PortalProps } from 'components'

export default {
  title: 'Portal',
  component: Portal,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<PortalProps> = (args) => <Portal {...args}>Click</Portal>

export const Default = Template.bind({})
Default.args = {
  mountId: 'mount-id',
}
