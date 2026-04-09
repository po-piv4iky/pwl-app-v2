import Link from 'next/link'
import css from './FederationPreviewCard.module.scss'
import { BadgeCheck, ShieldCheck, ShieldOff, ArrowRight } from 'lucide-react'
import { Federation } from '@/config/federations/federation.types'

interface Props {
  federation: Federation | null
}

export default function FederationPreviewCard({ federation }: Props) {
  if (!federation) return null

  return (
    <section className={css.card}>
      <div className={css.header}>
        <div className={css.badge}>
          <BadgeCheck size={16} />
          <span>{federation.shortName}</span>
        </div>

        <div className={css.statuses}>
          <span
            className={
              federation.isOfficial ? css.statusOfficial : css.statusAlternative
            }
          >
            {federation.isOfficial ? 'Официальная' : 'Альтернативная'}
          </span>

          <span
            className={
              federation.hasDopingControl ? css.statusDoping : css.statusNoDoping
            }
          >
            {federation.hasDopingControl ? 'Есть допинг-контроль' : 'Без допинг-контроля'}
          </span>
        </div>
      </div>

      <div className={css.body}>
        <h3 className={css.title}>{federation.fullName}</h3>
        <p className={css.description}>{federation.preview.shortDescription}</p>
      </div>

      <div className={css.infoGrid}>
        <div className={css.infoItem}>
          <div className={css.infoLabel}>Статус</div>
          <div className={css.infoValue}>
            {federation.isOfficial ? 'Официальная федерация' : 'Альтернативная федерация'}
          </div>
        </div>

        <div className={css.infoItem}>
          <div className={css.infoLabel}>Допинг-контроль</div>
          <div className={css.infoValue}>
            {federation.hasDopingControl ? 'Есть' : 'Нет'}
          </div>
        </div>
      </div>

      <div className={css.features}>
        <h4 className={css.featuresTitle}>Основные особенности</h4>

        <ul className={css.featureList}>
          {federation.preview.features.map((feature) => (
            <li key={feature.id} className={css.featureItem}>
              <span className={css.featureDot} />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link href={`/federations/${federation.id}`} className={css.moreButton}>
        <span>Подробнее о федерации</span>
        <ArrowRight size={16} />
      </Link>
    </section>
  )
}