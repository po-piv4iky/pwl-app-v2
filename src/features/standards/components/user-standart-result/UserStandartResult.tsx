'use client'

import { useState } from 'react'
import { Trophy } from 'lucide-react'

import SectionHeader from '@/components/composite/section-header/SectionHeader'
import Container from '@/components/layout/container/Container'
import Stack from '@/components/layout/stack/Stack'
import SettingsField from '@/components/ui/settings-field/SettingsField'
import SegmentedControl from '@/components/ui/segmented-control/SegmentedControl'
import { UiSelect } from '@/components/ui/ui-select/UiSelect'
import NoField from '@/components/no-field/NoField'

import UserRender from '../user-render/UserRender'
import ProgressToRank from '../progress-to-rank/ProgressToRank'
import FederationPreviewCard from '../federation-preview/FederationPreviewCard'

import css from './UserStandartResult.module.scss'

import { useStandartUserStore } from '@/store/user-standart.store'
import { useUserMaxesStore } from '@/store/maxes.store'

import { federationOptions } from '@/config/federations/federation-options'
import { getFederationById } from '@/config/federations/get-federation-by-id'
import { FederationId } from '@/config/federations/federation.types'
import { PAGE } from '@/config/public-page.config'

import {
  CalculateAthleteLevelParams,
  LiftMode,
} from '../../types/standart.types'
import { calculateAthleteLevel } from '../../lib/calculate-athlete-level'
import AllStandards from '../all-standards/AllStandards'

const modeOptions: { label: string; value: LiftMode }[] = [
  { label: 'Сумма', value: 'total' },
  { label: 'Жим', value: 'bench' },
  { label: 'Присед', value: 'squat' },
  { label: 'Тяга', value: 'deadlift' },
]

export default function UserStandartResult() {
  const [mode, setMode] = useState<LiftMode>('total')

  const gender = useStandartUserStore((state) => state.gender)
  const age = useStandartUserStore((state) => state.age)
  const weight = useStandartUserStore((state) => state.weight)
  const federation = useStandartUserStore((state) => state.federation)
  const setFederation = useStandartUserStore((state) => state.setFederation)

  const { bench, squat, deadlift } = useUserMaxesStore((state) => state.maxes)

  const results = {
    bench,
    squat,
    deadlift,
    total: bench + squat + deadlift,
  }

  const hasMaximums = bench > 0 && squat > 0 && deadlift > 0

  const canCalculate =
    gender !== null &&
    age !== null &&
    weight !== null &&
    federation !== null &&
    hasMaximums

  const params: CalculateAthleteLevelParams | null = canCalculate
    ? {
        federation,
        gender,
        age,
        weight,
        mode,
        results,
      }
    : null

  const athleteLevel = params ? calculateAthleteLevel(params) : null

  const selectedFederation = federation
    ? getFederationById(federation)
    : null

  const handleFederationChange = (value: string) => {
    setFederation(value as FederationId)
  }

  return (
    <Container size='classic'>
      <Stack>
        <SectionHeader
          title='Разряды и нормативы'
          description='Ваш текущий уровень в пауэрлифтинге'
          centered
        />

        <UserRender />

        <div className={css.controls}>
          <SettingsField title='Федерация'>
            <UiSelect
              value={federation ?? 'base'}
              options={federationOptions}
              onChange={handleFederationChange}
            />
          </SettingsField>

          <SettingsField title='Режим просмотра'>
            <SegmentedControl
              value={mode}
              options={modeOptions}
              onChange={setMode}
            />
          </SettingsField>
        </div>

        {athleteLevel ? (
          <ProgressToRank athleteLevel={athleteLevel} />
        ) : (
          <NoField
            icon={Trophy}
            title='Максимумы не заполнены'
            description='Заполните свои максимумы в разделе "Мои максимумы", чтобы увидеть свой разряд'
            showButton
            buttonText='Заполнить максимумы'
            buttonHref={PAGE.MY_MAXIMUM}
          />
        )}

          <AllStandards 
            mode={mode}
          />

        {selectedFederation && (
          <FederationPreviewCard federation={selectedFederation} />
        )}

      </Stack>
    </Container>
  )
}