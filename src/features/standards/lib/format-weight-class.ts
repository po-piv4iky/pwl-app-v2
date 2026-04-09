export function formatWeightClass(weightClass: number): string {
  if (weightClass === 999) {
    return '+120 кг'
  }

  return `до ${weightClass} кг`
}