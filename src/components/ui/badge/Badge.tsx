import { ReactNode } from "react"
import css from './Badge.module.scss'
import clsx from "clsx"

type VariantColor = 'green' | 'red' | 'default'

interface Props{
    children: ReactNode
    variant?: VariantColor
}

export default function Badge({children, variant='default'}: Props) {
    return (
        <div className={clsx(css.badge, css[`badge--${variant}`])}>
            <span>{children}</span>
        </div>
    )
}
