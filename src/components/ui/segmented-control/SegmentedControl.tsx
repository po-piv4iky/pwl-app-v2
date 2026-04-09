import { LiftMode } from '@/features/standards/types/standart.types'

import Button from '../button/Button'

import css from './SegmentedControl.module.scss'

interface Option {
  label: string
  value: LiftMode
}

interface Props {
  value: LiftMode
  options: Option[]
  onChange: (value: LiftMode) => void
}

export default function SegmentedControl({ options, value, onChange }: Props) {
  const activeIndex = Math.max(
    options.findIndex((item) => item.value === value),
    0
  )

  return (
    <div
      className={css.segmentedControl}
      style={{
        ['--segments-count' as string]: options.length,
        ['--active-index' as string]: activeIndex,
      }}
    >
      <span className={css.indicator} aria-hidden='true' />

      {options.map((item) => (
        <Button
          key={item.value}
          variant='ghost'
          onClick={() => {
            onChange(item.value)
          }}
          className={`${css.button} ${value === item.value ? css.active : ''}`}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}
