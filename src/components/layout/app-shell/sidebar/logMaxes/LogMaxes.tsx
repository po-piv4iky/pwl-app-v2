import cn from 'clsx'

import { useUserMaxesStore } from '@/store/maxes.store'

import css from './LogMaxes.module.scss'

interface Props {
  show: boolean
}

export default function LogMaxes({ show }: Props) {
  const maxes = useUserMaxesStore((state) => state.maxes)

  const items = [
    { key: 'bench', label: 'Жим лёжа', value: maxes.bench },
    { key: 'squat', label: 'Присед', value: maxes.squat },
    { key: 'deadlift', label: 'Становая тяга', value: maxes.deadlift },
  ].filter((item) => item.value !== 0)

  if (!items.length) return null

  return (
    <div className={cn(css.logBlock, { [css.visible]: show })}>
      <h6>Максимумы</h6>
      <ul className={css.itemsBlock}>
        {items.map((item) => (
          <li key={item.key}>
            <span>{item.label}:</span>
            <strong className={css.valueMax}>{item.value} кг</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}
