import styled from '@emotion/styled'
import { ChangeEvent, useContext, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { FiSettings } from 'react-icons/fi'
import { tableDropdownConfig } from './config/tableDropdownConfig'
import { TableDataProvider, Theme } from './decorators'
import {
  Pagination,
  Table,
  TableBreadCrumbs,
  TableProps,
  H2,
  Text,
  Limit,
  Export,
  Search,
  TableContext,
  TablePathModal,
  IconButton,
} from 'components'
import {
  useTableInput,
  usePagination,
  useSearch,
} from 'lib/components/Table/hooks'

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
  const {
    tableData,
    userPaths,
    pathMap,
    originalPathMap,
    setUserPaths,
    setBreadCrumbs,
    setTablePath,
  } = useContext(TableContext)
  /**
   * State
   */
  const [search, setSearch] = useTableInput({ defaultValue: '', delay: 200 })
  const [limit, setLimit] = useTableInput({ defaultValue: 10 })
  const [isModalVisible, setModalVisibility] = useState(false)

  /**
   * Effects
   */

  const searchResult = useSearch({
    data: tableData,
    pathMap,
    search: search.delayed,
  })
  const [
    { page, pageData, pageCount, pageIndex, count },
    setPage,
  ] = usePagination({
    data: searchResult,
    limit: limit.delayed,
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
  const handleShowModal = () => {
    setModalVisibility(true)
  }

  const handleHideModal = () => {
    setModalVisibility(false)
  }

  const handleConfirmModal = (selectedPaths: string[]) => {
    setModalVisibility(false)
    if (setUserPaths && setTablePath && setBreadCrumbs) {
      setUserPaths(selectedPaths)
      setTablePath([])
      setBreadCrumbs([])
    }
  }

  return (
    <Container>
      <TableHeader>
        <div>
          <H2>Users</H2>
          <TableBreadCrumbs baseLabel={'All Users'} />
        </div>
        <Toolbar>
          <IconButton onMouseDown={handleShowModal}>
            <FiSettings />
            <Text variant="light">Configure</Text>
          </IconButton>
          <Export data={tableData} pathMap={pathMap} />
        </Toolbar>
      </TableHeader>
      <TableHeader>
        <Search value={search.input} onChange={handleChangeTerm} />
        <Limit value={limit.input} onChange={handleLimit} />
      </TableHeader>
      <HR />
      <TableWrapper>
        <Table
          tableData={pageData}
          headingDropdownConfig={headingDropdownConfig}
          cellDropdownConfig={cellDropdownConfig}
        />
      </TableWrapper>

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
      <TablePathModal
        isVisible={isModalVisible}
        pathMap={originalPathMap}
        userPaths={userPaths}
        onClose={handleHideModal}
        onConfirm={handleConfirmModal}
      />
    </Container>
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

const Toolbar = styled.span`
  display: flex;
  align-self: flex-start;
  > button {
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 2px 12px;
    border: ${({ theme }) => `1px solid ${theme.color.white[100]}`};
  }
  > button p {
    font-size: 14px;
  }

  > button svg {
    :nth-of-type(1) {
      margin-right: 8px;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
`

const TableWrapper = styled.div`
  overflow: auto;
`

const HR = styled.hr`
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  margin-bottom: 12px;
  width: 100%;
`

export const Primary = Template.bind({})
Primary.args = {
  tableData: [],
  headingDropdownConfig: tableDropdownConfig,
  cellDropdownConfig: tableDropdownConfig,
}
