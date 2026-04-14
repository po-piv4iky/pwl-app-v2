import { surovetskyBenchStandard } from "@/programs/routines/programs-surovetsky/surovetsky-bench/surovetskyStandard.data";
import { ProgramsPreview } from "./types/programsPreview.types";
import { benchForHardWorkers } from "@/programs/routines/programs-sheiko/sheiko-bench/benchForHardWorkers.data";

export const programsPreviews: ProgramsPreview[] = [
  {
    id: surovetskyBenchStandard.id,
    title: surovetskyBenchStandard.title,
    author: surovetskyBenchStandard.author,
    lift: surovetskyBenchStandard.lift,
    level: surovetskyBenchStandard.level,
    description: surovetskyBenchStandard.description,
    durationWeeks: surovetskyBenchStandard.durationWeeks,
  },
  {
    id: benchForHardWorkers.id,
    title: benchForHardWorkers.title,
    author: benchForHardWorkers.author,
    lift: benchForHardWorkers.lift,
    level: benchForHardWorkers.level,
    description: benchForHardWorkers.description,
    durationWeeks: benchForHardWorkers.durationWeeks,

  }
];


