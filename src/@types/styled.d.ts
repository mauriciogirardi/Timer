import 'styled-components'
import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'

type DarkTheme = typeof darkTheme
type LightDark = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DarkTheme {}
}
