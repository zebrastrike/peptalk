/**
 * Research Feed Service
 *
 * Fetches peptide-related research from PubMed's free E-utilities API,
 * categorizes results, and structures them into a daily digest format.
 *
 * Sources:
 * - PubMed (NCBI E-utilities) — peer-reviewed research papers
 * - FDA Drug Approvals RSS (regulatory changes)
 *
 * No API key required for low-volume usage (< 3 req/sec).
 * For production, register at https://www.ncbi.nlm.nih.gov/account/
 */

import { FeedItem, FeedCategory, DailyDigest } from '../types';
import { PEPTIDES } from '../data/peptides';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PUBMED_BASE = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
const PUBMED_LINK = 'https://pubmed.ncbi.nlm.nih.gov';

// Search queries mapped to feed categories
const CATEGORY_QUERIES: Array<{
  category: FeedCategory;
  query: string;
  label: string;
}> = [
  {
    category: 'research',
    query:
      '(peptide therapy[Title/Abstract]) AND (clinical trial[Publication Type] OR review[Publication Type])',
    label: 'Research Potentials',
  },
  {
    category: 'new_peptides',
    query:
      '(novel peptide[Title] OR new peptide[Title]) AND (therapeutic[Title/Abstract] OR drug[Title/Abstract])',
    label: 'New Peptides',
  },
  {
    category: 'medical',
    query:
      '(peptide[Title]) AND (clinical outcome[Title/Abstract] OR patient[Title/Abstract] OR efficacy[Title/Abstract])',
    label: 'Medical Relevance',
  },
  {
    category: 'regulatory',
    query:
      '(peptide[Title]) AND (FDA[Title/Abstract] OR regulatory[Title/Abstract] OR approval[Title/Abstract])',
    label: 'Regulatory Changes',
  },
];

// Peptide-specific searches — rotate through the database
const PEPTIDE_SEARCH_TERMS = PEPTIDES.slice(0, 20).map((p) => p.name);

// ---------------------------------------------------------------------------
// PubMed API helpers
// ---------------------------------------------------------------------------

interface PubMedSearchResult {
  esearchresult?: {
    idlist?: string[];
    count?: string;
  };
}

interface PubMedArticle {
  uid: string;
  title: string;
  sortfirstauthor?: string;
  authors?: Array<{ name: string }>;
  source: string;
  pubdate: string;
  sortpubdate?: string;
  fulljournalname?: string;
}

interface PubMedSummaryResult {
  result?: {
    uids?: string[];
    [pmid: string]: PubMedArticle | string[] | undefined;
  };
}

async function searchPubMed(
  query: string,
  maxResults: number = 5
): Promise<string[]> {
  try {
    const params = new URLSearchParams({
      db: 'pubmed',
      term: query,
      retmax: String(maxResults),
      sort: 'date',
      retmode: 'json',
      datetype: 'pdat',
      reldate: '90', // last 90 days
    });

    const response = await fetch(`${PUBMED_BASE}/esearch.fcgi?${params}`);
    if (!response.ok) return [];

    const data: PubMedSearchResult = await response.json();
    return data.esearchresult?.idlist ?? [];
  } catch (error) {
    console.warn('[ResearchFeed] PubMed search failed:', error);
    return [];
  }
}

async function fetchPubMedSummaries(
  pmids: string[]
): Promise<PubMedArticle[]> {
  if (pmids.length === 0) return [];

  try {
    const params = new URLSearchParams({
      db: 'pubmed',
      id: pmids.join(','),
      retmode: 'json',
    });

    const response = await fetch(`${PUBMED_BASE}/esummary.fcgi?${params}`);
    if (!response.ok) return [];

    const data: PubMedSummaryResult = await response.json();
    if (!data.result?.uids) return [];

    return data.result.uids
      .map((uid) => data.result?.[uid] as PubMedArticle | undefined)
      .filter((a): a is PubMedArticle => a !== undefined && typeof a !== 'object' || (a !== undefined && 'uid' in a));
  } catch (error) {
    console.warn('[ResearchFeed] PubMed summary fetch failed:', error);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Categorization & matching
// ---------------------------------------------------------------------------

function matchRelatedPeptides(title: string): string[] {
  const lower = title.toLowerCase();
  return PEPTIDES.filter((p) => {
    const nameMatch = lower.includes(p.name.toLowerCase());
    const abbrMatch =
      p.abbreviation && lower.includes(p.abbreviation.toLowerCase());
    return nameMatch || abbrMatch;
  }).map((p) => p.id);
}

function articleToFeedItem(
  article: PubMedArticle,
  category: FeedCategory
): FeedItem {
  const authors =
    article.authors?.map((a) => a.name).join(', ') ??
    article.sortfirstauthor ??
    'Unknown';

  return {
    id: `pubmed-${article.uid}`,
    title: article.title?.replace(/\.$/, '') ?? 'Untitled',
    summary: `Published in ${article.fulljournalname || article.source}. ${article.pubdate}.`,
    source: 'PubMed',
    url: `${PUBMED_LINK}/${article.uid}/`,
    category,
    publishedAt: article.sortpubdate || article.pubdate || new Date().toISOString(),
    fetchedAt: new Date().toISOString(),
    relatedPeptideIds: matchRelatedPeptides(article.title || ''),
    authors:
      authors.length > 80 ? `${authors.substring(0, 77)}...` : authors,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetch the latest research across all 4 categories.
 * Returns up to ~20 items (5 per category).
 */
export async function fetchResearchFeed(): Promise<FeedItem[]> {
  const allItems: FeedItem[] = [];

  // Fetch all categories in parallel
  const results = await Promise.allSettled(
    CATEGORY_QUERIES.map(async ({ category, query }) => {
      const pmids = await searchPubMed(query, 5);

      // Small delay between summary fetches to respect rate limits
      await new Promise((r) => setTimeout(r, 350));

      const articles = await fetchPubMedSummaries(pmids);
      return articles.map((a) => articleToFeedItem(a, category));
    })
  );

  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      allItems.push(...result.value);
    }
  });

  // Also fetch articles for specific popular peptides
  const randomPeptide =
    PEPTIDE_SEARCH_TERMS[
      Math.floor(Math.random() * PEPTIDE_SEARCH_TERMS.length)
    ];

  try {
    const peptidePmids = await searchPubMed(
      `${randomPeptide}[Title] AND (therapy OR treatment)`,
      3
    );
    await new Promise((r) => setTimeout(r, 350));
    const peptideArticles = await fetchPubMedSummaries(peptidePmids);
    allItems.push(
      ...peptideArticles.map((a) => articleToFeedItem(a, 'research'))
    );
  } catch {
    // Silently fail — peptide-specific search is supplementary
  }

  // Deduplicate by PMID
  const seen = new Set<string>();
  return allItems.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

/**
 * Build a daily digest from feed items.
 */
export function buildDailyDigest(items: FeedItem[]): DailyDigest {
  const today = new Date();
  const dateKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  return {
    date: dateKey,
    items: items.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ),
    generatedAt: today.toISOString(),
  };
}

/**
 * Get a human-readable label for a feed category.
 */
export function getCategoryLabel(category: FeedCategory): string {
  switch (category) {
    case 'research':
      return 'Research Potentials';
    case 'new_peptides':
      return 'New Peptides';
    case 'medical':
      return 'Medical Relevance';
    case 'regulatory':
      return 'Regulatory Changes';
  }
}

/**
 * Get an icon name for a feed category.
 */
export function getCategoryIcon(category: FeedCategory): string {
  switch (category) {
    case 'research':
      return 'flask';
    case 'new_peptides':
      return 'sparkles';
    case 'medical':
      return 'medkit';
    case 'regulatory':
      return 'shield-checkmark';
  }
}
