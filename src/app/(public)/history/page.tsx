'use client'

import SectionHeader from "@/components/composite/section-header/SectionHeader";
import Container from "@/components/layout/container/Container";
import NoField from "@/components/no-field/NoField";
import { CircleAlert } from "lucide-react";

export default function History() {
    return (

        <Container>

            <SectionHeader 
            title="История тренировок"
            description="Просматривайте ваши прошлые тренировки и отслеживайте прогресс"
            
            />

            <NoField 
              icon={CircleAlert}
              title="История тренировок пуста"
              description="Здесь будут отображаться ваши завершенные тренировки. Начните свою первую тренировку, чтобы увидеть результаты."
            />
        </Container>
    )
}
