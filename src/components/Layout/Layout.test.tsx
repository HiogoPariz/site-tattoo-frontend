import React from 'react'
import { render } from '@/utils/test'
import { Layout } from './Layout'

describe('<Layout />', () => {
  it('should render', () => {
    const { container } = render(<Layout />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
