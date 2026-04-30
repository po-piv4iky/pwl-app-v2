import { ReactNode } from "react"
import css from './Badge.module.scss'
import clsx from "clsx"

type VariantColor = 'green' | 'red' | 'yellow' | 'default'

interface Props{
    children: ReactNode
    variant?: VariantColor
    border?: boolean
}

export default function Badge({children, variant='default', border}: Props) {
    return (
        <div 
          className={clsx(
              css.badge, 
              css[`badge--${variant}`], 
              { [css.border]: border }
            )}
        >
            <span>{children}</span>
        </div>
    )
}
