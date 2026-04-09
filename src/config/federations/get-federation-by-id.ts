import { federations } from '@/config/federations/federations'
import { Federation, FederationId } from '@/config/federations/federation.types'

export function getFederationById(id?: FederationId | null): Federation | null {
  if (!id) return null

  return federations.find((federation) => federation.id === id) ?? null
}