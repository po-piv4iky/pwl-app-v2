'use client'

import css from './maximum.module.scss'
import MaximumTips from './MaximumTips/MaximumTips'
import SectionHeader from '@/components/composite/section-header/SectionHeader'
import FrameTheInputs from '@/components/composite/frame-the-inputs/FrameTheInputs'
import Container from '@/components/layout/container/Container'
import { liftInputs } from '@/config/liftInputs/liftInputs'
import { maxesSchema } from '@/lib/validation'
import { useUserMaxesStore } from '@/store/maxes.store'
import Stack from '@/components/layout/stack/Stack'

export default function MyMaximumPage() {
  const { maxes, setAllMaxes } = useUserMaxesStore()

  return (
    <Container size='narrow'>
      <Stack padding>
        <SectionHeader
          title='Мои максимумы'
          description='Укажите ваши текущие разовые максимумы (1ПМ) для расчёта рабочих весов'
          centered
        />

        <FrameTheInputs
          title='Разовые максимумы'
          description='Укажите максимальный вес, который вы можете поднять на одно повторение с правильной техникой'
          inputs={liftInputs}
          schema={maxesSchema}
          initialValues={{
            ...(maxes.bench > 0 ? { bench: maxes.bench } : {}),
            ...(maxes.squat > 0 ? { squat: maxes.squat } : {}),
            ...(maxes.deadlift > 0 ? { deadlift: maxes.deadlift } : {})
          }}
          submitLabel='Сохранить максимумы'
          onSave={setAllMaxes}
        />

        <MaximumTips />
      </Stack>
    </Container>
  )
}
