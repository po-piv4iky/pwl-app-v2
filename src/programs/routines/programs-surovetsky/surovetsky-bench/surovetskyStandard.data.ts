import { day } from '@/programs/builder/day-builder'
import { week } from '@/programs/builder/week-builder'
import { reps, work, works } from '@/programs/builder/work'
import { COMMENTS } from '@/programs/constants/comments'
import {
  barbellPullToTheBelt,
  bench,
  bicepCurl,
  boardPress,
  dumbbellFly,
  frenchPress,
  latPullDown,
  lowerBlockRow,
  rearDeltFly,
  standingBarbellPress,
} from '@/programs/exercises'
import { ProgramTraining } from '@/programs/types/program.types'

export const surovetskyBenchStandard: ProgramTraining = {
  id: 'surovetsky-bench-standard',
  coachId: 'surovetsky',
  title: 'Суровецкий — Стандарт',
  author: 'Суровецкий',
  country: 'Russia',
  lift: 'bench',
  description:
    'Классическая жимовая программа Суровецкого для спортсменов среднего уровня. Цикл построен на чередовании объёмных и интенсивных тренировок с постепенным ростом рабочих весов. Программа помогает увеличить силу в жиме лёжа, улучшить технику движения и адаптироваться к регулярной тяжёлой нагрузке. Подходит для повторения цикла с последующей прибавкой веса.',
  descriptionPreview:
    '3-недельная жимовая программа с прогрессией нагрузки и чередованием объёма и интенсивности.',
  level: 'intermediate',
  durationWeeks: 3,

  weeks: [
    week(1, [
      day(1, [
        bench({
          sets: [works(68, 5, 4), work(68, 'до 7 раз')],
        }),

        barbellPullToTheBelt({
          sets: [reps(8, 5)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        bicepCurl({
          sets: [reps('до 8 повторений', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        rearDeltFly({
          sets: [reps('до 12 повторений', 3)],
          comment: COMMENTS.EXPLOSIVE,
        }),
      ]),

      day(3, [
        bench({
          sets: [works(96, 3, 1)],
        }),

        boardPress({
          sets: [work(100, 2), work(103, 2), work(106, 2)],
        }),

        frenchPress({
          sets: [reps('до 12 повтотроений', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        standingBarbellPress({
          sets: [reps('до 10 повторений', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(5, [
        bench({
          sets: [works(88, 3, 3), work(88, 'до 5 раз')],
        }),

        dumbbellFly({
          sets: [reps('до 12 повторений', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),
    ]),

    week(2, [
      day(1, [
        bench({
          sets: [works(72, 5, 3), work(72, 'до 7 повторений')],
        }),

        lowerBlockRow({
          sets: [reps('до 12 повторений', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        rearDeltFly({
          sets: [reps('до 12 повторений', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(3, [
        bench({
          sets: [works(100, 1, 2)],
        }),

        boardPress({
          sets: [work(106, 2), work(109, 2), work(112, 2)],
        }),

        frenchPress({
          sets: [reps(10, 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        standingBarbellPress({
          sets: [reps(10, 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(5, [
        bench({
          sets: [works(76, 5, 3), work(76, 'до 7 повторений')],
        }),

        latPullDown({
          sets: [reps(8, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        bicepCurl({
          sets: [reps('до 8 повторений', 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),

        rearDeltFly({
          sets: [reps(12, 3)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),
    ]),

    week(3, [
      day(1, [
        bench({
          sets: [works(92, 3, 2), work(92, 'до 5 повторений')],
        }),

        dumbbellFly({
          sets: [reps(10, 4)],
          comment: COMMENTS.SELF_WEIGHT,
        }),
      ]),

      day(3, [
        bench({
          sets: [works(68, 5, 5)],
          comment: 'Без подсобных упражнений',
        }),
      ]),

      day(5, [
        bench({
          sets: [work(100, 1), work(102.5, 1), work(105, 1)],
          comment: 'Контрольная проходка...',
        }),

        boardPress({
          sets: [works(112, 2, 3)],
        }),
      ]),
    ]),
  ],
}
