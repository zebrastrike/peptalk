/**
 * ExerciseVideo — plays exercise demo videos from Cloudflare R2.
 * Falls back to a clean placeholder when no video is available.
 */

import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { GlassCard } from './GlassCard';
import { Colors, FontSizes, BorderRadius } from '../constants/theme';
import { getExerciseVideoUrl, getExerciseThumbnailUrl, hasExerciseVideo } from '../services/videoService';

interface ExerciseVideoProps {
  exerciseId: string;
  compact?: boolean;
}

export function ExerciseVideo({ exerciseId, compact = false }: ExerciseVideoProps) {
  const videoUrl = getExerciseVideoUrl(exerciseId);
  const thumbnailUrl = getExerciseThumbnailUrl(exerciseId);
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'playing' | 'error'>('idle');

  // No video available
  if (!videoUrl) {
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

  const handlePlaybackUpdate = (playbackStatus: AVPlaybackStatus) => {
    if (!playbackStatus.isLoaded) {
      if (playbackStatus.error) setStatus('error');
      return;
    }
    if (playbackStatus.isPlaying) setStatus('playing');
  };

  const handlePlay = async () => {
    setStatus('loading');
    try {
      await videoRef.current?.playAsync();
    } catch {
      setStatus('error');
    }
  };

  return (
    <GlassCard style={compact ? styles.compactCard : styles.card}>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          style={styles.video}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          isLooping
          onPlaybackStatusUpdate={handlePlaybackUpdate}
          posterSource={thumbnailUrl ? { uri: thumbnailUrl } : undefined}
          usePoster={!!thumbnailUrl}
        />

        {status === 'idle' && (
          <TouchableOpacity style={styles.playOverlay} activeOpacity={0.8} onPress={handlePlay}>
            {thumbnailUrl && (
              <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} resizeMode="cover" />
            )}
            <View style={styles.playButton}>
              <Ionicons name="play" size={28} color="#fff" />
            </View>
          </TouchableOpacity>
        )}

        {status === 'loading' && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={Colors.pepTeal} />
          </View>
        )}

        {status === 'error' && (
          <View style={styles.playOverlay}>
            <Ionicons name="alert-circle-outline" size={28} color={Colors.error} />
            <Text style={styles.errorText}>Failed to load video</Text>
          </View>
        )}
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: { padding: 0, overflow: 'hidden' },
  compactCard: { padding: 0, overflow: 'hidden' },
  videoContainer: {
    width: '100%', aspectRatio: 16 / 9,
    borderRadius: BorderRadius.md, overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  video: { width: '100%', height: '100%' },
  thumbnail: { ...StyleSheet.absoluteFillObject, borderRadius: BorderRadius.md },
  playOverlay: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
  playButton: {
    width: 56, height: 56, borderRadius: 28,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center', justifyContent: 'center',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  placeholder: { height: 120, alignItems: 'center', justifyContent: 'center', gap: 6 },
  placeholderText: { fontSize: FontSizes.md, color: Colors.darkText, fontWeight: '600' },
  subText: { fontSize: FontSizes.xs, color: Colors.darkTextSecondary },
  errorText: { marginTop: 6, fontSize: FontSizes.sm, color: Colors.error },
});

export default ExerciseVideo;
