export interface Exercise {
  exerciseId: string
  warmup?: ExerciseSet[]
  sets: ExerciseSet[]
  comment?: string
}

export interface ExerciseSet {
  percent?: number
  reps: number | string
  repeat?: number
  rpe?: number
}

export interface CreateExerciseConfig {
  warmup?: ExerciseSet[]
  sets: ExerciseSet[]
  comment?: string
}
