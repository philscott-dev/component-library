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
      })),
    }))
    setTableData(data)
  }, [])

  return (
    <TableContextProvider data={tableData}>
      <Story />
    </TableContextProvider>
  )
}
