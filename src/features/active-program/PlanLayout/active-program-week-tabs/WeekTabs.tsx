import css from "./WeekTabs.module.scss"
import { Circle, CheckCircle } from "lucide-react"
import clsx from "clsx"
import { useActiveProgramStore } from "@/store/active-program.store"


export default function WeekTabs() {
  const { activeProgram, setCurrentWeek } = useActiveProgramStore()
  if(!activeProgram) return null

  const { program, currentWeek, completedDays } = activeProgram
  const weeks = program.weeks

  return (
    <section className={css.weeksTabsContainer}>
      <h5>Выберите неделю</h5>

      <div className={css.buttonsContainer}>
        {weeks.map((week) => {
          const weekNumber = week.weekNumber
          const isActive = weekNumber === currentWeek
          const completedWorkouts = completedDays.filter(item => item.week === weekNumber).length
          const totalWorkouts = week.trainingDays.length
          
          const isCompletedWeek = completedWorkouts === totalWorkouts
          return (
            <button
              key={weekNumber}
              onClick={() => setCurrentWeek(weekNumber)}
              className={clsx(
              css.buttonWeek,
              isActive && css.active,
              )}
            >
              <div className={css.iconAndWeekBlock}>
                {isCompletedWeek ? <CheckCircle /> : <Circle />}
                <span>Неделя {week.weekNumber}</span>
              </div>

              <span className={css.progress}>
                {completedWorkouts}/{totalWorkouts} завершено
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}



