import clsx from 'clsx'
import css from './Stack.module.scss'
import { ReactNode } from 'react'

type Gap = 's' | 'm' | 'l'

interface Props {
  children: ReactNode
  gap?: Gap
  padding?: boolean
  className?: string
}

export default function Stack({
  children,
  gap = 'm',
  padding = false,
  className
}: Props) {
  return (
    <div
      className={clsx(
        css.stack,
        css[`gap-${gap}`],
        {
          [css.padding]: padding
        },
        className
      )}
    >
      {children}
    </div>
  )
}