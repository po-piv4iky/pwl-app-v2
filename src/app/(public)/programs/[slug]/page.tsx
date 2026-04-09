import ProgramDetailsPage from '../../../../features/program-details/ProgramDetailsPage';
import { surovetskyBenchStandard } from "@/config/programs/surovetskyStandard.data";



export default function Program() {
    return (
        <ProgramDetailsPage program={surovetskyBenchStandard}/>
    )
}



