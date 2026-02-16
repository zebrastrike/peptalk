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
import {
  KNOWN_INTERACTIONS,
  makeInteractionKey,
} from '../data/interactions';

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
