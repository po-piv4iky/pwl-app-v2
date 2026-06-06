import { ProgramTraining } from '@/programs/types/program.types'
import { StateCreator } from 'zustand'
import { IProgramTrainingState } from './active-program.store'

export type SetState = Parameters<StateCreator<IProgramTrainingState>>[0]

export type GetState = Parameters<StateCreator<IProgramTrainingState>>[1]

export type ActiveProgramState = {
  program: ProgramTraining // дата активной программы тренировок
  status: 'idle' | 'active' | 'completed'
  startedAt: string | null // когда началась программа
  currentPosition: CurrentPosition // текущаяя неделя и день, которую юзер выполняет
  trainingState: TrainingState
  completedDays: CompletedDay[] // массив выполненых дней
  viewMode: ViewMode // это для установки текущей или просмтриваемой недели и дня
}

export type CurrentPosition = {
  week: number
  day: number
}

export type CompletedDay = {
  week: number
  day: number
  completedAt: string // '2026-05-30T12:00:00Z'
}

type ViewMode =
  | { type: 'current'; week: number; day: number }
  | { type: 'preview'; week: number; day: number }

// -----СОСТОЯНИЕ ТРЕНИРОВОЧНОЙ СЕССИИ-------
export type TrainingState = {
  mode: 'plan' | 'training'
  exerciseIndex: number
  restTimer: RestTimerState
  currentSession: TrainingSession | null
}

export type RestTimerState = {
  isActive: boolean
  duration: number
  startedAt: number | null
}

// ----ЕСЛИ ЮЗЕР НАЧАЛ ТРЕНИРОВКУ, У НЕГО ПОЯВЛЯТСЯ ТЕКУЩАЯ ТРЕНИРОВКА----
export interface TrainingSession {
  week: number
  day: number
  exercises: SessionExercise[] // массив с объектами упражнений этой тренировки
  startedAt: string
  comment?: string
  isCompleted: boolean
}
//---СЕССИЯ ОДНОГО УПРАЖНЕНИЯ НАПРИМЕР СТАНОВАЯ ТЯГА ИМЕЕТ 4 ПОДХОДА ЭТО 1 СЕССИЯ
export interface SessionExercise {
  id: number
  name: string
  lift: string
  restDuration: number
  warmUp?: SessionWarmUpSet[]
  sets: SessionSet[]
  comment?: string
  isCompleted: boolean
}

export interface SessionWarmUpSet {
  setNumber: number
  targetReps: string | number
  targetWeight: number
  intensity: number | null
}

//---СЕССИЯ ОДНОГО ПОДХОДА
export interface SessionSet {
  id: number
  setNumber: number
  targetReps: number | string
  targetWeight: number
  actualReps: number | string
  actualWeight: number
  intensity?: number | null
  isCompleted: boolean
}
