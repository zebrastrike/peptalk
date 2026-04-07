/**
 * ExerciseVideo — video player placeholder for exercise demos.
 *
 * Videos will be self-hosted from the 308 iCloud videos once
 * CDN hosting is set up. Until then, shows a clean placeholder.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlassCard } from './GlassCard';
import { Colors, FontSizes, BorderRadius } from '../constants/theme';

interface ExerciseVideoProps {
  exerciseId: string;
  /** Compact mode for inline display */
  compact?: boolean;
}

export function ExerciseVideo({ exerciseId, compact = false }: ExerciseVideoProps) {
  // TODO: Once videos are hosted on CDN, look up URL by exerciseId
  return (
    <GlassCard style={compact ? styles.compactCard : styles.card}>
      <View style={styles.placeholder}>
        <Ionicons name="videocam-outline" size={28} color={Colors.pepTeal} />
        <Text style={styles.placeholderText}>Video coming soon</Text>
        <Text style={styles.subText}>Exercise demos are being added</Text>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: { padding: 0, overflow: 'hidden' },
  compactCard: { padding: 0, overflow: 'hidden' },
  placeholder: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  placeholderText: {
    fontSize: FontSizes.md,
    color: Colors.darkText,
    fontWeight: '600',
  },
  subText: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
  },
});

export default ExerciseVideo;
