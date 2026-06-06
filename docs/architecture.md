Судя по твоей структуре, ты уже двигаешься в сторону Feature-Sliced Design (FSD), только пока не довёл её до конца. Для задачи с активной программой тренировок я бы не делал огромный active-program.store.ts, а разделил ответственность.

src/
├── app/ # Слой приложения (маршруты, layout)
│ ├── (public)/ # Группа публичных маршрутов
│ │ ├── history/
│ │ ├── info/
│ │ ├── my-maximum/
│ │ ├── my-training/
│ │ ├── programs/
│ │ └── standards/
│ ├── layout.tsx
│ └── page.tsx
│
├── components/ # Переиспользуемые компоненты
│ ├── composite/ # Сложные компоненты
│ ├── layout/ # Компоненты макета
│ ├── no-field/ # Компоненты без полей?
│ └── ui/ # UI-кирпичики
│
├── config/ # Конфигурации
├── features/ # Фичи (бизнес-логика страниц)
│ ├── history/
│ ├── info/
│ ├── my-maximum/
│ ├── my-training/
│ ├── programs/
│ └── standards/
│
├── lib/ # Утилиты (общие)
├── programs/ # Данные программ тренировок
├── store/ # Zustand хранилище
└── utils/ # Вспомогательные функции

store/

active-program/

    active-program.types.ts

    active-program.helpers.ts
      createActiveProgramState()
      createRestTimerState()

    active-program.state.ts


    active-program.actions.ts
      startProgram()
      finishTrainingDay()
      nextExercise()
      ...

    active-program.selectors.ts

    active-program.store.ts

Анализ текущих папок
app/
app/
(public)/
history/
info/
my-maximum/
my-training/
programs/
standards/

Это правильно.

Тут должны быть только:

роутинг
layout
страницы

Например:

app/(public)/my-training/page.tsx

должен выглядеть примерно так:

import { MyTrainingPage } from '@/features/my-training'

export default function Page() {
return <MyTrainingPage />
}

Без бизнес-логики.

features/
features/

my-training/
programs/
history/
standards/

Тоже хорошо.

Feature отвечает за сценарий пользователя.

Например:

features/
my-training/

Это всё, что касается активной тренировки:

features/
my-training/

    components/
    hooks/
    helpers/
    types/

    MyTrainingPage.tsx

components/
components/

composite/
layout/
no-field/
ui/

Тоже нормально.

ui

Тупые компоненты:

Button
Input
Modal
Card
composite

Собранные компоненты:

ProgramCard
TrainingDayCard
ExerciseCard
layout
Container
Header
Footer
Sidebar
programs/

Вот тут интереснее.

Сейчас у тебя программы лежат отдельно.

Я бы оставил.

programs/

novice/
intermediate/
advanced/

или

programs/

bench-beginners.ts
squat-beginners.ts

Это фактически база данных приложения.

lib/

Обычно сюда кладут:

lib/

zustand/
dayjs/
local-storage/

То есть инфраструктурный код.

utils/

Чистые функции.

Например:

calculate1RM()
formatWeight()
getCurrentWeek()
Теперь самое важное — store

Сейчас у тебя будет несколько независимых доменов:

store/

active-program/
history/
maximums/
settings/
Для твоей задачи

Я бы сделал так:

store/

active-program/

    active-program.types.ts

    active-program.state.ts

    active-program.actions.ts

    active-program.selectors.ts

    active-program.helpers.ts

    active-program.store.ts

Что где хранить
active-program.types.ts

Только типы.

export type ActiveProgramState
export type TrainingState
export type CompletedDay
export type ViewMode
active-program.state.ts

Начальное состояние.

export const initialActiveProgramState
active-program.helpers.ts

Создатели состояния.

createRestTimerState()

createTrainingState()

createCompletedDay()
active-program.actions.ts

Все действия пользователя.

startProgram()

startTraining()

finishExercise()

finishTrainingDay()

nextDay()

pauseProgram()

resumeProgram()

completeProgram()
active-program.selectors.ts
selectCurrentWeek

selectCurrentDay

selectProgram

selectCompletedDays

selectTrainingMode
active-program.store.ts

Только сборка.

create()

...state

...actions
Теперь про состояние программы

Я бы немного улучшил твою модель.

Вместо:

{
currentWeek: 1,
currentDay: 1,
}

я бы ещё добавил идентификатор дня.

Потому что потом будет проще искать.

Полное состояние
{
program: null,

status: 'idle',

startedAt: null,

completedAt: null,

currentWeek: 1,

currentDay: 1,

trainingState: {
mode: 'plan',

    exerciseIndex: 0,

    restTimer: {
      isRunning: false,
      duration: 0,
      startedAt: null,
    },

},

viewMode: {
type: 'current',
},

completedDays: [],
}
Первая action

Вот именно с неё бы я начал разработку.

startProgram(program)

Потому что это точка входа.

active-program.actions.ts
export const createActiveProgramActions =
(set, get) => ({

    startProgram(program) {

      set({

        program,

        status: 'active',

        startedAt:
          new Date().toISOString(),

        currentWeek: 1,

        currentDay: 1,

        trainingState: {
          mode: 'plan',

          exerciseIndex: 0,

          restTimer: {
            isRunning: false,
            duration: 0,
            startedAt: null,
          },
        },

        completedDays: [],

        viewMode: {
          type: 'current',
        },

      })

    },

})
Затем следующими действиями

В таком порядке:

1. startProgram()

2. startTraining()

3. nextExercise()

4. finishTrainingDay()

5. nextTrainingDay()

6. completeProgram()

Это естественный жизненный цикл программы.

Для твоего приложения я бы рекомендовал хранить в store только одну активную программу, потому что по бизнес-логике пользователь одновременно выполняет только одну программу тренировок. Это сильно упростит архитектуру и селекторы.
