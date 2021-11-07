import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
   margin:0;
   padding: 0;
   box-sizing: border-box;
 }

  html {
    height: 100%;
    font-size: 16px;

    @media screen and (min-width: 900px) {
    font-size: 18px;
  }

    @media screen and (min-width: 1200px) {
      font-size: 20px;
    }
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
  }

  body {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    font: 400 1rem Roboto, sens-serif;
    line-height: 1.5;
    letter-spacing: 0.1rem;
  }

  a {
    color: inherit;
    font-size: ${({ theme }) => theme.font.sizes.normal};
    transition: color ${({ theme }) => theme.transitions.time};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  input {
    outline: none;
  }

  ul {
    list-style: none;
  }
`
