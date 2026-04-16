import { day } from "@/programs/builder/day-builder";
import { week } from "@/programs/builder/week-builder";
import { reps, work, works } from "@/programs/builder/work";
import { COMMENTS } from "@/programs/constants/comments";
import { barbellPullToTheBelt, bench, bicepCurl, boardPress, dumbbellFly, frenchPress, latPullDown, lowerBlockRow, rearDeltFly, standingBarbellPress } from "@/programs/exercises";
import { ProgramTraining } from "@/programs/types/program.types";

export const surovetskyBenchStandard: ProgramTraining = {
  id: 'surovetsky-bench-standard',
  coachId: 'surovetsky',
  title: 'Суровецкий — Стандарт',
  author: 'Суровецкий',
  country: 'Russia',
  lift: 'bench',
  description: 'Классическая жимовая система на 3 недели (9 тренировок) с повторением цикла и прибавкой веса',
  level: 'intermediate',
  durationWeeks: 3,
  weeks: [

    // ------------------ 1 НЕДЕЛЯ ------------------
    week(1, [
      day(1, [
        bench( works(68, 5, 4), work(68, "до 7 раз") ),
        barbellPullToTheBelt( reps(8, 5), COMMENTS.SELF_WEIGHT ),
        bicepCurl( reps( "до 8 повторений", 4 ), COMMENTS.SELF_WEIGHT ),
        rearDeltFly( reps( "до 12 повторений", 3 ), COMMENTS.EXPLOSIVE )
      ]),
      day(3, [
        bench( works(96, 3, 1) ),
        boardPress( work(100, 2), work(103, 2), work(106, 2) ),
        frenchPress( reps( "до 12 повтотроений", 4), COMMENTS.SELF_WEIGHT ),
        standingBarbellPress( reps("до 10 повторений", 4), COMMENTS.SELF_WEIGHT )
      ]),
      day(5, [
        bench( works(88, 3, 3), work(88, "до 5 раз") ),
        dumbbellFly( reps( "до 12 повторений", 4 ), COMMENTS.SELF_WEIGHT )
      ])
    ]),
    // ------------------ 2 НЕДЕЛЯ ------------------

    week(2, [
      day(1, [
        bench( works(72, 5, 3), work(72, "до 7 повторений") ),
        lowerBlockRow( reps("до 12 повторений", 4), COMMENTS.SELF_WEIGHT ),
        rearDeltFly( reps("до 12 повторений", 4), COMMENTS.SELF_WEIGHT )
      ]),

      day(3, [
       bench( works(100, 1, 2) ),
        boardPress( work(106, 2), work(109, 2), work(112, 2) ),
        frenchPress( reps(10, 4), COMMENTS.SELF_WEIGHT ),
        standingBarbellPress( reps(10, 4), COMMENTS.SELF_WEIGHT )
      ]),

      day(5, [
        bench( works(76, 5, 3), work(76, "до 7 повторений") ),
        latPullDown( reps(8, 3), COMMENTS.SELF_WEIGHT ),
        bicepCurl( reps("до 8 повторений", 4), COMMENTS.SELF_WEIGHT ),
        rearDeltFly( reps(12, 3), COMMENTS.SELF_WEIGHT )
      ])
    ]),  

    // ------------------ 3 НЕДЕЛЯ ------------------

    week(3, [
       day(1, [
         bench( works(92, 3, 2), work(92, "до 5 повторений") ),
         dumbbellFly( reps(10, 4), COMMENTS.SELF_WEIGHT )
       ]),
       day(3, [
         bench( works(68, 5, 5), "Без подсобных упражнений" )
       ]),
       day(5, [
         bench( work(100, 1), work(102.5, 1), work(105, 1), "Контрольная проходка..." ),
         boardPress( works(112, 2, 3) )
       ])
    ]),
  ],
};
















