import { Calendar, Weight, User } from 'lucide-react';
import { FrameInput } from "../frame-inputs/type";

export const userInputs: FrameInput<'gender' | 'age' | 'weight'>[] = [
  {
    key: 'gender',
    label: 'Пол',
    icon: User,
    placeholder: 'Выберите пол',
    type: 'select',
    options: [
      { label: 'Мужчина', value: 'male' },
      { label: 'Женщина', value: 'female' }
    ]
  },
  {
    key: 'age',
    label: 'Возраст',
    icon: Calendar,
    placeholder: 'Например: 25'
  },
  {
    key: 'weight',
    label: 'Вес',
    icon: Weight,
    placeholder: 'Например: 75'
  }
]