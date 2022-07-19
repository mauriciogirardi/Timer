import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
  max-width: 640px;
  width: 100%;
`
export const Wrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
`

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  border-radius: 0;

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const StartCounterDownButton = styled.button`
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
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['green-700']};
  }
`
