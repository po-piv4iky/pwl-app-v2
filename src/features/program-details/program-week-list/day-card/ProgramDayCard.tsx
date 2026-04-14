import Card from '@/components/ui/card/Card'
import css from './ProgramDayCard.module.scss'
import { TrainingDay } from '@/programs/types/training.types'

interface Props {
  day: TrainingDay
}

export default function ProgramDayCard({ day }: Props) {
  const dayTotalTraining = day.exercises.length
  const levelDay = dayTotalTraining > 5 ? "тяжёлая" : "лёгкая"
  console.log(day.exercises)
  return(
    <Card >
      <header className='flex justify-between items-start'>
        <div className='flex flex-col'>
          <span>День - {day.day}</span>
          <span className='opacity-60'>{dayTotalTraining} упражнений</span>
        </div>
        <span 
          className='p-2 border border-b-emerald-500 bg-emerald-400 rounded-2xl'>
          {levelDay}
        </span>
      </header>

      <div className='flex flex-col gap-3'>
        {day.exercises.map((exercisec, index) => (
          <Card key={index}>
            <h6>{exercisec.exerciseId}</h6>
            <span>{}</span>
          </Card>
        ))}
      </div>
    </Card>
  )
  // const mainExercises = day.exercises.filter(
  //   (exercise) => exercise.exerciseId === 'main'
  // )

  // const lockoutExercises = day.exercises.filter(
  //   (exercise) => exercise.category === 'lockout'
  // )

  // const accessoryExercises = day.exercises.filter(
  //   (exercise) => exercise.category === 'accessory'
  // )

  // const renderExercise = (exercise: ProgramExercise, idx: number) => (
  //   <div key={idx} className={css.dayCard__exercise}>
  //     <div className={css.dayCard__exerciseHeader}>
  //       <p className={css.dayCard__exerciseName}>{exercise.name}</p>

  //       {exercise.intensity && (
  //         <span className={css.dayCard__intensity}>
  //           {typeof exercise.intensity === 'number'
  //             ? `${exercise.intensity}%`
  //             : `${exercise.intensity.min}% – ${exercise.intensity.max}%`}
  //         </span>
  //       )}
  //     </div>

  //     {exercise.comment && (
  //       <p className={css.dayCard__comment}>{exercise.comment}</p>
  //     )}

  //     <p className={css.dayCard__scheme}>
  //       {exercise.sets} ×{' '}
  //       {typeof exercise.reps === 'number'
  //         ? exercise.reps
  //         : `${exercise.reps.min} - ${exercise.reps.max}`}
  //     </p>
  //   </div>
  // )

  // return (
  //   <Card size="md" className={css.dayCard}>
  //     <h4 className={css.dayCard__title}>
  //       {day.title ? day.title : `День ${day.day}`}
  //     </h4>

  //     <div className={css.dayCard__exercises}>
  //       {mainExercises.length > 0 && (
  //         <>
  //           <h5 className={css.dayCard__sectionTitle}>Основное упражнение</h5>
  //           {mainExercises.map(renderExercise)}
  //         </>
  //       )}

  //       {lockoutExercises.length > 0 && (
  //         <>
  //           <h5 className={css.dayCard__sectionTitle}>Дожимы</h5>
  //           {lockoutExercises.map(renderExercise)}
  //         </>
  //       )}

  //       {accessoryExercises.length > 0 && (
  //         <>
  //           <h5 className={css.dayCard__sectionTitle}>Подсобка</h5>
  //           {accessoryExercises.map(renderExercise)}
  //         </>
  //       )}
  //     </div>
  //   </Card>
  // )
}
