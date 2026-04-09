"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select"
import { cn } from "@/lib/utils"
import css from "./UiSelect.module.scss"

export type UiSelectOption = {
  label: string
  value: string
}

interface Props {
  value?: string
  placeholder?: string
  options: UiSelectOption[]
  onChange: (value: string) => void
  disabled?: boolean
  className?: string
}

export function UiSelect({
  value,
  placeholder = "Выберите значение",
  options,
  onChange,
  disabled,
  className,
}: Props) {
  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className={cn("!h-auto min-h-0", css.trigger, className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="cursor-pointer"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
