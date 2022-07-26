import { BrowserRouter } from 'react-router-dom'
import { CycleContextProvider } from './context/CycleContext'
import { DarkModeProvider } from './context/DarkModeContext'

import { Router } from './Router'
import { GlobalStyles } from './styles/GlobalStyles'

export function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <GlobalStyles />
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </DarkModeProvider>
    </BrowserRouter>
  )
}
