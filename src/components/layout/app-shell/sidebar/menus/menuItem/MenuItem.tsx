import Link from "next/link"
import { ISidebarItem } from "../sidebar.type"
import css from './MenuItem.module.scss'
import cn from 'clsx'

interface Props {
    elMenu: ISidebarItem
    isActive: boolean
}

export function MenuItem({elMenu, isActive}: Props) {
    return (
        <li>
            <Link href={elMenu.link} className={css.menuItemBlock}>
            <elMenu.icon className={cn(css.icon, 
            isActive && "text-red-600")} />
            <span className={css.text}>{elMenu.label}</span>
            </Link>
        </li>
    )
}
