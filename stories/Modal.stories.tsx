import React from 'react'
import { Theme } from './decorators'
import { Story, Meta } from '@storybook/react'
import { Modal, ModalProps } from 'components'

export default {
  title: 'Modal',
  component: Modal,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args}></Modal>

export const Primary = Template.bind({})
Primary.args = {
  isVisible: true,
  title: 'Confirm Information',
}
