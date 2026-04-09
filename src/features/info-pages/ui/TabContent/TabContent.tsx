import { TabId } from "../../model/tabs"
import { NutritionContent } from "../content/NutritionContent/NutritionContent"
import { ProgramsContent } from "../content/ProgramsContent/ProgramsContent"
import { SafetyContent } from "../content/SafetyContent/SafetyContent"
import { TechniqueContent } from "../content/TechniqueContent/TechniqueContent"

type Props = {
  activeTab: TabId
}

export function TabContent({activeTab}: Props) {
    const content = {
       programs: <ProgramsContent />,
       technique: <TechniqueContent />,
       nutrition: <NutritionContent />,
       safety: <SafetyContent />
    }
    return (
        <div>
            {content[activeTab]}    
        </div>
    )
}
