import { day } from "@/programs/builder/day-builder";
import { generateWarmUp } from "@/programs/builder/warmup";
import { week } from "@/programs/builder/week-builder";
import { reps, work, works } from "@/programs/builder/work";
import { COMMENTS } from "@/programs/constants/comments";
import { backExtension, bench, bicepCurl, deadLift, dumbbellFly, frenchPress, gakkSquat, hammerOnBiceps, hamstringCurl, inclineBenchDumbbells, lateralRaise, latPullDown, standingBarbellPress } from "@/programs/exercises";
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
  description:"Тренировочная программа по становой тяге, на основе программ заслуженного тренера РФ по пауэрлифтингу Аскольда Суровецкого",
  level: "advanced",
  durationWeeks: 20,

  weeks: [
    week(1, [
      day(1, [ 
        deadLift(...warmupOdd, works(70, 5, 5)),
        latPullDown( reps(6, 4), COMMENTS.SELF_WEIGHT),
        bicepCurl( reps(8, 4), COMMENTS.MEDIUM )
      ]),

      day(4, [
        bench( work(65, 5), work(70, 5), works(75, 5, 5), COMMENTS.EXPLOSIVE ),
        inclineBenchDumbbells( reps(8, 4), COMMENTS.SELF_WEIGHT ),
        hammerOnBiceps( reps(8, 4), COMMENTS.SELF_WEIGHT)
      ]),

      day(6, [
        deadLift(...warmupEven, work(81, 3), work(85, 2), works(88.5, 1, 3)),
        gakkSquat( reps(8, 4), COMMENTS.LIGHT ),
        hamstringCurl( reps(10, 4), COMMENTS.SELF_WEIGHT )
      ]),
    ]),

    week(2, [
      day(1, [
        standingBarbellPress( reps(6, 4), COMMENTS.MEDIUM ),
        lateralRaise( reps(10, 4), COMMENTS.SELF_WEIGHT ),
        frenchPress( reps("8-10", 4), COMMENTS.SELF_WEIGHT )
      ]),

      day(3, [
        bench( work(70, 4), work(75, 4), works(80, 4, 2), COMMENTS.EXPLOSIVE ),
        dumbbellFly( reps(10, 4), COMMENTS.SELF_WEIGHT ),
        backExtension( reps(12, 4), COMMENTS.BODY_WEIGHT )
      ]),

      day(5, [
        deadLift(...warmupOdd, works(72.5, 5, 5)),
      ]),
    ]),

    week(3, [
      day(1, [
        deadLift(
          work(30, 6),
          work(42.5, 5),
          work(55, 4),
          work(67.5, 3),
          works(77.5, 4, 4)
        ),
      ]),

      day(2, [
        deadLift(
          work(30, 6),
          work(42.5, 5),
          work(55, 4),
          work(67.5, 3),
          work(82.5, 3),
          work(87.5, 2),
          works(93.75, 2, 3)
        ),
      ]),

      day(3, [
        deadLift(
          work(30, 6),
          work(42.5, 5),
          work(55, 4),
          work(67.5, 3),
          works(80, 4, 4)
        ),
      ]),
    ]),

    week(4, [
      day(1, [
        deadLift(
          work(30, 6),
          work(45, 5),
          work(60, 4),
          work(75, 3),
          work(83.75, 3),
          work(93.75, 2),
          works(100, 1, 3)
        ),
      ]),

      day(2, [
        deadLift(
          work(30, 6),
          work(45, 5),
          work(60, 4),
          work(75, 3),
          works(82.5, 4, 4)
        ),
      ]),

      day(3, [
        deadLift(
          work(30, 6),
          work(45, 5),
          work(60, 4),
          work(75, 3),
          work(83.75, 3),
          work(93.75, 2),
          works(100, 2, 3)
        ),
      ]),
    ]),

    week(5, [
      day(1, [
        deadLift(
          work(30, 6),
          work(42.5, 5),
          work(55, 4),
          work(67.5, 3),
          works(85, 3, 3)
        ),
      ]),

      day(2, [
        deadLift(
          work(30, 6),
          work(42.5, 5),
          work(55, 4),
          work(67.5, 3),
          work(85, 3),
          work(97.5, 2),
          works(105, 2, 3)
        ),
      ]),

      day(3, [
        deadLift(
          work(30, 6),
          work(42.5, 5),
          work(55, 4),
          work(67.5, 3),
          works(87.5, 3, 3)
        ),
      ]),
    ]),

    week(6, [
      day(1, [
        deadLift(
          work(30, 6),
          work(45, 5),
          work(60, 4),
          work(75, 3),
          work(85, 3),
          work(97.5, 2),
          works(105, 2, 3)
        ),
      ]),

      day(2, [
        deadLift(
          work(30, 6),
          work(45, 5),
          work(60, 4),
          work(75, 3),
          works(90, 2, 2)
        ),
      ]),

      day(3, [
        deadLift(
          work(30, 6),
          work(45, 5),
          work(60, 4),
          work(75, 3),
          work(100, 1), work(102.5, 1), work(105, 1),
          "Контрольная проходка..."
        ),
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