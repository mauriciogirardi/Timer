import styled from 'styled-components'

export const ToggleContainer = styled.div`
  button {
    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme['gray-100']};
    cursor: pointer;
    transition: color 0.2s;
    box-shadow: none;

    &:hover {
      color: ${({ theme }) => theme['green-500']};
    }
  }
`
