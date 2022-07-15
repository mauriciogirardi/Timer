import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 1rem;
`

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme['gray-800']};
  display: flex;
  flex-direction: column;
`
