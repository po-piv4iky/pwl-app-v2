'use client'


import ActiveProgramHeader from "./active-program-header/ActiveProgramHeader";
import WeekTabs from "./active-program-week-tabs/WeekTabs";
import DayTabs from "./active-program-day-tabs/DayTabs";
import DaysTraining from "./active-program-days-training/DaysTraining";
import Stack from "@/components/layout/stack/Stack";



export default function PlanSession() {
    return (
        <Stack padding>
            <ActiveProgramHeader />
            <WeekTabs />
            <DayTabs />
            <DaysTraining />
        </Stack>
        
    )
}