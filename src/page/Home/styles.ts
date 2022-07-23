import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
  max-width: 640px;
  width: 100%;
`

const BaseCounterDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-100']};

  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StopCounterDownButton = styled(BaseCounterDownButton)`
  background-color: ${({ theme }) => theme['red-500']};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['red-700']};
  }
`
export const StartCounterDownButton = styled(BaseCounterDownButton)`
  background-color: ${({ theme }) => theme['green-500']};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['green-700']};
  }
`
