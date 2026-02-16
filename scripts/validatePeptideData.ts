#!/usr/bin/env npx ts-node
/**
 * Data Validation Script
 *
 * Validates all peptide data files for:
 * - Required fields present
 * - No duplicate IDs
 * - PubMed/DOI link format
 * - Cross-reference integrity (peptide IDs referenced in stacks, interactions, etc. exist)
 * - Missing optional fields (reported as warnings)
 *
 * Usage:
 *   npx ts-node scripts/validatePeptideData.ts
 *   npx ts-node scripts/validatePeptideData.ts --strict   # treat warnings as errors
 */

import { PEPTIDES } from '../src/data/peptides';
import { KNOWN_INTERACTIONS } from '../src/data/interactions';
import { CURATED_STACKS } from '../src/data/curatedStacks';
import { CLINICAL_TRIALS } from '../src/data/clinicalTrials';
import { SAFETY_PROFILES } from '../src/data/safetyProfiles';
import { EDUCATIONAL_ARTICLES } from '../src/data/educationalArticles';
import { HOW_TO_GUIDES } from '../src/data/howToGuides';
import { VIDEOS } from '../src/data/videos';
import { PROTOCOL_TEMPLATES } from '../src/data/protocols';

// ─── Config ──────────────────────────────────────────────────────────────────

const strict = process.argv.includes('--strict');

let errors = 0;
let warnings = 0;

function error(msg: string) {
  errors++;
  console.error(`  ❌ ERROR: ${msg}`);
}

function warn(msg: string) {
  warnings++;
  if (strict) {
    errors++;
    console.error(`  ❌ ERROR (strict): ${msg}`);
  } else {
    console.warn(`  ⚠️  WARN: ${msg}`);
  }
}

function info(msg: string) {
  console.log(`  ℹ️  ${msg}`);
}

function section(title: string) {
  console.log(`\n━━━ ${title} ━━━`);
}

// ─── Regex patterns ──────────────────────────────────────────────────────────

const PUBMED_URL_RE = /^https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/?$/;
const DOI_URL_RE = /^https:\/\/doi\.org\/10\.\d{4,}/;
const NCT_RE = /^NCT\d{8}$/;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// ─── Build peptide ID set ────────────────────────────────────────────────────

const peptideIds = new Set(PEPTIDES.map((p) => p.id));

// ─── 1. Validate Peptides ────────────────────────────────────────────────────

section(`Peptides (${PEPTIDES.length})`);

const seenPeptideIds = new Set<string>();

for (const p of PEPTIDES) {
  // Required fields
  if (!p.id) error('Peptide missing id');
  if (!p.name) error(`Peptide ${p.id || '???'} missing name`);
  if (!p.categories || p.categories.length === 0)
    error(`Peptide ${p.id} has no categories`);
  if (!p.researchSummary)
    error(`Peptide ${p.id} missing researchSummary`);
  if (!p.mechanismOfAction)
    error(`Peptide ${p.id} missing mechanismOfAction`);
  if (!p.stabilityNotes)
    error(`Peptide ${p.id} missing stabilityNotes`);

  // Duplicate check
  if (seenPeptideIds.has(p.id)) {
    error(`Duplicate peptide ID: ${p.id}`);
  }
  seenPeptideIds.add(p.id);

  // PubMed links format
  if (p.pubmedLinks) {
    for (const link of p.pubmedLinks) {
      if (!PUBMED_URL_RE.test(link)) {
        warn(`Peptide ${p.id}: invalid PubMed URL format: ${link}`);
      }
    }
  }

  // DOI links format
  if (p.doiLinks) {
    for (const link of p.doiLinks) {
      if (!DOI_URL_RE.test(link)) {
        warn(`Peptide ${p.id}: invalid DOI URL format: ${link}`);
      }
    }
  }

  // NCT IDs format
  if (p.clinicalTrialNCT) {
    for (const nct of p.clinicalTrialNCT) {
      if (!NCT_RE.test(nct)) {
        warn(`Peptide ${p.id}: invalid NCT ID format: ${nct}`);
      }
    }
  }

  // Optional field coverage (informational)
  const optionalFields = [
    'abbreviation',
    'sequenceLength',
    'molecularWeight',
    'halfLife',
    'pubmedLinks',
    'approvalStatus',
    'evidenceGrade',
    'adverseEffects',
    'routeOfAdministration',
  ] as const;

  const missing = optionalFields.filter(
    (f) => p[f] === undefined || p[f] === null
  );
  if (missing.length > 5) {
    warn(
      `Peptide ${p.id} missing ${missing.length}/${optionalFields.length} optional fields: ${missing.join(', ')}`
    );
  }
}

info(`${PEPTIDES.length} peptides, ${seenPeptideIds.size} unique IDs`);

// ─── 2. Validate Interactions ────────────────────────────────────────────────

section(`Interactions (${KNOWN_INTERACTIONS.size} pairs)`);

let interactionCount = 0;
for (const [key, interaction] of KNOWN_INTERACTIONS) {
  interactionCount++;

  if (!peptideIds.has(interaction.peptideA)) {
    error(`Interaction ${key}: peptideA "${interaction.peptideA}" not found in peptides`);
  }
  if (!peptideIds.has(interaction.peptideB)) {
    error(`Interaction ${key}: peptideB "${interaction.peptideB}" not found in peptides`);
  }

  if (interaction.synergyScore < 1 || interaction.synergyScore > 10) {
    error(`Interaction ${key}: synergyScore ${interaction.synergyScore} out of range (1-10)`);
  }

  if (!interaction.mechanismAnalysis) {
    warn(`Interaction ${key}: missing mechanismAnalysis`);
  }

  if (interaction.pubmedLinks) {
    for (const link of interaction.pubmedLinks) {
      if (!PUBMED_URL_RE.test(link)) {
        warn(`Interaction ${key}: invalid PubMed URL: ${link}`);
      }
    }
  }
}

info(`${interactionCount} interactions validated`);

// ─── 3. Validate Curated Stacks ──────────────────────────────────────────────

section(`Curated Stacks (${CURATED_STACKS.length})`);

const seenStackIds = new Set<string>();

for (const stack of CURATED_STACKS) {
  if (!stack.id) error('Stack missing id');
  if (!stack.name) error(`Stack ${stack.id || '???'} missing name`);

  if (seenStackIds.has(stack.id)) {
    error(`Duplicate stack ID: ${stack.id}`);
  }
  seenStackIds.add(stack.id);

  if (!stack.peptideIds || stack.peptideIds.length === 0) {
    error(`Stack ${stack.id} has no peptideIds`);
  }

  for (const pid of stack.peptideIds) {
    if (!peptideIds.has(pid)) {
      error(`Stack ${stack.id}: references unknown peptide "${pid}"`);
    }
  }

  if (stack.peptideIds.length > 5) {
    warn(`Stack ${stack.id}: has ${stack.peptideIds.length} peptides (max recommended: 5)`);
  }

  if (!stack.targetGoals || stack.targetGoals.length === 0) {
    warn(`Stack ${stack.id}: no targetGoals`);
  }
}

info(`${CURATED_STACKS.length} stacks validated`);

// ─── 4. Validate Clinical Trials ─────────────────────────────────────────────

section(`Clinical Trials (${CLINICAL_TRIALS.length})`);

for (const trial of CLINICAL_TRIALS) {
  if (!trial.peptideId) error('Trial missing peptideId');
  if (!trial.name) error(`Trial for ${trial.peptideId || '???'} missing name`);

  if (trial.peptideId && !peptideIds.has(trial.peptideId)) {
    error(`Trial "${trial.name}": references unknown peptide "${trial.peptideId}"`);
  }

  if (trial.nctId && !NCT_RE.test(trial.nctId)) {
    warn(`Trial "${trial.name}": invalid NCT ID format: ${trial.nctId}`);
  }

  if (trial.publicationDOI && !DOI_URL_RE.test(`https://doi.org/${trial.publicationDOI}`)) {
    warn(`Trial "${trial.name}": DOI may be malformed: ${trial.publicationDOI}`);
  }
}

if (CLINICAL_TRIALS.length === 0) {
  info('Clinical trials array is empty (to be populated via Grok prompts)');
}

// ─── 5. Validate Safety Profiles ─────────────────────────────────────────────

section(`Safety Profiles (${SAFETY_PROFILES.length})`);

const seenSafetyIds = new Set<string>();

for (const sp of SAFETY_PROFILES) {
  if (!sp.peptideId) error('Safety profile missing peptideId');

  if (sp.peptideId && !peptideIds.has(sp.peptideId)) {
    error(`Safety profile references unknown peptide "${sp.peptideId}"`);
  }

  if (seenSafetyIds.has(sp.peptideId)) {
    error(`Duplicate safety profile for peptide: ${sp.peptideId}`);
  }
  seenSafetyIds.add(sp.peptideId);

  if (!sp.contraindications || sp.contraindications.length === 0) {
    warn(`Safety profile ${sp.peptideId}: no contraindications listed`);
  }
}

if (SAFETY_PROFILES.length === 0) {
  info('Safety profiles array is empty (to be populated via Grok prompts)');
}

// ─── 6. Validate Educational Articles ────────────────────────────────────────

section(`Educational Articles (${EDUCATIONAL_ARTICLES.length})`);

const seenArticleSlugs = new Set<string>();

for (const article of EDUCATIONAL_ARTICLES) {
  if (!article.id) error('Article missing id');
  if (!article.title) error(`Article ${article.id || '???'} missing title`);
  if (!article.slug) error(`Article ${article.id || '???'} missing slug`);

  if (article.slug && !SLUG_RE.test(article.slug)) {
    warn(`Article ${article.id}: slug "${article.slug}" contains invalid characters`);
  }

  if (seenArticleSlugs.has(article.slug)) {
    error(`Duplicate article slug: ${article.slug}`);
  }
  seenArticleSlugs.add(article.slug);

  if (!article.sections || article.sections.length === 0) {
    error(`Article ${article.id}: has no sections`);
  }

  if (article.relatedPeptideIds) {
    for (const pid of article.relatedPeptideIds) {
      if (!peptideIds.has(pid)) {
        warn(`Article ${article.id}: references unknown peptide "${pid}"`);
      }
    }
  }
}

// ─── 7. Validate How-To Guides ───────────────────────────────────────────────

section(`How-To Guides (${HOW_TO_GUIDES.length})`);

const seenGuideSlugs = new Set<string>();

for (const guide of HOW_TO_GUIDES) {
  if (!guide.id) error('Guide missing id');
  if (!guide.title) error(`Guide ${guide.id || '???'} missing title`);
  if (!guide.slug) error(`Guide ${guide.id || '???'} missing slug`);

  if (guide.slug && !SLUG_RE.test(guide.slug)) {
    warn(`Guide ${guide.id}: slug "${guide.slug}" contains invalid characters`);
  }

  if (seenGuideSlugs.has(guide.slug)) {
    error(`Duplicate guide slug: ${guide.slug}`);
  }
  seenGuideSlugs.add(guide.slug);

  if (!guide.steps || guide.steps.length === 0) {
    error(`Guide ${guide.id}: has no steps`);
  } else {
    // Check step numbering is sequential
    for (let i = 0; i < guide.steps.length; i++) {
      if (guide.steps[i].stepNumber !== i + 1) {
        warn(
          `Guide ${guide.id}: step ${i + 1} has stepNumber ${guide.steps[i].stepNumber}`
        );
      }
    }
  }

  if (guide.relatedPeptideIds) {
    for (const pid of guide.relatedPeptideIds) {
      if (!peptideIds.has(pid)) {
        warn(`Guide ${guide.id}: references unknown peptide "${pid}"`);
      }
    }
  }
}

// ─── 8. Validate Videos ──────────────────────────────────────────────────────

section(`Videos (${VIDEOS.length})`);

const seenVideoSlugs = new Set<string>();

for (const video of VIDEOS) {
  if (!video.id) error('Video missing id');
  if (!video.title) error(`Video ${video.id || '???'} missing title`);
  if (!video.slug) error(`Video ${video.id || '???'} missing slug`);
  if (!video.videoUrl) error(`Video ${video.id || '???'} missing videoUrl`);

  if (video.slug && !SLUG_RE.test(video.slug)) {
    warn(`Video ${video.id}: slug "${video.slug}" contains invalid characters`);
  }

  if (seenVideoSlugs.has(video.slug)) {
    error(`Duplicate video slug: ${video.slug}`);
  }
  seenVideoSlugs.add(video.slug);

  if (video.relatedPeptideIds) {
    for (const pid of video.relatedPeptideIds) {
      if (!peptideIds.has(pid)) {
        warn(`Video ${video.id}: references unknown peptide "${pid}"`);
      }
    }
  }
}

if (VIDEOS.length === 0) {
  info('Videos array is empty (to be populated by user)');
}

// ─── 9. Validate Protocols ───────────────────────────────────────────────────

section(`Protocols (${PROTOCOL_TEMPLATES.length})`);

const seenProtocolIds = new Set<string>();

for (const protocol of PROTOCOL_TEMPLATES) {
  if (!protocol.id) error('Protocol missing id');
  if (!protocol.name) error(`Protocol ${protocol.id || '???'} missing name`);

  if (seenProtocolIds.has(protocol.id)) {
    error(`Duplicate protocol ID: ${protocol.id}`);
  }
  seenProtocolIds.add(protocol.id);

  if (!protocol.peptideId) {
    error(`Protocol ${protocol.id}: missing peptideId`);
  } else if (!peptideIds.has(protocol.peptideId)) {
    error(`Protocol ${protocol.id}: references unknown peptide "${protocol.peptideId}"`);
  }
}

// ─── 10. Cross-reference coverage ────────────────────────────────────────────

section('Cross-Reference Coverage');

const peptidsWithInteractions = new Set<string>();
for (const [, interaction] of KNOWN_INTERACTIONS) {
  peptidsWithInteractions.add(interaction.peptideA);
  peptidsWithInteractions.add(interaction.peptideB);
}

const peptidsWithProtocols = new Set(PROTOCOL_TEMPLATES.map((p) => p.peptideId));
const peptidsWithSafety = new Set(SAFETY_PROFILES.map((s) => s.peptideId));
const peptidsWithTrials = new Set(CLINICAL_TRIALS.map((t) => t.peptideId));

info(`Peptides with interactions: ${peptidsWithInteractions.size}/${PEPTIDES.length}`);
info(`Peptides with protocols: ${peptidsWithProtocols.size}/${PEPTIDES.length}`);
info(`Peptides with safety profiles: ${peptidsWithSafety.size}/${PEPTIDES.length}`);
info(`Peptides with clinical trials: ${peptidsWithTrials.size}/${PEPTIDES.length}`);

const noProtocol = PEPTIDES.filter((p) => !peptidsWithProtocols.has(p.id));
if (noProtocol.length > 0 && noProtocol.length < 30) {
  info(`Peptides missing protocols: ${noProtocol.map((p) => p.id).join(', ')}`);
}

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log('\n' + '═'.repeat(50));
console.log(
  `\n  Total: ${errors} error${errors !== 1 ? 's' : ''}, ${warnings} warning${warnings !== 1 ? 's' : ''}`
);

if (errors > 0) {
  console.log('\n  ❌ Validation FAILED\n');
  process.exit(1);
} else if (warnings > 0) {
  console.log('\n  ⚠️  Validation PASSED with warnings\n');
  process.exit(0);
} else {
  console.log('\n  ✅ Validation PASSED\n');
  process.exit(0);
}
