import { day } from '@/programs/builder/day-builder'
import { week } from '@/programs/builder/week-builder'
import { reps, work, works } from '@/programs/builder/work'
import { COMMENTS } from '@/programs/constants/comments'
import {
  backExtension,
  barbellPullToTheBelt,
  bench,
  boardPress,
  chestSimulator,
  closeGripBench,
  dips,
  dumbbellFly,
  frenchPress,
  goodMorning,
  hipExtension,
  legPress,
  lowerBlockRow,
  overheadPressBehindNeck,
  press,
  seatedInclinePress,
  splitSquat,
  squat,
  tricepsBiceps,
  tricepsPushDown,
  wideGripBenchPress,
} from '@/programs/exercises'
import { ProgramTraining } from '@/programs/types/program.types'

// {
//   exerciseId: "bench_press",
//   sets: [                                      //Жим лёжа
//     { percent: 0.5, reps: 5, isWarmUp: true }, 1 на 5     50%
//     { percent: 0.6, reps: 4, isWarmUp: true }, 1 на 4     60%
//     { percent: 0.7, reps: 3 },                 2 на 3     70%
//     { percent: 0.7, reps: 3 },
//     { percent: 0.75, reps: 3, repeat: 5 },                5 на 3     75%
//   ]
// },
// {
//   exerciseId: "dumbbell_fly",
//   sets: [
//     { reps: 8, repeat: 5 }
//   ],
//   comment: "Подберите вес по ощущениям"
// }

//использование
// const bench = createExercise(EXERCISE.BENCH_PRESS) // замыкание
// bench(work(0.7, 4, 4))

// week(1, [day(1, [bench( work(0.7, 3, 2), work(0.7, 3, 3) ) ])])

export const benchForHardWorkers: ProgramTraining = {
  id: 'sheiko-bench-for-hard-workers',
  coachId: 'sheiko',
  title: 'Жим лёжа для любителей пахать',
  author: 'Шейко',
  country: 'Russia',
  lift: 'bench',
  description:
    'Высокообъёмная жимовая программа Бориса Шейко для опытных атлетов, готовых к частым и тяжёлым тренировкам. Основа системы — большой тренировочный объём, многоповторная работа и постоянное совершенствование техники жима лёжа. Программа развивает силовую выносливость, повышает стабильность движения и помогает подготовиться к серьёзному росту результатов.',
  descriptionPreview:
    'Высокообъёмная программа Шейко для роста силы, техники и выносливости в жиме лёжа.',
  level: 'advanced', // передовой
  durationWeeks: 14,
  weeks: [
    // --------week-1--------
    week(1, [
      day(1, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(75, 3, 5)] }),
        squat({ sets: [work(40, 6), work(50, 6), works(60, 6, 4)] }),
        bench({ sets: [work(50, 5), work(60, 5), works(70, 4, 4)] }),
        dumbbellFly({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        lowerBlockRow({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
      day(3, [
        bench({
          sets: [
            work(50, 5),
            work(60, 5),
            works(70, 4, 2),
            works(75, 3, 2),
            works(80, 2, 2),
            works(75, 3, 2),
            work(70, 4),
            work(60, 5),
            work(50, 6),
          ],
        }),
        hipExtension({ sets: [reps(10, 5)], comment: COMMENTS.SELF_WEIGHT }),
        boardPress({ sets: [reps(3, 6)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(6, 5)], comment: COMMENTS.WITH_WEIGHT }),
        tricepsPushDown({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(8, 5)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(5, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5)] }),
        squat({ sets: [work(50, 4), work(60, 4), works(70, 3, 4)] }),
        closeGripBench({ sets: [work(50, 4), works(60, 4, 2), works(65, 3, 5)] }),
        dumbbellFly({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        lowerBlockRow({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 5)] }),
      ]),
      day(6, [
        seatedInclinePress({ sets: [reps(4, 6)], comment: COMMENTS.SELF_WEIGHT }),
        boardPress({ sets: [reps(2, 6)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(4, 6)], comment: COMMENTS.BODY_WEIGHT }),
        frenchPress({ sets: [reps(10, 5)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(6, 5)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
    ]),

    week(2, [
      day(1, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5)] }),
        legPress({ sets: [reps(6, 5)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(55, 5), work(65, 4), works(75, 3, 5)] }),
        dumbbellFly({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        lowerBlockRow({ sets: [reps(10, 5)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 5)] }),
      ]),
      day(3, [
        bench({
          sets: [
            work(50, 6),
            work(60, 5),
            works(70, 4, 2),
            works(75, 3, 2),
            works(80, 2, 2),
            works(85, 1, 2),
            works(80, 2, 2),
            works(75, 3, 2),
            work(65, 5),
            work(55, 7),
          ],
        }),
        squat({ sets: [work(50, 5), work(60, 5), works(65, 5, 4)] }),
        boardPress({ sets: [reps(3, 5)], comment: COMMENTS.SELF_WEIGHT }),
        tricepsPushDown({ sets: [reps(10, 5)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(8, 4)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(5, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 5)] }),
        hipExtension({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        wideGripBenchPress({
          sets: [works(35, 8, 2), works(45, 6, 4)],
          comment: COMMENTS.WIDE_GRIP,
        }),
        lowerBlockRow({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(6, 5)], comment: COMMENTS.BODY_WEIGHT }),
        press({ sets: [reps(10, 4)] }),
      ]),
      day(6, [
        bench({ sets: [work(50, 6), work(60, 6), works(65, 6, 4)] }),
        boardPress({ sets: [reps(2, 5)], comment: COMMENTS.SELF_WEIGHT }),
        tricepsBiceps({ sets: [reps('8 + 8', 4)], comment: COMMENTS.SUPERSET }),
        backExtension({ sets: [reps(8, 4)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
    ]),
    // --------week-3--------
    week(3, [
      day(1, [
        bench({ sets: [work(55, 5), work(65, 4), works(75, 3, 2), works(85, 2, 4)] }),
        hipExtension({ sets: [reps(10, 5)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(50, 5), work(60, 4), work(70, 3), works(80, 3, 4)] }),
        dumbbellFly({ sets: [reps(10, 5)], comment: COMMENTS.SELF_WEIGHT }),
        frenchPress({ sets: [reps(10, 5)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 4)] }),
      ]),
      day(3, [
        bench({
          sets: [
            work(50, 6),
            work(60, 5),
            work(70, 4),
            works(75, 3, 2),
            works(80, 2, 2),
            works(85, 1, 2),
            works(80, 2, 2),
            work(75, 3),
            work(70, 4),
            work(60, 6),
            work(50, 8),
          ],
        }),
        splitSquat({ sets: [reps('5+5', 5)], comment: COMMENTS.PER_LEG }),
        boardPress({ sets: [reps(3, 5)], comment: COMMENTS.SELF_WEIGHT }),
        lowerBlockRow({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(6, 4)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(5, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 8)] }),
        chestSimulator({ sets: [reps(8, 5)], comment: COMMENTS.PECTORAL_MUSCLES }),
        legPress({ sets: [reps(5, 5)], comment: COMMENTS.SELF_WEIGHT }),
        tricepsBiceps({ sets: [reps('8+8', 4)], comment: COMMENTS.SUPERSET }),
        press({ sets: [reps(10, 4)] }),
      ]),
      day(6, [
        seatedInclinePress({ sets: [reps(4, 6)], comment: COMMENTS.SELF_WEIGHT }),
        boardPress({ sets: [reps(2, 6)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(4, 6)], comment: COMMENTS.BODY_WEIGHT }),
        barbellPullToTheBelt({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
    ]),

    // --------week-4--------

    week(4, [
      day(1, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 5)] }),
        squat({ sets: [work(50, 5), work(60, 5), works(70, 4, 4)] }),
        bench({ sets: [work(50, 5), work(60, 5), works(70, 5, 4)] }),
        lowerBlockRow({ sets: [reps(10, 5)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(8, 5)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(3, [
        bench({
          sets: [
            work(50, 5),
            work(60, 5),
            works(70, 5, 2),
            works(75, 4, 2),
            works(80, 3, 2),
            works(85, 2, 2),
            works(80, 3, 2),
            works(75, 4, 1),
            work(70, 6),
            work(60, 8),
            work(50, 10),
          ],
        }),
        boardPress({ sets: [reps(2, 5)], comment: COMMENTS.SELF_WEIGHT }),
        dumbbellFly({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        tricepsPushDown({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(12, 4)] }),
      ]),
      day(5, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 5)] }),
        hipExtension({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(50, 5), work(60, 5), works(70, 5, 4)] }),
        lowerBlockRow({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        goodMorning({ sets: [reps(5, 5)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
      day(6, [
        bench({ sets: [work(50, 6), work(60, 6), works(65, 6, 5)] }),
        dumbbellFly({ sets: [reps(10, 5)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(4, 5)], comment: COMMENTS.BODY_WEIGHT }),
        tricepsBiceps({ sets: [reps('8+8', 5)], comment: COMMENTS.SUPERSET }),
        press({ sets: [reps(10, 4)] }),
      ]),
    ]),
    // --------week-5--------
    week(5, [
      day(1, [
        bench({ sets: [work(55, 5), work(65, 4), works(75, 3, 2), works(85, 2, 4)] }),
        squat({ sets: [work(50, 5), work(60, 4), works(70, 3, 4)] }),
        bench({ sets: [work(50, 5), work(60, 4), work(70, 3), works(80, 2, 4)] }),
        dumbbellFly({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        lowerBlockRow({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
      day(3, [
        bench({
          sets: [
            work(50, 5),
            work(60, 5),
            works(70, 4, 2),
            works(80, 3, 2),
            works(85, 2, 2),
            works(90, 1, 2),
            works(85, 2, 2),
            works(80, 3, 2),
            works(75, 4, 1),
            work(70, 5),
            work(60, 6),
            work(50, 7),
          ],
          comment: COMMENTS.SHIRT,
        }),
        hipExtension({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        boardPress({ sets: [reps(2, 5)], comment: COMMENTS.SELF_WEIGHT }),
        tricepsPushDown({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(8, 3)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(5, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5)] }),
        squat({ sets: [work(50, 4), work(60, 4), works(70, 3, 2), works(75, 2, 3)] }),
        closeGripBench({ sets: [work(50, 4), work(60, 3), works(70, 2, 5)] }),
        dumbbellFly({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        lowerBlockRow({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 3)] }),
      ]),
      day(6, [
        overheadPressBehindNeck({ sets: [reps(5, 5)], comment: COMMENTS.SELF_WEIGHT }),
        boardPress({ sets: [reps(3, 5)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(6, 4)], comment: COMMENTS.BODY_WEIGHT }),
        frenchPress({ sets: [reps(10, 4)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(6, 3)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
    ]),

    // --------week-6--------

    week(6, [
      day(1, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 5)] }),
        legPress({ sets: [reps(5, 4)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(55, 5), work(65, 5), works(75, 4, 4)] }),
        chestSimulator({ sets: [reps(8, 4)], comment: COMMENTS.PECTORAL_MUSCLES }),
        barbellPullToTheBelt({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 3)] }),
      ]),
      day(3, [
        bench({
          sets: [
            work(50, 6),
            work(60, 5),
            work(70, 5),
            works(75, 4, 2),
            works(80, 3, 2),
            works(85, 2, 2),
            works(80, 3, 2),
            works(75, 4, 1),
            work(70, 5),
            work(60, 6),
            work(50, 7),
          ],
        }),
        squat({ sets: [work(50, 5), work(60, 5), works(65, 5, 4)] }),
        boardPress({ sets: [reps(2, 5)], comment: COMMENTS.SELF_WEIGHT }),
        tricepsPushDown({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(8, 3)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(5, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5)] }),
        hipExtension({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        wideGripBenchPress({
          sets: [works(40, 8, 2), works(50, 6, 4)],
          comment: COMMENTS.WIDE_GRIP,
        }),
        lowerBlockRow({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(6, 5)], comment: COMMENTS.BODY_WEIGHT }),
        press({ sets: [reps(10, 3)] }),
      ]),
      day(6, [
        bench({ sets: [work(50, 5), work(60, 5), works(70, 5, 5)] }),
        boardPress({ sets: [reps(3, 5)], comment: COMMENTS.SELF_WEIGHT }),
        tricepsBiceps({ sets: [reps('8+8', 3)], comment: COMMENTS.SUPERSET }),
        backExtension({ sets: [reps(8, 4)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
    ]),

    // --------week-7--------

    week(7, [
      day(1, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5)] }),
        hipExtension({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(55, 5), work(65, 4), works(75, 3, 4)] }),
        chestSimulator({ sets: [reps(8, 4)], comment: COMMENTS.PECTORAL_MUSCLES }),
        tricepsPushDown({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 3)] }),
      ]),
      day(3, [
        bench({
          sets: [
            work(50, 5),
            work(60, 4),
            works(70, 3, 2),
            works(80, 2, 2),
            works(90, 1, 3),
            works(80, 2, 2),
          ],
        }),
        splitSquat({ sets: [reps('5+5', 5)], comment: COMMENTS.PER_LEG }),
        boardPress({ sets: [reps(3, 5)], comment: COMMENTS.SELF_WEIGHT }),
        lowerBlockRow({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(6, 4)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(5, [
        bench({ sets: [work(55, 5), work(65, 4), works(75, 3, 2), works(85, 2, 5)] }),
        legPress({ sets: [reps(5, 5)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(50, 5), work(60, 4), work(70, 3), works(80, 2, 5)] }),
        dumbbellFly({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 3)] }),
      ]),
      day(6, [
        seatedInclinePress({ sets: [reps(5, 3)], comment: COMMENTS.SELF_WEIGHT }),
        boardPress({ sets: [reps(4, 5)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(5, 5)], comment: COMMENTS.BODY_WEIGHT }),
        barbellPullToTheBelt({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
    ]),

    // --------week-8--------

    week(8, [
      day(1, [
        bench({ sets: [work(55, 5), work(65, 4), works(75, 3, 2), works(85, 2, 5)] }),
        squat({ sets: [work(50, 6), works(60, 6, 4)] }),
        bench({ sets: [work(50, 5), work(60, 5), work(70, 5), works(75, 4, 4)] }),
        lowerBlockRow({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(8, 3)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(3, [
        bench({ sets: [work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 8)] }),
        boardPress({ sets: [reps(3, 5)], comment: COMMENTS.SELF_WEIGHT }),
        chestSimulator({ sets: [reps(8, 4)], comment: COMMENTS.PECTORAL_MUSCLES }),
        frenchPress({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(12, 3)] }),
      ]),
      day(5, [
        bench({
          sets: [
            work(50, 5),
            work(60, 4),
            works(70, 3, 2),
            works(80, 3, 2),
            works(90, 2, 3),
            works(80, 3, 2),
          ],
          comment: COMMENTS.SHIRT,
        }),
        hipExtension({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(50, 5), work(60, 5), works(70, 5, 4)] }),
        barbellPullToTheBelt({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        goodMorning({ sets: [reps(5, 5)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
      day(6, [
        bench({ sets: [work(50, 6), work(60, 6), works(65, 6, 5)] }),
        dumbbellFly({ sets: [reps(10, 4)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(4, 5)], comment: COMMENTS.BODY_WEIGHT }),
        tricepsBiceps({ sets: [reps('8+8', 4)], comment: COMMENTS.SUPERSET }),
        press({ sets: [reps(10, 3)] }),
      ]),
    ]),

    // --------week-9--------

    week(9, [
      day(1, [
        bench({ sets: [work(55, 3), work(65, 3), works(75, 3, 2), works(85, 2, 5)] }),
        squat({ sets: [work(50, 3), work(60, 3), works(70, 3, 4)] }),
        bench({ sets: [work(50, 3), work(60, 3), work(70, 3), works(80, 3, 5)] }),
        lowerBlockRow({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 4)] }),
      ]),
      day(3, [
        bench({ sets: [work(50, 3), work(60, 3), works(70, 3, 2), works(80, 3, 7)] }),
        boardPress({ sets: [reps(2, 5)], comment: COMMENTS.SELF_WEIGHT }),
        chestSimulator({ sets: [reps(8, 4)], comment: COMMENTS.OPTIONAL }),
        backExtension({ sets: [reps(6, 4)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(5, [
        bench({
          sets: [
            work(50, 3),
            work(60, 3),
            works(70, 3, 2),
            works(80, 2, 2),
            works(90, 1, 4),
          ],
          comment: COMMENTS.SHIRT,
        }),
        hipExtension({ sets: [reps(6, 5)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(55, 4), work(65, 4), works(75, 4, 4)] }),
        barbellPullToTheBelt({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 3)] }),
      ]),
      day(6, [
        seatedInclinePress({ sets: [reps(5, 3)], comment: COMMENTS.SELF_WEIGHT }),
        boardPress({ sets: [reps(3, 5)], comment: COMMENTS.SELF_WEIGHT }),
        dips({ sets: [reps(5, 5)], comment: COMMENTS.BODY_WEIGHT }),
        dumbbellFly({ sets: [reps(8, 5)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
    ]),

    // --------week-10--------

    week(10, [
      day(1, [
        bench({ sets: [work(55, 3), work(65, 3), works(75, 3, 2), works(85, 2, 4)] }),
        squat({ sets: [work(55, 3), work(65, 3), works(75, 3, 4)] }),
        bench({ sets: [work(50, 3), work(60, 3), work(70, 3), works(80, 3, 4)] }),
        chestSimulator({ sets: [reps(8, 4)], comment: COMMENTS.OPTIONAL }),
        press({ sets: [reps(8, 3)] }),
      ]),
      day(3, [
        bench({ sets: [work(50, 3), work(60, 3), works(70, 3, 2), works(80, 2, 5)] }),
        boardPress({ sets: [reps(2, 5)], comment: COMMENTS.SELF_WEIGHT }),
        lowerBlockRow({ sets: [reps(6, 4)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(6, 4)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(5, [
        bench({
          sets: [
            work(50, 3),
            work(60, 3),
            works(70, 3, 2),
            works(80, 2, 2),
            works(85, 1, 3),
            works(80, 2, 2),
          ],
        }),
        legPress({ sets: [reps(5, 4)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(50, 4), work(60, 4), works(70, 4, 4)] }),
        dumbbellFly({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
      day(6, [
        bench({ sets: [work(55, 3), works(65, 3, 2), works(75, 2, 4)] }),
        boardPress({ sets: [reps(3, 5)], comment: COMMENTS.SELF_WEIGHT }),
        barbellPullToTheBelt({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 3)] }),
      ]),
    ]),

    // --------week-11--------

    week(11, [
      day(1, [
        bench({ sets: [work(50, 3), work(60, 3), works(70, 3, 2), works(75, 2, 4)] }),
        hipExtension({ sets: [reps(6, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(8, 3)] }),
      ]),
      day(3, [
        bench({
          sets: [
            work(50, 3),
            work(60, 3),
            works(70, 2, 2),
            works(80, 1, 2),
            work(90, 1),
            works(95, 1, 2),
            works(100, 1, 2),
          ],
        }),
        chestSimulator({ sets: [reps(8, 4)], comment: COMMENTS.OPTIONAL }),
        lowerBlockRow({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(6, 4)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(5, [
        bench({ sets: [work(50, 3), work(60, 3), works(70, 3, 2), works(80, 2, 5)] }),
        legPress({ sets: [reps(5, 4)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(55, 3), work(65, 3), works(75, 3, 4)] }),
        press({ sets: [reps(10, 3)] }),
      ]),
      day(6, [
        closeGripBench({ sets: [work(50, 3), works(60, 3, 2), works(70, 3, 4)] }),
        boardPress({ sets: [reps(2, 5)], comment: COMMENTS.SELF_WEIGHT }),
        dumbbellFly({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
    ]),

    // --------week-12--------

    week(12, [
      day(1, [
        bench({
          sets: [
            work(50, 3),
            work(60, 3),
            works(70, 3, 2),
            works(80, 2, 2),
            works(90, 1, 2),
            works(80, 2, 3),
          ],
        }),
        squat({ sets: [work(50, 4), work(60, 4), works(70, 4, 4)] }),
        lowerBlockRow({ sets: [reps(8, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(10, 3)] }),
      ]),
      day(3, [
        bench({ sets: [work(55, 3), work(65, 3), works(75, 2, 2), works(85, 1, 3)] }),
        hipExtension({ sets: [reps(6, 5)], comment: COMMENTS.SELF_WEIGHT }),
        bench({ sets: [work(50, 3), work(60, 3), works(70, 3, 2), works(80, 2, 4)] }),
        chestSimulator({ sets: [reps(8, 4)], comment: COMMENTS.OPTIONAL }),
      ]),
      day(5, [
        bench({ sets: [work(50, 3), work(60, 3), works(70, 3, 2), works(80, 3, 5)] }),
        boardPress({ sets: [reps(2, 5)], comment: COMMENTS.SELF_WEIGHT }),
        backExtension({ sets: [reps(6, 4)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
      day(6, [
        seatedInclinePress({ sets: [reps(5, 3)], comment: COMMENTS.SELF_WEIGHT }),
        barbellPullToTheBelt({ sets: [reps(6, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(8, 3)] }),
      ]),
    ]),

    // --------week-13--------

    week(13, [
      day(1, [
        bench({ sets: [work(50, 3), work(60, 3), works(70, 3, 2), works(80, 2, 4)] }),
        hipExtension({ sets: [reps(5, 4)], comment: COMMENTS.SELF_WEIGHT }),
        lowerBlockRow({ sets: [reps(6, 4)], comment: COMMENTS.SELF_WEIGHT }),
      ]),
      day(3, [
        bench({ sets: [work(50, 3), work(60, 3), works(70, 2, 2), works(80, 1, 3)] }),
        boardPress({ sets: [reps(2, 4)], comment: COMMENTS.SELF_WEIGHT }),
        press({ sets: [reps(8, 3)] }),
      ]),
      day(5, [
        bench({ sets: [work(50, 3), work(60, 3), works(70, 3, 2), works(75, 2, 4)] }),
        chestSimulator({ sets: [reps(6, 3)], comment: COMMENTS.OPTIONAL }),
        backExtension({ sets: [reps(5, 3)], comment: COMMENTS.BODY_WEIGHT }),
      ]),
    ]),

    // --------week-14--------

    week(14, [
      day(1, [
        bench({ sets: [work(50, 3), work(60, 3), works(70, 2, 2), works(75, 1, 2)] }),
      ]),
      day(3, [bench({ sets: [work(50, 3), works(60, 3, 2), works(70, 1, 3)] })]),
      day(6, [
        bench({
          sets: [
            work(50, 5),
            work(60, 4),
            work(70, 3),
            work(80, 2),
            work(90, 1),
            work(100, 1),
            work(105, 1),
          ],
          comment: COMMENTS.TECHNIQUE,
        }),
      ]),
    ]),
  ],
}
