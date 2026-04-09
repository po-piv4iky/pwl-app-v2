export type LiftType  = 'bench' | 'squat' | 'deadlift' | 'accessory'  

export interface ExerciseDefinition { // определения упражнения
  id: string
  name: string
  lift: LiftType
}