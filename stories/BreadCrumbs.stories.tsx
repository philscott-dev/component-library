import React from 'react'
import { Story, Meta } from '@storybook/react'
import { BreadCrumbs, BreadCrumbsProps } from 'components'
import { Theme } from './Decorators'

export default {
  title: 'BreadCrumbs',
  component: BreadCrumbs,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<BreadCrumbsProps> = (args) => (
  <BreadCrumbs {...args}>Click</BreadCrumbs>
)

export const Primary = Template.bind({})
Primary.args = {}
