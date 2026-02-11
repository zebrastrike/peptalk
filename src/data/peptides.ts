import { Peptide, PeptideCategory } from '../types';

export const PEPTIDES: Peptide[] = [
  // ─── METABOLIC ────────────────────────────────────────────────────────────────
  {
    id: 'semaglutide',
    name: 'Semaglutide',
    categories: ['Metabolic'],
    researchSummary:
      'Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist investigated for its role in glycemic regulation and appetite modulation in preclinical and clinical research models. Studies indicate significant reductions in body mass and improvements in metabolic biomarkers in research subjects. Ongoing investigations explore its cardiovascular and neuroprotective research applications.',
    mechanismOfAction:
      'Binds to and activates the GLP-1 receptor, stimulating insulin secretion in a glucose-dependent manner while suppressing glucagon release. Delays gastric emptying and modulates hypothalamic appetite-regulating centers via central GLP-1R activation.',
    receptorTargets: ['GLP-1R'],
    signalingPathways: ['cAMP/PKA', 'PI3K/Akt', 'MAPK/ERK'],
    stabilityNotes:
      'Store reconstituted solution at 2-8°C. Acylated fatty acid side chain extends plasma half-life by promoting albumin binding. Avoid repeated freeze-thaw cycles.',
    molecularWeight: '4113.58 Da',
    sequenceLength: 31,
    halfLife: '~7 days',
    storageTemp: '2-8°C',
  },
  {
    id: 'tirzepatide',
    name: 'Tirzepatide',
    categories: ['Metabolic'],
    researchSummary:
      'Tirzepatide is a dual GIP/GLP-1 receptor agonist under extensive research for metabolic regulation. Preclinical and clinical studies demonstrate robust effects on glycemic control and body composition changes. Research also explores its potential in non-alcoholic steatohepatitis (NASH) models.',
    mechanismOfAction:
      'Simultaneously activates both the glucose-dependent insulinotropic polypeptide (GIP) receptor and the GLP-1 receptor, producing additive effects on insulin secretion, glucagon suppression, and centrally-mediated appetite regulation.',
    receptorTargets: ['GLP-1R', 'GIPR'],
    signalingPathways: ['cAMP/PKA', 'PI3K/Akt', 'beta-arrestin'],
    stabilityNotes:
      'Refrigerate at 2-8°C. C20 fatty diacid moiety promotes albumin binding and extended circulating half-life. Protect from light.',
    molecularWeight: '4813.45 Da',
    sequenceLength: 39,
    halfLife: '~5 days',
    storageTemp: '2-8°C',
  },
  {
    id: 'retatrutide',
    name: 'Retatrutide',
    categories: ['Metabolic'],
    researchSummary:
      'Retatrutide is a triple-agonist peptide targeting GLP-1, GIP, and glucagon receptors concurrently, currently studied in phase 2 clinical research. Early research data indicate pronounced effects on body weight reduction and metabolic parameter improvements exceeding those of dual agonists. Investigations continue into its effects on hepatic lipid metabolism.',
    mechanismOfAction:
      'Engages GLP-1R, GIPR, and glucagon receptor (GCGR) simultaneously. GLP-1R and GIPR activation promotes insulin secretion and appetite suppression, while GCGR agonism enhances energy expenditure and hepatic lipid oxidation.',
    receptorTargets: ['GLP-1R', 'GIPR', 'GCGR'],
    signalingPathways: ['cAMP/PKA', 'PI3K/Akt', 'AMPK'],
    stabilityNotes:
      'Store lyophilized form at -20°C. Reconstituted solution stable at 2-8°C for limited duration. Fatty acid acylation extends half-life.',
    molecularWeight: '~4800 Da',
    sequenceLength: 39,
    halfLife: '~6 days',
    storageTemp: '-20°C',
  },
  {
    id: 'cagrilintide',
    name: 'Cagrilintide',
    categories: ['Metabolic'],
    researchSummary:
      'Cagrilintide is a long-acting amylin receptor agonist analog explored in metabolic research for its effects on appetite regulation and glycemic control. Research models show synergistic effects when studied in combination with GLP-1 receptor agonists. Preclinical studies highlight its role in satiety signaling and gastric motility modulation.',
    mechanismOfAction:
      'Activates amylin receptors (AMY1, AMY2, AMY3), which are heterodimers of the calcitonin receptor (CTR) and receptor activity-modifying proteins (RAMPs). Modulates area postrema signaling to promote satiety and slows gastric emptying.',
    receptorTargets: ['AMY1R', 'AMY2R', 'AMY3R', 'CTR'],
    signalingPathways: ['cAMP/PKA', 'ERK1/2'],
    stabilityNotes:
      'Store at 2-8°C. Acylation with a C18 fatty diacid extends half-life. Sensitive to extreme pH conditions.',
    molecularWeight: '~3950 Da',
    sequenceLength: 37,
    halfLife: '~7 days',
    storageTemp: '2-8°C',
  },
  {
    id: 'mazdutide',
    name: 'Mazdutide',
    categories: ['Metabolic'],
    researchSummary:
      'Mazdutide is a dual GLP-1/glucagon receptor agonist peptide investigated in metabolic and obesity-related research. Phase 2 research data suggest meaningful effects on body weight and HbA1c markers. Research interest also extends to its hepatoprotective potential in fatty liver models.',
    mechanismOfAction:
      'Co-activates the GLP-1 receptor to improve insulin sensitivity and suppress appetite, and the glucagon receptor to enhance hepatic fatty acid oxidation and thermogenesis.',
    receptorTargets: ['GLP-1R', 'GCGR'],
    signalingPathways: ['cAMP/PKA', 'AMPK', 'FGF21 axis'],
    stabilityNotes:
      'Lyophilized powder should be stored at -20°C. Reconstituted peptide is stable at 2-8°C. Avoid exposure to room temperature for extended periods.',
    molecularWeight: '~4200 Da',
    halfLife: '~5-7 days',
    storageTemp: '-20°C',
  },
  {
    id: 'survodutide',
    name: 'Survodutide',
    categories: ['Metabolic'],
    researchSummary:
      'Survodutide is a dual GLP-1/glucagon receptor agonist under active investigation in metabolic disorder research and NASH models. Research findings demonstrate significant reductions in liver fat content and body weight in study populations. Its dual mechanism is hypothesized to provide additive metabolic benefits beyond single-receptor agonism.',
    mechanismOfAction:
      'Activates GLP-1R to drive incretin-mediated insulin release and central appetite suppression, while glucagon receptor activation promotes hepatic glycogenolysis, lipolysis, and energy expenditure.',
    receptorTargets: ['GLP-1R', 'GCGR'],
    signalingPathways: ['cAMP/PKA', 'AMPK', 'PI3K/Akt'],
    stabilityNotes:
      'Store lyophilized form at -20°C. Reconstitute with bacteriostatic water and store at 2-8°C. Fatty acid acylation confers extended duration of action.',
    molecularWeight: '~4300 Da',
    halfLife: '~5-6 days',
    storageTemp: '-20°C',
  },
  {
    id: 'aod-9604',
    name: 'AOD-9604',
    abbreviation: 'AOD-9604',
    categories: ['Metabolic'],
    researchSummary:
      'AOD-9604 is a modified fragment of human growth hormone (hGH 176-191) studied for its lipolytic properties without the growth-promoting or diabetogenic effects of full-length hGH. Research models demonstrate enhanced fat oxidation and reduced lipogenesis. Additional investigations examine its chondroprotective properties in cartilage repair models.',
    mechanismOfAction:
      'Mimics the lipolytic action of the C-terminal fragment of hGH by stimulating beta-3 adrenergic receptor-mediated lipolysis in adipocytes. Does not interact with the growth hormone receptor and therefore does not affect IGF-1 levels.',
    receptorTargets: ['Beta-3 adrenergic receptor'],
    signalingPathways: ['cAMP/PKA', 'HSL activation', 'lipolytic cascade'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstituted peptide should be refrigerated at 2-8°C and used within 30 days. Susceptible to proteolytic degradation at room temperature.',
    molecularWeight: '1817.12 Da',
    sequenceLength: 16,
    halfLife: '~30 minutes',
    storageTemp: '-20°C',
  },
  {
    id: '5-amino-1mq',
    name: '5-Amino-1MQ',
    abbreviation: '5-Amino-1MQ',
    categories: ['Metabolic'],
    researchSummary:
      '5-Amino-1MQ is a small molecule inhibitor of nicotinamide N-methyltransferase (NNMT) explored in metabolic research. Preclinical studies indicate it may increase intracellular NAD+ levels and promote lipolysis in adipose tissue. Research also suggests potential effects on cellular energy metabolism and stem cell differentiation.',
    mechanismOfAction:
      'Selectively inhibits NNMT, an enzyme that methylates nicotinamide and consumes SAM (S-adenosylmethionine). NNMT inhibition leads to increased intracellular NAD+ availability, enhanced sirtuin activity, and altered methylation dynamics.',
    receptorTargets: ['NNMT (enzyme inhibitor)'],
    signalingPathways: ['NAD+/SIRT1', 'SAM/SAH methylation cycle', 'AMPK'],
    stabilityNotes:
      'Store at -20°C in dry conditions. Small molecule with good oral bioavailability in preclinical models. Protect from moisture and light.',
    molecularWeight: '173.21 Da',
    halfLife: 'Under investigation',
    storageTemp: '-20°C',
  },
  {
    id: 'adipotide',
    name: 'Adipotide',
    categories: ['Metabolic'],
    researchSummary:
      'Adipotide (CKGGRAKDC-GG-D(KLAKLAK)2) is a peptidomimetic studied in preclinical obesity research models, particularly in non-human primates. It is designed to selectively target and disrupt blood supply to white adipose tissue vasculature. Research has demonstrated reductions in adiposity and improvements in insulin sensitivity markers in animal models.',
    mechanismOfAction:
      'Contains a homing domain (CKGGRAKDC) that binds prohibitin on the surface of adipose tissue endothelial cells, coupled to a pro-apoptotic D-amino acid peptide sequence (KLAKLAK)2 that disrupts mitochondrial membranes upon internalization, inducing apoptosis in targeted vascular endothelium.',
    receptorTargets: ['Prohibitin (PHB)', 'ANXA2 (Annexin A2)'],
    signalingPathways: ['Mitochondrial apoptotic pathway', 'Caspase cascade'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstitute in sterile water. D-amino acid sequence confers resistance to proteolytic degradation.',
    molecularWeight: '~2500 Da',
    halfLife: '~1-2 hours',
    storageTemp: '-20°C',
  },

  // ─── RECOVERY ─────────────────────────────────────────────────────────────────
  {
    id: 'bpc-157',
    name: 'BPC-157',
    abbreviation: 'BPC-157',
    categories: ['Recovery'],
    researchSummary:
      'BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide derived from a protective protein found in gastric juice, extensively studied in tissue repair and regeneration research. Animal model studies demonstrate accelerated healing of tendons, ligaments, muscles, and gastrointestinal tissue. Research also explores its cytoprotective effects on organ systems and its interaction with the nitric oxide system.',
    mechanismOfAction:
      'Modulates the nitric oxide (NO) system, upregulates growth factor expression (EGF, VEGF, FGF2), and promotes angiogenesis. Interacts with the dopaminergic system and may modulate FAK-paxillin signaling to promote cell migration and wound healing.',
    receptorTargets: ['VEGFR2', 'PDGFR', 'Dopamine system modulator'],
    signalingPathways: ['NO/NOS', 'VEGF/VEGFR2', 'FAK-paxillin', 'JAK-STAT3', 'EGF/EGFR'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C for approximately 10 days. Peptide is stable in gastric acid conditions. Avoid repeated freeze-thaw.',
    molecularWeight: '1419.53 Da',
    sequenceLength: 15,
    halfLife: '~4 hours (stable variant)',
    storageTemp: '-20°C',
  },
  {
    id: 'tb-500',
    name: 'TB-500',
    abbreviation: 'TB-500',
    categories: ['Recovery'],
    researchSummary:
      'TB-500 is a synthetic analog of thymosin beta-4, a 43-amino acid peptide naturally occurring in virtually all human and animal cells. Research in animal models demonstrates its role in promoting cell migration, angiogenesis, and tissue repair processes. Studies also investigate its effects on cardiac tissue repair, dermal wound healing, and reduction of fibrosis.',
    mechanismOfAction:
      'Sequesters G-actin monomers to regulate actin polymerization, promoting cell migration and reducing inflammation. Upregulates expression of anti-inflammatory cytokines while downregulating pro-inflammatory mediators. Promotes angiogenesis through VEGF-dependent and independent pathways.',
    receptorTargets: ['G-actin', 'VEGFR'],
    signalingPathways: ['Actin polymerization', 'NF-kB modulation', 'Akt/mTOR', 'HIF-1 alpha'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstitute with sterile water. Stable at 2-8°C once reconstituted for up to 8 days. Inherently stable peptide with high solubility.',
    molecularWeight: '4963.44 Da',
    sequenceLength: 43,
    halfLife: '~2-3 hours',
    storageTemp: '-20°C',
  },

  // ─── GROWTH HORMONE ───────────────────────────────────────────────────────────
  {
    id: 'cjc-1295',
    name: 'CJC-1295',
    abbreviation: 'CJC-1295',
    categories: ['Growth Hormone'],
    researchSummary:
      'CJC-1295 is a synthetic growth hormone-releasing hormone (GHRH) analog with a Drug Affinity Complex (DAC) that extends its half-life significantly. Research demonstrates sustained elevation of growth hormone and IGF-1 levels in study models. It is widely used in research exploring the GH/IGF-1 axis and its downstream effects on body composition and metabolism.',
    mechanismOfAction:
      'Binds to the GHRH receptor (GHRHR) on anterior pituitary somatotrophs, stimulating cAMP production and subsequent growth hormone synthesis and release. The DAC (maleimidopropionic acid) moiety enables covalent binding to serum albumin, extending plasma half-life.',
    receptorTargets: ['GHRHR'],
    signalingPathways: ['cAMP/PKA', 'GH/IGF-1 axis', 'MAPK/ERK'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstituted with bacteriostatic water, store at 2-8°C. DAC variant has significantly longer half-life than non-DAC form. Sensitive to peptidases at room temperature.',
    molecularWeight: '3367.97 Da (without DAC)',
    sequenceLength: 30,
    halfLife: '~6-8 days (with DAC)',
    storageTemp: '-20°C',
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    categories: ['Growth Hormone'],
    researchSummary:
      'Ipamorelin is a selective growth hormone secretagogue (GHS) peptide that stimulates pulsatile GH release without significantly affecting cortisol or prolactin levels. Research indicates it is one of the most selective ghrelin receptor agonists available for GH research. Studies investigate its effects on bone mineral density, body composition, and GI motility.',
    mechanismOfAction:
      'Selectively binds the growth hormone secretagogue receptor (GHSR-1a/ghrelin receptor) on anterior pituitary somatotrophs, triggering GH release. Unlike GHRP-6 or hexarelin, it demonstrates high selectivity for GH release with minimal effect on ACTH, cortisol, or prolactin secretion.',
    receptorTargets: ['GHSR-1a (Ghrelin receptor)'],
    signalingPathways: ['cAMP/PKA', 'IP3/DAG', 'GH/IGF-1 axis'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C. Relatively stable peptide compared to other GHSs. Use within 4 weeks of reconstitution.',
    molecularWeight: '711.85 Da',
    sequenceLength: 5,
    halfLife: '~2 hours',
    storageTemp: '-20°C',
  },
  {
    id: 'tesamorelin',
    name: 'Tesamorelin',
    categories: ['Growth Hormone'],
    researchSummary:
      'Tesamorelin is a synthetic GHRH analog with a trans-3-hexenoic acid modification at the N-terminus. It has been extensively studied for its ability to reduce visceral adipose tissue while stimulating GH secretion. Research models also examine its potential neuroprotective properties and effects on cognitive function biomarkers.',
    mechanismOfAction:
      'Binds the GHRH receptor on pituitary somatotrophs to stimulate endogenous GH synthesis and secretion. The trans-3-hexenoic acid modification improves receptor binding affinity and resistance to enzymatic degradation by dipeptidyl peptidase-IV (DPP-IV).',
    receptorTargets: ['GHRHR'],
    signalingPathways: ['cAMP/PKA', 'GH/IGF-1 axis', 'STAT5'],
    stabilityNotes:
      'Store lyophilized at room temperature (up to 25°C) or refrigerate for longer stability. Reconstitute with sterile water. Reconstituted solution should be used promptly.',
    molecularWeight: '5135.89 Da',
    sequenceLength: 44,
    halfLife: '~26-38 minutes',
    storageTemp: '2-8°C',
  },
  {
    id: 'sermorelin',
    name: 'Sermorelin',
    categories: ['Growth Hormone'],
    researchSummary:
      'Sermorelin is a synthetic peptide analog corresponding to the first 29 amino acids of endogenous GHRH(1-44). It has been studied extensively as a diagnostic and research tool for evaluating pituitary GH-secretory capacity. Research explores its effects on age-related GH decline, sleep architecture, and body composition changes.',
    mechanismOfAction:
      'Binds to the GHRH receptor on somatotroph cells in the anterior pituitary, stimulating cAMP-mediated GH gene transcription and pulsatile GH release. Preserves the physiological negative feedback loop through somatostatin and IGF-1.',
    receptorTargets: ['GHRHR'],
    signalingPathways: ['cAMP/PKA', 'GH/IGF-1 axis', 'CREB transcription'],
    stabilityNotes:
      'Store lyophilized at -20°C. Highly susceptible to degradation by DPP-IV at the N-terminal. Reconstituted solution should be stored at 2-8°C and used within 14 days.',
    molecularWeight: '3357.88 Da',
    sequenceLength: 29,
    halfLife: '~10-20 minutes',
    storageTemp: '-20°C',
  },
  {
    id: 'ghrp-2',
    name: 'GHRP-2',
    abbreviation: 'GHRP-2',
    categories: ['Growth Hormone'],
    researchSummary:
      'GHRP-2 (Growth Hormone Releasing Peptide-2) is a synthetic hexapeptide that potently stimulates GH release through the ghrelin receptor. It is considered one of the most potent GHRPs in terms of GH release magnitude. Research also explores its effects on appetite regulation, cortisol modulation, and cytoprotective mechanisms.',
    mechanismOfAction:
      'Agonizes the GHSR-1a (ghrelin receptor) on pituitary somatotrophs, synergizing with endogenous GHRH to amplify GH pulse amplitude. Also stimulates modest ACTH and cortisol release, and activates appetite via hypothalamic NPY/AgRP pathways.',
    receptorTargets: ['GHSR-1a (Ghrelin receptor)'],
    signalingPathways: ['cAMP/PKA', 'IP3/DAG', 'GH/IGF-1 axis', 'NPY/AgRP'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C for approximately 3-4 weeks. Relatively stable synthetic hexapeptide.',
    molecularWeight: '817.97 Da',
    sequenceLength: 6,
    halfLife: '~25-30 minutes',
    storageTemp: '-20°C',
  },
  {
    id: 'ghrp-6',
    name: 'GHRP-6',
    abbreviation: 'GHRP-6',
    categories: ['Growth Hormone'],
    researchSummary:
      'GHRP-6 (Growth Hormone Releasing Peptide-6) is a synthetic hexapeptide GH secretagogue and one of the earliest ghrelin receptor agonists studied. Research demonstrates robust GH release and notable appetite-stimulating effects. It is widely used in research exploring GH axis physiology and ghrelin receptor signaling.',
    mechanismOfAction:
      'Activates GHSR-1a to stimulate GH release from the pituitary. Also significantly stimulates ghrelin-like appetite signaling via hypothalamic circuits. Triggers cortisol and prolactin release to a greater degree than more selective GHRPs.',
    receptorTargets: ['GHSR-1a (Ghrelin receptor)'],
    signalingPathways: ['cAMP/PKA', 'IP3/DAG', 'GH/IGF-1 axis', 'NPY/AgRP', 'PLC'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstituted solution should be refrigerated at 2-8°C. Generally stable in solution for 3-4 weeks. His-D-Trp sequence contributes to stability.',
    molecularWeight: '873.01 Da',
    sequenceLength: 6,
    halfLife: '~15-30 minutes',
    storageTemp: '-20°C',
  },
  {
    id: 'hexarelin',
    name: 'Hexarelin',
    categories: ['Growth Hormone'],
    researchSummary:
      'Hexarelin is a synthetic hexapeptide growth hormone secretagogue with potent GH-releasing activity. Research indicates it is among the most potent GHRPs but is subject to rapid desensitization of GH response with repeated exposure. Studies also investigate its cardioprotective properties, including effects on cardiac fibrosis and ventricular remodeling.',
    mechanismOfAction:
      'Potently activates GHSR-1a on pituitary somatotrophs and cardiac tissue. Cardioprotective effects may be mediated through CD36 scavenger receptor binding independently of GH release. Stimulates both GH release and ACTH/cortisol secretion.',
    receptorTargets: ['GHSR-1a (Ghrelin receptor)', 'CD36 (scavenger receptor)'],
    signalingPathways: ['cAMP/PKA', 'IP3/DAG', 'GH/IGF-1 axis', 'ERK1/2', 'Akt'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstituted solution stable at 2-8°C for 2-3 weeks. Susceptible to tachyphylaxis in research protocols requiring extended exposure.',
    molecularWeight: '887.04 Da',
    sequenceLength: 6,
    halfLife: '~60 minutes',
    storageTemp: '-20°C',
  },
  {
    id: 'hgh-fragment-176-191',
    name: 'HGH Fragment 176-191',
    abbreviation: 'HGH Frag 176-191',
    categories: ['Growth Hormone', 'Metabolic'],
    researchSummary:
      'HGH Fragment 176-191 is a stabilized peptide corresponding to the C-terminal portion (amino acids 176-191) of human growth hormone. Research focuses on its lipolytic activity, which mimics the fat-metabolizing properties of GH without affecting glycemic control or promoting growth. Studies in obese animal models demonstrate selective reduction of adipose tissue.',
    mechanismOfAction:
      'Stimulates lipolysis and inhibits lipogenesis in adipocytes through beta-3 adrenergic receptor signaling, similar to AOD-9604. Does not bind the GH receptor and does not influence IGF-1 levels or promote cellular proliferation.',
    receptorTargets: ['Beta-3 adrenergic receptor'],
    signalingPathways: ['cAMP/PKA', 'HSL activation', 'lipolytic cascade'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstitute with bacteriostatic water and store at 2-8°C. Relatively fragile peptide; avoid repeated freeze-thaw cycles.',
    molecularWeight: '1817.12 Da',
    sequenceLength: 16,
    halfLife: '~15-20 minutes',
    storageTemp: '-20°C',
  },
  {
    id: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    abbreviation: 'IGF-1 LR3',
    categories: ['Growth Hormone'],
    researchSummary:
      'IGF-1 LR3 is a modified analog of insulin-like growth factor 1 with an arginine substitution at position 3 and a 13-amino acid N-terminal extension, reducing its affinity for IGF binding proteins. This modification results in significantly enhanced bioavailability and potency compared to native IGF-1 in research settings. Studies investigate its roles in skeletal muscle hypertrophy, cell proliferation, and anti-apoptotic signaling.',
    mechanismOfAction:
      'Binds and activates the IGF-1 receptor (IGF-1R) tyrosine kinase, triggering downstream PI3K/Akt and MAPK/ERK cascades. The LR3 modification drastically reduces binding to IGFBPs (1-6), allowing greater free IGF-1 bioactivity. Promotes protein synthesis, cell survival, and proliferation.',
    receptorTargets: ['IGF-1R', 'Insulin receptor (low affinity)'],
    signalingPathways: ['PI3K/Akt/mTOR', 'MAPK/ERK', 'JAK/STAT', 'Ras/Raf'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstitute with acidified water or dilute acetic acid (0.1M). Very sensitive to degradation; reconstituted solution should be stored at 2-8°C and used within days.',
    molecularWeight: '9117.5 Da',
    sequenceLength: 83,
    halfLife: '~20-30 hours',
    storageTemp: '-20°C',
  },

  // ─── NOOTROPIC ────────────────────────────────────────────────────────────────
  {
    id: 'semax',
    name: 'Semax',
    categories: ['Nootropic', 'Neuropeptide'],
    researchSummary:
      'Semax is a synthetic heptapeptide analog of the ACTH(4-10) fragment, developed in Russia for neuroscience research. Extensive research explores its nootropic, neuroprotective, and neurotrophic properties. Studies demonstrate upregulation of BDNF and modulation of serotonergic and dopaminergic systems in brain tissue models.',
    mechanismOfAction:
      'Stimulates expression of brain-derived neurotrophic factor (BDNF), nerve growth factor (NGF), and TrkB receptor signaling. Modulates melanocortin receptors (MC3R/MC4R) and enhances monoaminergic neurotransmission. May influence gene expression related to immune function and neuroplasticity.',
    receptorTargets: ['MC3R', 'MC4R', 'TrkB'],
    signalingPathways: ['BDNF/TrkB', 'cAMP/PKA', 'MAPK/ERK', 'PI3K/Akt'],
    stabilityNotes:
      'Store lyophilized at -20°C. Nasal formulation stable at 2-8°C. Pro-Gly-Pro C-terminal modification confers resistance to proteolytic degradation. Short plasma half-life but prolonged central effects.',
    molecularWeight: '813.93 Da',
    sequenceLength: 7,
    halfLife: '~2-3 minutes (plasma); prolonged CNS activity',
    storageTemp: '-20°C',
  },
  {
    id: 'selank',
    name: 'Selank',
    categories: ['Nootropic', 'Neuropeptide', 'Immune'],
    researchSummary:
      'Selank is a synthetic heptapeptide analog of the endogenous immunomodulatory peptide tuftsin, with an added Pro-Gly-Pro sequence for metabolic stability. Research investigates its anxiolytic and nootropic properties alongside immunomodulatory effects. Studies report modulation of IL-6 expression and GABAergic neurotransmission.',
    mechanismOfAction:
      'Modulates GABAergic neurotransmission by allosterically influencing GABA-A receptor function. Affects serotonin metabolism by inhibiting enkephalin-degrading enzymes. Stimulates IL-6 and influences expression of 36+ genes related to immune and inflammatory responses.',
    receptorTargets: ['GABA-A receptor (allosteric)', 'Tuftsin receptors'],
    signalingPathways: ['GABAergic', 'Serotonergic', 'Enkephalinase inhibition', 'IL-6/JAK-STAT'],
    stabilityNotes:
      'Store lyophilized at -20°C. Pro-Gly-Pro modification extends biological half-life. Intranasal formulations stored at 2-8°C. Highly soluble in aqueous solutions.',
    molecularWeight: '751.87 Da',
    sequenceLength: 7,
    halfLife: '~several minutes (plasma); prolonged CNS effects',
    storageTemp: '-20°C',
  },
  {
    id: 'dihexa',
    name: 'Dihexa',
    categories: ['Nootropic', 'Neuropeptide'],
    researchSummary:
      'Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) is a synthetic angiotensin IV analog with extraordinarily potent procognitive properties reported in animal research. Studies demonstrate it is approximately 10 million-fold more potent than BDNF at promoting hepatocyte growth factor (HGF)/c-Met signaling. Research focuses on synaptogenesis, memory consolidation, and potential applications in neurodegenerative disease models.',
    mechanismOfAction:
      'Activates the hepatocyte growth factor (HGF)/c-Met receptor system, promoting dendritic spine formation and synaptogenesis. Functions as an allosteric potentiator of HGF by inhibiting HGF inactivation. Does not bind AT4 receptor directly like angiotensin IV but acts through distinct HGF-dependent mechanisms.',
    receptorTargets: ['c-Met (HGF receptor)'],
    signalingPathways: ['HGF/c-Met', 'PI3K/Akt', 'MAPK/ERK', 'Ras/Raf'],
    stabilityNotes:
      'Store at -20°C in dry conditions. Small molecule-like peptide with enhanced oral bioavailability. Protect from moisture. Stable in DMSO stock solutions.',
    molecularWeight: '507.66 Da',
    halfLife: 'Under investigation; extended compared to angiotensin IV',
    storageTemp: '-20°C',
  },
  {
    id: 'pinealon',
    name: 'Pinealon',
    categories: ['Nootropic', 'Neuropeptide'],
    researchSummary:
      'Pinealon (Glu-Asp-Arg) is a short bioregulatory tripeptide derived from the pineal gland, developed as part of Khavinson peptide bioregulation research. Studies explore its neuroprotective and geroprotective properties, particularly in models of oxidative stress and neurodegeneration. Research indicates it may modulate gene expression related to cell differentiation and apoptosis in neural tissue.',
    mechanismOfAction:
      'Proposed to penetrate cell membranes and interact directly with DNA, modulating gene expression related to neural cell differentiation and survival. May regulate epigenetic mechanisms and influence antioxidant enzyme expression. Exact receptor targets remain under investigation.',
    receptorTargets: ['Direct DNA interaction (proposed)'],
    signalingPathways: ['Epigenetic regulation', 'Antioxidant defense (SOD, catalase)', 'Apoptosis regulation'],
    stabilityNotes:
      'Store at -20°C. Tripeptide with moderate stability. Short peptides may have limited plasma half-life but can penetrate biological barriers. Lyophilized form preferred.',
    molecularWeight: '418.40 Da',
    sequenceLength: 3,
    halfLife: '~minutes (estimated for tripeptide)',
    storageTemp: '-20°C',
  },
  {
    id: 'cerebrolysin',
    name: 'Cerebrolysin',
    categories: ['Nootropic', 'Neuropeptide'],
    researchSummary:
      'Cerebrolysin is a mixture of low-molecular-weight neuropeptides and free amino acids derived from porcine brain tissue through controlled enzymatic proteolysis. Extensive research explores its neurotrophic, neuroprotective, and neuroplasticity-promoting properties. Clinical research has examined it in the context of stroke recovery, traumatic brain injury, and neurodegenerative disease models.',
    mechanismOfAction:
      'Contains neurotrophic factor-like peptides that mimic the effects of BDNF, GDNF, NGF, and CNTF. Modulates GSK-3 beta activity, reduces tau hyperphosphorylation, and promotes synaptic plasticity. Enhances neuronal survival through multiple parallel neuroprotective cascades.',
    receptorTargets: ['TrkA', 'TrkB', 'p75NTR', 'NMDA receptor (modulatory)'],
    signalingPathways: ['BDNF/TrkB', 'PI3K/Akt', 'GSK-3 beta', 'MAPK/ERK', 'CREB'],
    stabilityNotes:
      'Store at 2-8°C protected from light. Amber-colored aqueous solution. Do not freeze. Contains a complex mixture so batch variability is a research consideration.',
    molecularWeight: 'Mixture (<10,000 Da fragments)',
    halfLife: '~minutes for individual peptides; cumulative effects persist',
    storageTemp: '2-8°C',
  },

  // ─── IMMUNE ───────────────────────────────────────────────────────────────────
  {
    id: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1',
    abbreviation: 'Ta1',
    categories: ['Immune'],
    researchSummary:
      'Thymosin Alpha-1 is a 28-amino acid peptide originally isolated from thymic tissue, now produced synthetically. It is one of the most extensively researched immunomodulatory peptides with studies spanning decades. Research investigates its ability to modulate dendritic cell maturation, enhance T-cell function, and balance Th1/Th2 immune responses.',
    mechanismOfAction:
      'Activates Toll-like receptors TLR2 and TLR9 on dendritic cells, promoting maturation and cross-presentation of antigens. Enhances NK cell cytotoxicity, stimulates T-cell differentiation, and modulates the balance between pro-inflammatory and anti-inflammatory cytokine production.',
    receptorTargets: ['TLR2', 'TLR9'],
    signalingPathways: ['TLR/MyD88', 'NF-kB', 'IRF7', 'p38 MAPK', 'T-cell receptor signaling'],
    stabilityNotes:
      'Store lyophilized at 2-8°C. Reconstituted solution stable at 2-8°C for several days. Acetylated N-terminus provides resistance to aminopeptidases. Highly soluble in aqueous buffers.',
    molecularWeight: '3108.3 Da',
    sequenceLength: 28,
    halfLife: '~2 hours',
    storageTemp: '2-8°C',
  },
  {
    id: 'thymalin',
    name: 'Thymalin',
    categories: ['Immune', 'Longevity'],
    researchSummary:
      'Thymalin is a dipeptide (Glu-Trp) derived from thymic extract research, developed as part of the Khavinson peptide bioregulator paradigm. Geroprotective research examines its effects on immune reconstitution and longevity markers. Long-term observational studies in elderly populations have investigated correlations with improved immune function biomarkers and reduced morbidity.',
    mechanismOfAction:
      'Proposed to modulate thymic function by influencing thymocyte differentiation and T-cell maturation. May interact directly with DNA regulatory regions to modulate gene expression related to immune cell development. Influences the neuroendocrine-immune axis.',
    receptorTargets: ['Thymic epithelial cell receptors (proposed)'],
    signalingPathways: ['T-cell maturation pathways', 'Epigenetic regulation', 'Neuroendocrine-immune axis'],
    stabilityNotes:
      'Store lyophilized at -20°C. Short dipeptide with rapid clearance. Reconstitute in sterile saline. Stable in lyophilized form for extended periods.',
    molecularWeight: '333.34 Da',
    sequenceLength: 2,
    halfLife: '~minutes',
    storageTemp: '-20°C',
  },
  {
    id: 'll-37',
    name: 'LL-37',
    abbreviation: 'LL-37',
    categories: ['Immune', 'Antimicrobial'],
    researchSummary:
      'LL-37 is the only cathelicidin-derived antimicrobial peptide identified in humans, produced by cleavage of the hCAP18 precursor protein. Research demonstrates broad-spectrum antimicrobial activity against bacteria, fungi, and enveloped viruses through membrane disruption. Studies also explore its immunomodulatory, angiogenic, and wound-healing properties beyond direct antimicrobial action.',
    mechanismOfAction:
      'Disrupts microbial membranes through electrostatic interaction with negatively charged lipid bilayers, forming toroidal pores. Also activates formyl peptide receptor-like 1 (FPRL1/FPR2), P2X7 receptor, and EGFR to modulate immune cell chemotaxis, cytokine production, and wound healing.',
    receptorTargets: ['FPR2/FPRL1', 'P2X7', 'EGFR', 'TLR4 (modulatory)'],
    signalingPathways: ['MAPK/ERK', 'NF-kB modulation', 'PI3K/Akt', 'WNT/beta-catenin', 'EGFR/STAT3'],
    stabilityNotes:
      'Store lyophilized at -20°C. Highly cationic and amphipathic; may adsorb to plastic surfaces. Reconstitute in sterile water. Sensitive to high salt concentrations which may affect secondary structure.',
    molecularWeight: '4493.33 Da',
    sequenceLength: 37,
    halfLife: '~minutes to hours (tissue-dependent)',
    storageTemp: '-20°C',
  },

  // ─── ANTI-INFLAMMATORY ────────────────────────────────────────────────────────
  {
    id: 'kpv',
    name: 'KPV',
    abbreviation: 'KPV',
    categories: ['Anti-inflammatory'],
    researchSummary:
      'KPV is a C-terminal tripeptide fragment (Lys-Pro-Val) of alpha-melanocyte-stimulating hormone (alpha-MSH) that retains potent anti-inflammatory activity. Research demonstrates it inhibits NF-kB nuclear translocation and reduces pro-inflammatory cytokine production in multiple cell types. Studies in intestinal inflammation models show reduced mucosal damage and inflammatory infiltration.',
    mechanismOfAction:
      'Enters cells and directly inhibits NF-kB activation by preventing IkB-alpha degradation and p65 nuclear translocation. Unlike full-length alpha-MSH, KPV may exert anti-inflammatory effects independently of melanocortin receptors, though some MC1R interaction has been reported.',
    receptorTargets: ['MC1R (partial)', 'Intracellular NF-kB pathway (direct)'],
    signalingPathways: ['NF-kB inhibition', 'IkB-alpha stabilization', 'PGE2 reduction', 'TNF-alpha suppression'],
    stabilityNotes:
      'Store lyophilized at -20°C. Tripeptide with moderate aqueous stability. Reconstitute in sterile water. Short plasma half-life typical of tripeptides but intracellular activity may persist.',
    molecularWeight: '342.43 Da',
    sequenceLength: 3,
    halfLife: '~minutes',
    storageTemp: '-20°C',
  },

  // ─── MITOCHONDRIAL ────────────────────────────────────────────────────────────
  {
    id: 'mots-c',
    name: 'MOTS-c',
    abbreviation: 'MOTS-c',
    categories: ['Mitochondrial', 'Metabolic'],
    researchSummary:
      'MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA Type-c) is a mitochondria-derived peptide encoded within the 12S rRNA gene. Research reveals it as a mitochondrial-encoded signaling peptide that regulates metabolic homeostasis and insulin sensitivity. Studies demonstrate AMPK activation, enhanced glucose uptake, and exercise-mimetic effects in research models.',
    mechanismOfAction:
      'Activates AMPK by altering the folate cycle and de novo purine biosynthesis pathway, leading to accumulation of AICAR (an endogenous AMPK activator). Translocates to the nucleus under metabolic stress to regulate adaptive gene expression. Enhances skeletal muscle glucose uptake independently of insulin.',
    receptorTargets: ['Intracellular (AMPK pathway)', 'Nuclear translocation'],
    signalingPathways: ['AMPK', 'Folate-AICAR-AMPK axis', 'mTOR inhibition', 'NRF2/ARE', 'SIRT1'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstitute in sterile water. Mitochondrial-derived peptide with moderate stability. Protect from repeated freeze-thaw. Use within 2 weeks of reconstitution.',
    molecularWeight: '2174.63 Da',
    sequenceLength: 16,
    halfLife: '~4-12 hours (estimated)',
    storageTemp: '-20°C',
  },
  {
    id: 'ss-31',
    name: 'SS-31',
    abbreviation: 'SS-31',
    categories: ['Mitochondrial'],
    researchSummary:
      'SS-31 (Elamipretide/Bendavia) is a cell-permeable tetrapeptide (D-Arg-Dmt-Lys-Phe-NH2) that selectively concentrates in the inner mitochondrial membrane. Research demonstrates it stabilizes cardiolipin and optimizes electron transport chain function. Studies investigate its effects on mitochondrial bioenergetics, oxidative stress, and age-related mitochondrial dysfunction.',
    mechanismOfAction:
      'Selectively binds cardiolipin in the inner mitochondrial membrane, stabilizing cytochrome c interaction and optimizing electron transfer between complexes III and IV. Reduces electron leak and ROS generation. Does not act as a conventional antioxidant but rather optimizes mitochondrial function at its source.',
    receptorTargets: ['Cardiolipin (inner mitochondrial membrane)'],
    signalingPathways: ['ETC optimization', 'Cardiolipin stabilization', 'ROS reduction', 'Cytochrome c interaction'],
    stabilityNotes:
      'Store lyophilized at -20°C. Contains D-amino acids and dimethyltyrosine which enhance stability. Reconstitute in sterile water. Cell-permeable without requiring specific transporters.',
    molecularWeight: '640.8 Da',
    sequenceLength: 4,
    halfLife: '~4 hours',
    storageTemp: '-20°C',
  },
  {
    id: 'nad-plus',
    name: 'NAD+',
    abbreviation: 'NAD+',
    categories: ['Mitochondrial', 'Longevity'],
    researchSummary:
      'NAD+ (Nicotinamide Adenine Dinucleotide) is an essential coenzyme present in all living cells, serving as a critical substrate for sirtuins, PARPs, and CD38. Research focuses on age-related NAD+ decline and its impact on mitochondrial function, DNA repair, and cellular metabolism. Studies investigate various precursor strategies (NMN, NR) and direct NAD+ repletion in research models.',
    mechanismOfAction:
      'Serves as an obligate co-substrate for sirtuin deacetylases (SIRT1-7), enabling epigenetic regulation and mitochondrial biogenesis. Required by PARP enzymes for DNA repair. Functions as an electron carrier in glycolysis, TCA cycle, and oxidative phosphorylation. CD38-mediated NAD+ consumption increases with aging.',
    receptorTargets: ['SIRT1-7 (co-substrate)', 'PARP1/2 (co-substrate)', 'CD38 (substrate)'],
    signalingPathways: ['SIRT1/PGC-1 alpha', 'PARP/DNA repair', 'AMPK', 'mTOR', 'Oxidative phosphorylation'],
    stabilityNotes:
      'Store at -20°C protected from light and moisture. Highly hygroscopic. Reduced form (NADH) is light-sensitive. Aqueous solutions degrade rapidly at room temperature. Maintain cold chain.',
    molecularWeight: '663.43 Da',
    halfLife: '~1-2 hours (plasma)',
    storageTemp: '-20°C',
  },
  {
    id: 'slu-pp-332',
    name: 'SLU-PP-332',
    abbreviation: 'SLU-PP-332',
    categories: ['Mitochondrial'],
    researchSummary:
      'SLU-PP-332 is a small molecule agonist of estrogen-related receptors (ERRs), investigated as an exercise mimetic in preclinical metabolic research. Studies in mouse models demonstrate increased oxidative muscle fiber content, enhanced mitochondrial biogenesis, and improved exercise endurance. Research explores its potential as a tool compound for studying ERR-mediated metabolic regulation.',
    mechanismOfAction:
      'Activates the estrogen-related receptor (ERR) family, particularly ERR-alpha, ERR-beta, and ERR-gamma. ERR activation drives transcription of genes involved in mitochondrial biogenesis, oxidative phosphorylation, fatty acid oxidation, and the TCA cycle. Mimics transcriptional effects of endurance exercise on skeletal muscle.',
    receptorTargets: ['ERR-alpha', 'ERR-beta', 'ERR-gamma'],
    signalingPathways: ['ERR/PGC-1 alpha', 'Mitochondrial biogenesis', 'Oxidative phosphorylation', 'Fatty acid oxidation'],
    stabilityNotes:
      'Store at -20°C. Small molecule with good chemical stability. Soluble in DMSO for stock solutions. Protect from light and humidity.',
    molecularWeight: '~400 Da',
    halfLife: 'Under investigation',
    storageTemp: '-20°C',
  },

  // ─── LONGEVITY ────────────────────────────────────────────────────────────────
  {
    id: 'epithalon',
    name: 'Epithalon',
    categories: ['Longevity'],
    researchSummary:
      'Epithalon (Epitalon, Ala-Glu-Asp-Gly) is a synthetic tetrapeptide based on the natural pineal peptide epithalamin, developed by Professor Khavinson. Research explores its ability to activate telomerase and extend telomere length in human somatic cells. Studies in animal models and cell cultures investigate its geroprotective effects, including modulation of melatonin production and circadian rhythm regulation.',
    mechanismOfAction:
      'Activates telomerase reverse transcriptase (hTERT) catalytic subunit expression, promoting telomere elongation in somatic cells approaching replicative senescence. May also stimulate pineal melatonin production and modulate neuroendocrine regulation of aging through the pineal-hypothalamic axis.',
    receptorTargets: ['hTERT (transcriptional activation)', 'Pineal gland regulatory elements'],
    signalingPathways: ['Telomerase/hTERT', 'Melatonin synthesis', 'Circadian clock regulation', 'Epigenetic modulation'],
    stabilityNotes:
      'Store lyophilized at -20°C. Tetrapeptide with moderate stability in aqueous solution. Reconstitute with sterile water. Short plasma half-life typical of small peptides.',
    molecularWeight: '390.35 Da',
    sequenceLength: 4,
    halfLife: '~minutes',
    storageTemp: '-20°C',
  },

  // ─── SLEEP ────────────────────────────────────────────────────────────────────
  {
    id: 'dsip',
    name: 'DSIP',
    abbreviation: 'DSIP',
    categories: ['Sleep', 'Neuropeptide'],
    researchSummary:
      'DSIP (Delta Sleep-Inducing Peptide) is a nonapeptide (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu) originally isolated from cerebral venous blood of rabbits during electrically induced sleep. Research investigates its effects on sleep architecture, particularly delta wave (slow-wave) sleep promotion. Studies also explore its potential stress-modulatory, analgesic, and endocrine-regulating properties.',
    mechanismOfAction:
      'Mechanism remains incompletely characterized. Proposed to modulate GABAergic and glutamatergic neurotransmission, influence cortisol and ACTH release, and interact with opioid systems. May affect serotonin and dopamine turnover in specific brain regions. Appears to act as a neuromodulator rather than through a single receptor target.',
    receptorTargets: ['GABA-A receptor (modulatory)', 'Opioid receptors (partial)', 'Serotonergic system'],
    signalingPathways: ['GABAergic', 'Serotonergic', 'Hypothalamic-pituitary-adrenal axis', 'Opioidergic'],
    stabilityNotes:
      'Store lyophilized at -20°C. Nonapeptide susceptible to proteolytic degradation. Reconstitute with sterile water and store at 2-8°C. Use shortly after reconstitution. Some research uses phosphorylated DSIP variant for improved stability.',
    molecularWeight: '848.82 Da',
    sequenceLength: 9,
    halfLife: '~7-8 minutes',
    storageTemp: '-20°C',
  },

  // ─── REPRODUCTIVE ─────────────────────────────────────────────────────────────
  {
    id: 'kisspeptin-10',
    name: 'Kisspeptin-10',
    categories: ['Reproductive'],
    researchSummary:
      'Kisspeptin-10 is the C-terminal decapeptide fragment of kisspeptin-54, the endogenous ligand for the GPR54 (KISS1R) receptor. It is a critical regulator of the hypothalamic-pituitary-gonadal (HPG) axis and GnRH neuron activation. Research investigates its role in puberty onset, reproductive endocrinology, and as a diagnostic tool for hypothalamic amenorrhea and hypogonadism models.',
    mechanismOfAction:
      'Binds and activates the KISS1 receptor (GPR54) on GnRH neurons in the hypothalamus, triggering robust GnRH secretion and subsequent LH and FSH release from the anterior pituitary. Represents the most potent known endogenous stimulator of the reproductive hormone cascade.',
    receptorTargets: ['KISS1R (GPR54)'],
    signalingPathways: ['Gq/PLC/IP3', 'GnRH/LH/FSH cascade', 'PKC', 'MAPK/ERK'],
    stabilityNotes:
      'Store lyophilized at -20°C. Reconstitute in sterile water. Short-acting peptide with rapid clearance. Sensitive to enzymatic degradation. Use promptly after reconstitution.',
    molecularWeight: '1302.46 Da',
    sequenceLength: 10,
    halfLife: '~4 minutes',
    storageTemp: '-20°C',
  },
  {
    id: 'hcg',
    name: 'hCG',
    abbreviation: 'hCG',
    categories: ['Reproductive'],
    researchSummary:
      'Human chorionic gonadotropin (hCG) is a heterodimeric glycoprotein hormone naturally produced by trophoblast cells. Research extensively characterizes its role in maintaining corpus luteum progesterone production and modulating gonadal steroidogenesis. Studies investigate its applications in reproductive endocrinology research, including Leydig cell stimulation and ovulation induction models.',
    mechanismOfAction:
      'Binds and activates the luteinizing hormone/choriogonadotropin receptor (LHCGR), a G protein-coupled receptor, on gonadal cells. In Leydig cells, stimulates testosterone synthesis via cAMP/PKA-mediated StAR protein activation. In ovarian granulosa cells, promotes progesterone synthesis and oocyte maturation.',
    receptorTargets: ['LHCGR (LH/CG receptor)'],
    signalingPathways: ['cAMP/PKA', 'StAR protein activation', 'MAPK/ERK', 'PI3K/Akt'],
    stabilityNotes:
      'Store lyophilized at 2-8°C. Glycoprotein with relatively good stability. Reconstitute with provided diluent. Reconstituted solution stable at 2-8°C for 30-60 days depending on formulation. Avoid freezing reconstituted solution.',
    molecularWeight: '~36,700 Da',
    halfLife: '~24-36 hours',
    storageTemp: '2-8°C',
  },
  {
    id: 'hmg',
    name: 'HMG',
    abbreviation: 'HMG',
    categories: ['Reproductive'],
    researchSummary:
      'Human Menopausal Gonadotropin (HMG) is a preparation containing both follicle-stimulating hormone (FSH) and luteinizing hormone (LH) activity, originally derived from urinary sources. It is widely utilized in reproductive research for controlled ovarian stimulation models and gonadal function studies. Research also explores its use in spermatogenesis research models.',
    mechanismOfAction:
      'FSH component binds the FSH receptor (FSHR) on granulosa cells to promote follicular development and estradiol production. LH component binds LHCGR on theca cells to stimulate androgen production (which is aromatized to estrogen). Combined activity supports complete folliculogenesis.',
    receptorTargets: ['FSHR', 'LHCGR'],
    signalingPathways: ['cAMP/PKA', 'PI3K/Akt', 'MAPK/ERK', 'StAR protein activation'],
    stabilityNotes:
      'Store lyophilized at 2-8°C. Reconstitute with provided diluent. Glycoprotein preparation with moderate stability. Reconstituted material should be used promptly. Highly purified forms available for research use.',
    molecularWeight: '~30,000-40,000 Da (glycoprotein mixture)',
    halfLife: '~24 hours (FSH component); ~12 hours (LH component)',
    storageTemp: '2-8°C',
  },

  // ─── SEXUAL HEALTH ────────────────────────────────────────────────────────────
  {
    id: 'pt-141',
    name: 'PT-141',
    abbreviation: 'PT-141',
    categories: ['Sexual Health'],
    researchSummary:
      'PT-141 (Bremelanotide) is a synthetic cyclic heptapeptide melanocortin receptor agonist originally derived from Melanotan-II research. It is the first melanocortin-based compound studied for its effects on central nervous system arousal and sexual response pathways. Research demonstrates it activates hypothalamic pathways distinct from peripheral vascular mechanisms.',
    mechanismOfAction:
      'Selectively activates melanocortin-4 receptor (MC4R) in the hypothalamus and limbic system, stimulating central arousal pathways. Unlike PDE5 inhibitors, its mechanism is centrally mediated through dopaminergic and oxytocinergic downstream signaling. Also has affinity for MC1R and MC3R.',
    receptorTargets: ['MC4R (primary)', 'MC3R', 'MC1R'],
    signalingPathways: ['Melanocortin/MC4R', 'Hypothalamic dopaminergic', 'Oxytocinergic', 'cAMP/PKA'],
    stabilityNotes:
      'Store lyophilized at -20°C. Cyclic peptide structure provides enhanced stability compared to linear analogs. Reconstitute with bacteriostatic water. Stable at 2-8°C after reconstitution.',
    molecularWeight: '1025.18 Da',
    sequenceLength: 7,
    halfLife: '~2-4 hours',
    storageTemp: '-20°C',
  },

  // ─── COSMETIC ─────────────────────────────────────────────────────────────────
  {
    id: 'ghk-cu',
    name: 'GHK-Cu',
    abbreviation: 'GHK-Cu',
    categories: ['Cosmetic', 'Recovery'],
    researchSummary:
      'GHK-Cu (Glycyl-L-Histidyl-L-Lysine copper complex) is a naturally occurring copper-binding tripeptide found in human plasma, saliva, and urine. Research demonstrates it modulates expression of over 4,000 genes, with effects on collagen synthesis, wound repair, and anti-inflammatory signaling. Studies investigate its role in skin remodeling, hair follicle biology, and tissue regeneration models.',
    mechanismOfAction:
      'The GHK tripeptide chelates copper(II) ions, and this complex activates intracellular signaling cascades promoting collagen I and III synthesis, glycosaminoglycan production, and decorin expression. Upregulates metalloproteinases for tissue remodeling while stimulating TGF-beta, VEGF, and FGF2 expression. Modulates Wnt signaling in hair follicle stem cells.',
    receptorTargets: ['Integrin receptors', 'Copper transporters (CTR1)', 'TGF-beta receptors'],
    signalingPathways: ['TGF-beta/Smad', 'Wnt/beta-catenin', 'VEGF', 'NF-kB suppression', 'MAPK/ERK'],
    stabilityNotes:
      'Store at 2-8°C. Copper complex is light-sensitive; store in amber containers. Stable in mildly acidic aqueous solutions (pH 5-6). Oxidation of copper can reduce efficacy; minimize air exposure.',
    molecularWeight: '403.93 Da',
    sequenceLength: 3,
    halfLife: '~hours (tissue-dependent)',
    storageTemp: '2-8°C',
  },
  {
    id: 'snap-8',
    name: 'SNAP-8',
    abbreviation: 'SNAP-8',
    categories: ['Cosmetic'],
    researchSummary:
      'SNAP-8 (Acetyl Octapeptide-3) is a synthetic octapeptide designed to modulate SNARE complex formation and reduce neuromuscular activity in skin research models. Studies demonstrate it competes with SNAP-25 to interfere with vesicular neurotransmitter release at the neuromuscular junction. Research focuses on its topical application in expression line reduction models.',
    mechanismOfAction:
      'Mimics the N-terminal domain of SNAP-25 and competitively interferes with SNARE complex assembly (SNAP-25/Syntaxin/VAMP). By destabilizing the ternary SNARE complex, it reduces acetylcholine vesicle fusion and release at the neuromuscular junction, decreasing muscular contraction intensity.',
    receptorTargets: ['SNARE complex (competitive inhibitor)', 'SNAP-25 binding site'],
    signalingPathways: ['SNARE complex inhibition', 'Neuromuscular junction modulation', 'Exocytosis reduction'],
    stabilityNotes:
      'Store at 2-8°C. Water-soluble peptide compatible with cosmetic formulations. Stable in aqueous solution at mildly acidic to neutral pH. Acetylation of N-terminus enhances stability. Effective concentration range studied in vitro.',
    molecularWeight: '1075.29 Da',
    sequenceLength: 8,
    halfLife: 'Topical (not systemically relevant)',
    storageTemp: '2-8°C',
  },

  // ─── TANNING ──────────────────────────────────────────────────────────────────
  {
    id: 'melanotan-1',
    name: 'Melanotan-1',
    abbreviation: 'MT-1',
    categories: ['Tanning'],
    researchSummary:
      'Melanotan-1 (Afamelanotide) is a synthetic linear tridecapeptide analog of alpha-MSH with enhanced potency and metabolic stability. Research focuses on its activation of melanocortin-1 receptor and subsequent stimulation of eumelanin production in melanocytes. Studies investigate its photoprotective properties and role in erythropoietic protoporphyria research models.',
    mechanismOfAction:
      'Selectively activates the melanocortin-1 receptor (MC1R) on epidermal melanocytes, stimulating adenylyl cyclase activity and cAMP production. This activates MITF (microphthalmia-associated transcription factor), which upregulates tyrosinase and other melanogenic enzymes, promoting eumelanin synthesis.',
    receptorTargets: ['MC1R (primary)'],
    signalingPathways: ['cAMP/PKA', 'MITF transcription', 'Tyrosinase activation', 'Melanogenesis cascade'],
    stabilityNotes:
      'Store lyophilized at -20°C. Norleucine substitution at position 4 and D-phenylalanine at position 7 enhance metabolic stability. Reconstituted solution stable at 2-8°C. More selective than MT-II.',
    molecularWeight: '1646.85 Da',
    sequenceLength: 13,
    halfLife: '~30 minutes to 2 hours',
    storageTemp: '-20°C',
  },
  {
    id: 'melanotan-2',
    name: 'Melanotan-2',
    abbreviation: 'MT-2',
    categories: ['Tanning', 'Sexual Health'],
    researchSummary:
      'Melanotan-2 (MT-II) is a synthetic cyclic heptapeptide analog of alpha-MSH that acts as a non-selective melanocortin receptor agonist. Research demonstrates it stimulates melanogenesis, but its non-selectivity also activates MC3R and MC4R, leading to additional central nervous system effects. Studies investigate melanogenesis, energy homeostasis, and sexual function pathways.',
    mechanismOfAction:
      'Non-selectively activates melanocortin receptors MC1R, MC3R, MC4R, and MC5R. MC1R activation promotes melanogenesis. MC4R activation in the hypothalamus modulates sexual arousal pathways and appetite circuits. Cyclic structure confers greater metabolic stability but reduced receptor selectivity compared to linear analogs.',
    receptorTargets: ['MC1R', 'MC3R', 'MC4R', 'MC5R'],
    signalingPathways: ['cAMP/PKA', 'MITF/melanogenesis', 'Hypothalamic MC4R signaling', 'Dopaminergic/oxytocinergic'],
    stabilityNotes:
      'Store lyophilized at -20°C. Cyclic structure enhances resistance to proteolytic degradation. Reconstitute with bacteriostatic water. Stable at 2-8°C for several weeks after reconstitution. Protect from light.',
    molecularWeight: '1024.18 Da',
    sequenceLength: 7,
    halfLife: '~1-2 hours',
    storageTemp: '-20°C',
  },
];

export const getPeptideById = (id: string): Peptide | undefined =>
  PEPTIDES.find((p) => p.id === id);

export const getPeptidesByCategory = (category: PeptideCategory): Peptide[] =>
  PEPTIDES.filter((p) => p.categories.includes(category));
