'use client'

import Button from "@/components/ui/button/Button"
import css from './FooterIsStart.module.scss'
import { Dumbbell } from "lucide-react"
import { useRouter } from "next/navigation"
import { PAGE } from "@/config/public-page.config"
import { useActiveProgramStore } from "@/store/active-program.store"
import { ProgramTraining } from "@/programs/types/program.types"

interface Props {
    program: ProgramTraining
}

export default function FooterIsStart({ program }: Props) {
    const router = useRouter()

    const startProgram = useActiveProgramStore(s => s.startProgram)
    const handleClick = () => {
        startProgram(program)
        router.push(PAGE.MY_TRAINING)
    }
    
    return (
        <div className={css.footerStartBlock}>
            <div className={css.titleBlock}>
                <h5>Готовы начать?</h5>
                <p>Начните программу {program.title} и достигайте новых результатов</p>
            </div>
            <Button onClick={handleClick} className={css.buttonStart}>
                <Dumbbell />
                Начать эту программу
            </Button>
        </div>
    )
}








// export default function FooterIsStart({ program }: Props) {
//   const router = useRouter()
//   const startProgram = useTrainingStore(state => state.startProgram)

//   const handleClick = () => {
//     startProgram(program)
//     router.push(PAGE.MY_TRENING)
//   }

//   return (
//     <div className={css.footerStartBlock}>
//       <div className={css.titleBlock}>
//         <h5>Готовы начать?</h5>
//         <p>Начните программу "{program.title}" и достигайте новых результатов</p>
//       </div>

//       <Button onClick={handleClick} className={css.buttonStart}>
//         <Dumbbell />
//         Начать эту программу
//       </Button>
//     </div>
//   )
// }
