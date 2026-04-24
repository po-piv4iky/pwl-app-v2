export type MainLift  = 'bench' | 'squat' | 'deadlift' 
export type ExerciseLift = MainLift | 'accessory'  

export interface ExerciseDefinition { // определения упражнения
  id: string
  name: string
  lift: ExerciseLift
}

export function isMainLift(lift: ExerciseLift): lift is MainLift{
  return lift === 'bench' || lift === 'deadlift' || lift === 'squat'
}