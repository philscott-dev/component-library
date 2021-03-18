import React from 'react'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { PortalMount, PortalMountProps } from 'components'

export default {
  title: 'PortalMount',
  component: PortalMount,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<PortalMountProps> = (args) => <PortalMount {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'mount-id',
}
