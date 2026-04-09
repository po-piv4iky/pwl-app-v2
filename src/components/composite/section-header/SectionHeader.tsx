import css from './SectionHeader.module.scss'
import clsx from 'clsx'

interface Props {
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ title, description, centered }: Props) {
  return (
    <header className={clsx(css.header, {
      [css.centered]: centered
    })}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  )
}