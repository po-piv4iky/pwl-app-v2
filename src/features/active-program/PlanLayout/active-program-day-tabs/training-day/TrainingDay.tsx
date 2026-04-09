'use client'

import { Dumbbell } from 'lucide-react'
import css from './TrainingDay.module.scss'
import clsx from 'clsx'

interface Props {
  day: number
  onClick: () => void
  isActive?: boolean
  isCompleted?: boolean
}

export default function TrainingDay({ day, onClick, isActive, isCompleted }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(css.dayTabButton, isActive && css.active, isCompleted && css.completed)}
    >
      <Dumbbell
        size={28}
        className={isCompleted ? 'text-green-400' : 'text-red-500'}
      />
      <div className='flex flex-col'>
        <span className="text-sm text-white">День {day}</span>
        <span className="text-sm text-white">Тренировка</span>
      </div>
    </button>
  )
}
