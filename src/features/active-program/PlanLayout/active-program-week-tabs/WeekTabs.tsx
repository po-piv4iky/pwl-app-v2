import css from "./WeekTabs.module.scss"
import { Circle, CheckCircle } from "lucide-react"
import clsx from "clsx"
import { useActiveProgramStore } from "@/store/active-program.store"


export default function WeekTabs() {
  const { activeProgram, setCurrentWeek } = useActiveProgramStore()
  if(!activeProgram) return null

  const { program, currentWeek, completedDays } = activeProgram
  const weeks = program.weeks

  return (
    <section className={css.weeksTabsContainer}>
      <h5>Выберите неделю</h5>

      <div className={css.buttonsContainer}>
        {weeks.map((week) => {
          const weekNumber = week.week
          const isActive = weekNumber === currentWeek
          const completedWorkouts = completedDays.filter(item => item.week === weekNumber).length
          const totalWorkouts = week.days.length
          
          const isCompleted = completedWorkouts === totalWorkouts
          return (
            <button
              key={weekNumber}
              onClick={() => setCurrentWeek(weekNumber)}
              className={clsx(
              css.buttonWeek,
              isActive && css.active,
              )}
            >
              <div className={css.iconAndWeekBlock}>
                {isCompleted ? <CheckCircle /> : <Circle />}
                <span>Неделя {week.week}</span>
              </div>

              <span className={css.progress}>
                {completedWorkouts}/{totalWorkouts} завершено
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}





// components/ui/WeekTabs/WeekTabs.tsx
// 'use client'

// import { useActiveProgramStore } from "@/store/active-program.store"
// import css from "./WeekTabs.module.scss"
// import { Circle, CheckCircle } from "lucide-react"
// import clsx from "clsx"

// export default function WeekTabs() {
//   const { 
//     activeProgram, 
//     setCurrentWeek,
//     isWeekCompleted 
//   } = useActiveProgramStore()
  
//   if (!activeProgram) return null
  
//   const { program, currentWeek } = activeProgram
//   const weeks = program.weeks

//   return (
//     <section className={css.weeksTabsContainer}>
//       <h5>Выберите неделю</h5>

//       <div className={css.buttonsContainer}>
//         {weeks.map((week) => {
//           const weekNumber = week.week
//           const isActive = weekNumber === currentWeek
//           const completed = isWeekCompleted(weekNumber)
          
//           // Подсчитываем выполненные тренировки на этой неделе
//           const completedWorkouts = activeProgram.completedDays.filter(
//             d => d.week === weekNumber
//           ).length
          
//           const totalWorkouts = week.days.filter(d => !d.isRestDay).length

//           return (
//             <button
//               key={weekNumber}
//               onClick={() => setCurrentWeek(weekNumber)}
//               className={clsx(
//                 css.buttonWeek,
//                 isActive && css.active,
//                 completed && css.completed
//               )}
//             >
//               <div className={css.iconAndWeekBlock}>
//                 {completed ? (
//                   <CheckCircle size={18} />
//                 ) : (
//                   <Circle size={18} />
//                 )}
//                 <span>Неделя {weekNumber}</span>
//               </div>

//               <span className={css.progress}>
//                 {completedWorkouts}/{totalWorkouts} завершено
//               </span>
//             </button>
//           )
//         })}
//       </div>
//     </section>
//   )
// }




// components/ActiveProgramPage/DaysCurrentWeek.tsx
// 'use client'

// import { useActiveProgramStore } from "@/store/active-program.store"
// import Button from "@/components/ui/Button/Button"
// import clsx from "clsx"
// import css from "./DaysCurrentWeek.module.scss"

// export default function DaysCurrentWeek() {
//   const { 
//     activeProgram, 
//     selectDay, 
//     startWorkout,
//     resetSelectedDay,
//     isDayCompleted,
//     getCurrentWeekData
//   } = useActiveProgramStore()
  
//   if (!activeProgram) return null
  
//   const weekData = getCurrentWeekData()
//   if (!weekData) return null
  
//   const { currentDay, selectedDay } = activeProgram

//   return (
//     <section className={css.daysContainer}>
//       <h5>Дни недели {activeProgram.currentWeek}</h5>
      
//       <div className={css.daysGrid}>
//         {weekData.days.map((day, index) => {
//           const dayNumber = index + 1
//           const isCompleted = isDayCompleted(activeProgram.currentWeek, dayNumber)
//           const isCurrent = dayNumber === currentDay
//           const isSelected = dayNumber === selectedDay
//           const isRestDay = day.isRestDay || false
          
//           // Проверяем, есть ли упражнения
//           const hasExercises = day.exercises && day.exercises.length > 0

//           return (
//             <div 
//               key={dayNumber}
//               className={clsx(
//                 css.dayCard,
//                 isCompleted && css.completed,
//                 isCurrent && css.current,
//                 isSelected && css.selected,
//                 isRestDay && css.restDay
//               )}
//             >
//               <div className={css.dayHeader}>
//                 <h4>День {dayNumber}</h4>
//                 {isRestDay && <span className={css.restBadge}>😴 Отдых</span>}
//                 {isCompleted && <span className={css.completedBadge}>✅</span>}
//                 {isCurrent && !isCompleted && !isRestDay && (
//                   <span className={css.currentBadge}>▶️ Текущий</span>
//                 )}
//                 {isSelected && !isCompleted && (
//                   <span className={css.selectedBadge}>👁️ Просмотр</span>
//                 )}
//               </div>

//               {!isRestDay && (
//                 <div className={css.dayContent}>
//                   {hasExercises && (
//                     <div className={css.exercisesPreview}>
//                       <p className={css.mainExercise}>
//                         🏋️ {day.exercises[0].name}
//                       </p>
//                       <p className={css.exercisesCount}>
//                         +{day.exercises.length - 1} упражнений
//                       </p>
//                     </div>
//                   )}
                  
//                   {day.accessory && (
//                     <p className={css.accessoryInfo}>
//                       📋 {day.accessory.muscleGroups?.join(', ')}
//                     </p>
//                   )}
//                 </div>
//               )}

//               <div className={css.actions}>
//                 {!isRestDay && !isCompleted && (
//                   <>
//                     <Button 
//                       variant={isSelected ? "primary" : "outline"}
//                       size="small"
//                       onClick={() => {
//                         if (isSelected) {
//                           resetSelectedDay()
//                         } else {
//                           selectDay(activeProgram.currentWeek, dayNumber)
//                         }
//                       }}
//                     >
//                       {isSelected ? 'Скрыть' : 'Посмотреть'}
//                     </Button>
                    
//                     <Button 
//                       size="small"
//                       onClick={() => startWorkout(activeProgram.currentWeek, dayNumber)}
//                     >
//                       Начать
//                     </Button>
//                   </>
//                 )}
                
//                 {isRestDay && !isCompleted && (
//                   <Button 
//                     variant="outline"
//                     size="small"
//                     onClick={() => selectDay(activeProgram.currentWeek, dayNumber)}
//                   >
//                     Посмотреть
//                   </Button>
//                 )}
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }




// components/ActiveProgramPage/CurrentWeek.tsx
// 'use client'

// import { useActiveProgramStore } from "@/store/active-program.store"
// import Button from "@/components/ui/Button/Button"
// import css from "./CurrentWeek.module.scss"

// export default function CurrentWeek() {
//   const { 
//     activeProgram, 
//     completeDay, 
//     resetSelectedDay,
//     getCurrentDayData,
//     isDayCompleted
//   } = useActiveProgramStore()
  
//   if (!activeProgram) return null
  
//   const dayData = getCurrentDayData()
//   if (!dayData) return null
  
//   const { currentWeek, selectedDay, currentDay } = activeProgram
//   const dayToShow = selectedDay || currentDay
//   const isCompleted = isDayCompleted(currentWeek, dayToShow)
//   const isRestDay = dayData.isRestDay || false
//   const isSelectedView = selectedDay !== null

//   // Если день выполнен
//   if (isCompleted) {
//     return (
//       <section className={css.completedDay}>
//         <div className={css.header}>
//           <h2>✅ День {dayToShow} выполнен</h2>
//           {isSelectedView && (
//             <Button variant="outline" onClick={resetSelectedDay}>
//               Вернуться к текущему дню
//             </Button>
//           )}
//         </div>
//       </section>
//     )
//   }

//   // Если день отдыха
//   if (isRestDay) {
//     return (
//       <section className={css.restDay}>
//         <div className={css.header}>
//           <h2>😴 День {dayToShow} — Отдых</h2>
//           {isSelectedView && (
//             <Button variant="outline" onClick={resetSelectedDay}>
//               Вернуться к текущему дню
//             </Button>
//           )}
//         </div>
//         <p className={css.restMessage}>
//           Сегодня восстанавливаемся. Хорошего отдыха!
//         </p>
//       </section>
//     )
//   }

//   // Тренировка
//   return (
//     <section className={css.workoutDay}>
//       <div className={css.header}>
//         <div>
//           <h2>
//             {isSelectedView ? '👁️ Просмотр' : '🏋️ Тренировка'} — День {dayToShow}
//           </h2>
//           <p className={css.weekInfo}>Неделя {currentWeek}</p>
//         </div>
        
//         {isSelectedView && (
//           <Button variant="outline" onClick={resetSelectedDay}>
//             Вернуться к текущему дню
//           </Button>
//         )}
//       </div>

//       {/* Основные упражнения */}
//       {dayData.exercises && dayData.exercises.length > 0 && (
//         <div className={css.exercises}>
//           <h3>Основные упражнения</h3>
//           {dayData.exercises.map((exercise, idx) => (
//             <div key={idx} className={css.exercise}>
//               <div className={css.exerciseName}>
//                 <strong>{exercise.name}</strong>
//                 {exercise.comment && (
//                   <span className={css.comment}>— {exercise.comment}</span>
//                 )}
//               </div>
              
//               <div className={css.exerciseDetails}>
//                 <span className={css.setsReps}>
//                   {exercise.sets} × {
//                     typeof exercise.reps === 'object'
//                       ? `${exercise.reps.min}-${exercise.reps.max}`
//                       : exercise.reps
//                   }
//                 </span>
                
//                 <span className={css.intensity}>
//                   {exercise.intensity}% {exercise.absoluteWeightPercent && 'от ПМ'}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Подсобка */}
//       {dayData.accessory && (
//         <div className={css.accessory}>
//           <h3>Подсобные упражнения</h3>
//           <p className={css.accessoryRec}>
//             {dayData.accessory.recommendation}
//           </p>
//           {dayData.accessory.muscleGroups && (
//             <div className={css.muscleGroups}>
//               {dayData.accessory.muscleGroups.map((group) => (
//                 <span key={group} className={css.muscleTag}>
//                   {group}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Кнопка завершения (только для текущего дня) */}
//       {!isSelectedView && !isCompleted && (
//         <div className={css.completeAction}>
//           <Button 
//             size="large"
//             onClick={() => completeDay(currentWeek, dayToShow)}
//           >
//             ✅ Завершить тренировку
//           </Button>
//         </div>
//       )}
//     </section>
//   )
// }