import { produce } from 'immer'

import { ActiveType } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export const cyclesReducer = (state: CyclesState, action: any) => {
  switch (action.type) {
    case ActiveType.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActiveType.FINISHED_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }

    case ActiveType.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    }
    default:
      return state
  }
}
