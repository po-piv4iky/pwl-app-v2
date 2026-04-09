import { Logo } from "./headerLogo/Logo";
import css from './HeaderSidebar.module.scss'



export function HeaderSidebar() {
    return (
         <div className={css.header}>
            <div className={css.logoCracked}>
               <Logo />
            </div>
            <div className={css.spanBlock}>
                <h4>Power-Lifting</h4>
                <h6 className={css.titlePower}>Тренировки</h6>
            </div>
        </div>
    )
}