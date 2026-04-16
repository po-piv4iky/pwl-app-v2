import { TrainingWeek } from "@/programs/types/training.types"
import ProgramDayCard from "./day-card/ProgramDayCard"
import css from './ProgramWeekCard.module.scss'

interface Props { 
    week: TrainingWeek
}
// { weekNumber: 1, trainingDays: [Array] }
// [
//   { day: 1, exercises: [ [Object] ] },
//   { day: 3, exercises: [ [Object] ] },
//   { day: 6, exercises: [ [Object] ] }
// ]

export default function ProgramWeekCard({week}: Props) {

    return (
        <section className={css.weekCard}>
            <div className={css.weekHeader}>

                <div className={css.weekInfo}>
                    <div className={css.numberWeek}>
                        {week.weekNumber} 
                    </div>
                    <span className="font-semibold text-2xl">Неделя</span>
                </div>

                <span className="opacity-60">{week.trainingDays.length} тренировки</span>
            </div>
            <div className={css.daysGrid}>
                {week.trainingDays.map((day, index) => (
                    <ProgramDayCard key={index} day={day}/>
                ))}
            </div>
        </section>
    )
}
