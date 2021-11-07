import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Layout } from './Layout'

const meta: Meta = {
  title: 'Main/Layout',
  component: Layout
}

export default meta
const Template: Story = args => <Layout {...args} />

export const Default = Template.bind({})
