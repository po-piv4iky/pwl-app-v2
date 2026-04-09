'use client'

import Button from '@/components/ui/button/Button'
import css from './TrainingSession.module.scss' 
import { useActiveProgramStore } from '@/store/active-program.store'
import { ArrowLeft } from 'lucide-react'
import WarmUp from '@/features/active-program/components/WarmUp/WarmUp'
import { useRouter } from 'next/navigation'
import TrainingExercisesSessions from '../components/TrainingExercisesSessions/TrainingExercisesSessions'
import TrainingPlanSession from '../components/TrainingPlanSession/TrainingPlanSession'
import RestTimer from '../components/RestTimer/RestTimer'


export default function TrainingSession() {
    const activeProgram = useActiveProgramStore(s => s.activeProgram)
    const router = useRouter()
    const handleGoBack = () => {
        return router.back()
    }

    return (
        <section className={css.trainingSessionContainer}>
            <header className={css.headerBlock}>
                <div className={css.titleAndButtonBlock}>
                    <Button className={css.backButton} onClick={handleGoBack}><ArrowLeft /> Назад</Button>
                    <h5 className={css.weekTitle}>Неделя-{activeProgram?.currentWeek} день-{activeProgram?.currentDay}</h5>
                </div>
                <div className={css.progressBlock}>
                    <p>Упражнение 1 из 5</p>
                    <div className={css.progressBar}></div>
                </div>
                
            </header>
            <WarmUp lift='bench' variant='session'/>
            <RestTimer />
            <TrainingExercisesSessions />
            <TrainingPlanSession />
        </section>
    )
}

