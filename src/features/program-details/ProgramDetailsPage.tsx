import { getTotalTrainingDays, getTotalTrainingWeeks } from "@/utils/programStats";
import ProgramDetailsHeader from "./program-details-header/ProgramDetailsHeader";
import ProgramWeekList from "./program-week-list/ProgramWeekList";
import Container from "@/components/layout/container/Container";
import { ProgramTraining } from "@/programs/types/program.types";
import TheStart from "./the-start/TheStart";
import Stack from "@/components/layout/stack/Stack";

interface Props {
    program: ProgramTraining
}

export default function ProgramDetailsPage({program}: Props) {
    
    const totalDay = getTotalTrainingDays(program)
    const totalWeeks = getTotalTrainingWeeks(program)
    return (
        <Container>
            <Stack padding bottom>
                <ProgramDetailsHeader 
                    title={program.title} 
                    description={program.description} 
                    level={program.level}
                    weeks={totalWeeks} 
                    totalDay={totalDay}
                />
                <TheStart program={program}/>
                <ProgramWeekList program={program}/>
            </Stack>
        </Container>
    )
}

