import { ReactNode } from "react"
import css from "./Button.module.scss"

type Props = {
    children: ReactNode 
    className?: string
    onClick?: () => void
}

export default function Button({children, className, onClick}: Props) {
    return (
        <button 
          className={`${css.button} ${className}`}
          onClick={onClick}
          type="button"
        >
            {children}
        </button>
    )
}
