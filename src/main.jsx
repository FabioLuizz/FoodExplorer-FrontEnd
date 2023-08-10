import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/styles'
import theme from './styles/theme'

import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
