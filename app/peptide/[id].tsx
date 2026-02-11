import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getPeptideById } from '../../src/data/peptides';
import { useStackStore } from '../../src/store/useStackStore';
import { GlassCard } from '../../src/components/GlassCard';
import { getCategoryColor } from '../../src/constants/categories';
import { Disclaimer } from '../../src/components/Disclaimer';

export default function PeptideDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { currentStack, addToStack } = useStackStore();

  const peptide = getPeptideById(id ?? '');

  if (!peptide) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.notFound}>
          <Ionicons name="alert-circle-outline" size={48} color="#9ca3af" />
          <Text style={styles.notFoundTitle}>Peptide Not Found</Text>
          <Text style={styles.notFoundSubtitle}>
            The requested peptide could not be found in the database.
          </Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const isInStack = currentStack.includes(peptide.id);
  const stackFull = currentStack.length >= 5;

  const handleAddToStack = () => {
    if (isInStack) {
      Alert.alert('Already Added', `${peptide.name} is already in your stack.`);
      return;
    }
    if (stackFull) {
      Alert.alert(
        'Stack Full',
        'Your stack has reached the maximum of 5 peptides. Remove one before adding another.'
      );
      return;
    }
    addToStack(peptide.id);
    Alert.alert('Added', `${peptide.name} has been added to your stack.`);
  };

  const handlePubMedLink = (url: string) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Could not open the link.');
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Spacer for transparent header */}
        <View style={styles.headerSpacer} />

        {/* Name and Abbreviation */}
        <View style={styles.titleSection}>
          <Text style={styles.peptideName}>{peptide.name}</Text>
          {peptide.abbreviation && (
            <View style={styles.abbreviationBadge}>
              <Text style={styles.abbreviationText}>
                {peptide.abbreviation}
              </Text>
            </View>
          )}
        </View>

        {/* Category Tags */}
        <View style={styles.categoriesRow}>
          {peptide.categories.map((cat) => (
            <View
              key={cat}
              style={[
                styles.categoryPill,
                { backgroundColor: `${getCategoryColor(cat)}20` },
              ]}
            >
              <Text
                style={[
                  styles.categoryPillText,
                  { color: getCategoryColor(cat) },
                ]}
              >
                {cat}
              </Text>
            </View>
          ))}
        </View>

        {/* Research Summary */}
        <GlassCard style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text-outline" size={18} color="#c7d7e6" />
            <Text style={styles.sectionTitle}>Research Summary</Text>
          </View>
          <Text style={styles.sectionText}>{peptide.researchSummary}</Text>
        </GlassCard>

        {/* Mechanism of Action */}
        <GlassCard style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="git-branch-outline" size={18} color="#b9cbb6" />
            <Text style={styles.sectionTitle}>Mechanism of Action</Text>
          </View>
          <Text style={styles.sectionText}>{peptide.mechanismOfAction}</Text>
        </GlassCard>

        {/* Receptor Targets */}
        {peptide.receptorTargets && peptide.receptorTargets.length > 0 && (
          <GlassCard style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="radio-outline" size={18} color="#e3a7a1" />
              <Text style={styles.sectionTitle}>Receptor Targets</Text>
            </View>
            <View style={styles.pillsRow}>
              {peptide.receptorTargets.map((target, index) => (
                <View key={index} style={styles.targetPill}>
                  <Text style={styles.targetPillText}>{target}</Text>
                </View>
              ))}
            </View>
          </GlassCard>
        )}

        {/* Signaling Pathways */}
        {peptide.signalingPathways && peptide.signalingPathways.length > 0 && (
          <GlassCard style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons
                name="git-network-outline"
                size={18}
                color="#c7d7e6"
              />
              <Text style={styles.sectionTitle}>Signaling Pathways</Text>
            </View>
            <View style={styles.pillsRow}>
              {peptide.signalingPathways.map((pathway, index) => (
                <View key={index} style={styles.pathwayPill}>
                  <Text style={styles.pathwayPillText}>{pathway}</Text>
                </View>
              ))}
            </View>
          </GlassCard>
        )}

        {/* Stability Notes */}
        <GlassCard style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="shield-outline" size={18} color="#f0d68a" />
            <Text style={styles.sectionTitle}>Stability Notes</Text>
          </View>
          <Text style={styles.sectionText}>{peptide.stabilityNotes}</Text>
        </GlassCard>

        {/* Molecular Data */}
        <GlassCard style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="analytics-outline" size={18} color="#c7d7e6" />
            <Text style={styles.sectionTitle}>Molecular Data</Text>
          </View>
          <View style={styles.dataGrid}>
            {peptide.molecularWeight && (
              <View style={styles.dataItem}>
                <Text style={styles.dataLabel}>Molecular Weight</Text>
                <Text style={styles.dataValue}>{peptide.molecularWeight}</Text>
              </View>
            )}
            {peptide.sequenceLength && (
              <View style={styles.dataItem}>
                <Text style={styles.dataLabel}>Sequence Length</Text>
                <Text style={styles.dataValue}>
                  {peptide.sequenceLength} amino acids
                </Text>
              </View>
            )}
            {peptide.halfLife && (
              <View style={styles.dataItem}>
                <Text style={styles.dataLabel}>Half-Life</Text>
                <Text style={styles.dataValue}>{peptide.halfLife}</Text>
              </View>
            )}
            {peptide.storageTemp && (
              <View style={styles.dataItem}>
                <Text style={styles.dataLabel}>Storage Temperature</Text>
                <Text style={styles.dataValue}>{peptide.storageTemp}</Text>
              </View>
            )}
            {peptide.reconstitution && (
              <View style={styles.dataItem}>
                <Text style={styles.dataLabel}>Reconstitution</Text>
                <Text style={styles.dataValue}>{peptide.reconstitution}</Text>
              </View>
            )}
          </View>
        </GlassCard>

        {/* Add to Stack Button */}
        <TouchableOpacity
          style={[
            styles.addToStackButton,
            isInStack && styles.addToStackButtonActive,
            stackFull && !isInStack && styles.addToStackButtonDisabled,
          ]}
          onPress={handleAddToStack}
          disabled={isInStack}
          activeOpacity={0.8}
        >
          <Ionicons
            name={isInStack ? 'checkmark-circle' : 'add-circle-outline'}
            size={20}
            color={isInStack ? '#b9cbb6' : '#0f1720'}
          />
          <Text
            style={[
              styles.addToStackText,
              isInStack && styles.addToStackTextActive,
            ]}
          >
            {isInStack ? 'In Your Stack' : 'Add to Stack'}
          </Text>
        </TouchableOpacity>

        {/* PubMed Links */}
        {peptide.pubmedLinks && peptide.pubmedLinks.length > 0 && (
          <GlassCard style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="link-outline" size={18} color="#c7d7e6" />
              <Text style={styles.sectionTitle}>PubMed References</Text>
            </View>
            {peptide.pubmedLinks.map((link, index) => (
              <TouchableOpacity
                key={index}
                style={styles.pubmedLink}
                onPress={() => handlePubMedLink(link)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name="open-outline"
                  size={14}
                  color="#c7d7e6"
                />
                <Text style={styles.pubmedLinkText} numberOfLines={1}>
                  {link}
                </Text>
              </TouchableOpacity>
            ))}
          </GlassCard>
        )}

        {/* Disclaimer */}
        <Disclaimer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1720',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerSpacer: {
    height: 48,
  },

  // ── Not Found ───────────────────────────────────────────────
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  notFoundTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e8e6e3',
    marginTop: 16,
  },
  notFoundSubtitle: {
    fontSize: 13,
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 6,
  },
  backButton: {
    backgroundColor: '#e3a7a1',
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f1720',
  },

  // ── Title ───────────────────────────────────────────────────
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  peptideName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f7f2ec',
    letterSpacing: -0.5,
    flex: 1,
  },
  abbreviationBadge: {
    backgroundColor: 'rgba(227, 167, 161, 0.15)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  abbreviationText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3a7a1',
  },

  // ── Categories ──────────────────────────────────────────────
  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  categoryPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryPillText: {
    fontSize: 12,
    fontWeight: '600',
  },

  // ── Sections ────────────────────────────────────────────────
  section: {
    marginBottom: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#e8e6e3',
  },
  sectionText: {
    fontSize: 13,
    color: '#9ca3af',
    lineHeight: 20,
  },

  // ── Pills ───────────────────────────────────────────────────
  pillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  targetPill: {
    backgroundColor: 'rgba(227, 167, 161, 0.12)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  targetPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#e3a7a1',
  },
  pathwayPill: {
    backgroundColor: 'rgba(199, 215, 230, 0.12)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  pathwayPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#c7d7e6',
  },

  // ── Molecular Data Grid ─────────────────────────────────────
  dataGrid: {
    gap: 12,
  },
  dataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  dataLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9ca3af',
  },
  dataValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#e8e6e3',
    textAlign: 'right',
    flex: 1,
    marginLeft: 16,
  },

  // ── Add to Stack ────────────────────────────────────────────
  addToStackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3a7a1',
    borderRadius: 14,
    paddingVertical: 16,
    marginVertical: 16,
    gap: 8,
  },
  addToStackButtonActive: {
    backgroundColor: 'rgba(185, 203, 182, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(185, 203, 182, 0.3)',
  },
  addToStackButtonDisabled: {
    backgroundColor: 'rgba(227, 167, 161, 0.3)',
  },
  addToStackText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f1720',
  },
  addToStackTextActive: {
    color: '#b9cbb6',
  },

  // ── PubMed Links ────────────────────────────────────────────
  pubmedLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  pubmedLinkText: {
    fontSize: 12,
    color: '#c7d7e6',
    flex: 1,
    textDecorationLine: 'underline',
  },
});
