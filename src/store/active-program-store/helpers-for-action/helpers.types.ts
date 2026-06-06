export interface ScheduleDay {
  day: number
  isTraining: boolean
  isCompleted: boolean
  isActive: boolean
}

export interface DayToRender {
  weekNumber: number
  dayNumber: number
  isCurrent: boolean
}
