import Card from '@/components/ui/card/Card'
import css from './ProgramDayCard.module.scss'
import { TrainingDay } from '@/programs/types/training.types'
import { exercisesList } from '@/programs/exercises-list'
import { formatExerciseScheme } from '@/programs/helpers/format-exercise-scheme'

interface Props {
  day: TrainingDay
}

// { 
//     day: 1,
//     exercises: [ [Object], [Object], [Object], [Object], [Object] ]
// },

export default function ProgramDayCard({ day }: Props) {
  const dayTotalTraining = day.exercises.length
  const levelDay = dayTotalTraining > 5 ? 'тяжёлая' : 'лёгкая'

  return (
    <Card variant='danger'>
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
          const schemeLines = formatExerciseScheme(exercise.sets)

          return (
            <Card key={`${exercise.exerciseId}-${index}`}>
              <h6>{exerciseMeta?.name ?? exercise.exerciseId}</h6>

              <div className='flex flex-col gap-2'>
                {schemeLines.map((line, lineIndex) => (
                  <div
                    key={`${line.left}-${lineIndex}`}
                    className='flex items-center justify-between gap-4'
                  >
                    <span>{line.left}</span>
                    {line.right && (
                      <span className='text-red-500 font-semibold'>
                        {line.right}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {exercise.comment && (
                <p className='text-sm opacity-60 mt-2'>{exercise.comment}</p>
              )}
            </Card>
          )
        })}
      </div>
    </Card>
  )
}