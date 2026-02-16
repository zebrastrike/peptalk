import { ClinicalTrial } from '../types';

/**
 * Clinical trial data for peptides. Populated incrementally via Grok data extraction.
 * Each entry links to a peptide via peptideId and contains trial details, NCT IDs,
 * endpoints, findings, and publication links.
 */
export const CLINICAL_TRIALS: ClinicalTrial[] = [];

export const getTrialsByPeptideId = (peptideId: string): ClinicalTrial[] =>
  CLINICAL_TRIALS.filter((t) => t.peptideId === peptideId);
