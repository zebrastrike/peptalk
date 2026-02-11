import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { GlassCard } from '../../src/components/GlassCard';
import { Disclaimer } from '../../src/components/Disclaimer';

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Research Feed</Text>
          <Text style={styles.subtitle}>
            Curated peptide research news and updates
          </Text>
        </View>

        {/* Coming Soon Card */}
        <GlassCard variant="elevated" style={styles.comingSoonCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="newspaper-outline" size={48} color="#c7d7e6" />
          </View>
          <Text style={styles.comingSoonTitle}>Coming Soon</Text>
          <Text style={styles.comingSoonDescription}>
            The Research Feed will deliver curated news, study summaries, and
            breaking developments from the world of peptide research. Stay tuned
            for updates on clinical trials, new publications, and community
            insights from Science Based Body.
          </Text>

          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Ionicons
                name="document-text-outline"
                size={18}
                color="#b9cbb6"
              />
              <Text style={styles.featureText}>
                PubMed study summaries in plain language
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="flask-outline" size={18} color="#e3a7a1" />
              <Text style={styles.featureText}>
                Clinical trial progress and results
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons
                name="people-outline"
                size={18}
                color="#c7d7e6"
              />
              <Text style={styles.featureText}>
                Community research highlights and discussions
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons
                name="notifications-outline"
                size={18}
                color="#f0d68a"
              />
              <Text style={styles.featureText}>
                Alerts for peptides in your saved stacks
              </Text>
            </View>
          </View>
        </GlassCard>

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
  comingSoonCard: {
    marginTop: 32,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: 'rgba(199, 215, 230, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  comingSoonTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#f7f2ec',
    marginBottom: 12,
  },
  comingSoonDescription: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 28,
  },
  featuresList: {
    width: '100%',
    gap: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 13,
    color: '#e8e6e3',
    flex: 1,
    lineHeight: 18,
  },
});
