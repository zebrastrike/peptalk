import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Peptide } from '../types';
import { getCategoryColor } from '../constants/categories';

interface PeptideCardProps {
  peptide: Peptide;
}

export const PeptideCard: React.FC<PeptideCardProps> = ({ peptide }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/peptide/${peptide.id}`);
  };

  const truncatedSummary =
    peptide.researchSummary && peptide.researchSummary.length > 120
      ? `${peptide.researchSummary.substring(0, 120)}...`
      : peptide.researchSummary;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.name} numberOfLines={1}>
            {peptide.name}
          </Text>
          {peptide.abbreviation ? (
            <Text style={styles.abbreviation}>{peptide.abbreviation}</Text>
          ) : null}
        </View>
      </View>

      {peptide.categories && peptide.categories.length > 0 ? (
        <View style={styles.tagsRow}>
          {peptide.categories.map((category) => {
            const color = getCategoryColor(category);
            return (
              <View
                key={category}
                style={[
                  styles.tag,
                  { backgroundColor: `${color}20`, borderColor: `${color}40` },
                ]}
              >
                <Text style={[styles.tagText, { color }]}>{category}</Text>
              </View>
            );
          })}
        </View>
      ) : null}

      {truncatedSummary ? (
        <Text style={styles.summary} numberOfLines={3}>
          {truncatedSummary}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    padding: 16,
    marginBottom: 12,
  },
  header: {
    marginBottom: 10,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#f7f2ec',
    flex: 1,
    marginRight: 8,
  },
  abbreviation: {
    fontSize: 13,
    fontWeight: '600',
    color: '#e3a7a1',
    backgroundColor: 'rgba(227, 167, 161, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    overflow: 'hidden',
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    gap: 6,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  summary: {
    fontSize: 13,
    color: '#9ca3af',
    lineHeight: 19,
  },
});

export default PeptideCard;
