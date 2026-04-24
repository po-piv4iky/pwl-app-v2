import { Exercise, ExerciseSet } from '@/programs/types/exercises.types'
import {DayToRender, RestTimerState, SessionExercise, SessionSet, TrainingSession,} from './types'
import { exercisesList } from '../../programs/exercises-list';
import { ExerciseLift, isMainLift } from '@/programs/types/exercise-definition.types';
import { UserMaxes } from '../maxes.store';

const DEFAULT_REST_TIMER_STATE: RestTimerState = {
  isActive: false,
  duration: 0,
  startedAt: null,
}

export const createRestTimerState = (): RestTimerState => ({
  ...DEFAULT_REST_TIMER_STATE,
})

export const getRestDuration = (category?: ExerciseLift) => {
  if(category === 'accessory'){
    return 120
  } else {
    return 180
  }
}

export const roundToStep = (weight: number, step = 2.5) =>
  Math.round(weight / step) * step

export const formatTargetReps = (set: ExerciseSet) =>
  typeof set.reps === 'number'
    ? set.reps
    : `${set.reps}`

export const createSessionSets = (exercise: Exercise, exerciseIndex: number, oneRM: number): SessionSet[] => {
  const sets: SessionSet[] = []

  exercise.sets.forEach((planSet, planSetIndex) => { //       
    const repeat = planSet.repeat ?? 1 // сколько повторных подходов

    for (let repeatIndex = 1; repeatIndex <= repeat; repeatIndex += 1) {
      const setNumber = sets.length + 1 // номер подхода

      const targetReps = formatTargetReps(planSet) //повтореня

      const targetWeight = planSet.percent
        ? Math.round((planSet.percent * oneRM) / 100)
        : 0

      sets.push({
        id: `${exerciseIndex}-${planSetIndex}-${repeatIndex}`,
        setNumber,
        targetReps,
        targetWeight,
        actualReps: targetReps,
        actualWeight: targetWeight,
        intensity: planSet.percent ?? null,
        isCompleted: false,
      })
    }
  })

  return sets
}

// const exercise = {
//   exerciseId: "bench_press",
//   sets: [
//     { percent: 50, reps: 5 },
//     { percent: 60, reps: 4 },
//     { percent: 70, reps: 3, repeat: 2 },
//     { percent: 75, reps: 3, repeat: 5 }
//   ],
//   comment: "Работаем чисто, без отказа"
// }

export const createSessionExercise = (exercise: Exercise, exerciseIndex: number, maxes: UserMaxes): SessionExercise => {
  const exerciseMeta = exercisesList.find(item => item.id === exercise.exerciseId)
  if (!exerciseMeta) {
    throw new Error(`Exercise not found: ${exercise.exerciseId}`)
  }
  const oneRM = isMainLift(exerciseMeta.lift) ? maxes[exerciseMeta.lift] : 0

  return {
     id: String(exerciseIndex),
     name: exerciseMeta.name,
     lift: exerciseMeta.lift,
     sets: createSessionSets(exercise, exerciseIndex, oneRM),
     restDuration: getRestDuration(exerciseMeta?.lift),
     isCompleted: false,
  }
}
  

export const buildTrainingSession = (day: DayToRender, exercises: Exercise[], maxes: UserMaxes): TrainingSession => ({
  week: day.week,
  day: day.day,
  exercises: exercises.map((exercise, index) =>
    createSessionExercise(exercise, index, maxes)
  ),
  startedAt: new Date().toISOString(),
  isCompleted: false,
})
