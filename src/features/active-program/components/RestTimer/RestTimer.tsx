import { CircleStop, Timer } from 'lucide-react'
import css from './RestTimer.module.scss'
import { useActiveProgramStore } from '@/store/active-program.store'
import { useEffect, useState } from 'react'

export default function RestTimer() {
    
    const stopRestTimer = useActiveProgramStore(s => s.stopRestTimer)
    const restTimer = useActiveProgramStore(s => s.activeProgram?.trainingState.restTimer)
    
    const isActive = restTimer?.isActive ?? false
    const duration = restTimer?.duration ?? 0
    const startedAt = restTimer?.startedAt ?? null
    
    
    const calculateTimeLeft = (): number => { // отсавшейся time
        if(!startedAt) return 0
        const passed = Math.floor((Date.now() - startedAt) / 1000) //пройденный time    1772100515429(настоящее) - 1772100485843(прошлое) / 1000 = 29
        const remaining = duration - passed //  120 - 29 = 91
        return remaining > 0 ? remaining : 0
    }
    
    const [timeLeft, setTimeLeft] = useState<number>(() => calculateTimeLeft() )

    useEffect(() => {
        if(!isActive || !startedAt) return

        const interval = setInterval(() => {
          const remaining = calculateTimeLeft()
          if(remaining <= 0) {
            stopRestTimer()
          } else {
            setTimeLeft(remaining)
          }
        } , 1000)

        return () => clearInterval(interval)
        
    }, [isActive, startedAt, duration, stopRestTimer])

    const minutesString = String(Math.floor(timeLeft / 60)).padStart(2, '0')
    const secondsString = String(timeLeft % 60).padStart(2, '0')
    


    return (
        <div className={css['rest-timer']}>
            <div className='flex gap-6'>
                <Timer />
                <h6>Отдых</h6>
            </div>

            <div className='flex'>
                <div className='flex'>
                    <span>{minutesString}</span>
                    <span>:</span>
                    <span>{secondsString}</span>
                </div>
                <button onClick={stopRestTimer}>
                   <CircleStop />
                </button>
            </div>
        </div>
    )
}


// export interface RestTimerState {
//   isActive: boolean после старата true
//   duration: number после старата 120
//   startedAt: number | null число в милисекундах в прошлом 
// }