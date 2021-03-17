import React from 'react'
import { Story, Meta } from '@storybook/react'
import { H1, H1Props, H2, H2Props, H3, H4, H5, H6 } from 'components'
import { Theme } from './Decorators'

export default {
  title: 'Headings',
  decorators: [Theme],
  argTypes: {},
} as Meta

/**
 * H1
 */
const H1Template: Story<H1Props> = (args) => <H1 {...args}>Heading 1</H1>
export const Heading1 = H1Template.bind({})
Heading1.storyName = 'H1'
Heading1.args = {
  size: undefined,
}

/**
 * H2
 */
const H2Template: Story<H2Props> = (args) => <H2 {...args}>Heading 2</H2>
export const Heading2 = H2Template.bind({})
Heading2.storyName = 'H2'
Heading2.args = {}

/**
 * H3
 */
const H3Template: Story = () => <H3>Heading 3</H3>
export const Heading3 = H3Template.bind({})
Heading3.storyName = 'H3'

/**
 * H4
 */
const H4Template: Story = (args) => <H4 {...args}>Heading 4</H4>
export const Heading4 = H4Template.bind({})
Heading4.storyName = 'H4'

/**
 * H5
 */
const H5Template: Story = (args) => <H5 {...args}>Heading 5</H5>
export const Heading5 = H5Template.bind({})
Heading5.storyName = 'H5'
Heading5.args = {}

/**
 * H6
 */
const H6Template: Story<H1Props> = (args) => <H6 {...args}>Heading 6</H6>
export const Heading6 = H6Template.bind({})
Heading6.storyName = 'H6'
Heading6.args = {}
