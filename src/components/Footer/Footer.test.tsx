import React from 'react'
import { render } from '@/utils/test'
import { Footer } from './Footer'

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toBeInTheDocument()
  })
})
