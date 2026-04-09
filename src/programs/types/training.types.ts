import { Exercise } from "./exercises.types"

export interface TrainingWeek {
    weekNumber: number // 1 неделя
    trainingDays: TrainingDay[] // [{1 тренирвока}, {2 тренировка}, {3 тренирвока}]
}

export interface TrainingDay {
    day: number // 1 - это понедельник
    exercises: Exercise[] // [{}]
}