import { Calendar, User, Weight } from 'lucide-react'

import Button from '@/components/ui/button/Button'
import Card from '@/components/ui/card/Card'
import { useStandartUserStore } from '@/store/user-standart.store'

import css from './UserRender.module.scss'

export default function UserRender() {
  const { gender, age, weight, reset } = useStandartUserStore()

  return (
    <Card size="sm" direction='row' className={css.userCard}>
      <div className={css.userCard__info}>
        <div className={css.userCard__item}>
          <User className={css.userCard__icon} />
          <span>{gender}</span>
        </div>

        <div className={css.userCard__item}>
          <Calendar className={css.userCard__icon} />
          <span>{age} лет</span>
        </div>

        <div className={css.userCard__item}>
          <Weight className={css.userCard__icon} />
          <span>{weight} кг</span>
        </div>
      </div>

      <Button
        variant="ghost"
        color="primary"
        onClick={reset}
        className={css.userCard__button}
      >
        Изменить
      </Button>
    </Card>
  )
}