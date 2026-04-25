import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { ActiveProgram, ActiveProgramStore, CompletedDay, ScheduleDay, TrainingSession,} from './types'
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

const hasCompletedDay = (completedDays: CompletedDay[], week: number, day: number) => 
  completedDays.some((item) => item.week === week && item.day === day)

const updateCurrentSessionCompletion = (session: TrainingSession): TrainingSession => {
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


        // export interface TrainingSession {
        //   week: number
        //   day: number
        //   exercises: SessionExercise[]
        //   startedAt: string
        //   isCompleted: boolean
        // }

      startTraining: () =>
        set((state) => {
          if (!state.activeProgram) return {}

          const dayToRender = state.getDayToRender()
          if (!dayToRender) return {}

          const dayData = state.getDayData(dayToRender.week, dayToRender.day)
          if (!dayData || dayData.exercises.length === 0) return {}
           
          const { maxes } = useUserMaxesStore.getState()
          return {
            activeProgram: {
              ...state.activeProgram,
              trainingState: {
                ...state.activeProgram.trainingState,
                mode: 'training',
                exerciseIndex: 0,
                currentSession: buildTrainingSession(dayToRender, dayData.exercises, maxes),
              },
            },
          }
        }),

      setCurrentWeek: (week) =>
        set((state) => {
          if (!state.activeProgram) return {}

          const weekData = state.activeProgram.program.weeks.find(
            (item) => item.weekNumber === week
          )
          if (!weekData || weekData.trainingDays.length === 0) return {}

          return {
            activeProgram: {
              ...state.activeProgram,
              currentWeek: week,
              currentDay: weekData.trainingDays[0].day,
              viewMode: { type: 'current' },
            },
          }
        }),

      setCurrentDay: (day) =>
        set((state) => {
          if (!state.activeProgram) return {}

          const weekData = get().getCurrentWeekData()
          if (!weekData) return {}

          const dayExists = weekData.trainingDays.some((item) => item.day === day)
          if (!dayExists) return {}

          return {
            activeProgram: {
              ...state.activeProgram,
              currentDay: day,
              viewMode: { type: 'current' },
            },
          }
        }),

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

      completeDay: (week, day) =>
        set((state) => {
          if (!state.activeProgram) return {}
          if (hasCompletedDay(state.activeProgram.completedDays, week, day)) {
            return {}
          }

          return {
            activeProgram: {
              ...state.activeProgram,
              completedDays: [...state.activeProgram.completedDays, { week, day }],
            },
          }
        }),

      toggleSetCompletion: (exerciseIndex, setId) => //переключатель завершения подхода
        set((state) => {
          const currentSession = state.activeProgram?.trainingState.currentSession
          if (!state.activeProgram || !currentSession) return {}

          const exercises = currentSession.exercises.map((exercise, index) => {
            if (index !== exerciseIndex) return exercise

            const sets = exercise.sets.map((set) =>
              set.id === setId ? { ...set, isCompleted: !set.isCompleted } : set)

            return {
              ...exercise,
              sets,
              isCompleted: sets.every((set) => set.isCompleted),// если все сеты тру, то упражнение выполнено
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

          // если есть следующее упражнение
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

          // если это было последнее упражнение
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

      getWeekSchedule: () => {
        const state = get()
        if (!state.activeProgram) return []

        const weekData = state.getCurrentWeekData()
        const dayToRender = state.getDayToRender()
        if (!weekData) return []

        const weekDays = [1, 2, 3, 4, 5, 6, 7]

        return weekDays.map<ScheduleDay>((dayNumber) => {
          const training = weekData.trainingDays.find((day) => day.day === dayNumber)
          const isCompleted = hasCompletedDay(state.activeProgram!.completedDays, state.activeProgram!.currentWeek, dayNumber)

          return {
            day: dayNumber,
            isTraining: Boolean(training),
            isCompleted,
            isActive: dayToRender?.day === dayNumber,
          }
        })
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
    }),
    {
      name: 'active-program-storage',
    }
  )
)
