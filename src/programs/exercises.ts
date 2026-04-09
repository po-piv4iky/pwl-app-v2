import { createExercise } from "./builder/createExercise";
import { EXERCISE } from "./constants/exercise-ids";


// -----------------------------
// ГРУДЬ / ЖИМЫ
// -----------------------------

export const bench = createExercise(EXERCISE.BENCH_PRESS) // жим лёжа
export const closeGripBench = createExercise(EXERCISE.CLOSE_GRIP_BENCH) // жим лёжа узким хватом
export const wideGripBenchPress = createExercise(EXERCISE.WIDE_GRIP_BENCH_PRESS) // жим лёжа широким хватом
export const boardPress = createExercise(EXERCISE.BOARD_PRESS) // жим лёжа с бруском
export const seatedInclinePress = createExercise(EXERCISE.SEATED_INCLINE_PRESS) // жим под углом (верх груди)
export const dumbbellFly = createExercise(EXERCISE.DUMBBELL_FLY) // разводка гантелей лёжа
export const chestSimulator = createExercise(EXERCISE.CHEST_SIMULATOR) // грудь в тренажёре
// -----------------------------
// НОГИ
// -----------------------------

export const squat = createExercise(EXERCISE.SQUAT) // приседания со штангой
export const splitSquat = createExercise(EXERCISE.SPLIT_SQUAT) // приседания в ножницах
export const legPress = createExercise(EXERCISE.LEG_PRESS) // жим ногами
export const hipExtension = createExercise(EXERCISE.HIP_EXTENSION) // разгибание бедра

// -----------------------------
// СПИНА
// -----------------------------

export const deadLift = createExercise(EXERCISE.DEADLIFT) // становая тяга
export const lowerBlockRow = createExercise(EXERCISE.LOWER_BLOCK_ROW) // тяга нижнего блока
export const backExtension = createExercise(EXERCISE.BACK_EXTENSION) // гиперэкстензия
export const barbellPullToTheBelt =createExercise(EXERCISE.BARBELL_PULL_TO_THE_BELT) //тяга штанги к поясу
export const goodMorning = createExercise(EXERCISE.GOOD_MORNING)// наклоны сидя

// -----------------------------
// ПЛЕЧИ
// -----------------------------

export const overheadPressBehindNeck = createExercise(EXERCISE.OVER_HEAD_PRESS_BEHIND_NECK) //Жим из-за головы

// -----------------------------
// ТРИЦЕПС
// -----------------------------

export const dips = createExercise(EXERCISE.DIPS) // отжимания на брусьях
export const tricepsPushDown = createExercise(EXERCISE.TRICEPS_PUSHDOWN) // разгибание рук на блоке
export const frenchPress = createExercise(EXERCISE.FRENCH_PRESS) // французский жим

// -----------------------------
// СУПЕРСЕТЫ
// -----------------------------

export const tricepsBiceps = createExercise(EXERCISE.TRICEPS_BICEPS_SUPERSET) // суперсет трицепс + бицепс

// -----------------------------
// ПРЕСС
// -----------------------------

export const press = createExercise(EXERCISE.PRESS) // упражнения на пресс