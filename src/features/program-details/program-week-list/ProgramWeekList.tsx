import { Program } from "@/config/programs/types/programs.types"
import ProgramWeekCard from "./ProgramWeekCard"

interface Props { 
    program: Program
}

export default function ProgramWeekList({program}: Props) {
    return (
        <div>
            {program.weeks.map(week => (
                <ProgramWeekCard key={week.week} week={week}/> 
            ))}
        </div>
    )
}
