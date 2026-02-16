import { VideoContent, VideoCategory } from '../types';

/**
 * Video content for the Learn & Watch section.
 * Videos are hosted externally (YouTube, Vimeo) — only metadata is stored here.
 * Add entries as videos are created/sourced.
 */
export const VIDEOS: VideoContent[] = [];

export const getVideoById = (id: string): VideoContent | undefined =>
  VIDEOS.find((v) => v.id === id);

export const getVideoBySlug = (slug: string): VideoContent | undefined =>
  VIDEOS.find((v) => v.slug === slug);

export const getVideosByCategory = (category: VideoCategory): VideoContent[] =>
  VIDEOS.filter((v) => v.category === category);

export const getVideosByPeptideId = (peptideId: string): VideoContent[] =>
  VIDEOS.filter((v) => v.relatedPeptideIds?.includes(peptideId));

export const getFeaturedVideos = (): VideoContent[] =>
  VIDEOS.filter((v) => v.featured);
