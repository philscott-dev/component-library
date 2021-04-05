import React from 'react'
import { Story, Meta } from '@storybook/react'
import { BreadCrumbs, BreadCrumbsProps } from 'components'
import { Theme } from './decorators'

export default {
  title: 'BreadCrumbs',
  component: BreadCrumbs,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<BreadCrumbsProps> = (args) => (
  <BreadCrumbs {...args}>Click</BreadCrumbs>
)

const BASE_PATH = '/?path=/story/breadcrumbs--primary'

export const Primary = Template.bind({})
Primary.args = {
  homePath: BASE_PATH,
  paths: [
    {
      label: 'Path 1',
      href: BASE_PATH,
    },
    {
      label: 'Path 2',
      href: BASE_PATH,
    },
    {
      label: 'Path 3',
      href: BASE_PATH,
    },
  ],
}
