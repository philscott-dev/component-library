import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta } from '@storybook/react'
import { theme } from 'theme'
import { Anchor, AnchorProps } from 'components'

export default {
  title: 'Anchor',
  component: Anchor,
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

const Template: Story<AnchorProps> = (args) => <Anchor {...args}>Click</Anchor>

export const Primary = Template.bind({})
Primary.args = {
  size: 'small',
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'large',
}
