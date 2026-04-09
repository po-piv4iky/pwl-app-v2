export type ExerciseCategory = 'main' | 'lockout' | 'accessory'

export type ExerciseReps = number | { min: number; max: number }

export type ExerciseIntensity = number | { min: number; max: number }

export interface ProgramExercise {
  name: string
  category: ExerciseCategory
  lift?: 'bench' | 'squat' | 'deadlift'
  intensity?: ExerciseIntensity
  sets: number
  reps: ExerciseReps
  comment?: string
}

export interface TrainingDay {
  day: number
  title?: string
  exercises: ProgramExercise[]
}
