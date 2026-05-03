import Card from '@/components/ui/card/Card'
import { TrainingDay } from '@/programs/types/training.types'
import css from './ProgramDayCard.module.scss'
import { exercisesList } from '@/programs/exercises-list'
import Badge from '@/components/ui/badge/Badge'
import { getTrainingLevel, getTrainingLevelVariant } from '@/programs/helpers/calculate-training-load'
import { trainingLevelDescription } from '@/programs/constants/training-level-description'
import ExerciseSetPreview from './ExerciseSetPreview'
import { weekDays } from '@/config/week-days'


interface Props {
  day: TrainingDay
}

export default function ProgramDayCard({ day }: Props) {
  const dayTotalTraining = day.exercises.length
  const levelDay = getTrainingLevel(day)
  const description = trainingLevelDescription[levelDay]
 
  const dayLabel = weekDays[day.day] ?? `День ${day.day}` 

  return (
    <Card className={css.card}>
         <header className={css.header}>
           <div className={css.headerTop}>
             <span className={css.title}> {dayLabel} <span className={css.dayNumber}>(День {day.day})</span></span>

             <Badge border variant={getTrainingLevelVariant(levelDay)}>
               {levelDay}
             </Badge>
           </div>

           <div className={css.summary}>
             <span>{dayTotalTraining} упражнений</span>
             <span>{description}</span>
           </div>
         </header>

         <div className={css.exerciseList}>
           {day.exercises.map((exercise, index) => {
             const exerciseMeta = exercisesList.find(
               (item) => item.id === exercise.exerciseId
             )

      return (
        <div
          key={`${exercise.exerciseId}-${index}`}
          className={css.exerciseItem}
        >
          <div className={css.exerciseIndex}>
            {index + 1}
          </div>

          <div className={css.exerciseContent}>
            <h6 className={css.exerciseName}>
              {exerciseMeta?.name ?? exercise.exerciseId}
            </h6>

            <ExerciseSetPreview sets={exercise.sets} />

            {exercise.comment && (
              <p className={css.exerciseComment}>
                {exercise.comment}
              </p>
            )}
          </div>
        </div>
      )
    })}
  </div>
</Card>
  )
}