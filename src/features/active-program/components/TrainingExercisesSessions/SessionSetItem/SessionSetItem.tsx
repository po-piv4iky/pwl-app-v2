import { SessionSet, useActiveProgramStore } from '@/store/active-program.store'
import css from './SessionSetItem.module.scss'

interface Props {
  item: SessionSet
  exerciseIndex: number
}

export default function SessionSetItem({ item, exerciseIndex }: Props) {
  const startRestTimer = useActiveProgramStore((s) => s.startRestTimer)
  const toggleSetCompletion = useActiveProgramStore((s) => s.toggleSetCompletion)

  const handleToggleSet = () => {
    toggleSetCompletion(exerciseIndex, item.id)

    if (!item.isCompleted) {
      startRestTimer(120)
    }
  }

  return (
    <div className={css.sessionSet}>
      <label className={css.checkboxWrapper}>
        <input
          type='checkbox'
          checked={item.isCompleted}
          onChange={handleToggleSet}
          className={css.checkboxInput}
        />

        <span className={css.checkboxCustom} />
      </label>

      <div className={css.content}>
        <div className={css.header}>
          <h6 className={css.title}>Подход {item.setNumber}</h6>

          {item.isCompleted && (
            <span className={css.completedBadge}>Выполнено</span>
          )}
        </div>

        <p className={css.subtitle}>
          Цель: {item.targetReps} повт. × {item.targetWeight} кг
          {item.intensity && (
            <span className={css.intensity}> {item.intensity}%</span>
          )}
        </p>

        <div className={css.inputs}>
          <input
            className={css.input}
            placeholder={String(item.actualWeight)}
          />

          <span className={css.inputLabel}>кг ×</span>

          <input
            className={css.input}
            placeholder={String(item.actualReps)}
          />

          <span className={css.inputLabel}>повт.</span>
        </div>
      </div>
    </div>
  )
}
