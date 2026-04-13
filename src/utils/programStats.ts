import { ProgramTraining } from "@/programs/types/program.types";

export function getTotalTrainingDays(program: ProgramTraining){
    return program.weeks.reduce((acc, week) => acc + week.trainingDays.length, 0)
}

export function getTotalTrainingWeeks(program: ProgramTraining){
    return program.weeks.length
}
