export const tabs = [
    {id: "programs", label: "Программы"},
    {id: "technique", label: "Техника"},
    {id: "nutrition", label: "Питание"},
    {id: "safety", label: "Безопасность"}
] as const // as const присвоение литералых типо - {id: "programs", label: "Программы"} теперь id: "programs" и label: "Программы" не изменный как {id: string, label: string}

// as const делает Тип: под капотом
// readonly [
//   { readonly id: "tab1"; readonly active: true; },
//   { readonly id: "tab2"; readonly active: false; }
// ]

export type Tab = (typeof tabs)[number]
export type TabId = (typeof tabs)[number]["id"] //  TabId = 'programs' | 'technique' | 'nutrition' | 'safety'

// Пошагово:
// typeof tabs → получает тип массива: { id: string; title: string }[].
// [number] → извлекает тип элемента массива: { id: string; title: string }.
// ["id"] → извлекает тип поля id у этого элемента: string.