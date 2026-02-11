import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '../../src/components/SearchBar';
import { CategoryGrid } from '../../src/components/CategoryGrid';
import { PeptideCard } from '../../src/components/PeptideCard';
import { Disclaimer } from '../../src/components/Disclaimer';
import { PEPTIDES } from '../../src/data/peptides';
import { Peptide } from '../../src/types';

export default function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPeptides = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return PEPTIDES;

    return PEPTIDES.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.abbreviation && p.abbreviation.toLowerCase().includes(q)) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
    );
  }, [searchQuery]);

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

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search peptides, categories..."
        />
      </View>

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
  searchContainer: {
    marginTop: 16,
    marginBottom: 20,
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
