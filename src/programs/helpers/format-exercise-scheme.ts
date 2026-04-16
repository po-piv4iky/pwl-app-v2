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

function formatRepeatWord(repeat: number): string {
  if (repeat === 1) return "подход";
  if (repeat >= 2 && repeat <= 4) return "подхода";
  return "подходов";
}

function formatRepWord(reps: number): string {
  const value = Math.abs(reps) % 100;
  const last = value % 10;

  if (value >= 11 && value <= 19) return "повторений";
  if (last === 1) return "повторение";
  if (last >= 2 && last <= 4) return "повторения";
  return "повторений";
}

export function formatExerciseScheme(
  sets: ExerciseSet[]
): ExerciseSchemeLine[] {
  return sets.map((set) => {
    const repeat = set.repeat ?? 1;

    let left = "";

    if (typeof set.reps === "string") {
      left =
        repeat > 1
          ? `${repeat} ${formatRepeatWord(repeat)} ${set.reps}`
          : `1 подход ${set.reps}`;
    } else {
      left =
        repeat > 1
          ? `${repeat} ${formatRepeatWord(repeat)} на ${set.reps}`
          : `1 подход ${set.reps} ${formatRepWord(set.reps)}`;
    }

    return {
      left,
      right: set.percent !== undefined ? `${set.percent}%` : undefined,
    };
  });
}