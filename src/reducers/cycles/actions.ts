import { Cycle } from './reducer'

export enum ActiveType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  FINISHED_CURRENT_CYCLE = 'FINISHED_CURRENT_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
}

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: ActiveType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export const interruptCurrentCycleAction = () => {
  return {
    type: ActiveType.INTERRUPT_CURRENT_CYCLE,
  }
}

export const markCurrentCycleAsFinishedAction = () => {
  return {
    type: ActiveType.FINISHED_CURRENT_CYCLE,
  }
}
