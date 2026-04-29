import css from "./WeekTabs.module.scss"
import { Circle, CheckCircle } from "lucide-react"
import clsx from "clsx"
import { useActiveProgramStore } from "@/store/active-program.store"
import { motion } from "framer-motion"

// 🚀 Золотое правило:
// initial → что было до анимации
// animate → что стало после анимации
// exit → что будет при удалении
// transition → как будет происходить
// whileHover/whileTap → интерактив

// Это покрывает 90% всех задач с анимацией в Framer Motion!


export default function WeekTabs() {
  const { activeProgram, setCurrentWeek } = useActiveProgramStore()
  if(!activeProgram) return null

  const { program, currentWeek, completedDays } = activeProgram
  const weeks = program.weeks

  return (
    <section className={css.weeksTabsContainer}>
      <h5>Выберите неделю</h5>
      <div className={css.scrollWrapper}>

          <motion.div 
            className={css.buttonsTrack}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          >
            {weeks.map((week) => {
              const weekNumber = week.weekNumber
              const isActive = weekNumber === currentWeek
              const completedWorkouts = completedDays.filter(item => item.week === weekNumber).length
              const totalWorkouts = week.trainingDays.length
              
              const isCompletedWeek = completedWorkouts === totalWorkouts
              return (
                <motion.button
                  key={weekNumber}
                  onClick={() => setCurrentWeek(weekNumber)}
                  className={clsx(
                  css.buttonWeek,
                  isActive && css.active,
                  )}
                  initial={{opacity: 0, y: 8}}
                 animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.2}}
                  whileHover={{y: -2}}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className={css.iconAndWeekBlock}>
                {isCompletedWeek ? <CheckCircle /> : <Circle />}
                    <span>Неделя {week.weekNumber}</span>
                  </div>
    
              <span className={css.progress}>
                    {completedWorkouts}/{totalWorkouts} завершено
                  </span>
                </motion.button>
              )
           })}
          </motion.div>
      </div>
    </section>
  )
}



