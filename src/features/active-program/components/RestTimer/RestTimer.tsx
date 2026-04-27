import { Minus, Plus, Square, Timer } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useActiveProgramStore } from '@/store/active-program.store'
import css from './RestTimer.module.scss'

export default function RestTimer() {
  const stopRestTimer = useActiveProgramStore((s) => s.stopRestTimer)
  const changeRestTimer = useActiveProgramStore((s) => s.changeRestTimer)

  const restTimer = useActiveProgramStore(
    (s) => s.activeProgram?.trainingState.restTimer
  )

  const isActive = restTimer?.isActive ?? false
  const duration = restTimer?.duration ?? 0
  const startedAt = restTimer?.startedAt ?? null

  const getTimeLeft = () => {
    if (!startedAt) return 0

    const passed = Math.floor((Date.now() - startedAt) / 1000)
    return Math.max(duration - passed, 0)
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    if (!isActive || !startedAt) return

    const interval = setInterval(() => {
      const remaining = getTimeLeft()

      if (remaining <= 0) {
        stopRestTimer()
        return
      }

      setTimeLeft(remaining)
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, startedAt, duration, stopRestTimer])

  if (!isActive) return null

  const minutesString = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const secondsString = String(timeLeft % 60).padStart(2, '0')

  return (
    <section className={css.restTimer}>
      <div className={css.leftSide}>
        <div className={css.iconBox}>
          <Timer className={css.iconTimer} />
        </div>

        <div className={css.info}>
          <h6 className={css.title}>Отдых</h6>
          <p className={css.description}>
            Восстановись перед следующим подходом
          </p>
        </div>
      </div>

      <div className={css.rightSide}>
        <div className={css.clock}>
          <span>{minutesString}</span>
          <span className={css.separator}>:</span>
          <span>{secondsString}</span>
        </div>

        <div className={css.controls}>
          <button
            type="button"
            className={css.controlButton}
            onClick={() => changeRestTimer(-30)}
            disabled={timeLeft <= 30}
          >
            <Minus size={16} />
            30
          </button>

          <button
            type="button"
            className={css.controlButton}
            onClick={() => changeRestTimer(30)}
          >
            <Plus size={16} />
            30
          </button>

          <button
            type="button"
            className={css.stopButton}
            onClick={stopRestTimer}
          >
            <Square size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}


// export interface RestTimerState {
//   isActive: boolean после старата true
//   duration: number после старата 120
//   startedAt: number | null число в милисекундах в прошлом 
// }