import { Flame } from 'lucide-react'
import { useUserMaxesStore, LiftType } from '@/store/maxes.store'
import { calcWarmup } from '@/lib/calcWarmup'
import css from './WarmUp.module.scss'

interface Props {
  lift: LiftType
  variant?: 'session' | 'plan'
}

export default function WarmUp({ lift, variant = 'session' }: Props) {
  const max = useUserMaxesStore(s => s.maxes[lift])

  const percentScheme = [
    { percent: 0.4, reps: 8 },
    { percent: 0.5, reps: 6 },
    { percent: 0.6, reps: 4 },
  ]

  if (variant === 'plan') {
    return (
    <div className={`${css.warmup} ${css['warmup--plan']}`}>
        <div className={css.warmup__header}>
          <Flame />
          <span>Разминка</span>
        </div> 

      {percentScheme.map((item, index) => (
        <div key={index} className={css.warmup__item}>
          <span>{item.reps} повторений</span>
          
          <span className={css.warmup__multiplier}>×</span>

          <div className={css.warmup__value}>
            <span className={css.warmup__weight}>
              {item.percent * 100}% от максимума
            </span>
          </div>
        </div>
      ))}
    </div>
    )
  }

  // session mode
  const warmUpSets = calcWarmup(max)

  return (
    <div className={`${css.warmup} ${css['warmup--session']}`}>
      <div className={css.warmup__header}>
      <Flame size={18} />
      <span>Разминка</span>
    </div>

  {warmUpSets.map(item => (
    <div key={item.set} className={css.warmup__item}>
      <span>Подход {item.set}</span>

      <div className={css.warmup__value}>
        <span>{item.reps} повторений</span>
        <span className={css.warmup__multiplier}>×</span>
        <span className={css.warmup__weight}>{item.weight} кг</span>
      </div>
    </div>
  ))}
</div>
  )
}