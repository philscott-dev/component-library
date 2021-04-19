import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types'
import { useEffect, useState } from 'react'
import faker from 'faker'
import { TableContextProvider } from 'components'

export const TableDataProvider = (Story: () => StoryFnReactReturnType) => {
  const [tableData, setTableData] = useState<any[]>([])
  useEffect(() => {
    const data = Array.from({ length: 500 }, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      emailAddress: faker.internet.email(),
      list: Array.from({ length: 20 }, (_, i) => i),
      info: {
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
      },
      data: Array.from({ length: 5 }, () => ({
        count: Math.round(Math.random() * 100),
        month: faker.date.month(),
        year: faker.music.genre(),
        nested: Array.from({ length: 5 }, () => ({ event: Math.random() })),
      })),
    }))
    setTableData(data)
  }, [])

  const test = undefined
  const couldBeNull = [
    {
      limit: 1000,
      date: '2020',
      total: '16',
      alerts: [
        {
          previous_ip_address: '140.238.27.38',
          new_ip_address: '1.1.1.1',
          action: 'transfer in',
          domain: '2080.xyz',
        },
        {
          previous_ip_address: '140.238.27.38',
          new_ip_address: '1.1.1.1',
          action: 'transfer in',
          domain: '2080.xyz',
        },
        {
          previous_ip_address: null,
          new_ip_address: '1.1.1.1',
          action: 'transfer in',
          domain: '2080.xyz',
        },
      ],
    },
  ]

  console.log(Object.keys({ x: 1, y: null }))

  return (
    <TableContextProvider data={couldBeNull}>
      <Story />
    </TableContextProvider>
  )
}
