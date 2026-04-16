export type ProgramCategory = "bench" | "squat" | "deadlift" | "powerlifting";
export type Level = "beginner" | "intermediate" | "advanced";


export interface ProgramTraining {
    id: string // название программы
    coachId: string // bench-press-sheiko
    name: string //Программа Шейко Б.И.
    country: string
    category: ProgramCategory //bench
    description: string //Жим лежа для любителей «пахать»
    level: Level
    durationWeeks: number
    weeks: TrainingWeek[] // [{1 неделя}, {2 неделя}, {3 неделя} ...]
}

export interface TrainingWeek {
    weekNumber: number // 1 неделя
    trainingDays: TrainingDay[] // [{1 тренирвока}, {2 тренировка}, {3 тренирвока}]
}

export interface TrainingDay {
    day: number // 1 - это понедельник
    exercises: Exercise[] // [{1 сет}, {2 сет}, {3 сет}, {4 сет}]
}

export interface Exercise {
    exerciseId: string // ссылка на упражнение из базы
    sets: ExerciseSet[] // [{rep: 8, rpe: 8, weight: 100}, {rep: 6, rpe: 7, weight: 90}, {rep: 4, rpe: 6, weight: 80}]
    comment?: string
}

export interface ExerciseSet {
    isWarmUp?: boolean // это разминка ? да или нет 
    percent?: number // проценты от максимума
    reps: number | string // подходы // 4 или от 4 до 5
    rpe?: number // значение сколько ещё можно сделать повторений
    repeat?: number; // если одинаковый вес, то просто указываем сколько повторений
} 



// types
// │
// ├─ exercises.types.ts
// ├─ program.types.ts
// └─ training.types.ts




// bench_press
// pause_bench
// close_grip_bench

// squat
// pause_squat
// front_squat

// deadlift
// deficit_deadlift
// romanian_deadlift

// overhead_press
// barbell_row
// pullups

// 🇷🇺 Восточно-европейская школа
// Борис Шейко

// Очень известные программы:

// #29

// #30

// #37

// CMS cycles

// Аскольд Суровецкий

// Программы:

// Гусеница

// ДПСМ

// Жим №1

// Жим №2

// Рекорд

// Юрий Верхошанский

// shock method

// блоковая периодизация

// Анатолий Бондарчук

// блоковые циклы

// Владимир Зациорский

// классические силовые схемы

// 🇺🇸 Американская школа
// Jim Wendler

// программы:

// 5/3/1

// Boring But Big

// Building the Monolith

// Mark Rippetoe

// Starting Strength

// Texas Method

// Chad Wesley Smith

// Juggernaut Method

// Juggernaut AI

// Mike Tuchscherer

// RTS templates

// Emerging Strategies

// Greg Nuckols

// 28 free programs

// StrongerByScience templates

// Jonnie Candito

// Candito 6 week program

// Candito Linear Program

// 🇺🇸 Conjugate / Westside
// Louie Simmons

// Westside system:

// Max Effort

// Dynamic Effort

// Repetition Effort

// Dave Tate

// EliteFTS templates

// 🇺🇸 известные циклы
// Ed Coan

// Coan/Phillipi deadlift program

// Brandon Lilly

// Cube Method

// Layne Norton

// PHAT

// PH3

// 🇪🇺 современные тренеры
// Eric Helms

// powerbuilding programs

// Bryce Lewis

// TSA programs