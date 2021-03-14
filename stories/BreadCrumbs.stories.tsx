import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { BreadCrumbs, BreadCrumbsProps } from 'components'

export default {
  title: 'BreadCrumbs',
  component: BreadCrumbs,
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

const Template: Story<BreadCrumbsProps> = (args) => (
  <BreadCrumbs {...args}>Click</BreadCrumbs>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'small',
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'large',
}
