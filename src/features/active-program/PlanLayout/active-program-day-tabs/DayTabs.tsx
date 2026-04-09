'use client'

import { useActiveProgramStore } from "@/store/active-program.store"
import { RestDay } from "./rest-day/RestDay"
import TrainingDay from "./training-day/TrainingDay"
import css from "./DayTabs.module.scss"

export default function DayTabs() {
  // правильные подписки на store (меньше ререндеров)
  const activeProgram = useActiveProgramStore(s => s.activeProgram)
  const getWeekSchedule = useActiveProgramStore(s => s.getWeekSchedule)
  const selectDay = useActiveProgramStore(s => s.selectDay)
  const getDayToRender = useActiveProgramStore(s => s.getDayToRender)

  if (!activeProgram) return null

  const schedule = getWeekSchedule() // массив дней 
  const dayToRender = getDayToRender()

  if (!dayToRender) return null

  const weekToRender = dayToRender.week

  return (
    <div className={css.daysTabsContainer}>
      <h5>Неделя {weekToRender} — Дни тренировок</h5>

      <div className={css.tabsGrid}>
        {schedule.map((item) =>
          item.isTraining ? (
            <TrainingDay
              key={item.day}
              day={item.day}
              onClick={() => selectDay(weekToRender, item.day)}
              isActive={item.isActive}
              isCompleted={item.isCompleted}
            />
          ) : (
            <RestDay key={item.day} day={item.day} />
          )
        )}
      </div>
    </div>
  )
}
