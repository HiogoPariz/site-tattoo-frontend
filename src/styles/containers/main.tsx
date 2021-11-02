import styled from 'styled-components'
import devices from '@/styles/breakpoints'

export const MainContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  grid-template-rows: 'menu main footer';

  @media ${devices.desktop} {
    grid-template-rows: 'main footer menu';
  }
`
