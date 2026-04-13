import { ProgramTraining } from "@/programs/types/program.types"
import ProgramWeekCard from "./ProgramWeekCard"

interface Props { 
    program: ProgramTraining
}

export default function ProgramWeekList({program}: Props) {
    return (
        <div>
            {program.weeks.map(week => (
                <ProgramWeekCard key={week.weekNumber} week={week}/> 
            ))}
        </div>
    )
}
