'use client'

import { useActiveProgramStore } from '@/store/active-program.store'
import { Calendar } from 'lucide-react'
import css from './DaysTraining.module.scss'
import Button from '@/components/ui/button/Button'
import WarmUp from '@/features/active-program/components/WarmUp/WarmUp'


export default function DaysTraining() {
  const { activeProgram, getDayData, getDayToRender } = useActiveProgramStore()

  const start = useActiveProgramStore(s => s.startTraining)

  if (!activeProgram) return null
  const dayToRender = getDayToRender() //получаем объект для отрисовки

  if(!dayToRender) return null

  const { week, day } = dayToRender // вытаскиваем из объекта неделю и день для отрисовки
  const dayData = getDayData(week, day)// информация о текущем дне 

  if (!dayData) return null

  // helper для reps (number | {min,max})
  const renderReps = (reps: number | { min: number; max: number }) => {
    if (typeof reps === 'number') return reps
    return `${reps.min}–${reps.max}`
  }

  return (
    <div className={css.dayTrainingContainer}>
      
        <header className={css.header}>
            <Calendar />
            <h4>Неделя {week} день {day} (План тренирвоки)</h4>
        </header>

        <WarmUp lift='bench' variant='plan' />
      
      {/* упражнения */}
      <div className='flex flex-col gap-4'>
        {dayData.exercises.map((exercise, index) => (
          <div
            key={index}
            className='border border-white rounded-xl p-4 flex flex-col gap-2'
          >
            <h5 className='font-bold'>{exercise.name}</h5>

            <div className='flex justify-between'>
              <span>Подходы: {exercise.sets}</span>
              <span>
                Повторения: {renderReps(exercise.reps)}
              </span>
            </div>

            {'intensity' in exercise && (
              <span>Интенсивность: {typeof exercise.intensity === 'number' ? `${exercise.intensity}%` : `до ${exercise.intensity?.max}%` }</span>
            )}

            {exercise.comment && (
              <span className='text-sm opacity-70'>
                {exercise.comment}
              </span>
            )}
          </div>
        ))}
      </div>
      <Button onClick={start}>Начать тренировку</Button>
    </div>
  )
}

