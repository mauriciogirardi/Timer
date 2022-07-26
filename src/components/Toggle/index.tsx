import { CloudMoon, SunDim } from 'phosphor-react'
import * as S from './styles'

interface ToggleProps {
  setDarkMode: boolean | any
  darkMode: any
}

export const Toggle = ({ darkMode, setDarkMode }: ToggleProps) => {
  return (
    <S.ToggleContainer>
      {darkMode ? (
        <button onClick={() => setDarkMode(false)}>
          <SunDim size={32} />
        </button>
      ) : (
        <button onClick={() => setDarkMode(true)}>
          <CloudMoon size={32} />
        </button>
      )}
    </S.ToggleContainer>
  )
}
