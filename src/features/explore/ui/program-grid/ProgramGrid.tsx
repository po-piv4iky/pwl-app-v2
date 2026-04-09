import { ReactNode } from 'react'
import css from './ProgramGrid.module.scss'

interface Props {
  children: ReactNode
}

export default function ProgramGrid({ children }: Props) {
  return <div className={css.grid}>{children}</div>
}
