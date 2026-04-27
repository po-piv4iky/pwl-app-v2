import clsx from 'clsx'
import { Circle, CircleCheck } from 'lucide-react'

import Card from '@/components/ui/card/Card'
import { useActiveProgramStore } from '@/store/active-program.store'

import css from './TrainingPlanSession.module.scss'

export default function TrainingPlanSession() {
  const currentSession = useActiveProgramStore(
    (s) => s.activeProgram?.trainingState.currentSession
  )

  const currentExerciseIndex = useActiveProgramStore(
    (s) => s.activeProgram?.trainingState.exerciseIndex ?? 0
  )

  return (
    <Card className={css.planTraining}>
      <h5 className={css.title}>План тренировки</h5>

      <div className={css.list}>
        {currentSession?.exercises.map((exercise, index) => {
          const totalSets = exercise.sets.length
          const firstSetReps = exercise.sets[0]?.targetReps
          const completedExercise = exercise.isCompleted
          const isActive = index === currentExerciseIndex

          const completedSets = exercise.sets.reduce((acc, set) => {
            return set.isCompleted ? acc + 1 : acc
          }, 0)

          return (
            <div
              key={exercise.id ?? index}
              className={clsx(
                css.item,
                completedExercise && css.itemCompleted,
                !completedExercise && isActive && css.itemActive
              )}
            >
              <div className={css.leftSide}>
                {completedExercise ? (
                  <CircleCheck size={18} className={css.iconCompleted} />
                ) : (
                  <Circle
                    size={18}
                    className={clsx(
                      css.icon,
                      isActive && css.iconActive
                    )}
                  />
                )}

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
    </Card>
  )
}