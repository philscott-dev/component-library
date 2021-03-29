import { useState, ChangeEvent } from 'react'
import styled from '@emotion/styled'
import faker from 'faker'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { tableDropdownConfig } from './config/tableDropdownConfig'
import { usePathMap } from 'lib/components/Table/hooks/usePathMap'
import { useDebounce } from 'use-debounce'
import {
  Pagination,
  Table,
  TableBreadCrumbs,
  TableContextProvider,
  TableProps,
  useTable,
  H2,
  Text,
  Limit,
} from 'components'

export default {
  title: 'Table',
  component: Table,
  decorators: [Theme],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta

const data = Array.from({ length: 5000 }, () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  emailAddress: faker.internet.email(),
  info: {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
  },
}))

const Template: Story<TableProps> = ({
  data,
  headingDropdownConfig,
  cellDropdownConfig,
}) => {
  const [limit, setLimit] = useState(10)
  const [value, setValue] = useState('')
  const [term] = useDebounce(value, 300)
  const { pathMap, pathKeys } = usePathMap(data)
  const [{ page, pageData, pageCount, pageIndex, count }, setPage] = useTable({
    data,
    limit,
    term,
    pathMap,
    pathKeys,
  })

  const handleChangeTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleChangePage = (nextPage: number) => {
    setPage(nextPage)
  }
  const handleLimit = (value: number) => {
    setLimit(value)
  }

  return (
    <TableContextProvider>
      <div>
        <H2>Users</H2>
        <TableBreadCrumbs baseLabel={'All Users'} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input value={value} onChange={handleChangeTerm} />
        <Limit value={limit} onChange={handleLimit} />
      </div>
      <HR />
      <Table
        data={pageData}
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
          onChangePage={handleChangePage}
        />
      </TableFooter>
    </TableContextProvider>
  )
}

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
  color: 1px solid #9f9f9f;
`

export const Primary = Template.bind({})
Primary.args = {
  data,
  headingDropdownConfig: tableDropdownConfig,
  cellDropdownConfig: tableDropdownConfig,
}
