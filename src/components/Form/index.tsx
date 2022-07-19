import { Play } from 'phosphor-react'
import { CounterDown } from '../CounterDown'
import * as S from './styles'

export const Form = () => {
  return (
    <S.FormContainer>
      <S.Wrapper>
        <label htmlFor="task">Vou trabalhar em</label>
        <S.TaskInput
          id="task"
          type="text"
          placeholder="Dê um nome para o seu projeto"
        />

        <label htmlFor="minutesAmount">durante</label>
        <S.MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="00"
        />

        <span>minutos.</span>
      </S.Wrapper>

      <CounterDown />

      <S.StartCounterDownButton type="submit">
        <Play size={24} />
        Começar
      </S.StartCounterDownButton>
    </S.FormContainer>
  )
}
