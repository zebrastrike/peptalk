import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useStackStore } from '../../src/store/useStackStore';
import { getPeptideById } from '../../src/data/peptides';
import { GlassCard } from '../../src/components/GlassCard';
import { getCategoryColor } from '../../src/constants/categories';
import { PeptideStack, PeptideCategory, GoalType } from '../../src/types';

const GOAL_FILTERS: { id: GoalType; label: string; icon: string }[] = [
  { id: 'weight_loss', label: 'Weight Loss', icon: 'flame-outline' },
  { id: 'recovery', label: 'Recovery', icon: 'bandage-outline' },
  { id: 'cognitive', label: 'Cognitive', icon: 'bulb-outline' },
  { id: 'longevity', label: 'Longevity', icon: 'hourglass-outline' },
  { id: 'immune', label: 'Immune', icon: 'shield-outline' },
  { id: 'sleep', label: 'Sleep', icon: 'moon-outline' },
  { id: 'skin_hair', label: 'Skin & Hair', icon: 'sparkles-outline' },
  { id: 'energy', label: 'Energy', icon: 'flash-outline' },
  { id: 'muscle_gain', label: 'Muscle', icon: 'barbell-outline' },
  { id: 'body_recomp', label: 'Recomp', icon: 'body-outline' },
  { id: 'gut_health', label: 'Gut Health', icon: 'leaf-outline' },
];

function getEvidenceBadge(level: string): { label: string; color: string } {
  switch (level) {
    case 'established':
      return { label: 'Established', color: '#22c55e' };
    case 'moderate':
      return { label: 'Moderate', color: '#f59e0b' };
    case 'preliminary':
      return { label: 'Preliminary', color: '#f97316' };
    default:
      return { label: level, color: '#9ca3af' };
  }
}

function getGoalLabel(goal: GoalType): string {
  return GOAL_FILTERS.find((g) => g.id === goal)?.label ?? goal.replace('_', ' ');
}

interface StackCardProps {
  stack: PeptideStack;
  onLoad: () => void;
  onDelete?: () => void;
}

const StackCard: React.FC<StackCardProps> = ({ stack, onLoad, onDelete }) => {
  const peptideNames = stack.peptideIds
    .map((id) => getPeptideById(id)?.name ?? id)
    .join(', ');

  const categories = useMemo(() => {
    const catSet = new Set<PeptideCategory>();
    stack.peptideIds.forEach((id) => {
      const peptide = getPeptideById(id);
      peptide?.categories.forEach((c) => catSet.add(c));
    });
    return Array.from(catSet);
  }, [stack.peptideIds]);

  const handleDelete = () => {
    if (!onDelete) return;
    Alert.alert(
      'Delete Stack',
      `Are you sure you want to delete "${stack.name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: onDelete },
      ]
    );
  };

  const evidence = stack.evidenceLevel ? getEvidenceBadge(stack.evidenceLevel) : null;

  return (
    <GlassCard
      style={styles.stackCard}
      variant={stack.isCurated ? 'accent' : 'default'}
    >
      <View style={styles.stackHeader}>
        <View style={styles.stackTitleRow}>
          <Text style={styles.stackName}>{stack.name}</Text>
          {stack.isCurated && (
            <View style={styles.curatedBadge}>
              <Ionicons name="star" size={10} color="#e3a7a1" />
              <Text style={styles.curatedText}>Curated</Text>
            </View>
          )}
        </View>
        {!stack.isCurated && onDelete && (
          <TouchableOpacity
            onPress={handleDelete}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="trash-outline" size={18} color="#9ca3af" />
          </TouchableOpacity>
        )}
      </View>

      {/* Meta row: peptide count + evidence level */}
      <View style={styles.metaRow}>
        <Text style={styles.peptideCount}>
          {stack.peptideIds.length} peptides
        </Text>
        {evidence && (
          <View style={[styles.evidencePill, { backgroundColor: `${evidence.color}18` }]}>
            <Text style={[styles.evidenceText, { color: evidence.color }]}>
              {evidence.label}
            </Text>
          </View>
        )}
      </View>

      {stack.curatedBy && (
        <Text style={styles.curatedBy}>By {stack.curatedBy}</Text>
      )}

      <Text style={styles.peptideList} numberOfLines={2}>
        {peptideNames}
      </Text>

      {stack.description && (
        <Text style={styles.stackDescription} numberOfLines={3}>
          {stack.description}
        </Text>
      )}

      {/* Goal Tags */}
      {stack.targetGoals && stack.targetGoals.length > 0 && (
        <View style={styles.goalsRow}>
          {stack.targetGoals.map((goal) => (
            <View key={goal} style={styles.goalPill}>
              <Text style={styles.goalPillText}>{getGoalLabel(goal)}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Category Coverage */}
      {categories.length > 0 && (
        <View style={styles.categoriesRow}>
          {categories.slice(0, 4).map((cat) => (
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
          {categories.length > 4 && (
            <Text style={styles.moreCats}>+{categories.length - 4}</Text>
          )}
        </View>
      )}

      {/* Load Button */}
      <TouchableOpacity
        style={styles.loadButton}
        onPress={onLoad}
        activeOpacity={0.7}
      >
        <Ionicons name="open-outline" size={16} color="#c7d7e6" />
        <Text style={styles.loadButtonText}>Load in Stack Builder</Text>
      </TouchableOpacity>
    </GlassCard>
  );
};

export default function MyStacksScreen() {
  const router = useRouter();
  const { savedStacks, loadStack, deleteStack } = useStackStore();
  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);

  const curatedStacks = useMemo(() => {
    let stacks = savedStacks.filter((s) => s.isCurated);
    if (selectedGoal) {
      stacks = stacks.filter((s) => s.targetGoals?.includes(selectedGoal));
    }
    return stacks;
  }, [savedStacks, selectedGoal]);

  const userStacks = useMemo(
    () => savedStacks.filter((s) => !s.isCurated),
    [savedStacks]
  );

  const handleLoadStack = (stack: PeptideStack) => {
    loadStack(stack);
    router.push('/(tabs)/stack-builder');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Explore Stacks</Text>
          <Text style={styles.subtitle}>
            Browse curated research stacks or load your saved combinations
          </Text>
        </View>

        {/* Goal Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
          contentContainerStyle={styles.filterContent}
        >
          <TouchableOpacity
            style={[
              styles.filterChip,
              !selectedGoal && styles.filterChipActive,
            ]}
            onPress={() => setSelectedGoal(null)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.filterChipText,
                !selectedGoal && styles.filterChipTextActive,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          {GOAL_FILTERS.map((goal) => (
            <TouchableOpacity
              key={goal.id}
              style={[
                styles.filterChip,
                selectedGoal === goal.id && styles.filterChipActive,
              ]}
              onPress={() =>
                setSelectedGoal(selectedGoal === goal.id ? null : goal.id)
              }
              activeOpacity={0.7}
            >
              <Ionicons
                name={goal.icon as any}
                size={14}
                color={selectedGoal === goal.id ? '#e3a7a1' : '#9ca3af'}
              />
              <Text
                style={[
                  styles.filterChipText,
                  selectedGoal === goal.id && styles.filterChipTextActive,
                ]}
              >
                {goal.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured / Curated Stacks */}
        {curatedStacks.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="star-outline" size={18} color="#e3a7a1" />
              <Text style={styles.sectionTitle}>
                {selectedGoal ? `${getGoalLabel(selectedGoal)} Stacks` : 'Featured Stacks'}
              </Text>
              <Text style={styles.sectionCount}>{curatedStacks.length}</Text>
            </View>
            {curatedStacks.map((stack) => (
              <StackCard
                key={stack.id}
                stack={stack}
                onLoad={() => handleLoadStack(stack)}
              />
            ))}
          </View>
        )}

        {selectedGoal && curatedStacks.length === 0 && (
          <GlassCard style={styles.noResultsCard}>
            <Ionicons name="search-outline" size={32} color="#4b5563" />
            <Text style={styles.noResultsText}>
              No curated stacks for "{getGoalLabel(selectedGoal)}" yet
            </Text>
            <Text style={styles.noResultsSub}>
              Try a different filter or build your own in the Stack Builder
            </Text>
          </GlassCard>
        )}

        {/* User Stacks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="bookmark-outline" size={18} color="#c7d7e6" />
            <Text style={styles.sectionTitle}>Your Stacks</Text>
          </View>
          {userStacks.length > 0 ? (
            userStacks.map((stack) => (
              <StackCard
                key={stack.id}
                stack={stack}
                onLoad={() => handleLoadStack(stack)}
                onDelete={() => deleteStack(stack.id)}
              />
            ))
          ) : (
            <GlassCard style={styles.emptyCard}>
              <Ionicons name="layers-outline" size={40} color="#4b5563" />
              <Text style={styles.emptyTitle}>No saved stacks yet</Text>
              <Text style={styles.emptySubtitle}>
                Build a stack in the Stack Builder tab and save it here for
                future reference.
              </Text>
              <TouchableOpacity
                style={styles.goToBuilderBtn}
                onPress={() => router.push('/(tabs)/stack-builder')}
                activeOpacity={0.7}
              >
                <Ionicons name="flask-outline" size={16} color="#0f1720" />
                <Text style={styles.goToBuilderText}>Go to Stack Builder</Text>
              </TouchableOpacity>
            </GlassCard>
          )}
        </View>
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
  header: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f7f2ec',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 4,
  },

  // ── Goal Filters ──────────────────────────────────────────
  filterScroll: {
    marginTop: 16,
    marginBottom: 8,
  },
  filterContent: {
    gap: 8,
    paddingRight: 8,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  filterChipActive: {
    backgroundColor: 'rgba(227, 167, 161, 0.15)',
    borderColor: 'rgba(227, 167, 161, 0.4)',
  },
  filterChipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9ca3af',
  },
  filterChipTextActive: {
    color: '#e3a7a1',
  },

  // ── Sections ──────────────────────────────────────────────
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e8e6e3',
    flex: 1,
  },
  sectionCount: {
    fontSize: 13,
    fontWeight: '700',
    color: '#9ca3af',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },

  // ── Stack Card ────────────────────────────────────────────
  stackCard: {
    marginBottom: 14,
  },
  stackHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  stackTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },
  stackName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#f7f2ec',
  },
  curatedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(227, 167, 161, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    gap: 4,
  },
  curatedText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#e3a7a1',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },

  // ── Meta Row ──────────────────────────────────────────────
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 6,
  },
  peptideCount: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '600',
  },
  evidencePill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  evidenceText: {
    fontSize: 10,
    fontWeight: '700',
  },

  curatedBy: {
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 2,
  },
  peptideList: {
    fontSize: 13,
    fontWeight: '600',
    color: '#c7d7e6',
    marginTop: 10,
  },
  stackDescription: {
    fontSize: 12,
    color: '#9ca3af',
    lineHeight: 18,
    marginTop: 8,
  },

  // ── Goal Tags ─────────────────────────────────────────────
  goalsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 10,
  },
  goalPill: {
    backgroundColor: 'rgba(185, 203, 182, 0.12)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  goalPillText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#b9cbb6',
    textTransform: 'capitalize',
  },

  // ── Categories ────────────────────────────────────────────
  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  categoryPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryPillText: {
    fontSize: 10,
    fontWeight: '600',
  },
  moreCats: {
    fontSize: 11,
    color: '#9ca3af',
    fontWeight: '600',
  },

  // ── Load Button ───────────────────────────────────────────
  loadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(199, 215, 230, 0.25)',
    paddingVertical: 10,
    marginTop: 14,
    gap: 6,
  },
  loadButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#c7d7e6',
  },

  // ── No Results ────────────────────────────────────────────
  noResultsCard: {
    alignItems: 'center',
    paddingVertical: 32,
    marginTop: 24,
  },
  noResultsText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#e8e6e3',
    marginTop: 12,
  },
  noResultsSub: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 6,
  },

  // ── Empty State ───────────────────────────────────────────
  emptyCard: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e8e6e3',
    marginTop: 12,
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  goToBuilderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3a7a1',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 18,
    gap: 6,
  },
  goToBuilderText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f1720',
  },
});
