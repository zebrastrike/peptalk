import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GlassCard } from '../../src/components/GlassCard';
import { EDUCATIONAL_ARTICLES } from '../../src/data/educationalArticles';
import { HOW_TO_GUIDES } from '../../src/data/howToGuides';
import { VIDEOS } from '../../src/data/videos';
import { ArticleCategory, GuideCategory, VideoCategory } from '../../src/types';

// ── Helpers ──────────────────────────────────────────────────────

function getArticleCategoryColor(category: ArticleCategory): string {
  switch (category) {
    case 'fundamentals': return '#b9cbb6';
    case 'safety':       return '#e3a7a1';
    case 'production':   return '#c7d7e6';
    case 'testing':      return '#f0d68a';
    case 'regulation':   return '#f59e0b';
    case 'delivery':     return '#06b6d4';
    default:             return '#9ca3af';
  }
}

function getGuideCategoryColor(category: GuideCategory): string {
  switch (category) {
    case 'reconstitution': return '#b9cbb6';
    case 'injection':      return '#e3a7a1';
    case 'storage':        return '#c7d7e6';
    case 'dosing':         return '#f0d68a';
    case 'testing':        return '#f59e0b';
    case 'general':        return '#9ca3af';
    default:               return '#9ca3af';
  }
}

function getVideoCategoryColor(category: VideoCategory): string {
  switch (category) {
    case 'success_stories': return '#b9cbb6';
    case 'how_to':          return '#e3a7a1';
    case 'research':        return '#c7d7e6';
    case 'education':       return '#f0d68a';
    default:                return '#9ca3af';
  }
}

function getVideoCategoryLabel(category: VideoCategory): string {
  switch (category) {
    case 'success_stories': return 'Success Stories';
    case 'how_to':          return 'How-To';
    case 'research':        return 'Research';
    case 'education':       return 'Education';
    default:                return category;
  }
}

// ── Component ────────────────────────────────────────────────────

export default function LearnHubScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Learn & Watch</Text>
          <Text style={styles.headerSubtitle}>
            Articles, how-to guides, and videos to deepen your peptide knowledge.
          </Text>
        </View>

        {/* ── Articles Section ────────────────────────────────────── */}
        <View style={styles.sectionWrapper}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="document-text-outline" size={20} color="#e3a7a1" />
              <Text style={styles.sectionTitle}>Articles</Text>
            </View>
            {EDUCATIONAL_ARTICLES.length > 0 && (
              <TouchableOpacity
                onPress={() => router.push('/learn/article/what-is-a-peptide')}
                activeOpacity={0.7}
              >
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            )}
          </View>

          {EDUCATIONAL_ARTICLES.length === 0 ? (
            <GlassCard style={styles.emptyCard}>
              <Ionicons name="document-text-outline" size={32} color="#9ca3af" />
              <Text style={styles.emptyText}>No articles yet. Check back soon!</Text>
            </GlassCard>
          ) : (
            <FlatList
              data={EDUCATIONAL_ARTICLES}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => router.push(`/learn/article/${item.slug}`)}
                >
                  <GlassCard style={styles.articleCard}>
                    <View
                      style={[
                        styles.categoryBadge,
                        { backgroundColor: `${getArticleCategoryColor(item.category)}20` },
                      ]}
                    >
                      <Text
                        style={[
                          styles.categoryBadgeText,
                          { color: getArticleCategoryColor(item.category) },
                        ]}
                      >
                        {item.category}
                      </Text>
                    </View>
                    <Text style={styles.cardTitle} numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text style={styles.cardSummary} numberOfLines={3}>
                      {item.summary}
                    </Text>
                    <View style={styles.cardFooter}>
                      <Ionicons name="arrow-forward" size={14} color="#e3a7a1" />
                      <Text style={styles.readMore}>Read article</Text>
                    </View>
                  </GlassCard>
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        {/* ── How-To Guides Section ───────────────────────────────── */}
        <View style={styles.sectionWrapper}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="list-outline" size={20} color="#b9cbb6" />
              <Text style={styles.sectionTitle}>How-To Guides</Text>
            </View>
            {HOW_TO_GUIDES.length > 0 && (
              <TouchableOpacity
                onPress={() => router.push('/learn/guides')}
                activeOpacity={0.7}
              >
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            )}
          </View>

          {HOW_TO_GUIDES.length === 0 ? (
            <GlassCard style={styles.emptyCard}>
              <Ionicons name="list-outline" size={32} color="#9ca3af" />
              <Text style={styles.emptyText}>No guides yet. Check back soon!</Text>
            </GlassCard>
          ) : (
            <FlatList
              data={HOW_TO_GUIDES}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => router.push(`/learn/guides/${item.slug}`)}
                >
                  <GlassCard style={styles.guideCard}>
                    <View
                      style={[
                        styles.categoryBadge,
                        { backgroundColor: `${getGuideCategoryColor(item.category)}20` },
                      ]}
                    >
                      <Text
                        style={[
                          styles.categoryBadgeText,
                          { color: getGuideCategoryColor(item.category) },
                        ]}
                      >
                        {item.category}
                      </Text>
                    </View>
                    <Text style={styles.cardTitle} numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text style={styles.cardSummary} numberOfLines={3}>
                      {item.summary}
                    </Text>
                    <View style={styles.cardFooter}>
                      <Ionicons name="footsteps-outline" size={14} color="#b9cbb6" />
                      <Text style={[styles.readMore, { color: '#b9cbb6' }]}>
                        {item.steps.length} steps
                      </Text>
                    </View>
                  </GlassCard>
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        {/* ── Videos Section ──────────────────────────────────────── */}
        <View style={styles.sectionWrapper}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="videocam-outline" size={20} color="#c7d7e6" />
              <Text style={styles.sectionTitle}>Videos</Text>
            </View>
            {VIDEOS.length > 0 && (
              <TouchableOpacity
                onPress={() => router.push('/learn/videos')}
                activeOpacity={0.7}
              >
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            )}
          </View>

          {VIDEOS.length === 0 ? (
            <GlassCard style={styles.emptyCard}>
              <Ionicons name="videocam-outline" size={32} color="#9ca3af" />
              <Text style={styles.emptyText}>
                Videos coming soon — check back for success stories, research talks, and how-to guides.
              </Text>
            </GlassCard>
          ) : (
            <FlatList
              data={VIDEOS}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => router.push(`/learn/videos/${item.slug}`)}
                >
                  <GlassCard style={styles.videoCard}>
                    <View style={styles.videoThumbnail}>
                      <Ionicons name="play-circle" size={40} color="rgba(255,255,255,0.8)" />
                      {item.duration && (
                        <View style={styles.durationBadge}>
                          <Text style={styles.durationText}>{item.duration}</Text>
                        </View>
                      )}
                    </View>
                    <View
                      style={[
                        styles.categoryBadge,
                        { backgroundColor: `${getVideoCategoryColor(item.category)}20` },
                      ]}
                    >
                      <Text
                        style={[
                          styles.categoryBadgeText,
                          { color: getVideoCategoryColor(item.category) },
                        ]}
                      >
                        {getVideoCategoryLabel(item.category)}
                      </Text>
                    </View>
                    <Text style={styles.cardTitle} numberOfLines={2}>
                      {item.title}
                    </Text>
                  </GlassCard>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Styles ───────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1720',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // ── Header ─────────────────────────────────────────────────
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f7f2ec',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },

  // ── Section ────────────────────────────────────────────────
  sectionWrapper: {
    marginBottom: 28,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e8e6e3',
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#e3a7a1',
  },

  // ── Horizontal List ────────────────────────────────────────
  horizontalList: {
    paddingHorizontal: 20,
    gap: 14,
  },

  // ── Cards ──────────────────────────────────────────────────
  articleCard: {
    width: 260,
    minHeight: 160,
  },
  guideCard: {
    width: 260,
    minHeight: 160,
  },
  videoCard: {
    width: 240,
    minHeight: 180,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#f7f2ec',
    marginBottom: 6,
    lineHeight: 20,
  },
  cardSummary: {
    fontSize: 12,
    color: '#9ca3af',
    lineHeight: 18,
    flex: 1,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },
  readMore: {
    fontSize: 12,
    fontWeight: '600',
    color: '#e3a7a1',
  },

  // ── Video Thumbnail ────────────────────────────────────────
  videoThumbnail: {
    height: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  durationBadge: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  durationText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#e8e6e3',
  },

  // ── Empty State ────────────────────────────────────────────
  emptyCard: {
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 30,
    gap: 10,
  },
  emptyText: {
    fontSize: 13,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
  },
});
