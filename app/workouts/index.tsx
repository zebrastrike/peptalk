/**
 * Workout Programs screen — browse available programs and track active enrollment.
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { GlassCard } from '../../src/components/GlassCard';
import { GradientButton } from '../../src/components/GradientButton';
import { Colors, Gradients, Spacing, FontSizes, BorderRadius } from '../../src/constants/theme';
import { WORKOUT_PROGRAMS } from '../../src/data/workoutPrograms';
import { useWorkoutStore } from '../../src/store/useWorkoutStore';
import type { WorkoutProgram } from '../../src/types/fitness';

// ---------------------------------------------------------------------------
// Program Card
// ---------------------------------------------------------------------------

function ProgramCard({ program }: { program: WorkoutProgram }) {
  const router = useRouter();
  const { activeProgram, startProgram } = useWorkoutStore();
  const isActive = activeProgram?.programId === program.id;

  const handlePress = () => {
    if (isActive) {
      router.push(`/workouts/player?programId=${program.id}`);
    } else {
      router.push(`/workouts/program?programId=${program.id}`);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={handlePress}>
      <GlassCard variant={isActive ? 'glow' : 'default'} glowColor={Colors.pepTeal}>
        {/* Header */}
        <View style={styles.cardHeader}>
          <LinearGradient
            colors={[Colors.pepTeal, Colors.pepBlue]}
            style={styles.cardIcon}
          >
            <Ionicons name="barbell-outline" size={24} color="#fff" />
          </LinearGradient>
          <View style={styles.cardHeaderText}>
            <Text style={styles.cardTitle}>{program.name}</Text>
            <Text style={styles.cardCreator}>by {program.createdBy}</Text>
          </View>
          {program.isPremium && (
            <View style={styles.premiumBadge}>
              <Ionicons name="star" size={12} color="#f59e0b" />
              <Text style={styles.premiumText}>PRO</Text>
            </View>
          )}
        </View>

        {/* Description */}
        <Text style={styles.cardDesc} numberOfLines={3}>
          {program.description}
        </Text>

        {/* Meta */}
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={14} color={Colors.pepTeal} />
            <Text style={styles.metaText}>{program.durationWeeks} weeks</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="fitness-outline" size={14} color={Colors.pepTeal} />
            <Text style={styles.metaText}>
              {program.weeks[0]?.days.length ?? 0} days/wk
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="trophy-outline" size={14} color={Colors.pepTeal} />
            <Text style={styles.metaText}>{program.difficulty}</Text>
          </View>
        </View>

        {/* Tags */}
        <View style={styles.tagRow}>
          {program.category.map((cat) => (
            <View key={cat} style={styles.tag}>
              <Text style={styles.tagText}>{cat}</Text>
            </View>
          ))}
        </View>

        {/* CTA */}
        {isActive ? (
          <View style={styles.activeRow}>
            <Ionicons name="play-circle" size={20} color={Colors.pepTeal} />
            <Text style={styles.activeText}>
              Week {activeProgram.currentWeek}, Day{' '}
              {activeProgram.currentDay + 1} — Tap to continue
            </Text>
          </View>
        ) : null}
      </GlassCard>
    </TouchableOpacity>
  );
}

// ---------------------------------------------------------------------------
// Stats Bar
// ---------------------------------------------------------------------------

function StatsBar() {
  const { logs, getStreak } = useWorkoutStore();
  const streak = getStreak();
  const thisWeek = logs.filter((l) => {
    const d = new Date(l.date);
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 86400000);
    return d >= weekAgo;
  }).length;

  return (
    <View style={styles.statsRow}>
      <View style={styles.statCard}>
        <Text style={styles.statNumber}>{logs.length}</Text>
        <Text style={styles.statLabel}>Total</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statNumber}>{thisWeek}</Text>
        <Text style={styles.statLabel}>This Week</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={[styles.statNumber, { color: Colors.pepTeal }]}>
          {streak}
        </Text>
        <Text style={styles.statLabel}>Streak</Text>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Main Screen
// ---------------------------------------------------------------------------

export default function WorkoutsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={Colors.darkText} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Workouts</Text>
        <TouchableOpacity
          onPress={() => router.push('/workouts/exercises')}
          style={styles.backBtn}
        >
          <Ionicons name="search" size={22} color={Colors.darkText} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Stats */}
        <StatsBar />

        {/* Quick Actions */}
        <View style={styles.quickRow}>
          <TouchableOpacity
            style={styles.quickBtn}
            onPress={() => router.push('/workouts/exercises')}
          >
            <LinearGradient
              colors={[Colors.pepBlue, Colors.pepCyan]}
              style={styles.quickIcon}
            >
              <Ionicons name="list-outline" size={20} color="#fff" />
            </LinearGradient>
            <Text style={styles.quickLabel}>Exercise Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickBtn}
            onPress={() => router.push('/workouts/history')}
          >
            <LinearGradient
              colors={[Colors.pepTeal, Colors.pepBlue]}
              style={styles.quickIcon}
            >
              <Ionicons name="time-outline" size={20} color="#fff" />
            </LinearGradient>
            <Text style={styles.quickLabel}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Programs */}
        <Text style={styles.sectionTitle}>Programs</Text>
        {WORKOUT_PROGRAMS.map((program) => (
          <View key={program.id} style={styles.cardWrap}>
            <ProgramCard program={program} />
          </View>
        ))}

        {/* Coming Soon */}
        <View style={styles.cardWrap}>
          <GlassCard>
            <View style={styles.comingSoon}>
              <Ionicons
                name="add-circle-outline"
                size={32}
                color={Colors.darkTextSecondary}
              />
              <Text style={styles.comingSoonTitle}>More Programs Coming</Text>
              <Text style={styles.comingSoonDesc}>
                Jamie is building strength, HIIT, and postpartum recovery
                programs. Stay tuned!
              </Text>
            </View>
          </GlassCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.darkBg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.darkText,
  },
  scroll: { paddingBottom: 40 },

  // Stats
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.glassBlue,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.glassBlueBorder,
    paddingVertical: 14,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.darkText,
  },
  statLabel: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    marginTop: 2,
  },

  // Quick actions
  quickRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  quickBtn: {
    flex: 1,
    backgroundColor: Colors.glassBlue,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.glassBlueBorder,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 14,
  },
  quickIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.darkText,
  },

  // Section
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.darkText,
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  cardWrap: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },

  // Program card
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeaderText: { flex: 1 },
  cardTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.darkText,
  },
  cardCreator: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    marginTop: 2,
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  premiumText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#f59e0b',
  },
  cardDesc: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 10,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 8,
  },
  tag: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  tagText: {
    fontSize: 10,
    color: Colors.pepTeal,
    fontWeight: '600',
  },
  activeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
  },
  activeText: {
    fontSize: FontSizes.sm,
    color: Colors.pepTeal,
    fontWeight: '600',
  },

  // Coming soon
  comingSoon: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  comingSoonTitle: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.darkText,
    marginTop: 10,
  },
  comingSoonDesc: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 20,
  },
});
