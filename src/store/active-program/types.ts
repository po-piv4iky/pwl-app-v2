import { Program } from '@/config/programs/types/programs.types'
import { TrainingDay } from '@/config/programs/types/trainingDay.types'
import { TrainingWeek } from '@/config/programs/types/trainingWeek'

export type ViewMode =
  | { type: 'current' }
  | { type: 'selected'; week: number; day: number }

export type TrainingMode = 'plan' | 'training' | 'finished'

export interface SessionSet {
  id: string
  setNumber: number
  targetReps: number | string
  targetWeight: number
  actualReps: number | string
  actualWeight: number
  intensity: number | null
  isCompleted: boolean
}

export interface SessionExercise {
  id: string
  name: string
  lift?: string
  category?: string
  restDuration: number
  sets: SessionSet[]
  isCompleted: boolean
}

export interface TrainingSession {
  week: number
  day: number
  exercises: SessionExercise[]
  startedAt: string
  isCompleted: boolean
}

export interface RestTimerState {
  isActive: boolean
  duration: number
  startedAt: number | null
}

export interface TrainingState {
  mode: TrainingMode
  exerciseIndex: number
  currentSession?: TrainingSession
  restTimer: RestTimerState
}

export interface CompletedDay {
  week: number
  day: number
}

export interface ActiveProgram {
  program: Program
  trainingState: TrainingState
  startedAt: string
  currentWeek: number
  currentDay: number
  viewMode: ViewMode
  completedDays: CompletedDay[]
  status: 'active' | 'completed'
}

export interface ScheduleDay {
  day: number
  isTraining: boolean
  isCompleted: boolean
  isActive: boolean
}

export interface DayToRender {
  week: number
  day: number
  isCurrent: boolean
}

export interface ActiveProgramStore {
  activeProgram: ActiveProgram | null
  startProgram: (program: Program) => void
  resetProgram: () => void
  startTraining: () => void
  setCurrentWeek: (week: number) => void
  setCurrentDay: (day: number) => void
  selectDay: (week: number, day: number) => void
  completeDay: (week: number, day: number) => void
  toggleSetCompletion: (exerciseIndex: number, setId: string) => void
  startRestTimer: (duration: number) => void
  stopRestTimer: () => void
  getCurrentWeekData: () => TrainingWeek | null
  getDayData: (week: number, day: number) => TrainingDay | null
  getWeekSchedule: () => ScheduleDay[]
  getDayToRender: () => DayToRender | null
}
