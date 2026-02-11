/**
 * PepTalk Interaction Analysis Engine
 *
 * A rules-based engine that analyzes peptide stack combinations for
 * synergy, competition, and complementarity based on published research.
 *
 * IMPORTANT: All language in this module is strictly research-oriented.
 * This engine is an informational tool for exploring peptide research —
 * it does not provide medical advice, prescriptions, or clinical guidance.
 */

import {
  Peptide,
  PeptideInteraction,
  StackAnalysis,
  InteractionType,
  PeptideCategory,
} from '../types';
import { getPeptideById } from '../data/peptides';

// ---------------------------------------------------------------------------
// Interaction key helper — ensures consistent lookup regardless of pair order
// ---------------------------------------------------------------------------

function makeInteractionKey(idA: string, idB: string): string {
  return [idA, idB].sort().join('::');
}

// ---------------------------------------------------------------------------
// KNOWN_INTERACTIONS — curated from published research & well-studied combos
// ---------------------------------------------------------------------------

const KNOWN_INTERACTIONS: Map<string, PeptideInteraction> = new Map([
  // CJC-1295 + Ipamorelin
  [
    makeInteractionKey('cjc-1295', 'ipamorelin'),
    {
      peptideA: 'cjc-1295',
      peptideB: 'ipamorelin',
      interactionType: 'synergistic',
      synergyScore: 9,
      mechanismAnalysis:
        'Complementary GH axis stimulation via different mechanisms. CJC-1295 acts as a GHRH analog stimulating somatotroph cells, while Ipamorelin is a ghrelin mimetic that triggers GH release via the GHS-R1a receptor. Research suggests their combined activity produces a more robust and sustained GH pulse profile than either compound alone.',
      stabilityConsiderations:
        'Both peptides are generally stable in aqueous solution at refrigerated temperatures. When reconstituted separately, each maintains structural integrity. Co-storage in the same vial is not well-characterized in published literature.',
      chemicalCompatibility:
        'No known chemical incompatibility. Both are soluble in bacteriostatic water at standard research concentrations.',
      researchPrecedent:
        'This combination is one of the most widely studied GH secretagogue stacks in peptide research. Multiple in-vitro and animal model studies have demonstrated amplified GH output when both pathways are activated simultaneously.',
      pubmedLinks: ['https://pubmed.ncbi.nlm.nih.gov/16352683/'],
    },
  ],

  // BPC-157 + TB-500
  [
    makeInteractionKey('bpc-157', 'tb-500'),
    {
      peptideA: 'bpc-157',
      peptideB: 'tb-500',
      interactionType: 'synergistic',
      synergyScore: 8,
      mechanismAnalysis:
        'Complementary tissue repair pathways. BPC-157 (Body Protection Compound) upregulates growth factor expression including VEGF, FGF, and EGF, while TB-500 (Thymosin Beta-4 fragment) promotes actin polymerization and cellular migration. Together, they address both the signaling environment and the structural repair machinery.',
      stabilityConsiderations:
        'BPC-157 is notably stable across a wide pH range. TB-500 is a relatively stable peptide fragment. Both reconstitute well in sterile water or bacteriostatic water.',
      chemicalCompatibility:
        'No reported chemical antagonism. Both peptides are commonly reconstituted in similar aqueous vehicles.',
      researchPrecedent:
        'Individually, both peptides have extensive research profiles in wound healing and tissue repair models. Their combined use is widely discussed in peptide research communities, though controlled head-to-head combination studies remain limited.',
    },
  ],

  // Retatrutide + 5-Amino-1MQ
  [
    makeInteractionKey('retatrutide', '5-amino-1mq'),
    {
      peptideA: 'retatrutide',
      peptideB: '5-amino-1mq',
      interactionType: 'synergistic',
      synergyScore: 7,
      mechanismAnalysis:
        'Multi-receptor metabolic approach. Retatrutide is a triple agonist (GLP-1R, GIPR, GCGR) influencing appetite signaling, insulin sensitivity, and energy expenditure. 5-Amino-1MQ inhibits NNMT (nicotinamide N-methyltransferase), which has been linked to adipocyte energy regulation. These distinct mechanisms target metabolism from both receptor-level signaling and intracellular enzymatic pathways.',
      stabilityConsiderations:
        'Retatrutide is a large peptide requiring cold-chain storage. 5-Amino-1MQ is a small molecule with good ambient stability. No shared degradation concerns when stored separately.',
      chemicalCompatibility:
        'Different molecular classes (peptide vs. small molecule) with no known direct chemical interaction.',
      researchPrecedent:
        'Both compounds are individually under active investigation for metabolic research. Combination data is limited to observational reports in research settings.',
    },
  ],

  // Epithalon + MOTS-c
  [
    makeInteractionKey('epithalon', 'mots-c'),
    {
      peptideA: 'epithalon',
      peptideB: 'mots-c',
      interactionType: 'synergistic',
      synergyScore: 7,
      mechanismAnalysis:
        'Telomere and mitochondrial longevity pathways. Epithalon (Epitalon) is a tetrapeptide studied for its ability to stimulate telomerase activity, potentially influencing cellular replicative capacity. MOTS-c is a mitochondrial-derived peptide associated with metabolic homeostasis and AMPK activation. Together, they address aging research from both nuclear (telomere) and mitochondrial perspectives.',
      stabilityConsiderations:
        'Epithalon is a short, stable tetrapeptide. MOTS-c requires careful handling as a mitochondrial peptide — cold storage is recommended. Both reconstitute in standard aqueous vehicles.',
      chemicalCompatibility:
        'No reported incompatibility. Distinct molecular targets reduce any risk of direct chemical interference.',
      researchPrecedent:
        'Both are prominent in longevity-focused research. Epithalon has been studied by Khavinson and colleagues; MOTS-c was characterized by the Lee lab at USC. Combination studies are nascent but conceptually supported.',
    },
  ],

  // MOTS-c + NAD+
  [
    makeInteractionKey('mots-c', 'nad+'),
    {
      peptideA: 'mots-c',
      peptideB: 'nad+',
      interactionType: 'synergistic',
      synergyScore: 8,
      mechanismAnalysis:
        'Complementary mitochondrial support. MOTS-c activates AMPK and improves metabolic homeostasis at the mitochondrial level, while NAD+ (or its precursors) is a critical coenzyme for mitochondrial electron transport and sirtuin activity. Research suggests that enhanced NAD+ availability may amplify the cellular energy pathways that MOTS-c modulates.',
      stabilityConsiderations:
        'MOTS-c should be stored cold in lyophilized form. NAD+ precursor molecules vary in stability — NMN and NR have different shelf-life profiles. Reconstituted MOTS-c should not be mixed directly with NAD+ solutions without characterization.',
      chemicalCompatibility:
        'NAD+ is a dinucleotide with distinct chemistry from peptides. No direct chemical interaction is expected at research concentrations, but co-formulation has not been formally validated.',
      researchPrecedent:
        'Both are central to mitochondrial aging research. The AMPK-NAD+-sirtuin axis is well-characterized, and MOTS-c feeds into this network. Formal combination studies are an active area of investigation.',
    },
  ],

  // Semaglutide + Tirzepatide
  [
    makeInteractionKey('semaglutide', 'tirzepatide'),
    {
      peptideA: 'semaglutide',
      peptideB: 'tirzepatide',
      interactionType: 'competitive',
      synergyScore: 3,
      mechanismAnalysis:
        'Overlapping GLP-1 receptor binding. Both Semaglutide (selective GLP-1R agonist) and Tirzepatide (dual GLP-1R/GIPR agonist) compete for the same GLP-1 receptor binding site. Co-administration may lead to receptor saturation without additional benefit, and the competitive binding could reduce the effective signaling of either compound.',
      stabilityConsiderations:
        'Both are stable acylated peptides designed for extended circulation. No unique stability concern from co-presence, but the pharmacological redundancy at GLP-1R is the primary issue.',
      chemicalCompatibility:
        'No direct chemical incompatibility, but the pharmacological overlap makes this combination suboptimal from a research design perspective.',
      researchPrecedent:
        'No published research supports combining these two GLP-1R agonists. Standard research protocols use one or the other, not both simultaneously.',
    },
  ],

  // Retatrutide + CJC-1295
  [
    makeInteractionKey('retatrutide', 'cjc-1295'),
    {
      peptideA: 'retatrutide',
      peptideB: 'cjc-1295',
      interactionType: 'synergistic',
      synergyScore: 7,
      mechanismAnalysis:
        'Metabolic and GH axis modulation. Retatrutide operates on incretin and glucagon receptors (GLP-1R, GIPR, GCGR) to influence metabolic signaling, while CJC-1295 stimulates growth hormone release through the GHRH receptor. These non-overlapping receptor systems suggest complementary activity across metabolic and somatotropic pathways.',
      stabilityConsiderations:
        'Both require cold-chain storage. Retatrutide is a larger peptide with acylation for extended stability; CJC-1295 (especially the DAC variant) is designed for prolonged half-life. Separate reconstitution is recommended.',
      chemicalCompatibility:
        'No known chemical conflicts. Both are peptide-based with compatible aqueous reconstitution profiles.',
      researchPrecedent:
        'Individually well-studied. Combination research is primarily observational and discussed in peptide research forums rather than formal publications.',
    },
  ],

  // Retatrutide + Ipamorelin
  [
    makeInteractionKey('retatrutide', 'ipamorelin'),
    {
      peptideA: 'retatrutide',
      peptideB: 'ipamorelin',
      interactionType: 'synergistic',
      synergyScore: 7,
      mechanismAnalysis:
        'Metabolic modulation combined with GH secretagogue activity. Retatrutide engages GLP-1R, GIPR, and GCGR for metabolic signaling, while Ipamorelin selectively activates GHS-R1a to promote pulsatile GH release. The distinct receptor targets allow for parallel pathway activation without direct competition.',
      stabilityConsiderations:
        'Retatrutide requires cold storage due to its size and acylation. Ipamorelin is a relatively stable pentapeptide. Both reconstitute in bacteriostatic water. Separate vials recommended for storage.',
      chemicalCompatibility:
        'Compatible aqueous chemistry. No direct molecular interaction expected at standard research concentrations.',
      researchPrecedent:
        'The rationale is supported by the independent literature on incretin agonists and GH secretagogues, though direct combination studies have not been published.',
    },
  ],

  // Semax + Selank
  [
    makeInteractionKey('semax', 'selank'),
    {
      peptideA: 'semax',
      peptideB: 'selank',
      interactionType: 'synergistic',
      synergyScore: 8,
      mechanismAnalysis:
        'Complementary nootropic pathways. Semax is a synthetic ACTH(4-10) analog that upregulates BDNF and modulates dopaminergic/serotonergic activity, promoting neurotrophic support. Selank is a tuftsin analog with anxiolytic properties that modulates GABA-ergic transmission and enkephalin expression. Together, they address both the neurotrophic growth and the anxiolytic/calming dimensions of cognitive research.',
      stabilityConsiderations:
        'Both are relatively short, stable peptides commonly used in intranasal formulations. Semax and Selank have established stability profiles in aqueous solution. Both degrade faster at room temperature — cold storage is advised.',
      chemicalCompatibility:
        'Compatible in similar aqueous vehicles. Both have been formulated for nasal administration and share similar pH requirements.',
      researchPrecedent:
        'Both peptides were developed at the Institute of Molecular Genetics (Russian Academy of Sciences) and have extensive individual research profiles. Their combined use is well-documented in Russian peptide research literature.',
      pubmedLinks: [
        'https://pubmed.ncbi.nlm.nih.gov/19549494/',
        'https://pubmed.ncbi.nlm.nih.gov/18577768/',
      ],
    },
  ],

  // Thymosin Alpha-1 + LL-37
  [
    makeInteractionKey('thymosin-alpha-1', 'll-37'),
    {
      peptideA: 'thymosin-alpha-1',
      peptideB: 'll-37',
      interactionType: 'synergistic',
      synergyScore: 7,
      mechanismAnalysis:
        'Immune modulation via different mechanisms. Thymosin Alpha-1 enhances dendritic cell maturation and T-cell differentiation, acting as an immune system modulator at the adaptive immunity level. LL-37 (cathelicidin) is an innate immune effector with direct antimicrobial activity and immunomodulatory signaling. Their combination addresses both innate and adaptive immune research pathways.',
      stabilityConsiderations:
        'Thymosin Alpha-1 is a well-characterized, stable peptide (approved as Zadaxin in several countries for research use). LL-37 is an amphipathic peptide that can aggregate at higher concentrations — careful reconstitution is important.',
      chemicalCompatibility:
        'Both are cationic peptides at physiological pH. At high concentrations, aggregation potential should be considered, but at standard research concentrations, no direct incompatibility is expected.',
      researchPrecedent:
        'Both have extensive individual research backgrounds in immunology. Thymosin Alpha-1 has decades of published research. LL-37 is one of the most-studied human antimicrobial peptides. Combination research is conceptually supported but limited in direct published studies.',
    },
  ],

  // GHK-Cu + BPC-157
  [
    makeInteractionKey('ghk-cu', 'bpc-157'),
    {
      peptideA: 'ghk-cu',
      peptideB: 'bpc-157',
      interactionType: 'synergistic',
      synergyScore: 7,
      mechanismAnalysis:
        'Tissue repair combined with copper peptide extracellular matrix support. BPC-157 upregulates growth factor cascades (VEGF, FGF, EGF) and modulates the NO system for tissue repair signaling. GHK-Cu (copper tripeptide) promotes collagen synthesis, glycosaminoglycan production, and extracellular matrix remodeling. Together, they address both the signaling initiation and the structural rebuilding phases of tissue repair research.',
      stabilityConsiderations:
        'GHK-Cu contains a copper ion that can catalyze oxidation of other peptides. BPC-157 is unusually stable for a peptide. Separate storage is recommended to avoid copper-mediated oxidation of co-stored compounds.',
      chemicalCompatibility:
        'The copper ion in GHK-Cu can potentially interact with other peptides in solution. Separate reconstitution and storage is strongly recommended. Co-administration timing should account for this consideration.',
      researchPrecedent:
        'Both are extensively studied individually in wound healing and tissue regeneration research. GHK-Cu has been characterized by Dr. Loren Pickart; BPC-157 by Dr. Predrag Sikiric. Direct combination data is limited to anecdotal research reports.',
    },
  ],

  // Melanotan-1 + Melanotan-2
  [
    makeInteractionKey('melanotan-1', 'melanotan-2'),
    {
      peptideA: 'melanotan-1',
      peptideB: 'melanotan-2',
      interactionType: 'competitive',
      synergyScore: 3,
      mechanismAnalysis:
        'Overlapping MC1R binding. Both Melanotan-1 (afamelanotide) and Melanotan-2 are alpha-MSH analogs that bind the melanocortin-1 receptor to stimulate melanogenesis. Melanotan-1 is more selective for MC1R, while Melanotan-2 has broader melanocortin receptor affinity (MC1R, MC3R, MC4R, MC5R). Co-administration results in direct receptor competition at MC1R without additive benefit.',
      stabilityConsiderations:
        'Both are cyclic peptides with reasonable stability in aqueous solution. No unique co-storage concerns beyond the pharmacological redundancy.',
      chemicalCompatibility:
        'Structurally similar analogs with compatible chemistry. The issue is pharmacological, not chemical.',
      researchPrecedent:
        'No published research supports using both simultaneously. Research protocols typically employ one or the other based on the desired receptor selectivity profile.',
    },
  ],

  // PT-141 + Melanotan-2
  [
    makeInteractionKey('pt-141', 'melanotan-2'),
    {
      peptideA: 'pt-141',
      peptideB: 'melanotan-2',
      interactionType: 'competitive',
      synergyScore: 4,
      mechanismAnalysis:
        'Both target melanocortin receptors. PT-141 (bremelanotide) is a metabolite of Melanotan-2, and both activate MC3R and MC4R pathways. While PT-141 was developed for its MC4R selectivity related to sexual function research, Melanotan-2 broadly activates the same receptor family. Combining them saturates overlapping receptor targets with diminishing additional signaling.',
      stabilityConsiderations:
        'PT-141 is a cyclic heptapeptide with moderate stability. Melanotan-2 is a related cyclic peptide. Both reconstitute similarly. No co-storage stability concerns beyond redundancy.',
      chemicalCompatibility:
        'Closely related molecular structures with fully compatible chemistry. Competition is at the receptor level, not the chemical level.',
      researchPrecedent:
        'PT-141 was literally derived from Melanotan-2 research. Using both simultaneously is pharmacologically redundant and not supported by any published research protocol.',
    },
  ],

  // Semaglutide + Cagrilintide
  [
    makeInteractionKey('semaglutide', 'cagrilintide'),
    {
      peptideA: 'semaglutide',
      peptideB: 'cagrilintide',
      interactionType: 'synergistic',
      synergyScore: 8,
      mechanismAnalysis:
        'GLP-1 receptor and amylin receptor combination — the research basis behind CagriSema. Semaglutide activates GLP-1R to modulate appetite signaling and insulin secretion. Cagrilintide is a long-acting amylin analog that activates amylin receptors (AMY1, AMY2, AMY3) to promote satiety via distinct CNS pathways. These non-overlapping receptor systems produce complementary metabolic signaling.',
      stabilityConsiderations:
        'Both are acylated peptides engineered for extended half-life. Novo Nordisk has developed a co-formulation (CagriSema), demonstrating that these molecules can coexist in a stable formulation under appropriate conditions.',
      chemicalCompatibility:
        'Demonstrated compatibility — Novo Nordisk has produced a stable co-formulation for research and clinical investigation.',
      researchPrecedent:
        'This is one of the most well-supported combinations in current metabolic peptide research. The CagriSema program (Novo Nordisk) has produced extensive Phase 2 and Phase 3 data demonstrating the combined activity of these two compounds.',
      pubmedLinks: ['https://pubmed.ncbi.nlm.nih.gov/36567380/'],
    },
  ],

  // DSIP + Selank
  [
    makeInteractionKey('dsip', 'selank'),
    {
      peptideA: 'dsip',
      peptideB: 'selank',
      interactionType: 'synergistic',
      synergyScore: 7,
      mechanismAnalysis:
        'Sleep regulation combined with anxiolytic activity for complementary rest support. DSIP (Delta Sleep-Inducing Peptide) modulates sleep architecture, particularly delta-wave sleep patterns, through mechanisms involving serotonin and GABA systems. Selank provides anxiolytic activity via enkephalin modulation and GABA-ergic enhancement. Research suggests that reducing anxiety-related arousal may complement sleep-promoting peptide activity.',
      stabilityConsiderations:
        'DSIP is a nonapeptide with moderate stability — it is susceptible to enzymatic degradation and should be stored cold. Selank is more stable, especially in modified forms. Both reconstitute in standard aqueous vehicles.',
      chemicalCompatibility:
        'No known chemical incompatibility. Both are short peptides with straightforward aqueous chemistry.',
      researchPrecedent:
        'Both peptides originate from Soviet/Russian peptide research programs and have individual research histories spanning decades. Combined use is discussed in nootropic and sleep research contexts, though formal combination studies are limited.',
    },
  ],
]);

// ---------------------------------------------------------------------------
// Category complementarity scoring
// ---------------------------------------------------------------------------

/**
 * Categories that are known to complement each other well in research stacks.
 * Each pair is scored from 0 (no particular synergy) to 2 (strong rationale).
 */
const CATEGORY_COMPLEMENT_SCORES: Record<string, number> = {
  [makeInteractionKey('Metabolic', 'Growth Hormone')]: 2,
  [makeInteractionKey('Recovery', 'Anti-inflammatory')]: 2,
  [makeInteractionKey('Recovery', 'Growth Hormone')]: 1,
  [makeInteractionKey('Nootropic', 'Sleep')]: 2,
  [makeInteractionKey('Nootropic', 'Neuropeptide')]: 1,
  [makeInteractionKey('Immune', 'Antimicrobial')]: 2,
  [makeInteractionKey('Immune', 'Anti-inflammatory')]: 1,
  [makeInteractionKey('Longevity', 'Mitochondrial')]: 2,
  [makeInteractionKey('Longevity', 'Recovery')]: 1,
  [makeInteractionKey('Mitochondrial', 'Metabolic')]: 1,
  [makeInteractionKey('Sleep', 'Recovery')]: 1,
  [makeInteractionKey('Cosmetic', 'Recovery')]: 1,
  [makeInteractionKey('Sexual Health', 'Reproductive')]: 1,
};

function getCategoryComplementScore(
  categoriesA: PeptideCategory[],
  categoriesB: PeptideCategory[]
): number {
  let maxScore = 0;
  for (const catA of categoriesA) {
    for (const catB of categoriesB) {
      if (catA === catB) continue;
      const key = makeInteractionKey(catA, catB);
      const score = CATEGORY_COMPLEMENT_SCORES[key] ?? 0;
      if (score > maxScore) {
        maxScore = score;
      }
    }
  }
  return maxScore;
}

// ---------------------------------------------------------------------------
// Heuristic synergy scoring for unknown combinations
// ---------------------------------------------------------------------------

function calculateSynergyScore(peptideA: Peptide, peptideB: Peptide): PeptideInteraction {
  let score = 5; // baseline neutral score
  let interactionType: InteractionType = 'neutral';
  const analysisNotes: string[] = [];

  // --- Receptor target overlap analysis ---
  const receptorsA = peptideA.receptorTargets ?? [];
  const receptorsB = peptideB.receptorTargets ?? [];

  if (receptorsA.length > 0 && receptorsB.length > 0) {
    const sharedReceptors = receptorsA.filter((r) =>
      receptorsB.some((rb) => rb.toLowerCase() === r.toLowerCase())
    );

    if (sharedReceptors.length > 0) {
      // Shared receptors indicate competition
      const penalty = Math.min(sharedReceptors.length * 2, 4);
      score -= penalty;
      interactionType = 'competitive';
      analysisNotes.push(
        `Overlapping receptor targets detected (${sharedReceptors.join(', ')}), suggesting potential competition for binding sites.`
      );
    } else {
      // Distinct receptors — mild positive signal
      score += 1;
      analysisNotes.push(
        'Distinct receptor target profiles suggest non-competing mechanisms of action.'
      );
    }
  } else {
    analysisNotes.push(
      'Limited receptor target data available for one or both peptides; interaction estimate is based on category and pathway analysis.'
    );
  }

  // --- Signaling pathway complementarity ---
  const pathwaysA = peptideA.signalingPathways ?? [];
  const pathwaysB = peptideB.signalingPathways ?? [];

  if (pathwaysA.length > 0 && pathwaysB.length > 0) {
    const sharedPathways = pathwaysA.filter((p) =>
      pathwaysB.some((pb) => pb.toLowerCase() === p.toLowerCase())
    );
    const uniquePathways = new Set([...pathwaysA, ...pathwaysB]);

    if (sharedPathways.length === 0 && uniquePathways.size >= 3) {
      // Fully distinct and broad pathway coverage — synergistic signal
      score += 2;
      analysisNotes.push(
        `Complementary signaling pathways identified (${uniquePathways.size} distinct pathways), suggesting potential for multi-pathway modulation.`
      );
    } else if (sharedPathways.length > 0 && sharedPathways.length < Math.min(pathwaysA.length, pathwaysB.length)) {
      // Partial overlap — mild positive (some shared context, some new)
      score += 1;
      analysisNotes.push(
        `Partial pathway overlap detected (${sharedPathways.length} shared, ${uniquePathways.size} total). Shared context with some complementary activity.`
      );
    } else if (
      sharedPathways.length > 0 &&
      sharedPathways.length === Math.min(pathwaysA.length, pathwaysB.length)
    ) {
      // Complete subset overlap — potential redundancy
      score -= 1;
      analysisNotes.push(
        'Significant pathway overlap detected, suggesting partially redundant signaling.'
      );
    }
  }

  // --- Category complementarity ---
  const catComplement = getCategoryComplementScore(peptideA.categories, peptideB.categories);

  if (catComplement >= 2) {
    score += 2;
    analysisNotes.push(
      'Research categories are highly complementary, supporting a multi-system approach.'
    );
  } else if (catComplement === 1) {
    score += 1;
    analysisNotes.push(
      'Research categories show moderate complementarity.'
    );
  }

  // Check for identical categories (same-category stacking)
  const sharedCategories = peptideA.categories.filter((c) =>
    peptideB.categories.includes(c)
  );
  if (
    sharedCategories.length > 0 &&
    sharedCategories.length === peptideA.categories.length &&
    sharedCategories.length === peptideB.categories.length
  ) {
    score -= 1;
    analysisNotes.push(
      'Peptides share identical category profiles, which may indicate overlapping rather than complementary research goals.'
    );
  }

  // --- Clamp score ---
  score = Math.max(1, Math.min(10, score));

  // --- Determine interaction type from final score ---
  if (interactionType !== 'competitive') {
    if (score >= 7) {
      interactionType = 'synergistic';
    } else if (score >= 5) {
      interactionType = 'neutral';
    } else {
      interactionType = 'competitive';
    }
  }

  // --- Build mechanism analysis text ---
  const mechanismText = analysisNotes.length > 0
    ? analysisNotes.join(' ')
    : `Limited data available to characterize the interaction between ${peptideA.name} and ${peptideB.name}. This combination has not been extensively studied in published research.`;

  return {
    peptideA: peptideA.id,
    peptideB: peptideB.id,
    interactionType,
    synergyScore: score,
    mechanismAnalysis: mechanismText,
    stabilityConsiderations:
      'No specific co-stability data is available for this combination. General best practice is to reconstitute and store peptides separately unless co-formulation stability has been validated.',
    chemicalCompatibility:
      'No known chemical incompatibility has been reported for this combination, but formal compatibility testing has not been published. Separate preparation is recommended.',
  };
}

// ---------------------------------------------------------------------------
// Public API: getKnownInteraction
// ---------------------------------------------------------------------------

/**
 * Retrieves a curated interaction entry for a known peptide pair.
 * Returns null if the combination has not been characterized in the
 * KNOWN_INTERACTIONS database.
 */
export function getKnownInteraction(
  idA: string,
  idB: string
): PeptideInteraction | null {
  const key = makeInteractionKey(idA, idB);
  return KNOWN_INTERACTIONS.get(key) ?? null;
}

// ---------------------------------------------------------------------------
// Public API: analyzeStack
// ---------------------------------------------------------------------------

/**
 * Analyzes a stack of 2-5 peptide IDs and returns a comprehensive
 * StackAnalysis including pairwise interactions, synergy scoring,
 * category coverage, and research-oriented warnings.
 */
export function analyzeStack(peptideIds: string[]): StackAnalysis {
  // --- Validate stack size ---
  if (peptideIds.length < 2) {
    return {
      overallSynergyScore: 0,
      interactions: [],
      categoryCoverage: [],
      summary:
        'A minimum of 2 peptides is required for interaction analysis. Please add at least one more peptide to your stack.',
      warnings: ['Stack contains fewer than 2 peptides. No interactions can be analyzed.'],
    };
  }

  if (peptideIds.length > 5) {
    return {
      overallSynergyScore: 0,
      interactions: [],
      categoryCoverage: [],
      summary:
        'This analysis engine supports stacks of up to 5 peptides. Please reduce the number of peptides in your stack for meaningful interaction analysis.',
      warnings: [
        'Stack exceeds the maximum of 5 peptides. Interaction complexity beyond 5 compounds is not well-characterized in published research.',
      ],
    };
  }

  // --- Resolve peptides ---
  const peptides: Peptide[] = [];
  const missingIds: string[] = [];
  const warnings: string[] = [];

  for (const id of peptideIds) {
    const peptide = getPeptideById(id);
    if (peptide) {
      peptides.push(peptide);
    } else {
      missingIds.push(id);
    }
  }

  if (missingIds.length > 0) {
    warnings.push(
      `The following peptide ID(s) were not found in the database and were excluded from analysis: ${missingIds.join(', ')}.`
    );
  }

  if (peptides.length < 2) {
    return {
      overallSynergyScore: 0,
      interactions: [],
      categoryCoverage: [],
      summary:
        'Insufficient recognized peptides in the stack to perform interaction analysis. Please verify peptide IDs and try again.',
      warnings,
    };
  }

  // --- Check for duplicate IDs ---
  const uniqueIds = new Set(peptides.map((p) => p.id));
  if (uniqueIds.size !== peptides.length) {
    warnings.push(
      'Duplicate peptide IDs detected in the stack. Duplicates have been included in the analysis but are not recommended in research stacks.'
    );
  }

  // --- Generate all pairwise interactions ---
  const interactions: PeptideInteraction[] = [];

  for (let i = 0; i < peptides.length; i++) {
    for (let j = i + 1; j < peptides.length; j++) {
      const pA = peptides[i];
      const pB = peptides[j];

      // Check known interactions first
      const known = getKnownInteraction(pA.id, pB.id);
      if (known) {
        interactions.push(known);
      } else {
        // Fall back to heuristic calculation
        const estimated = calculateSynergyScore(pA, pB);
        interactions.push(estimated);
      }
    }
  }

  // --- Compute overall synergy score ---
  // Weighted average: competitive interactions pull the score down more heavily
  let totalWeightedScore = 0;
  let totalWeight = 0;

  for (const interaction of interactions) {
    let weight: number;
    switch (interaction.interactionType) {
      case 'competitive':
        weight = 1.5; // competitive pairs weigh more heavily (penalty)
        break;
      case 'contraindicated':
        weight = 2.0; // contraindicated pairs weigh even more
        break;
      case 'synergistic':
        weight = 1.0;
        break;
      default:
        weight = 1.0;
    }
    totalWeightedScore += interaction.synergyScore * weight;
    totalWeight += weight;
  }

  const overallSynergyScore =
    totalWeight > 0 ? Math.round((totalWeightedScore / totalWeight) * 10) / 10 : 0;

  // --- Compute category coverage ---
  const categorySet = new Set<PeptideCategory>();
  for (const peptide of peptides) {
    for (const cat of peptide.categories) {
      categorySet.add(cat);
    }
  }
  const categoryCoverage = Array.from(categorySet).sort();

  // --- Generate warnings ---
  // Warn about competitive interactions
  const competitiveInteractions = interactions.filter(
    (i) => i.interactionType === 'competitive'
  );
  for (const comp of competitiveInteractions) {
    const nameA = peptides.find((p) => p.id === comp.peptideA)?.name ?? comp.peptideA;
    const nameB = peptides.find((p) => p.id === comp.peptideB)?.name ?? comp.peptideB;
    warnings.push(
      `${nameA} and ${nameB} may compete for overlapping receptor targets (synergy score: ${comp.synergyScore}/10). Consider selecting one or the other for a more focused research stack.`
    );
  }

  // Warn about contraindicated interactions
  const contraindicatedInteractions = interactions.filter(
    (i) => i.interactionType === 'contraindicated'
  );
  for (const contra of contraindicatedInteractions) {
    const nameA = peptides.find((p) => p.id === contra.peptideA)?.name ?? contra.peptideA;
    const nameB = peptides.find((p) => p.id === contra.peptideB)?.name ?? contra.peptideB;
    warnings.push(
      `${nameA} and ${nameB} have a reported contraindication in research literature (synergy score: ${contra.synergyScore}/10). This combination is not recommended for research stacks.`
    );
  }

  // Warn about large stacks
  if (peptides.length >= 4) {
    warnings.push(
      'Stacks of 4 or more peptides have limited characterization in published research. Interaction complexity increases non-linearly with stack size.'
    );
  }

  // Warn about narrow category coverage
  if (categoryCoverage.length === 1 && peptides.length >= 3) {
    warnings.push(
      `All peptides in this stack fall under the "${categoryCoverage[0]}" category. Consider diversifying categories for broader pathway coverage in your research.`
    );
  }

  // --- Generate summary ---
  const summary = generateStackSummary(
    peptides,
    interactions,
    overallSynergyScore,
    categoryCoverage,
    competitiveInteractions.length,
    contraindicatedInteractions.length
  );

  return {
    overallSynergyScore,
    interactions,
    categoryCoverage,
    summary,
    warnings,
  };
}

// ---------------------------------------------------------------------------
// Summary generation
// ---------------------------------------------------------------------------

function generateStackSummary(
  peptides: Peptide[],
  interactions: PeptideInteraction[],
  overallScore: number,
  categories: PeptideCategory[],
  competitiveCount: number,
  contraindicatedCount: number
): string {
  const peptideNames = peptides.map((p) => p.name);
  const synergyCount = interactions.filter(
    (i) => i.interactionType === 'synergistic'
  ).length;
  const neutralCount = interactions.filter(
    (i) => i.interactionType === 'neutral'
  ).length;
  const totalPairs = interactions.length;

  const parts: string[] = [];

  // Opening line
  parts.push(
    `This stack of ${peptides.length} peptides (${peptideNames.join(', ')}) spans ${categories.length} research ${categories.length === 1 ? 'category' : 'categories'} and includes ${totalPairs} pairwise ${totalPairs === 1 ? 'interaction' : 'interactions'}.`
  );

  // Score assessment
  if (overallScore >= 8) {
    parts.push(
      `The overall synergy score of ${overallScore}/10 indicates a highly complementary research stack with strong rationale for multi-pathway investigation.`
    );
  } else if (overallScore >= 6) {
    parts.push(
      `The overall synergy score of ${overallScore}/10 suggests a reasonably well-composed research stack with complementary mechanisms.`
    );
  } else if (overallScore >= 4) {
    parts.push(
      `The overall synergy score of ${overallScore}/10 indicates a moderately composed stack. Some interactions may benefit from reconsideration.`
    );
  } else {
    parts.push(
      `The overall synergy score of ${overallScore}/10 suggests significant overlap or competition within this stack. Restructuring is recommended for more productive research combinations.`
    );
  }

  // Interaction breakdown
  const breakdownParts: string[] = [];
  if (synergyCount > 0) {
    breakdownParts.push(
      `${synergyCount} synergistic ${synergyCount === 1 ? 'pair' : 'pairs'}`
    );
  }
  if (neutralCount > 0) {
    breakdownParts.push(
      `${neutralCount} neutral ${neutralCount === 1 ? 'pair' : 'pairs'}`
    );
  }
  if (competitiveCount > 0) {
    breakdownParts.push(
      `${competitiveCount} competitive ${competitiveCount === 1 ? 'pair' : 'pairs'}`
    );
  }
  if (contraindicatedCount > 0) {
    breakdownParts.push(
      `${contraindicatedCount} contraindicated ${contraindicatedCount === 1 ? 'pair' : 'pairs'}`
    );
  }

  if (breakdownParts.length > 0) {
    parts.push(`Interaction breakdown: ${breakdownParts.join(', ')}.`);
  }

  // Category commentary
  if (categories.length >= 4) {
    parts.push(
      'This stack provides broad category coverage, which may be valuable for multi-system research investigations.'
    );
  } else if (categories.length === 1) {
    parts.push(
      'All peptides share the same research category, resulting in a focused but potentially redundant stack.'
    );
  }

  // Caution notes for problematic stacks
  if (contraindicatedCount > 0) {
    parts.push(
      'Note: This stack contains one or more contraindicated pairs. Review the specific interaction details before proceeding with any research protocol.'
    );
  } else if (competitiveCount > 0 && competitiveCount >= synergyCount) {
    parts.push(
      'Note: Competitive interactions outnumber or equal synergistic ones in this stack. Consider replacing competing peptides with complementary alternatives.'
    );
  }

  return parts.join(' ');
}
