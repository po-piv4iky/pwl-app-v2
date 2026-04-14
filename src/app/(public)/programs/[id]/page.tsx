import NotFound from "@/app/not-found";
import ProgramDetailsPage from "@/features/program-details/ProgramDetailsPage";
import { getProgramById } from "@/programs/routines/getProgramById";

type Props = {
    params: Promise<{id: string}>
}

export default async function ProgramPage({params}: Props) {
    const { id } = await params

    const program = getProgramById(id)
    
    if(!program){
      return <NotFound />
    }
    return <ProgramDetailsPage program={program}/> 
}



