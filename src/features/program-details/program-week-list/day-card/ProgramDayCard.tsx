import Card from '@/components/ui/card/Card'
import { TrainingDay } from '@/programs/types/training.types'
import css from './ProgramDayCard.module.scss'
import { exercisesList } from '@/programs/exercises-list'
import { formatExercisePreview } from '@/programs/helpers/format-exercise-scheme'
import Badge from '@/components/ui/badge/Badge'

interface Props {
  day: TrainingDay
}

export default function ProgramDayCard({ day }: Props) {
  const dayTotalTraining = day.exercises.length
  let levelDay
  switch(dayTotalTraining){
     case 4 levelDay = 'лёгкая'
  }
  

  return (
    <Card className={css.dayCard}>
      <header className={css.dayHeader}>
        <div className={css.dayInfo}>
          <span className={css.dayTitle}>День {day.day}</span>
          <span className={css.dayMeta}>
            {dayTotalTraining} упражнений • {levelDay}
          </span>
        </div>

        <Badge border variant={levelDay === 'лёгкая' ? 'green' : 'red'}>{levelDay}</Badge>
      </header>

      <div className={css.exerciseList}>
        {day.exercises.map((exercise, index) => {
          const exerciseMeta = exercisesList.find(
            (item) => item.id === exercise.exerciseId
          )

          const preview = formatExercisePreview(exercise.sets)

          return (
            <div
              key={`${exercise.exerciseId}-${index}`}
              className={css.exerciseItem}
            >
              <h6 className={css.exerciseName}>
                {exerciseMeta?.name ?? exercise.exerciseId}
              </h6>

              <p className={css.exerciseScheme}>
                {preview}
              </p>

              {exercise.comment && (
                <p className={css.exerciseComment}>
                  {exercise.comment}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </Card>
  )
}