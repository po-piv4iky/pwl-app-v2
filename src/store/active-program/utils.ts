import { ProgramExercise } from '@/config/programs/types/trainingDay.types'
import {
  DayToRender,
  RestTimerState,
  SessionExercise,
  SessionSet,
  TrainingSession,
} from './types'

const DEFAULT_REST_TIMER_STATE: RestTimerState = {
  isActive: false,
  duration: 0,
  startedAt: null,
}

export const createRestTimerState = (): RestTimerState => ({
  ...DEFAULT_REST_TIMER_STATE,
})

export const getRestDuration = (category?: string) => {
  switch (category) {
    case 'main':
    case 'lockout':
      return 180
    case 'accessory':
      return 120
    default:
      return 90
  }
}

export const roundToStep = (weight: number, step = 2.5) =>
  Math.round(weight / step) * step

export const formatTargetReps = (exercise: ProgramExercise) =>
  typeof exercise.reps === 'number'
    ? exercise.reps
    : `от ${exercise.reps.min} до ${exercise.reps.max}`

export const createSessionSets = (
  exercise: ProgramExercise,
  exerciseIndex: number,
  oneRM: number
): SessionSet[] => {
  const sets: SessionSet[] = []

  for (let setNumber = 1; setNumber <= exercise.sets; setNumber += 1) {
    const targetReps = formatTargetReps(exercise)
    let targetWeight = 0
    let intensityValue: number | null = null

    if (exercise.category === 'main' || exercise.category === 'lockout') {
      if (typeof exercise.intensity === 'number') {
        intensityValue = exercise.intensity
      } else if (exercise.intensity) {
        const { min, max } = exercise.intensity
        const step = exercise.sets > 1 ? (max - min) / (exercise.sets - 1) : 0
        intensityValue = Math.round(min + step * (setNumber - 1))
      }

      if (intensityValue !== null) {
        targetWeight = roundToStep((intensityValue / 100) * oneRM)
      }
    }

    sets.push({
      id: `${exerciseIndex}-${setNumber}`,
      setNumber,
      targetReps,
      targetWeight,
      actualReps: targetReps,
      actualWeight: targetWeight,
      intensity: intensityValue,
      isCompleted: false,
    })
  }

  return sets
}

export const createSessionExercise = (
  exercise: ProgramExercise,
  exerciseIndex: number,
  oneRM: number
): SessionExercise => ({
  id: String(exerciseIndex),
  name: exercise.name,
  category: exercise.category,
  lift: exercise.lift,
  sets: createSessionSets(exercise, exerciseIndex, oneRM),
  restDuration: getRestDuration(exercise.category),
  isCompleted: false,
})

export const buildTrainingSession = (
  day: DayToRender,
  exercises: ProgramExercise[],
  oneRM: number
): TrainingSession => ({
  week: day.week,
  day: day.day,
  exercises: exercises.map((exercise, index) =>
    createSessionExercise(exercise, index, oneRM)
  ),
  startedAt: new Date().toISOString(),
  isCompleted: false,
})
