import clsx from 'clsx'
import css from './Container.module.scss'
import { ReactNode } from 'react'

type Size = 'default' | 'wide' | 'classic' | 'narrow' | 'full'

interface Props {
  children: ReactNode
  className?: string
  size?: Size
}

export default function Container({
  children,
  className,
  size = 'default'
}: Props) {
  return (
    <div
      className={clsx(
        css.container,
        css[`container--${size}`],
        className
      )}
    >
      {children}
    </div>
  )
}