import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Form, FormProps } from 'components'
import { Theme } from './decorators'

export default {
  title: 'Form',
  component: Form,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<FormProps> = (args) => <Form {...args}></Form>

export const Primary = Template.bind({})
Primary.args = {}
