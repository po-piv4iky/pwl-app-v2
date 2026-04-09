import { day } from "@/programs/builder/day-builder";
import { generateWarmUp } from "@/programs/builder/warmup";
import { week } from "@/programs/builder/week-builder";
import { reps, work, works } from "@/programs/builder/work";
import { COMMENTS } from "@/programs/constants/comments";
import { backExtension, barbellPullToTheBelt, bench, boardPress, chestSimulator, closeGripBench, dips, dumbbellFly, frenchPress, goodMorning, hipExtension,
 legPress, lowerBlockRow, overheadPressBehindNeck, press, seatedInclinePress, splitSquat, squat, tricepsBiceps, tricepsPushDown, wideGripBenchPress } from "@/programs/exercises";
import { ProgramTraining } from "@/programs/types/program.types";


// {
//   exerciseId: "bench_press",
//   sets: [
//     { percent: 0.5, reps: 5, isWarmUp: true },
//     { percent: 0.6, reps: 4, isWarmUp: true },
//     { percent: 0.7, reps: 3 },
//     { percent: 0.7, reps: 3 },
//     { percent: 0.75, reps: 3 },
//     { percent: 0.75, reps: 3 },
//     { percent: 0.75, reps: 3 },
//     { percent: 0.75, reps: 3 },
//     { percent: 0.75, reps: 3 }
//   ]
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
    category: 'bench',
    description: 'Высокообъемная программа жима лёжа от Бориса Шейко для опытных атлетов.',
    level: 'advanced', // передовой
    durationWeeks: 14,
    weeks: [
      // --------week-1--------
      week(1, [
        day(1, [
            bench( work(50, 5), work(60, 4), works(70, 3, 2), works(75, 3, 5) ),
            squat( work(40, 6), work(50, 6), works(60, 6, 4) ),
            bench( work(50, 5), work(60, 1), works(70, 4, 4)),
            dumbbellFly( reps(8, 5), COMMENTS.SELF_WEIGHT ),
            lowerBlockRow( reps(8, 5), COMMENTS.SELF_WEIGHT )
          ]),
         day(3, [
          bench( work(50, 5), work(60, 5), works(70, 4, 2), works(75, 3, 2), works(80, 2, 2), works(75, 3, 2), work(70, 4), work(60, 5), work(50, 6) ),
          hipExtension( reps(10, 5), COMMENTS.SELF_WEIGHT ),
          boardPress( reps(3, 6), COMMENTS.SELF_WEIGHT ),
          dips( reps(6, 5), COMMENTS.WITH_WEIGHT ),
          tricepsPushDown( reps(8, 5), COMMENTS.SELF_WEIGHT ),
          backExtension( reps(8, 5), COMMENTS.BODY_WEIGHT )
         ]), 
         day(5, [
          bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5) ),
          squat( work(50, 4), work(60, 4), works(70, 3, 4) ),
          closeGripBench( work(50, 4), works(60, 4, 2), works(65, 3, 5) ),
          dumbbellFly( reps(8, 5), COMMENTS.SELF_WEIGHT ),
          lowerBlockRow( reps(8, 5), COMMENTS.SELF_WEIGHT),
          press( reps(10, 5) )
         ]),
         day(6, [
          seatedInclinePress( reps(4, 6) ), 
          boardPress( reps(2, 6), COMMENTS.SELF_WEIGHT ),
          dips( reps(4, 6), COMMENTS.BODY_WEIGHT ),
          frenchPress( reps(10, 5), COMMENTS.SELF_WEIGHT ),
          backExtension( reps(6, 5), COMMENTS.BODY_WEIGHT )
         ])
        ]),
      // --------week-2--------
      week(2, [
        day(1, [
          bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5) ),
          legPress( reps(6, 5), COMMENTS.SELF_WEIGHT ),
          bench( work(55, 5), work(65, 4), works(75, 3, 5) ),
          dumbbellFly( reps(8, 5), COMMENTS.SELF_WEIGHT ),
          lowerBlockRow( reps(10, 5), COMMENTS.SELF_WEIGHT ),
          press( reps(10, 5) )
        ]),
        day(3, [
          bench( work(50, 6), work(60, 5), works(70, 4, 2), works(75, 3, 2), works(80, 2, 2), works(85, 1, 2), works(80, 2, 2), works(75, 3, 2), work(65, 5), work(55, 7) ),
          squat( work(50, 5), work(60, 5), works(65, 5, 4) ),
          boardPress( reps(3, 5), COMMENTS.SELF_WEIGHT ),
          tricepsPushDown( reps(10, 5), COMMENTS.SELF_WEIGHT ),
          backExtension( reps(8, 4), COMMENTS.BODY_WEIGHT )
        ]),
        day(5, [
          bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 5) ),
          hipExtension( reps(8, 5), COMMENTS.SELF_WEIGHT ),
          wideGripBenchPress( works(35, 8, 2), works(45, 6, 4), COMMENTS.WIDE_GRIP ),
          lowerBlockRow( reps(8, 5), COMMENTS.SELF_WEIGHT ),
          dips( reps(6, 5), COMMENTS.BODY_WEIGHT ),
          press( reps( 10, 4) )
        ]),
        day(6, [
          bench( work(50, 6), work(60, 6), works(65, 6, 4) ), 
          boardPress( reps(2, 5), COMMENTS.SELF_WEIGHT ),
          tricepsBiceps( reps("8 + 8", 4), COMMENTS.SUPERSET ),
          backExtension( reps(8, 4), COMMENTS.BODY_WEIGHT )
         ])
      ]),
      // --------week-3--------
      week(3, [
        day(1, [
          bench( work(55, 5), work(65, 4), works(75, 3, 2), works(85, 2, 4) ),
          hipExtension( reps(10, 5), COMMENTS.SELF_WEIGHT ),
          bench( work(50, 5), work(60, 4), work(70, 3), works(80, 3, 4) ),
          dumbbellFly( reps(10, 5), COMMENTS.SELF_WEIGHT ),
          frenchPress( reps(10, 5), COMMENTS.SELF_WEIGHT ),
          press( reps(10, 4) )
        ]),
        day(3, [
          bench( work(50, 6), work(60, 5), work(70, 4), works(75, 3, 2), works(80, 2, 2), works(85, 1, 2), works(80, 2, 2), work(75, 3), work(70, 4), work(60, 6), work(50, 8) ),
          splitSquat( reps("5+5", 5), COMMENTS.PER_LEG ),
          boardPress( reps(3, 5), COMMENTS.SELF_WEIGHT ),
          lowerBlockRow( reps(8, 5), COMMENTS.SELF_WEIGHT ),
          backExtension( reps(6, 4), COMMENTS.BODY_WEIGHT )
        ]),
        day(5, [
          bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 8) ),
          chestSimulator(reps(8, 5), COMMENTS.PECTORAL_MUSCLES ),
          legPress( reps(5, 5), COMMENTS.SELF_WEIGHT ),
          tricepsBiceps( reps("8+8", 4), COMMENTS.SUPERSET ),
          press( reps(10, 4) )
        ]),
        day(6, [
          seatedInclinePress( reps(4, 6), COMMENTS.SELF_WEIGHT ),
          boardPress( reps(2, 6), COMMENTS.SELF_WEIGHT),
          dips( reps(4, 6), COMMENTS.BODY_WEIGHT ),
          barbellPullToTheBelt( reps(8, 5), COMMENTS.SELF_WEIGHT )
        ])
      ]),
      // --------week-4--------
  week(4, [
  day(1, [
    bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 5) ),
    squat( work(50, 5), work(60, 5), works(70, 4, 4) ),
    bench( work(50, 5), work(60, 5), works(70, 5, 4) ),
    lowerBlockRow( reps(10, 5), COMMENTS.SELF_WEIGHT ),
    backExtension( reps(8, 5), COMMENTS.BODY_WEIGHT )
  ]),
  day(3, [
    bench(
      work(50, 5),work(60, 5),works(70, 5, 2),works(75, 4, 2), works(80, 3, 2), works(85, 2, 2),
      works(80, 3, 2),
      works(75, 4, 1),
      work(70, 6),
      work(60, 8),
      work(50, 10)
    ),
    boardPress( reps(2, 5), COMMENTS.SELF_WEIGHT ),
    dumbbellFly( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    tricepsPushDown( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    press( reps(12, 4) )
  ]),
  day(5, [
    bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 5) ),
    hipExtension( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    bench( work(50, 5), work(60, 5), works(70, 5, 4) ),
    lowerBlockRow( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    goodMorning( reps(5, 5), COMMENTS.SELF_WEIGHT )
  ]),
  day(6, [
    bench( work(50, 6), work(60, 6), works(65, 6, 5) ),
    dumbbellFly( reps(10, 5), COMMENTS.SELF_WEIGHT ),
    dips( reps(4, 5), COMMENTS.BODY_WEIGHT ),
    tricepsBiceps( reps("8+8", 5), COMMENTS.SUPERSET ),
    press( reps(10, 4) )
  ]),   
]),
// --------week-5--------   
  week(5, [
  day(1, [
    bench( work(55, 5), work(65, 4), works(75, 3, 2), works(85, 2, 4) ),
    squat( work(50, 5), work(60, 4), works(70, 3, 4) ),
    bench( work(50, 5), work(60, 4), work(70, 3), works(80, 2, 4) ),
    dumbbellFly( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    lowerBlockRow( reps(8, 5), COMMENTS.SELF_WEIGHT )
  ]),
  day(3, [
    bench(work(50, 5),work(60, 5),works(70, 4, 2),works(80, 3, 2),works(85, 2, 2),
      works(90, 1, 2),works(85, 2, 2),works(80, 3, 2),works(75, 4, 1),work(70, 5),work(60, 6),work(50, 7),
      COMMENTS.SHIRT
    ),
    hipExtension( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    boardPress( reps(2, 5), COMMENTS.SELF_WEIGHT ),
    tricepsPushDown( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    backExtension( reps(8, 3), COMMENTS.BODY_WEIGHT )
  ]),
  day(5, [
    bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5) ),
    squat( work(50, 4), work(60, 4), works(70, 3, 2), works(75, 2, 3) ),
    closeGripBench( work(50, 4), work(60, 3), works(70, 2, 5) ),
    dumbbellFly( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    lowerBlockRow( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    press( reps(10, 3) )
  ]),
  day(6, [
    overheadPressBehindNeck( reps(5, 5), COMMENTS.SELF_WEIGHT ),
    boardPress( reps(3, 5), COMMENTS.SELF_WEIGHT ),
    dips( reps(6, 4), COMMENTS.BODY_WEIGHT ),
    frenchPress( reps(10, 4), COMMENTS.SELF_WEIGHT ),
    backExtension( reps(6, 3), COMMENTS.BODY_WEIGHT )
  ])
]),
 
  // --------week-6--------

week(6, [
  day(1, [
    bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 5) ),
    legPress( reps(5, 4), COMMENTS.SELF_WEIGHT ),
    bench( work(55, 5), work(65, 5), works(75, 4, 4) ),
    chestSimulator( reps(8, 4), COMMENTS.PECTORAL_MUSCLES ),
    barbellPullToTheBelt( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    press( reps(10, 3) )
  ]),
  day(3, [
    bench(work(50, 6),work(60, 5),work(70, 5),works(75, 4, 2),works(80, 3, 2),
      works(85, 2, 2),works(80, 3, 2),works(75, 4, 1),work(70, 5),work(60, 6),work(50, 7)),
    squat( work(50, 5), work(60, 5), works(65, 5, 4) ),
    boardPress( reps(2, 5), COMMENTS.SELF_WEIGHT ),
    tricepsPushDown( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    backExtension( reps(8, 3), COMMENTS.BODY_WEIGHT )
  ]),
  day(5, [
    bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5) ),
    hipExtension( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    wideGripBenchPress( works(40, 8, 2), works(50, 6, 4), COMMENTS.WIDE_GRIP ),
    lowerBlockRow( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    dips( reps(6, 5), COMMENTS.BODY_WEIGHT ),
    press( reps(10, 3) )
  ]),
  day(6, [
    bench( work(50, 5), work(60, 5), works(70, 5, 5) ),
    boardPress( reps(3, 5), COMMENTS.SELF_WEIGHT ),
    tricepsBiceps( reps("8+8", 3), COMMENTS.SUPERSET ),
    backExtension( reps(8, 4), COMMENTS.BODY_WEIGHT )
  ])
]),
   
    // --------week-7--------

week(7, [
  day(1, [
    bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 2, 5) ),
    hipExtension( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    bench( work(55, 5), work(65, 4), works(75, 3, 4) ),
    chestSimulator( reps(8, 4), COMMENTS.PECTORAL_MUSCLES ),
    tricepsPushDown( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(10, 3) )
  ]),
  day(3, [
    bench(
      work(50, 5),
      work(60, 4),
      works(70, 3, 2),
      works(80, 2, 2),
      works(90, 1, 3),
      works(80, 2, 2)
    ),
    splitSquat( reps("5+5", 5), COMMENTS.PER_LEG ),
    boardPress( reps(3, 5), COMMENTS.SELF_WEIGHT ),
    lowerBlockRow( reps(8, 5), COMMENTS.SELF_WEIGHT ),
    backExtension( reps(6, 4), COMMENTS.BODY_WEIGHT )
  ]),
  day(5, [
    bench( work(55, 5), work(65, 4), works(75, 3, 2), works(85, 2, 5) ),
    legPress( reps(5, 5), COMMENTS.SELF_WEIGHT ),
    bench( work(50, 5), work(60, 4), work(70, 3), works(80, 2, 5) ),
    dumbbellFly( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(10, 3) )
  ]),
  day(6, [
    seatedInclinePress( reps(5, 3), COMMENTS.SELF_WEIGHT ),
    boardPress( reps(4, 5), COMMENTS.SELF_WEIGHT ),
    dips( reps(5, 5), COMMENTS.BODY_WEIGHT ),
    barbellPullToTheBelt( reps(8, 4), COMMENTS.SELF_WEIGHT )
  ])
]),
    // --------week-8--------

week(8, [
  day(1, [
    bench( work(55, 5), work(65, 4), works(75, 3, 2), works(85, 2, 5) ),
    squat( work(50, 6), works(60, 6, 4) ),
    bench( work(50, 5), work(60, 5), work(70, 5), works(75, 4, 4) ),
    lowerBlockRow( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    backExtension( reps(8, 3), COMMENTS.BODY_WEIGHT )
  ]),
  day(3, [
    bench( work(50, 5), work(60, 4), works(70, 3, 2), works(80, 3, 8) ),
    boardPress( reps(3, 5), COMMENTS.SELF_WEIGHT ),
    chestSimulator( reps(8, 4), COMMENTS.PECTORAL_MUSCLES ),
    frenchPress( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(12, 3) )
  ]),
  day(5, [
    bench(
      work(50, 5),
      work(60, 4),
      works(70, 3, 2),
      works(80, 3, 2),
      works(90, 2, 3),
      works(80, 3, 2),
      COMMENTS.SHIRT
    ),
    hipExtension( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    bench( work(50, 5), work(60, 5), works(70, 5, 4) ),
    barbellPullToTheBelt( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    goodMorning( reps(5, 5), COMMENTS.SELF_WEIGHT )
  ]),
  day(6, [
    bench( work(50, 6), work(60, 6), works(65, 6, 5) ),
    dumbbellFly( reps(10, 4), COMMENTS.SELF_WEIGHT ),
    dips( reps(4, 5), COMMENTS.BODY_WEIGHT ),
    tricepsBiceps( reps("8+8", 4), COMMENTS.SUPERSET ),
    press( reps(10, 3) )
  ])
]),

    // --------week-9--------

week(9, [
  day(1, [
    bench( work(55, 3), work(65, 3), works(75, 3, 2), works(85, 2, 5) ),
    squat( work(50, 3), work(60, 3), works(70, 3, 4) ),
    bench( work(50, 3), work(60, 3), work(70, 3), works(80, 3, 5) ),
    lowerBlockRow( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(10, 4) )
  ]),
  day(3, [
    bench( work(50, 3), work(60, 3), works(70, 3, 2), works(80, 3, 7) ),
    boardPress( reps(2, 5), COMMENTS.SELF_WEIGHT ),
    chestSimulator( reps(8, 4), COMMENTS.OPTIONAL ),
    backExtension( reps(6, 4), COMMENTS.BODY_WEIGHT )
  ]),
  day(5, [
    bench(
      work(50, 3),
      work(60, 3),
      works(70, 3, 2),
      works(80, 2, 2),
      works(90, 1, 4),
      COMMENTS.SHIRT
    ),
    hipExtension( reps(6, 5), COMMENTS.SELF_WEIGHT ),
    bench( work(55, 4), work(65, 4), works(75, 4, 4) ),
    barbellPullToTheBelt( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(10, 3) )
  ]),
  day(6, [
    seatedInclinePress( reps(5, 3), COMMENTS.SELF_WEIGHT ),
    boardPress( reps(3, 5), COMMENTS.SELF_WEIGHT ),
    dips( reps(5, 5), COMMENTS.BODY_WEIGHT ),
    dumbbellFly( reps(8, 5), COMMENTS.SELF_WEIGHT )
  ])
]),

  // --------week-10--------

week(10, [
  day(1, [
    bench( work(55, 3), work(65, 3), works(75, 3, 2), works(85, 2, 4) ),
    squat( work(55, 3), work(65, 3), works(75, 3, 4) ),
    bench( work(50, 3), work(60, 3), work(70, 3), works(80, 3, 4) ),
    chestSimulator( reps(8, 4), COMMENTS.OPTIONAL ),
    press( reps(8, 3) )
  ]),
  day(3, [
    bench( work(50, 3), work(60, 3), works(70, 3, 2), works(80, 2, 5) ),
    boardPress( reps(2, 5), COMMENTS.SELF_WEIGHT ),
    lowerBlockRow( reps(6, 4), COMMENTS.SELF_WEIGHT ),
    backExtension( reps(6, 4), COMMENTS.BODY_WEIGHT )
  ]),
  day(5, [
    bench(
      work(50, 3),
      work(60, 3),
      works(70, 3, 2),
      works(80, 2, 2),
      works(85, 1, 3),
      works(80, 2, 2)
    ),
    legPress( reps(5, 4), COMMENTS.SELF_WEIGHT ),
    bench( work(50, 4), work(60, 4), works(70, 4, 4) ),
    dumbbellFly( reps(8, 4), COMMENTS.SELF_WEIGHT )
  ]),
  day(6, [
    bench( work(55, 3), works(65, 3, 2), works(75, 2, 4) ),
    boardPress( reps(3, 5), COMMENTS.SELF_WEIGHT ),
    barbellPullToTheBelt( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(10, 3) )
  ])
]),

  // --------week-11--------

week(11, [
  day(1, [
    bench( work(50, 3), work(60, 3), works(70, 3, 2), works(75, 2, 4) ),
    hipExtension( reps(6, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(8, 3) )
  ]),
  day(3, [
    bench(
      work(50, 3),
      work(60, 3),
      works(70, 2, 2),
      works(80, 1, 2),
      work(90, 1),
      works(95, 1, 2),
      works(100, 1, 2)
    ),
    chestSimulator( reps(8, 4), COMMENTS.OPTIONAL ),
    lowerBlockRow( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    backExtension( reps(6, 4), COMMENTS.BODY_WEIGHT )
  ]),
  day(5, [
    bench( work(50, 3), work(60, 3), works(70, 3, 2), works(80, 2, 5) ),
    legPress( reps(5, 4), COMMENTS.SELF_WEIGHT ),
    bench( work(55, 3), work(65, 3), works(75, 3, 4) ),
    press( reps(10, 3) )
  ]),
  day(6, [
    closeGripBench( work(50, 3), works(60, 3, 2), works(70, 3, 4) ),
    boardPress( reps(2, 5), COMMENTS.SELF_WEIGHT ),
    dumbbellFly( reps(8, 4), COMMENTS.SELF_WEIGHT )
  ])
]),

// --------week-12--------

week(12, [
  day(1, [
    bench(
      work(50, 3),
      work(60, 3),
      works(70, 3, 2),
      works(80, 2, 2),
      works(90, 1, 2),
      works(80, 2, 3)
    ),
    squat( work(50, 4), work(60, 4), works(70, 4, 4) ),
    lowerBlockRow( reps(8, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(10, 3) )
  ]),
  day(3, [
    bench( work(55, 3), work(65, 3), works(75, 2, 2), works(85, 1, 3) ),
    hipExtension( reps(6, 5), COMMENTS.SELF_WEIGHT ),
    bench( work(50, 3), work(60, 3), works(70, 3, 2), works(80, 2, 4) ),
    chestSimulator( reps(8, 4), COMMENTS.OPTIONAL)
  ]),
  day(5, [
    bench( work(50, 3), work(60, 3), works(70, 3, 2), works(80, 3, 5) ),
    boardPress( reps(2, 5), COMMENTS.SELF_WEIGHT ),
    backExtension( reps(6, 4), COMMENTS.BODY_WEIGHT )
  ]),
  day(6, [
    seatedInclinePress( reps(5, 3), COMMENTS.SELF_WEIGHT ),
    barbellPullToTheBelt( reps(6, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(8, 3) )
  ])
]),

// --------week-13--------

week(13, [
  day(1, [
    bench( work(50, 3), work(60, 3), works(70, 3, 2), works(80, 2, 4) ),
    hipExtension( reps(5, 4), COMMENTS.SELF_WEIGHT ),
    lowerBlockRow( reps(6, 4), COMMENTS.SELF_WEIGHT )
  ]),
  day(3, [
    bench( work(50, 3), work(60, 3), works(70, 2, 2), works(80, 1, 3) ),
    boardPress( reps(2, 4), COMMENTS.SELF_WEIGHT ),
    press( reps(8, 3) )
  ]),
  day(5, [
    bench( work(50, 3), work(60, 3), works(70, 3, 2), works(75, 2, 4) ),
    chestSimulator( reps(6, 3), COMMENTS.OPTIONAL ),
    backExtension( reps(5, 3), COMMENTS.BODY_WEIGHT )
  ])
]),

// --------week-14--------

week(14, [
  day(1, [
    bench( work(50, 3), work(60, 3), works(70, 2, 2), works(75, 1, 2) )
  ]),
  day(3, [
    bench( work(50, 3), works(60, 3, 2), works(70, 1, 3) )
  ]),
  day(6, [
  bench(
    work(50, 5),
    work(60, 4),
    work(70, 3),
    work(80, 2),
    work(90, 1),
    work(100, 1),
    work(105, 1),
    COMMENTS.TECHNIQUE
  )
])
])
  ]  
}