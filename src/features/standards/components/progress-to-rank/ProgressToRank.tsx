import { Award } from 'lucide-react'
import css from './ProgressToRank.module.scss'
import { AthleteLevelResult } from '../../types/standart.types'
import ProgressBar from '../../../../components/ui/progress-bar/ProgressBar';

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

      <div className={css.progressHeader}>

        <div className={css.progressLeftSide}>
          <div className={css.progressLeftSideTitle}>
            <Award />
            <h6>Ваш текущий разряд</h6>
          </div>

          <p className={css.progressLeftSideSubTitle}>
              {liftTitle}: {athleteLevel.athleteResult}
          </p>
        </div>

        <div className={css.progressRank}>
          {athleteLevel.currentLevel}
        </div>
      </div>

        <ProgressBar 
          valueLabel={`Осталось: ${athleteLevel.progressToNextKg}.0 кг`} 
          title={`Прогресс до ${athleteLevel.nextLevel}`}
          size='sm'
        />

        <div className='flex justify-between'>
          <div className='flex-col'>
            <span>
              Следующий разряд 
            </span>
            <h5>{athleteLevel.nextLevel}</h5>
          </div>

          <div>
            <span>Требуется</span>
            <h5></h5>
          </div>
        </div>
     
    </div>
  )
}