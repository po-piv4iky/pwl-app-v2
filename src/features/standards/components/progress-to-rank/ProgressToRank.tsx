import { Award } from 'lucide-react'
import css from './ProgressToRank.module.scss'
import { AthleteLevelResult } from '../../types/standart.types'

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
      <div className='flex justify-between items-center'>
        <div className='flex gap-6 items-center'>
          <Award />
          <h6>Ваш текущий разряд</h6>
        </div>

        <div className='color-white text-sm'>
          {athleteLevel.currentLevel}
        </div>
      </div>

      <p>
        {liftTitle}: {athleteLevel.athleteResult}
      </p>
    </div>
  )
}