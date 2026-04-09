'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'
import { z } from 'zod'
import css from './FrameTheInputs.module.scss'
import { FrameInput, FormData, InputValueMap } from '@/config/frame-inputs/type'
import Button from '@/components/ui/button/Button'
import InputGlobal from '@/components/ui/input-global/InputGlobal'

interface Props<T extends keyof InputValueMap> {
  title: string
  description: string
  inputs: FrameInput<T>[]
  schema: z.ZodType<FormData<T>>
  onSave: (data: FormData<T>) => void
  initialValues?: Partial<FormData<T>>
  submitLabel?: string
}

export default function FrameTheInputs<T extends keyof InputValueMap>({
  title,
  description,
  inputs,
  schema,
  onSave,
  initialValues,
  submitLabel = 'Сохранить'
}: Props<T>) {
  const [data, setData] = useState<Partial<FormData<T>>>(initialValues ?? {})
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = <K extends T>(key: K, value: InputValueMap[K]) => {
    setData((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSubmit = () => {
    const result = schema.safeParse(data)

    if (!result.success) {
      const formatted: Record<string, string> = {}

      result.error.issues.forEach((err) => {
        const key = err.path[0] as string
        formatted[key] = err.message
      })

      setErrors(formatted)
      return
    }

    setErrors({})
    onSave(result.data)
  }

  return (
    <div className={css.sectionMaximum}>
      <div className={css.infoBase}>
        <h6 className={css.infoTitle}>
          <Save />
          {title}
        </h6>
        <p>{description}</p>
      </div>

      {inputs.map(({ key, label, icon, placeholder, type, options, border }) => (
        <div key={key}>
          <InputGlobal
            id={key}
            label={label}
            icon={icon}
            placeholder={placeholder}
            type={type}
            options={options}
            border={border}
            value={data[key] ?? ''}
            onChange={(value) => handleChange(key, value)}
          />

          {errors[key] && (
            <p style={{ color: 'red', marginTop: 4 }}>
              {errors[key]}
            </p>
          )}
        </div>
      ))}

      <Button onClick={handleSubmit} className={css.saveButton}>
        <Save size={25} />
        {submitLabel}
      </Button>
    </div>
  )
}
