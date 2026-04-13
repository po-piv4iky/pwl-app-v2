import { StandardsByLevel } from '../types/standard.types'

export function createLevelStandards(
  beginner: number,
  level3: number,
  level2: number,
  level1: number,
  advanced: number,
  master: number,
  elite: number
): StandardsByLevel {
  return {
    'Начальный': beginner,
    '3 уровень': level3,
    '2 уровень': level2,
    '1 уровень': level1,
    'Продвинутый': advanced,
    'Мастер': master,
    'Элита': elite,
  }
}