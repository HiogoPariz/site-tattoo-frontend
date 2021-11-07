import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Menu, MenuProps } from './Menu'

const meta: Meta = {
  title: 'Components/Menu',
  component: Menu
}

export default meta
const Template: Story<MenuProps> = args => <Menu {...args} />

export const Default = Template.bind({})
