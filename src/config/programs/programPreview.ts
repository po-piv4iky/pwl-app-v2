import { benchForHardWorkers } from "@/programs/routines/programs-sheiko/sheiko-bench/bench-for-hard-workers.data";
import { surovetskyBenchStandard } from "./surovetskyStandard.data";
import { ProgramPreview } from "./types/programPreview.types";

export const programPreviews: ProgramPreview[] = [
  {
    id: surovetskyBenchStandard.id,
    title: surovetskyBenchStandard.title,
    author: surovetskyBenchStandard.author,
    lift: surovetskyBenchStandard.lift,
    level: surovetskyBenchStandard.level,
    description: surovetskyBenchStandard.description,
    durationWeeks: surovetskyBenchStandard.cycleWeeks,
  },
  {
    id: benchForHardWorkers.id,
    title: benchForHardWorkers.title,
    author: benchForHardWorkers.author,
    lift: benchForHardWorkers.lift,
    level: benchForHardWorkers.level,
    description: benchForHardWorkers.description,
    durationWeeks: benchForHardWorkers.cycleWeeks,

  }
];


