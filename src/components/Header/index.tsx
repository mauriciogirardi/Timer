import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import { useDarkMode } from '../../hooks/useDarkMode'
import { Toggle } from '../Toggle'

import logoSvg from '../../assets/logo.svg'
import * as S from './styles'

export const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <S.HeaderContainer>
      <div>
        <img src={logoSvg} alt="" />
        <Toggle setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>

      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
