import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'

interface DarkModeProviderProps {
  children: ReactNode
}

interface DarkModeContextProps {
  setDarkMode: () => void
  theme: boolean
}

const DarkModeContext = createContext({} as DarkModeContextProps)

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [enabledState, setEnabledState] = useLocalStorage(
    '@list:dark-mode',
    false,
  )

  const [theme, setTheme] = useState(enabledState)

  const setDarkMode = useCallback(() => {
    setTheme((prevState) => !prevState)
  }, [])

  useEffect(() => {
    setEnabledState(theme)
  }, [setEnabledState, theme])

  const currentTheme = theme ? darkTheme : lightTheme

  return (
    <DarkModeContext.Provider value={{ setDarkMode, theme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  )
}

export const useDarMode = () => {
  const context = useContext(DarkModeContext)
  return context
}
