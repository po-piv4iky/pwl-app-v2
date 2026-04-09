import { Award } from 'lucide-react'
import css from './ProgressToRank.module.scss'
import { LiftMode } from '../../types/standart.types'

export type CalculateAthleteLevelResult = {
  currentLevel: string
  athleteResult: number
  nextLevel?: string | null
  progressPercent?: number
}

interface Props {
  mode: LiftMode
  athleteLevel: CalculateAthleteLevelResult
}

const liftTitles: Record<LiftMode, string> = {
  total: 'Сумма троеборья',
  bench: 'Жим лёжа',
  squat: 'Присед',
  deadlift: 'Становая тяга',
}

export default function ProgressToRank({ mode, athleteLevel }: Props) {
  const liftTitle = liftTitles[mode]

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
