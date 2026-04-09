'use client'

import { useActiveProgramStore } from "@/store/active-program.store";
import css from './ActiveProgramPage.module.scss'
import PlanSession from "./PlanLayout/PlanSession";
import TrainingSession from "./TrainingLayout/TrainingSession";
import FinishedSession from "./FinishedLayout/FinishedSession";
import NoActiveTraining from "./components/NoActiveTraining/NoActiveTraining";
import Container from "@/components/layout/container/Container";

export default function ActiveProgramPage() {
    const activeProgram = useActiveProgramStore(s => s.activeProgram)
    const trainingMode = useActiveProgramStore(s => s.activeProgram?.trainingState.mode || 'plan')
    const currentSession = useActiveProgramStore(
        s => s.activeProgram?.trainingState.currentSession
    )

    if (!activeProgram) {
        return <NoActiveTraining />
    }

    const sessions = {
        plan: <PlanSession />,
        training: currentSession ? <TrainingSession /> : <NoActiveTraining />,
        finished: <FinishedSession />,
    }

    return (
        <Container>
            {sessions[trainingMode]}
        </Container>
       
    )
}
