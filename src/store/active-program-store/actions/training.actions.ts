import { GetState, SetState } from '../active-program.types'
import { buildTrainingSession, createRestTimerState } from '../active-program.helpers'

export interface ITrainingActions {
  startTraining: () => void
  // stopTraining: () => void
}

export const createTrainingActions = (
  set: SetState,
  get: GetState,
): ITrainingActions => ({
  startTraining: () =>
    set((state) => {
      if (!state.activeProgram) return state
      if (!state.activeProgram.program) return state

      const { week, day } = state.activeProgram.currentPosition

      const session = buildTrainingSession(week, day, state.activeProgram.program)
      if (!session) return state
      return {
        activeProgram: {
          ...state.activeProgram,
          trainingState: {
            ...state.activeProgram.trainingState,
            mode: 'training',
            exerciseIndex: 0,
            restTimer: createRestTimerState(),
            currentSession: session,
          },
          viewMode: { type: 'current', week: week, day: day },
        },
      }
    }),

  // stopTraining: () =>
  //     set((state) => {
  //         return{
  //             activeProgram: {
  //                 ...state.activeProgram,
  //                 trainingState: {
  //                     ...state.activeProgram?.trainingState,
  //                     mode: 'plan',
  //                     exerciseIndex: 1,
  //                     restTimer: createRestTimerState(),
  //                 }
  //             }
  //         }
  //     })
})
