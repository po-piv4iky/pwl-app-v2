import { CreateExerciseConfig, Exercise } from '../types/exercises.types'

export function createExercise(exerciseId: string) {
  return ({ warmup, sets, comment }: CreateExerciseConfig): Exercise => {
    // принимает массив разминки?, массив подходов, комментарий
    return {
      exerciseId,
      ...(warmup?.length && { warmup }),
      ...(comment && { comment }),
      sets,
    }
  }
}

//использование
// const bench = createExercise(EXERCISE.BENCH_PRESS) // замыкание
// bench(work(0.7, 4, 4))

// week(1, [day(1, [bench( work(0.7, 3, 2), work(0.7, 3, 3) ) ])])

// {
//     weekNumber: 1,
//     trainingDays: [
//         {
//             day: 1,
//             exercises: [
//                 {
//                   exerciseId: EXERCISE.BENCH_PRESS,
//                   sets: [
//                     { isWarmUp: true, percent: 0.5, reps: 5 },
//                     { isWarmUp: true, percent: 0.6, reps: 4 },
//                     { percent: 0.7, reps: 3 },
//                     { percent: 0.7, reps: 3 },
//                     { percent: 0.75, reps: 3 },
//                     { percent: 0.75, reps: 3 },
//                     { percent: 0.75, reps: 3 },
//                     { percent: 0.75, reps: 3 },
//                     { percent: 0.75, reps: 3 }
//                   ]
//                 }
