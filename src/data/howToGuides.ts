import { HowToGuide, GuideCategory } from '../types';

/**
 * Step-by-step practical guides for the Learn section.
 * Initial guides cover reconstitution, injection technique, and reading COAs.
 * More guides added over time.
 */
export const HOW_TO_GUIDES: HowToGuide[] = [
  {
    id: 'reconstitute-peptide',
    title: 'How to Reconstitute a Peptide',
    slug: 'reconstitute-peptide',
    category: 'reconstitution',
    summary: 'Learn the proper technique for reconstituting lyophilized peptide powder with bacteriostatic water.',
    steps: [
      {
        stepNumber: 1,
        title: 'Gather Your Supplies',
        content: 'You will need: lyophilized peptide vial, bacteriostatic water (BAC water), an insulin syringe (1mL), alcohol swabs, and a clean workspace. Never use regular sterile water for multi-use vials — BAC water contains 0.9% benzyl alcohol to prevent bacterial growth.',
      },
      {
        stepNumber: 2,
        title: 'Clean the Vial Tops',
        content: 'Wipe the rubber stoppers of both the peptide vial and the BAC water vial with alcohol swabs. Allow them to air dry for a few seconds. This prevents introducing contaminants into the solution.',
      },
      {
        stepNumber: 3,
        title: 'Draw the BAC Water',
        content: 'Using the insulin syringe, draw the desired amount of BAC water. A common reconstitution volume is 1-2mL, but check your specific peptide\'s recommended dilution. For easy dosing math, many people use 1mL (100 units on an insulin syringe) per vial.',
      },
      {
        stepNumber: 4,
        title: 'Add Water to the Peptide Vial',
        content: 'Insert the needle through the rubber stopper at an angle. Slowly drip the BAC water down the inside wall of the vial — do NOT spray it directly onto the peptide powder. The goal is a gentle, slow addition that doesn\'t damage the peptide structure.',
      },
      {
        stepNumber: 5,
        title: 'Let It Dissolve',
        content: 'Set the vial on a flat surface and let the peptide dissolve naturally. This may take 5-15 minutes. Do NOT shake the vial — gentle swirling is acceptable if needed. The solution should become clear. If it remains cloudy, something may be wrong.',
      },
      {
        stepNumber: 6,
        title: 'Store Properly',
        content: 'Once reconstituted, store the vial in the refrigerator (2-8°C / 36-46°F). Most reconstituted peptides remain stable for 2-4 weeks when refrigerated. Never freeze a reconstituted solution. Label the vial with the reconstitution date and peptide name.',
      },
    ],
    warnings: [
      'Never shake peptide vials — this can denature the peptide and reduce effectiveness.',
      'Always use bacteriostatic water for multi-use vials. Sterile water is only for single-use.',
      'If the reconstituted solution is cloudy, discolored, or has particles, do not use it.',
      'Consult your healthcare provider before using any peptide.',
    ],
    relatedPeptideIds: ['bpc-157', 'tb-500', 'cjc-1295', 'ipamorelin'],
    lastUpdated: '2025-01-15',
  },
  {
    id: 'subcutaneous-injection',
    title: 'How to Perform a Subcutaneous Injection',
    slug: 'subcutaneous-injection',
    category: 'injection',
    summary: 'A guide to safe subcutaneous injection technique, site selection, and injection site rotation.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wash Your Hands',
        content: 'Thoroughly wash your hands with soap and water for at least 20 seconds. This is the single most important step in preventing infection. Use a clean paper towel to dry.',
      },
      {
        stepNumber: 2,
        title: 'Prepare Your Dose',
        content: 'Using a fresh insulin syringe, draw the calculated dose from the reconstituted peptide vial. Pull back the plunger slightly past your target dose, then push forward to remove air bubbles. Tap the syringe gently to move bubbles to the top.',
      },
      {
        stepNumber: 3,
        title: 'Select the Injection Site',
        content: 'Common subcutaneous injection sites include: abdomen (2 inches away from the navel), upper thigh (front and outer area), and the back of the upper arm. Rotate injection sites with each dose to prevent lipodystrophy (tissue hardening).',
      },
      {
        stepNumber: 4,
        title: 'Clean the Site',
        content: 'Swab the injection site with an alcohol pad in a circular motion, starting from the center and moving outward. Allow the alcohol to dry completely — injecting through wet alcohol can sting.',
      },
      {
        stepNumber: 5,
        title: 'Inject',
        content: 'Pinch about an inch of skin between your thumb and forefinger. Insert the needle at a 45-90 degree angle (90 degrees for most insulin syringes with short needles). Push the plunger slowly and steadily. After the full dose is delivered, hold the needle in place for 5 seconds before withdrawing.',
      },
      {
        stepNumber: 6,
        title: 'After the Injection',
        content: 'Withdraw the needle and apply gentle pressure with a clean cotton ball or gauze. Do not rub the site. Dispose of the used syringe in a sharps container — never recap needles or throw them in regular trash.',
      },
    ],
    warnings: [
      'Never reuse needles or syringes. Always use a fresh syringe for each injection.',
      'If you experience unusual swelling, redness, warmth, or pain at the injection site, consult a healthcare provider.',
      'Rotate injection sites systematically to prevent tissue damage.',
      'This guide is for educational purposes. Consult your healthcare provider for personalized instruction.',
    ],
    relatedPeptideIds: ['bpc-157', 'tb-500', 'semaglutide', 'tirzepatide'],
    lastUpdated: '2025-01-15',
  },
  {
    id: 'read-coa',
    title: 'How to Read a Certificate of Analysis (COA)',
    slug: 'read-coa',
    category: 'testing',
    summary: 'Understanding what each section of a COA means and what to look for to verify peptide quality.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identify the Lab',
        content: 'The COA should clearly state which laboratory performed the testing. Look for the lab name, accreditation (ISO 17025, DEA license), and contact information. If the lab isn\'t named or the COA looks generic, that\'s a red flag.',
      },
      {
        stepNumber: 2,
        title: 'Check the Peptide Identity',
        content: 'The COA should confirm the peptide name, molecular formula, molecular weight, and batch/lot number. Mass spectrometry (MS) results should show a peak matching the expected molecular weight. If the MW doesn\'t match, the product may contain the wrong peptide.',
      },
      {
        stepNumber: 3,
        title: 'Review Purity (HPLC)',
        content: 'HPLC purity is the most important number on a COA. Research-grade peptides typically have ≥95% purity, with pharmaceutical-grade at ≥98%. The HPLC chromatogram should show one dominant peak. Multiple significant peaks may indicate degradation products or impurities.',
      },
      {
        stepNumber: 4,
        title: 'Understand Net Peptide Content',
        content: 'A 5mg vial doesn\'t always contain 5mg of active peptide. Net peptide content accounts for salt, moisture, and counterions. A typical net peptide content is 60-80% of the gross weight. This affects your actual dosing calculations.',
      },
      {
        stepNumber: 5,
        title: 'Check for Endotoxin Testing',
        content: 'For injectable peptides, endotoxin (LAL) testing is critical. The result should be below 5 EU/kg body weight. This test detects bacterial contamination that could cause fever or systemic inflammatory response. If endotoxin testing is absent from the COA, be cautious.',
      },
      {
        stepNumber: 6,
        title: 'Look for Red Flags',
        content: 'Red flags include: no lab name, no batch number, purity below 95%, missing endotoxin results for injectables, results that seem copy-pasted across different products, and COAs with different fonts/formatting suggesting edits. When in doubt, get independent third-party testing.',
      },
    ],
    warnings: [
      'A COA from the seller is not the same as independent third-party testing.',
      'Some sellers fabricate or reuse COAs — verify the batch number matches your product.',
      'If in doubt, services like Janoshik Analyticals and Colmaric Analyticals offer independent peptide testing.',
    ],
    lastUpdated: '2025-01-15',
  },
];

export const getGuideById = (id: string): HowToGuide | undefined =>
  HOW_TO_GUIDES.find((g) => g.id === id);

export const getGuideBySlug = (slug: string): HowToGuide | undefined =>
  HOW_TO_GUIDES.find((g) => g.slug === slug);

export const getGuidesByCategory = (category: GuideCategory): HowToGuide[] =>
  HOW_TO_GUIDES.filter((g) => g.category === category);

export const getGuidesByPeptideId = (peptideId: string): HowToGuide[] =>
  HOW_TO_GUIDES.filter((g) => g.relatedPeptideIds?.includes(peptideId));
