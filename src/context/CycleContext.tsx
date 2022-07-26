import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import differenceInSeconds from 'date-fns/differenceInSeconds'

import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { cyclesReducer, CyclesState } from '../reducers/cycles/reducer'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface ProviderCycleContextProps {
  children: ReactNode
}

interface CreateNewCycle {
  minutesAmount: number
  task: string
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateNewCycle) => void
  interruptCurrentCycle: () => void
}

const CycleContext = createContext({} as CycleContextType)

export const CycleContextProvider = ({
  children,
}: ProviderCycleContextProps) => {
  const [enabledState, setEnabledState] = useLocalStorage<CyclesState>(
    '@time:cycles-state-1.0.0',
    {
      cycles: [],
      activeCycleId: null,
    },
  )

  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      if (enabledState) {
        return enabledState
      }

      return {
        cycles: [],
        activeCycleId: null,
      }
    },
  )

  useEffect(() => {
    setEnabledState(cyclesState)
  }, [cyclesState, setEnabledState])

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  const createNewCycle = ({ minutesAmount, task }: CreateNewCycle) => {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const interruptCurrentCycle = () => {
    dispatch(interruptCurrentCycleAction())
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        createNewCycle,
        setSecondsPassed,
        interruptCurrentCycle,
        markCurrentCycleAsFinished,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}

export const useCycle = () => {
  const context = useContext(CycleContext)
  return context
}
