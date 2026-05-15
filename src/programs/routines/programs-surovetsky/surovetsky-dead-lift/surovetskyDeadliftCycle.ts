import { day } from '@/programs/builder/day-builder'
import { week } from '@/programs/builder/week-builder'
import { reps, work, works } from '@/programs/builder/work'
import { COMMENTS } from '@/programs/constants/comments'
import {
  backExtension,
  bench,
  bicepCurl,
  deadLift,
  dumbbellFly,
  frenchPress,
  gakkSquat,
  hammerOnBiceps,
  hamstringCurl,
  inclineBenchDumbbells,
  lateralRaise,
  latPullDown,
  lowerBlockRow,
  standingBarbellPress,
} from '@/programs/exercises'
import { ProgramTraining } from '@/programs/types/program.types'
import { warmupEven, warmupOdd } from './helper/warmup'

// 30% ×6 нечет
// 42.5% ×5
// 55% ×4
// 67.5% ×3
// Чётные тренировки
// 30% ×6
// 45% ×5
// 60% ×4
// 75% ×3

// Что я бы НЕ ставил

// На этом цикле я бы избегал:

// тяжёлого приседа
// румынской тяги
// good morning
// тяжёлых выпадов
// отказного жима ногами

// Каким должен быть жим
// Вариант 1 — техника/объём
// 65–75%
// 5×5
// Вариант 2 — средняя интенсивность
// 70–80%
// 4×4

// Вариант 3 — скоростной жим

// Очень хороший вариант под тяговой цикл.

// 50–60%
// 6×3

// с взрывной скоростью.

// Тяга (нечётная)
// ↓
// 2-3 дня
// ↓
// Лёгкий жим
// ↓
// 2-3 дня
// ↓
// Тяга (чётная)
// ↓
// 1-2 дня
// ↓
// Лёгкий жим/ОФП
// ↓
// 1-2 дня
// ↓
// Следующая тяга

export const surovetskyDeadliftCycle: ProgramTraining = {
  id: 'deadlift-cycle',
  coachId: 'surovetsky',
  title: 'Становая тяга-цикл',
  author: 'Суровецкий',
  country: 'RU',
  lift: 'deadlift',
  description:
    'Тяговый цикл Аскольда Суровецкого для развития максимальной силы в становой тяге. Программа сочетает объёмные и интенсивные тренировки, позволяя одновременно развивать технику, силовую выносливость и адаптацию к большим весам. Основной акцент сделан на грамотную прогрессию нагрузки, восстановление ЦНС и постепенный выход на новый максимум без постоянной работы “в отказ”.',
  descriptionPreview:
    'Силовой цикл Суровецкого для роста максимума в становой тяге и адаптации к большим весам.',
  level: 'advanced',
  durationWeeks: 10,

  weeks: [
    week(1, [
      day(1, [
        deadLift({
          warmup: warmupOdd,
          sets: [works(70, 5, 5)],
        }), // нечёт 5 дней отдых

        latPullDown({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lowerBlockRow({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        bicepCurl({
          sets: [reps('6-8', 4)],
          comment: COMMENTS.EXPLOSIVE,
        }),
      ]),

      day(3, [
        bench({
          sets: [work(65, 5), work(70, 5), works(75, 5, 5)],
          comment: COMMENTS.EXPLOSIVE,
        }),

        inclineBenchDumbbells({
          sets: [reps(8, 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        hammerOnBiceps({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(6, [
        deadLift({
          warmup: warmupEven,
          sets: [work(81, 3), work(85, 2), works(88.5, 1, 3)],
        }), // 2 тренировка, чётная. Следующая тяга через 3 дня

        gakkSquat({
          sets: [reps(8, 4)],
          comment: COMMENTS.LIGHT,
        }),

        hamstringCurl({
          sets: [reps(12, 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),
    ]),

    week(2, [
      day(2, [
        deadLift({
          warmup: warmupOdd,
          sets: [works(72.5, 5, 5)],
        }), // 3 тренировка, нечётная. Следующая тяга через 5 дней

        latPullDown({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lowerBlockRow({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        bicepCurl({
          sets: [reps('6-8', 4)],
          comment: COMMENTS.EXPLOSIVE,
        }),
      ]),

      day(5, [
        standingBarbellPress({
          sets: [reps(6, 4)],
          comment: COMMENTS.MEDIUM,
        }),

        lateralRaise({
          sets: [reps(10, 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        frenchPress({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(7, [
        deadLift({
          warmup: warmupEven,
          sets: [work(81, 3), work(85, 2), works(88.5, 2, 3)],
        }),

        bench({
          sets: [work(70, 4), work(75, 4), works(80, 4, 2)],
          comment: COMMENTS.EXPLOSIVE,
        }),

        dumbbellFly({
          sets: [reps(10, 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        backExtension({
          sets: [reps(12, 4)],
          comment: COMMENTS.BODY_WEIGHT,
        }),
      ]),
    ]),

    week(3, [
      day(3, [
        deadLift({
          warmup: warmupOdd,
          sets: [works(75, 5, 5)],
        }),

        latPullDown({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lowerBlockRow({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        bicepCurl({
          sets: [reps('6-8', 4)],
          comment: COMMENTS.EXPLOSIVE,
        }),
      ]),

      day(5, [
        bench({
          sets: [work(60, 5), work(65, 5), works(70, 5, 4)],
          comment: COMMENTS.EXPLOSIVE,
        }),

        inclineBenchDumbbells({
          sets: [reps(8, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lateralRaise({
          sets: [reps(12, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        frenchPress({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),
    ]),

    week(4, [
      day(1, [
        deadLift({
          warmup: warmupEven,
          sets: [work(82.5, 3), work(87.5, 2), works(94, 1, 3)],
        }),

        gakkSquat({
          sets: [reps(8, 3)],
          comment: COMMENTS.LIGHT,
        }),

        hamstringCurl({
          sets: [reps(12, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(4, [
        deadLift({
          warmup: warmupOdd,
          sets: [works(77.5, 4, 4)],
        }),

        latPullDown({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lowerBlockRow({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        bicepCurl({
          sets: [reps('6-8', 3)],
          comment: COMMENTS.MEDIUM,
        }),
      ]),

      day(6, [
        bench({
          sets: [work(65, 4), work(70, 4), works(75, 4, 4)],
          comment: COMMENTS.EXPLOSIVE,
        }),

        dumbbellFly({
          sets: [reps(10, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        hammerOnBiceps({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),
    ]),

    week(5, [
      day(2, [
        deadLift({
          warmup: warmupEven,
          sets: [work(82.5, 3), work(87.5, 2), works(94, 2, 3)],
        }),

        gakkSquat({
          sets: [reps(8, 3)],
          comment: COMMENTS.LIGHT,
        }),

        hamstringCurl({
          sets: [reps(10, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(5, [
        deadLift({
          warmup: warmupOdd,
          sets: [works(80, 4, 4)],
        }),

        latPullDown({
          sets: [reps('8-10', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lowerBlockRow({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        bicepCurl({
          sets: [reps('6-8', 3)],
          comment: COMMENTS.MEDIUM,
        }),
      ]),

      day(7, [
        standingBarbellPress({
          sets: [reps(6, 3)],
          comment: COMMENTS.MEDIUM,
        }),

        lateralRaise({
          sets: [reps(12, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        frenchPress({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),
    ]),

    week(6, [
      day(3, [
        deadLift({
          warmup: warmupEven,
          sets: [work(84, 3), work(94, 2), works(100, 1, 3)],
        }),

        hamstringCurl({
          sets: [reps(10, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        backExtension({
          sets: [reps(12, 3)],
          comment: COMMENTS.BODY_WEIGHT,
        }),
      ]),

      day(6, [
        deadLift({
          warmup: warmupOdd,
          sets: [works(82.5, 4, 4)],
        }),

        latPullDown({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lowerBlockRow({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        bicepCurl({
          sets: [reps('6-8', 3)],
          comment: COMMENTS.MEDIUM,
        }),
      ]),
    ]),

    week(7, [
      day(4, [
        deadLift({
          warmup: warmupEven,
          sets: [work(84, 3), work(94, 2), works(100, 2, 3)],
        }),

        hamstringCurl({
          sets: [reps(10, 2)],
          comment: COMMENTS.LIGHT,
        }),

        backExtension({
          sets: [reps(12, 2)],
          comment: COMMENTS.BODY_WEIGHT,
        }),
      ]),

      day(7, [
        deadLift({
          warmup: warmupOdd,
          sets: [works(85, 3, 3)],
        }),

        latPullDown({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lowerBlockRow({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),
    ]),

    week(8, [
      day(2, [
        bench({
          sets: [work(60, 4), work(65, 4), works(70, 4, 3)],
          comment: COMMENTS.EXPLOSIVE,
        }),

        inclineBenchDumbbells({
          sets: [reps(8, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lateralRaise({
          sets: [reps(12, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(5, [
        deadLift({
          warmup: warmupEven,
          sets: [work(85.5, 3), work(97.5, 2), works(105, 1, 3)],
        }),

        hamstringCurl({
          sets: [reps(10, 2)],
          comment: COMMENTS.LIGHT,
        }),

        backExtension({
          sets: [reps(10, 2)],
          comment: COMMENTS.BODY_WEIGHT,
        }),
      ]),
    ]),

    week(9, [
      day(1, [
        deadLift({
          warmup: warmupOdd,
          sets: [works(87.5, 3, 3)],
        }),

        latPullDown({
          sets: [reps('8-10', 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        lowerBlockRow({
          sets: [reps('8-10', 2)],
          comment: COMMENTS.LIGHT,
        }),
      ]),

      day(3, [
        bench({
          sets: [work(60, 3), work(65, 3), works(70, 3, 3)],
          comment: COMMENTS.EXPLOSIVE,
        }),

        lateralRaise({
          sets: [reps(12, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        frenchPress({
          sets: [reps('8-10', 2)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(6, [
        deadLift({
          warmup: warmupEven,
          sets: [work(85.5, 3), work(97.5, 2), works(105, 2, 3)],
        }),

        hamstringCurl({
          sets: [reps(10, 2)],
          comment: COMMENTS.LIGHT,
        }),
      ]),
    ]),

    week(10, [
      day(2, [
        deadLift({
          warmup: warmupOdd,
          sets: [works(90, 2, 2)],
        }),

        latPullDown({
          sets: [reps('8-10', 2)],
          comment: COMMENTS.LIGHT,
        }),
      ]),

      day(4, [
        bench({
          sets: [work(55, 3), work(60, 3), works(65, 3, 3)],
          comment: COMMENTS.TECHNIQUE,
        }),

        lateralRaise({
          sets: [reps(12, 2)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(7, [
        deadLift({
          warmup: warmupEven,
          sets: [work(90, 1), work(100, 1), work(105, 1)],
          comment: COMMENTS.TECHNIQUE,
        }), // проходка на максимум
      ]),
    ]),
  ],
}

// Полная схема уже полностью в процентах
// Тренировка 1
// 70% — 5×5
// Тренировка 2
// 81% ×3
// 85% ×2
// 88.5% — 1×3
// Тренировка 3
// 72.5% — 5×5
// Тренировка 4
// 81% ×3
// 85% ×2
// 88.5% — 2×3
// Тренировка 5
// 75% — 5×5
// Тренировка 6
// 82.5% ×3
// 87.5% ×2
// 94% — 1×3
// Тренировка 7
// 77.5% — 4×4
// Тренировка 8
// 82.5% ×3
// 87.5% ×2
// 94% — 2×3
// Тренировка 9
// 80% — 4×4
// Тренировка 10
// 84% ×3
// 94% ×2
// 100% — 1×3
// Тренировка 11
// 82.5% — 4×4
// Тренировка 12
// 84% ×3
// 94% ×2
// 100% — 2×3
// Тренировка 13
// 85% — 3×3
// Тренировка 14
// 85.5% ×3
// 97.5% ×2
// 105% — 1×3
// Тренировка 15
// 87.5% — 3×3
// Тренировка 16
// 85.5% ×3
// 97.5% ×2
// 105% — 2×3
// Тренировка 17
// 90% — 2×2
// Тренировка 18
// Проходка на максимум
