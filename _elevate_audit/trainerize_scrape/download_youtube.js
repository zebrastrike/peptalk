const fs = require('fs');
const OUT = 'C:/Users/keyse_pt9dxr4/peptalk/_elevate_audit/trainerize_scrape';
const videos = JSON.parse(fs.readFileSync(OUT + '/ALL_videos_with_urls.json', 'utf8'));

const ytVids = videos.filter(v => v.youtubeUrl);
console.log(`Found ${ytVids.length} YouTube videos`);

function safeName(name, id) {
  return id + '_' + name.replace(/[^a-zA-Z0-9 _-]/g, '').substring(0, 80).trim().replace(/\s+/g, '_');
}

const YTDLP = 'C:/Users/keyse_pt9dxr4/AppData/Roaming/Python/Python314/Scripts/yt-dlp.exe';

let script = '#!/bin/bash\n';
script += 'DIR="' + OUT + '/videos_youtube"\n';
script += 'mkdir -p "$DIR"\n';
script += 'YTDLP="' + YTDLP + '"\n';
script += 'TOTAL=' + ytVids.length + '\n';
script += 'COUNT=0\nFAIL=0\nSKIP=0\n\n';

ytVids.forEach((v, i) => {
  const fname = safeName(v.name, v.id);
  const url = v.youtubeUrl;
  script += `# ${i+1}/${ytVids.length}\n`;
  script += `if ls "$DIR/${v.id}_"*.mp4 1>/dev/null 2>&1; then\n`;
  script += `  echo "SKIP ${i+1}: ${v.id} exists"; SKIP=$((SKIP+1))\n`;
  script += `else\n`;
  script += `  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/${fname}.mp4" "${url}" --quiet --no-warnings 2>/dev/null && echo "OK ${i+1}/${ytVids.length}: ${fname.substring(0,50)}" || { echo "FAIL ${i+1}: ${fname.substring(0,50)}"; FAIL=$((FAIL+1)); }\n`;
  script += `fi\n`;
  script += `COUNT=$((COUNT+1))\n\n`;
});

script += 'echo "=== YouTube done: $COUNT total, $SKIP skipped, $FAIL failed ==="\n';
fs.writeFileSync(OUT + '/download_youtube.sh', script);
console.log('Generated download_youtube.sh');
