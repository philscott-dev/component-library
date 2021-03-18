import React from 'react'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { Table, TableProps } from 'components'
import data from './mock'
import { TableDropdownConfig } from 'lib/components/Table/types'

export default {
  title: 'Table',
  component: Table,
  decorators: [Theme],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TableProps> = (args) => (
  <div style={{ height: 500, overflow: 'auto' }}>
    <Table {...args}>Click</Table>
  </div>
)

const tableDropdownConfig: TableDropdownConfig = {
  shouldRender: () => true,
  title: () => 'Dropdown',
  options: () => [
    {
      title: 'Option 1',
      subtitle: 'Subtitle 1',
      color: '#fcfcfc',
      value: 'yes',
    },
    {
      title: 'Option 2',
      subtitle: 'Subtitle 2',
      color: '#fcfcfc',
      value: 'yes',
    },
    {
      title: 'Option 3',
      subtitle: 'Subtitle 3',
      color: '#fcfcfc',
      value: 'yes',
    },
  ],
  onClick: (e, data) => {
    console.log(data)
  },
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'Data Table',
  data,
  headingDropdownConfig: tableDropdownConfig,
  cellDropdownConfig: tableDropdownConfig,
}
