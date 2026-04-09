import { ExerciseDefinition } from "./types/exercise-definition.types";

export const exercises: ExerciseDefinition[] = [
  // Bench
  {
    id: "bench_press",
    name: "Жим лёжа",
    lift: "bench"
  },
  {
    id: "pause_bench",
    name: "Жим лёжа с паузой",
    lift: "bench"
  },
  {
    id: "close_grip_bench",
    name: "Жим лёжа узким хватом",
    lift: "bench"
  },
  {
    id: "board_press",
    name: "Жим с бруском",
    lift: "bench"
  },
  {
    id: "incline_bench",
    name: "Жим лёжа на наклонной скамье",
    lift: "bench"
  },
  {
    id: "wide_grip_bench_press",
    name: "Жим лежа широким хватом",
    lift: "bench"
  },

  // Squat
  {
    id: "squat",
    name: "Приседания со штангой",
    lift: "squat"
  },
  {
    id: "pause_squat",
    name: "Приседания с паузой",
    lift: "squat"
  },
  {
    id: "front_squat",
    name: "Фронтальные приседания",
    lift: "squat"
  },
  {
    id: "tempo_squat",
    name: "Темповые приседания",
    lift: "squat"
  },
  {
    id: "box_squat",
    name: "Приседания на ящик",
    lift: "squat"
  },

  // Deadlift
  {
    id: "deadlift",
    name: "Становая тяга",
    lift: "deadlift"
  },
  {
    id: "deficit_deadlift",
    name: "Становая тяга с дефицита",
    lift: "deadlift"
  },
  {
    id: "romanian_deadlift",
    name: "Румынская тяга",
    lift: "deadlift"
  },
  {
    id: "block_pull",
    name: "Тяга с блоков",
    lift: "deadlift"
  },
  {
    id: "snatch_grip_deadlift",
    name: "Тяга рывковым хватом",
    lift: "deadlift"
  },

  // Accessory
  {
    id: "pullups",
    name: "Подтягивания",
    lift: "accessory"
  },
  {
    id: "lat_pulldown",
    name: "Тяга верхнего блока",
    lift: "accessory"
  },
  {
    id: "lower_block_row",
    name: "Тяга нижнего блока",
    lift: "accessory"
  },
  {
    id: "barbell_row",
    name: "Тяга штанги в наклоне",
    lift: "accessory"
  },
  {
    id: "dumbbell_row",
    name: "Тяга гантели в наклоне",
    lift: "accessory"
  },
  {
    id: "face_pull",
    name: "Тяга каната к лицу",
    lift: "accessory"
  },
  {
    id: "triceps_pushdown",
    name: "Разгибание рук на блоке",
    lift: "accessory"
  },
  {
    id: "dips",
    name: "Отжимания на брусьях",
    lift: "accessory"
  },
  {
    id: "french_press",
    name: "Французский жим",
    lift: "accessory"
  },
  {
    id: "seated_incline_press",
    name: "Жим сидя под углом",
    lift: "accessory"
  },
  {
    id: "bicep_curl",
    name: "Сгибание рук на бицепс",
    lift: "accessory"
  },
  {
    id: "dumbbell_fly",
    name: "Разводка гантелей лёжа",
    lift: "accessory"
  },
  {
    id: "leg_press",
    name: "Жим ногами",
    lift: "accessory"
  },
  {
    id: "hamstring_curl",
    name: "Сгибание ног лёжа",
    lift: "accessory"
  },
  {
    id: 'hip_extension',
    name: 'Разгибание бедра',
    lift: "accessory"
  },
  {
    id: "back_extension",
    name: "Гиперэкстензия",
    lift: "accessory"
  },
  {
    id: "press",
    name: "Пресс",
    lift: "accessory"
  },
  {
    id: "triceps_biceps_superset",
    name: "Трицепс + бицепс",
    lift: "accessory"
  },
  {
    id: "split_squat",
    name: "Приседания в ножницах со штангой на спине",
    lift: "accessory"
  },
  {
    id: "chest_simulator",
    name: "Грудные на тренажёре",
    lift: "accessory"
  },
  {
    id: "barbell_pull_to_the_belt",
    name: "Тяга штанги к поясу в наклоне",
    lift: "accessory"
  },
  {
    id: "good_morning",
    name: "Наклоны сидя",
    lift: "accessory"
  },
  {
    id: "overhead_press_behind_neck",
    name: "Жим из-за головы",
    lift: "accessory"
  }
];

// const definition = exerciseDefinitions.find(
//   e => e.id === exercise.exerciseId
// )
// {
//   id: "bench_press",
//   name: "Жим лёжа",
//   lift: "bench",
//   videoUrl: "...",
//   icon: "...",
//   muscle: "chest"
// } сделано для этого 