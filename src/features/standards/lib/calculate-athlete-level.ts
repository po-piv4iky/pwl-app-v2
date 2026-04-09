
import {
  AthleteLevelResult,
  CalculateAthleteLevelParams,
  FederationLevel,
} from '../types/standart.types'
import { getAthleteResult } from './get-athlete-result'
import { getWeightClass } from './get-weight-class'
import { federationStandardsMap } from './standards-map'

const levelsDescending: FederationLevel[] = [
  'Элита',
  'Мастер',
  'Продвинутый',
  '1 уровень',
  '2 уровень',
  '3 уровень',
  'Начальный',
]

export function calculateAthleteLevel(
  params: CalculateAthleteLevelParams
): AthleteLevelResult | null {
  const { federation, gender, weight, mode, results } = params

  const athleteResult = getAthleteResult(mode, results)
  const weightClass = getWeightClass(weight, gender)

  if (!weightClass) {
    return null
  }

  const federationStandards = federationStandardsMap[federation]
  if (!federationStandards) {
    return null
  }

  const standardsByMode = federationStandards[gender]?.[mode]
  if (!standardsByMode) {
    return null
  }

  const standards = standardsByMode[weightClass]
  if (!standards) {
    return null
  }

  const currentLevel =
    levelsDescending.find((level) => athleteResult >= standards[level]) ??
    'Начальный'

  const currentLevelIndex = levelsDescending.indexOf(currentLevel)

  const nextLevel =
    currentLevelIndex > 0 ? levelsDescending[currentLevelIndex - 1] : null

  const currentStandard = standards[currentLevel]
  const nextStandard = nextLevel ? standards[nextLevel] : null

  const progressToNextKg =
    nextStandard !== null ? Math.max(0, nextStandard - athleteResult) : null

  return {
    federation,
    currentLevel,
    athleteResult,
    currentStandard,
    nextLevel,
    nextStandard,
    progressToNextKg,
    weightClass,
    mode,
  }
}