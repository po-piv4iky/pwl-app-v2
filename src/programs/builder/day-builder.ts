import { Exercise } from "@/programs/types/exercises.types"
import { TrainingDay } from "../types/training.types"

export const day = (day: number, exercises: Exercise[]): TrainingDay => {
    return {
        day,
        exercises
    }
}

