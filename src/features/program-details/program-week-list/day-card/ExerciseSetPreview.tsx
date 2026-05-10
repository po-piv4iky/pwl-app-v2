import clsx from 'clsx'
import css from './ExerciseSetPreview.module.scss'
import { ExerciseSet } from '@/programs/types/exercises.types'

interface Props {
  sets: ExerciseSet[]
}

export default function ExerciseSetPreview({ sets }: Props) {
  const workSet = sets.filter(set => !set.isWarmUp)
  return (
    <div className={css.sets}>
      {workSet.map((set, index) => {
        const repeat = set.repeat ?? 1
        const hasPercent = typeof set.percent === 'number'

        return (
          <span
            key={index}
            className={clsx(css.set)}
          >
            {hasPercent && (
              <span className={css.percent}>{set.percent}% ×</span>
            )}

            <span className={css.reps}>{set.reps}</span>

            {repeat > 1 && (
              <span className={css.repeat}>× {repeat}</span>
            )}
          </span>
        )
      })}
    </div>
  )
}