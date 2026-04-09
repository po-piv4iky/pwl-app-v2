import { SessionSet, useActiveProgramStore } from "@/store/active-program.store"
import css from './SessionSetItem.module.scss'

interface Props {
    item: SessionSet
    exerciseIndex: number
}

export default function SessionSetItem({ item, exerciseIndex }: Props) {

    const startRestTimer = useActiveProgramStore(s => s.startRestTimer)
    const toggleSetCompletion = useActiveProgramStore(s => s.toggleSetCompletion)

    return (
        <div className={css['session-set']}>

            <label className={css['session-set__checkbox-wrapper']}>
                <input
                    type='checkbox'
                    checked={item.isCompleted}
                    onChange={() => {
                       toggleSetCompletion(exerciseIndex, item.id)
                       if (!item.isCompleted) {
                          startRestTimer(120) // 2 минуты
                       }
                    }}
                    className={css['session-set__checkbox-input']}
                />
                <span className={css['session-set__checkbox-custom']} />
            </label>

            <div className={css['session-set__content']}>
                <h6 className={css['session-set__title']}>
                    Подход {item.setNumber}
                </h6>

                <span className={css['session-set__subtitle']}>
                    Цель: {item.targetReps} повторений @ {item.targetWeight}кг {item.intensity}%
                </span>

                <div className={css['session-set__inputs']}>
                    <input placeholder='50' />
                    <span>кг ×</span>
                    <input placeholder='10' />
                    <span>повт.</span>
                </div>
            </div>

        </div>
    )
}
