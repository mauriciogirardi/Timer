import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/GlobalStyles'
import { darkTheme } from './styles/themes/dark'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
