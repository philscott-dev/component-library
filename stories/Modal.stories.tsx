import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { Modal, ModalProps } from 'components'

export default {
  title: 'Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {},
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args}></Modal>

export const Primary = Template.bind({})
Primary.args = {
  isVisible: true,
  title: 'Confirm Information'
}