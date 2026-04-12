'use client'

import { ArrowLeft, LucideIcon } from 'lucide-react'
import css from './NoField.module.scss'
import Button from '../ui/button/Button'
import { useRouter } from 'next/navigation'
import Card from '@/components/ui/card/Card'

interface Props {
  icon: LucideIcon
  title: string
  description: string
  showButton?: boolean
  buttonText?: string
  buttonHref?: string
}

export default function NoField({
  icon: Icon,
  title,
  description,
  showButton,
  buttonText = 'Перейти',
  buttonHref
}: Props) {
  const router = useRouter()

  const handleClick = () => {
    if (buttonHref) {
      router.push(buttonHref)
    }
  }

  return (
    <Card border='dashed' size="sm" className={css.noField}>
      <Icon className={css.noField__icon} size={32} />

      <h6>{title}</h6>
      <p className={css.noField__description}>{description}</p>

      {showButton && buttonHref && (
        <Button
          onClick={handleClick}
          className={css.noField__button}
        >
          <ArrowLeft />
          <span>{buttonText}</span>
        </Button>
      )}
    </Card>
  )
}