// day: 1,
// exercise: [
// {
//   exerciseId: "bench_press",
//   sets: [                                                 //Жим лёжа
//     { percent: 50, reps: 5, isWarmUp: true }, 1 на 5     50%
//     { percent: 60, reps: 4, isWarmUp: true }, 1 на 4     60%
//     { percent: 70, reps: 3, repeat: 2 },                 2 на 3     70%
//     { percent: 75, reps: 3, repeat: 5 },                5 на 3     75%
//   ]
// },
// {
//   exerciseId: "dumbbell_fly",
//   sets: [
//     { reps: 8, repeat: 5 }
//   ],
//   comment: "Подберите вес по ощущениям"
// }, ...]

import { exercisesList } from '../exercises-list'
import { ExerciseLift } from '../types/exercise-definition.types'
import { ExerciseSet } from '../types/exercises.types'
import { TrainingDay } from '../types/training.types'

export type TrainingLevel = 'лёгкая' | 'средняя' | 'тяжёлая'

function getLiftMultiplier(lift?: ExerciseLift) {
  if (lift === 'squat') return 1.35
  if (lift === 'deadlift') return 1.35
  if (lift === 'bench') return 1.25

  return 1
}

function calculateSetLoad(set: ExerciseSet, multiplier = 1) {
  const reps = typeof set.reps === 'number' ? set.reps : 8
  const percent = set.percent ?? 60
  const repeat = set.repeat ?? 1

  return reps * repeat * (percent / 100) * multiplier
}

export function calculateTrainingLoad(day: TrainingDay): number {
  let score = 0

  day.exercises.forEach((exercise) => {
    const exerciseDefinition = exercisesList.find(
      (item) => item.id === exercise.exerciseId,
    )

    const liftMultiplier = getLiftMultiplier(exerciseDefinition?.lift)

    exercise.warmup?.forEach((set) => {
      score += calculateSetLoad(set, liftMultiplier) * 0.5
    })

    exercise.sets.forEach((set) => {
      score += calculateSetLoad(set, liftMultiplier)
    })
  })

  return Math.round(score)
}

export function getTrainingLevel(day: TrainingDay): TrainingLevel {
  const load = calculateTrainingLoad(day)

  if (load <= 35) return 'лёгкая'
  if (load <= 70) return 'средняя'

  return 'тяжёлая'
}

export function getTrainingLevelVariant(
  level: TrainingLevel,
): 'green' | 'yellow' | 'red' {
  if (level === 'лёгкая') return 'green'
  if (level === 'средняя') return 'yellow'

  return 'red'
}
