import { ReactNode } from "react"
import css from './Content.module.scss'
import { HeaderContent } from "./HeaderContent/HeaderContent"

type Props = {
    children: ReactNode
    toggleSidebar: () => void;
}

export function Content({children, toggleSidebar}: Props) {
    return (
        <div className={css.contentWrapper}>
            <HeaderContent toggleSidebar={toggleSidebar} />
            <section className={css.contentBlock}>
                {children}
            </section>
        </div>
    )
}
