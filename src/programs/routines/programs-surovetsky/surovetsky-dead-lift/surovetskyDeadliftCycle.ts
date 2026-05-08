import { day } from "@/programs/builder/day-builder";
import { week } from "@/programs/builder/week-builder";
import { reps, work, works } from "@/programs/builder/work";
import { COMMENTS } from "@/programs/constants/comments";
import { backExtension, bench, bicepCurl, deadLift, dumbbellFly, frenchPress, gakkSquat, hammerOnBiceps, hamstringCurl, inclineBenchDumbbells, lateralRaise, latPullDown, lowerBlockRow, standingBarbellPress } from "@/programs/exercises";
import { ProgramTraining } from "@/programs/types/program.types";
import { warmupEven, warmupOdd } from "./helper/warmup";

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
  id: "deadlift-cycle",
  coachId: "surovetsky",
  title: "Становая тяга-цикл",
  author: 'Суровецкий',
  country: "RU",
  lift: 'deadlift',
  description: "Тяговый цикл Аскольда Суровецкого для развития максимальной силы в становой тяге. Программа построена на чередовании объёмных и интенсивных тренировок: нечётные тренировки развивают силовую выносливость и технику, чётные — адаптацию к предельным весам. Между тяжёлыми тягами предусмотрены увеличенные интервалы восстановления. Основной акцент — прогрессия интенсивности, сохранение свежести ЦНС и постепенный выход на новый максимум.",
  level: "advanced",
  durationWeeks: 10,

  weeks: [
    week(1, [
      day(1, [ 
        deadLift(...warmupOdd, works(70, 5, 5)),//нечёт 5 дней отдых
        latPullDown( reps("8-10", 4), COMMENTS.SELF_WEIGHT),
        lowerBlockRow( reps("8-10", 4), COMMENTS.SELF_WEIGHT),
        bicepCurl( reps("6-8", 4), COMMENTS.EXPLOSIVE )
      ]),

      day(3, [
        bench( work(65, 5), work(70, 5), works(75, 5, 5), COMMENTS.EXPLOSIVE ),
        inclineBenchDumbbells( reps(8, 4), COMMENTS.SELF_WEIGHT ),//жим гантелей на наклонной
        hammerOnBiceps( reps("8-10", 4), COMMENTS.SELF_WEIGHT)
      ]),

      day(6, [
        deadLift(...warmupEven, work(81, 3), work(85, 2), works(88.5, 1, 3)), // 2 тренировка, чётная. Следующая тяга через 3 дня
        gakkSquat( reps(8, 4), COMMENTS.LIGHT ),
        hamstringCurl( reps(12, 4), COMMENTS.SELF_WEIGHT )
      ]),
    ]),

    week(2, [
      day(2, [
        deadLift(...warmupOdd, works(72.5, 5, 5)), // 3 тренировка, нечётная. Следующая тяга через 5 дней,
        latPullDown( reps("8-10", 4), COMMENTS.SELF_WEIGHT),
        lowerBlockRow( reps("8-10", 4), COMMENTS.SELF_WEIGHT),
        bicepCurl( reps("6-8", 4), COMMENTS.EXPLOSIVE )
      ]),
      day(5, [
        standingBarbellPress( reps(6, 4), COMMENTS.MEDIUM ),
        lateralRaise( reps(10, 4), COMMENTS.SELF_WEIGHT ),
        frenchPress( reps("8-10", 4), COMMENTS.SELF_WEIGHT )
      ]), 
      day(7, [
        deadLift(...warmupEven, work(81, 3), work(85, 2), works(88.5, 2, 3)), // 4 тренировка, чётная. Следующая тяга через 3 дня
        bench( work(70, 4), work(75, 4), works(80, 4, 2), COMMENTS.EXPLOSIVE ),
        dumbbellFly( reps(10, 4), COMMENTS.SELF_WEIGHT ),
        backExtension( reps(12, 4), COMMENTS.BODY_WEIGHT )
    ]),

    ]),

  week(3, [
    day(3, [
      deadLift(...warmupOdd, works(75, 5, 5)), // нечётная, отдых до тяги 5 дней
      latPullDown(reps("8-10", 4), COMMENTS.SELF_WEIGHT),
      lowerBlockRow(reps("8-10", 4), COMMENTS.SELF_WEIGHT),
      bicepCurl(reps("6-8", 4), COMMENTS.EXPLOSIVE),
    ]),

    day(5, [
      bench(work(60, 5), work(65, 5), works(70, 5, 4), COMMENTS.EXPLOSIVE),
      inclineBenchDumbbells(reps(8, 3), COMMENTS.SELF_WEIGHT),
      lateralRaise(reps(12, 3), COMMENTS.SELF_WEIGHT),
      frenchPress(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
    ]),
  ]),

  week(4, [
    day(1, [
      deadLift(...warmupEven, work(82.5, 3), work(87.5, 2), works(94, 1, 3)), // чётная, отдых до тяги 3 дня
      gakkSquat(reps(8, 3), COMMENTS.LIGHT),
      hamstringCurl(reps(12, 3), COMMENTS.SELF_WEIGHT),
    ]),

    day(4, [
      deadLift(...warmupOdd, works(77.5, 4, 4)), // нечётная, отдых до тяги 5 дней
      latPullDown(reps("8-10", 4), COMMENTS.SELF_WEIGHT),
      lowerBlockRow(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
      bicepCurl(reps("6-8", 3), COMMENTS.MEDIUM),
    ]),

    day(6, [
      bench(work(65, 4), work(70, 4), works(75, 4, 4), COMMENTS.EXPLOSIVE),
      dumbbellFly(reps(10, 3), COMMENTS.SELF_WEIGHT),
      hammerOnBiceps(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
    ]),
  ]),

  week(5, [
    day(2, [
      deadLift(...warmupEven, work(82.5, 3), work(87.5, 2), works(94, 2, 3)), // чётная, отдых до тяги 3 дня
      gakkSquat(reps(8, 3), COMMENTS.LIGHT),
      hamstringCurl(reps(10, 3), COMMENTS.SELF_WEIGHT),
    ]),

    day(5, [
      deadLift(...warmupOdd, works(80, 4, 4)), // нечётная, отдых до тяги 5 дней
      latPullDown(reps("8-10", 4), COMMENTS.SELF_WEIGHT),
      lowerBlockRow(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
      bicepCurl(reps("6-8", 3), COMMENTS.MEDIUM),
    ]),

    day(7, [
      standingBarbellPress(reps(6, 3), COMMENTS.MEDIUM),
      lateralRaise(reps(12, 3), COMMENTS.SELF_WEIGHT),
      frenchPress(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
    ]),
  ]),

  week(6, [
    day(3, [
      deadLift(...warmupEven, work(84, 3), work(94, 2), works(100, 1, 3)), // чётная, отдых до тяги 3 дня
      hamstringCurl(reps(10, 3), COMMENTS.SELF_WEIGHT),
      backExtension(reps(12, 3), COMMENTS.BODY_WEIGHT),
    ]),

    day(6, [
      deadLift(...warmupOdd, works(82.5, 4, 4)), // нечётная, отдых до тяги 5 дней
      latPullDown(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
      lowerBlockRow(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
      bicepCurl(reps("6-8", 3), COMMENTS.MEDIUM),
    ]),
  ]),

  week(7, [
    day(4, [
      deadLift(...warmupEven, work(84, 3), work(94, 2), works(100, 2, 3)), // чётная, отдых до тяги 3 дня
      hamstringCurl(reps(10, 2), COMMENTS.LIGHT),
      backExtension(reps(12, 2), COMMENTS.BODY_WEIGHT),
    ]),

    day(7, [
      deadLift(...warmupOdd, works(85, 3, 3)), // нечётная, отдых до тяги 5 дней
      latPullDown(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
      lowerBlockRow(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
    ]),
  ]),

  week(8, [
    day(2, [
      bench(work(60, 4), work(65, 4), works(70, 4, 3), COMMENTS.EXPLOSIVE),
      inclineBenchDumbbells(reps(8, 3), COMMENTS.SELF_WEIGHT),
      lateralRaise(reps(12, 3), COMMENTS.SELF_WEIGHT),
    ]),

    day(5, [
      deadLift(...warmupEven, work(85.5, 3), work(97.5, 2), works(105, 1, 3)), // чётная, отдых до тяги 3 дня
      hamstringCurl(reps(10, 2), COMMENTS.LIGHT),
      backExtension(reps(10, 2), COMMENTS.BODY_WEIGHT),
    ]),
  ]),

  week(9, [
    day(1, [
      deadLift(...warmupOdd, works(87.5, 3, 3)), // нечётная, отдых до тяги 5 дней
      latPullDown(reps("8-10", 3), COMMENTS.SELF_WEIGHT),
      lowerBlockRow(reps("8-10", 2), COMMENTS.LIGHT),
    ]),

    day(3, [
      bench(work(60, 3), work(65, 3), works(70, 3, 3), COMMENTS.EXPLOSIVE),
      lateralRaise(reps(12, 3), COMMENTS.SELF_WEIGHT),
      frenchPress(reps("8-10", 2), COMMENTS.SELF_WEIGHT),
    ]),

    day(6, [
      deadLift(...warmupEven, work(85.5, 3), work(97.5, 2), works(105, 2, 3)), // чётная, отдых до тяги 3 дня
      hamstringCurl(reps(10, 2), COMMENTS.LIGHT),
    ]),
  ]),

  week(10, [
    day(2, [
      deadLift(...warmupOdd, works(90, 2, 2)), // нечётная, перед проходкой 5 дней отдыха
      latPullDown(reps("8-10", 2), COMMENTS.LIGHT),
    ]),

    day(4, [
      bench(work(55, 3), work(60, 3), works(65, 3, 3), COMMENTS.TECHNIQUE),
      lateralRaise(reps(12, 2), COMMENTS.SELF_WEIGHT),
    ]),

    day(7, [
      deadLift(
        ...warmupEven,
        work(90, 1),
        work(100, 1),
        work(105, 1),
        COMMENTS.TECHNIQUE
      ), // проходка на максимум
    ]),
  ]),
]
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