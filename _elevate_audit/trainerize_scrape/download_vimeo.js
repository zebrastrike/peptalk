const fs = require('fs');
const OUT = 'C:/Users/keyse_pt9dxr4/peptalk/_elevate_audit/trainerize_scrape';
const videos = JSON.parse(fs.readFileSync(OUT + '/ALL_videos_with_urls.json', 'utf8'));

// Vimeo videos with direct download URLs
const vimeoVids = videos.filter(v => v.mediaType === 'vimeo' && (v.videoHD || v.videoSD || v.videoFHD));

console.log(`Found ${vimeoVids.length} Vimeo videos with direct URLs`);

function safeName(name, id) {
  return id + '_' + name.replace(/[^a-zA-Z0-9 _-]/g, '').substring(0, 80).trim().replace(/\s+/g, '_');
}

let script = '#!/bin/bash\n';
script += 'DIR="' + OUT + '/videos_vimeo"\n';
script += 'mkdir -p "$DIR"\n';
script += 'TOTAL=' + vimeoVids.length + '\n';
script += 'COUNT=0\nFAIL=0\n\n';

vimeoVids.forEach((v, i) => {
  const fname = safeName(v.name, v.id);
  // Prefer FHD > HD > SD
  const url = v.videoFHD || v.videoHD || v.videoSD;
  script += `if [ ! -f "$DIR/${fname}.mp4" ]; then\n`;
  script += `  curl -s -L -o "$DIR/${fname}.mp4" "${url}" && echo "OK ${i+1}/${vimeoVids.length}: ${fname.substring(0,60)}" || { echo "FAIL: ${fname}"; FAIL=$((FAIL+1)); }\n`;
  script += `else\n`;
  script += `  echo "SKIP ${i+1}: exists"\n`;
  script += `fi\n`;
  script += `COUNT=$((COUNT+1))\n\n`;
});

script += 'echo "=== Vimeo done: $COUNT attempted, $FAIL failed ==="\n';
fs.writeFileSync(OUT + '/download_vimeo.sh', script);
console.log('Generated download_vimeo.sh');
