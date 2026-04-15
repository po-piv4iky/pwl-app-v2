import Card from '@/components/ui/card/Card'
import css from './ProgramDayCard.module.scss'
import { TrainingDay } from '@/programs/types/training.types'
import { exercisesList } from '@/programs/exercises-list'

interface Props {
  day: TrainingDay
}

export default function ProgramDayCard({ day }: Props) {
  const dayTotalTraining = day.exercises.length
  const levelDay = dayTotalTraining > 5 ? 'тяжёлая' : 'лёгкая'

  return (
    <Card>
      <header className='flex justify-between items-start'>
        <div className='flex flex-col'>
          <span>День - {day.day}</span>
          <span className='opacity-60'>{dayTotalTraining} упражнений</span>
        </div>

        <span className='p-2 border border-b-emerald-500 bg-emerald-400 rounded-2xl'>
          {levelDay}
        </span>
      </header>

      <div className='flex flex-col gap-3'>
        {day.exercises.map((exercise, index) => {
          const exerciseMeta = exercisesList.find((item) => item.id === exercise.exerciseId)

          return (
            <Card key={`${exercise.exerciseId}-${index}`}>
              <h6>{exerciseMeta?.name ?? exercise.exerciseId}</h6>
              <span>Тут будет схема подходов</span>
            </Card>
          )
        })}
      </div>
    </Card>
  )
}