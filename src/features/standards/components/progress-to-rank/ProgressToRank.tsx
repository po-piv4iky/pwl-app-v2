import { Award } from 'lucide-react'
import css from './ProgressToRank.module.scss'
import { AthleteLevelResult } from '../../types/standart.types'
import ProgressBar from "@/components/ui/progress-bar/ProgressBar"

interface Props {
  athleteLevel: AthleteLevelResult
}

const liftTitles = {
  total: 'Сумма троеборья',
  bench: 'Жим лёжа',
  squat: 'Присед',
  deadlift: 'Становая тяга',
} as const

export default function ProgressToRank({ athleteLevel }: Props) {
  const liftTitle = liftTitles[athleteLevel.mode]

  return (
    <div className={css.progress}>
      <div className={css.progress__top}>
        <div className={css.progress__info}>
          <div className={css.progress__titleRow}>
            <Award className={css.progress__icon} />
            <h6>Ваш текущий разряд</h6>
          </div>

          <p className={css.progress__subtitle}>
            {liftTitle}: {athleteLevel.athleteResult}
          </p>
        </div>

        <div className={css.progress__rank}>
          {athleteLevel.currentLevel}
        </div>
      </div>

      <div className={css.progress__bottom}>
        <ProgressBar
          valueLabel={`Осталось: ${athleteLevel.progressToNextKg} кг`}
          title={`Прогресс до ${athleteLevel.nextLevel}`}
          size="sm"
        />

        <div className={css.progress__details}>
          <div className={css.progress__detailItem}>
            <span className={css.progress__detailLabel}>
              Следующий разряд
            </span>
            <h5 className={css.progress__detailValue}>
              {athleteLevel.nextLevel}
            </h5>
          </div>

          <div className={css.progress__detailItem}>
            <span className={css.progress__detailLabel}>
              Требуется
            </span>
            <h5 
              className={css.progress__detailValue}
              data-variant="accent"
            >
              {athleteLevel.nextStandard} кг
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}