import { GetState, SetState } from '../active-program.types'

export interface INavigationActions {
  selectWeek: (weekNumber: number) => void
}

export const createNavigationActions = (
  set: SetState,
  get: GetState,
): INavigationActions => ({
  selectWeek: (weekNumber: number) =>
    set((state) => {
      if (!state.activeProgram) return {}
      const { program, currentPosition } = state.activeProgram
      const weekData = program.weeks.find((week) => week.weekNumber === weekNumber)
      if (!weekData) return {}
      const firstTrainingDay = weekData?.trainingDays[0].day ?? 1
      if (currentPosition.week === weekNumber) {
        return {
          activeProgram: {
            ...state.activeProgram,
            viewMode: {
              type: 'current',
              week: currentPosition.week,
              day: currentPosition.day,
            },
          },
        }
      } else {
        return {
          activeProgram: {
            ...state.activeProgram,
            viewMode: { type: 'preview', week: weekNumber, day: firstTrainingDay },
          },
        }
      }
    }),
})
