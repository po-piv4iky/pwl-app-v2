import { Gender } from '@/store/user-standart.store'

const maleWeightClasses = [53, 59, 66, 74, 83, 93, 105, 120, 999]
const femaleWeightClasses = [43, 47, 52, 57, 63, 69, 76, 84, 999]

export function getWeightClass(weight: number, gender: Gender): number | null {
  const weightClasses =
    gender === 'male' ? maleWeightClasses : femaleWeightClasses

  return weightClasses.find((item) => weight <= item) ?? null
}