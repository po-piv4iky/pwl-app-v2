import { generateWarmUp } from "@/programs/builder/warmup"
//нечет
export const warmupOdd = [
  generateWarmUp(30, 6),
  generateWarmUp(42.5, 5),
  generateWarmUp(55, 4),
  generateWarmUp(67.5, 3),
]
//чёт
export const warmupEven = [
  generateWarmUp(30, 6),
  generateWarmUp(45, 5),
  generateWarmUp(60, 4),
  generateWarmUp(75, 3),
]