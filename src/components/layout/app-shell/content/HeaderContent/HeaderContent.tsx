
import css from './HeaderContent.module.scss'
import { IconCloseToOpen } from "../../IconCloseToOpen/IconCloseToOpen";
interface Props {
    toggleSidebar: () => void
}


export function HeaderContent({toggleSidebar}: Props) {
    return (
        <header className={css.headerContentBlock}>
             <IconCloseToOpen toggleSidebar={toggleSidebar} /> 
        </header>
    )
}
