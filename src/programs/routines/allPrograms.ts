import { ProgramTraining } from "../types/program.types";
import { benchForHardWorkers } from "./programs-sheiko/sheiko-bench/benchForHardWorkers.data";
import { surovetskyBenchStandard } from "./programs-surovetsky/surovetsky-bench/surovetskyStandard.data";
import { surovetskyDeadliftCycle } from "./programs-surovetsky/surovetsky-dead-lift/surovetskyDeadliftCycle";

export const allPrograms: ProgramTraining[] = [
  surovetskyBenchStandard,
  benchForHardWorkers,
  surovetskyDeadliftCycle
];