const fs = require('fs');
const OUT = 'C:/Users/keyse_pt9dxr4/peptalk/_elevate_audit/trainerize_scrape';
const exercises = JSON.parse(fs.readFileSync(OUT + '/exercises_ALL.json', 'utf8'));

const allVideos = exercises
  .filter(ex => ex.media && ex.media.type != 'none')
  .map(ex => {
    const m = ex.media;
    const d = m.default || {};
    return {
      id: ex.id,
      name: ex.name,
      exerciseType: ex.type,
      recordType: ex.recordType,
      videoType: ex.videoType,
      mediaType: m.type,
      token: m.token,
      description: (ex.description || '').substring(0, 300),
      thumbnailHD: m.thumbnailUrl ? m.thumbnailUrl.hd : null,
      thumbnailSD: m.thumbnailUrl ? m.thumbnailUrl.sd : null,
      videoSD: d.videoUrls ? d.videoUrls.sd : null,
      videoHD: d.videoUrls ? d.videoUrls.hd : null,
      videoFHD: d.videoUrls ? d.videoUrls.fhd : null,
      videoHLS: d.videoUrls ? d.videoUrls.hls : null,
      loopSD: d.loopVideoUrls ? d.loopVideoUrls.sd : null,
      loopHD: d.loopVideoUrls ? d.loopVideoUrls.hd : null,
      youtubeUrl: ex.videoType === 'youtube' ? 'https://www.youtube.com/watch?v=' + ex.videoUrl : null,
    };
  });

fs.writeFileSync(OUT + '/ALL_videos_with_urls.json', JSON.stringify(allVideos, null, 2));

const withDirectUrl = allVideos.filter(v => v.videoSD || v.videoHD || v.videoHLS);
const youtubeOnly = allVideos.filter(v => v.youtubeUrl && !v.videoSD && !v.videoHD);
const vimeoVids = allVideos.filter(v => v.mediaType === 'vimeo');
const s3Vids = allVideos.filter(v => v.mediaType === 'awss3');
const customUploads = allVideos.filter(v => v.exerciseType === 'custom');

console.log('=== VIDEO INVENTORY ===');
console.log('Total exercises with video:', allVideos.length);
console.log('');
console.log('By source:');
console.log('  Vimeo (Trainerize stock library):', vimeoVids.length);
console.log('  AWS S3 (custom uploads):', s3Vids.length);
console.log('  YouTube embeds:', youtubeOnly.length);
console.log('');
console.log('With direct download URLs:', withDirectUrl.length);
console.log('  Custom exercises (Jamie\'s own):', customUploads.length);
console.log('');
console.log('Saved ALL_videos_with_urls.json');

// Jamie's custom exercises
const jamieCustom = allVideos.filter(v => v.exerciseType === 'custom');
fs.writeFileSync(OUT + '/jamie_custom_exercises.json', JSON.stringify(jamieCustom, null, 2));
console.log('Saved jamie_custom_exercises.json with', jamieCustom.length, 'custom exercises');

// S3 uploaded videos (these are Jamie's own recordings)
const s3WithUrls = s3Vids.map(v => ({
  name: v.name,
  sd: v.videoSD,
  hd: v.videoHD,
  hls: v.videoHLS,
  thumbnail: v.thumbnailHD,
}));
fs.writeFileSync(OUT + '/s3_video_urls.json', JSON.stringify(s3WithUrls, null, 2));
console.log('Saved s3_video_urls.json with', s3WithUrls.length, 'S3 hosted videos');
