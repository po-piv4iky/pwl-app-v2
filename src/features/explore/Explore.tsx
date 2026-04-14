import ProgramCard from '@/features/explore/ProgramCard/ProgramCard'
import css from './Explore.module.scss'
import SectionHeader from '@/components/composite/section-header/SectionHeader'
import Container from '@/components/layout/container/Container'
import ProgramGrid from '@/features/explore/ui/program-grid/ProgramGrid'
import ProgramSection from '@/features/explore/ui/program-section/ProgramSection'
import { exploreSections } from '@/features/explore/model/sections'
import { programsPreviews } from '@/config/programs-preview/programsPreview.data'

export function Explore() {
  return (
    <Container>
        <SectionHeader
          title='Программы тренировок'
          description='Выберите программу для специализации по одному из упражнений или комплексную программу для развития всех движений'
          centered
        />

        <div className={css.sections}>
          {exploreSections
            .map((section) => ({
              ...section,
              items: programsPreviews.filter((item) => item.lift === section.key)
            }))
            .filter((section) => section.items.length > 0)
            .map((section) => (
              <ProgramSection
                key={section.key}
                title={section.title}
                icon={section.icon}
                theme={section.key}
              >
                <ProgramGrid>
                  {section.items.map((item) => (
                    <ProgramCard key={item.id} data={item} />
                  ))}
                </ProgramGrid>
              </ProgramSection>
            ))}
        </div>
    </Container>
  )
}
