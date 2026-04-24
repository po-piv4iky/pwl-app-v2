'use client'

import { useState } from "react";
import { TabId, tabs } from "./model/tabs";
import Tabs from "./ui/Tabs/Tabs";
import { TabContent } from "./ui/TabContent/TabContent";
import css from './InfoPage.module.scss'
import SectionHeader from "@/components/composite/section-header/SectionHeader";
import Container from "@/components/layout/container/Container";
import Stack from "@/components/layout/stack/Stack";

export default function InfoPage() {
    const [activeTab, setActiveTab] = useState<TabId>("programs")
    return (
     <Container>
      <Stack>
            <SectionHeader 
              title="Информация"
              description="Узнайте больше о программах тренировок и пауэрлифтинге"
            />
            <div className={css.infoTabsContent}>
              <Tabs 
                tabs={tabs} 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabContent activeTab={activeTab}/>
            </div>
      </Stack>
     </Container> 
    )
}
