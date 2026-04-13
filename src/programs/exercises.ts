import { createExercise } from "./builder/createExercise";
import { EXERCISE } from "./constants/exercise-ids";

// -----------------------------
// ГРУДЬ / ЖИМЫ
// -----------------------------

export const bench = createExercise(EXERCISE.BENCH_PRESS) // жим лёжа
export const pauseBench = createExercise(EXERCISE.PAUSE_BENCH) // жим лёжа с паузой
export const closeGripBench = createExercise(EXERCISE.CLOSE_GRIP_BENCH) // узкий хват
export const wideGripBenchPress = createExercise(EXERCISE.WIDE_GRIP_BENCH_PRESS) // широкий хват
export const boardPress = createExercise(EXERCISE.BOARD_PRESS) // жим с бруском
export const inclineBench = createExercise(EXERCISE.INCLINE_BENCH) // жим на наклонной
export const seatedInclinePress = createExercise(EXERCISE.SEATED_INCLINE_PRESS) // жим сидя под углом
export const dumbbellFly = createExercise(EXERCISE.DUMBBELL_FLY) // разводка гантелей
export const chestSimulator = createExercise(EXERCISE.CHEST_SIMULATOR) // грудной тренажёр

// -----------------------------
// НОГИ / ПРИСЕДАНИЯ
// -----------------------------

export const squat = createExercise(EXERCISE.SQUAT) // присед
export const pauseSquat = createExercise(EXERCISE.PAUSE_SQUAT) // присед с паузой
export const frontSquat = createExercise(EXERCISE.FRONT_SQUAT) // фронтальный присед
export const tempoSquat = createExercise(EXERCISE.TEMPO_SQUAT) // темповый присед
export const boxSquat = createExercise(EXERCISE.BOX_SQUAT) // присед на ящик
export const splitSquat = createExercise(EXERCISE.SPLIT_SQUAT) // болгарский

export const legPress = createExercise(EXERCISE.LEG_PRESS) // жим ногами
export const hamstringCurl = createExercise(EXERCISE.HAMSTRING_CURL) // сгибание ног
export const hipExtension = createExercise(EXERCISE.HIP_EXTENSION) // разгибание бедра

// -----------------------------
// СТАНОВАЯ / ЗАДНЯЯ ЦЕПЬ
// -----------------------------

export const deadLift = createExercise(EXERCISE.DEADLIFT) // становая
export const deficitDeadLift = createExercise(EXERCISE.DEFICIT_DEADLIFT) // с дефицита
export const romanianDeadLift = createExercise(EXERCISE.ROMANIAN_DEADLIFT) // румынка
export const blockPull = createExercise(EXERCISE.BLOCK_PULL) // тяга с блоков
export const snatchGripDeadLift = createExercise(EXERCISE.SNATCH_GRIP_DEADLIFT) // рывковый хват
export const goodMorning = createExercise(EXERCISE.GOOD_MORNING) // наклоны со штангой
export const backExtension = createExercise(EXERCISE.BACK_EXTENSION) // гиперэкстензия

// -----------------------------
// СПИНА / ТЯГИ
// -----------------------------

export const pullUps = createExercise(EXERCISE.PULLUPS) // подтягивания
export const latPullDown = createExercise(EXERCISE.LAT_PULLDOWN) // верхний блок
export const lowerBlockRow = createExercise(EXERCISE.LOWER_BLOCK_ROW) // нижний блок
export const barbellRow = createExercise(EXERCISE.BARBELL_ROW) // тяга штанги
export const dumbbellRow = createExercise(EXERCISE.DUMBBELL_ROW) // тяга гантели
export const facePull = createExercise(EXERCISE.FACE_PULL) // тяга к лицу
export const barbellPullToTheBelt = createExercise(EXERCISE.BARBELL_PULL_TO_THE_BELT) // к поясу

// -----------------------------
// ПЛЕЧИ
// -----------------------------

export const standingBarbellPress = createExercise(EXERCISE.STANDING_BARBELL_PRESS) // жим штанги стоя
export const lateralRaise = createExercise(EXERCISE.LATERAL_RAISE) // разводка в стороны
export const rearDeltFly = createExercise(EXERCISE.REAR_DELT_FLY) // задняя дельта
export const overheadPressBehindNeck = createExercise(EXERCISE.OVER_HEAD_PRESS_BEHIND_NECK) // из-за головы

// -----------------------------
// ТРИЦЕПС
// -----------------------------

export const dips = createExercise(EXERCISE.DIPS) // брусья
export const tricepsPushDown = createExercise(EXERCISE.TRICEPS_PUSHDOWN) // блок
export const frenchPress = createExercise(EXERCISE.FRENCH_PRESS) // французский жим

// -----------------------------
// БИЦЕПС
// -----------------------------

export const bicepCurl = createExercise(EXERCISE.BICEP_CURL) // бицепс

// -----------------------------
// СУПЕРСЕТЫ
// -----------------------------

export const tricepsBiceps = createExercise(EXERCISE.TRICEPS_BICEPS_SUPERSET) // суперсет

// -----------------------------
// ПРЕСС
// -----------------------------

export const press = createExercise(EXERCISE.PRESS) // пресс