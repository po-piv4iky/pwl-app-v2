import { federations } from './federations'

export const federationOptions = federations.map((federation) => ({
  label: federation.shortName,
  value: federation.id,
}))