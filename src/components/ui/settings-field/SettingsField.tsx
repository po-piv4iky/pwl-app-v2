import { ReactNode } from 'react'
import css from './SettingsField.module.scss'
import Card from '@/components/ui/card/Card'

interface Props {
  title: string
  children: ReactNode
  className?: string
}

export default function SettingsField({ title, children, className }: Props) {
  return (
    <Card className={className}>
      <div className={css.field}>
        {title && (
          <div className={css.field__header}>
            <h6>{title}</h6>
          </div>
        )}

        <div className={css.field__content}>
          {children}
        </div>
      </div>
    </Card>
  )
}