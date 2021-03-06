import React from 'react'
import { render } from '@/utils/test'
import { Footer, FooterGroup, FooterProps } from './Footer'
const footerGroups: FooterGroup[] = [
  {
    name: 'rotas',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Teste', to: '/teste' }
    ]
  }
]

function setup(props?: Partial<FooterProps>) {
  const mock: FooterProps = {
    groups: footerGroups,
    ...props
  }
  return { mock, ...render(<Footer {...mock} />) }
}
describe('<Footer />', () => {
  it('should render', () => {
    const { container } = setup()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toBeInTheDocument()
  })
})
