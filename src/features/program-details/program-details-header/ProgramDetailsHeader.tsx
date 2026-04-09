'use client'

import Button from "@/components/ui/button/Button"
import { ArrowLeft, Calendar, Dumbbell } from "lucide-react"
import css from './ProgramDetailsHeader.module.scss'
import { useRouter } from "next/navigation"

interface Props { 
    title: string
    description: string
    level: string
    weeks: number
    totalDay: number
}

export default function ProgramDetailsHeader({title, description, level, weeks, totalDay}: Props) {
    const router = useRouter()
    return (
        <header className={css.header}>
         <div className={css.topRow}>

            <Button onClick={() => router.back()} className={css.button}><ArrowLeft /></Button>
            <div className={css.content}>
                <div className={css.titleRow}>
                    <h2 className={css.title}>{title}</h2>
                    <span className={css.levelBadge}>{level}</span>
                </div>

                <p className={css.description}>{description}</p>

                <div className={css.meta}>
                    <span className={css.metaItem}><Calendar /> {weeks} недель</span>
                    <span className={css.metaItem}><Dumbbell /> {totalDay} дней</span>
                </div>
            </div>
         </div>
            <div className={css.programDivider} />
        </header>
    )
}



