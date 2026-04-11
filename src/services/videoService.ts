/**
 * Video Service — Maps exercises to Cloudflare R2 hosted videos.
 *
 * Video naming convention: exercise ID with .mp4 extension
 * Base URL: https://d18e4522521d2b87f6e511c830d5ad03.r2.cloudflarestorage.com
 *
 * To upload videos:
 * 1. Name each video file to match its exercise ID (e.g., "barbell-squat-207.mp4")
 * 2. Upload to the R2 bucket via Cloudflare dashboard or wrangler CLI
 * 3. Videos are served via the public R2 URL
 *
 * For public access, enable public access on the R2 bucket or use a
 * Cloudflare Worker / custom domain for the bucket.
 */

const R2_BASE_URL = process.env.EXPO_PUBLIC_R2_VIDEO_URL
  ?? 'https://videos.peptalkapp.com'; // Custom domain pointing to R2

/**
 * Get the video URL for an exercise by ID.
 * Returns null if no video is mapped.
 */
export function getExerciseVideoUrl(exerciseId: string): string | null {
  // Check if this exercise has a known video
  if (VIDEO_MANIFEST[exerciseId]) {
    return `${R2_BASE_URL}/${VIDEO_MANIFEST[exerciseId]}`;
  }
  return null;
}

/**
 * Get the thumbnail URL for an exercise video.
 */
export function getExerciseThumbnailUrl(exerciseId: string): string | null {
  const videoFile = VIDEO_MANIFEST[exerciseId];
  if (!videoFile) return null;
  // Thumbnails stored as same name with .jpg extension
  return `${R2_BASE_URL}/thumbnails/${videoFile.replace('.mp4', '.jpg')}`;
}

/**
 * Check if an exercise has a video available.
 */
export function hasExerciseVideo(exerciseId: string): boolean {
  return exerciseId in VIDEO_MANIFEST;
}

/**
 * Video manifest — maps exercise IDs to video filenames in R2.
 *
 * Populate this after uploading your 308 videos to Cloudflare R2.
 * Format: { 'exercise-id': 'filename.mp4' }
 *
 * To auto-generate: upload videos named by exercise ID, then run:
 *   wrangler r2 object list peptalk-videos --prefix "" | jq '.[] | .key'
 * and map each filename to the exercise ID.
 */
const VIDEO_MANIFEST: Record<string, string> = {
  // ── Populated after uploading videos to R2 ──
  // Example entries (uncomment and fill in after upload):
  // 'band-pallof-press-0': 'band-pallof-press.mp4',
  // 'standing-dumbbell-alternating-bicep-curl-1': 'standing-db-alt-bicep-curl.mp4',
  // 'barbell-squat-207': 'barbell-squat.mp4',
};

/**
 * Get total count of available videos.
 */
export function getVideoCount(): number {
  return Object.keys(VIDEO_MANIFEST).length;
}
