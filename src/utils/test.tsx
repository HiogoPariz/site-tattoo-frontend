/* eslint-disable import/export */
import React from 'react'
import { render } from '@testing-library/react'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
