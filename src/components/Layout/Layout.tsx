import React from 'react'
import { MainContainer } from '@/styles/containers/main'

export const Layout: React.FC = ({ children }) => {
  return <MainContainer>{children}</MainContainer>
}
