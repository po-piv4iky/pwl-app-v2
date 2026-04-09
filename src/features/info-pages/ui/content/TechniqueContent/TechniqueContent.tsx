import { Dot, ShieldPlus } from 'lucide-react'
import { techniqueExercises } from './data'
import css from './TechniqueContent.module.scss'
import cn from 'clsx'

export function TechniqueContent() {
    const data = techniqueExercises
    return (
        <div className={css.technique}>
            <div className={css.techniqueHeader}>
                <ShieldPlus className={css.techniqueHeaderIcon}/>
                <h5>Техника выполнения упражнений</h5>
            </div>

            <div className={css.techniqueList}>
                {data.map((techniqueItem, index) => (
                    <div
                      key={techniqueItem.id}
                      className={cn(css.techniqueCard, css[`techniqueCardVariant${index}`])}
                    >
                        <div className={css.techniqueCardHeader}>
                            <h6>{techniqueItem.name}</h6>
                            <p>{techniqueItem.title}</p>
                        </div>

                        <ul className={css.techniqueCardList}>
                            {techniqueItem.tips.map(string => (
                                <li key={string} className={css.techniqueCardItem}>
                                    <Dot className={css.techniqueCardIcon}/>
                                    {string}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
