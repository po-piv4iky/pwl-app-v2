export interface NutritionItem {
  id: string
  label: string        // Белки
  value: string        // 1.6-2.2 г
  description: string  // на кг веса тела...
}

export interface NutritionContent {
  title: string
  description: string
  items: NutritionItem[]
}