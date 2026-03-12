import { KnowledgeTopic, TopicId } from '../types';

/**
 * Interactive knowledge topics for the Learn section.
 * Each topic contains FAQ-style Q&A sections that render
 * as expandable accordions in the UI.
 */
export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  // ── PEPTIDE CARE ──────────────────────────────────────────────────────────
  {
    id: 'peptide-care',
    title: 'Peptide Care',
    icon: 'heart-outline',
    subtitle: 'Handle, prepare, and maintain your peptides properly.',
    color: '#e3a7a1',
    sections: [
      {
        question: 'What is a lyophilized peptide and why does it matter?',
        answer:
          'Lyophilized (freeze-dried) peptides are powders created by removing water under vacuum at low temperature. This preserves the peptide\'s molecular structure and extends shelf life significantly — often 2+ years when stored correctly. The powder must be reconstituted with bacteriostatic water before use. Never use a peptide vial that has already been reconstituted by someone else or that arrived as a liquid unless it was specifically manufactured that way (e.g., pre-filled semaglutide pens).',
      },
      {
        question: 'How do I handle peptide vials safely?',
        answer:
          'Always wash your hands before handling vials. Swab the rubber stopper with an alcohol pad before every needle insertion. Keep vials upright to avoid contaminating the stopper. Never touch the rubber stopper with your fingers. Use a new, sterile syringe for every draw — never reuse needles or syringes. Work on a clean, flat surface with good lighting.',
      },
      {
        question: 'What supplies do I need for peptide preparation?',
        answer:
          'Essential supplies include: bacteriostatic water (BAC water with 0.9% benzyl alcohol), insulin syringes (typically 1mL / 100 unit), alcohol swabs, a sharps disposal container, and a clean workspace. For storage, you\'ll need refrigerator space (2-8°C). Optional but helpful: a peptide calculator app, labels for dating vials, and an insulated travel case.',
      },
      {
        question: 'How long does a reconstituted peptide last?',
        answer:
          'Most reconstituted peptides remain stable for 2-4 weeks when refrigerated at 2-8°C. Some peptides degrade faster — check stability notes for your specific peptide. Signs of degradation include cloudiness, floating particles, color change, or unusual smell. When in doubt, discard and reconstitute a fresh vial. Never use a reconstituted peptide past 30 days regardless of appearance.',
      },
      {
        question: 'Can I travel with peptides?',
        answer:
          'Yes, with proper precautions. Use an insulated cooler bag with ice packs to maintain 2-8°C during travel. For air travel, peptides with a prescription can go through TSA in your carry-on — bring documentation. Lyophilized (unreconstituted) peptides are more travel-friendly since they don\'t require refrigeration. Never check peptides in luggage — temperature swings in cargo holds can destroy them.',
      },
    ],
    relatedGuideIds: ['reconstitute-peptide', 'subcutaneous-injection'],
    relatedArticleIds: ['what-is-a-peptide'],
    botPrompt: 'What do I need to know about peptide care and handling?',
  },

  // ── HOW TO USE ────────────────────────────────────────────────────────────
  {
    id: 'how-to-use',
    title: 'How to Use Peptides',
    icon: 'flask-outline',
    subtitle: 'Reconstitution, injection technique, and dosing basics.',
    color: '#b9cbb6',
    sections: [
      {
        question: 'How do I reconstitute a peptide?',
        answer:
          'Draw bacteriostatic water into a sterile insulin syringe. Clean both vial stoppers with alcohol swabs. Insert the needle into the peptide vial at an angle and slowly drip the BAC water down the inside wall — never spray directly onto the powder. Let it dissolve naturally for 5-15 minutes without shaking. The solution should become completely clear. Common reconstitution volume is 1-2mL per vial, but check your specific peptide\'s guidelines.',
      },
      {
        question: 'What is the correct injection technique?',
        answer:
          'For subcutaneous injection: clean the injection site with an alcohol swab and let it dry. Pinch about an inch of skin between thumb and forefinger. Insert the needle at a 45-90° angle (90° for short insulin needles). Push the plunger slowly and steadily. Hold for 5 seconds before withdrawing. Apply gentle pressure with a cotton ball — don\'t rub. Dispose of the syringe in a sharps container immediately.',
      },
      {
        question: 'Where should I inject?',
        answer:
          'Common subcutaneous injection sites include: the abdomen (at least 2 inches from the navel), the front/outer thigh, and the back of the upper arm. Rotate injection sites with every dose to prevent lipodystrophy — tissue hardening that can impair absorption. Keep a simple rotation pattern (left abdomen → right abdomen → left thigh → right thigh). Some peptides have site-specific guidance — for example, BPC-157 is sometimes injected near the injury site.',
      },
      {
        question: 'How do I calculate my dose?',
        answer:
          'Dosing math depends on how much peptide is in the vial and how much BAC water you add. Formula: (mg in vial ÷ mL of BAC water) = concentration in mg/mL. Example: 5mg vial + 2mL BAC water = 2.5 mg/mL. Each 0.1mL (10 units on an insulin syringe) = 250mcg. Always double-check your math before injecting. Many people use 1mL of BAC water per 5mg for easy math (1mg per 0.1mL). Net peptide content from the COA affects actual dosing — a 5mg vial at 70% net peptide content has 3.5mg of active peptide.',
      },
      {
        question: 'What are the different routes of administration?',
        answer:
          'Subcutaneous (SubQ) injection is the most common for peptides — it delivers the peptide into the fat layer under the skin for slow, steady absorption. Intramuscular (IM) injection delivers directly into muscle for faster absorption. Intranasal delivery is used for brain-targeting peptides like Semax and Selank. Oral administration is rare due to gut degradation, though some peptides like oral semaglutide use special absorption enhancers. Topical application works for cosmetic peptides like GHK-Cu.',
      },
      {
        question: 'What time of day should I inject?',
        answer:
          'Timing depends on the peptide. Growth hormone secretagogues (CJC-1295, Ipamorelin, Sermorelin) are typically taken before bed or first thing in the morning on an empty stomach — GH release is strongest during sleep and fasting. BPC-157 and TB-500 can be taken any time. Semaglutide and tirzepatide are weekly injections on the same day each week. Nootropic peptides (Semax, Selank) are usually taken in the morning for daytime cognitive benefits.',
      },
    ],
    relatedGuideIds: ['reconstitute-peptide', 'subcutaneous-injection'],
    relatedArticleIds: ['what-is-a-peptide'],
    botPrompt: 'How do I use peptides? Walk me through reconstitution and injection.',
  },

  // ── SAFETY ────────────────────────────────────────────────────────────────
  {
    id: 'safety',
    title: 'Peptide Safety',
    icon: 'shield-checkmark-outline',
    subtitle: 'Side effects, contraindications, and when to seek help.',
    color: '#f0d68a',
    sections: [
      {
        question: 'Are peptides safe?',
        answer:
          'FDA-approved peptides (semaglutide, tirzepatide, tesamorelin) have undergone rigorous clinical trials and have well-documented safety profiles. Research peptides (BPC-157, TB-500, Semax, etc.) have extensive preclinical data but limited human trial data. "Research compound" does not mean safe or unsafe — it means the evidence level is different. All peptides carry potential risks and should ideally be used under medical supervision.',
      },
      {
        question: 'What are the most common side effects?',
        answer:
          'Side effects vary by peptide class. GLP-1 agonists (semaglutide, tirzepatide): nausea, vomiting, diarrhea, constipation — usually dose-dependent and improve over time. Growth hormone peptides (CJC-1295, Ipamorelin): water retention, numbness/tingling, headache, joint pain. Healing peptides (BPC-157, TB-500): generally well-tolerated, most common is injection site irritation. Nootropic peptides (Semax, Selank): nasal irritation, mild headache. Always start at the lowest effective dose.',
      },
      {
        question: 'What are contraindications I should know about?',
        answer:
          'Major contraindications across peptide categories include: pregnancy and nursing (nearly all peptides), active cancer or history of cancer (especially growth-promoting peptides), personal or family history of medullary thyroid carcinoma (GLP-1 agonists carry a black box warning), active pancreatitis, and known hypersensitivity. Specific peptides have additional contraindications — always check the safety profile for your specific peptide before starting.',
      },
      {
        question: 'How do peptides interact with medications?',
        answer:
          'Key drug interactions to be aware of: GLP-1 agonists + insulin or sulfonylureas = increased hypoglycemia risk (severe). GLP-1 agonists delay gastric emptying, which can alter absorption of oral medications including oral contraceptives. Growth hormone peptides may affect glucose metabolism — important if you take diabetes medications. Thymosin alpha-1 directly opposes immunosuppressants. BPC-157 may theoretically affect anticoagulant activity. Always tell your healthcare provider about all peptides you are using.',
      },
      {
        question: 'When should I stop using a peptide and seek medical help?',
        answer:
          'Stop immediately and contact your healthcare provider if you experience: severe abdominal pain (could indicate pancreatitis), signs of allergic reaction (swelling, difficulty breathing, hives), persistent vomiting or inability to keep fluids down, signs of hypoglycemia (shakiness, confusion, sweating) with GLP-1 agonists, lump or swelling in the neck (thyroid concern), or any unusual symptom that concerns you. For signs of anaphylaxis or severe allergic reaction, call emergency services immediately.',
      },
      {
        question: 'Is medical supervision necessary?',
        answer:
          'Strongly recommended. A qualified healthcare provider can: review your medical history for contraindications, monitor bloodwork (glucose, IGF-1, thyroid function, liver/kidney panels), adjust dosing based on your response, identify drug interactions with your current medications, and provide a legitimate prescription for FDA-approved peptides. Many telehealth peptide clinics now offer this service. Self-administering research peptides without medical oversight increases risk.',
      },
    ],
    relatedGuideIds: [],
    relatedArticleIds: ['why-lab-testing-matters'],
    botPrompt: 'What should I know about peptide safety and side effects?',
  },

  // ── STORAGE ───────────────────────────────────────────────────────────────
  {
    id: 'storage',
    title: 'Storage & Stability',
    icon: 'snow-outline',
    subtitle: 'Temperature, shelf life, and keeping peptides effective.',
    color: '#c7d7e6',
    sections: [
      {
        question: 'How should I store lyophilized (powder) peptides?',
        answer:
          'Lyophilized peptides are the most stable form. For short-term storage (weeks to a few months), room temperature in a cool, dark place is acceptable. For long-term storage, keep them in a freezer (-20°C) or refrigerator (2-8°C). Most lyophilized peptides maintain potency for 2+ years when frozen. Keep them away from direct sunlight, heat sources, and humidity. Store in the original sealed vial until ready to reconstitute.',
      },
      {
        question: 'How should I store reconstituted peptides?',
        answer:
          'Always refrigerate reconstituted peptides at 2-8°C (standard refrigerator temperature). Never freeze a reconstituted solution — ice crystal formation can damage the peptide structure. Most reconstituted peptides are stable for 2-4 weeks refrigerated, though some degrade faster. Label every vial with the reconstitution date, peptide name, and concentration. Keep vials upright to minimize stopper contact with the solution.',
      },
      {
        question: 'What damages peptides?',
        answer:
          'The main enemies of peptide stability are: heat (accelerates degradation), light (especially UV — causes oxidation), vigorous shaking (can denature the protein structure), bacterial contamination (from non-sterile technique), repeated freeze-thaw cycles (for reconstituted peptides), and extreme pH changes. Even brief exposure to high temperatures during shipping can compromise peptides — this is why reputable vendors ship with cold packs.',
      },
      {
        question: 'How do I know if a peptide has gone bad?',
        answer:
          'Signs of peptide degradation include: cloudiness or turbidity in a reconstituted solution (should be crystal clear), visible particles or floaters, color change (most peptide solutions are colorless), unusual smell, and the vial seal appears compromised. If you notice any of these, discard the vial. Note that some loss of potency can occur without visible signs — this is why adhering to storage guidelines and use-by dates matters.',
      },
      {
        question: 'Does the type of water matter for reconstitution?',
        answer:
          'Yes, critically. Bacteriostatic water (BAC water) contains 0.9% benzyl alcohol, which inhibits bacterial growth — this is essential for multi-use vials where you\'ll draw from the vial multiple times over days or weeks. Sterile water (without preservative) should only be used for single-use reconstitution — any remaining solution must be discarded after one use. Never use tap water, distilled water from the store, or saline for reconstitution.',
      },
    ],
    relatedGuideIds: ['reconstitute-peptide'],
    relatedArticleIds: [],
    botPrompt: 'How should I store my peptides to keep them effective?',
  },

  // ── BUYING QUALITY ────────────────────────────────────────────────────────
  {
    id: 'buying-quality',
    title: 'Buying Quality Peptides',
    icon: 'diamond-outline',
    subtitle: 'What to look for in purity, testing, and reputable labs.',
    color: '#06b6d4',
    sections: [
      {
        question: 'What makes a peptide "high quality"?',
        answer:
          'High-quality peptides meet several criteria: high purity (≥98% for pharmaceutical-grade, ≥95% for research-grade as measured by HPLC), verified molecular identity (confirmed by mass spectrometry), low endotoxin levels for injectables (<5 EU/kg), manufactured under GMP or GMP-like conditions, and accompanied by a legitimate Certificate of Analysis (COA) from an accredited lab. The difference between high and low quality can mean the difference between effective therapy and injecting impurities.',
      },
      {
        question: 'What is third-party testing and why does it matter?',
        answer:
          'Third-party testing means an independent laboratory — not the manufacturer or seller — tests the peptide for identity, purity, and contaminants. This eliminates the conflict of interest inherent in self-testing. Reputable third-party labs include Janoshik Analyticals and Colmaric Analyticals. A COA from the seller is a starting point, but independent verification provides real confidence. Some vendors proactively publish third-party test results; others will provide them on request.',
      },
      {
        question: 'How do I read a Certificate of Analysis (COA)?',
        answer:
          'Key things to check on a COA: the lab name and accreditation (ISO 17025 is the gold standard), the peptide name and batch/lot number (must match your vial), HPLC purity percentage (should be ≥95%), mass spectrometry results confirming molecular weight matches the expected value, and endotoxin (LAL) testing results for injectables. Red flags: no lab name, generic-looking COA, purity below 95%, missing batch number, results that look identical across different products.',
      },
      {
        question: 'What should I look for in a reputable supplier?',
        answer:
          'Indicators of a reputable peptide supplier: publishes COAs for every batch, uses independent third-party testing, manufactures in GMP or cGMP-certified facilities, has transparent business practices (real address, customer service), ships with cold packs and proper packaging, has consistent positive reviews from verified buyers, provides detailed product information and handling instructions, and does not make therapeutic claims for research peptides.',
      },
      {
        question: 'What are the red flags when buying peptides?',
        answer:
          'Warning signs of low-quality or fraudulent suppliers: no COA available or COA looks fabricated, prices significantly below market (if it seems too good to be true, it probably is), aggressive therapeutic claims ("cures X" or "guaranteed results"), no physical address or contact information, products arrive without proper labeling or cold chain shipping, the seller offers no batch-specific testing, and the same COA is reused across different products or batches.',
      },
      {
        question: 'What does GMP certification mean?',
        answer:
          'GMP (Good Manufacturing Practice) is a set of quality standards enforced by regulatory agencies like the FDA. GMP-certified facilities follow strict protocols for: facility cleanliness and contamination control, equipment calibration and maintenance, raw material sourcing and testing, manufacturing process consistency, quality control at every production stage, documentation and traceability. Peptides from GMP facilities are significantly more reliable than those from unregulated labs. Look for cGMP (current Good Manufacturing Practice) certification specifically.',
      },
      {
        question: 'How much should quality peptides cost?',
        answer:
          'Pricing varies by peptide, but extremely low prices are a red flag. Quality manufacturing, third-party testing, GMP compliance, and proper cold-chain shipping all cost money. As a rough guide: research-grade peptides from reputable suppliers typically cost $30-80+ per vial depending on the peptide and quantity. FDA-approved peptides through pharmacies cost significantly more. If a supplier\'s prices are 50-70% below market average, question how they\'re cutting costs — it\'s usually in purity, testing, or manufacturing standards.',
      },
    ],
    relatedGuideIds: ['read-coa'],
    relatedArticleIds: ['why-lab-testing-matters'],
    botPrompt: 'How do I find high-quality peptides? What should I look for in a supplier?',
  },

  // ── REGULATIONS ───────────────────────────────────────────────────────────
  {
    id: 'regulations',
    title: 'Regulations & Legal',
    icon: 'document-lock-outline',
    subtitle: 'FDA categories, legal status, and what you need to know.',
    color: '#f59e0b',
    sections: [
      {
        question: 'Are peptides legal?',
        answer:
          'It depends on the peptide and how it\'s being used. FDA-approved peptides (semaglutide, tirzepatide, tesamorelin) are legal prescription medications. Research peptides (BPC-157, TB-500, etc.) are legal to purchase for research purposes but exist in a regulatory gray area for personal use. Some peptides are scheduled or restricted substances in certain countries. The legal landscape is evolving — the FDA has been increasing scrutiny of compounded peptides and research chemical sales.',
      },
      {
        question: 'What are the FDA peptide categories?',
        answer:
          'From a US regulatory perspective, peptides fall into five categories: (1) FDA-Approved Drugs — have an approved NDA, are prescription-only (e.g., Ozempic, Mounjaro). (2) Investigational (IND) — in active clinical trials, not approved for general use. (3) Research Use Only (RUO) — not FDA-approved, labeled for laboratory research, cannot be marketed for human treatment. (4) Cosmetic peptides — permitted in topical products, cannot make medical claims. (5) Dietary supplement ingredients — amino acids and GRAS/DSHEA-eligible compounds, can support structure/function but cannot claim disease treatment.',
      },
      {
        question: 'What is the difference between "research use" and "for human use"?',
        answer:
          'Research Use Only (RUO) peptides are legally sold for in vitro and laboratory research — not for human consumption or therapeutic use. This labeling is a regulatory classification, not a safety assessment. Many commonly discussed peptides (BPC-157, TB-500, CJC-1295) are sold under RUO labeling. Using them on yourself is a personal decision that exists in a legal gray area. RUO labeling does not mean a peptide is safe or unsafe for humans — it means it has not been through the FDA approval process.',
      },
      {
        question: 'What about compounded peptides?',
        answer:
          'Compounding pharmacies can prepare customized peptide formulations under FDA oversight (Section 503A and 503B of the Federal Food, Drug, and Cosmetic Act). However, in 2023-2024, the FDA placed several peptides including BPC-157 and certain GH secretagogues on the "difficult to compound" or restricted lists, limiting pharmacy compounding of these agents. Compounded semaglutide and tirzepatide faced similar scrutiny once commercial supply stabilized. The regulatory environment for compounded peptides is actively evolving.',
      },
      {
        question: 'Can I get peptides prescribed by a doctor?',
        answer:
          'FDA-approved peptides absolutely — your doctor can prescribe semaglutide (Ozempic/Wegovy), tirzepatide (Mounjaro/Zepbound), tesamorelin (Egrifta), and other approved peptide drugs through standard pharmacies. For research peptides, some physicians at peptide-focused or functional medicine clinics may discuss or supervise their use, though this varies by state regulations and individual provider policies. Telehealth peptide clinics have grown significantly, offering remote consultations and monitoring.',
      },
      {
        question: 'What claims can peptide companies legally make?',
        answer:
          'This is strictly regulated. FDA-approved drugs can make specific disease treatment claims supported by their approved labeling. Dietary supplements can make structure/function claims ("supports immune health") but cannot claim to treat, cure, or prevent disease. Research peptides sold as RUO cannot make any human health claims at all. Cosmetic peptides can claim appearance benefits only. The FTC actively monitors and enforces advertising rules — claims must be truthful, not misleading, and supported by evidence.',
      },
    ],
    relatedGuideIds: [],
    relatedArticleIds: [],
    botPrompt: 'What is the legal status of peptides and how are they regulated?',
  },
];

export const getTopicById = (id: TopicId): KnowledgeTopic | undefined =>
  KNOWLEDGE_TOPICS.find((t) => t.id === id);
