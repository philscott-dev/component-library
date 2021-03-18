import React from 'react'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { Table, TableProps } from 'components'
import data from './mock'

export default {
  title: 'Table',
  component: Table,
  decorators: [Theme],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TableProps> = (args) => <Table {...args}>Click</Table>

export const Primary = Template.bind({})
Primary.args = {
  title: 'Data Table',
  data,
}
