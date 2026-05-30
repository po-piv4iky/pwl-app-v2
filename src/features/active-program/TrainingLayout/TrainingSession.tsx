'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import Button from '@/components/ui/button/Button'
import WarmUp from '@/features/active-program/components/WarmUp/WarmUp'
import { useActiveProgramStore } from '@/store/active-program.store'

import RestTimer from '../components/RestTimer/RestTimer'
import TrainingExercisesSessions from '../components/TrainingExercisesSessions/TrainingExercisesSessions'
import TrainingPlanSession from '../components/TrainingPlanSession/TrainingPlanSession'

import css from './TrainingSession.module.scss'
import Container from '@/components/layout/container/Container'
import Stack from '@/components/layout/stack/Stack'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'

interface Props {
  onFinish: () => void
}

export default function TrainingSession({ onFinish }: Props) {
  const activeProgram = useActiveProgramStore((s) => s.activeProgram)
  const exercises = activeProgram?.trainingState.currentSession?.exercises ?? []
  const total = exercises.length
  const currentIndex = activeProgram?.trainingState.exerciseIndex ?? 0
  const warmUp = exercises[currentIndex].warmUp
  const exerciseNameCurrent = exercises[currentIndex].name
  const currentNumber = currentIndex + 1
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <Container size='narrow'>
      <Stack padding>

        <header className={css.headerBlock}>
          <div className={css.titleAndButtonBlock}>
            <Button
              variant='ghost'
              className={css.backButton}
              onClick={handleGoBack}
            >
              <ArrowLeft /> Назад
            </Button>

            <h5 className={css.weekTitle}>
              Неделя - {activeProgram?.currentWeek} день-{activeProgram?.currentDay}
            </h5>
          </div>

          <div className={css.progressBlock}>
            <p>Упражнение {currentNumber} из {total}</p>
            <ProgressBar
              size='sm'
              current={currentNumber}
              target={total}
            />
          </div>
        </header>

        {warmUp && <WarmUp variant='session' warmUp={warmUp} exerciseName={exerciseNameCurrent} />}
        <RestTimer />
        <TrainingExercisesSessions onFinish={onFinish} />
        <TrainingPlanSession />
      </Stack>
    </Container>
  )
}
