import { PanelLeft } from "lucide-react";
import css from './IconCloseToOpen.module.scss'

export function IconCloseToOpen({toggleSidebar}: {toggleSidebar: () => void}) {

    return(
        <button 
              onClick={toggleSidebar}
              className={css.button}
            >
                <PanelLeft />
        </button>
    )
}