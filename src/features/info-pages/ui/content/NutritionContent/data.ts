import { NutritionContent } from "./nutrition.type";


export const NutritionData: NutritionContent = {
  title: "Питание для пауэрлифтеров",
  description:
    "Правильное питание — основа успешных тренировок и восстановления.",

  items: [
    {
      id: "protein",
      label: "Белки",
      value: "1.6–2.2 г",
      description: "на кг веса тела для восстановления и роста мышц"
    },
    {
      id: "carbs",
      label: "Углеводы",
      value: "4–7 г",
      description: "на кг веса тела для энергии на тренировках"
    },
    {
      id: "fats",
      label: "Жиры",
      value: "0.8–1.2 г",
      description: "на кг веса тела для гормонального баланса"
    }
  ]
}