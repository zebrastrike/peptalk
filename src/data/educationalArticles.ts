import { EducationalArticle, ArticleCategory } from '../types';

/**
 * Educational articles for the Learn section.
 * Start with 2 real articles, add more via Grok EDU prompts over time.
 */
export const EDUCATIONAL_ARTICLES: EducationalArticle[] = [
  {
    id: 'what-is-a-peptide',
    title: 'What Is a Peptide?',
    slug: 'what-is-a-peptide',
    category: 'fundamentals',
    summary: 'Everything you need to know about peptides — what they are, how they work, and why they matter for health research.',
    sections: [
      {
        heading: 'The Basics',
        content: 'Peptides are short chains of amino acids linked by peptide bonds. While proteins can contain hundreds or thousands of amino acids, peptides are typically defined as chains of 2 to 50 amino acids. The simplest peptide, a dipeptide, contains just two amino acids. As the chain grows longer, we call them oligopeptides (2-20 amino acids) and polypeptides (20-50+), eventually becoming proteins.\n\nYour body produces thousands of peptides naturally. They act as signaling molecules, hormones, neurotransmitters, and antimicrobial agents. Insulin, for example, is a peptide hormone consisting of 51 amino acids that regulates blood sugar. Oxytocin, the "bonding hormone," is just 9 amino acids long.',
      },
      {
        heading: 'How Peptides Differ from Proteins',
        content: 'The main difference between peptides and proteins is size and complexity. Proteins are longer chains (typically 50+ amino acids) that fold into complex three-dimensional structures. This folding gives proteins their specific functions — enzymes, structural components, antibodies.\n\nPeptides are smaller and simpler. They don\'t typically fold into complex shapes, which makes them easier to synthesize in a lab and faster for the body to absorb. However, their smaller size also means they\'re more quickly broken down by enzymes in the body, which is why many therapeutic peptides need to be injected rather than taken orally.',
      },
      {
        heading: 'Endogenous vs Exogenous Peptides',
        content: 'Endogenous peptides are those your body naturally produces — insulin, growth hormone-releasing hormone (GHRH), endorphins, enkephalins, and hundreds more. These play critical roles in metabolism, immune function, pain modulation, and growth.\n\nExogenous peptides are synthetic or externally sourced versions. Some are exact copies of natural peptides (like synthetic insulin). Others are modified versions designed to be more stable or potent (like semaglutide, a modified GLP-1 peptide that lasts much longer in the body than natural GLP-1). Research peptides like BPC-157 were originally discovered in gastric juice but are now produced synthetically.',
      },
      {
        heading: 'How Peptides Work in the Body',
        content: 'Peptides work by binding to specific receptors on cell surfaces, triggering signaling cascades inside the cell. Think of it like a key fitting into a lock — the peptide (key) binds to a receptor (lock), which activates a chain of biochemical events.\n\nFor example, GLP-1 receptor agonists like semaglutide bind to GLP-1 receptors in the pancreas, gut, and brain. This triggers insulin release, slows gastric emptying, and reduces appetite — all through a single receptor interaction.\n\nThe half-life of a peptide (how long it stays active in the body) varies enormously. Natural GLP-1 has a half-life of about 2 minutes. Semaglutide, through fatty acid modification, extends this to about 7 days.',
      },
      {
        heading: 'Categories of Peptides',
        content: 'Peptides span an enormous range of functions:\n\n• Metabolic — GLP-1 agonists, amylin analogs (weight and blood sugar)\n• Growth Hormone Axis — GHRPs, GHRHs (growth, recovery, body composition)\n• Tissue Repair — BPC-157, TB-500 (healing, injury recovery)\n• Nootropic — Semax, Selank (cognitive function, focus)\n• Antimicrobial — LL-37, defensins (infection defense)\n• Cosmetic — GHK-Cu, SNAP-8, Argireline (skin, hair)\n• Longevity — Epithalon, MOTS-c (aging, mitochondrial function)\n• Pain — Ziconotide, endorphins (pain management)\n• Immune — Thymosin alpha-1, thymopentin (immune modulation)',
      },
      {
        heading: 'Common Misconceptions',
        content: 'Peptides are NOT steroids. Anabolic steroids are synthetic versions of testosterone and other sex hormones. Peptides are amino acid chains that work through completely different mechanisms — receptor signaling rather than direct hormone replacement.\n\nPeptides are NOT SARMs (Selective Androgen Receptor Modulators). SARMs target androgen receptors specifically. Peptides target a wide variety of receptors depending on the specific peptide.\n\nThe legal status of peptides varies widely. Many are FDA-approved medications (semaglutide, teriparatide, ziconotide). Others are sold as "research chemicals" in a legal gray area. Some are compounded by pharmacies under specific regulations. Always verify the legal status of any peptide in your jurisdiction.',
      },
    ],
    citations: [
      { text: 'Fosgerau K, Hoffmann T. Peptide therapeutics: current status and future directions. Drug Discov Today. 2015;20(1):122-128.', url: 'https://doi.org/10.1016/j.drudis.2014.10.003' },
      { text: 'Lau JL, Dunn MK. Therapeutic peptides: Historical perspectives, current development trends, and future directions. Bioorg Med Chem. 2018;26(10):2700-2707.', url: 'https://doi.org/10.1016/j.bmc.2017.06.052' },
      { text: 'Muttenthaler M, et al. Trends in peptide drug discovery. Nat Rev Drug Discov. 2021;20:309-325.', url: 'https://doi.org/10.1038/s41573-020-00135-8' },
      { text: 'Wang L, et al. Therapeutic peptides: current applications and future directions. Signal Transduct Target Ther. 2022;7(1):48.', url: 'https://doi.org/10.1038/s41392-022-00904-4' },
    ],
    relatedPeptideIds: ['semaglutide', 'bpc-157', 'ghk-cu', 'thymosin-alpha-1', 'epithalon'],
    lastUpdated: '2025-01-15',
  },
  {
    id: 'why-lab-testing-matters',
    title: 'Why Independent Lab Testing Matters',
    slug: 'why-lab-testing-matters',
    category: 'testing',
    summary: 'Understanding how HPLC, mass spectrometry, and endotoxin testing protect you — and what to look for in a Certificate of Analysis.',
    sections: [
      {
        heading: 'Why Third-Party Testing Is Critical',
        content: 'The peptide market includes a wide range of suppliers with varying quality standards. A Certificate of Analysis (COA) from the seller is a start, but independent third-party testing provides real verification. Studies have shown discrepancies between labeled and actual peptide content in research-grade products — in some cases, vials contained the wrong peptide entirely or had significantly lower purity than claimed.\n\nThird-party testing bridges the trust gap. An accredited, independent laboratory has no financial incentive to provide favorable results, making their analysis more reliable.',
      },
      {
        heading: 'HPLC Purity Testing',
        content: 'High-Performance Liquid Chromatography (HPLC) is the gold standard for assessing peptide purity. It separates the peptide from any impurities, degradation products, or truncated sequences in the sample.\n\nThe result is expressed as a percentage — e.g., ">98% purity." For research-grade peptides, ≥95% is generally acceptable. Pharmaceutical-grade is ≥98%. The HPLC chromatogram (the graphical output) should show one dominant peak. Multiple peaks suggest contamination or degradation.\n\nCommon impurities detected by HPLC include: deletion sequences (peptide missing amino acids), oxidized forms, deamidated forms, and residual protecting groups from synthesis.',
      },
      {
        heading: 'Mass Spectrometry',
        content: 'Mass spectrometry (MS) confirms the molecular identity of the peptide. It measures the molecular weight of the compound and compares it to the expected value. If the measured mass doesn\'t match the expected molecular weight for that peptide, something is wrong — you may have a different peptide, a truncated version, or a degradation product.\n\nLC-MS (Liquid Chromatography-Mass Spectrometry) combines the separation power of HPLC with the identification power of MS, giving both purity and identity confirmation in one analysis.',
      },
      {
        heading: 'Endotoxin and Sterility Testing',
        content: 'For any peptide intended for injection, endotoxin testing is non-negotiable. Endotoxins are bacterial cell wall fragments that can cause fever, inflammation, and in severe cases, septic shock.\n\nThe LAL (Limulus Amebocyte Lysate) test detects endotoxins. FDA limits for injectable products are typically <5 EU/kg body weight. USP <71> sterility testing confirms no viable microorganisms are present.\n\nAdditional microbial testing (USP <61>/<62>) checks for total aerobic count, yeast, mold, and objectionable organisms. Heavy metal testing (USP <232>/<233>) screens for arsenic, lead, mercury, and cadmium.',
      },
      {
        heading: 'How to Get Your Peptides Tested',
        content: 'Several laboratories offer peptide testing services for individuals and researchers:\n\n• Janoshik Analyticals — Popular in the research peptide community, offers HPLC, MS, and endotoxin testing. Turnaround time is typically 1-3 weeks.\n• Colmaric Analyticals — US-based lab offering comprehensive peptide analysis.\n• Other ISO 17025-accredited analytical labs.\n\nCosts typically range from $50-150 per test depending on the type of analysis. While this adds cost, it\'s a small price for confidence in what you\'re putting in your body.',
      },
    ],
    citations: [
      { text: 'USP General Chapter <71> Sterility Tests. United States Pharmacopeia.', url: 'https://www.usp.org' },
      { text: 'USP General Chapter <85> Bacterial Endotoxins Test. United States Pharmacopeia.', url: 'https://www.usp.org' },
      { text: 'USP General Chapters <232>/<233> Elemental Impurities. United States Pharmacopeia.', url: 'https://www.usp.org' },
      { text: 'FDA Guidance for Industry: Analytical Procedures and Methods Validation for Drugs and Biologics. 2015.', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents' },
    ],
    relatedPeptideIds: ['bpc-157', 'tb-500', 'semaglutide'],
    lastUpdated: '2025-01-15',
  },
];

export const getArticleById = (id: string): EducationalArticle | undefined =>
  EDUCATIONAL_ARTICLES.find((a) => a.id === id);

export const getArticleBySlug = (slug: string): EducationalArticle | undefined =>
  EDUCATIONAL_ARTICLES.find((a) => a.slug === slug);

export const getArticlesByCategory = (category: ArticleCategory): EducationalArticle[] =>
  EDUCATIONAL_ARTICLES.filter((a) => a.category === category);
