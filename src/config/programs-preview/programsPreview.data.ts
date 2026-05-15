import { surovetskyBenchStandard } from '@/programs/routines/programs-surovetsky/surovetsky-bench/surovetskyStandard.data'
import { ProgramsPreview } from './types/programsPreview.types'
import { benchForHardWorkers } from '@/programs/routines/programs-sheiko/sheiko-bench/benchForHardWorkers.data'
import { surovetskyDeadliftCycle } from '@/programs/routines/programs-surovetsky/surovetsky-dead-lift/surovetskyDeadliftCycle'

export const programsPreviews: ProgramsPreview[] = [
  {
    id: surovetskyBenchStandard.id,
    title: surovetskyBenchStandard.title,
    author: surovetskyBenchStandard.author,
    lift: surovetskyBenchStandard.lift,
    level: surovetskyBenchStandard.level,
    descriptionPreview: surovetskyBenchStandard.descriptionPreview,
    durationWeeks: surovetskyBenchStandard.durationWeeks,
  },
  {
    id: benchForHardWorkers.id,
    title: benchForHardWorkers.title,
    author: benchForHardWorkers.author,
    lift: benchForHardWorkers.lift,
    level: benchForHardWorkers.level,
    descriptionPreview: benchForHardWorkers.descriptionPreview,
    durationWeeks: benchForHardWorkers.durationWeeks,
  },
  {
    id: surovetskyDeadliftCycle.id,
    title: surovetskyDeadliftCycle.title,
    author: surovetskyDeadliftCycle.author,
    lift: surovetskyDeadliftCycle.lift,
    level: surovetskyDeadliftCycle.level,
    descriptionPreview: surovetskyDeadliftCycle.descriptionPreview,
    durationWeeks: surovetskyDeadliftCycle.durationWeeks,
  },
]
