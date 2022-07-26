import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CycleContextProvider } from './context/CycleContext'
import { useDarkMode } from './hooks/useDarkMode'

import { Router } from './Router'
import { GlobalStyles } from './styles/GlobalStyles'
import { darkTheme } from './styles/themes/dark'
import { lightTheme } from './styles/themes/light'

export function App() {
  const [darkMode] = useDarkMode()

  const theme = darkMode ? darkTheme : lightTheme

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
