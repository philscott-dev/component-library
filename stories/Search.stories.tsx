import React, { ChangeEvent, useState } from 'react'
import { Theme } from './Decorators'
import { Story, Meta } from '@storybook/react'
import { Search, SearchProps } from 'components'

export default {
  title: 'Search',
  component: Search,
  decorators: [Theme],
  argTypes: {},
} as Meta

const Template: Story<SearchProps> = (args) => {
  const [value, setValue] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return <Search value={value} onChange={handleChange} />
}

export const Default = Template.bind({})
Default.args = {}
