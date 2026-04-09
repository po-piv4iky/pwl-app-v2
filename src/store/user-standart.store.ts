import { create } from "zustand"
import { persist } from "zustand/middleware"
import { FormData } from "@/config/frame-inputs/type"
import { FederationId } from "@/config/federations/federation.types"

export type Gender = "male" | "female"

export interface StandartUser {
  gender: Gender | null
  age: number | null
  weight: number | null
  federation: FederationId | null
}

interface StandartUserState extends StandartUser {
  setAll: (data: FormData<'gender' | 'age' | 'weight'>) => void
  setFederation: (federation: FederationId) => void
  reset: () => void
}

const initialState: StandartUser = {
  gender: null,
  age: null,
  weight: null,
  federation: 'base'
}

export const useStandartUserStore = create<StandartUserState>()(
  persist(
    (set) => ({
      ...initialState,

      setAll: (data) => 
        set({
          gender: data.gender,
          age: data.age,
          weight: data.weight,
        }),

      setFederation: (federation) => 
        set({federation: federation}),

      reset: () => set(initialState),
    }),
    {
      name: "user-standart"
    }
  )
)


// const setAll = useStandartUserStore((s) => s.setAll)

// const handleSubmit = () => {
//   setAll({
//     gender: "male",
//     age: 25,
//     weight: 75
//   })
// }



// import { create } from "zustand"
// import { persist } from "zustand/middleware"

// export type Gender = "male" | "female"

// export interface StandartUser {
//   gender: Gender | null
//   age: number | null
//   weight: number | null
// }

// interface StandartUserState extends StandartUser {
//   setAll: (data: StandartUser) => void
//   update: (data: Partial<StandartUser>) => void
//   reset: () => void
// }

// const initialState: StandartUser = {
//   gender: null,
//   age: null,
//   weight: null
// }

// export const useStandartUserStore = create<StandartUserState>()(
//   persist(
//     (set) => ({
//       ...initialState,

//       // Полная замена (для формы)
//       setAll: (data) =>
//         set(() => ({
//           ...data
//         })),

//       // Частичное обновление (🔥 главное)
//       update: (data) =>
//         set((state) => ({
//           ...state,
//           ...data
//         })),

//       // Сброс
//       reset: () =>
//         set(() => ({
//           ...initialState
//         }))
//     }),
//     {
//       name: "user-standart"
//     }
//   )
// )