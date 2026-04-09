import { ExerciseSet } from "../types/exercises.types";

export function works(percent: number, reps: number, sets: number): ExerciseSet[]{ 
  return Array.from({ length: sets }, () => ({percent, reps}))
}


export function work(percent: number, reps: number): ExerciseSet{ 
  return { percent, reps }
}

export function reps(reps: number | string, sets: number): ExerciseSet[]{
  return Array.from(( {length: sets} ), () => ({ reps }))
}