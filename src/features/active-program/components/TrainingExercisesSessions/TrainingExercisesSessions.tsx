import { useActiveProgramStore } from '@/store/active-program.store'
import css from './TrainingExercisesSessions.module.scss'
import SessionSetItem from './SessionSetItem/SessionSetItem'
import Button from '@/components/ui/button/Button'
import Card from '@/components/ui/card/Card'

export default function TrainingExercisesSessions() {

    const exerciseIndex  = useActiveProgramStore(s => s.activeProgram?.trainingState.exerciseIndex)
    const nextExercise = useActiveProgramStore(s => s.nextExercise)
    const trainingSession = useActiveProgramStore(s => {
    const session = s.activeProgram?.trainingState.currentSession // текущая сессиЯ
    const index = s.activeProgram?.trainingState.exerciseIndex // идём по массиву первый эллемент это 0
    if (!session || index === undefined) return null
    return session.exercises[index]
}) 
    const activeIndex = trainingSession?.sets.findIndex(set => !set.isCompleted) 
    const totalSets = trainingSession?.sets.length
    const current = trainingSession?.sets.reduce((acc, item) => {
     return item.isCompleted ? acc + 1 : acc
    }, 0)
   const isExerciseDone = trainingSession?.sets.every(set => set.isCompleted === true) ?? false 

    return (
        <Card>
            <div className='flex justify-between'>
                <h5>{trainingSession?.name}</h5>
                <span>{current}/{totalSets} подходов</span>
            </div>

            <div className={css.sessionMaps}>
                {trainingSession?.sets.map((item, setIndex) => {
                  const isActive = setIndex === activeIndex
                  const isLocked = !item.isCompleted && activeIndex !== setIndex
                  
                  return (
                    <SessionSetItem 
                      key={item.id} 
                      item={item} 
                      exerciseIndex={exerciseIndex!} 
                      isActive={isActive}
                      isLocked={isLocked}
                    />
                    )
                })}
            </div>
            {isExerciseDone && <Button onClick={nextExercise}>Следующее упражнение</Button>}

        </Card>
    )
}

