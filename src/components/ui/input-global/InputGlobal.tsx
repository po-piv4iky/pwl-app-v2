import { InputValueMap } from "@/config/frame-inputs/type"
import { LucideIcon } from "lucide-react"
import css from './InputGlobal.module.scss'
import clsx from "clsx"

type InputType = "number" | "select"

interface Props<T extends keyof InputValueMap> {
  id: T
  label: string
  icon: LucideIcon
  placeholder?: string
  type?: InputType
  value: InputValueMap[T] | ""
  onChange: (value: InputValueMap[T]) => void
  options?: { label: string; value: InputValueMap[T] }[]
  border?: boolean
}

export default function InputGlobal<T extends keyof InputValueMap>({
  id,
  label,
  icon: Icon,
  placeholder,
  type = "number",
  value,
  onChange,
  options,
  border
}: Props<T>) {

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    onChange((val === "" ? "" : Number(val)) as InputValueMap[T])
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as InputValueMap[T])
  }

  return (
    <div className={clsx(css.inputBlock, { [css.borderBlock]: border })}>

      {/* Верхний блок с иконкой */}
      <div className={css.liftTypeBlock}>
        <div className={clsx(css.iconBlock, css[id])}>
          <Icon size={24} />
        </div>
        <h6>{label}</h6>
      </div>

      {/* SELECT */}
      {type === "select" ? (
        <select
          className={css.input}
          value={value}
          onChange={handleSelectChange}
        >
          <option value="">Выберите</option>
          {options?.map((opt) => (
            <option key={String(opt.value)} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        // NUMBER
        <input
          className={css.input}
          type="number"
          value={value}
          onChange={handleNumberChange}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}