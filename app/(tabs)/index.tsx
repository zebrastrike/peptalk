import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SearchBar } from '../../src/components/SearchBar';
import { CategoryGrid } from '../../src/components/CategoryGrid';
import { PeptideCard } from '../../src/components/PeptideCard';
import { GlassCard } from '../../src/components/GlassCard';
import { TalkToMeBar } from '../../src/components/TalkToMeBar';
import { Disclaimer } from '../../src/components/Disclaimer';
import { PEPTIDES } from '../../src/data/peptides';
import { Peptide, PeptideCategory } from '../../src/types';
import { getSegmentByProfile } from '../../src/constants/segments';
import { getEthnicityProfile } from '../../src/constants/ethnicityProfiles';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { useCheckinStore } from '../../src/store/useCheckinStore';
import { trackPeptideSearch } from '../../src/services/sbbEvents';

export default function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { category } = useLocalSearchParams<{ category?: string }>();
  const activeCategory =
    typeof category === 'string' ? category : category?.[0];

  const profile = useOnboardingStore((state) => state.profile);
  const isComplete = useOnboardingStore((state) => state.isComplete);
  const checkins = useCheckinStore((state) => state.entries);

  const segment = useMemo(
    () => getSegmentByProfile(profile.gender, profile.ageRange),
    [profile.ageRange, profile.gender]
  );
  const ethnicityProfile = useMemo(
    () => getEthnicityProfile(profile.ethnicity),
    [profile.ethnicity]
  );
  const hasDemographics = Boolean(profile.gender && profile.ageRange);
  const accentColor = ethnicityProfile?.paletteAccent ?? segment.palette.primary;

  const streak = useMemo(() => {
    const toDateKey = (date: Date) => {
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0');
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    if (checkins.length === 0) return 0;
    const dates = new Set(checkins.map((entry) => entry.date));
    let count = 0;
    const cursor = new Date();
    while (dates.has(toDateKey(cursor))) {
      count += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }, [checkins]);

  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const basePeptides = useMemo(() => {
    if (!activeCategory) return PEPTIDES;
    return PEPTIDES.filter((p) =>
      p.categories.includes(activeCategory as PeptideCategory)
    );
  }, [activeCategory]);

  const filteredPeptides = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return basePeptides;

    return basePeptides.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.abbreviation && p.abbreviation.toLowerCase().includes(q)) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
    );
  }, [basePeptides, searchQuery]);

  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(() => {
      trackPeptideSearch(searchQuery, filteredPeptides.length);
    }, 500);
    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [filteredPeptides.length, searchQuery]);

  const renderPeptideCard = ({ item }: { item: Peptide }) => (
    <PeptideCard peptide={item} />
  );

  const keyExtractor = (item: Peptide) => item.id;

  const ListHeaderComponent = () => (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>PepTalk</Text>
        <Text style={styles.subtitle}>Peptide Research Library</Text>
      </View>

      {/* Personalized Focus */}
      <GlassCard variant="elevated" style={hasDemographics ? { ...styles.heroCard, backgroundColor: segment.palette.card, borderColor: `${accentColor}22` } : styles.heroCard}>
        <Text style={[styles.heroTitle, hasDemographics && { color: accentColor }]}>
          {hasDemographics ? segment.heroTitle : 'Research Dashboard'}
        </Text>
        <Text style={styles.heroSubtitle}>
          {hasDemographics
            ? segment.heroSubtitle
            : 'Set your profile to personalize research insights.'}
        </Text>
        <View style={styles.focusList}>
          {(hasDemographics
            ? [...segment.focusAreas.slice(0, 2), ...(ethnicityProfile?.healthFocusAreas?.slice(0, 1) ?? segment.focusAreas.slice(2, 3))]
            : ['Daily check-ins', 'Stack analysis', 'Peptide library']
          ).map((focus) => (
            <Text key={focus} style={styles.focusItem}>
              • {focus}
            </Text>
          ))}
        </View>
        <View style={styles.heroActions}>
          <TouchableOpacity
            style={[styles.checkinButton, hasDemographics && { backgroundColor: `${accentColor}33`, borderColor: `${accentColor}66` }]}
            onPress={() => router.push('/(tabs)/check-in')}
            activeOpacity={0.8}
          >
            <Text style={[styles.checkinText, hasDemographics && { color: accentColor }]}>
              Daily Check-In · {streak} day streak
            </Text>
          </TouchableOpacity>
          {!isComplete && (
            <TouchableOpacity
              style={styles.completeProfileButton}
              onPress={() => router.push('/onboarding')}
              activeOpacity={0.8}
            >
              <Text style={styles.completeProfileText}>
                Complete research profile
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </GlassCard>

      <View style={styles.talkSection}>
        <TalkToMeBar
          label="Ask PepTalk"
          helperText="Research assistant · educational only"
          onPress={() => router.push('/(tabs)/peptalk')}
        />
      </View>

      {/* Research Feed Banner */}
      <TouchableOpacity
        style={styles.feedBanner}
        onPress={() => router.push('/research-feed')}
        activeOpacity={0.7}
      >
        <Ionicons name="newspaper" size={20} color="#0f1720" />
        <View style={{ flex: 1 }}>
          <Text style={styles.feedBannerTitle}>Research Feed</Text>
          <Text style={styles.feedBannerSub}>
            Latest peptide research from PubMed
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="rgba(15,23,32,0.5)" />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search peptides, categories..."
        />
      </View>

      {profile.interestCategories.length > 0 && (
        <View style={styles.focusSection}>
          <Text style={styles.sectionTitle}>Your Focus</Text>
          <View style={styles.focusChips}>
            {profile.interestCategories.map((interest) => (
              <TouchableOpacity
                key={interest}
                style={styles.focusChip}
                onPress={() =>
                  router.push(`/?category=${encodeURIComponent(interest)}`)
                }
              >
                <Text style={styles.focusChipText}>{interest}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {activeCategory && (
        <View style={styles.filterRow}>
          <Text style={styles.filterText}>
            Filter: {activeCategory}
          </Text>
          <TouchableOpacity
            style={styles.clearFilterButton}
            onPress={() => router.replace('/')}
          >
            <Text style={styles.clearFilterText}>Clear</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Category Grid (hidden when searching) */}
      {!searchQuery.trim() && (
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <CategoryGrid />
        </View>
      )}

      {/* All Peptides Section Header */}
      <View style={styles.allPeptidesHeader}>
        <Text style={styles.sectionTitle}>
          {searchQuery.trim()
            ? `Results (${filteredPeptides.length})`
            : activeCategory
              ? `${activeCategory} Peptides (${filteredPeptides.length})`
              : 'All Peptides'}
        </Text>
      </View>
    </View>
  );

  const ListFooterComponent = () => (
    <View style={styles.footer}>
      <Disclaimer />
    </View>
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No peptides found</Text>
      <Text style={styles.emptySubtitle}>
        Try adjusting your search query
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={filteredPeptides}
        renderItem={renderPeptideCard}
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1720',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#f7f2ec',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 4,
  },
  heroCard: {
    marginTop: 12,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#f7f2ec',
  },
  heroSubtitle: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 6,
  },
  focusList: {
    marginTop: 10,
    marginBottom: 12,
    gap: 4,
  },
  focusItem: {
    fontSize: 12,
    color: '#cbd5e1',
  },
  heroActions: {
    gap: 10,
  },
  checkinButton: {
    backgroundColor: 'rgba(227, 167, 161, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(227, 167, 161, 0.4)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  checkinText: {
    fontSize: 12,
    color: '#e3a7a1',
    fontWeight: '700',
  },
  completeProfileButton: {
    borderWidth: 1,
    borderColor: 'rgba(199, 215, 230, 0.25)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  completeProfileText: {
    fontSize: 12,
    color: '#c7d7e6',
    fontWeight: '600',
  },
  talkSection: {
    marginTop: 16,
    marginBottom: 4,
  },
  feedBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c7d7e6',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: 12,
    gap: 10,
  },
  feedBannerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f1720',
  },
  feedBannerSub: {
    fontSize: 11,
    color: 'rgba(15,23,32,0.6)',
    marginTop: 1,
  },
  searchContainer: {
    marginTop: 16,
    marginBottom: 20,
  },
  focusSection: {
    marginBottom: 20,
  },
  focusChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  focusChip: {
    backgroundColor: 'rgba(199, 215, 230, 0.16)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(199, 215, 230, 0.3)',
  },
  focusChipText: {
    fontSize: 11,
    color: '#c7d7e6',
    fontWeight: '600',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  filterText: {
    fontSize: 12,
    color: '#e8e6e3',
    fontWeight: '600',
  },
  clearFilterButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  clearFilterText: {
    fontSize: 12,
    color: '#e3a7a1',
    fontWeight: '700',
  },
  categoriesSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e8e6e3',
    marginBottom: 14,
  },
  allPeptidesHeader: {
    marginBottom: 12,
  },
  footer: {
    paddingTop: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e8e6e3',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#9ca3af',
  },
});
