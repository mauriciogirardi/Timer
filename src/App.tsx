import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CycleContextProvider } from './context/CycleContext'

import { Router } from './Router'
import { GlobalStyles } from './styles/GlobalStyles'
import { darkTheme } from './styles/themes/dark'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
