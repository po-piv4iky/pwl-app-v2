'use client'

import Container from "@/components/layout/container/Container"
import FrameTheInputs from "@/components/composite/frame-the-inputs/FrameTheInputs"
import SectionHeader from "@/components/composite/section-header/SectionHeader"
import { userInputs } from "@/config/standartUserInputs/standartUserInputs"
import UserStandartResult from "@/features/standards/components/user-standart-result/UserStandartResult"
import { userSchema } from "@/lib/validation"
import { useStandartUserStore } from "@/store/user-standart.store"
import Stack from "@/components/layout/stack/Stack"


export default function Standarts() {

  const { gender, age, weight, setAll } = useStandartUserStore()

  const isFilled = gender && age && weight

  // 🔥 если данные есть → показываем результат
  if (isFilled) {
    return (
      <UserStandartResult />
    )
  }

  // 🔥 иначе форма
  return (
    <Container size="narrow">
      <Stack padding>
      <SectionHeader 
        title="Разряды и нормативы"    
        description="Ваш текущий уровень в пауэрлифтинге"  
        centered
      />

      <FrameTheInputs
        title="Профиль атлета"
        description="Заполните информацию о себе для определения разряда"
        inputs={userInputs}
        schema={userSchema}
        onSave={(data) => {
          setAll(data)
        }}
      />
      </Stack>
    </Container>
  )
}





