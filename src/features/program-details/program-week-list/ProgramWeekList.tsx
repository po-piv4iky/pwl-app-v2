import { ProgramTraining } from "@/programs/types/program.types"
import ProgramWeekCard from "./ProgramWeekCard"
import Stack from "@/components/layout/stack/Stack"

interface Props { 
    program: ProgramTraining
}

export default function ProgramWeekList({program}: Props) {
    return (
        <Stack>
            {program.weeks.map(week => (
                <ProgramWeekCard key={week.weekNumber} week={week}/> 
            ))}
        </Stack>
    )
}
