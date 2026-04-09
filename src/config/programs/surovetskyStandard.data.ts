import { Program } from "./types/programs.types";

export const surovetskyBenchStandard: Program = {
  id: 'surovetsky-bench-standard',
  title: 'Суровецкий — Стандарт',
  author: 'Суровецкий А. Е.',
  lift: 'bench',
  level: 'Средний',
  oneRM: 170,
  cycleWeeks: '3 недели',
  description:
    'Классическая жимовая система на 3 недели (9 тренировок) с повторением цикла и прибавкой веса',

  weeks: [
    
    // {
      //   week: 1,
      //   days: [
        //     {
          //       day: 1,
          //       exercises: [
            //         {
    //           name: 'Жим лёжа',
    //           category: 'main',
    //           lift: 'bench',
    //           intensity: 68,
    //           sets: 4,
    //           reps: 5,
    //         },
    //         {
    //           name: 'Жим лёжа',
    //           category: 'main',
    //           lift: 'bench',
    //           intensity: 68,
    //           sets: 1,
    //           reps: { min: 5, max: 7 },
    //           comment: 'Топ-сет',
    //         },
    //       ],
    //       accessory: {
    //         muscleGroups: ['back', 'biceps', 'rear-delts'],
    //         recommendation: '2–4 упражнения, 3–4 подхода',
    //         exercises: [
    //           {
    //             name: 'Подтягивание на турнике',
    //             sets: 4,
    //             reps: { min: 8, max: 12 }
    //           },
    //           {
    //             name: 'Подъём штанги на биццепс',
    //             sets: 3,
    //             reps: { min: 6, max: 8 }
    //           },
    //           {
    //             name: 'Разведение гантелей в наклоне',
    //             sets: 3,
    //             reps: { min: 8, max: 12 }
    //           },
    //         ]
    //       },
    //     },

    //     {
    //       day: 3,
    //       exercises: [
    //         {
    //           name: 'Жим лёжа',
    //           category: 'main',
    //           lift: 'bench',
    //           intensity: 96,
    //           sets: 3,
    //           reps: 1,
    //         },
    //         {
    //           name: 'Дожимы',
    //           category: 'lockout',
    //           lift: 'bench',
    //           intensity: 110,
    //           absoluteWeightPercent: 100,
    //           sets: 3,
    //           reps: 2,
    //           comment: 'Работа выше соревновательного ПМ',
    //         },
    //       ],
    //       accessory: {
    //         muscleGroups: ['triceps', 'front-delts'],
    //         recommendation:
    //           'На каждую группу по 1 упражнению по 4 подхода',
    //         exercises: [
    //           {
    //             name: 'Французский жим',
    //             sets: 4,
    //             reps: { min: 8, max: 12 }
    //           },
    //           {
    //             name: 'Жим штанги стоя',
    //             sets: 4,
    //             reps: { min: 8, max: 10 }
    //           },
    //         ]  
    //       },
    //     },

    //     {
    //       day: 5,
    //       exercises: [
    //         {
    //           name: 'Жим лёжа',
    //           category: 'main',
    //           lift: 'bench',
    //           intensity: 88,
    //           sets: 3,
    //           reps: 3,
    //         },
    //         {
    //           name: 'Жим лёжа',
    //           category: 'main',
    //           lift: 'bench',
    //           intensity: 88,
    //           sets: 1,
    //           reps: { min: 3, max: 5 },
    //           comment: 'Топ-сет',
    //         },
    //       ],
    //       accessory: {
    //         muscleGroups: ['chest'],
    //         recommendation: '2 упражнения на грудь в 3-4 потходах',
    //         exercises: [
    //           {
    //             name: 'Разводка',
    //             sets: 4,
    //             reps: { min: 10, max: 12 }
    //           },
    //           {
    //             name: 'Отжимание от брусьев с собственным весом или отягощением',
    //             sets: 4,
    //             reps: { min: 8, max: 12 }
    //           },
    //         ] 
    //       },
    //     },
    //   ],
    // },

    // ------------------ 1 НЕДЕЛЯ ------------------
    {
  week: 1,
  days: [
    {
      day: 1,
      exercises: [
        // MAIN
        {
          name: 'Жим лёжа',
          category: 'main',
          lift: 'bench',
          intensity: 68,
          sets: 4,
          reps: 5,
        },
        {
          name: 'Жим лёжа',
          category: 'main',
          lift: 'bench',
          intensity: 68,
          sets: 1,
          reps: { min: 5, max: 7 },
          comment: 'Топ-сет',
        },

        // ACCESSORY
        {
          name: 'Подтягивание на турнике',
          category: 'accessory',
          sets: 4,
          reps: { min: 8, max: 12 },
        },
        {
          name: 'Подъём штанги на биццепс',
          category: 'accessory',
          sets: 3,
          reps: { min: 6, max: 8 },
        },
        {
          name: 'Разведение гантелей в наклоне',
          category: 'accessory',
          sets: 3,
          reps: { min: 8, max: 12 },
        },
      ],
    },

    {
      day: 3,
      exercises: [
        // MAIN
        {
          name: 'Жим лёжа',
          category: 'main',
          lift: 'bench',
          intensity: 96,
          sets: 3,
          reps: 1,
        },

        // LOCKOUT
        {
          name: 'Дожимы',
          category: 'lockout',
          lift: 'bench',
          intensity: 100,  //{min: 100, max: 106}
          sets: 1,
          reps: 2,
          comment: 'Работа выше соревновательного ПМ',
        },
         {
          name: 'Дожимы',
          category: 'lockout',
          lift: 'bench',
          intensity: 103,
          sets: 1,
          reps: 2,
          comment: 'Работа выше соревновательного ПМ',
        },
         {
          name: 'Дожимы',
          category: 'lockout',
          lift: 'bench',
          intensity: 106,
          sets: 1,
          reps: 2,
          comment: 'Работа выше соревновательного ПМ',
        },

        // ACCESSORY
        {
          name: 'Французский жим',
          category: 'accessory',
          sets: 4,
          reps: { min: 8, max: 12 },
        },
        {
          name: 'Жим штанги стоя',
          category: 'accessory',
          sets: 4,
          reps: { min: 8, max: 10 },
        },
      ],
    },

    {
      day: 5,
      exercises: [
        {
          name: 'Жим лёжа',
          category: 'main',
          lift: 'bench',
          intensity: 88,
          sets: 3,
          reps: 3,
        },
        {
          name: 'Жим лёжа',
          category: 'main',
          lift: 'bench',
          intensity: 88,
          sets: 1,
          reps: { min: 3, max: 5 },
          comment: 'Топ-сет',
        },

        // ACCESSORY
        {
          name: 'Разводка',
          category: 'accessory',
          sets: 4,
          reps: { min: 10, max: 12 },
        },
        {
          name: 'Отжимание от брусьев с собственным весом или отягощением',
          category: 'accessory',
          sets: 4,
          reps: { min: 8, max: 12 },
        },
      ],
    },
  ],
    },

    // ------------------ 2 НЕДЕЛЯ ------------------
    {
      week: 2,
      days: [
        {
          day: 1,
          exercises: [
            {
              name: 'Жим лёжа',
              category: 'main',
              lift: 'bench',
              intensity: 72,
              sets: 3,
              reps: 5,
            },
            {
              name: 'Жим лёжа',
              category: 'main',
              lift: 'bench',
              intensity: 72,
              sets: 1,
              reps: { min: 5, max: 7 },
              comment: 'Топ-сет',
            },
            {
                name: 'Тяга блока к поясу сидя',
                category: 'accessory',
                sets: 4,
                reps: { min: 8, max: 12 },
                comment: '2-3 упражнения на спину'

            },
            {
                name: 'Разводка гантелей в наклоне',
                category: 'accessory',
                sets: 4,
                reps: { min: 8, max: 12 },
                comment: '2-3 упражнения на спину и задние делты'
            },
          ],
        },

        {
          day: 3,
          exercises: [
            {
              name: 'Жим лёжа',
              category: 'main',
              lift: 'bench',
              intensity: 100,
              sets: 2,
              reps: 1,
            },

        //------lockout-----
            {
              name: 'Дожимы',
              category: 'lockout',
              lift: 'bench',
              intensity: 106,
              sets: 1,
              reps: 2,
            },
            {
              name: 'Дожимы',
              category: 'lockout',
              lift: 'bench',
              intensity: 109,
              sets: 1,
              reps: 2,
            },
            {
              name: 'Дожимы',
              category: 'lockout',
              lift: 'bench',
              intensity: 112,
              sets: 1,
              reps: 2,
            },

          //------accessory-----
            {
              name: 'Французский жим',
              category: 'accessory',
              sets: 4,
              reps: 10,
            },
            {
              name: 'Жима штанги стоя',
              category: 'accessory',
              sets: 4,
              reps: 10
            }
          ],
        },

        {
          day: 5,
          exercises: [
            {
              name: 'Жим лёжа',
              category: 'main',
              lift: 'bench',
              intensity: 76,
              sets: 3,
              reps: 5,
            },
            {
              name: 'Жим лёжа',
              category: 'main',
              lift: 'bench',
              intensity: 76,
              sets: 1,
              reps: { min: 5, max: 7 },
              comment: 'Топ-сет',
            },
            {
              name: 'Тяга верхнего блока',
              category: 'accessory',
              sets: 3,
              reps: 8
            },
            {
              name: 'Подъём штанги на бицепс',
              category: 'accessory',
              sets: 4,
              reps: {min: 5, max: 8}
            },
            {
              name: 'Разводка в наклоне',
              category: 'accessory',
              sets: 3,
              reps: 12
            }
          ],
        },
      ],
    },

    // ------------------ 3 НЕДЕЛЯ ------------------
    {
      week: 3,
      days: [
        {
          day: 1,
          exercises: [
            {
              name: 'Жим лёжа',
              category: 'main',
              lift: 'bench',
              intensity: 92,
              sets: 2,
              reps: 3,
            },
            {
              name: 'Жим лёжа',
              category: 'main',
              lift: 'bench',
              intensity: 92,
              sets: 1,
              reps: { min: 3, max: 5 },
              comment: 'Топ-сет',
            },
            {
              name: 'Разводка гантелей лёжа',
              category: 'accessory',
              sets: 4,
              reps: 10
            }
          ],
        },

        {
          day: 3,
          exercises: [
            {
              name: 'Жим лёжа',
              category: 'main',
              lift: 'bench',
              intensity: 68,
              sets: 5,
              reps: 5,
              comment: 'Без подсобных упражнений',
            },
          ],
        },

        {
          day: 5,
          title: 'Проходка',
          exercises: [
            {
              name: 'Жим лёжа',
              category: 'main',
              lift: 'bench',
              intensity: 112,
              sets: 3,
              reps: 2,
              comment: 'Контрольная проходка',
            },
            {
              name: 'Дожимы',
              category: 'lockout',
              lift: 'bench',
              intensity: 112,
              sets: 3,
              reps: 2,
            }
          ],
        },
      ],
    },
  ],
};
















