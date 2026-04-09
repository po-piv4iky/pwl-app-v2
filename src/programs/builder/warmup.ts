import { WarmUpSet } from "../types/warmup.types"


function roundToPlates(weight: number, step = 2.5) {
  return Math.round(weight / step) * step
}

export function generateWarmUp(
  oneRem: number,
  firstPercent: number
): WarmUpSet[] {

  const barbell = 20
  const targetWeight = roundToPlates((firstPercent / 100) * oneRem)

  if (targetWeight <= barbell) {
    return [{ weight: barbell, reps: 10, isWarmUp: true }]
  }

  const sets: WarmUpSet[] = []
  let weight = barbell

  const step = Math.max(5, (targetWeight - barbell) / 3)

  while (weight < targetWeight) {

    let reps = 10
    if (sets.length === 1) reps = 8
    if (sets.length >= 2) reps = 6

    const roundedWeight = roundToPlates(weight)

    // чтобы не было повторяющихся весов
    if (!sets.some(s => s.weight === roundedWeight)) {
      sets.push({
        weight: roundedWeight,
        reps,
        isWarmUp: true
      })
    }

    weight += step
  }

  return sets
}


//generateWarmUp(oneRem, 50), использовать только в реакт компоненте, 
// т.к максимумыхранятся в стор, это реакт хук, можно использовать только в реакт компоненете
// вот так использовать
//const firstPercent = exercise.sets[0].percent!
// const warmup = generateWarmUp(oneRM, firstPercent)
