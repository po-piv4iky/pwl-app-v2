import { useActiveProgramStore } from '@/store/active-program.store'
import { Circle, CircleAlert, CircleCheck } from 'lucide-react'
import css from './TrainingPlanSession.module.scss'

export default function TrainingPlanSession() {
  const currentSession = useActiveProgramStore(
    (s) => s.activeProgram?.trainingState.currentSession
  )

  return (
    <div className={css.planTraining}>
      <h5 className={css.title}>План тренировки</h5>

      <div className={css.list}>
        {currentSession?.exercises.map((exercise, index) => {
          const totalSets = exercise.sets.length
          const firstSetReps = exercise.sets[0]?.targetReps
          const completedExercise = exercise.isCompleted

          const completedSets = exercise.sets.reduce((acc, set) => {
            return set.isCompleted ? acc + 1 : acc
          }, 0)

          return (
            <div key={exercise.id ?? index} className={css.item}>
              <div className={css.leftSide}>

                {completedExercise ? 
                  <CircleCheck size={18} className={css.icon}/>
                   : 
                  <Circle size={18} className={css.icon} />}
                
                <div className={css.info}>
                  <h6 className={css.itemTitle}>{exercise.name}</h6>

                  <span className={css.meta}>
                    {totalSets} × {firstSetReps}
                  </span>
                </div>
              </div>

              <div className={css.progress}>
                <span>
                  {completedSets}/{totalSets}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
