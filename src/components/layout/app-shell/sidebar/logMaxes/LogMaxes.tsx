import { useUserMaxesStore } from "@/store/maxes.store"
import css from './LogMaxes.module.scss'
import cn from "clsx"

interface Props {
    show: boolean;
}

export default function LogMaxes({show}: Props) {

    const { maxes } = useUserMaxesStore()

    const items = [
        {key: 'bench', label: 'Жим лёжа', value: maxes.bench},
        {key: 'squat', label: 'Становая', value: maxes.squat},
        {key: 'deadlift', label: 'Присед', value: maxes.deadlift}
    ].filter(item => item.value !== 0)

    if(!items.length) return null

    return (
        <div className={cn(
             css.logBlock,
             { [css.visible]: show }
        )}>
            <h6>Максимумы</h6>
            <ul className={css.itemsBlock}>
                {items.map(item => (
                    <li 
                      key={item.key}
                    >
                        <span>{item.label}:</span>
                        <strong className={css.valueMax}>{item.value} кг</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}
