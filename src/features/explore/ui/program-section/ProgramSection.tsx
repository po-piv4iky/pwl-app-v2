import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'
import IconBadge from '@/components/ui/icon-badge/IconBadge'
import css from './ProgramSection.module.scss'

export type ProgramSectionTheme = 'bench' | 'squat' | 'deadlift' | 'complex'

interface Props {
  title: string
  icon: LucideIcon
  theme?: ProgramSectionTheme
  className?: string
  children: ReactNode
}

export default function ProgramSection({
  title,
  icon,
  theme = 'bench',
  className,
  children
}: Props) {
  return (
    <section className={clsx(css.section, css[theme], className)}>
      <div className={css.header}>
        <IconBadge icon={icon} className={css.badge} />
        <h4 className={css.title}>{title}</h4>
      </div>

      {children}
    </section>
  )
}
