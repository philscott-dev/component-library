import { ChangeEvent, useContext } from 'react'
import styled from '@emotion/styled'
import { Story, Meta } from '@storybook/react'
import { tableDropdownConfig } from './config/tableDropdownConfig'
import { useTableInput, usePathMap } from 'lib/components/Table/hooks'
import { TableDataProvider, Theme } from './decorators'
import {
  Pagination,
  Table,
  TableBreadCrumbs,
  TableProps,
  useTable,
  H2,
  Text,
  Limit,
  Export,
  Search,
} from 'components'
import { TableContext } from 'lib/components/Table/TableContext'

export default {
  title: 'Table',
  component: Table,
  decorators: [Theme, TableDataProvider],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TableProps> = ({
  headingDropdownConfig,
  cellDropdownConfig,
}) => {
  const { tableData } = useContext(TableContext)
  const [search, setSearch] = useTableInput({ defaultValue: '', delay: 200 })
  const [limit, setLimit] = useTableInput({ defaultValue: 10 })
  const { pathMap, pathKeys, paths } = usePathMap(tableData)
  const [{ page, pageData, pageCount, pageIndex, count }, setPage] = useTable({
    data: tableData,
    pathMap,
    pathKeys,
    limit: limit.delayed,
    search: search.delayed,
  })

  const handleChangeTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  const handleChangePage = (nextPage: number) => {
    setPage(nextPage)
  }
  const handleLimit = (value: number) => {
    setLimit(value)
  }

  return (
    <>
      <TableHeader align="flex-start">
        <div>
          <H2>Users</H2>
          <TableBreadCrumbs baseLabel={'All Users'} />
        </div>
        <Export data={tableData} paths={paths} />
      </TableHeader>

      <TableHeader>
        <Search value={search.input} onChange={handleChangeTerm} />
        <Limit value={limit.input} onChange={handleLimit} />
      </TableHeader>
      <HR />
      <Table
        tableData={pageData}
        headingDropdownConfig={headingDropdownConfig}
        cellDropdownConfig={cellDropdownConfig}
      />

      <TableFooter>
        <TextCountWrapper>
          <Text variant="deemphasized">Showing </Text>
          <Text variant="primary">
            {pageIndex.start} - {pageIndex.end}
          </Text>
          <Text variant="deemphasized">of </Text>
          <Text variant="primary">{count} </Text>
          <Text variant="deemphasized">results</Text>
        </TextCountWrapper>
        <Pagination
          page={page}
          pageCount={pageCount}
          menuHorizontal="left"
          menuVertical="up"
          onChangePage={handleChangePage}
        />
      </TableFooter>
    </>
  )
}

interface TableHeaderProps {
  align?: 'flex-start' | 'center' | 'flex-end'
}

const TableHeader = styled.div<TableHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align }) => align || 'center'};
  > div h2 {
    margin-bottom: 12px;
  }
  margin-bottom: 12px;
`

const TableFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

const TextCountWrapper = styled.div`
  display: flex;
  > p {
    margin-right: 8px;
  }
`

const HR = styled.hr`
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  margin-top: 16px;
`

export const Primary = Template.bind({})
Primary.args = {
  tableData: [],
  headingDropdownConfig: tableDropdownConfig,
  cellDropdownConfig: tableDropdownConfig,
}
