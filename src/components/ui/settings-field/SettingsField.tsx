import { ReactNode } from 'react'
import css from './SettingsField.module.scss'

interface Props {
    title: string
    children: ReactNode
}

export default function SettingsField({title, children}: Props) {
    return (
        <div className={css.field}>
            <div className={css.header}>
                {title && <h6>{title}</h6>}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
