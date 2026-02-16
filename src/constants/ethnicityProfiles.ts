import { EthnicityProfile, Ethnicity } from '../types';

export const ETHNICITY_PROFILES: EthnicityProfile[] = [
  {
    id: 'white',
    label: 'White / Caucasian',
    healthFocusAreas: [
      'Skin health and UV protection',
      'Cardiovascular health',
      'Metabolic wellness',
      'Longevity and anti-aging',
    ],
    featuredPeptideIds: ['ghk-cu', 'epithalon', 'bpc-157', 'nad-plus'],
    researchHighlights: [
      'Collagen and skin aging pathway research',
      'Cardiovascular risk reduction studies',
      'Metabolic efficiency and peptide signaling',
    ],
  },
  {
    id: 'black',
    label: 'Black / African American',
    healthFocusAreas: [
      'Cardiovascular health and hypertension',
      'Metabolic syndrome and insulin sensitivity',
      'Kidney health and renal protection',
      'Recovery and athletic performance',
    ],
    featuredPeptideIds: ['bpc-157', 'semaglutide', 'mots-c', 'thymosin-alpha-1'],
    researchHighlights: [
      'Cardiovascular peptide research in diverse populations',
      'Insulin sensitivity and GLP-1 pathway studies',
      'Renal protective peptide mechanisms',
    ],
  },
  {
    id: 'hispanic',
    label: 'Hispanic / Latino',
    healthFocusAreas: [
      'Metabolic health and diabetes prevention',
      'Liver health and NAFLD',
      'Cardiovascular wellness',
      'Weight management',
    ],
    featuredPeptideIds: ['semaglutide', 'tirzepatide', 'bpc-157', 'mots-c'],
    researchHighlights: [
      'GLP-1 agonist research in Hispanic populations',
      'Metabolic syndrome and peptide interventions',
      'Liver health and gut peptide signaling',
    ],
  },
  {
    id: 'asian',
    label: 'Asian / Asian American',
    healthFocusAreas: [
      'Metabolic health at lower BMI thresholds',
      'Liver health and hepatic protection',
      'Cognitive health and neuroprotection',
      'Longevity and mitochondrial function',
    ],
    featuredPeptideIds: ['mots-c', 'ss-31', 'semax', 'semaglutide'],
    researchHighlights: [
      'Mitochondrial peptide research (MOTS-c discovered in Asian populations)',
      'Metabolic thresholds and peptide therapy considerations',
      'Cognitive health and neuropeptide pathways',
    ],
  },
  {
    id: 'native_american',
    label: 'Native American / Alaska Native',
    healthFocusAreas: [
      'Metabolic health and diabetes prevention',
      'Cardiovascular wellness',
      'Immune support',
      'Recovery and joint health',
    ],
    featuredPeptideIds: ['semaglutide', 'bpc-157', 'thymosin-alpha-1', 'tb-500'],
    researchHighlights: [
      'Diabetes prevention and GLP-1 receptor agonist research',
      'Immune modulation and peptide therapy',
      'Joint health and recovery peptide studies',
    ],
  },
  {
    id: 'pacific_islander',
    label: 'Pacific Islander / Native Hawaiian',
    healthFocusAreas: [
      'Metabolic health and weight management',
      'Cardiovascular health',
      'Immune resilience',
      'Recovery and athletic performance',
    ],
    featuredPeptideIds: ['tirzepatide', 'semaglutide', 'bpc-157', 'thymosin-alpha-1'],
    researchHighlights: [
      'Weight management and incretin peptide research',
      'Cardiovascular risk reduction in Pacific populations',
      'Immune peptide research and resilience',
    ],
  },
  {
    id: 'middle_eastern',
    label: 'Middle Eastern / North African',
    healthFocusAreas: [
      'Metabolic health and insulin resistance',
      'Cardiovascular wellness',
      'Skin health and UV considerations',
      'Longevity research',
    ],
    featuredPeptideIds: ['semaglutide', 'mots-c', 'ghk-cu', 'epithalon'],
    researchHighlights: [
      'Insulin resistance and metabolic peptide pathways',
      'Cardiovascular health research',
      'Skin integrity and peptide signaling',
    ],
  },
  {
    id: 'mixed_other',
    label: 'Mixed / Other',
    healthFocusAreas: [
      'General wellness optimization',
      'Recovery and performance',
      'Cognitive health',
      'Longevity and anti-aging',
    ],
    featuredPeptideIds: ['bpc-157', 'nad-plus', 'semax', 'epithalon'],
    researchHighlights: [
      'Broad-spectrum peptide wellness research',
      'Recovery and tissue repair pathways',
      'Cognitive enhancement and neuropeptide studies',
    ],
  },
];

export const getEthnicityProfile = (
  ethnicity: Ethnicity | null
): EthnicityProfile | null => {
  if (!ethnicity) return null;
  return ETHNICITY_PROFILES.find((p) => p.id === ethnicity) ?? null;
};
