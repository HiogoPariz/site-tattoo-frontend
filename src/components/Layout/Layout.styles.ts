import devices from '@/styles/breakpoints'
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: stretch;
  align-items: stretch;
  grid-template: 'main' 'footer' 'menu';

  @media ${devices.desktop} {
    grid-template: 'menu' 'main' 'footer';
  }
`

export const MainContainer = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
`
