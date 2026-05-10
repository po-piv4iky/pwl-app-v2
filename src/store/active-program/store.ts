import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import {
  ActiveProgram,
  ActiveProgramStore,
  CompletedDay,
  ScheduleDay,
  TrainingSession,
} from './types'

import { buildTrainingSession, createRestTimerState } from './utils'
import { ProgramTraining } from '@/programs/types/program.types'
import { useUserMaxesStore } from '../maxes.store'

const createActiveProgramState = (program: ProgramTraining): ActiveProgram => ({
  program,
  trainingState: {
    mode: 'plan',
    exerciseIndex: 0,
    restTimer: createRestTimerState(),
  },
  startedAt: new Date().toISOString(),
  currentWeek: 1,
  currentDay: 1,
  viewMode: { type: 'current' },
  completedDays: [],
  status: 'active',
})

const hasCompletedDay = (
  completedDays: CompletedDay[],
  week: number,
  day: number
) => {
  return completedDays.some((item) => item.week === week && item.day === day)
}

const updateCurrentSessionCompletion = (
  session: TrainingSession
): TrainingSession => {
  const isCompleted = session.exercises.every((exercise) => exercise.isCompleted)

  return {
    ...session,
    isCompleted,
  }
}

export const useActiveProgramStore = create<ActiveProgramStore>()(
  persist(
    (set, get) => ({
      activeProgram: null,

      startProgram: (program) =>
        set({
          activeProgram: createActiveProgramState(program),
        }),

      resetProgram: () =>
        set({
          activeProgram: null,
        }),

      // Запускаем ТОЛЬКО реальный currentWeek/currentDay
      startTraining: () =>
        set((state) => {
          if (!state.activeProgram) return {}

          const { currentWeek, currentDay } = state.activeProgram

          const dayData = state.getDayData(currentWeek, currentDay)
          if (!dayData || dayData.exercises.length === 0) return {}

          const { maxes } = useUserMaxesStore.getState()

          return {
            activeProgram: {
              ...state.activeProgram,
              viewMode: { type: 'current' },
              trainingState: {
                ...state.activeProgram.trainingState,
                mode: 'training',
                exerciseIndex: 0,
                currentSession: buildTrainingSession(
                  {
                    week: currentWeek,
                    day: currentDay,
                    isCurrent: true,
                  },
                  dayData.exercises,
                  maxes
                ),
              },
            },
          }
        }),

      // ВАЖНО: это только просмотр недели, прогресс не меняется
      selectWeek: (week) =>
        set((state) => {
          if (!state.activeProgram) return {}

          const weekData = state.activeProgram.program.weeks.find(
            (item) => item.weekNumber === week
          )

          if (!weekData || weekData.trainingDays.length === 0) return {}

          const firstTrainingDay = weekData.trainingDays[0].day

          return {
            activeProgram: {
              ...state.activeProgram,
              viewMode: {
                type: 'selected',
                week,
                day: firstTrainingDay,
              },
            },
          }
        }),

      // Просмотр конкретного дня, прогресс не меняется
      selectDay: (week, day) =>
        set((state) => {
          if (!state.activeProgram) return {}

          const dayData = get().getDayData(week, day)
          if (!dayData) return {}

          return {
            activeProgram: {
              ...state.activeProgram,
              viewMode: {
                type: 'selected',
                week,
                day,
              },
            },
          }
        }),

      // Вернуться к реальной текущей тренировке
      showCurrentDay: () =>
        set((state) => {
          if (!state.activeProgram) return {}

          return {
            activeProgram: {
              ...state.activeProgram,
              viewMode: { type: 'current' },
            },
          }
        }),

      completeDay: (week, day) =>
        set((state) => {
          if (!state.activeProgram) return {}

          if (hasCompletedDay(state.activeProgram.completedDays, week, day)) {
            return {}
          }

          return {
            activeProgram: {
              ...state.activeProgram,
              completedDays: [
                ...state.activeProgram.completedDays,
                { week, day },
              ],
            },
          }
        }),

      toggleSetCompletion: (exerciseIndex, setId) =>
        set((state) => {
          const currentSession =
            state.activeProgram?.trainingState.currentSession

          if (!state.activeProgram || !currentSession) return {}

          const exercises = currentSession.exercises.map((exercise, index) => {
            if (index !== exerciseIndex) return exercise

            const sets = exercise.sets.map((set) =>
              set.id === setId
                ? { ...set, isCompleted: !set.isCompleted }
                : set
            )

            return {
              ...exercise,
              sets,
              isCompleted: sets.every((set) => set.isCompleted),
            }
          })

          return {
            activeProgram: {
              ...state.activeProgram,
              trainingState: {
                ...state.activeProgram.trainingState,
                currentSession: updateCurrentSessionCompletion({
                  ...currentSession,
                  exercises,
                }),
              },
            },
          }
        }),

      nextExercise: () =>
        set((state) => {
          if (!state.activeProgram) return {}

          const session = state.activeProgram.trainingState.currentSession
          if (!session) return {}

          const nextIndex = state.activeProgram.trainingState.exerciseIndex + 1

          if (nextIndex < session.exercises.length) {
            return {
              activeProgram: {
                ...state.activeProgram,
                trainingState: {
                  ...state.activeProgram.trainingState,
                  exerciseIndex: nextIndex,
                },
              },
            }
          }

          return {
            activeProgram: {
              ...state.activeProgram,
              trainingState: {
                ...state.activeProgram.trainingState,
                mode: 'finished',
              },
            },
          }
        }),

      startRestTimer: (duration) =>
        set((state) => {
          if (!state.activeProgram) return {}

          return {
            activeProgram: {
              ...state.activeProgram,
              trainingState: {
                ...state.activeProgram.trainingState,
                restTimer: {
                  isActive: true,
                  duration,
                  startedAt: Date.now(),
                },
              },
            },
          }
        }),

      stopRestTimer: () =>
        set((state) => {
          if (!state.activeProgram) return {}

          return {
            activeProgram: {
              ...state.activeProgram,
              trainingState: {
                ...state.activeProgram.trainingState,
                restTimer: createRestTimerState(),
              },
            },
          }
        }),

      changeRestTimer: (seconds) =>
        set((state) => {
          if (!state.activeProgram) return {}

          const restTimer = state.activeProgram.trainingState.restTimer

          if (!restTimer.isActive || !restTimer.startedAt) return {}

          const passed = Math.floor((Date.now() - restTimer.startedAt) / 1000)
          const currentLeft = Math.max(restTimer.duration - passed, 0)
          const nextLeft = Math.max(currentLeft + seconds, 0)

          return {
            activeProgram: {
              ...state.activeProgram,
              trainingState: {
                ...state.activeProgram.trainingState,
                restTimer: {
                  ...restTimer,
                  duration: nextLeft,
                  startedAt: Date.now(),
                },
              },
            },
          }
        }),

      updateSetActualValues: (exerciseIndex, setId, values) =>
        set((state) => {
          const session = state.activeProgram?.trainingState.currentSession

          if (!state.activeProgram || !session) return {}

          const exercises = session.exercises.map((exercise, index) => {
            if (index !== exerciseIndex) return exercise

            return {
              ...exercise,
              sets: exercise.sets.map((set) =>
                set.id === setId ? { ...set, ...values } : set
              ),
            }
          })

          return {
            activeProgram: {
              ...state.activeProgram,
              trainingState: {
                ...state.activeProgram.trainingState,
                currentSession: {
                  ...session,
                  exercises,
                },
              },
            },
          }
        }),

      getCurrentWeekData: () => {
        const state = get()
        if (!state.activeProgram) return null

        return (
          state.activeProgram.program.weeks.find(
            (week) => week.weekNumber === state.activeProgram?.currentWeek
          ) || null
        )
      },

      getDayData: (week, day) => {
        const state = get()
        if (!state.activeProgram) return null

        const weekData = state.activeProgram.program.weeks.find(
          (item) => item.weekNumber === week
        )

        if (!weekData) return null

        return weekData.trainingDays.find((item) => item.day === day) || null
      },

      getDayToRender: () => {
        const state = get()
        if (!state.activeProgram) return null

        const { currentWeek, currentDay, viewMode } = state.activeProgram

        if (viewMode.type === 'current') {
          return {
            week: currentWeek,
            day: currentDay,
            isCurrent: true,
          }
        }

        return {
          week: viewMode.week,
          day: viewMode.day,
          isCurrent:
            viewMode.week === currentWeek && viewMode.day === currentDay,
        }
      },

      getWeekSchedule: () => {
        const state = get()
        if (!state.activeProgram) return []

        const dayToRender = state.getDayToRender()
        if (!dayToRender) return []

        const weekData = state.activeProgram.program.weeks.find(
          (week) => week.weekNumber === dayToRender.week
        )

        if (!weekData) return []

        const weekDays = [1, 2, 3, 4, 5, 6, 7]

        return weekDays.map<ScheduleDay>((dayNumber) => {
          const training = weekData.trainingDays.find(
            (day) => day.day === dayNumber
          )

          const isCompleted = hasCompletedDay(
            state.activeProgram!.completedDays,
            dayToRender.week,
            dayNumber
          )

          return {
            day: dayNumber,
            isTraining: Boolean(training),
            isCompleted,
            isActive: dayToRender.day === dayNumber,
          }
        })
      },
    }),
    {
      name: 'active-program-storage',
    }
  )
)