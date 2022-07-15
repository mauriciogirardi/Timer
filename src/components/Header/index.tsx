import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import logoSvg from '../../assets/logo.svg'
import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={logoSvg} alt="" />

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
