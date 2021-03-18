import React from 'react'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { Pagination, PaginationProps } from 'components'

export default {
  title: 'Pagination',
  component: Pagination,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  page: 1,
  pageCount: 10,
}
