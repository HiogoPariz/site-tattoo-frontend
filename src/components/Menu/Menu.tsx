import React from 'react'
import { NavLink } from '@/types'
import { Input, MainMenu, MenuContainer, MenuForm } from './Menu.styles'
import Link from 'next/link'
import FocusContainer from '@/styles/containers/focus'

export type MenuProps = {
  links: NavLink[]
}

export const Menu: React.FC<MenuProps> = () => {
  return (
    <MenuContainer>
      <MainMenu>
        <Link href="/">Logo</Link>
        <MenuForm>
          <FocusContainer>
            teste
            <Input />
          </FocusContainer>
          <FocusContainer>
            teste2
            <Input />
          </FocusContainer>
        </MenuForm>
      </MainMenu>
    </MenuContainer>
  )
}
