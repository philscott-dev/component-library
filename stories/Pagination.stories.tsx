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

const Template: Story<PaginationProps> = () => {
  const [page, setPage] = useState(1)
  return <Pagination page={page} pageCount={10} onChangePage={setPage} />
}

export const Default = Template.bind({})
