import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CounterDown } from '../CounterDown'

import * as S from './styles'
import { useState } from 'react'

const newCycleFromValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa!'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos!')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos!'),
})

type NewCycleFormData = zod.infer<typeof newCycleFromValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export const Form = () => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    // formState: { errors },
  } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFromValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const handleCreateNewCycle = ({ minutesAmount, task }: NewCycleFormData) => {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
    }

    setCycles((prevState) => [...prevState, newCycle])
    setActiveCycleId(id)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <S.FormContainer onSubmit={handleSubmit(handleCreateNewCycle)}>
      <S.Wrapper>
        <label htmlFor="task">Vou trabalhar em</label>
        <S.TaskInput
          id="task"
          type="text"
          list="task-suggestions"
          placeholder="Dê um nome para o seu projeto"
          {...register('task')}
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
        />

        <span>minutos.</span>
      </S.Wrapper>

      <CounterDown minutes={minutes} secondes={seconds} />

      <S.StartCounterDownButton type="submit" disabled={isSubmitDisabled}>
        <Play size={24} />
        Começar
      </S.StartCounterDownButton>
    </S.FormContainer>
  )
}
