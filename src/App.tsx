import React from 'react'
import { ThemeProvider } from 'styled-components'

import { StorageProvider } from './contexts/StorageContext'

import { Home } from './pages/Home'

import { GlobalStyle } from './global/styles/global'
import theme from './global/styles/theme'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StorageProvider>
        <Home />
      </StorageProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
