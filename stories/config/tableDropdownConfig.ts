import { TableDropdownConfig } from 'components'

export const tableDropdownConfig: TableDropdownConfig = {
  shouldRender: () => true,
  title: () => 'Dropdown',
  options: () => [
    {
      title: 'Option 1',
      subtitle: 'Subtitle 1',
      color: '#fcfcfc',
      value: 'yes',
    },
    {
      title: 'Option 2',
      subtitle: 'Subtitle 2',
      color: '#fcfcfc',
      value: 'yes',
    },
    {
      title: 'Option 3',
      subtitle: 'Subtitle 3',
      color: '#fcfcfc',
      value: 'yes',
    },
  ],
  onClick: (e, data) => {
    console.log(data)
  },
}
