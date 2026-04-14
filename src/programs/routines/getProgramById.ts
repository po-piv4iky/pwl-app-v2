import { allPrograms } from "./allPrograms";

export function getProgramById(id: string){
   return allPrograms.find(program => program.id === id)
}

