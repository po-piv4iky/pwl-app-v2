import css from './TabButton.module.scss'
import cn from 'clsx'


interface Props {
    label: string
    onClick: () => void
    active: boolean
}

export default function TabButton({label, onClick, active}: Props) {
    return (
        <button 
          className={cn(css.tabButton, {
            [css.active]: active
          })}
          onClick={onClick}
        >
            {label}
        </button>
    )
}
