import { FederationId } from '@/config/federations/federation.types'
import { Gender } from '@/store/user-standart.store'

export type LiftMode = 'total' | 'bench' | 'squat' | 'deadlift'

export type FederationLevel =
  | 'Начальный'
  | '3 уровень'
  | '2 уровень'
  | '1 уровень'
  | 'Продвинутый'
  | 'Мастер'
  | 'Элита'

export type StandardsByLevel = Record<FederationLevel, number>
export type WeightClassStandards = Record<number, StandardsByLevel>
export type ModeStandards = Partial<Record<LiftMode, WeightClassStandards>>

export type GenderStandards = {
  male: ModeStandards
  female: ModeStandards
}

export type AthleteResults = {
  bench: number
  squat: number
  deadlift: number
}

export type CalculateAthleteLevelParams = {
  federation: FederationId
  gender: Gender
  age: number
  weight: number
  mode: LiftMode
  results: AthleteResults
}

export type AthleteLevelResult = {
  federation: FederationId
  currentLevel: FederationLevel
  athleteResult: number
  currentStandard: number
  nextLevel: FederationLevel | null
  nextStandard: number | null
  progressToNextKg: number | null
  weightClass: number
  mode: LiftMode
}