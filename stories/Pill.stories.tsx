import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { Pill, PillProps } from 'components'

export default {
  title: 'Pill',
  component: Pill,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<PillProps> = (args) => <Pill {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Pill Component',
  onClose: undefined,
}

export const Close = Template.bind({})
Close.args = {
  text: 'Close Me',
  onClose: () => false,
}
