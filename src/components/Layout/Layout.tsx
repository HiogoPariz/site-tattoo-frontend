import React from 'react'

import { Menu } from '@/components/Menu/Menu'
import { Footer, FooterGroup } from '@/components/Footer/Footer'
import { NavLink } from '@/types'
import { LayoutContainer, MainContainer } from './Layout.styles'

const menuLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Teste', to: '/teste' }
]

const footerGroups: FooterGroup[] = [{ name: 'rotas', links: menuLinks }]

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Menu links={menuLinks} />
      <MainContainer>{children}</MainContainer>

      <Footer groups={footerGroups} />
    </LayoutContainer>
  )
}
