import clsx from 'clsx'
import css from './ExerciseSetPreview.module.scss'
import { ExerciseSet } from '@/programs/types/exercises.types'

interface Props {
  sets: ExerciseSet[]
}

export default function ExerciseSetPreview({ sets }: Props) {
  return (
    <div className={css.sets}>
      {sets.map((set, index) => {
        const repeat = set.repeat ?? 1
        const hasPercent = typeof set.percent === 'number'

        return (
          <span
            key={index}
            className={clsx(
              css.set,
              set.isWarmUp ? css.setWarmUp : css.setWork
            )}
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