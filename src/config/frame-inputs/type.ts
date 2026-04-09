import { LucideIcon } from "lucide-react"


// =========================
// 1. ВСЕ ВОЗМОЖНЫЕ ПОЛЯ ФОРМЫ
// =========================

// Это просто список всех ключей, которые могут быть в формах
export type InputKeys =
  | "bench"     // жим
  | "squat"     // присед
  | "deadlift"  // тяга
  | "gender"    // пол
  | "age"       // возраст
  | "weight"    // вес


// =========================
// 2. ЧТО ЗА ТИП У КАЖДОГО ПОЛЯ
// =========================

// Это самая важная штука ❗
// Мы говорим TS:
// "если ключ bench → значение number"
// "если gender → значение строка male | female"

export type InputValueMap = {
  bench: number
  squat: number
  deadlift: number
  age: number
  weight: number
  gender: "male" | "female"
}


// =========================
// 3. ГЕНЕРИК + MAPPED TYPE
// =========================

// Тут начинается магия TS 😄

// T — это набор ключей, например:
// "bench" | "squat" | "deadlift"

export type FormData<T extends keyof InputValueMap> = { //T наследуется от keyof InputValueMap = "bench" | "squat" | "deadlift" | "age" и.тд

  // [K in T] — это "пройтись по каждому ключу"
  // например если T = "bench" | "squat"
  // то K будет сначала "bench", потом "squat"

  [K in T]: InputValueMap[K]

  // InputValueMap[K] — берём тип значения для ключа K

}

/*
Пример:

type StrengthData = FormData<"bench" | "squat" | "deadlift">

TS развернёт это в:

{
  bench: number
  squat: number
  deadlift: number
}
*/


// =========================
// 4. ТИП ИНПУТА
// =========================

// Какие типы полей бывают в UI
export type InputType = "number" | "select"


// =========================
// 5. КОНФИГ ДЛЯ ОТРИСОВКИ ПОЛЯ
// =========================

// T — это ключ (например "bench" или "gender")

export interface FrameInput<T extends keyof InputValueMap> {

  // ключ поля
  key: T

  // текст (например "Жим лёжа")
  label: string

  // иконка
  icon: LucideIcon

  // placeholder
  placeholder: string

  // тип поля (input или select)
  type?: InputType

  // если select — список вариантов
  options?: {
    label: string

    // 🔥 ВАЖНО:
    // value строго зависит от ключа
    // если key = gender → value: "male" | "female"
    // если key = bench → value: number
    value: InputValueMap[T]
  }[]

  // просто для UI
  border?: boolean
}