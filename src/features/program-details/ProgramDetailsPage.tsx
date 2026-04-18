import { getTotalTrainingDays, getTotalTrainingWeeks } from "@/utils/programStats";
import ProgramDetailsHeader from "./program-details-header/ProgramDetailsHeader";
import ProgramWeekList from "./program-week-list/ProgramWeekList";
import css from './ProgramDetailsPage.module.scss'
import Container from "@/components/layout/container/Container";
import { ProgramTraining } from "@/programs/types/program.types";
import TheStart from "./the-start/TheStart";

interface Props {
    program: ProgramTraining
}

export default function ProgramDetailsPage({program}: Props) {
    
    const totalDay = getTotalTrainingDays(program)
    const totalWeeks = getTotalTrainingWeeks(program)
    return (
        <Container>
            <div className={css.page}>
            <ProgramDetailsHeader 
                title={program.title} 
                description={program.description} 
                level={program.level}
                weeks={totalWeeks} 
                totalDay={totalDay}
            />
            <TheStart program={program}/>
            <ProgramWeekList program={program}/>
          </div>
        </Container>
    )
}

