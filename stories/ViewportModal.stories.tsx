import React from 'react'
import { Theme } from './decorators'
import { Story, Meta } from '@storybook/react'
import {
  ViewportModal,
  ViewportModalContainer,
  ViewportModalProps,
} from 'components'

export default {
  title: 'ViewportModal',
  component: ViewportModal,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<ViewportModalProps> = (args) => (
  <ViewportModalContainer>
    <ViewportModal {...args}> body </ViewportModal>
  </ViewportModalContainer>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  index: 0,
}
