import { TrainingDay, TrainingWeek } from "../types/training.types"


export const week = (weekNumber: number, trainingDays: TrainingDay[]): TrainingWeek => {
  return {
    weekNumber,
    trainingDays
  }
}

