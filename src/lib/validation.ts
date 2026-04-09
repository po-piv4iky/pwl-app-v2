import { z } from "zod"

// для максимумов
export const maxesSchema = z.object({
  bench: z.number().min(20).max(500),
  squat: z.number().min(20).max(500),
  deadlift: z.number().min(20).max(500)
})

// для пользователя
export const userSchema = z.object({
  gender: z.enum(["male", "female"], {
    message: "Выберите пол"
  }),

  age: z
    .number({
      message: "Введите возраст числом"
    })
    .min(10, { message: "Возраст должен быть не меньше 10 лет" })
    .max(100, { message: "Возраст должен быть не больше 100 лет" }),

  weight: z
    .number({
      message: "Введите вес числом"
    })
    .min(30, { message: "Вес должен быть больше 30 кг" })
    .max(300, { message: "Вес должен быть меньше 300 кг" })
})