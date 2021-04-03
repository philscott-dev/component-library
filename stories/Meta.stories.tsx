import React from 'react'
import { Theme } from './decorators'
import { Story, Meta as MetaType } from '@storybook/react'
import { Meta, MetaProps } from 'components'

export default {
  title: 'Meta',
  component: Meta,
  decorators: [Theme],
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
