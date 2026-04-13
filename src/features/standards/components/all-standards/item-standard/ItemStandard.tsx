import Card from '@/components/ui/card/Card'
import css from './ItemStandard.module.scss'
import clsx from 'clsx'
import { Trophy } from 'lucide-react'

interface Props {
  level: string
  standard: number
  index: number
  isCompleted: boolean
  isCurrent: boolean
}

const levelColorMap: Record<string, string> = {
  'Элита': css.elite,
  'Мастер': css.master,
  'Продвинутый': css.advanced,
  '1 уровень': css.level1,
  '2 уровень': css.level2,
  '3 уровень': css.level3,
  'Начальный': css.beginner,
}

export default function ItemStandard({
  standard,
  level,
  index,
  isCompleted,
  isCurrent,
}: Props) {
  return (
    <Card
      direction='row'
      className={clsx(
        css.itemStandard,
        isCompleted && css.itemStandard_completed,
        isCurrent && css.itemStandard_current
      )}
    >
      <div className={css.itemStandard__left}>
        <span className={clsx(css.itemStandard__circle, levelColorMap[level])}>
          {index + 1}
        </span>

        <div className={css.itemStandard__levelBlock}>
          <span className={css.itemStandard__level}>
            {level}
          </span>

          {isCurrent && (
            <span className={css.itemStandard__subLevel}>
              Ваш текущий уровень
            </span>
          )}
        </div>
      </div>

      <div className={css.itemStandard__right}>
        <span className={css.itemStandard__value}>
          {standard} кг
        </span>

        {isCompleted && !isCurrent && (
          <Trophy className={css.itemStandard__iconCompleted} />
        )}

        {isCurrent && (
          <Trophy className={css.itemStandard__iconCurrent} />
        )}
      </div>
    </Card>
  )
}