import { TrainingWeek } from "./training.types";

export type ProgramCategory = | "bench" | "squat" | "deadlift" | "powerlifting";
export type Level = "beginner" | "intermediate" | "advanced";

export interface ProgramTraining {
    id: string //bench-press
    coachId: string // bench-press-sheiko
    title: string //Программа Шейко Б.И.
    author: string
    country: string // страна тренера
    category: ProgramCategory //bench
    description: string //Жим лежа для любителей «пахать»
    level: Level
    durationWeeks: number
    weeks: TrainingWeek[] // [{1 неделя}, {2 неделя}, {3 неделя} ...]
}