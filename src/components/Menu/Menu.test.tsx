import React from 'react'
import { render } from '@/utils/test'
import { Menu, MenuProps } from './Menu'

function setup(props?: Partial<MenuProps>) {
  const mock: MenuProps = {
    links: [
      { label: 'Home', to: '/' },
      { label: 'Teste', to: '/teste' }
    ],
    ...props
  }
  return { mock, ...render(<Menu {...mock} />) }
}

describe('<Menu />', () => {
  it('should render', () => {
    const { container } = setup()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toBeInTheDocument()
  })
})
