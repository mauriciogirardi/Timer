import { CloudMoon, SunDim } from 'phosphor-react'
import * as S from './styles'

interface ToggleProps {
  setDarkMode: () => void
  darkMode: boolean
}

export const Toggle = ({ darkMode, setDarkMode }: ToggleProps) => {
  return (
    <S.ToggleContainer>
      {darkMode ? (
        <button onClick={() => setDarkMode()}>
          <SunDim size={32} />
        </button>
      ) : (
        <button onClick={() => setDarkMode()}>
          <CloudMoon size={32} />
        </button>
      )}
    </S.ToggleContainer>
  )
}
