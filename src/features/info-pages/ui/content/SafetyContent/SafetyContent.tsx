import { Shield, Flame, ShieldCheck, Activity } from "lucide-react"
import { SafetyData } from "./safety-data"
import css from "./SafetyContent.module.scss"

export function SafetyContent() {
  const data = SafetyData

  const icons = {
    warmup: <Flame />,
    spotter: <ShieldCheck />,
    technique: <Activity />
  }

  return (
    <div className={css.safety}>
      {/* HEADER */}
      <div className={css.safetyHeader}>
        <Shield className={css.safetyHeaderIcon} />
        <h6 className={css.safetyTitle}>{data.title}</h6>
      </div>

      {/* WARNING */}
      <div className={css.safetyWarning}>
        <h6 className={css.safetyWarningTitle}>Важно помнить</h6>
        <p>{data.warning}</p>
      </div>

      {/* RULES */}
      <div className={css.safetyRules}>
        <h6 className={css.safetyRulesTitle}>Правила безопасности</h6>

        {data.rules.map(rule => (
          <div key={rule.id} className={css.safetyRule}>
            
            <div className={css.safetyRuleIcon}>
              {icons[rule.id as keyof typeof icons]}
            </div>

            <div className={css.safetyRuleContent}>
              <span className={css.safetyRuleTitle}>{rule.title}</span>
              <p className={css.safetyRuleDescription}>
                {rule.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}