import { TrainingWeek } from "./trainingWeek"

export interface Program {
  id: string
  title: string
  author: string
  lift: 'bench'
  level: string
  oneRM: number
  cycleWeeks: string
  description: string
  weeks: TrainingWeek[]
}


