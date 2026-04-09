export type LiftMode = 'total' | 'bench' | 'squat' | 'deadlift'

export type FederationId =
  | 'base'
  | 'fpr'
  | 'ipf'
  | 'wrpf'
  | 'wpc'
  | 'awpc'
  | 'nap'
  | 'spr'

export type FederationFeature = {
  id: string
  text: string
}

export type FederationPreview = {
  shortDescription: string
  features: FederationFeature[]
}

export type FederationAbout = {
  title: string
  subtitle?: string
  description: string
  foundedYear?: number
  recognizedByIOC?: boolean
  equipment?: string
  features: FederationFeature[]
}

export type Federation = {
  id: FederationId

  shortName: string
  fullName: string
  description: string

  isOfficial: boolean
  hasDopingControl: boolean
  supportedModes: LiftMode[]

  preview: FederationPreview
  about: FederationAbout
}