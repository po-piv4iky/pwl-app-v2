'use client'

import PlanSession from "./PlanLayout/PlanSession";
import TrainingSession from "./TrainingLayout/TrainingSession";
import NoActiveTraining from "./components/NoActiveTraining/NoActiveTraining";
import Container from "@/components/layout/container/Container";
import { useState } from "react";
import Button from "@/components/ui/button/Button";
import css from './ActiveProgramPage.module.scss'
import { useProgramTrainingStore } from "@/store/active-program-store/active-program.store";

export default function ActiveProgramPage() {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
    // const activeProgram = useActiveProgramStore(s => s.activeProgram)
    const activeProgram = useProgramTrainingStore(s => s.activeProgram)
    const trainingMode = useProgramTrainingStore(s => s.activeProgram?.trainingState.mode || 'plan')
    const currentSession = useProgramTrainingStore(
        s => s.activeProgram?.trainingState.currentSession
    )

    if (!activeProgram) {
        return <NoActiveTraining />
    }

    const sessions = {
        plan: <PlanSession />,
        training: currentSession ? <TrainingSession onFinish={() => setIsSuccessModalOpen(true)} /> : <NoActiveTraining />,
        // finished: <FinishedSession />,
    }

    return (
        <Container>
            {sessions[trainingMode]}
            {isSuccessModalOpen && (
                <div className={css.modalOverlay}>
                    <div className={css.modal}>
                        <h3>Тренировка завершена</h3>

                        <p>Ваши результаты сохранены в истории тренировок.</p>

                        <Button onClick={() => setIsSuccessModalOpen(false)}>
                            Вернуться в тренировочный план
                        </Button>
                    </div>
                </div>
            )}
        </Container>

    )
}
