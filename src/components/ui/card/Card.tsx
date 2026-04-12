import clsx from 'clsx'
import css from './Card.module.scss'
import { ReactNode } from 'react'

type CardVariant = 'default' | 'success' | 'warning' | 'danger'
type CardBorder = 'solid' | 'dashed' | 'none'
type CardSize = 'sm' | 'md' | 'lg'
type CardDirection = 'row' | 'column'

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  border?: CardBorder
  className?: string
  size?: CardSize
  direction?: CardDirection
}

export default function Card({
  children,
  className,
  variant = 'default',
  border = 'solid',
  size = 'md',
  direction = 'column',
}: CardProps) {
  return (
    <div
      className={clsx(
        css.card,
        css[`card--${variant}`],
        css[`card--${size}`],
        css[`card--border-${border}`],
        css[`card--direction-${direction}`],
        className
      )}
    >
      {children}
    </div>
  )
}