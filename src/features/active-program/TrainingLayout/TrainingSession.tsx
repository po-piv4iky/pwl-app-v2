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

export default function TrainingSession() {
  const activeProgram = useActiveProgramStore((s) => s.activeProgram)
  const exercises = activeProgram?.trainingState.currentSession?.exercises ?? []
  const total = exercises.length
 const currentIndex = activeProgram?.trainingState.exerciseIndex ?? 0

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
            Неделя-{activeProgram?.currentWeek} день-{activeProgram?.currentDay}
          </h5>
        </div>

        <div className={css.progressBlock}>
          <p>Упражнение 1 из 5</p>
        <ProgressBar 
          current={total}
          target={currentNumber}
        />  
          {/* <div className={css.progressBar}></div> */}
        </div>
      </header>

      <WarmUp lift='bench' variant='session' />
      <RestTimer />
      <TrainingExercisesSessions />
      <TrainingPlanSession />
      </Stack>
    </Container>
  )
}
