// active-program.helpers.ts
import { ProgramTraining } from '@/programs/types/program.types'
import {
  ActiveProgramState,
  RestTimerState,
  SessionExercise,
  SessionSet,
  SessionWarmUpSet,
  TrainingSession,
} from './active-program.types'
import { getTrainingDayData } from './helpers-for-action/helpers-for-action'
import { exercisesList } from '@/programs/exercises-list'
import { Exercise } from '@/programs/types/exercises.types'
import { ExerciseLift, isMainLift } from '@/programs/types/exercise-definition.types'
import { useUserMaxesStore, UserMaxes } from '../maximums/maxes.store'

/** Создаёт начальное состояние программы */
export const createActiveProgramState = (
  program: ProgramTraining,
): ActiveProgramState => {
  const firstWeekData = program.weeks[0]
  const firstWeekNumber = firstWeekData.weekNumber ?? 1
  const firstNumberDay = firstWeekData.trainingDays[0].day ?? 1

  return {
    program,
    status: 'active',
    startedAt: new Date().toISOString(),
    currentPosition: { week: firstWeekNumber, day: firstNumberDay },
    trainingState: {
      mode: 'plan',
      exerciseIndex: 0,
      restTimer: createRestTimerState(),
      currentSession: null,
    },
    completedDays: [],
    viewMode: { type: 'current', week: firstWeekNumber, day: firstNumberDay },
  }
}

/** Таймер отдыха между подходами */
export const createRestTimerState = (): RestTimerState => ({
  isActive: false,
  duration: 0,
  startedAt: null,
})

/** Создаёт тренировочную сессию на конкретный день */
export const buildTrainingSession = (
  currentWeek: number,
  currentDay: number,
  program: ProgramTraining,
): TrainingSession | null => {
  const dayData = getTrainingDayData(program, currentWeek, currentDay)
  if (!dayData) return null

  const { maxes } = useUserMaxesStore.getState()

  return {
    week: currentWeek,
    day: currentDay,
    startedAt: new Date().toISOString(),
    isCompleted: false,
    exercises: dayData.exercises.map((exercise, index) =>
      createSessionExercise(exercise, index, maxes),
    ),
  }
}

/** Длительность отдыха в секундах в зависимости от типа упражнения */
export const getRestDuration = (lift: ExerciseLift) => (lift === 'accessory' ? 120 : 180)

/** Создаёт разминочные подходы */
export const createSessionWarmUp = (
  exercise: Exercise,
  oneRM: number,
): SessionWarmUpSet[] => {
  if (!exercise.warmup) return []

  return exercise.warmup.map((item, index) => ({
    setNumber: index + 1,
    targetReps: item.reps,
    targetWeight: ((item.percent || 0) * oneRM) / 100,
    intensity: item.percent || 0,
  }))
}

/** Создаёт рабочие подходы */
export const createSessionSets = (exercise: Exercise, oneRM: number): SessionSet[] => {
  if (!exercise.sets || exercise.sets.length === 0) return []

  return exercise.sets.map((item, index) => ({
    id: index + 1,
    setNumber: index + 1,
    targetReps: item.reps,
    targetWeight: ((item.percent || 0) * oneRM) / 100,
    actualReps: item.reps,
    actualWeight: ((item.percent || 0) * oneRM) / 100,
    intensity: item.percent || 0,
    isCompleted: false,
  }))
}

/** Создаёт одно упражнение для тренировочной сессии */
export const createSessionExercise = (
  exercise: Exercise,
  index: number,
  maximums: UserMaxes,
): SessionExercise => {
  const exerciseMeta = exercisesList.find((item) => item.id === exercise.exerciseId)
  if (!exerciseMeta) throw new Error(`Exercise not found: ${exercise.exerciseId}`)

  const oneRM = isMainLift(exerciseMeta.lift) ? maximums[exerciseMeta.lift] || 0 : 0

  return {
    id: index + 1,
    name: exerciseMeta.name,
    lift: exerciseMeta.lift,
    restDuration: getRestDuration(exerciseMeta.lift),
    warmUp: createSessionWarmUp(exercise, oneRM),
    sets: createSessionSets(exercise, oneRM),
    comment: exercise.comment,
    isCompleted: false,
  }
}
