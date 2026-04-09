import { create } from "zustand"

interface UIStore {
    isSidebarOpen: boolean
    isMobile: boolean
    setSidebarOpen: (value: boolean) => void
    setIsMobile: (value: boolean) => void
}

export const useUIStore = create<UIStore>(set => ({
    isSidebarOpen: false,
    isMobile: false,
    setSidebarOpen: value => set({ isSidebarOpen: value }),
    setIsMobile: value => set({isMobile: value})
}))

