import { useActiveProgramStore } from "@/store/active-program.store"
import { Circle } from "lucide-react"
import css from './TrainingPlanSession.module.scss'

export default function TrainingPlanSession() {

    const exercises = useActiveProgramStore(
        s => s.activeProgram?.trainingState.currentSession?.exercises
    )

    return (
        <div className={css['plan-training']}>

            <h5 className={css['plan-training__title']}>
                План тренировки
            </h5>

            <div className={css['plan-training__list']}>
                {exercises?.map((item, index) => {
                    const sets = item.sets.length
                    const rep = item.sets[0].targetReps

                    return (
                        <div
                            key={index}
                            className={css['plan-training__item']}
                        >
                            <div className={css['plan-training__item-left']}>
                                <Circle size={18} />
                                <div className={css['plan-training__item-info']}>
                                    <h6 className={css['plan-training__item-title']}>
                                        {item.name}
                                    </h6>
                                    <span className={css['plan-training__item-meta']}>
                                        {sets} × {rep}
                                    </span>
                                </div>
                            </div>

                            <div className={css['plan-training__item-progress']}>
                                <span>4/4</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

