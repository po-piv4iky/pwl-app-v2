import { FederationId } from '@/config/federations/federation.types'
import { GenderStandards } from '../types/standart.types'


import { napStandards } from '../config/nap-standards'
import { wpcStandards } from '../config/wpc-standards'
import { wrpfStandards } from '../config/wrpf-standards'
import { ipfStandards } from '../config/ipf-standards'
import { fprStandards } from '../config/fpr-standards'
import { baseStandards } from '../config/base-standards'


export const federationStandardsMap: Partial<Record<FederationId, GenderStandards>> = {
  base: baseStandards,
  fpr: fprStandards,
  ipf: ipfStandards,
  wrpf: wrpfStandards,
  wpc: wpcStandards,
  nap: napStandards,
}