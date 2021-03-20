import { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import {
  Pagination,
  Table,
  TableBreadCrumbs,
  TableContextProvider,
  TableProps,
} from 'components'
import { tableDropdownConfig } from './config/tableDropdownConfig'
import data from './mock'

export default {
  title: 'Table',
  component: Table,
  decorators: [Theme],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TableProps> = (args) => {
  const [page, setPage] = useState(1)

  const handleChangePage = (nextPage: number) => {
    setPage(nextPage)
  }

  return (
    <Wrapper>
      <TableContextProvider>
        <TableBreadCrumbs />
        <Table {...args} />
      </TableContextProvider>
      <Pagination page={page} pageCount={10} onChangePage={handleChangePage} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export const Primary = Template.bind({})
Primary.args = {
  title: 'Data Table',
  data,
  headingDropdownConfig: tableDropdownConfig,
  cellDropdownConfig: tableDropdownConfig,
}
