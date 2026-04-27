import clsx from 'clsx'
import { SessionSet, useActiveProgramStore } from '@/store/active-program.store'
import css from './SessionSetItem.module.scss'
import Badge from '@/components/ui/badge/Badge'

interface Props {
  item: SessionSet
  exerciseIndex: number
  isActive: boolean
  isLocked: boolean
}

type SetStatus = 'default' | 'active' | 'locked' | 'completed'

export default function SessionSetItem({ item, exerciseIndex, isActive, isLocked }: Props) {
  const startRestTimer = useActiveProgramStore((s) => s.startRestTimer)
  const toggleSetCompletion = useActiveProgramStore((s) => s.toggleSetCompletion)
  const updateSetActualValues = useActiveProgramStore(
    (s) => s.updateSetActualValues
  )

  const handleToggleSet = () => {
    toggleSetCompletion(exerciseIndex, item.id)

    if (!item.isCompleted) {
      startRestTimer(120)
    }
  }
    const getStatus = (): SetStatus => {
    if (item.isCompleted) return 'completed'
    if (isLocked) return 'locked'
    if (isActive) return 'active'

    return 'default'
  }

  const status = getStatus()

  return (
    <div className={clsx(css.sessionSet, css[`sessionSet--${status}`])}>
      <label className={css.checkboxWrapper}>
        <input
          type='checkbox'
          checked={item.isCompleted}
          disabled={isLocked || item.isCompleted}
          onChange={handleToggleSet}
          className={css.checkboxInput}
        />

        <span className={css.checkboxCustom} />
      </label>

      <div className={css.content}>
        <div className={css.header}>
          <h6 className={css.title}>Подход {item.setNumber}</h6>

          {item.isCompleted && (
            <Badge variant='green'>Выполнено</Badge>
          )}
          {isActive && (
            <Badge variant='red'>Активный</Badge>
          )}

        </div>

        <p className={css.subtitle}>
          Цель: {item.targetReps} повт. × {item.targetWeight} кг
          {item.intensity && (
            <span className={css.intensity}> · {item.intensity}%</span>
          )}
        </p>

        <div className={css.inputs}>
          <p>Факт: </p>
          <div className='flex gap-6'>
            <input
            type='number'
            className={css.input}
            placeholder={String(item.actualWeight)}
            disabled={isLocked || item.isCompleted}
            onChange={(e) =>
                updateSetActualValues(exerciseIndex, item.id, {
                  actualWeight: Number(e.target.value),
                })
              }
          />

          <span className={css.inputLabel}>кг ×</span>

          <input
            type='number'
            className={css.input}
            placeholder={String(item.actualReps)}
            disabled={isLocked || item.isCompleted}
            onChange={(e) =>
                updateSetActualValues(exerciseIndex, item.id, {
                  actualWeight: Number(e.target.value),
                })
              }
          />
          </div>
          <span className={css.inputLabel}>повт.</span>
        </div>
      </div>
    </div>
  )
}

// import clsx from 'clsx'
// import { SessionSet, useActiveProgramStore } from '@/store/active-program.store'
// import css from './SessionSetItem.module.scss'
// import Badge from '@/components/ui/badge/Badge'

// interface Props {
//   item: SessionSet
//   exerciseIndex: number
//   isActive: boolean
//   isLocked: boolean
// }

// type SetStatus = 'default' | 'active' | 'locked' | 'completed'

// export default function SessionSetItem({
//   item,
//   exerciseIndex,
//   isActive,
//   isLocked,
// }: Props) {
//   const startRestTimer = useActiveProgramStore((s) => s.startRestTimer)
//   const toggleSetCompletion = useActiveProgramStore((s) => s.toggleSetCompletion)
//   const updateSetActualValues = useActiveProgramStore(
//     (s) => s.updateSetActualValues
//   )

//   const getStatus = (): SetStatus => {
//     if (item.isCompleted) return 'completed'
//     if (isLocked) return 'locked'
//     if (isActive) return 'active'

//     return 'default'
//   }

//   const status = getStatus()

//   const canComplete = status === 'active'
//   const canEdit = status === 'active' || status === 'completed'
//   const canCancel = status === 'completed'

//   const handleCompleteSet = () => {
//     if (!canComplete) return

//     toggleSetCompletion(exerciseIndex, item.id)
//     startRestTimer(120)
//   }

//   const handleCancelCompletedSet = () => {
//     if (!canCancel) return

//     const isConfirmed = window.confirm(
//       `Отменить выполнение подхода ${item.setNumber}?`
//     )

//     if (!isConfirmed) return

//     toggleSetCompletion(exerciseIndex, item.id)
//   }

//   return (
//     <div className={clsx(css.sessionSet, css[`sessionSet--${status}`])}>
//       <label className={css.checkboxWrapper}>
//         <input
//           type="checkbox"
//           checked={item.isCompleted}
//           disabled={!canComplete}
//           onChange={handleCompleteSet}
//           className={css.checkboxInput}
//         />

//         <span className={css.checkboxCustom} />
//       </label>

//       <div className={css.content}>
//         <div className={css.header}>
//           <div className={css.titleBlock}>
//             <h6 className={css.title}>Подход {item.setNumber}</h6>

//             <div className={css.badges}>
//               {status === 'completed' && (
//                 <Badge variant="green">Выполнено</Badge>
//               )}

//               {status === 'active' && (
//                 <Badge variant="red">Активный</Badge>
//               )}

//               {status === 'locked' && (
//                 <Badge variant="gray">Заблокирован</Badge>
//               )}
//             </div>
//           </div>

//           {canCancel && (
//             <button
//               type="button"
//               className={css.cancelButton}
//               onClick={handleCancelCompletedSet}
//             >
//               Отменить
//             </button>
//           )}
//         </div>

//         <div className={css.planBlock}>
//           <span className={css.planLabel}>Цель</span>

//           <span className={css.planValue}>
//             {item.targetWeight} кг × {item.targetReps} повт.
//             {item.intensity ? (
//               <span className={css.intensity}> · {item.intensity}%</span>
//             ) : null}
//           </span>
//         </div>

//         <div className={css.factBlock}>
//           <span className={css.factLabel}>Факт</span>

//           <div className={css.inputs}>
//             <input
//               className={css.input}
//               type="number"
//               value={item.actualWeight}
//               disabled={!canEdit}
//               onChange={(e) =>
//                 updateSetActualValues(exerciseIndex, item.id, {
//                   actualWeight: Number(e.target.value),
//                 })
//               }
//             />

//             <span className={css.inputLabel}>кг ×</span>

//             <input
//               className={css.input}
//               type="number"
//               value={item.actualReps}
//               disabled={!canEdit}
//               onChange={(e) =>
//                 updateSetActualValues(exerciseIndex, item.id, {
//                   actualReps: Number(e.target.value),
//                 })
//               }
//             />

//             <span className={css.inputLabel}>повт.</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }