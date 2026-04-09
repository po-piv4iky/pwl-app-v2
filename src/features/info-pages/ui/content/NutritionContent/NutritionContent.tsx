import { Apple } from "lucide-react";
import css from './NutritionContent.module.scss'
import { NutritionData } from "./data";
import cn from 'clsx'

export function NutritionContent() {
    const data = NutritionData
    return (
        <div className={css.nutrition}>
            <div className={css.nutritionHeader}>
                <Apple className={css.nutritionHeaderIcon}/>
                <h6>{data.title}</h6>
            </div>
            <p className={css.nutritionDescription}>{data.description}</p>

            <div className={css.nutritionList}>
                {data.items.map((item, index) => (
                    <div
                      key={item.id}
                      className={cn(css.nutritionItem, css[`nutritionItemVariant${index}`])}
                    >
                        <h6>{item.label}</h6>
                        <span className={css.nutritionItemValue}>{item.value}</span>
                        <p className={css.nutritionItemDescription}>{item.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
