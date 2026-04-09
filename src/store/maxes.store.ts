// src/store/userMaxes.store.ts
import { validateMax } from '@/lib/validate.max';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type LiftType = 'bench' | 'squat' | 'deadlift';

export interface UserMaxes {
  bench: number;
  squat: number;
  deadlift: number;
}

export interface UserMaxesState {
  maxes: UserMaxes;
  setMax: (lift: LiftType, value: number) => void;
  setAllMaxes: (maxes: UserMaxes) => void;
  reset: () => void;
}

export const useUserMaxesStore = create<UserMaxesState>()(
  persist(
    (set) => ({
      maxes: {
        bench: 0,
        squat: 0,
        deadlift: 0,
      },

      setMax: (lift, value) =>
        set((state) => ({
          maxes: {
            ...state.maxes,
            [lift]: validateMax(value),
          },
        })),

      setAllMaxes: (maxes) =>
        set({
          maxes,
        }),

      reset: () =>
        set({
          maxes: {
            bench: 0,
            squat: 0,
            deadlift: 0,
          },
        }),
    }),
    {
      name: 'user-maxes', // ключ в localStorage
    }
  )
);
