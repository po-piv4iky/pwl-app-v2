import { Dot, Flame, Pyramid, Trophy } from "lucide-react"
import { surovetskyProgram } from "./data"
import css from "./ProgramsContent.module.scss"
import cn from 'clsx'

export function ProgramsContent() {
  const data = surovetskyProgram

  return (
    <div className={css.program}>
      
      {/* TITLE */}
      <div className={css.programHeader}>
        <Trophy className={css.programHeaderIcon}/>
        <h6 className={css.programTitle}>{data.title}</h6>
      </div>

      <p className={css.programDescription}>{data.description}</p>

      {/* PRINCIPLES */}
      <div className={css.programSection}>
        <div className={css.programSectionHeader}>
          <Flame className={css.programSectionIcon}/>
          <h3>Принципы программы</h3>
        </div>

        <ul className={css.programList}>
          {data.principles.map(item => (
            <li key={item}><Dot className={css.programListIcon}/>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRUCTURE */}
      <div className={css.programSection}>
        <div className={css.programSectionHeader}>
          <Pyramid className={cn(css.programSectionIcon, css.programSectionIconPyramid)}/>
          <h6>Структура программы</h6>
        </div>

        <div className={css.programStructure}>
          {data.structure.map(item => (
            <div key={item.label} className={css.programStat}>
              <div className={css.programStatValue}>{item.value}</div>
              <div className={css.programStatLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RESULT */}
      <div className={css.programResult}>
        <h6>Ожидаемый результат</h6>
        <p>{data.result}</p>
      </div>
    </div>
  )
}

// .programSectionIcon
// .programSectionIconPyramid // modifier
// .programSectionIconFlame   // modifier