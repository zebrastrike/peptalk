export type PeptideCategory =
  | 'Metabolic'
  | 'Recovery'
  | 'Growth Hormone'
  | 'Nootropic'
  | 'Immune'
  | 'Anti-inflammatory'
  | 'Mitochondrial'
  | 'Longevity'
  | 'Sleep'
  | 'Reproductive'
  | 'Sexual Health'
  | 'Cosmetic'
  | 'Tanning'
  | 'Neuropeptide'
  | 'Antimicrobial';

export interface Peptide {
  id: string;
  name: string;
  abbreviation?: string;
  categories: PeptideCategory[];
  sequenceLength?: number;
  molecularWeight?: string;
  sequence?: string;
  researchSummary: string;
  mechanismOfAction: string;
  receptorTargets?: string[];
  signalingPathways?: string[];
  stabilityNotes: string;
  pubmedLinks?: string[];
  halfLife?: string;
  storageTemp?: string;
  reconstitution?: string;
  isoelectricPoint?: number;
  chargeAtPhysiologicalPH?: string;
}

export type InteractionType =
  | 'synergistic'
  | 'neutral'
  | 'competitive'
  | 'contraindicated';

export interface PeptideInteraction {
  peptideA: string;
  peptideB: string;
  interactionType: InteractionType;
  synergyScore: number; // 1-10
  mechanismAnalysis: string;
  stabilityConsiderations: string;
  chemicalCompatibility: string;
  researchPrecedent?: string;
  pubmedLinks?: string[];
}

export interface PeptideStack {
  id: string;
  name: string;
  peptideIds: string[];
  createdAt: string;
  updatedAt: string;
  isCurated?: boolean;
  curatedBy?: string;
  description?: string;
  analysis?: StackAnalysis;
}

export interface StackAnalysis {
  overallSynergyScore: number;
  interactions: PeptideInteraction[];
  categoryCoverage: PeptideCategory[];
  summary: string;
  warnings: string[];
}

export interface User {
  id: string;
  email: string;
  name?: string;
  savedStacks: string[];
  favoritePeptides: string[];
  isPro: boolean;
  createdAt: string;
}

export interface ResearchArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  publishedAt: string;
  relatedPeptides: string[];
  relatedCategories: PeptideCategory[];
}
