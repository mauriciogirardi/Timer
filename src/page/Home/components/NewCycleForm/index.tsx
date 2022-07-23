import { useFormContext } from 'react-hook-form'
import { useCycle } from '../../../../context/CycleContext'

import * as S from './styles'

export const NewCycleForm = () => {
  const { activeCycle } = useCycle()
  const { register } = useFormContext()

  return (
    <>
      <S.Wrapper>
        <label htmlFor="task">Vou trabalhar em</label>
        <S.TaskInput
          id="task"
          type="text"
          list="task-suggestions"
          placeholder="Dê um nome para o seu projeto"
          {...register('task')}
          disabled={!!activeCycle}
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
          placeholder="00"
          type="number"
          max={60}
          step={5}
          min={5}
          {...register('minutesAmount', { valueAsNumber: true })}
          disabled={!!activeCycle}
        />

        <span>minutos.</span>
      </S.Wrapper>
    </>
  )
}
