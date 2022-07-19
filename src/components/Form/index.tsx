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
          list="task-suggestions"
        />

        <datalist id="task-suggestions">
          <option value="Project 1" />
          <option value="Project 2" />
          <option value="Project 56" />
          <option value="Project 58" />
        </datalist>

        <label htmlFor="minutesAmount">durante</label>
        <S.MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="00"
          step={5}
          min={5}
          max={60}
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
