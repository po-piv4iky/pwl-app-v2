import { TrainingWeek } from "@/config/programs/types/trainingWeek"
import ProgramDayCard from "./day-card/ProgramDayCard"
import css from './ProgramWeekCard.module.scss'

interface Props { 
    week: TrainingWeek
}

export default function ProgramWeekCard({week}: Props) {
    return (
        <section className={css.weekCard}>
            <div className={css.weekHeader}>

                <div className={css.weekInfo}>
                    <div className={css.numberWeek}>
                        {week.week} 
                    </div>
                    <span className="font-semibold text-2xl">Неделя</span>
                </div>

                <span className="opacity-60">{week.days.length} тренировки</span>
            </div>
            <div className={css.daysGrid}>
                {week.days.map(day => (
                    <ProgramDayCard key={day.day} day={day}/>
                ))}
            </div>
        </section>
    )
}
