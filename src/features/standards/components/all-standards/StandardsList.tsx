import Card from '@/components/ui/card/Card'
import css from './StandardsList.module.scss'
import { AthleteLevelResult } from '../../types/standard.types'
import { TrendingUp } from 'lucide-react'
import { StandardsListMap } from '../../lib/get-standards-list'
import { levelsDescending } from '@/config/levels/levels'
import ItemStandard from './item-standard/ItemStandard'


interface Props {
  athleteLevel: AthleteLevelResult
  standards: StandardsListMap
}

const liftTitles = {
  total: 'Сумма троеборья',
  bench: 'Жим лёжа',
  squat: 'Присед',
  deadlift: 'Становая тяга',
} as const

export default function StandardsList({
  athleteLevel,
  standards
}: Props) {
  const liftTitle = liftTitles[athleteLevel.mode]
  
  return (
    <Card className={css.standardsList}>

      <div className='flex gap-6 items-center'>
        <TrendingUp />
        <header>Все нормативы ({liftTitle})</header>
      </div>

      <div className='flex flex-col gap-3.5'>
        {levelsDescending.map((level , index) => {
          const standard = standards[level]

          const isCompleted = athleteLevel.athleteResult >= standard
          const isCurrent = athleteLevel.currentLevel === level

          return (
            <ItemStandard 
              key={level}
              level={level}
              index={index}
              standard={standard}
              isCompleted={isCompleted}
              isCurrent={isCurrent}
            />
          )
        })}
      </div>

    </Card>
  )
}