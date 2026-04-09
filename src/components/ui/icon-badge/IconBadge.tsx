import { LucideIcon } from "lucide-react"
import css from './IconBadge.module.scss'
import clsx from "clsx"

interface Props { 
    className?: string
    icon: LucideIcon
}

export default function IconBadge({className, icon: Icon}: Props) {
    return (
        <div className={clsx(css.iconContainer, className)}>
            <Icon className={css.icon} />
        </div>
    )
}
