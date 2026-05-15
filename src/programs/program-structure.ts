const programStructure = {
  id: 'deadlift-cycle',
  coachId: 'surovetsky',
  title: 'Становая тяга-цикл',
  author: 'Суровецкий',
  country: 'RU',
  lift: 'deadlift',
  description:
    'Тяговый цикл Аскольда Суровецкого для развития максимальной силы в становой тяге. Программа построена на чередовании объёмных и интенсивных тренировок: нечётные тренировки развивают силовую выносливость и технику, чётные — адаптацию к предельным весам. Между тяжёлыми тягами предусмотрены увеличенные интервалы восстановления. Основной акцент — прогрессия интенсивности, сохранение свежести ЦНС и постепенный выход на новый максимум.',
  level: 'advanced',
  durationWeeks: 10,
  weeks: [
    {
      weekNumber: 1,
      trainingDays: [
        {
          day: 1,
          exercises: [
            {
              exerciseId: 'deadlift',
              sets: [{ percent: 70, reps: 5, repeat: 5 }],
            },
            {
              exerciseId: 'lat_pulldown',
              comment: 'Вес подбираем самостоятельно',
              sets: [{ reps: '8-10', repeat: 4 }],
            },
            {
              exerciseId: 'lower_block_row',
              comment: 'Вес подбираем самостоятельно',
              sets: [{ reps: 8, repeat: 4 }],
            },
            {
              exerciseId: 'bicep_curl',
              comment: 'Подъём максимально взрывной',
              sets: [{ reps: 8, repeat: 4 }],
            },
          ],
        },
        {
          day: 3,
          exercises: [
            {
              exerciseId: 'bench_press',
              comment: 'Подъём максимально взрывной',
              sets: [Array],
            },
            {
              exerciseId: 'incline_bench_dumbbells',
              comment: 'Вес подбираем самостоятельно',
              sets: [Array],
            },
            {
              exerciseId: 'hammer_on_biceps',
              comment: 'Вес подбираем самостоятельно',
              sets: [Array],
            },
          ],
        },
        {
          day: 6,
          exercises: [
            { exerciseId: 'deadlift', sets: [Array] },
            {
              exerciseId: 'gakk_squat',
              comment: 'Лёгкая работа, концентрируемся на технике',
              sets: [Array],
            },
            {
              exerciseId: 'hamstring_curl',
              comment: 'Вес подбираем самостоятельно',
              sets: [Array],
            },
          ],
        },
      ],
    },
    {
      weekNumber: 2,
      trainingDays: [
        { day: 2, exercises: [Array] },
        { day: 5, exercises: [Array] },
        { day: 7, exercises: [Array] },
      ],
    },
    { weekNumber: 3, trainingDays: [Array] },
    { weekNumber: 4, trainingDays: [Array] },
    { weekNumber: 5, trainingDays: [Array] },
    { weekNumber: 6, trainingDays: [Array] },
    { weekNumber: 7, trainingDays: [Array] },
    { weekNumber: 8, trainingDays: [Array] },
    { weekNumber: 9, trainingDays: [Array] },
    { weekNumber: 10, trainingDays: [Array] },
  ],
}
