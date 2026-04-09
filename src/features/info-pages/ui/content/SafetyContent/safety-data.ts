import { SafetyContent } from "./type";


export const SafetyData: SafetyContent = {
  title: "Безопасность тренировок",

  warning:
    "Всегда тренируйтесь с партнером или в присутствии тренера при работе с максимальными весами.",

  rules: [
    {
      id: "warmup",
      title: "Разминка",
      description:
        "Обязательная разминка перед каждой тренировкой минимум 10–15 минут"
    },
    {
      id: "spotter",
      title: "Страховка",
      description:
        "Используйте страховочное оборудование и работайте с партнером"
    },
    {
      id: "technique",
      title: "Техника",
      description:
        "Контроль техники выполнения важнее веса на штанге"
    }
  ]
}