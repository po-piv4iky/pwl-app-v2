import { Program } from "@/config/programs/types/programs.types";

export function getTotalTrainingDays(program: Program){
    return program.weeks.reduce((acc, week) => acc + week.days.length, 0)
}

export function getTotalTrainingWeeks(program: Program){
    return program.weeks.length
}