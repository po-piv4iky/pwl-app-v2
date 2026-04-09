import { Info } from "lucide-react";
import css from './MaximumTips.module.scss'

export default function MaximumTips() {
  return (
    <div className={css.tipsBlock}>
      <h6 className={css.tipsTitle}>
        <Info size={18} />
        Советы по определению максимума:
      </h6>

      <ul className={css.tipsList}>
        <li>Выполняйте тестовую попытку после хорошего отдыха</li>
        <li>Проводите разминку перед тестированием максимума</li>
        <li>Используйте страховку при работе с большими весами</li>
        <li>Если не уверены — начните с немного меньшего веса</li>
      </ul>
    </div>
  );
}
