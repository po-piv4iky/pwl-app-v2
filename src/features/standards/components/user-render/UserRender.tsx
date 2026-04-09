import { Calendar, User, Weight } from 'lucide-react'

import Button from '@/components/ui/button/Button'
import { useStandartUserStore } from '@/store/user-standart.store'

import css from './UserRender.module.scss'

export default function UserRender() {
  const { gender, age, weight, reset } = useStandartUserStore()

  return (
    <div className={css.userCard}>
      <div className={css.userCardInfo}>
        <div className={css.userCardItem}>
          <User className={css.userCardIcon} />
          <span>{gender}</span>
        </div>

        <div className={css.userCardItem}>
          <Calendar className={css.userCardIcon} />
          <span>{age} лет</span>
        </div>

        <div className={css.userCardItem}>
          <Weight className={css.userCardIcon} />
          <span>{weight} кг</span>
        </div>
      </div>

      <Button variant='ghost' onClick={reset} className={css.userCardButton}>
        Изменить
      </Button>
    </div>
  )
}
