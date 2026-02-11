import { PeptideCategory } from '../types';

export interface CategoryInfo {
  name: PeptideCategory;
  icon: string; // Ionicons name
  description: string;
  color: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    name: 'Metabolic',
    icon: 'flame-outline',
    description: 'Peptides researched for metabolic pathway modulation',
    color: '#e3a7a1',
  },
  {
    name: 'Recovery',
    icon: 'bandage-outline',
    description: 'Peptides studied for tissue repair and recovery processes',
    color: '#b9cbb6',
  },
  {
    name: 'Growth Hormone',
    icon: 'trending-up-outline',
    description: 'Peptides that interact with growth hormone secretion pathways',
    color: '#c7d7e6',
  },
  {
    name: 'Nootropic',
    icon: 'bulb-outline',
    description: 'Peptides researched for cognitive and neurological pathways',
    color: '#d4b8e0',
  },
  {
    name: 'Immune',
    icon: 'shield-outline',
    description: 'Peptides studied for immune system modulation',
    color: '#f0d68a',
  },
  {
    name: 'Anti-inflammatory',
    icon: 'water-outline',
    description: 'Peptides researched for inflammatory pathway regulation',
    color: '#a8d8ea',
  },
  {
    name: 'Mitochondrial',
    icon: 'flash-outline',
    description: 'Peptides studied for mitochondrial function and energy production',
    color: '#f5c6aa',
  },
  {
    name: 'Longevity',
    icon: 'hourglass-outline',
    description: 'Peptides researched for telomere and aging-related pathways',
    color: '#c5b3e6',
  },
  {
    name: 'Sleep',
    icon: 'moon-outline',
    description: 'Peptides studied for sleep cycle regulation',
    color: '#7eb5d6',
  },
  {
    name: 'Reproductive',
    icon: 'heart-outline',
    description: 'Peptides researched for reproductive hormone pathways',
    color: '#f0b4c8',
  },
  {
    name: 'Sexual Health',
    icon: 'sparkles-outline',
    description: 'Peptides studied for sexual function pathways',
    color: '#e8a0b8',
  },
  {
    name: 'Cosmetic',
    icon: 'flower-outline',
    description: 'Peptides researched for skin and tissue regeneration',
    color: '#d4c5a9',
  },
  {
    name: 'Tanning',
    icon: 'sunny-outline',
    description: 'Peptides studied for melanocyte stimulation pathways',
    color: '#e8c49a',
  },
  {
    name: 'Neuropeptide',
    icon: 'git-network-outline',
    description: 'Peptides involved in neural signaling research',
    color: '#b8c9e0',
  },
  {
    name: 'Antimicrobial',
    icon: 'medical-outline',
    description: 'Peptides researched for antimicrobial activity',
    color: '#a0d2db',
  },
];

export const getCategoryColor = (category: PeptideCategory): string => {
  return CATEGORIES.find((c) => c.name === category)?.color ?? '#9ca3af';
};

export const getCategoryIcon = (category: PeptideCategory): string => {
  return CATEGORIES.find((c) => c.name === category)?.icon ?? 'ellipse-outline';
};
