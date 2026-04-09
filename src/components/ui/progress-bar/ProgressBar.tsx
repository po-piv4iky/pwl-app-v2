import clsx from 'clsx'
import css from './ProgressBar.module.scss'

interface ProgressBarProps {
  percent?: number
  title: string
  valueLabel?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function ProgressBar({
  percent,
  title,
  valueLabel,
  size = 'lg',
  className,
}: ProgressBarProps) {
  return (
    <div className={css.progressBarContainer}>
      <div className={css.titleBlock}>
        <h5 className="opacity-60">{title}</h5>
        <span>{valueLabel ?? `${percent}%`}</span>
      </div>

      <div
        className={clsx(
          css.progressBar,
          css[`progressBar--${size}`], // 👈 вот это главное
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
