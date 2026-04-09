import { ReactNode } from 'react'

import css from './Button.module.scss'

type ButtonVariant = 'primary' | 'ghost'

type Props = {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: ButtonVariant
}

export default function Button({
  children,
  className = '',
  onClick,
  variant = 'primary',
}: Props) {
  const variantClass =
    variant === 'ghost' ? css.variantGhost : css.variantPrimary

  return (
    <button
      className={`${css.button} ${variantClass} ${className}`.trim()}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )
}
