import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Story, Meta as MetaType } from '@storybook/react'
import { theme } from 'theme'
import { Meta, MetaProps } from 'components'

export default {
  title: 'Meta',
  component: Meta,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {},
} as MetaType

const Template: Story<MetaProps> = (args) => <Meta {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'page title',
  ogTitle: 'og title',
  ogDescription: 'this is the og description',
  ogType: 'article',
  ogImage: 'http://imageurl.com/coolimage.jpg',
  ogUrl: window.location.pathname,
}
