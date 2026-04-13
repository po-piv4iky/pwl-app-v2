import { Program } from "@/config/programs/types/programs.types";
import { getTotalTrainingDays, getTotalTrainingWeeks } from "@/utils/programStats";
import ProgramDetailsHeader from "./program-details-header/ProgramDetailsHeader";
import ProgramWeekList from "./program-week-list/ProgramWeekList";
import FooterIsStart from "./footer-start/FooterIsStart";
import css from './ProgramDetailsPage.module.scss'
import Container from "@/components/layout/container/Container";

interface Props {
    program: Program
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
            <ProgramWeekList program={program}/>
            <FooterIsStart program={program}/>
          </div>
        </Container>
    )
}

