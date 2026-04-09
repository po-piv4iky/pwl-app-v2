import { WarmUpSet } from "./warmup.types"

export interface Exercise {
    exerciseId: string // ссылка на упражнение из базы
    warmup?: WarmUpSet[]
    sets: ExerciseSet[] // [{rep: 8, rpe: 8, weight: 100}, {rep: 6, rpe: 7, weight: 90}, {rep: 4, rpe: 6, weight: 80}]
    comment?: string
}

export interface ExerciseSet {
    isWarmUp?: boolean
    percent?: number
    reps: number | string
    rpe?: number
} 
