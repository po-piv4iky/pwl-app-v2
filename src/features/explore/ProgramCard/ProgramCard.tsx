'use client'

import { ProgramPreview } from "@/config/programs/types/programPreview.types";
import css from "./ProgramCard.module.scss";
import { useUserMaxesStore } from "@/store/maxes.store";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config/public-page.config";

type Props = {
  data: ProgramPreview;
};

export default function ProgramCard({ data }: Props) {
  const { maxes } = useUserMaxesStore();
  const router = useRouter();

  const handleClick = () => {
    if (data.lift === "complex") {
      const allMaxes = ["bench", "squat", "deadlift"] as const;
      const hasAllMaxes = allMaxes.every((lift) => maxes[lift] > 0);

      if (!hasAllMaxes) {
        router.push(PAGE.MY_MAXIMUM);
        return;
      }
    } else {
      if (maxes[data.lift] === 0) {
        router.push(PAGE.MY_MAXIMUM);
        return;
      }
    }

    router.push(`/programs/${data.id}`);
  };

  return (
    <div onClick={handleClick} className={css.card}>
      <div className={css.header}>
        <div className={css.titleRow}>
          <h6 className={css.title}>{data.title}</h6>
          <span className={css.level}>{data.level}</span>
        </div>

        <p className={css.duration}>{data.durationWeeks}</p>
      </div>

      <div className={css.content}>
        <p className={css.description}>{data.description}</p>
        <span className={css.action}>Выбрать программу</span>
      </div>
    </div>
  );
}
