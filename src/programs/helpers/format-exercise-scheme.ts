import { ExerciseSet } from "../types/exercises.types";

// {
//   exerciseId: "bench_press",
//   sets: [                                                 //Жим лёжа
//     { percent: 0.5, reps: 5, isWarmUp: true }, 1 на 5     50%
//     { percent: 0.6, reps: 4, isWarmUp: true }, 1 на 4     60%
//     { percent: 0.7, reps: 3, repeat: 2 },                 2 на 3     70%                    
//     { percent: 0.75, reps: 3, repeat: 5 },                5 на 3     75%       
//   ]
// },
// {
//   exerciseId: "dumbbell_fly",
//   sets: [
//     { reps: 8, repeat: 5 }
//   ],
//   comment: "Подберите вес по ощущениям"
// }


export interface ExerciseSchemeLine {
  left: string;
  right?: string;
}
export function formatExerciseScheme(
  sets: ExerciseSet[]
): ExerciseSchemeLine[] {
  return sets.map((set) => {
    const repeat = set.repeat ?? 1;

    const left =
      repeat > 1
        ? `${set.reps} × ${repeat}`
        : `${set.reps}`;

    return {
      left,
      right: set.percent !== undefined ? `${set.percent}%` : undefined,
    };
  });
}


export function formatExercisePreview(sets: ExerciseSet[]): string {
  return sets
    .map((set) => {
      const repeat = set.repeat ?? 1;
      const repsPart = repeat > 1 ? `${set.reps}×${repeat}` : `${set.reps}`;

      return set.percent !== undefined
        ? `${set.percent}%×${repsPart}`
        : repsPart;
    })
    .join(" ");
}