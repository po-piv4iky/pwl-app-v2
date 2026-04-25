import { useActiveProgramStore } from '@/store/active-program.store'
import css from './TrainingExercisesSessions.module.scss'
import SessionSetItem from './SessionSetItem/SessionSetItem'
import Button from '@/components/ui/button/Button'

export default function TrainingExercisesSessions() {

    const exerciseIndex  = useActiveProgramStore(s => s.activeProgram?.trainingState.exerciseIndex)
    const nextExercise = useActiveProgramStore(s => s.nextExercise)
    const trainingSession = useActiveProgramStore(s => {
    const session = s.activeProgram?.trainingState.currentSession // текущая сессиЯ
    const index = s.activeProgram?.trainingState.exerciseIndex // идём по массиву первый эллемент это 0
    if (!session || index === undefined) return null
    return session.exercises[index]
})
    const totalSets = trainingSession?.sets.length
    const current = trainingSession?.sets.reduce((acc, item) => {
     return item.isCompleted ? acc + 1 : acc
    }, 0)
   const isExerciseDone = trainingSession?.sets.every(set => set.isCompleted === true) ?? false

    return (
        <div className={css.sessionsContainer}>
            <div className='flex justify-between'>
                <h5>{trainingSession?.name}</h5>
                <span>{current}/{totalSets} подходов</span>
            </div>

            <div className={css.sessionMaps}>
                {trainingSession?.sets.map(item => ( 
                <SessionSetItem key={item.id} item={item} exerciseIndex={exerciseIndex!}/>
                ))}
            </div>
            {isExerciseDone && <Button onClick={nextExercise}>Следующее упражнение</Button>}
        </div>
    )
}

// 3. Реализуем toggleSetCompletion

// Вот правильная реализация:

// toggleSetCompletion: (exerciseIndex, setId) =>
//   set((state) => {
//     if (!state.activeProgram?.trainingState.currentSession) return {}

//     const session = state.activeProgram.trainingState.currentSession

//     const updatedExercises = session.exercises.map((exercise, i) => {
//       if (i !== exerciseIndex) return exercise

//       const updatedSets = exercise.sets.map(set =>
//         set.id === setId
//           ? { ...set, isCompleted: !set.isCompleted }
//           : set
//       )

//       const exerciseCompleted = updatedSets.every(s => s.isCompleted)

//       return {
//         ...exercise,
//         sets: updatedSets,
//         isCompleted: exerciseCompleted
//       }
//     })

//     return {
//       activeProgram: {
//         ...state.activeProgram,
//         trainingState: {
//           ...state.activeProgram.trainingState,
//           currentSession: {
//             ...session,
//             exercises: updatedExercises
//           }
//         }
//       }
//     }
//   }),
// 🔥 4. Подключаем чекбоксы

// В TrainingExercisesSessions:

// const toggleSetCompletion = useActiveProgramStore(s => s.toggleSetCompletion)
// const exerciseIndex = useActiveProgramStore(
//   s => s.activeProgram?.trainingState.exerciseIndex
// )

// И в map:

// <input
//   type='checkbox'
//   checked={item.isCompleted}
//   onChange={() => toggleSetCompletion(exerciseIndex!, item.id)}
// />

// 🔥 Всё. Подходы теперь реально живые.

// 🔥 5. Подсветка текущего упражнения в плане

// В TrainingPlanSession:

// const exerciseIndex = useActiveProgramStore(
//   s => s.activeProgram?.trainingState.exerciseIndex
// )

// И в map:

// <div
//   key={index}
//   className={`flex justify-between ${
//     index === exerciseIndex ? 'bg-zinc-800' : ''
//   }`}
// >
// 🔥 6. Добавим переключение упражнений

// В стор:

// goToNextExercise: () =>
//   set((state) => {
//     if (!state.activeProgram?.trainingState.currentSession) return {}

//     const { exerciseIndex, currentSession } =
//       state.activeProgram.trainingState

//     if (exerciseIndex >= currentSession.exercises.length - 1)
//       return {}

//     return {
//       activeProgram: {
//         ...state.activeProgram,
//         trainingState: {
//           ...state.activeProgram.trainingState,
//           exerciseIndex: exerciseIndex + 1
//         }
//       }
//     }
//   }),

// Теперь можно добавить кнопку:

// <Button onClick={goToNextExercise}>Следующее упражнение</Button>
// 🔥 7. Прогресс "1 из 5"

// В TrainingSession:

// const exerciseIndex = useActiveProgramStore(
//   s => s.activeProgram?.trainingState.exerciseIndex
// )

// const totalExercises = useActiveProgramStore(
//   s => s.activeProgram?.trainingState.currentSession?.exercises.length
// )

// И вывод:

// <p>
//   Упражнение {exerciseIndex! + 1} из {totalExercises}
// </p>
// 🧠 Как теперь всё работает

// startTraining создаёт currentSession

// exerciseIndex управляет активным упражнением

// toggleSetCompletion меняет состояние подхода

// exerciseCompleted вычисляется автоматически

// план подсвечивает активное

// можно переключаться

// 🎯 Архитектурно ты всё сделал правильно

// У тебя:

// TrainingSession = layout

// TrainingExercisesSessions = текущее упражнение

// TrainingPlanSession = overview

// store = вся логика

// Это clean.

// Если хочешь, дальше можем:

// добавить автопереход к следующему упражнению

// сделать finishTraining()

// добавить прогрессбар по completed sets

// сделать сохранение actualWeight / actualReps

// добавить таймер отдыха

// сделать анимации

// Ты уже на уровне middle по архитектуре 💪