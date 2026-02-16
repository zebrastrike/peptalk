import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { GlassCard } from '../../src/components/GlassCard';
import { Disclaimer } from '../../src/components/Disclaimer';
import { useCheckinStore } from '../../src/store/useCheckinStore';
import { trackCheckInSaved } from '../../src/services/sbbEvents';
import { CheckInRating } from '../../src/types';

const toDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const ratingValues: CheckInRating[] = [1, 2, 3, 4, 5];

const ratingLabel = (value: CheckInRating) => {
  switch (value) {
    case 1:
      return 'Low';
    case 2:
      return 'Below';
    case 3:
      return 'Okay';
    case 4:
      return 'Good';
    case 5:
      return 'Great';
    default:
      return '';
  }
};

const RatingRow: React.FC<{
  label: string;
  value: CheckInRating;
  onChange: (value: CheckInRating) => void;
}> = ({ label, value, onChange }) => {
  return (
    <View style={styles.ratingRow}>
      <Text style={styles.ratingLabel}>{label}</Text>
      <View style={styles.ratingPills}>
        {ratingValues.map((rating) => (
          <TouchableOpacity
            key={rating}
            style={[
              styles.ratingPill,
              value === rating && styles.ratingPillActive,
            ]}
            onPress={() => onChange(rating)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.ratingText,
                value === rating && styles.ratingTextActive,
              ]}
            >
              {rating}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.ratingHint}>{ratingLabel(value)}</Text>
    </View>
  );
};

export default function CheckInScreen() {
  const { entries, saveCheckIn, getCheckInByDate, getStreak } =
    useCheckinStore();

  const todayKey = useMemo(() => toDateKey(new Date()), []);
  const todayEntry = getCheckInByDate(todayKey);

  const [mood, setMood] = useState<CheckInRating>(3);
  const [energy, setEnergy] = useState<CheckInRating>(3);
  const [stress, setStress] = useState<CheckInRating>(3);
  const [sleepQuality, setSleepQuality] = useState<CheckInRating>(3);
  const [recovery, setRecovery] = useState<CheckInRating>(3);
  const [appetite, setAppetite] = useState<CheckInRating>(3);
  const [weight, setWeight] = useState('');
  const [restingHeartRate, setRestingHeartRate] = useState('');
  const [steps, setSteps] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (!todayEntry) return;
    setMood(todayEntry.mood);
    setEnergy(todayEntry.energy);
    setStress(todayEntry.stress);
    setSleepQuality(todayEntry.sleepQuality);
    setRecovery(todayEntry.recovery);
    setAppetite(todayEntry.appetite);
    setWeight(todayEntry.weightLbs ? String(todayEntry.weightLbs) : '');
    setRestingHeartRate(
      todayEntry.restingHeartRate ? String(todayEntry.restingHeartRate) : ''
    );
    setSteps(todayEntry.steps ? String(todayEntry.steps) : '');
    setNotes(todayEntry.notes ?? '');
  }, [todayEntry]);

  const handleSave = () => {
    const toNumber = (value: string) => {
      if (!value) return undefined;
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : undefined;
    };

    const entry = saveCheckIn({
      date: todayKey,
      mood,
      energy,
      stress,
      sleepQuality,
      recovery,
      appetite,
      weightLbs: toNumber(weight),
      restingHeartRate: toNumber(restingHeartRate),
      steps: toNumber(steps),
      notes,
    });

    trackCheckInSaved(entry.date, Boolean(entry.notes));
    Alert.alert('Check-in saved', 'Your daily metrics are updated.');
  };

  const streak = getStreak();
  const recentEntries = entries.slice(0, 7);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Daily Check-In</Text>
          <Text style={styles.subtitle}>
            Log how you feel, track your metrics, and build a research profile.
          </Text>
        </View>

        <GlassCard style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <View>
              <Text style={styles.summaryLabel}>Streak</Text>
              <Text style={styles.summaryValue}>{streak} day(s)</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View>
              <Text style={styles.summaryLabel}>Today</Text>
              <Text style={styles.summaryValue}>
                {todayEntry ? 'Completed' : 'Pending'}
              </Text>
            </View>
          </View>
        </GlassCard>

        <GlassCard style={styles.formCard}>
          <Text style={styles.sectionTitle}>How are you today?</Text>

          <RatingRow label="Mood" value={mood} onChange={setMood} />
          <RatingRow label="Energy" value={energy} onChange={setEnergy} />
          <RatingRow label="Stress" value={stress} onChange={setStress} />
          <RatingRow
            label="Sleep Quality"
            value={sleepQuality}
            onChange={setSleepQuality}
          />
          <RatingRow label="Recovery" value={recovery} onChange={setRecovery} />
          <RatingRow label="Appetite" value={appetite} onChange={setAppetite} />

          <View style={styles.metricGrid}>
            <View style={styles.metricInput}>
              <Text style={styles.metricLabel}>Weight (lbs)</Text>
              <TextInput
                style={styles.metricField}
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
                placeholder="--"
                placeholderTextColor="#6b7280"
              />
            </View>
            <View style={styles.metricInput}>
              <Text style={styles.metricLabel}>Resting HR</Text>
              <TextInput
                style={styles.metricField}
                value={restingHeartRate}
                onChangeText={setRestingHeartRate}
                keyboardType="numeric"
                placeholder="--"
                placeholderTextColor="#6b7280"
              />
            </View>
            <View style={styles.metricInput}>
              <Text style={styles.metricLabel}>Steps</Text>
              <TextInput
                style={styles.metricField}
                value={steps}
                onChangeText={setSteps}
                keyboardType="numeric"
                placeholder="--"
                placeholderTextColor="#6b7280"
              />
            </View>
          </View>

          <Text style={styles.metricLabel}>Notes</Text>
          <TextInput
            style={styles.notesInput}
            value={notes}
            onChangeText={setNotes}
            placeholder="How are you feeling? Anything notable?"
            placeholderTextColor="#6b7280"
            multiline
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSave}
            activeOpacity={0.8}
          >
            <Ionicons name="checkmark-circle-outline" size={20} color="#0f1720" />
            <Text style={styles.saveButtonText}>
              {todayEntry ? 'Update Check-In' : 'Save Check-In'}
            </Text>
          </TouchableOpacity>
        </GlassCard>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Check-Ins</Text>
        </View>
        {recentEntries.length > 0 ? (
          recentEntries.map((entry) => (
            <GlassCard key={entry.id} style={styles.recentCard}>
              <View style={styles.recentRow}>
                <Text style={styles.recentDate}>{entry.date}</Text>
                <Text style={styles.recentMood}>Mood {entry.mood}/5</Text>
              </View>
              <Text style={styles.recentMeta}>
                Energy {entry.energy}/5 · Sleep {entry.sleepQuality}/5 · Stress{' '}
                {entry.stress}/5
              </Text>
            </GlassCard>
          ))
        ) : (
          <GlassCard style={styles.recentCard}>
            <Text style={styles.emptyText}>
              No check-ins yet. Start with today.
            </Text>
          </GlassCard>
        )}

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
  content: {
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
    marginTop: 6,
    lineHeight: 18,
  },
  summaryCard: {
    marginTop: 16,
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#9ca3af',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f7f2ec',
    marginTop: 4,
  },
  summaryDivider: {
    width: 1,
    height: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  formCard: {
    marginBottom: 20,
  },
  sectionHeader: {
    marginTop: 6,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e8e6e3',
  },
  ratingRow: {
    marginBottom: 14,
  },
  ratingLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#c7d7e6',
    marginBottom: 8,
  },
  ratingPills: {
    flexDirection: 'row',
    gap: 8,
  },
  ratingPill: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingPillActive: {
    backgroundColor: 'rgba(227, 167, 161, 0.2)',
    borderColor: 'rgba(227, 167, 161, 0.6)',
  },
  ratingText: {
    fontSize: 13,
    color: '#9ca3af',
  },
  ratingTextActive: {
    color: '#e3a7a1',
    fontWeight: '700',
  },
  ratingHint: {
    fontSize: 11,
    color: '#6b7280',
    marginTop: 6,
  },
  metricGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
    marginBottom: 8,
  },
  metricInput: {
    flex: 1,
  },
  metricLabel: {
    fontSize: 11,
    color: '#9ca3af',
    marginBottom: 6,
  },
  metricField: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#e8e6e3',
  },
  notesInput: {
    minHeight: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: '#e8e6e3',
    textAlignVertical: 'top',
  },
  saveButton: {
    marginTop: 16,
    backgroundColor: '#e3a7a1',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  saveButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f1720',
  },
  recentCard: {
    marginBottom: 10,
  },
  recentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recentDate: {
    fontSize: 13,
    fontWeight: '700',
    color: '#f7f2ec',
  },
  recentMood: {
    fontSize: 12,
    color: '#e3a7a1',
  },
  recentMeta: {
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 6,
  },
  emptyText: {
    fontSize: 12,
    color: '#9ca3af',
  },
});
