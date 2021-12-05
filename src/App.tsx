import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { StorageProvider } from './contexts/StorageContext'

import { Home } from './pages/Home'

import { GlobalStyle } from './global/styles/global'
import darkTheme from './global/styles/darkTheme'
import lightTheme from './global/styles/lightTheme'
import { ModalAlertProvider } from '@contexts/ModalAlertContext'

export const App: React.FC = () => {
  const [typeTheme, setTypeTheme] = useState('')

  return (
    <ThemeProvider theme={typeTheme === 'dark' ? darkTheme : lightTheme}>
      <StorageProvider>
        <ModalAlertProvider>
          <Home handleTheme={setTypeTheme} />
        </ModalAlertProvider>
      </StorageProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
