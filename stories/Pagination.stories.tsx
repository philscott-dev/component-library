import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { Pagination, PaginationProps } from 'components'
import { useState } from 'react'

export default {
  title: 'Pagination',
  component: Pagination,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<PaginationProps> = ({
  page: defaultPage,
  pageCount,
  onChangePage,
}) => {
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = (nextPage: number) => {
    setPage(nextPage)
    onChangePage(nextPage)
  }

  return (
    <Pagination
      page={page}
      pageCount={pageCount}
      onChangePage={handleChangePage}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  page: 1,
  pageCount: 10,
  onChangePage: (nextPage) => console.log(nextPage),
}
