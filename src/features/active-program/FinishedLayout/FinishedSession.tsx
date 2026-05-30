'use client'

import { PAGE } from "@/config/public-page.config"
import { useActiveProgramStore } from "@/store/active-program.store"
import { useRouter } from "next/navigation"

export default function FinishedSession() {
    const returnToPlan = useActiveProgramStore(s => s.returnToPlan)
    const router = useRouter()
    const handleBackToPlan = () => {
        returnToPlan()
        router.push(PAGE.MY_TRAINING)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <span className="text-lg font-medium">FinishedSession</span>
            <button
                className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-2xl text-white transition-colors w-fit"
                onClick={handleBackToPlan}
            >
                Вернуться в тренировочный план
            </button>
        </div>
    )
}