/**
 * ExerciseVideo — unified video player for S3/Vimeo/YouTube exercise videos.
 *
 * Wraps expo-av Video in a 16:9 GlassCard with loading/error states.
 * YouTube videos open in a WebView-style embed since expo-av can't play them natively.
 */

import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Linking,
  Image,
} from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { GlassCard } from './GlassCard';
import { Colors, FontSizes, BorderRadius } from '../constants/theme';
import type { VideoSource } from '../types/fitness';
import { getExerciseDetail } from '../data/exerciseDetails';

interface ExerciseVideoProps {
  exerciseId: string;
  /** Override video source if known */
  videoSource?: VideoSource;
  /** Override thumbnail URL */
  thumbnailUrl?: string;
  /** Compact mode for inline display */
  compact?: boolean;
}

export function ExerciseVideo({
  exerciseId,
  videoSource,
  thumbnailUrl,
  compact = false,
}: ExerciseVideoProps) {
  const detail = getExerciseDetail(exerciseId);
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'playing' | 'error'>('idle');

  if (!detail) {
    return (
      <GlassCard style={compact ? styles.compactCard : styles.card}>
        <View style={styles.placeholder}>
          <Ionicons name="videocam-off-outline" size={28} color={Colors.darkTextSecondary} />
          <Text style={styles.placeholderText}>No video available</Text>
        </View>
      </GlassCard>
    );
  }

  // Determine best video URL: prefer HLS > FHD > HD > SD
  const directUrl = detail.videoHLS || detail.videoFHD || detail.videoHD || detail.videoSD;
  const youtubeUrl = detail.youtubeUrl;
  const thumb = thumbnailUrl || detail.thumbnailHD || detail.thumbnailSD;

  // YouTube: show thumbnail + open in browser
  if (!directUrl && youtubeUrl) {
    return (
      <GlassCard style={compact ? styles.compactCard : styles.card}>
        <TouchableOpacity
          style={styles.videoContainer}
          activeOpacity={0.8}
          onPress={() => Linking.openURL(youtubeUrl)}
        >
          {thumb ? (
            <Image source={{ uri: thumb }} style={styles.thumbnail} resizeMode="cover" />
          ) : (
            <View style={[styles.thumbnail, styles.thumbPlaceholder]} />
          )}
          <View style={styles.playOverlay}>
            <View style={styles.playButton}>
              <Ionicons name="logo-youtube" size={32} color="#FF0000" />
            </View>
            <Text style={styles.youtubeHint}>Opens in YouTube</Text>
          </View>
        </TouchableOpacity>
      </GlassCard>
    );
  }

  // No video at all
  if (!directUrl) {
    return (
      <GlassCard style={compact ? styles.compactCard : styles.card}>
        <View style={styles.placeholder}>
          <Ionicons name="videocam-off-outline" size={28} color={Colors.darkTextSecondary} />
          <Text style={styles.placeholderText}>No video available</Text>
        </View>
      </GlassCard>
    );
  }

  // Direct video (S3 / Vimeo)
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
          source={{ uri: directUrl }}
          style={styles.video}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          isLooping
          onPlaybackStatusUpdate={handlePlaybackUpdate}
          posterSource={thumb ? { uri: thumb } : undefined}
          usePoster={!!thumb}
        />

        {status === 'idle' && (
          <TouchableOpacity style={styles.playOverlay} activeOpacity={0.8} onPress={handlePlay}>
            {thumb && (
              <Image source={{ uri: thumb }} style={styles.thumbnail} resizeMode="cover" />
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

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  card: { padding: 0, overflow: 'hidden' },
  compactCard: { padding: 0, overflow: 'hidden' },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  thumbnail: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: BorderRadius.md,
  },
  thumbPlaceholder: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  playOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  youtubeHint: {
    marginTop: 6,
    fontSize: FontSizes.xs,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  placeholder: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  placeholderText: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
  },
  errorText: {
    marginTop: 6,
    fontSize: FontSizes.sm,
    color: Colors.error,
  },
});

export default ExerciseVideo;
