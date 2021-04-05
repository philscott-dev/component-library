import { Theme } from './decorators'
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
  menuVertical,
  menuHorizontal,
}) => {
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = (nextPage: number) => {
    setPage(nextPage)
  }

  return (
    <Pagination
      page={page}
      pageCount={pageCount}
      menuHorizontal={menuHorizontal}
      menuVertical={menuVertical}
      onChangePage={handleChangePage}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  page: 1,
  pageCount: 500,
  menuHorizontal: 'right',
  menuVertical: 'down',
  onChangePage: (nextPage) => console.log(nextPage),
}
