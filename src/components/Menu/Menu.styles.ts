import styled from 'styled-components'

export const MenuContainer = styled.header`
  display: flex;
  width: 100%;
  grid-area: menu;
  justify-content: center;
  padding: ${({ theme }) => theme.spacings.normal};
`

export const MenuForm = styled.form`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  padding: ${({ theme }) => theme.spacings.normal};
`

export const Input = styled.input``

export const MainMenu = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.card};
  height: 2rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.big};
`
