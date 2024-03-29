import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.2s;

      color: ${({ theme }) => theme['gray-100']};

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme['green-500']};
      }

      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`
