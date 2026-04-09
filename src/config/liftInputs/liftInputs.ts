import { Activity, ArrowUp, Dumbbell } from 'lucide-react'
import { FrameInput } from '@/config/frame-inputs/type'

export type LiftKey = 'bench' | 'squat' | 'deadlift'

export const liftInputs: FrameInput<LiftKey>[] = [
  {
    key: 'bench',
    label: 'Жим лёжа (кг)',
    icon: Dumbbell,
    placeholder: 'Например: 100'
  },
  {
    key: 'squat',
    label: 'Присед (кг)',
    icon: ArrowUp,
    placeholder: 'Например: 150'
  },
  {
    key: 'deadlift',
    label: 'Становая тяга (кг)',
    icon: Activity,
    placeholder: 'Например: 180',
    border: true
  }
]
