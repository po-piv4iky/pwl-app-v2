
import {
  AthleteLevelResult,
  CalculateAthleteLevelParams,
  FederationLevel,
} from '../types/standart.types'
import { getAthleteResult } from './get-athlete-result'
import { getWeightClass } from './get-weight-class'
import { fullListOfFederations } from './standards-map'

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

  const athleteResult = getAthleteResult(mode, results) // результат атлета - число к примеру жим 140 
  const weightClass = getWeightClass(weight, gender) // весовая к примеру до 93

  if (!weightClass) {
    return null
  }

  const theFederationFound = fullListOfFederations[federation] //находим федерацию из списка по параметру
  if (!theFederationFound) {
    return null
  }

  const standardsByMode = theFederationFound[gender]?.[mode] // находим по гендеру и движению список нормативов 
  if (!standardsByMode) {
    return null
  }

  const standards = standardsByMode[weightClass] // по весовой категории находим список разрядов 
//    {
  //   'Начальный': beginner,  97.5  
  //   '3 уровень': level3,   107.5
  //   '2 уровень': level2,   120
  //   '1 уровень': level1,   135
  //   'Продвинутый': advanced, 172.5
  //   'Мастер': master,  197.5 
  //   'Элита': elite,  999
  //   },
  if (!standards) {
    return null
  }

  const currentLevel = levelsDescending.find((level) => athleteResult >= standards[level]) ?? 'Начальный' //получили нужный уровень атлета строкой
 //standards[level] = число к примеру 135

  const currentLevelIndex = levelsDescending.indexOf(currentLevel) //indexOf первый находит индекс текущего уровня и возвращает номер индекса к примеру у 135 будет 3

  const nextLevel = currentLevelIndex > 0 ? levelsDescending[currentLevelIndex - 1] : null

  const currentStandard = standards[currentLevel]
  const nextStandard = nextLevel ? standards[nextLevel] : null

  const progressToNextKg = nextStandard !== null ? Math.max(0, nextStandard - athleteResult) : null //кг до следующего разряда

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