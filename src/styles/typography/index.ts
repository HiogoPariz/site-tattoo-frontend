import styled, { css } from 'styled-components'

const Title = css`
  font-weight: ${({ theme }) => theme.font.weights.bold};
  color: inherit;
`

export const Titles = {
  H1: styled.h1`
    ${Title}
    font-size: ${({ theme }) => theme.font.sizes.xxxbig};
  `,
  H2: styled.h2`
    ${Title}
    font-size: ${({ theme }) => theme.font.sizes.xxbig};
  `,
  H3: styled.h3`
    ${Title}
    font-size: ${({ theme }) => theme.font.sizes.xbig};
  `,
  H4: styled.h4`
    ${Title}
    font-size: ${({ theme }) => theme.font.sizes.big};
  `
}
