'use client'

import { ArrowLeft, LucideIcon } from 'lucide-react'
import css from './NoField.module.scss'
import Button from '../ui/button/Button'
import { useRouter } from 'next/navigation'

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
    <div className={css.field}>
      <Icon className={css.icon} size={32} />

      <h6>{title}</h6>
      <p>{description}</p>

      {showButton && buttonHref && (
        <Button
          onClick={handleClick}
          className='flex items-center gap-4'
        >
          <ArrowLeft />
          <span>{buttonText}</span>
        </Button>
      )}
    </div>
  )
}