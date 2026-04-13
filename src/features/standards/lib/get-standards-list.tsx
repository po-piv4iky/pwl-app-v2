import { fullListOfFederations } from './standards-map'
import { getWeightClass } from './get-weight-class'
import { CalculateAthleteLevelParams, FederationLevel } from '../types/standard.types'


export type StandardsListMap = Record<FederationLevel, number>

export function getStandardsList(
  params: Pick<CalculateAthleteLevelParams, 'federation' | 'gender' | 'weight' | 'mode'>
): StandardsListMap | null {
  const { federation, gender, weight, mode } = params

  const weightClass = getWeightClass(weight, gender)
  if (!weightClass) {
    return null
  }

  const federationStandards = fullListOfFederations[federation]
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

  return standards
}