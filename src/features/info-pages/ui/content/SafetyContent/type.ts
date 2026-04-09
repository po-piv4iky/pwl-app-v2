export interface SafetyRule {
  id: string
  title: string
  description: string
}

export interface SafetyContent {
  title: string
  warning: string
  rules: SafetyRule[]
}