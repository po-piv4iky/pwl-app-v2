import { ProgramTraining } from '@/programs/types/program.types'
import { TrainingDay, TrainingWeek } from '@/programs/types/training.types'

export interface ActiveProgram {
  program: ProgramTraining
  trainingState: TrainingState
  startedAt: string
  currentWeek: number
  currentDay: number
  viewMode: ViewMode
  completedDays: CompletedDay[]
  status: 'active' | 'completed'
}

export type ViewMode =
  | { type: 'current' }
  | { type: 'selected'; week: number; day: number }

export type TrainingMode = 'plan' | 'training'

export interface SessionSet {
  id: string
  setNumber: number
  targetReps: number | string
  targetWeight: number
  actualReps: number | string
  actualWeight: number
  intensity?: number | null
  isCompleted: boolean
}

export interface SessionWarmUpSet {
  setNumber: number
  targetReps: string | number
  targetWeight: number
  actualReps: string | number
  actualWeight: number
  intensity?: number | null
}

export interface SessionExercise {
  id: string
  name: string
  lift: string
  restDuration: number
  warmUp: SessionWarmUpSet[]
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
  currentSession?: TrainingSession | null
  restTimer: RestTimerState
}

export interface CompletedDay {
  week: number
  day: number
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
  startProgram: (program: ProgramTraining) => void
  resetProgram: () => void

  startTraining: () => void
  nextExercise: () => void
  finishTrainingSession: () => void

  completeDay: (week: number, day: number) => void
  toggleSetCompletion: (exerciseIndex: number, setId: string) => void

  startRestTimer: (duration: number) => void
  stopRestTimer: () => void
  changeRestTimer: (seconds: number) => void

  getCurrentWeekData: () => TrainingWeek | null
  getDayData: (week: number, day: number) => TrainingDay | null
  getWeekSchedule: () => ScheduleDay[]
  getDayToRender: () => DayToRender | null
  selectWeek: (week: number) => void
  selectDay: (week: number, day: number) => void
  showCurrentDay: () => void
  updateSetActualValues: (
    exerciseIndex: number,
    setId: string,
    values: Partial<Pick<SessionSet, 'actualWeight' | 'actualReps'>>,
  ) => void
}
