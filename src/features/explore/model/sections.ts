import { Activity, ArrowUp, Dumbbell, LucideIcon, Scale } from 'lucide-react'
import { LiftType } from '@/store/maxes.store'

export type ExploreSectionItem = {
  key: LiftType | 'complex'
  title: string
  icon: LucideIcon
}

export const exploreSections: ExploreSectionItem[] = [
  {
    key: 'bench',
    title: 'Жим лёжа',
    icon: Dumbbell
  },
  {
    key: 'squat',
    title: 'Присед',
    icon: ArrowUp
  },
  {
    key: 'deadlift',
    title: 'Становая тяга',
    icon: Activity
  },
  {
    key: 'complex',
    title: 'Комплекс',
    icon: Scale
  }
]
