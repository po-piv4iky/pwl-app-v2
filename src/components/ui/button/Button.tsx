import clsx from 'clsx'
import css from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'solid' | 'ghost' | 'outline'
type ButtonColor = 'primary' | 'success' | 'warning' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
}

export default function Button({
  children,
  className,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={clsx(
        css.button,
        css[`button--${variant}`],
        css[`button--${color}`],
        css[`button--${size}`],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}