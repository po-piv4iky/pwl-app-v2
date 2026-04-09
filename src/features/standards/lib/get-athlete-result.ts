import { AthleteResults, LiftMode } from '../types/standart.types'

export function getAthleteResult(
  mode: LiftMode,
  results: AthleteResults
): number {
  switch (mode) {
    case 'bench':
      return results.bench

    case 'squat':
      return results.squat

    case 'deadlift':
      return results.deadlift

    case 'total':
      return results.bench + results.squat + results.deadlift

    default:
      return 0
  }
}