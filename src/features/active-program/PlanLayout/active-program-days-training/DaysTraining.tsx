'use client'

import Button from '@/components/ui/button/Button'
import Card from '@/components/ui/card/Card'
import { Calendar, Eye, PlayCircle } from 'lucide-react'
import css from './DaysTraining.module.scss'
import { useActiveProgramStore } from '@/store/active-program.store'
import { exercisesList } from '@/programs/exercises-list'
import { formatExercisePreview } from '@/programs/helpers/format-exercise-scheme'

export default function DaysTraining() {
  const activeProgram = useActiveProgramStore((s) => s.activeProgram)
  const getDayData = useActiveProgramStore((s) => s.getDayData)
  const getDayToRender = useActiveProgramStore((s) => s.getDayToRender)
  const startTraining = useActiveProgramStore((s) => s.startTraining)

  if (!activeProgram) return null

  const dayToRender = getDayToRender()
  if (!dayToRender) return null

  const { week, day, isCurrent } = dayToRender
  const dayData = getDayData(week, day)

  if (!dayData) {
    return (
      <Card className={css.emptyDay}>
        <div className={css.emptyDay__content}>
          <Calendar />
          <div>
            <h4>Неделя {week} • День {day}</h4>
            <p>На этот день тренировка не запланирована.</p>
          </div>
        </div>
      </Card>
    )
  }

  const exercisesCount = dayData.exercises.length
  const canStart = isCurrent

  return (
    <section className={css.dayTraining}>
      <Card className={css.dayTraining__card}>
        <header className={css.dayTraining__header}>
          <div className={css.dayTraining__info}>
            <div className={css.dayTraining__titleRow}>
              <Calendar size={20} />
              <h4>Неделя {week} • День {day}</h4>
            </div>

            <p className={css.dayTraining__meta}>
              {exercisesCount} упражнений
            </p>
          </div>

          <div
            className={
              canStart ? css.dayTraining__statusCurrent : css.dayTraining__statusView
            }
          >
            {canStart ? (
              <>
                <PlayCircle size={16} />
                <span>Текущая тренировка</span>
              </>
            ) : (
              <>
                <Eye size={16} />
                <span>Режим просмотра</span>
              </>
            )}
          </div>
        </header>

        <div className={css.dayTraining__exerciseList}>
          {dayData.exercises.map((exercise, index) => {
            const exerciseMeta = exercisesList.find(
              (item) => item.id === exercise.exerciseId
            )

            const preview = formatExercisePreview(exercise.sets)

            return (
              <div
                key={`${exercise.exerciseId}-${index}`}
                className={css.dayTraining__exerciseItem}
              >
                <h5 className={css.dayTraining__exerciseName}>
                  {exerciseMeta?.name ?? exercise.exerciseId}
                </h5>

                <p className={css.dayTraining__exerciseScheme}>
                  {preview}
                </p>

                {exercise.comment && (
                  <p className={css.dayTraining__exerciseComment}>
                    {exercise.comment}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <footer className={css.dayTraining__footer}>
          {canStart ? (
            <Button onClick={startTraining} className={css.dayTraining__button}>
              Начать тренировку
            </Button>
          ) : (
            <div className={css.dayTraining__viewOnly}>
              Вы просматриваете план. Начать можно только текущий тренировочный день.
            </div>
          )}
        </footer>
      </Card>
    </section>
  )
}