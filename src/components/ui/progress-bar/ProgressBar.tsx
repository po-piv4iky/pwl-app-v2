import css from './ProgressBar.module.scss'

interface ProgressBarProps {
  percent?: number // от 0 до 100
}

export default function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className={css.progressBarContainer}>
     <div className={css.titleBlock}>
      <h5 className="opacity-60">Прогресс программы</h5>
      <span>{percent}%</span>
     </div>
     <div className={css.progressBar}></div>
    </div>
  )
}
