import { HandPalm, Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { NewCycleForm } from './components/NewCycleForm'
import { CounterDown } from './components/CounterDown'
import * as S from './styles'
import { useCycle } from '../../context/CycleContext'

const newCycleFromValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa!'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos!')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos!'),
})

export type NewCycleFormData = zod.infer<typeof newCycleFromValidationSchema>

export const Home = () => {
  const { interruptCurrentCycle, createNewCycle, activeCycle } = useCycle()
  const newCycloForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFromValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { reset, watch, handleSubmit } = newCycloForm

  const handleCreateNewCycle = ({ minutesAmount, task }: NewCycleFormData) => {
    createNewCycle({ minutesAmount, task })
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <S.HomeContainer>
      <S.FormContainer onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycloForm}>
          <NewCycleForm />
        </FormProvider>
        <CounterDown />

        {activeCycle ? (
          <S.StopCounterDownButton
            type="button"
            onClick={interruptCurrentCycle}
          >
            <HandPalm size={24} />
            Interromper
          </S.StopCounterDownButton>
        ) : (
          <S.StartCounterDownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </S.StartCounterDownButton>
        )}
      </S.FormContainer>
    </S.HomeContainer>
  )
}
