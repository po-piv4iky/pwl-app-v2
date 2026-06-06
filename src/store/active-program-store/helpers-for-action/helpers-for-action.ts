import { ProgramTraining } from '@/programs/types/program.types'
import { TrainingDay } from '@/programs/types/training.types'
import { ActiveProgramState } from '../active-program.types'
import { DayToRender, ScheduleDay } from './helpers.types'

export const getTrainingDayData = (
  program: ProgramTraining,
  weekNum: number,
  dayNum: number,
): TrainingDay | null => {
  const weekCurrent = program.weeks.find((w) => w.weekNumber === weekNum)
  if (!weekCurrent) return null
  const dayData = weekCurrent?.trainingDays.find((d) => d.day === dayNum)
  if (!dayData) return null
  return dayData
}

export const getDayToRender = (activeProgram: ActiveProgramState): DayToRender => {
  const { currentPosition, viewMode } = activeProgram
  if (viewMode.type === 'current') {
    return {
      weekNumber: currentPosition.week,
      dayNumber: currentPosition.day,
      isCurrent: true,
    }
  } else {
    return {
      weekNumber: viewMode.week,
      dayNumber: viewMode.day,
      isCurrent: false,
    }
  }
}

export const hasCompletedDay = (
  activeProgram: ActiveProgramState,
  dayToRender: DayToRender,
) => {
  return activeProgram.completedDays.some(
    (day) => day.week === dayToRender.weekNumber && day.day === dayToRender.dayNumber,
  )
}

export const getWeekSchedule = (activeProgram: ActiveProgramState) => {
  const dayToRender = getDayToRender(activeProgram)
  const weekData = activeProgram.program.weeks.find(
    (week) => week.weekNumber === dayToRender.weekNumber,
  )
  const weekDays = [1, 2, 3, 4, 5, 6, 7]

  return weekDays.map<ScheduleDay>((dayNumber) => {
    const training = weekData?.trainingDays.find((day) => day.day === dayNumber)

    return {
      day: dayNumber,
      isTraining: Boolean(training),
      isCompleted: hasCompletedDay(activeProgram, dayToRender),
      isActive: dayToRender.dayNumber === dayNumber,
    }
  })
}
