import ProgressBar from "@/components/ui/progress-bar/ProgressBar";
import { useActiveProgramStore } from "@/store/active-program.store"
import { Trophy } from "lucide-react";
import css from './ActiveProgramHeader.module.scss'
import { getTotalTrainingWeeks } from "@/utils/programStats";
import IconBadge from "@/components/ui/icon-badge/IconBadge";


export default function ActiveProgramHeader() {
    const activeProgram = useActiveProgramStore(state => state.activeProgram)
    if(!activeProgram) return null
    const { program, completedDays } = activeProgram
    const totalWorkouts = program.weeks.reduce((acc, week) => week.days.length + acc ,0) 
    const completedWorkouts = completedDays.length
    const percent = Math.round((completedWorkouts / totalWorkouts) * 100)
    const weeksLength = getTotalTrainingWeeks(program)

     return (
    <div className={css.header}>

      <div className={css.topRow}>
        <div className={css.programInfo}>
          <IconBadge icon={Trophy} className={css.icon} />

          <div className={css.title}>
            <p className={css.label}>Активная программа</p>
            <h5 className={css.programName}>
              {program.title} ({program.cycleWeeks})
            </h5>
          </div>
        </div>

        <div className={css.workoutsCounter}>
          <span className={css.counterValue}>
            {completedWorkouts}/{totalWorkouts}
          </span>
          <span className={css.counterLabel}>тренировок</span>
        </div>
      </div>

      <ProgressBar percent={percent} />

      <div className={css.stats}>
        <StatItem value={weeksLength} label="недель" variant="red"/>
        <StatItem value={completedWorkouts} label="выполнено" variant="green"/>
        <StatItem value={totalWorkouts - completedWorkouts} label="осталось" variant="yellow"/>
      </div>

    </div>
  )
}


type StatVariant = "red" | "green" | "yellow"
interface StatItemProps {
  value: number
  label: string
  variant: StatVariant
}

function StatItem({ value, label, variant }: StatItemProps) {
  return (
    <div className={css.statItem}>
      <span className={`${css.statValue} ${css[variant]}`}>{value}</span>
      <span className={css.statLabel}>{label}</span>
    </div>
  )
}

