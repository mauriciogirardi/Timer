import 'styled-components'
import { darkTheme } from '../styles/themes/dark'

type DarkTheme = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DarkTheme {}
}
