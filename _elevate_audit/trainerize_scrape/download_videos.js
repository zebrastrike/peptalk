const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const OUT = 'C:/Users/keyse_pt9dxr4/peptalk/_elevate_audit/trainerize_scrape';
const videos = JSON.parse(fs.readFileSync(OUT + '/ALL_videos_with_urls.json', 'utf8'));

// Get S3 videos (Jamie's uploads) with HD URLs
const s3vids = videos.filter(v => v.mediaType === 'awss3' && (v.videoHD || v.videoSD));

console.log(`Downloading ${s3vids.length} S3-hosted videos (Jamie's custom uploads)...`);

// Create a sanitized filename from exercise name
function safeName(name, id) {
  return id + '_' + name.replace(/[^a-zA-Z0-9 _-]/g, '').substring(0, 80).trim().replace(/\s+/g, '_');
}

// Generate download script for parallel execution
let script = '#!/bin/bash\n';
script += 'DIR="' + OUT + '/videos_s3"\n';
script += 'TOTAL=' + s3vids.length + '\n';
script += 'COUNT=0\n';
script += 'FAIL=0\n\n';

s3vids.forEach((v, i) => {
  const fname = safeName(v.name, v.id);
  const url = v.videoHD || v.videoSD;
  script += `# ${i+1}/${s3vids.length}: ${v.name.substring(0,60)}\n`;
  script += `if [ ! -f "$DIR/${fname}.mp4" ]; then\n`;
  script += `  curl -s -L -o "$DIR/${fname}.mp4" "${url}" && echo "OK ${i+1}/${s3vids.length}: ${fname}" || { echo "FAIL: ${fname}"; FAIL=$((FAIL+1)); }\n`;
  script += `else\n`;
  script += `  echo "SKIP ${i+1}: already exists"\n`;
  script += `fi\n`;
  script += `COUNT=$((COUNT+1))\n\n`;
});

script += 'echo "=== Done: $COUNT attempted, $FAIL failed ==="\n';

fs.writeFileSync(OUT + '/download_s3.sh', script);
console.log('Generated download_s3.sh');

// Also generate a manifest CSV
let csv = 'id,name,videoType,hdUrl,sdUrl,hlsUrl,thumbnail\n';
s3vids.forEach(v => {
  const name = v.name.replace(/"/g, '""');
  csv += `${v.id},"${name}",${v.mediaType},${v.videoHD || ''},${v.videoSD || ''},${v.videoHLS || ''},${v.thumbnailHD || ''}\n`;
});
fs.writeFileSync(OUT + '/video_manifest.csv', csv);
console.log('Generated video_manifest.csv');
