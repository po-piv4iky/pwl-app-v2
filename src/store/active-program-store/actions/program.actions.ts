import { createActiveProgramState } from '../active-program.helpers'
import { ProgramTraining } from '@/programs/types/program.types'
import { GetState, SetState } from '../active-program.types'

export interface IProgramActions {
  startProgram: (program: ProgramTraining) => void
  resetProgram: () => void
}

export const createProgramActions = (set: SetState, get: GetState): IProgramActions => ({
  startProgram: (program) => set({ activeProgram: createActiveProgramState(program) }),
  resetProgram: () => set({ activeProgram: null }),
})
