const activeProgram = {
  program: {
    id: 'deadlift-cycle',
    title: 'Становая тяга-цикл',
    weeks: [],
  },
  trainingState: {
    mode: 'plan',
    exerciseIndex: 0,
    currentSession: {
      week: 1,
      day: 1,
      exercises: [
        {
          id: '0',
          name: 'Становая тяга',
          lift: 'deadlift',
          warmUp: [],
          sets: [
            {
              id: '0-0-1',
              setNumber: 1,
              targetReps: 5,
              targetWeight: 140,
              actualReps: 5,
              actualWeight: 140,
              intensity: 70,
              isCompleted: false,
            },
          ],
          restDuration: 180,
          isCompleted: false,
        },
      ],
      startedAt: '2026-05-19T12:57:08.166Z',
      isCompleted: false,
    },
    restTimer: { isActive: false, duration: 0, startedAt: null },
  },
  startedAt: '2026-05-19T12:57:08.166Z',
  currentWeek: 1,
  currentDay: 1,
  viewMode: {
    type: 'current',
  },
  completedDays: [
    {
      week: 1,
      day: 1,
    },

    {
      week: 1,
      day: 3,
    },
  ],
  status: 'active',
}
// старт программы
// 1. Добавляектся сама программа с которой работаем
// 2. дата начала,
// 4. текущая тренировочная сессия: {
//  содержит, массив упражнений, которые надо выполнить, выполнено не выполнено, таймер, дата  и время начала или выполнения}
// 3. массив с выполнеными днями

//старт тренировки
//завершить тренировку
//
