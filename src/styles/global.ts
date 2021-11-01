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
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.color};
    font: 400 1rem Roboto, sens-serif;
  }

`
