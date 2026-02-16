import { SafetyProfile } from '../types';

/**
 * Safety profiles for peptides. Populated incrementally via Grok data extraction.
 * Each entry is keyed by peptideId and contains contraindications, adverse effects,
 * drug interactions, and monitoring requirements.
 */
export const SAFETY_PROFILES: SafetyProfile[] = [];

export const getSafetyProfileByPeptideId = (
  peptideId: string
): SafetyProfile | undefined =>
  SAFETY_PROFILES.find((p) => p.peptideId === peptideId);
