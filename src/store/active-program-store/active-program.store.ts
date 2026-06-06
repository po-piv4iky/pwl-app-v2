import { create, StateCreator } from 'zustand'
import { ActiveProgramState } from './active-program.types'
import { createProgramActions, IProgramActions } from './actions/program.actions'
import { createTrainingActions, ITrainingActions } from './actions/training.actions'
import { persist } from 'zustand/middleware'
import { createNavigationActions, INavigationActions } from './actions/navigation.actions'

export type IActions = IProgramActions & ITrainingActions & INavigationActions

interface IInitialState {
  activeProgram: ActiveProgramState | null
}
const initialState: IInitialState = {
  activeProgram: null,
}

export interface IProgramTrainingState extends IInitialState {
  actions: IActions
}

const programTrainingStore: StateCreator<IProgramTrainingState> = (set, get) => ({
  ...initialState,
  actions: {
    ...createProgramActions(set, get),
    ...createTrainingActions(set, get),
    ...createNavigationActions(set, get),
  },
})

export const useProgramTrainingStore = create<IProgramTrainingState>()(
  persist(programTrainingStore, { name: 'program-training-store' }),
)
