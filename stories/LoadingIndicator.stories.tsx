import React from 'react'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { LoadingIndicator, LoadingIndicatorProps } from 'components'

export default {
  title: 'Loading Indicator',
  component: LoadingIndicator,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<LoadingIndicatorProps> = (args) => (
  <LoadingIndicator {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  isLoading: true,
}
