import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { Table, TableProps } from 'components'
import data from './mock'

export default {
  title: 'Table',
  component: Table,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TableProps> = (args) => <Table {...args}>Click</Table>

export const Primary = Template.bind({})
Primary.args = {
  title: 'Data Table',
  data,
}
