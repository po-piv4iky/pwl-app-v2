import { ProgramExercise, TrainingDay } from "@/config/programs/types/trainingDay.types"
import css from './ProgramDayCard.module.scss'

interface Props { 
  day: TrainingDay
}

export default function ProgramDayCard({ day }: Props) {

  const mainExercises = day.exercises.filter(e => e.category === 'main')
  const lockoutExercises = day.exercises.filter(e => e.category === 'lockout')
  const accessoryExercises = day.exercises.filter(e => e.category === 'accessory')

  const renderExercise = (exercise: ProgramExercise, idx: number) => (
    <div key={idx} className={css.exercise}>
      <div className={css.exerciseHeader}>
        <p className={css.exerciseName}>{exercise.name}</p>

        {exercise.intensity && (
          <span className={css.intensity}>
            {typeof exercise.intensity === 'number'
              ? `${exercise.intensity}%`
              : `${exercise.intensity.min}% – ${exercise.intensity.max}%`}
          </span>
        )}
      </div>

      {exercise.comment && (
        <p className={css.comment}>{exercise.comment}</p>
      )}

      <p className={css.scheme}>
        {exercise.sets} ×{" "}
        {typeof exercise.reps === 'number'
          ? exercise.reps
          : `${exercise.reps.min} - ${exercise.reps.max}`}
      </p>
    </div>
  )

  return (
    <div className={css.dayCard}>
      <h4 className={css.dayTitle}>
        {day.title ? day.title : `День ${day.day}`}
      </h4>

      <div className={css.exercisesBlock}>

        {/* MAIN */}
        {mainExercises.length > 0 && (
          <>
            <h5 className={css.sectionTitle}>Основное упражнение</h5>
            {mainExercises.map(renderExercise)}
          </>
        )}

        {/* LOCKOUT */}
        {lockoutExercises.length > 0 && (
          <>
            <h5 className={css.sectionTitle}>Дожимы</h5>
            {lockoutExercises.map(renderExercise)}
          </>
        )}

        {/* ACCESSORY */}
        {accessoryExercises.length > 0 && (
          <>
            <h5 className={css.sectionTitle}>Подсобка</h5>
            {accessoryExercises.map(renderExercise)}
          </>
        )}

      </div>
    </div>
  )
}


