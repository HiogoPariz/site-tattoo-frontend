import React from 'react'
import { MainContainer } from '@/styles/containers/main'
import { Menu } from '@/components/Menu/Menu'
import { Footer } from '@/components/Footer/Footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <MainContainer>
      <Menu />

      {children}
      <Footer />
    </MainContainer>
  )
}
