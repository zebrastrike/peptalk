import { ClinicalTrial } from '../types';

/**
 * Clinical trial data sourced from ClinicalTrials.gov and primary publications.
 * All NCT numbers, enrollment, endpoints, and findings are from primary sources
 * (NEJM, Lancet, JCEM, etc.).
 */
export const CLINICAL_TRIALS: ClinicalTrial[] = [
  // ── SEMAGLUTIDE ───────────────────────────────────────────────────────────

  {
    peptideId: 'semaglutide',
    name: 'STEP 1 — Semaglutide 2.4mg for Weight Management',
    nctId: 'NCT03548935',
    phase: 'Phase 3',
    status: 'Completed',
    enrollment: 1961,
    primaryEndpoint: 'Percentage change in body weight from baseline to week 68',
    keyFindings:
      'Semaglutide 2.4 mg weekly reduced mean body weight by -14.9% vs. -2.4% with placebo (treatment difference -12.4%; p<0.001). 86.4% achieved ≥5% weight loss vs. 31.5%.',
    publicationDOI: '10.1056/NEJMoa2032183',
  },

  {
    peptideId: 'semaglutide',
    name: 'PIONEER 1 — Oral Semaglutide Monotherapy',
    nctId: 'NCT02906930',
    phase: 'Phase 3',
    status: 'Completed',
    enrollment: 703,
    primaryEndpoint: 'Change in HbA1c from baseline to week 26',
    keyFindings:
      'Oral semaglutide 14 mg reduced HbA1c by -1.5% vs. -0.1% with placebo (treatment difference -1.4%; p<0.001). Body weight reduced by -4.4 kg vs. -0.9 kg.',
    publicationDOI: '10.2337/dc19-0749',
  },

  {
    peptideId: 'semaglutide',
    name: 'SELECT — Semaglutide Cardiovascular Outcomes',
    nctId: 'NCT03574597',
    phase: 'Phase 3',
    status: 'Completed',
    enrollment: 17604,
    primaryEndpoint:
      'Time to first major adverse cardiovascular event (MACE: CV death, nonfatal MI, nonfatal stroke)',
    keyFindings:
      'Semaglutide 2.4 mg reduced MACE by 20% vs. placebo (HR 0.80; 95% CI 0.72-0.90; p<0.001). Absolute risk reduction ~1.5% over 39.8 months.',
    publicationDOI: '10.1056/NEJMoa2307563',
  },

  // ── TIRZEPATIDE ───────────────────────────────────────────────────────────

  {
    peptideId: 'tirzepatide',
    name: 'SURMOUNT-1 — Tirzepatide for Obesity',
    nctId: 'NCT04184622',
    phase: 'Phase 3',
    status: 'Completed',
    enrollment: 2539,
    primaryEndpoint: 'Percentage change in body weight from baseline to week 72',
    keyFindings:
      'Tirzepatide 15 mg reduced mean body weight by -20.9% vs. -3.1% with placebo (treatment difference -17.8%; p<0.001). 89-91% achieved ≥5% weight loss vs. 28%.',
    publicationDOI: '10.1056/NEJMoa2206038',
  },

  {
    peptideId: 'tirzepatide',
    name: 'SURPASS-2 — Tirzepatide vs. Semaglutide (Add-on to Metformin)',
    nctId: 'NCT03987919',
    phase: 'Phase 3',
    status: 'Completed',
    enrollment: 1879,
    primaryEndpoint: 'Change in HbA1c from baseline to week 40',
    keyFindings:
      'Tirzepatide 15 mg reduced HbA1c by -2.3% vs. -1.9% with semaglutide 1 mg (treatment difference -0.45%; p<0.001). Weight loss -11.2 kg vs. -6.2 kg.',
    publicationDOI: '10.1056/NEJMoa2107519',
  },

  // ── RETATRUTIDE ───────────────────────────────────────────────────────────

  {
    peptideId: 'retatrutide',
    name: 'Phase 2 — Retatrutide for Obesity',
    nctId: 'NCT04881760',
    phase: 'Phase 2',
    status: 'Completed',
    enrollment: 338,
    primaryEndpoint: 'Percentage change in body weight from baseline to week 24',
    keyFindings:
      'Retatrutide 12 mg reduced mean body weight by -17.5% vs. -1.6% with placebo (treatment difference -15.9%; p<0.001). At 48 weeks, up to -24.2% reduction.',
    publicationDOI: '10.1056/NEJMoa2301972',
  },

  // ── TESAMORELIN ───────────────────────────────────────────────────────────

  {
    peptideId: 'tesamorelin',
    name: 'Phase 3 — Tesamorelin for HIV-Associated Lipodystrophy',
    nctId: 'NCT00435136',
    phase: 'Phase 3',
    status: 'Completed',
    enrollment: 412,
    primaryEndpoint:
      'Percentage change in visceral adipose tissue (VAT) from baseline to week 26',
    keyFindings:
      'Tesamorelin 2 mg daily reduced VAT by -15.2% vs. +5.0% with placebo (treatment difference -20.2%; p<0.001). Sustained in extension phase.',
    publicationDOI: '10.1056/NEJMoa072261',
  },

  // ── THYMOSIN ALPHA-1 ──────────────────────────────────────────────────────

  {
    peptideId: 'thymosin-alpha-1',
    name: 'Phase III — Thymosin Alpha-1 for Chronic Hepatitis B',
    phase: 'Phase 3',
    status: 'Completed',
    enrollment: 97,
    primaryEndpoint: 'HBV DNA clearance and ALT normalization at 6 months',
    keyFindings:
      'Thymosin alpha-1 (1.6 mg twice weekly) achieved HBV DNA clearance in 53% vs. 9.4% in controls (p<0.05). ALT normalization in ~40-70% in combination arms.',
    publicationDOI: '10.1046/j.1365-2893.1999.00181.x',
  },
];

export const getTrialsByPeptideId = (peptideId: string): ClinicalTrial[] =>
  CLINICAL_TRIALS.filter((t) => t.peptideId === peptideId);
