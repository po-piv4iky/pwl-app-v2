import { Flame } from 'lucide-react'
import css from './WarmUp.module.scss'
import { SessionWarmUpSet } from '@/store/active-program/types'

interface Props {
  variant?: 'session' | 'plan'
  warmUp: SessionWarmUpSet[]
  exerciseName: string
}

export default function WarmUp({ variant = 'session', warmUp, exerciseName }: Props) {
  if (warmUp.length === 0) return null

  return (
    <div className={`${css.warmup} ${css[`warmup--${variant}`]}`}>
      <div className={css.warmup__header}>
        <div><Flame size={18} />
          <span>Разминка</span>
        </div>
        <span>{exerciseName}</span>
      </div>

      {warmUp.map((item) => (
        <div key={item.setNumber} className={css.warmup__item}>
          <span>Подход {item.setNumber}</span>

          <div className={css.warmup__value}>
            <span>{item.targetReps} повторений</span>

            <span className={css.warmup__multiplier}>×</span>

            {variant === 'session' ? (
              <span className={css.warmup__weight}>
                {item.targetWeight} кг
              </span>
            ) : (
              <span className={css.warmup__weight}>
                {item.intensity ?? 0}% от максимума
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}