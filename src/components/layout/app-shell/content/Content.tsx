import { ReactNode } from "react"
import css from './Content.module.scss'
import { HeaderContent } from "./HeaderContent/HeaderContent"

type Props = {
    children: ReactNode
    toggleSidebar: () => void;
}

export function Content({children, toggleSidebar}: Props) {
    return (
        <div 
           style={{
            flex: '1 1 0%'
        }}
        >
            <HeaderContent toggleSidebar={toggleSidebar} />
            <section className={css.contentBlock}>
                {children}
            </section>
        </div>
    )
}
