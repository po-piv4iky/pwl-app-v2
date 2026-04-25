import clsx from 'clsx'
import css from './ProgressBar.module.scss'

interface ProgressBarProps {
  title?: string
  current: number // текущий
  target: number // цель
  valueLabel?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function ProgressBar({
  title,
  current,
  target,
  valueLabel,
  size = 'lg',
  className,
}: ProgressBarProps) {
  const safeCurrent = Math.max(0, current)
  const safeTarget = Math.max(1, target)

  const percent = Math.min((safeCurrent / safeTarget) * 100, 100)
  const remaining = Math.max(target - current, 0)

  return (
    <div className={css.progressBarContainer}>
      { title && 
       <div className={css.titleBlock}>
        <h5 className={css.title}>{title}</h5>
        <span>{valueLabel ?? `Осталось: ${remaining} кг`}</span>
      </div>
      }

      <div
        className={clsx(
          css.progressBar,
          css[`progressBar--${size}`],
          className
        )}
      >
        <div
          className={css.fill}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}