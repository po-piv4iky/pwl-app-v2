'use client'

import { Coffee } from 'lucide-react'
import css from './RestDay.module.scss'

interface Props {
  onClick?: () => void
  day: number
}

export function RestDay({ onClick, day }: Props) {
  return (
    <button
      onClick={onClick}
      className={css.dayTabButton}
    >
      <Coffee size={28} className="text-zinc-400" />
      <div className='flex flex-col text-sm text-zinc-400'>
        <span className="text-sm text-zinc-400">День {day}</span>
        <span className="text-sm text-zinc-400">Отдых</span>
      </div>
    </button>
  )
}
