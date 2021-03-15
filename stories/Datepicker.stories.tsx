import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Datepicker, DatepickerProps } from 'components'
import { Theme } from './Decorators'

export default {
  title: 'Datepicker',
  component: Datepicker,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<DatepickerProps> = (args) => <Datepicker {...args} />

export const Primary = Template.bind({})
Primary.args = {}
