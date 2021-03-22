import styled from '@emotion/styled'
import faker from 'faker'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { tableDropdownConfig } from './config/tableDropdownConfig'
import {
  Pagination,
  Table,
  TableBreadCrumbs,
  TableContextProvider,
  TableProps,
  useClientTable,
  H2,
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
  const [{ page, pageData, pageCount }, setPage] = useClientTable({
    data,
    limit: 10,
    term: '',
  })

  const handleChangePage = (nextPage: number) => {
    setPage(nextPage)
  }

  return (
    <Wrapper>
      <TableContextProvider>
        <H2>Users</H2>
        <TableBreadCrumbs baseLabel={'All Users'} />
        <Table
          data={pageData}
          headingDropdownConfig={headingDropdownConfig}
          cellDropdownConfig={cellDropdownConfig}
        />
      </TableContextProvider>
      <TablePagination
        page={page}
        pageCount={pageCount}
        onChangePage={handleChangePage}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TablePagination = styled(Pagination)`
  justify-content: flex-end;
`

export const Primary = Template.bind({})
Primary.args = {
  data,
  headingDropdownConfig: tableDropdownConfig,
  cellDropdownConfig: tableDropdownConfig,
}
