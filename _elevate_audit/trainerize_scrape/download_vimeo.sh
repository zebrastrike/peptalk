#!/bin/bash
DIR="C:/Users/keyse_pt9dxr4/peptalk/_elevate_audit/trainerize_scrape/videos_vimeo"
mkdir -p "$DIR"
TOTAL=262
COUNT=0
FAIL=0

if [ ! -f "$DIR/84_Ab_Roller_Wheel_Abdominal_Roll_Out.mp4" ]; then
  curl -s -L -o "$DIR/84_Ab_Roller_Wheel_Abdominal_Roll_Out.mp4" "https://player.vimeo.com/progressive_redirect/playback/134975414/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=fb4bc576a213b115c925d8ebdb08e76387aeceac0874f41262a474914ee36b5b" && echo "OK 1/262: 84_Ab_Roller_Wheel_Abdominal_Roll_Out" || { echo "FAIL: 84_Ab_Roller_Wheel_Abdominal_Roll_Out"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 1: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6213284_Active_Leg_Lowering_to_Bolster.mp4" ]; then
  curl -s -L -o "$DIR/6213284_Active_Leg_Lowering_to_Bolster.mp4" "https://player.vimeo.com/progressive_redirect/playback/421208526/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ad628f96fdc25a413bc627bf57a1cbb22bc60736a29f5525ed4ee815e748b70a" && echo "OK 2/262: 6213284_Active_Leg_Lowering_to_Bolster" || { echo "FAIL: 6213284_Active_Leg_Lowering_to_Bolster"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 2: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2632_Adductor_Foam_Roller.mp4" ]; then
  curl -s -L -o "$DIR/2632_Adductor_Foam_Roller.mp4" "https://player.vimeo.com/progressive_redirect/playback/250581548/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0d17a5d9a1a4fc669884e44b18d01f48ed144e3a7a279debd585c31bf15b9729" && echo "OK 3/262: 2632_Adductor_Foam_Roller" || { echo "FAIL: 2632_Adductor_Foam_Roller"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 3: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2624_Alternating_Knee_Hug.mp4" ]; then
  curl -s -L -o "$DIR/2624_Alternating_Knee_Hug.mp4" "https://player.vimeo.com/progressive_redirect/playback/250581901/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=abbfa31492391b84708921452e0359a99122fef5fd5cf4b08e4c9cb5ce5ecee0" && echo "OK 4/262: 2624_Alternating_Knee_Hug" || { echo "FAIL: 2624_Alternating_Knee_Hug"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 4: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/495_Around_the_World.mp4" ]; then
  curl -s -L -o "$DIR/495_Around_the_World.mp4" "https://player.vimeo.com/progressive_redirect/playback/169978493/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7ea77abc00898fc3393c17499f47b861f54cec2010edfea946e892e3c44ca6fe" && echo "OK 5/262: 495_Around_the_World" || { echo "FAIL: 495_Around_the_World"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 5: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6219762_Assisted_Leg_Lowering_to_Bolster.mp4" ]; then
  curl -s -L -o "$DIR/6219762_Assisted_Leg_Lowering_to_Bolster.mp4" "https://player.vimeo.com/progressive_redirect/playback/421212066/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=bed9905d3abf6b88bcdab0890644e716f68495d1def2f29ceb425f3b34070c5e" && echo "OK 6/262: 6219762_Assisted_Leg_Lowering_to_Bolster" || { echo "FAIL: 6219762_Assisted_Leg_Lowering_to_Bolster"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 6: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2724_Balance_Board_Elbow_Side_Plank.mp4" ]; then
  curl -s -L -o "$DIR/2724_Balance_Board_Elbow_Side_Plank.mp4" "https://player.vimeo.com/progressive_redirect/playback/288235521/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=481908fa8bf8a4cbe3fc7ed90f0e46ea838bb52dce133daa204a17a7b30df677" && echo "OK 7/262: 2724_Balance_Board_Elbow_Side_Plank" || { echo "FAIL: 2724_Balance_Board_Elbow_Side_Plank"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 7: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/282_Balance_Board_Full_Plank.mp4" ]; then
  curl -s -L -o "$DIR/282_Balance_Board_Full_Plank.mp4" "https://player.vimeo.com/progressive_redirect/playback/288235810/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2fb2238098513d237ad7dd7cfae4b5301eeac69facb8fce6ce772de8aac33239" && echo "OK 8/262: 282_Balance_Board_Full_Plank" || { echo "FAIL: 282_Balance_Board_Full_Plank"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 8: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/290_Balance_Board_Glute_Bridge.mp4" ]; then
  curl -s -L -o "$DIR/290_Balance_Board_Glute_Bridge.mp4" "https://player.vimeo.com/progressive_redirect/playback/288235476/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=888610d28a384317e150a04738cc4c5c9ab52a3ab84561f62ac50ce322d2ac16" && echo "OK 9/262: 290_Balance_Board_Glute_Bridge" || { echo "FAIL: 290_Balance_Board_Glute_Bridge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 9: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/262_Balance_Board_Push_Up.mp4" ]; then
  curl -s -L -o "$DIR/262_Balance_Board_Push_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/288235493/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7c03858a2cc42e0f9d23e50a66e4dfa1f9665e26a6360e71f08796fbc28f6a33" && echo "OK 10/262: 262_Balance_Board_Push_Up" || { echo "FAIL: 262_Balance_Board_Push_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 10: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/287_Balance_Board_Side_Plank.mp4" ]; then
  curl -s -L -o "$DIR/287_Balance_Board_Side_Plank.mp4" "https://player.vimeo.com/progressive_redirect/playback/288235558/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=05679094b5c16563d9ec9b19e831274176a27d995f522f94d076a37e02d5bb14" && echo "OK 11/262: 287_Balance_Board_Side_Plank" || { echo "FAIL: 287_Balance_Board_Side_Plank"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 11: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/291_Balance_Board_Single_Leg_Glute_Bridge.mp4" ]; then
  curl -s -L -o "$DIR/291_Balance_Board_Single_Leg_Glute_Bridge.mp4" "https://player.vimeo.com/progressive_redirect/playback/288235691/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=21aede1be34227da42045db03479b19199b4c8813ed835a674b6081f8ede6554" && echo "OK 12/262: 291_Balance_Board_Single_Leg_Glute_Bridge" || { echo "FAIL: 291_Balance_Board_Single_Leg_Glute_Bridge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 12: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/311_Balance_Board_Single_Leg_Knee_Drive.mp4" ]; then
  curl -s -L -o "$DIR/311_Balance_Board_Single_Leg_Knee_Drive.mp4" "https://player.vimeo.com/progressive_redirect/playback/288240433/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f01ee763a0c91f96c1daefd20d787ea2fe8a5e581b5cd4831f44dd2f428ec766" && echo "OK 13/262: 311_Balance_Board_Single_Leg_Knee_Drive" || { echo "FAIL: 311_Balance_Board_Single_Leg_Knee_Drive"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 13: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/281_Balance_Board_Single_Leg_Standing.mp4" ]; then
  curl -s -L -o "$DIR/281_Balance_Board_Single_Leg_Standing.mp4" "https://player.vimeo.com/progressive_redirect/playback/134823449/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d957195bd7e05114403945283b76e0547a418b950680ccfe8d04f0457567516c" && echo "OK 14/262: 281_Balance_Board_Single_Leg_Standing" || { echo "FAIL: 281_Balance_Board_Single_Leg_Standing"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 14: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/315_Balance_Board_Split_Squat.mp4" ]; then
  curl -s -L -o "$DIR/315_Balance_Board_Split_Squat.mp4" "https://player.vimeo.com/progressive_redirect/playback/288240440/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ddba2fe2c1316c464fdad716ba300fac64a5f6d18e510053635dff0641f45565" && echo "OK 15/262: 315_Balance_Board_Split_Squat" || { echo "FAIL: 315_Balance_Board_Split_Squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 15: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/312_Balance_Board_Squat.mp4" ]; then
  curl -s -L -o "$DIR/312_Balance_Board_Squat.mp4" "https://player.vimeo.com/progressive_redirect/playback/288240432/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d0f5e28e6c77180fe363f1a0c4ef31caa35e238ba02f738ef9d56dcc9a84755c" && echo "OK 16/262: 312_Balance_Board_Squat" || { echo "FAIL: 312_Balance_Board_Squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 16: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/284_Balance_Board_Standing_Hold.mp4" ]; then
  curl -s -L -o "$DIR/284_Balance_Board_Standing_Hold.mp4" "https://player.vimeo.com/progressive_redirect/playback/288244027/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=c1cb18224e1916669331a302ed457f26fd4dd643d3fc8a05520dcecc73b2c8cf" && echo "OK 17/262: 284_Balance_Board_Standing_Hold" || { echo "FAIL: 284_Balance_Board_Standing_Hold"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 17: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/124_Band_Assisted_Chin_Up.mp4" ]; then
  curl -s -L -o "$DIR/124_Band_Assisted_Chin_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/169979764/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7072543c17f2d2f35175af6ead690296d4378b161f881f69f6ad7cbd58fb7c03" && echo "OK 18/262: 124_Band_Assisted_Chin_Up" || { echo "FAIL: 124_Band_Assisted_Chin_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 18: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/566_Band_Assisted_Mid_Grip_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/566_Band_Assisted_Mid_Grip_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/169987635/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=65469cc4bed590e25bcee2508efd5eb0921480e97ce51202de3030124aba0a9b" && echo "OK 19/262: 566_Band_Assisted_Mid_Grip_Pull_Up" || { echo "FAIL: 566_Band_Assisted_Mid_Grip_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 19: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/568_Band_Assisted_Parallel_Grip_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/568_Band_Assisted_Parallel_Grip_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/170144475/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2171e8086c82cd9b63a06bc90322d083c4c5262628e7aa0d428420e8705ff75b" && echo "OK 20/262: 568_Band_Assisted_Parallel_Grip_Pull_Up" || { echo "FAIL: 568_Band_Assisted_Parallel_Grip_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 20: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/565_Band_Assisted_Wide_Grip_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/565_Band_Assisted_Wide_Grip_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/170154186/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=31d5a4dfa806e060938224a2d80b5fe2c9a7dfadc9a3c3aff057c50f7cfc88a1" && echo "OK 21/262: 565_Band_Assisted_Wide_Grip_Pull_Up" || { echo "FAIL: 565_Band_Assisted_Wide_Grip_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 21: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2591_Barbell_21.mp4" ]; then
  curl -s -L -o "$DIR/2591_Barbell_21.mp4" "https://player.vimeo.com/progressive_redirect/playback/244274252/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ad22836b706b64a170b676e52e913d2380b8851ac83e7aeb5e4df89b8f62567b" && echo "OK 22/262: 2591_Barbell_21" || { echo "FAIL: 2591_Barbell_21"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 22: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/443_Barbell_Back_Squat.mp4" ]; then
  curl -s -L -o "$DIR/443_Barbell_Back_Squat.mp4" "https://player.vimeo.com/progressive_redirect/playback/151128582/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=8509ff9767d1ab085ad02d7e844467cd10a2753023e93f93480cccb5916e04f9" && echo "OK 23/262: 443_Barbell_Back_Squat" || { echo "FAIL: 443_Barbell_Back_Squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 23: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/5_Barbell_Behind_Back_Palm_Up_Wrist_Curl.mp4" ]; then
  curl -s -L -o "$DIR/5_Barbell_Behind_Back_Palm_Up_Wrist_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/134997789/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a34ebc10340987d443d020205e643e4f43a7f90c18561ed3d0b11c1389431e00" && echo "OK 24/262: 5_Barbell_Behind_Back_Palm_Up_Wrist_Curl" || { echo "FAIL: 5_Barbell_Behind_Back_Palm_Up_Wrist_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 24: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/143_Barbell_Behind_the_Neck_Overhead_Press.mp4" ]; then
  curl -s -L -o "$DIR/143_Barbell_Behind_the_Neck_Overhead_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/171704936/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=8ae7db6162e3bbb6775defa252055bcb9e069ed17515d31a28c2547bdf198b0c" && echo "OK 25/262: 143_Barbell_Behind_the_Neck_Overhead_Press" || { echo "FAIL: 143_Barbell_Behind_the_Neck_Overhead_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 25: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/24_Barbell_Bench_Press.mp4" ]; then
  curl -s -L -o "$DIR/24_Barbell_Bench_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/134993973/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=06a7fff17d023ab6ce4d82c18b53f6b0aee4dee34aa11dc23bd1844335202a5c" && echo "OK 26/262: 24_Barbell_Bench_Press" || { echo "FAIL: 24_Barbell_Bench_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 26: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/41_Barbell_Close_Grip_Bench_Press.mp4" ]; then
  curl -s -L -o "$DIR/41_Barbell_Close_Grip_Bench_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/134987092/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7080010b4cbcf3add6f9f677b30453691a3b6c9276ba144e205ac8f3b7e8c692" && echo "OK 27/262: 41_Barbell_Close_Grip_Bench_Press" || { echo "FAIL: 41_Barbell_Close_Grip_Bench_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 27: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/59_Barbell_Close_Grip_Preacher_Curl.mp4" ]; then
  curl -s -L -o "$DIR/59_Barbell_Close_Grip_Preacher_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/177345276/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=5aab44889dce80ccff61d9e94391447f6305b0e7a57c59e8a5121775ec0e8d56" && echo "OK 28/262: 59_Barbell_Close_Grip_Preacher_Curl" || { echo "FAIL: 59_Barbell_Close_Grip_Preacher_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 28: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/26_Barbell_Decline_Bench_Press.mp4" ]; then
  curl -s -L -o "$DIR/26_Barbell_Decline_Bench_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/134993244/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=da04a74b4fc0b63c0bba07cb9393d955f25793ac19286a11e2e3542da7ed3bcc" && echo "OK 29/262: 26_Barbell_Decline_Bench_Press" || { echo "FAIL: 26_Barbell_Decline_Bench_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 29: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/388_Barbell_Floor_Glute_Bridge.mp4" ]; then
  curl -s -L -o "$DIR/388_Barbell_Floor_Glute_Bridge.mp4" "https://player.vimeo.com/progressive_redirect/playback/151128243/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2894d6f7ebbdada664b026457f6ec303325667fba95a1e7483450f72e058999b" && echo "OK 30/262: 388_Barbell_Floor_Glute_Bridge" || { echo "FAIL: 388_Barbell_Floor_Glute_Bridge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 30: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/442_Barbell_Front_Squat.mp4" ]; then
  curl -s -L -o "$DIR/442_Barbell_Front_Squat.mp4" "https://player.vimeo.com/progressive_redirect/playback/151140892/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b67e3d36c7c34a2ec28124d1d54bf9aee3f0c01bf17ccf03f5580c46af109d56" && echo "OK 31/262: 442_Barbell_Front_Squat" || { echo "FAIL: 442_Barbell_Front_Squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 31: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/387_Barbell_Hip_Thrust.mp4" ]; then
  curl -s -L -o "$DIR/387_Barbell_Hip_Thrust.mp4" "https://player.vimeo.com/progressive_redirect/playback/151128302/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=dc776a935c357bd5cf43079fc90576f24fedc48b2b9f6e049e14369493c28578" && echo "OK 32/262: 387_Barbell_Hip_Thrust" || { echo "FAIL: 387_Barbell_Hip_Thrust"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 32: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/25_Barbell_Incline_Bench_Press.mp4" ]; then
  curl -s -L -o "$DIR/25_Barbell_Incline_Bench_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/134993918/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=13b8275966cd5e8134aa7a724bcaf2f13482e7a8e1814e7e01a197081eeaa0c1" && echo "OK 33/262: 25_Barbell_Incline_Bench_Press" || { echo "FAIL: 25_Barbell_Incline_Bench_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 33: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/75_Barbell_Incline_Bench_Pull.mp4" ]; then
  curl -s -L -o "$DIR/75_Barbell_Incline_Bench_Pull.mp4" "https://player.vimeo.com/progressive_redirect/playback/171705272/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0252b8834de0ef34e31c83dc209f2d7b2e0ca8b280b454ef9b358615b91f68ef" && echo "OK 34/262: 75_Barbell_Incline_Bench_Pull" || { echo "FAIL: 75_Barbell_Incline_Bench_Pull"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 34: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/338_Barbell_Narrow_Grip_Bicep_Curl.mp4" ]; then
  curl -s -L -o "$DIR/338_Barbell_Narrow_Grip_Bicep_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/150518370/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d1e7096d4ca60647775439efe828662ceeb0127a838392e21bd414bfe16392ac" && echo "OK 35/262: 338_Barbell_Narrow_Grip_Bicep_Curl" || { echo "FAIL: 338_Barbell_Narrow_Grip_Bicep_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 35: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/60_Barbell_Preacher_Curl.mp4" ]; then
  curl -s -L -o "$DIR/60_Barbell_Preacher_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/177345088/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=dc1c3ba5a7111fa697e82f336e934ee2ae1e297b4de1d57195b1f9c32cd1345c" && echo "OK 36/262: 60_Barbell_Preacher_Curl" || { echo "FAIL: 60_Barbell_Preacher_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 36: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/104_Barbell_Rear_Shrug.mp4" ]; then
  curl -s -L -o "$DIR/104_Barbell_Rear_Shrug.mp4" "https://player.vimeo.com/progressive_redirect/playback/151801879/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0a3c7b275e070efca280ec4ecd44c73139df7c5811c94aac920910c4707fc7ac" && echo "OK 37/262: 104_Barbell_Rear_Shrug" || { echo "FAIL: 104_Barbell_Rear_Shrug"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 37: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2627_Barbell_Seated_Shoulder_Press.mp4" ]; then
  curl -s -L -o "$DIR/2627_Barbell_Seated_Shoulder_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/250581586/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=717beb348829cfecec6e19e9f3ef462754627f2e68e759604d91138b9df9fb85" && echo "OK 38/262: 2627_Barbell_Seated_Shoulder_Press" || { echo "FAIL: 2627_Barbell_Seated_Shoulder_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 38: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/103_Barbell_Shrug.mp4" ]; then
  curl -s -L -o "$DIR/103_Barbell_Shrug.mp4" "https://player.vimeo.com/progressive_redirect/playback/135002665/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2b636fae0b4e8806211106105df42b143dae58bb04c11b5e83a911227fc2b8a1" && echo "OK 39/262: 103_Barbell_Shrug" || { echo "FAIL: 103_Barbell_Shrug"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 39: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/88_Barbell_Side_Bend.mp4" ]; then
  curl -s -L -o "$DIR/88_Barbell_Side_Bend.mp4" "https://player.vimeo.com/progressive_redirect/playback/135866250/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=095aaec32f9bd1a49be2848a15fb6c46d2f21e7d14174ea6184f2b779f4d98f5" && echo "OK 40/262: 88_Barbell_Side_Bend" || { echo "FAIL: 88_Barbell_Side_Bend"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 40: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/42_Barbell_Skullcrusher.mp4" ]; then
  curl -s -L -o "$DIR/42_Barbell_Skullcrusher.mp4" "https://player.vimeo.com/progressive_redirect/playback/134987589/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d20afd2f154459a78f893d272b2185c90e693f26697102ced5a6eaba452dae97" && echo "OK 41/262: 42_Barbell_Skullcrusher" || { echo "FAIL: 42_Barbell_Skullcrusher"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 41: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/505_Barbell_Torso_Twist.mp4" ]; then
  curl -s -L -o "$DIR/505_Barbell_Torso_Twist.mp4" "https://player.vimeo.com/progressive_redirect/playback/170146325/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f766f06bbb6f8284ed523c5f973a3c717f8d0a3834233e51042adb31cc295b61" && echo "OK 42/262: 505_Barbell_Torso_Twist" || { echo "FAIL: 505_Barbell_Torso_Twist"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 42: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/337_Barbell_Wide_Grip_Bicep_Curl.mp4" ]; then
  curl -s -L -o "$DIR/337_Barbell_Wide_Grip_Bicep_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/150518665/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b99c5d1691487ae0811575ed442fe1582591bbf864e9e1369ab203d768130b94" && echo "OK 43/262: 337_Barbell_Wide_Grip_Bicep_Curl" || { echo "FAIL: 337_Barbell_Wide_Grip_Bicep_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 43: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2834_Battle_Rope_Alternating_Wave_Side_Lunge.mp4" ]; then
  curl -s -L -o "$DIR/2834_Battle_Rope_Alternating_Wave_Side_Lunge.mp4" "https://player.vimeo.com/progressive_redirect/playback/288235060/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ace4f8b33f9512d470afe7c72a94eb5f86892d17d72ff699e17abd2a9a2b7019" && echo "OK 44/262: 2834_Battle_Rope_Alternating_Wave_Side_Lunge" || { echo "FAIL: 2834_Battle_Rope_Alternating_Wave_Side_Lunge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 44: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2897_Battle_Rope_Single_Arm_Elbow_Plank_Waves.mp4" ]; then
  curl -s -L -o "$DIR/2897_Battle_Rope_Single_Arm_Elbow_Plank_Waves.mp4" "https://player.vimeo.com/progressive_redirect/playback/288235406/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a024c3aac185512ccdee0b7ba2654e5287af5ceb897b43b32d9f984c21458679" && echo "OK 45/262: 2897_Battle_Rope_Single_Arm_Elbow_Plank_Waves" || { echo "FAIL: 2897_Battle_Rope_Single_Arm_Elbow_Plank_Waves"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 45: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2739_BOSU_Dome_Down_Dumbbell_Thruster.mp4" ]; then
  curl -s -L -o "$DIR/2739_BOSU_Dome_Down_Dumbbell_Thruster.mp4" "https://player.vimeo.com/progressive_redirect/playback/288240177/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=c59392da9495c88c2282123d93fc749ec27a1246b6cd87cbe01d10d35abe08e0" && echo "OK 46/262: 2739_BOSU_Dome_Down_Dumbbell_Thruster" || { echo "FAIL: 2739_BOSU_Dome_Down_Dumbbell_Thruster"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 46: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/265_BOSU_Dome_Up_Clapping_Push_Up.mp4" ]; then
  curl -s -L -o "$DIR/265_BOSU_Dome_Up_Clapping_Push_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/288238403/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b7254ba675e39d1b83d6fa54f5798efeb77ca086608e8dd2459ee17f6d7de480" && echo "OK 47/262: 265_BOSU_Dome_Up_Clapping_Push_Up" || { echo "FAIL: 265_BOSU_Dome_Up_Clapping_Push_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 47: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/500_Box_Pistol_Squat.mp4" ]; then
  curl -s -L -o "$DIR/500_Box_Pistol_Squat.mp4" "https://player.vimeo.com/progressive_redirect/playback/170146007/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=60eea55ac08ab4cb99c26ac7d2bd322dac45e63d150b65fd44449e244225deaa" && echo "OK 48/262: 500_Box_Pistol_Squat" || { echo "FAIL: 500_Box_Pistol_Squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 48: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/533_Cable_Bent_Over_Chest_Fly.mp4" ]; then
  curl -s -L -o "$DIR/533_Cable_Bent_Over_Chest_Fly.mp4" "https://player.vimeo.com/progressive_redirect/playback/169981172/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=11c2c54f5357031c0d14cafcf4c30370bd1fa3f95a9a6a755219f520e9a98f84" && echo "OK 49/262: 533_Cable_Bent_Over_Chest_Fly" || { echo "FAIL: 533_Cable_Bent_Over_Chest_Fly"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 49: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/534_Cable_Bent_Over_Row.mp4" ]; then
  curl -s -L -o "$DIR/534_Cable_Bent_Over_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/169981633/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7e94026a9d87f711129ff9b0b9b9c9f12b2b529a50a67829b6fcac1ac1f3c50c" && echo "OK 50/262: 534_Cable_Bent_Over_Row" || { echo "FAIL: 534_Cable_Bent_Over_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 50: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/538_Cable_Flat_Chest_Fly.mp4" ]; then
  curl -s -L -o "$DIR/538_Cable_Flat_Chest_Fly.mp4" "https://player.vimeo.com/progressive_redirect/playback/170001379/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7f88ac24cf93ea7c30bc8b9518fb74ba659913e05d4ee078cbb1c19a26fde649" && echo "OK 51/262: 538_Cable_Flat_Chest_Fly" || { echo "FAIL: 538_Cable_Flat_Chest_Fly"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 51: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/468_Cable_Front_Raise.mp4" ]; then
  curl -s -L -o "$DIR/468_Cable_Front_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/172673721/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=bce0b86036221eabc21ee976154f665c51440c74acf7e0a38f3f4aec95dd202e" && echo "OK 52/262: 468_Cable_Front_Raise" || { echo "FAIL: 468_Cable_Front_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 52: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/535_Cable_Hip_Abduction.mp4" ]; then
  curl -s -L -o "$DIR/535_Cable_Hip_Abduction.mp4" "https://player.vimeo.com/progressive_redirect/playback/169983364/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d2824c18ef4a38663acbed5ca8eea592e3a21f02fbc90bf39b103bdb7d27033a" && echo "OK 53/262: 535_Cable_Hip_Abduction" || { echo "FAIL: 535_Cable_Hip_Abduction"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 53: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/540_Cable_Iron_Cross_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/540_Cable_Iron_Cross_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/170005178/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=59d1cb697b06aa5f61350bcfc0318ba5d5470a3973fbc39cf4894fdc8f651f54" && echo "OK 54/262: 540_Cable_Iron_Cross_Pulldown" || { echo "FAIL: 540_Cable_Iron_Cross_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 54: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/85_Cable_Kneeling_Crunch.mp4" ]; then
  curl -s -L -o "$DIR/85_Cable_Kneeling_Crunch.mp4" "https://player.vimeo.com/progressive_redirect/playback/177345434/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a97dc4421d24f3cc67827a55758d5fbecb0ffc72b7643cdd4c04c536f594cadf" && echo "OK 55/262: 85_Cable_Kneeling_Crunch" || { echo "FAIL: 85_Cable_Kneeling_Crunch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 55: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/246_Cable_Low_to_High_Alternating_Cross_Over.mp4" ]; then
  curl -s -L -o "$DIR/246_Cable_Low_to_High_Alternating_Cross_Over.mp4" "https://player.vimeo.com/progressive_redirect/playback/170009230/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=fb148b23147f5415e3ebf3df8c99ad280b013de9d52de422fded3bf353daa9a8" && echo "OK 56/262: 246_Cable_Low_to_High_Alternating_Cross_Over" || { echo "FAIL: 246_Cable_Low_to_High_Alternating_Cross_Over"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 56: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/586_Cable_Lying_Down_Torso_Twist.mp4" ]; then
  curl -s -L -o "$DIR/586_Cable_Lying_Down_Torso_Twist.mp4" "https://player.vimeo.com/progressive_redirect/playback/178305403/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f77fa8209dadf2b00561cb4472fad9ab1bb0504d16c9ccbda2ce05b922eab551" && echo "OK 57/262: 586_Cable_Lying_Down_Torso_Twist" || { echo "FAIL: 586_Cable_Lying_Down_Torso_Twist"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 57: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/71_Cable_Pullover.mp4" ]; then
  curl -s -L -o "$DIR/71_Cable_Pullover.mp4" "https://player.vimeo.com/progressive_redirect/playback/172673097/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=081d05c9da127fa3c098a3ef83e96f3c9460d21ea389d9506e8b6b70edc1e8ad" && echo "OK 58/262: 71_Cable_Pullover" || { echo "FAIL: 71_Cable_Pullover"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 58: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/474_Cable_Push_Pull.mp4" ]; then
  curl -s -L -o "$DIR/474_Cable_Push_Pull.mp4" "https://player.vimeo.com/progressive_redirect/playback/172674687/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=98f9b47c1172054c9ff073d74148bf7190c0352613ba5344adf3bff65d695176" && echo "OK 59/262: 474_Cable_Push_Pull" || { echo "FAIL: 474_Cable_Push_Pull"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 59: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/45_Cable_Reverse_Grip_Tricep_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/45_Cable_Reverse_Grip_Tricep_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/222960204/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=3ea08ca8dbde96afac398433e102835b8bef2fd2ff8efb3795663e26190ee20f" && echo "OK 60/262: 45_Cable_Reverse_Grip_Tricep_Pulldown" || { echo "FAIL: 45_Cable_Reverse_Grip_Tricep_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 60: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/536_Cable_Rope_Curl.mp4" ]; then
  curl -s -L -o "$DIR/536_Cable_Rope_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/169984011/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=029ba9c73bad12fec0cf8bce6ef637b168be1b1565f40f871072e9a735f5efaf" && echo "OK 61/262: 536_Cable_Rope_Curl" || { echo "FAIL: 536_Cable_Rope_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 61: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/61_Cable_Rope_Hammer_Curl.mp4" ]; then
  curl -s -L -o "$DIR/61_Cable_Rope_Hammer_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/134988986/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=e1277845b538e58b2ea7e969a312b0f100da331d1dc7546116f24d9fddd1505c" && echo "OK 62/262: 61_Cable_Rope_Hammer_Curl" || { echo "FAIL: 61_Cable_Rope_Hammer_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 62: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/514_Cable_Rope_Lying_Down_Curl.mp4" ]; then
  curl -s -L -o "$DIR/514_Cable_Rope_Lying_Down_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/171703173/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=e75348d8b7006b18224686f6165fa670dcbe24de8b93718322eb5adcd0f4a79c" && echo "OK 63/262: 514_Cable_Rope_Lying_Down_Curl" || { echo "FAIL: 514_Cable_Rope_Lying_Down_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 63: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/108_Cable_Rope_Seated_High_Row.mp4" ]; then
  curl -s -L -o "$DIR/108_Cable_Rope_Seated_High_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/171703034/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=29227d8f252bdf9e7eb2a1f4f6d41737e50259ff57037de113b6eac2ee5d1381" && echo "OK 64/262: 108_Cable_Rope_Seated_High_Row" || { echo "FAIL: 108_Cable_Rope_Seated_High_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 64: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/247_Cable_Rope_Tricep_Extension.mp4" ]; then
  curl -s -L -o "$DIR/247_Cable_Rope_Tricep_Extension.mp4" "https://player.vimeo.com/progressive_redirect/playback/134815839/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=42170b0709533e63aec1a83a1613cf72d8fc816245ae5be26a4a929b61e24c77" && echo "OK 65/262: 247_Cable_Rope_Tricep_Extension" || { echo "FAIL: 247_Cable_Rope_Tricep_Extension"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 65: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/76_Cable_Seated_Row.mp4" ]; then
  curl -s -L -o "$DIR/76_Cable_Seated_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/134998929/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=1a10389081425281267ba18442713be82ec8ceeb7b682c49465ebb1f426fbba7" && echo "OK 66/262: 76_Cable_Seated_Row" || { echo "FAIL: 76_Cable_Seated_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 66: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/515_Cable_Seated_Single_Arm_Row.mp4" ]; then
  curl -s -L -o "$DIR/515_Cable_Seated_Single_Arm_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/171703141/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=3cb07dc79dc09b8db7d8923c607da6b76cbba0504d530b68be6f918f64a08260" && echo "OK 67/262: 515_Cable_Seated_Single_Arm_Row" || { echo "FAIL: 515_Cable_Seated_Single_Arm_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 67: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/105_Cable_Shrug.mp4" ]; then
  curl -s -L -o "$DIR/105_Cable_Shrug.mp4" "https://player.vimeo.com/progressive_redirect/playback/172672758/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=99a83c4fa131d596a108f914ca27f4f83f9e912d15cc42e56a425cdd6ae6191f" && echo "OK 68/262: 105_Cable_Shrug" || { echo "FAIL: 105_Cable_Shrug"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 68: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/544_Cable_Single_Arm_Standing_Fly.mp4" ]; then
  curl -s -L -o "$DIR/544_Cable_Single_Arm_Standing_Fly.mp4" "https://player.vimeo.com/progressive_redirect/playback/170140845/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=66f6e6acdbe12e7e1f31bb4fa30a8dff9a165c0800c9edfa1070a78b9d8871a1" && echo "OK 69/262: 544_Cable_Single_Arm_Standing_Fly" || { echo "FAIL: 544_Cable_Single_Arm_Standing_Fly"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 69: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/102_Cable_Single_Leg_Kickback.mp4" ]; then
  curl -s -L -o "$DIR/102_Cable_Single_Leg_Kickback.mp4" "https://player.vimeo.com/progressive_redirect/playback/151135783/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=41c09552c0117456015623b99f08a3cc6db9623244213186ab668501bb3530d0" && echo "OK 70/262: 102_Cable_Single_Leg_Kickback" || { echo "FAIL: 102_Cable_Single_Leg_Kickback"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 70: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/464_Cable_Standing_Close_Row.mp4" ]; then
  curl -s -L -o "$DIR/464_Cable_Standing_Close_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/172676009/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a97e56d343d28cfa731d441ed6f165b4d5e060421e7c2a3d45e92e49c34ea22a" && echo "OK 71/262: 464_Cable_Standing_Close_Row" || { echo "FAIL: 464_Cable_Standing_Close_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 71: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/458_Cable_Standing_Wide_Grip_Row.mp4" ]; then
  curl -s -L -o "$DIR/458_Cable_Standing_Wide_Grip_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/172676386/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d6f393792a76c74187229b716de7284290d429235a33d05fdb19c7ea1f25128e" && echo "OK 72/262: 458_Cable_Standing_Wide_Grip_Row" || { echo "FAIL: 458_Cable_Standing_Wide_Grip_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 72: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/46_Cable_Straight_Bar_Tricep_Pushdown.mp4" ]; then
  curl -s -L -o "$DIR/46_Cable_Straight_Bar_Tricep_Pushdown.mp4" "https://player.vimeo.com/progressive_redirect/playback/172676563/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=271be7a939095eeb0e5dcd04b46a8e9214dd81df0890589f354b7275e9552a75" && echo "OK 73/262: 46_Cable_Straight_Bar_Tricep_Pushdown" || { echo "FAIL: 46_Cable_Straight_Bar_Tricep_Pushdown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 73: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/70_Cable_Underhand_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/70_Cable_Underhand_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/134817289/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d78403b0cd418306f675c58df0f509f3df470125e3d3f2b4447652b23e3291d1" && echo "OK 74/262: 70_Cable_Underhand_Pulldown" || { echo "FAIL: 70_Cable_Underhand_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 74: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/27_Cable_Upper_Crossover.mp4" ]; then
  curl -s -L -o "$DIR/27_Cable_Upper_Crossover.mp4" "https://player.vimeo.com/progressive_redirect/playback/170151259/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=fb1b058db6d3061d9b56ba2e7f4ad62f6b8198aab878d0e89848131a88eed6cb" && echo "OK 75/262: 27_Cable_Upper_Crossover" || { echo "FAIL: 27_Cable_Upper_Crossover"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 75: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/451_Cable_Upright_Row.mp4" ]; then
  curl -s -L -o "$DIR/451_Cable_Upright_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/172677297/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=3b38cc16cd9d5b1467671a563552de7394981356c13e97facb6011e1c0f01c4a" && echo "OK 76/262: 451_Cable_Upright_Row" || { echo "FAIL: 451_Cable_Upright_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 76: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/44_Cable_V-Bar_Overhead_Tricep_Extension.mp4" ]; then
  curl -s -L -o "$DIR/44_Cable_V-Bar_Overhead_Tricep_Extension.mp4" "https://player.vimeo.com/progressive_redirect/playback/172676268/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2abed41959ad1212753290dd7197e3ab8a66a834e04cd1bb97a44e3262c7ab82" && echo "OK 77/262: 44_Cable_V-Bar_Overhead_Tricep_Extension" || { echo "FAIL: 44_Cable_V-Bar_Overhead_Tricep_Extension"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 77: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/439_Chin_Up.mp4" ]; then
  curl -s -L -o "$DIR/439_Chin_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/169985349/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a553d85787d853679c653da85b453b194563eb06133c40fb585f218c8f1e54db" && echo "OK 78/262: 439_Chin_Up" || { echo "FAIL: 439_Chin_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 78: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6223128_Clamshell_with_Twist.mp4" ]; then
  curl -s -L -o "$DIR/6223128_Clamshell_with_Twist.mp4" "https://player.vimeo.com/progressive_redirect/playback/420163746/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f9e57c2de7d4a16bfe8b6eca481d3e305f1982c08fa29dae842b7ce8ee0fd275" && echo "OK 79/262: 6223128_Clamshell_with_Twist" || { echo "FAIL: 6223128_Clamshell_with_Twist"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 79: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6213054_Crocodile_Breathing.mp4" ]; then
  curl -s -L -o "$DIR/6213054_Crocodile_Breathing.mp4" "https://player.vimeo.com/progressive_redirect/playback/420164480/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=377670e3817ad99b6bd243f0f00daae8916c5b49bf4d07840a1f0b7245b7cbeb" && echo "OK 80/262: 6213054_Crocodile_Breathing" || { echo "FAIL: 6213054_Crocodile_Breathing"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 80: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2861_Dip_Machine_Straight_Leg_Raise.mp4" ]; then
  curl -s -L -o "$DIR/2861_Dip_Machine_Straight_Leg_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/288244081/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=45ad008249ac7b247cb2d61400f7d642834bb64b5bbf04c5d4e81973ebfabb52" && echo "OK 81/262: 2861_Dip_Machine_Straight_Leg_Raise" || { echo "FAIL: 2861_Dip_Machine_Straight_Leg_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 81: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/267_Double_BOSU_Dome_Up_Push_Up.mp4" ]; then
  curl -s -L -o "$DIR/267_Double_BOSU_Dome_Up_Push_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/288239870/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=4154f2aefacf47ca86fa56ba89f7e536690e5547159bf55dfe11cd2de05948ad" && echo "OK 82/262: 267_Double_BOSU_Dome_Up_Push_Up" || { echo "FAIL: 267_Double_BOSU_Dome_Up_Push_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 82: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/294_Double_Kettlebell_Alternating_Hang_Clean.mp4" ]; then
  curl -s -L -o "$DIR/294_Double_Kettlebell_Alternating_Hang_Clean.mp4" "https://player.vimeo.com/progressive_redirect/playback/171705602/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=1e91b7e8b25201883afcea4a9d7787ed2176ec084d8f15efe49f36a47cc67cf0" && echo "OK 83/262: 294_Double_Kettlebell_Alternating_Hang_Clean" || { echo "FAIL: 294_Double_Kettlebell_Alternating_Hang_Clean"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 83: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/300_Double_Kettlebell_Racked_Front_Squat.mp4" ]; then
  curl -s -L -o "$DIR/300_Double_Kettlebell_Racked_Front_Squat.mp4" "https://player.vimeo.com/progressive_redirect/playback/171705031/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=372e05366ab9da99279b2141509316bdf416bf753f19ea7e15b349f8fd867ea3" && echo "OK 84/262: 300_Double_Kettlebell_Racked_Front_Squat" || { echo "FAIL: 300_Double_Kettlebell_Racked_Front_Squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 84: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/330_Double_Under.mp4" ]; then
  curl -s -L -o "$DIR/330_Double_Under.mp4" "https://player.vimeo.com/progressive_redirect/playback/150514043/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0e7f28f496d1184d892d7e906d2884dabed92f2ae597fcfc7a0961c2779b1828" && echo "OK 85/262: 330_Double_Under" || { echo "FAIL: 330_Double_Under"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 85: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/5042429_Dowel_Around_the_World.mp4" ]; then
  curl -s -L -o "$DIR/5042429_Dowel_Around_the_World.mp4" "https://player.vimeo.com/progressive_redirect/playback/339634366/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2e00804ba407f90bbf390e55ab6dd2b92e40bfc3116232715c25eb27ed461a3f" && echo "OK 86/262: 5042429_Dowel_Around_the_World" || { echo "FAIL: 5042429_Dowel_Around_the_World"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 86: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/5042441_Dowel_Behind_the_Head_Slides.mp4" ]; then
  curl -s -L -o "$DIR/5042441_Dowel_Behind_the_Head_Slides.mp4" "https://player.vimeo.com/progressive_redirect/playback/339634320/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a08e7bf7f225fa59ce2be812d912db5a299aad3787237a6aa44cd4ccecb1c4ae" && echo "OK 87/262: 5042441_Dowel_Behind_the_Head_Slides" || { echo "FAIL: 5042441_Dowel_Behind_the_Head_Slides"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 87: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/5042461_Dowel_Overhead_Squat.mp4" ]; then
  curl -s -L -o "$DIR/5042461_Dowel_Overhead_Squat.mp4" "https://player.vimeo.com/progressive_redirect/playback/339634260/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b16181a50b84fd52ad277c90c5fe550eeacec7d849b646d9372a864815d17f84" && echo "OK 88/262: 5042461_Dowel_Overhead_Squat" || { echo "FAIL: 5042461_Dowel_Overhead_Squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 88: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/560_Dumbbell_Alternating_Hammer_Preacher_Curl.mp4" ]; then
  curl -s -L -o "$DIR/560_Dumbbell_Alternating_Hammer_Preacher_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/177344995/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=1f8df72b411f4114f114125fc6f5548db2ad59e250a66346aa281482d085a5f8" && echo "OK 89/262: 560_Dumbbell_Alternating_Hammer_Preacher_Curl" || { echo "FAIL: 560_Dumbbell_Alternating_Hammer_Preacher_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 89: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/561_Dumbbell_Alternating_Preacher_Bicep_Curl.mp4" ]; then
  curl -s -L -o "$DIR/561_Dumbbell_Alternating_Preacher_Bicep_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/177344958/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d996395fdffdebc0b5aa099a71fb9689bbdade572b09d7c05faccfaaf214fe3c" && echo "OK 90/262: 561_Dumbbell_Alternating_Preacher_Bicep_Curl" || { echo "FAIL: 561_Dumbbell_Alternating_Preacher_Bicep_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 90: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/600_Dumbbell_Clean_and_Jerk.mp4" ]; then
  curl -s -L -o "$DIR/600_Dumbbell_Clean_and_Jerk.mp4" "https://player.vimeo.com/progressive_redirect/playback/171703554/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=bc1abf2483254ff49116b3e1ac992c621f1fa3739de980491699c66bdc1d9575" && echo "OK 91/262: 600_Dumbbell_Clean_and_Jerk" || { echo "FAIL: 600_Dumbbell_Clean_and_Jerk"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 91: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/563_Dumbbell_Hammer_Preacher_Curl.mp4" ]; then
  curl -s -L -o "$DIR/563_Dumbbell_Hammer_Preacher_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/170000170/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=067277dc9598485ba08b926adad965f204fdff2c210c004b783288cb1ac540c4" && echo "OK 92/262: 563_Dumbbell_Hammer_Preacher_Curl" || { echo "FAIL: 563_Dumbbell_Hammer_Preacher_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 92: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/639_Dumbbell_Internal_Rotation.mp4" ]; then
  curl -s -L -o "$DIR/639_Dumbbell_Internal_Rotation.mp4" "https://player.vimeo.com/progressive_redirect/playback/179672828/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=276a50feff2c842f5b0e8c27d1a715b6d012837930038e21accfd52cec1e58cc" && echo "OK 93/262: 639_Dumbbell_Internal_Rotation" || { echo "FAIL: 639_Dumbbell_Internal_Rotation"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 93: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/526_Dumbbell_Lying_Down_Tricep_Kickback.mp4" ]; then
  curl -s -L -o "$DIR/526_Dumbbell_Lying_Down_Tricep_Kickback.mp4" "https://player.vimeo.com/progressive_redirect/playback/170011832/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=465e4a1405c7f57bb11e1c07524671b9dd86b591fbed65ef38191e1241aabd0c" && echo "OK 94/262: 526_Dumbbell_Lying_Down_Tricep_Kickback" || { echo "FAIL: 526_Dumbbell_Lying_Down_Tricep_Kickback"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 94: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/523_Dumbbell_Lying_Rear_Delt_Raise.mp4" ]; then
  curl -s -L -o "$DIR/523_Dumbbell_Lying_Rear_Delt_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/222961823/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2986f5933cebf904a49c931860ba98454be439f01ea50974145715c7a1576d11" && echo "OK 95/262: 523_Dumbbell_Lying_Rear_Delt_Raise" || { echo "FAIL: 523_Dumbbell_Lying_Rear_Delt_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 95: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/9_Dumbbell_Lying_Rear_Lateral_Raise.mp4" ]; then
  curl -s -L -o "$DIR/9_Dumbbell_Lying_Rear_Lateral_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/250581689/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=e4632482c5f5634e3a07f18625d1986ccd475149e36f06262cb811192c518b2c" && echo "OK 96/262: 9_Dumbbell_Lying_Rear_Lateral_Raise" || { echo "FAIL: 9_Dumbbell_Lying_Rear_Lateral_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 96: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/564_Dumbbell_Single_Arm_Hammer_Preacher_Curl.mp4" ]; then
  curl -s -L -o "$DIR/564_Dumbbell_Single_Arm_Hammer_Preacher_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/177346650/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=6995ed135fe2128b8a555aafbd275792f6e9d97b13a19addef45399fae1cc55e" && echo "OK 97/262: 564_Dumbbell_Single_Arm_Hammer_Preacher_Curl" || { echo "FAIL: 564_Dumbbell_Single_Arm_Hammer_Preacher_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 97: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/53_Dumbbell_Single_Arm_Preacher_Curl.mp4" ]; then
  curl -s -L -o "$DIR/53_Dumbbell_Single_Arm_Preacher_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/177346815/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=57f18747f17580cf886b29b49ffe1d25f672b4098c904ddd4a3c61237ff46b20" && echo "OK 98/262: 53_Dumbbell_Single_Arm_Preacher_Curl" || { echo "FAIL: 53_Dumbbell_Single_Arm_Preacher_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 98: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/530_Dumbbell_Single_Arm_Standing_Shoulder_Press.mp4" ]; then
  curl -s -L -o "$DIR/530_Dumbbell_Single_Arm_Standing_Shoulder_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/170148105/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=333d22e44ce5d4b9c60dcd734ce7ad027b7006bccae64b93d95f73c14027f98e" && echo "OK 99/262: 530_Dumbbell_Single_Arm_Standing_Shoulder_Press" || { echo "FAIL: 530_Dumbbell_Single_Arm_Standing_Shoulder_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 99: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/605_Dumbbell_Squat_Clean_and_Jerk.mp4" ]; then
  curl -s -L -o "$DIR/605_Dumbbell_Squat_Clean_and_Jerk.mp4" "https://player.vimeo.com/progressive_redirect/playback/171703943/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ed84983391fde4bc8fc4711ec073ec05c08c67cd75344c30e778be1a503e51dd" && echo "OK 100/262: 605_Dumbbell_Squat_Clean_and_Jerk" || { echo "FAIL: 605_Dumbbell_Squat_Clean_and_Jerk"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 100: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/606_Dumbbell_Squat_Clean_and_Press.mp4" ]; then
  curl -s -L -o "$DIR/606_Dumbbell_Squat_Clean_and_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/171703975/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=55a4414c0c489957a2316d0bd444ce7b0e2b7f09381fbae563ec51d9b91d4bd1" && echo "OK 101/262: 606_Dumbbell_Squat_Clean_and_Press" || { echo "FAIL: 606_Dumbbell_Squat_Clean_and_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 101: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/608_Dumbbell_Squat_Snatch.mp4" ]; then
  curl -s -L -o "$DIR/608_Dumbbell_Squat_Snatch.mp4" "https://player.vimeo.com/progressive_redirect/playback/171703965/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=9c9aaa9dcf35cf57062fc443023df26b2ce5520c65fd210964f688ce32ede578" && echo "OK 102/262: 608_Dumbbell_Squat_Snatch" || { echo "FAIL: 608_Dumbbell_Squat_Snatch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 102: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/531_Dumbbell_Standing_Alternating_Press.mp4" ]; then
  curl -s -L -o "$DIR/531_Dumbbell_Standing_Alternating_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/170148679/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=6f194bb96de875782b878fa2f5d65219dcda5406244f2f16431b0c3d0356bff4" && echo "OK 103/262: 531_Dumbbell_Standing_Alternating_Press" || { echo "FAIL: 531_Dumbbell_Standing_Alternating_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 103: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245157_Dynamic_Hamstring_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/6245157_Dynamic_Hamstring_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/420175481/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=bb5ed11fba776567bb2c5f9205df987713ad7426f94c663b3d2bcddec4b32e26" && echo "OK 104/262: 6245157_Dynamic_Hamstring_Stretch" || { echo "FAIL: 6245157_Dynamic_Hamstring_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 104: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2652_Dynamic_Rear_Foot_Elevated_Hip_Flexor_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/2652_Dynamic_Rear_Foot_Elevated_Hip_Flexor_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/250581763/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=1d2520a99ae8e50626eb30ec2b8075ba0eb6455b7205fe4a0729c043c7abfaf2" && echo "OK 105/262: 2652_Dynamic_Rear_Foot_Elevated_Hip_Flexor_Stretch" || { echo "FAIL: 2652_Dynamic_Rear_Foot_Elevated_Hip_Flexor_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 105: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2433_EZ_Bar_Preacher_Curl.mp4" ]; then
  curl -s -L -o "$DIR/2433_EZ_Bar_Preacher_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/222961267/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=368a96d048b7e68b0bd6f320d31a2dbf2a09dae49f3ef1dcf0eb49a7b8ed4343" && echo "OK 106/262: 2433_EZ_Bar_Preacher_Curl" || { echo "FAIL: 2433_EZ_Bar_Preacher_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 106: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/509_EZ_Bar_Upright_Row.mp4" ]; then
  curl -s -L -o "$DIR/509_EZ_Bar_Upright_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/169998748/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=fd1c079848721b5596c8b3ed7d8084f4b6f010d7ce71e012d87d2e6196f8147a" && echo "OK 107/262: 509_EZ_Bar_Upright_Row" || { echo "FAIL: 509_EZ_Bar_Upright_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 107: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/393_Flat_Bench_Back_Fly.mp4" ]; then
  curl -s -L -o "$DIR/393_Flat_Bench_Back_Fly.mp4" "https://player.vimeo.com/progressive_redirect/playback/151484559/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f2a73ffae234942c670e52e5435a86ec1cea5e41261c392c4374c45d7ecb411b" && echo "OK 108/262: 393_Flat_Bench_Back_Fly" || { echo "FAIL: 393_Flat_Bench_Back_Fly"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 108: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/289_Floor_Glute_Kickback.mp4" ]; then
  curl -s -L -o "$DIR/289_Floor_Glute_Kickback.mp4" "https://player.vimeo.com/progressive_redirect/playback/171707775/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=cd4928491015cb51812b16bff9ed160ea5cf2f762f16ad2577c8e78d2cdd6942" && echo "OK 109/262: 289_Floor_Glute_Kickback" || { echo "FAIL: 289_Floor_Glute_Kickback"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 109: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/277_Floor_Windshield_Wiper.mp4" ]; then
  curl -s -L -o "$DIR/277_Floor_Windshield_Wiper.mp4" "https://player.vimeo.com/progressive_redirect/playback/171707757/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7c62549cb334adef35c8573360b62d6cfa6afa5978d7985de3377d7d1e5979de" && echo "OK 110/262: 277_Floor_Windshield_Wiper" || { echo "FAIL: 277_Floor_Windshield_Wiper"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 110: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/712_Foam_Roller_Abduction.mp4" ]; then
  curl -s -L -o "$DIR/712_Foam_Roller_Abduction.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082628/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=093b6b28ca4ae6b60f41a23f43e178ba7437d3776977c75aadd67a0e08152637" && echo "OK 111/262: 712_Foam_Roller_Abduction" || { echo "FAIL: 712_Foam_Roller_Abduction"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 111: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/720_Foam_Roller_Alternating_Chest_Press.mp4" ]; then
  curl -s -L -o "$DIR/720_Foam_Roller_Alternating_Chest_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082682/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=6358f043459cf3c9a4e87f3376bdc6ac17f3424146f4126b4cd7d8f881f82200" && echo "OK 112/262: 720_Foam_Roller_Alternating_Chest_Press" || { echo "FAIL: 720_Foam_Roller_Alternating_Chest_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 112: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/704_Foam_Roller_Back.mp4" ]; then
  curl -s -L -o "$DIR/704_Foam_Roller_Back.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082602/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=176a3bd64361ee9ecff899ffb1469045dc875e5d9161a72fb22d08f2a5a637ee" && echo "OK 113/262: 704_Foam_Roller_Back" || { echo "FAIL: 704_Foam_Roller_Back"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 113: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/718_Foam_Roller_Chest_Fly.mp4" ]; then
  curl -s -L -o "$DIR/718_Foam_Roller_Chest_Fly.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082662/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f57c603aee802a49bc6a7e4cf21366f0b4421688cc5a6bc4ce844dcb95430eb1" && echo "OK 114/262: 718_Foam_Roller_Chest_Fly" || { echo "FAIL: 718_Foam_Roller_Chest_Fly"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 114: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/719_Foam_Roller_Chest_Press.mp4" ]; then
  curl -s -L -o "$DIR/719_Foam_Roller_Chest_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082669/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7c13debfb5917019c0ab49f3e255a0d1b5ba7816bdee0a6441fa1aa5142c8b51" && echo "OK 115/262: 719_Foam_Roller_Chest_Press" || { echo "FAIL: 719_Foam_Roller_Chest_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 115: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/714_Foam_Roller_Lower_Back.mp4" ]; then
  curl -s -L -o "$DIR/714_Foam_Roller_Lower_Back.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082634/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=51f81f678eaee77294a4800246c0509517b6e0c905cb08e4408d13723b0cdbaf" && echo "OK 116/262: 714_Foam_Roller_Lower_Back" || { echo "FAIL: 714_Foam_Roller_Lower_Back"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 116: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/715_Foam_Roller_Side_Shin.mp4" ]; then
  curl -s -L -o "$DIR/715_Foam_Roller_Side_Shin.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082640/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a0511a6d4e86301469cee556e190d74d11302b0eadc3f6c2cd6b86459a2aa0a0" && echo "OK 117/262: 715_Foam_Roller_Side_Shin" || { echo "FAIL: 715_Foam_Roller_Side_Shin"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 117: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/721_Foam_Roller_Skullcrusher.mp4" ]; then
  curl -s -L -o "$DIR/721_Foam_Roller_Skullcrusher.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082684/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=37d9780a86720c6477124249e9162ada2e58f475bc9bbb1f28a1ebe04a08115d" && echo "OK 118/262: 721_Foam_Roller_Skullcrusher" || { echo "FAIL: 721_Foam_Roller_Skullcrusher"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 118: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/665_Foam_Roller_Upper_Back.mp4" ]; then
  curl -s -L -o "$DIR/665_Foam_Roller_Upper_Back.mp4" "https://player.vimeo.com/progressive_redirect/playback/179672666/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=3a1a651aad2a4ee216d244bb50642c3f1700ed85e9ecd52e77c31dd6b7805f8b" && echo "OK 119/262: 665_Foam_Roller_Upper_Back" || { echo "FAIL: 665_Foam_Roller_Upper_Back"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 119: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2721_Goose_Step.mp4" ]; then
  curl -s -L -o "$DIR/2721_Goose_Step.mp4" "https://player.vimeo.com/progressive_redirect/playback/286301389/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7595044f9aee95414e18175f7dd3a6779094c00a4e1f1cf16630695caec849a4" && echo "OK 120/262: 2721_Goose_Step" || { echo "FAIL: 2721_Goose_Step"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 120: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/113_Hanging_Leg_Raise.mp4" ]; then
  curl -s -L -o "$DIR/113_Hanging_Leg_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/134977056/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=17e980840e391afb26fbc68df34544f9e784b63f8e7dd2de243721b391cba662" && echo "OK 121/262: 113_Hanging_Leg_Raise" || { echo "FAIL: 113_Hanging_Leg_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 121: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/441_Hanging_Windshield_Wiper.mp4" ]; then
  curl -s -L -o "$DIR/441_Hanging_Windshield_Wiper.mp4" "https://player.vimeo.com/progressive_redirect/playback/151380477/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=9e62a7f7c4d06734518bf78e3c6ddbb2a1586b8d9e3278f9ebdf6ebf7362f83a" && echo "OK 122/262: 441_Hanging_Windshield_Wiper" || { echo "FAIL: 441_Hanging_Windshield_Wiper"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 122: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6213240_Heel_Lift_Skips.mp4" ]; then
  curl -s -L -o "$DIR/6213240_Heel_Lift_Skips.mp4" "https://player.vimeo.com/progressive_redirect/playback/420153888/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2290af39639b280627fabeb2180ca3aa8de416df6b723a048cce7e849f3bce2f" && echo "OK 123/262: 6213240_Heel_Lift_Skips" || { echo "FAIL: 6213240_Heel_Lift_Skips"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 123: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/624_Hollow_Body_Hold.mp4" ]; then
  curl -s -L -o "$DIR/624_Hollow_Body_Hold.mp4" "https://player.vimeo.com/progressive_redirect/playback/171705433/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=711009c611a90a63695b87584c4925143836ac283ed42109b7be1af7c2deb061" && echo "OK 124/262: 624_Hollow_Body_Hold" || { echo "FAIL: 624_Hollow_Body_Hold"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 124: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/81_Hyperextension_Roman_Chair_Back_Extension.mp4" ]; then
  curl -s -L -o "$DIR/81_Hyperextension_Roman_Chair_Back_Extension.mp4" "https://player.vimeo.com/progressive_redirect/playback/169980014/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=de80704e3bc845009b47fc54810a2ffc1511c9f3af412da1fd0edeaea56b72c2" && echo "OK 125/262: 81_Hyperextension_Roman_Chair_Back_Extension" || { echo "FAIL: 81_Hyperextension_Roman_Chair_Back_Extension"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 125: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/142_Inverted_Row.mp4" ]; then
  curl -s -L -o "$DIR/142_Inverted_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/151138419/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=8114cfa6ed694f893bdfab9d9c9a1366a59af178c79f0d82f8e6a911ca1ccbdf" && echo "OK 126/262: 142_Inverted_Row" || { echo "FAIL: 142_Inverted_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 126: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/329_Jumping_Rope.mp4" ]; then
  curl -s -L -o "$DIR/329_Jumping_Rope.mp4" "https://player.vimeo.com/progressive_redirect/playback/150513442/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b13881a6209cea7f3feff05549be16aabf9d6ed7de54d754f5348bd4e5158a82" && echo "OK 127/262: 329_Jumping_Rope" || { echo "FAIL: 329_Jumping_Rope"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 127: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2593_Kettlebell_21.mp4" ]; then
  curl -s -L -o "$DIR/2593_Kettlebell_21.mp4" "https://player.vimeo.com/progressive_redirect/playback/244275227/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=14cfd6b81457839fb5bd8e5c2dac47d91ee683b3d8c3076dba4095525fdb861a" && echo "OK 128/262: 2593_Kettlebell_21" || { echo "FAIL: 2593_Kettlebell_21"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 128: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/250_Kettlebell_Figure_8.mp4" ]; then
  curl -s -L -o "$DIR/250_Kettlebell_Figure_8.mp4" "https://player.vimeo.com/progressive_redirect/playback/134824290/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2753b9afebf497ef190f3c3712ff0cdde35655823383e2f84ac81e8cc5343d55" && echo "OK 129/262: 250_Kettlebell_Figure_8" || { echo "FAIL: 250_Kettlebell_Figure_8"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 129: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/296_Kettlebell_Renegade_Row.mp4" ]; then
  curl -s -L -o "$DIR/296_Kettlebell_Renegade_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/171705796/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2bcde157170eaac07fb28219ffcdccd2ca1891af1a453651eb6afcb768117a0d" && echo "OK 130/262: 296_Kettlebell_Renegade_Row" || { echo "FAIL: 296_Kettlebell_Renegade_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 130: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2426_Kettlebell_Single_Arm_Strict_Press.mp4" ]; then
  curl -s -L -o "$DIR/2426_Kettlebell_Single_Arm_Strict_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/220184250/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=8a4a501b017d4f580075d375c529ffe32a130660546a0296969326675b23ae21" && echo "OK 131/262: 2426_Kettlebell_Single_Arm_Strict_Press" || { echo "FAIL: 2426_Kettlebell_Single_Arm_Strict_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 131: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/525_Kettlebell_Upright_Row.mp4" ]; then
  curl -s -L -o "$DIR/525_Kettlebell_Upright_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/170007619/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=6106a193aaea0e757a2811f28c54a43c86813d9233a57fa7d4667acae056568c" && echo "OK 132/262: 525_Kettlebell_Upright_Row" || { echo "FAIL: 525_Kettlebell_Upright_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 132: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/428_Knee_to_Elbow_Crunch.mp4" ]; then
  curl -s -L -o "$DIR/428_Knee_to_Elbow_Crunch.mp4" "https://player.vimeo.com/progressive_redirect/playback/151139364/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d51eab406a1d52684c08246adcbf9d809f1eef12092e41145de13670631b0967" && echo "OK 133/262: 428_Knee_to_Elbow_Crunch" || { echo "FAIL: 428_Knee_to_Elbow_Crunch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 133: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245264_Lacrosse_Ball_Calf_Release.mp4" ]; then
  curl -s -L -o "$DIR/6245264_Lacrosse_Ball_Calf_Release.mp4" "https://player.vimeo.com/progressive_redirect/playback/420179118/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=8f35c46ba9979c944d3cf9f97884593a9167dd02c30fb4b97fe6319f0177db55" && echo "OK 134/262: 6245264_Lacrosse_Ball_Calf_Release" || { echo "FAIL: 6245264_Lacrosse_Ball_Calf_Release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 134: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245281_Lacrosse_Ball_Glute_Release.mp4" ]; then
  curl -s -L -o "$DIR/6245281_Lacrosse_Ball_Glute_Release.mp4" "https://player.vimeo.com/progressive_redirect/playback/420177058/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d17cea978377ecfc61bf4661abce0dd1b1131e0ea8174db96a602a244d264b5e" && echo "OK 135/262: 6245281_Lacrosse_Ball_Glute_Release" || { echo "FAIL: 6245281_Lacrosse_Ball_Glute_Release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 135: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245294_Lacrosse_Ball_Hamstring_Release.mp4" ]; then
  curl -s -L -o "$DIR/6245294_Lacrosse_Ball_Hamstring_Release.mp4" "https://player.vimeo.com/progressive_redirect/playback/420179702/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ecdc0535ea50848295c9578988444e369d8c0133bde3c4ff140a4c79efab9714" && echo "OK 136/262: 6245294_Lacrosse_Ball_Hamstring_Release" || { echo "FAIL: 6245294_Lacrosse_Ball_Hamstring_Release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 136: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245307_Lacrosse_Ball_Hip_Flexor_Release.mp4" ]; then
  curl -s -L -o "$DIR/6245307_Lacrosse_Ball_Hip_Flexor_Release.mp4" "https://player.vimeo.com/progressive_redirect/playback/420180373/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=58ca2d3015370c839dde61d09cee1852fad06387bf964f15bd9a7721d2608003" && echo "OK 137/262: 6245307_Lacrosse_Ball_Hip_Flexor_Release" || { echo "FAIL: 6245307_Lacrosse_Ball_Hip_Flexor_Release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 137: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245326_Lacrosse_Ball_Lat_Release.mp4" ]; then
  curl -s -L -o "$DIR/6245326_Lacrosse_Ball_Lat_Release.mp4" "https://player.vimeo.com/progressive_redirect/playback/420178059/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=27ce118339d012be9df6d12257c15bc58c45e0cff189b75dbce00b1003db7929" && echo "OK 138/262: 6245326_Lacrosse_Ball_Lat_Release" || { echo "FAIL: 6245326_Lacrosse_Ball_Lat_Release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 138: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245347_Lacrosse_Ball_Neck_Release.mp4" ]; then
  curl -s -L -o "$DIR/6245347_Lacrosse_Ball_Neck_Release.mp4" "https://player.vimeo.com/progressive_redirect/playback/420178549/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0a3dfce4bc6ee1900cacbd981486e51511356291423bd0acc064430823ee6588" && echo "OK 139/262: 6245347_Lacrosse_Ball_Neck_Release" || { echo "FAIL: 6245347_Lacrosse_Ball_Neck_Release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 139: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245369_Lacrosse_Ball_Quad_Release.mp4" ]; then
  curl -s -L -o "$DIR/6245369_Lacrosse_Ball_Quad_Release.mp4" "https://player.vimeo.com/progressive_redirect/playback/420181045/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f6928b2fefc343398a1deebf7e33b262804d2a634d74d45a423f41c9cde85ec5" && echo "OK 140/262: 6245369_Lacrosse_Ball_Quad_Release" || { echo "FAIL: 6245369_Lacrosse_Ball_Quad_Release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 140: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245383_Lacrosse_Ball_Wrist_Extensor_Release.mp4" ]; then
  curl -s -L -o "$DIR/6245383_Lacrosse_Ball_Wrist_Extensor_Release.mp4" "https://player.vimeo.com/progressive_redirect/playback/420183027/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0060ebdf87fae4b3e5bb6b1d3adfa050f6bae5af35d32593bda95b6d5d7b8ee3" && echo "OK 141/262: 6245383_Lacrosse_Ball_Wrist_Extensor_Release" || { echo "FAIL: 6245383_Lacrosse_Ball_Wrist_Extensor_Release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 141: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6245401_Lacrosse_Ball_Wrist_Flexor_Release.mp4" ]; then
  curl -s -L -o "$DIR/6245401_Lacrosse_Ball_Wrist_Flexor_Release.mp4" "https://player.vimeo.com/progressive_redirect/playback/420183617/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=90af88257bd853fae831704d5fb09fc7591cb897668183faf311830b0b6d0e69" && echo "OK 142/262: 6245401_Lacrosse_Ball_Wrist_Flexor_Release" || { echo "FAIL: 6245401_Lacrosse_Ball_Wrist_Flexor_Release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 142: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/396_Landmine_Single_Arm_Shoulder_Press.mp4" ]; then
  curl -s -L -o "$DIR/396_Landmine_Single_Arm_Shoulder_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/151505787/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=1052c52263acc20e6505b2e265f0183cdb7e9135f23bc2da629eed09a2638024" && echo "OK 143/262: 396_Landmine_Single_Arm_Shoulder_Press" || { echo "FAIL: 396_Landmine_Single_Arm_Shoulder_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 143: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/397_Landmine_Split_Squat_to_Single_Arm_Press.mp4" ]; then
  curl -s -L -o "$DIR/397_Landmine_Split_Squat_to_Single_Arm_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/151505664/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=31ae6085cfe12ca0fd72dbb1ec7343e624c823985ecf9883fa798ef828443de0" && echo "OK 144/262: 397_Landmine_Split_Squat_to_Single_Arm_Press" || { echo "FAIL: 397_Landmine_Split_Squat_to_Single_Arm_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 144: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/398_Landmine_Squat_to_Single_Arm_Press.mp4" ]; then
  curl -s -L -o "$DIR/398_Landmine_Squat_to_Single_Arm_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/151505965/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=dfac0814971c1afdf620abdad142180db14ffc79605934991fe1ffd1cb702cc0" && echo "OK 145/262: 398_Landmine_Squat_to_Single_Arm_Press" || { echo "FAIL: 398_Landmine_Squat_to_Single_Arm_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 145: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/395_Landmine_T-Bar_Close_Grip_Row.mp4" ]; then
  curl -s -L -o "$DIR/395_Landmine_T-Bar_Close_Grip_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/151485279/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=1b27c42e994cb675a9ba8d0ef0eee13e77c5cfe27ca9e7afce4cfbc533323c0e" && echo "OK 146/262: 395_Landmine_T-Bar_Close_Grip_Row" || { echo "FAIL: 395_Landmine_T-Bar_Close_Grip_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 146: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/487_Lat_Machine_Parallel_Grip_Row.mp4" ]; then
  curl -s -L -o "$DIR/487_Lat_Machine_Parallel_Grip_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/172673379/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=5663b1b964055080b4e47e3ccf5129b5c77db88a47e18aec6dd318c90976a4a2" && echo "OK 147/262: 487_Lat_Machine_Parallel_Grip_Row" || { echo "FAIL: 487_Lat_Machine_Parallel_Grip_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 147: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/455_Lat_Machine_Single_Arm_Close_Grip_Row.mp4" ]; then
  curl -s -L -o "$DIR/455_Lat_Machine_Single_Arm_Close_Grip_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/172675102/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ca583f12fb9bf45219d7e8b2dbda86cc90a7d40fbd3d49dd03a184b49910001c" && echo "OK 148/262: 455_Lat_Machine_Single_Arm_Close_Grip_Row" || { echo "FAIL: 455_Lat_Machine_Single_Arm_Close_Grip_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 148: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/478_Lat_Machine_Single_Arm_Wide.mp4" ]; then
  curl -s -L -o "$DIR/478_Lat_Machine_Single_Arm_Wide.mp4" "https://player.vimeo.com/progressive_redirect/playback/172674147/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=bf1dd9a0b803b01c78965085fc1fc8c9a81fb4d0ebeae7d2d848a0e510fa1b11" && echo "OK 149/262: 478_Lat_Machine_Single_Arm_Wide" || { echo "FAIL: 478_Lat_Machine_Single_Arm_Wide"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 149: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/466_Lat_Machine_Single_Arm_Wide_Grip.mp4" ]; then
  curl -s -L -o "$DIR/466_Lat_Machine_Single_Arm_Wide_Grip.mp4" "https://player.vimeo.com/progressive_redirect/playback/172675470/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=12feb51dc9eabb88044cca5b2906ba1853a926b2c6494562b4cb824679ee35a8" && echo "OK 150/262: 466_Lat_Machine_Single_Arm_Wide_Grip" || { echo "FAIL: 466_Lat_Machine_Single_Arm_Wide_Grip"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 150: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/477_Lat_Machine_Single_Arm_Wide_Row.mp4" ]; then
  curl -s -L -o "$DIR/477_Lat_Machine_Single_Arm_Wide_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/172674172/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=483289b44c14d1a16a7f4050e6fc154295f8714707879f2c2ae315fd9a434e93" && echo "OK 151/262: 477_Lat_Machine_Single_Arm_Wide_Row" || { echo "FAIL: 477_Lat_Machine_Single_Arm_Wide_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 151: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/454_Lat_Machine_Straight_Arm_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/454_Lat_Machine_Straight_Arm_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/172676570/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=137f2163df46f99b8e864bb054a13a1fec06c36ba1d8d294d9631bcf8af37665" && echo "OK 152/262: 454_Lat_Machine_Straight_Arm_Pulldown" || { echo "FAIL: 454_Lat_Machine_Straight_Arm_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 152: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/447_Leg_Press_Machine_Single_Leg.mp4" ]; then
  curl -s -L -o "$DIR/447_Leg_Press_Machine_Single_Leg.mp4" "https://player.vimeo.com/progressive_redirect/playback/444935057/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7367c872196aab892067ce60037574fa3a49ffb524d9f4d7991f721690741c4c" && echo "OK 153/262: 447_Leg_Press_Machine_Single_Leg" || { echo "FAIL: 447_Leg_Press_Machine_Single_Leg"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 153: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/448_Leg_Press_Machine_Single_Leg_Calf_Raise.mp4" ]; then
  curl -s -L -o "$DIR/448_Leg_Press_Machine_Single_Leg_Calf_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/172675869/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0a7aefe957b4b80d357e3b3ab7e181b59dc6227d3e6ff084895043db05fbfafb" && echo "OK 154/262: 448_Leg_Press_Machine_Single_Leg_Calf_Raise" || { echo "FAIL: 448_Leg_Press_Machine_Single_Leg_Calf_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 154: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2606_Lower_Calf_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/2606_Lower_Calf_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/246689018/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b2d8aabd36e85dc6442ba867872440853c545cdc2f268c2b911063c8b41cdf25" && echo "OK 155/262: 2606_Lower_Calf_Stretch" || { echo "FAIL: 2606_Lower_Calf_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 155: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2636_Lying_Piriformis_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/2636_Lying_Piriformis_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/250581925/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=5e010cc48fcab65f9cf1a947dd2d3e5cef72b9314288a1dbf5be359e60b6ab4b" && echo "OK 156/262: 2636_Lying_Piriformis_Stretch" || { echo "FAIL: 2636_Lying_Piriformis_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 156: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/368_Lying_Single_Leg_Raise.mp4" ]; then
  curl -s -L -o "$DIR/368_Lying_Single_Leg_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/246689030/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=77999767c598ed0dc95695ef97ddfc6e0e3400d25da8ac090d7cfdbe72b9854d" && echo "OK 157/262: 368_Lying_Single_Leg_Raise" || { echo "FAIL: 368_Lying_Single_Leg_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 157: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/123_Machine_Assisted_Dip.mp4" ]; then
  curl -s -L -o "$DIR/123_Machine_Assisted_Dip.mp4" "https://player.vimeo.com/progressive_redirect/playback/270006919/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f2bd3d658a46d3ae13500f7ad0e7c92b6d6d484d4e29dc23435d47d3225d6086" && echo "OK 158/262: 123_Machine_Assisted_Dip" || { echo "FAIL: 123_Machine_Assisted_Dip"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 158: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2693_Machine_Assisted_Parallel_Grip_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/2693_Machine_Assisted_Parallel_Grip_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/444934766/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d75dce42377d5750c87a3f08ddd211716dc6f03ff0a562ebf205a737b56318ec" && echo "OK 159/262: 2693_Machine_Assisted_Parallel_Grip_Pull_Up" || { echo "FAIL: 2693_Machine_Assisted_Parallel_Grip_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 159: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2694_Machine_Assisted_Wide_Grip_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/2694_Machine_Assisted_Wide_Grip_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/444934781/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b122684c2a12d8064b4d2f4b575ae3b6bd2b867e5a26720f3d6cb2af974b07b2" && echo "OK 160/262: 2694_Machine_Assisted_Wide_Grip_Pull_Up" || { echo "FAIL: 2694_Machine_Assisted_Wide_Grip_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 160: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/114_Machine_Incline_Chest_Press.mp4" ]; then
  curl -s -L -o "$DIR/114_Machine_Incline_Chest_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/222961159/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f4d35053a6e0e77e15d04d8ba67dafdd8b0a3951a0b40b30f67abaf08b80dcc6" && echo "OK 161/262: 114_Machine_Incline_Chest_Press" || { echo "FAIL: 114_Machine_Incline_Chest_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 161: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/93_Machine_Lying_Leg_Curl.mp4" ]; then
  curl -s -L -o "$DIR/93_Machine_Lying_Leg_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/222961415/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b9c1b8320d1db511a2a4695e6412d12d237f4f4cde7cf7ef6ce8b413a59c72bb" && echo "OK 162/262: 93_Machine_Lying_Leg_Curl" || { echo "FAIL: 93_Machine_Lying_Leg_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 162: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2432_Machine_Lying_Single_Leg_Curl.mp4" ]; then
  curl -s -L -o "$DIR/2432_Machine_Lying_Single_Leg_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/222960844/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=84a4e932c3f952b49805e3da0aaace39e9ce77e4ef3cbea96f123c7a05daaebf" && echo "OK 163/262: 2432_Machine_Lying_Single_Leg_Curl" || { echo "FAIL: 2432_Machine_Lying_Single_Leg_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 163: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/97_Machine_Seated_Calf_Raise.mp4" ]; then
  curl -s -L -o "$DIR/97_Machine_Seated_Calf_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/220184302/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=62c6152a6f796c268e53609efe0916a5a3d3857f7c96fcb88a39d9b0c0f494be" && echo "OK 164/262: 97_Machine_Seated_Calf_Raise" || { echo "FAIL: 97_Machine_Seated_Calf_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 164: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/676_Machine_Seated_Hip_Adduction.mp4" ]; then
  curl -s -L -o "$DIR/676_Machine_Seated_Hip_Adduction.mp4" "https://player.vimeo.com/progressive_redirect/playback/444935006/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=85b98314cc9f387fd141a82d6bfcbca9f4728049bde9704024ada82b7b8d9f21" && echo "OK 165/262: 676_Machine_Seated_Hip_Adduction" || { echo "FAIL: 676_Machine_Seated_Hip_Adduction"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 165: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/94_Machine_Seated_Leg_Curl.mp4" ]; then
  curl -s -L -o "$DIR/94_Machine_Seated_Leg_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/180752129/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b4321e590e8c5931ddc865e6e41da29f17b90001ecd4bc9e4563bd0df4f4eede" && echo "OK 166/262: 94_Machine_Seated_Leg_Curl" || { echo "FAIL: 94_Machine_Seated_Leg_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 166: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/125_Machine_Seated_Neutral_Grip_Row.mp4" ]; then
  curl -s -L -o "$DIR/125_Machine_Seated_Neutral_Grip_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/180752126/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=aea391ccfe68194f49b9795c0cd3122624895fa1b18d73b1bc5f2d5e2cd3a31d" && echo "OK 167/262: 125_Machine_Seated_Neutral_Grip_Row" || { echo "FAIL: 125_Machine_Seated_Neutral_Grip_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 167: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/680_Machine_Seated_Parallel_Grip_Chest_Press.mp4" ]; then
  curl -s -L -o "$DIR/680_Machine_Seated_Parallel_Grip_Chest_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/180752138/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ba4546a334eef69c22c2be85b7dc440fde23e296277f3f06b38f47ebae3dd6d9" && echo "OK 168/262: 680_Machine_Seated_Parallel_Grip_Chest_Press" || { echo "FAIL: 680_Machine_Seated_Parallel_Grip_Chest_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 168: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/678_Machine_Seated_Parallel_Grip_Shoulder_Press.mp4" ]; then
  curl -s -L -o "$DIR/678_Machine_Seated_Parallel_Grip_Shoulder_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/180752135/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=275a296c65f4661540d1bc5d3e3bb5f6062494a7031da77302283f802b7bbd2a" && echo "OK 169/262: 678_Machine_Seated_Parallel_Grip_Shoulder_Press" || { echo "FAIL: 678_Machine_Seated_Parallel_Grip_Shoulder_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 169: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/674_Machine_Seated_Single_Arm_Bicep_Row.mp4" ]; then
  curl -s -L -o "$DIR/674_Machine_Seated_Single_Arm_Bicep_Row.mp4" "https://player.vimeo.com/progressive_redirect/playback/180752128/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=aaa38a7a303e76857a7ca487d3b7feba66ec7a62faa8fc38aa7d6f623415878f" && echo "OK 170/262: 674_Machine_Seated_Single_Arm_Bicep_Row" || { echo "FAIL: 674_Machine_Seated_Single_Arm_Bicep_Row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 170: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/681_Machine_Seated_Single_Arm_Parallel_Grip_Chest_Press.mp4" ]; then
  curl -s -L -o "$DIR/681_Machine_Seated_Single_Arm_Parallel_Grip_Chest_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/180752139/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=cdd5108aecb57ed6957ddbb4903338f20c7d8ecf8874ef1cd3b0672e0e2a4e1c" && echo "OK 171/262: 681_Machine_Seated_Single_Arm_Parallel_Grip_Chest_Press" || { echo "FAIL: 681_Machine_Seated_Single_Arm_Parallel_Grip_Chest_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 171: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/679_Machine_Seated_Single_Arm_Parallel_Grip_Shoulder_Press.mp4" ]; then
  curl -s -L -o "$DIR/679_Machine_Seated_Single_Arm_Parallel_Grip_Shoulder_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/180752137/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=85896a968f28c252336f18e25d531c4daf872f042c100dec224ff868062db3ff" && echo "OK 172/262: 679_Machine_Seated_Single_Arm_Parallel_Grip_Shoulder_Press" || { echo "FAIL: 679_Machine_Seated_Single_Arm_Parallel_Grip_Shoulder_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 172: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2424_Machine_Seated_Single_Leg_Calf_Raise.mp4" ]; then
  curl -s -L -o "$DIR/2424_Machine_Seated_Single_Leg_Calf_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/220184313/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0f77ea3beab16539c71d8ec91d7489a6e848c930fb42619180bfd9821719f1d7" && echo "OK 173/262: 2424_Machine_Seated_Single_Leg_Calf_Raise" || { echo "FAIL: 2424_Machine_Seated_Single_Leg_Calf_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 173: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/675_Machine_Seated_Single_Leg_Curl.mp4" ]; then
  curl -s -L -o "$DIR/675_Machine_Seated_Single_Leg_Curl.mp4" "https://player.vimeo.com/progressive_redirect/playback/180752132/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=03ec1729d1aa6d0f4b019ec961bdc21b61b079e0433f2d5b233dfaab6581f184" && echo "OK 174/262: 675_Machine_Seated_Single_Leg_Curl" || { echo "FAIL: 675_Machine_Seated_Single_Leg_Curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 174: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/683_Machine_Single_Leg_Extension.mp4" ]; then
  curl -s -L -o "$DIR/683_Machine_Single_Leg_Extension.mp4" "https://player.vimeo.com/progressive_redirect/playback/222960620/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=036ade40eb278212aab540388f49a00296f78828446822974f6d2deed5613bb7" && echo "OK 175/262: 683_Machine_Single_Leg_Extension" || { echo "FAIL: 683_Machine_Single_Leg_Extension"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 175: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6251458_Mini_Band_Backward_Fencing_Walk.mp4" ]; then
  curl -s -L -o "$DIR/6251458_Mini_Band_Backward_Fencing_Walk.mp4" "https://player.vimeo.com/progressive_redirect/playback/420155182/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=fc7ce77a58a007e29943b5e21ddb50b8b25fcfa1a0a10a3167b6781ec051d6a3" && echo "OK 176/262: 6251458_Mini_Band_Backward_Fencing_Walk" || { echo "FAIL: 6251458_Mini_Band_Backward_Fencing_Walk"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 176: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6251475_Mini_Band_Burpee.mp4" ]; then
  curl -s -L -o "$DIR/6251475_Mini_Band_Burpee.mp4" "https://player.vimeo.com/progressive_redirect/playback/420155467/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a0d5414895186ca245f1c4f02b300281a43d7bde6cddbca7ed86c22fedfd28a8" && echo "OK 177/262: 6251475_Mini_Band_Burpee" || { echo "FAIL: 6251475_Mini_Band_Burpee"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 177: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6252775_Mini_Band_Clamshell_Hip_Lift_with_Internal_Rotation.mp4" ]; then
  curl -s -L -o "$DIR/6252775_Mini_Band_Clamshell_Hip_Lift_with_Internal_Rotation.mp4" "https://player.vimeo.com/progressive_redirect/playback/420167502/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=de0c3c87d2e7e978392e436e0f4ce0a4617f92f7e183cf14d1d246642517c63e" && echo "OK 178/262: 6252775_Mini_Band_Clamshell_Hip_Lift_with_Internal_Rotation" || { echo "FAIL: 6252775_Mini_Band_Clamshell_Hip_Lift_with_Internal_Rotation"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 178: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6251514_Mini_Band_Fencer_Walk.mp4" ]; then
  curl -s -L -o "$DIR/6251514_Mini_Band_Fencer_Walk.mp4" "https://player.vimeo.com/progressive_redirect/playback/420155687/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=478313d87513b250b7a607cc3fc8cab0e85636ea532e8387694a1e97f58a6d1c" && echo "OK 179/262: 6251514_Mini_Band_Fencer_Walk" || { echo "FAIL: 6251514_Mini_Band_Fencer_Walk"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 179: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6251684_Mini_Band_Lateral_Hops.mp4" ]; then
  curl -s -L -o "$DIR/6251684_Mini_Band_Lateral_Hops.mp4" "https://player.vimeo.com/progressive_redirect/playback/420169732/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=9fe49b1869690457a98fcd27f7fcd2485a6762e6dfd190d037e8b5f703244d90" && echo "OK 180/262: 6251684_Mini_Band_Lateral_Hops" || { echo "FAIL: 6251684_Mini_Band_Lateral_Hops"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 180: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6251572_Mini_Band_Side_Steps.mp4" ]; then
  curl -s -L -o "$DIR/6251572_Mini_Band_Side_Steps.mp4" "https://player.vimeo.com/progressive_redirect/playback/458767419/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=707e6b6e7f6a394b77d0d4f0f009adf63761c58353024a381319a4c569de0ff4" && echo "OK 181/262: 6251572_Mini_Band_Side_Steps" || { echo "FAIL: 6251572_Mini_Band_Side_Steps"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 181: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6251605_Mini_Band_Squat_Thrust.mp4" ]; then
  curl -s -L -o "$DIR/6251605_Mini_Band_Squat_Thrust.mp4" "https://player.vimeo.com/progressive_redirect/playback/420156284/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=1f2018ea72546e0eed3fda23266bcdafc67a5a898c7b50d4dd08336ee34626c7" && echo "OK 182/262: 6251605_Mini_Band_Squat_Thrust" || { echo "FAIL: 6251605_Mini_Band_Squat_Thrust"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 182: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6252784_Modified_Pretzel.mp4" ]; then
  curl -s -L -o "$DIR/6252784_Modified_Pretzel.mp4" "https://player.vimeo.com/progressive_redirect/playback/420184306/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=61cb7c4d784a3a7f3592dc627f0c1a9b9dc1a42d228e1e9b9b823638373e7d67" && echo "OK 183/262: 6252784_Modified_Pretzel" || { echo "FAIL: 6252784_Modified_Pretzel"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 183: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6252811_Modified_Pretzel_Full_Progression.mp4" ]; then
  curl -s -L -o "$DIR/6252811_Modified_Pretzel_Full_Progression.mp4" "https://player.vimeo.com/progressive_redirect/playback/420184773/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=91b367dd88c99b5deb19dfeddc67982116f5a8e3bd325dc18f6f1e09c461241a" && echo "OK 184/262: 6252811_Modified_Pretzel_Full_Progression" || { echo "FAIL: 6252811_Modified_Pretzel_Full_Progression"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 184: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6252883_Modified_Pretzel_on_Elbows.mp4" ]; then
  curl -s -L -o "$DIR/6252883_Modified_Pretzel_on_Elbows.mp4" "https://player.vimeo.com/progressive_redirect/playback/420465552/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d8e9c4c7966b3b09a7bd1357eff09266030f20622b1eecfa6993445b19a3dfaa" && echo "OK 185/262: 6252883_Modified_Pretzel_on_Elbows" || { echo "FAIL: 6252883_Modified_Pretzel_on_Elbows"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 185: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6252825_Modified_Pretzel_with_Side_Bend.mp4" ]; then
  curl -s -L -o "$DIR/6252825_Modified_Pretzel_with_Side_Bend.mp4" "https://player.vimeo.com/external/420185353.hd.mp4?s=67ba10066ab79380408b7a63218f8aaf527e3640&profile_id=174&oauth2_token_id=89516033" && echo "OK 186/262: 6252825_Modified_Pretzel_with_Side_Bend" || { echo "FAIL: 6252825_Modified_Pretzel_with_Side_Bend"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 186: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/488_Narrow_Grip_Lat_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/488_Narrow_Grip_Lat_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/172673374/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f252baf4af87aba0b111881321b4956f2a9a83e8dfb7a0817d0e547364e64b30" && echo "OK 187/262: 488_Narrow_Grip_Lat_Pulldown" || { echo "FAIL: 488_Narrow_Grip_Lat_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 187: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2874_Overhead_Forward_Sled_Drag.mp4" ]; then
  curl -s -L -o "$DIR/2874_Overhead_Forward_Sled_Drag.mp4" "https://player.vimeo.com/progressive_redirect/playback/288240622/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=cae564bd28c656334a3bfd87a4f8bcd2be23eddf3bc9861e479275989bd670ea" && echo "OK 188/262: 2874_Overhead_Forward_Sled_Drag" || { echo "FAIL: 2874_Overhead_Forward_Sled_Drag"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 188: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/490_Parallel_Grip_Lat_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/490_Parallel_Grip_Lat_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/172673062/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=6b8fbe82e63b0b2494618819f7c18bf9ed765249039f587fdb88303ecf6d0c9a" && echo "OK 189/262: 490_Parallel_Grip_Lat_Pulldown" || { echo "FAIL: 490_Parallel_Grip_Lat_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 189: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/438_Parallel_Grip_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/438_Parallel_Grip_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/151376291/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=3a383acee5af10053a33e764f894ff24081b932913917aa43c35f5397be44374" && echo "OK 190/262: 438_Parallel_Grip_Pull_Up" || { echo "FAIL: 438_Parallel_Grip_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 190: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/499_Pass_Through.mp4" ]; then
  curl -s -L -o "$DIR/499_Pass_Through.mp4" "https://player.vimeo.com/progressive_redirect/playback/170144095/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f7cc9c6c685540eb622334563d32b51d8950bef3331dc82c2fa5551fe6a31fb9" && echo "OK 191/262: 499_Pass_Through" || { echo "FAIL: 499_Pass_Through"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 191: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/502_Pistol_Squat.mp4" ]; then
  curl -s -L -o "$DIR/502_Pistol_Squat.mp4" "https://player.vimeo.com/progressive_redirect/playback/170145038/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a9405457838aab62884b8da40df3f2131dceaea3d1d4861524a54b0a4a353a3f" && echo "OK 192/262: 502_Pistol_Squat" || { echo "FAIL: 502_Pistol_Squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 192: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/501_Pistol_Squat_to_Sit.mp4" ]; then
  curl -s -L -o "$DIR/501_Pistol_Squat_to_Sit.mp4" "https://player.vimeo.com/progressive_redirect/playback/170145030/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=9b42e76bf9dccbc956d824f2379e7f2219d52d4ce5bb3f7f8d9f943a84922714" && echo "OK 193/262: 501_Pistol_Squat_to_Sit" || { echo "FAIL: 501_Pistol_Squat_to_Sit"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 193: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2628_Plate_Floor_Glute_Bridge.mp4" ]; then
  curl -s -L -o "$DIR/2628_Plate_Floor_Glute_Bridge.mp4" "https://player.vimeo.com/progressive_redirect/playback/250581815/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=3c1c574444e6c0d6ea5f8e07d3d7e92ea01a3f929cd6d9990494fafffde8bdc7" && echo "OK 194/262: 2628_Plate_Floor_Glute_Bridge" || { echo "FAIL: 2628_Plate_Floor_Glute_Bridge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 194: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2629_Plate_Hip_Thrust.mp4" ]; then
  curl -s -L -o "$DIR/2629_Plate_Hip_Thrust.mp4" "https://player.vimeo.com/progressive_redirect/playback/250581627/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=77053542db755e7fe329206c74bd38c022a39f20a30532753f3fc624be7994a0" && echo "OK 195/262: 2629_Plate_Hip_Thrust" || { echo "FAIL: 2629_Plate_Hip_Thrust"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 195: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/92_Plate_Russian_Twist.mp4" ]; then
  curl -s -L -o "$DIR/92_Plate_Russian_Twist.mp4" "https://player.vimeo.com/progressive_redirect/playback/151375985/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7543815b7ba009b4df22107871d46c3b69eee9b6f5d2821c6c3ca4c15d0b335c" && echo "OK 196/262: 92_Plate_Russian_Twist" || { echo "FAIL: 92_Plate_Russian_Twist"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 196: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/161_Plate_Weighted_Crunch.mp4" ]; then
  curl -s -L -o "$DIR/161_Plate_Weighted_Crunch.mp4" "https://player.vimeo.com/progressive_redirect/playback/171708885/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ce77f3034340ba8ed6f58733251133619fcdc6f68e5246ab41fa49e2a1cf1574" && echo "OK 197/262: 161_Plate_Weighted_Crunch" || { echo "FAIL: 161_Plate_Weighted_Crunch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 197: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/156_Plate_Weighted_Dip.mp4" ]; then
  curl -s -L -o "$DIR/156_Plate_Weighted_Dip.mp4" "https://player.vimeo.com/progressive_redirect/playback/151380929/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=de5ac3744de0134a851da06c59a59e8f5a21624ee61b8aa53e001cec743a2aba" && echo "OK 198/262: 156_Plate_Weighted_Dip" || { echo "FAIL: 156_Plate_Weighted_Dip"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 198: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/157_Plate_Weighted_Wide_Grip_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/157_Plate_Weighted_Wide_Grip_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/134820227/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=83eed9fc2c22ff7b0f5c95e9a077c3197a494c2ddffa506ecadfba2f73e4596f" && echo "OK 199/262: 157_Plate_Weighted_Wide_Grip_Pull_Up" || { echo "FAIL: 157_Plate_Weighted_Wide_Grip_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 199: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/437_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/437_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/151137157/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0065ddf2a28bf088fc7c7d6de3a58a56b874505997ae8e94f2d22b434b69f16a" && echo "OK 200/262: 437_Pull_Up" || { echo "FAIL: 437_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 200: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/73_Rear_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/73_Rear_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/134998440/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=5de286abfe4f5dc2ab29981f1348314393cebe38abc63c98fc9e3245c9506de1" && echo "OK 201/262: 73_Rear_Pull_Up" || { echo "FAIL: 73_Rear_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 201: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/503_Reverse_Dislocates.mp4" ]; then
  curl -s -L -o "$DIR/503_Reverse_Dislocates.mp4" "https://player.vimeo.com/progressive_redirect/playback/170145484/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=944142fd881514e12a5ef109d39ec8d7113d7cb3518543ac646f19134a2f0897" && echo "OK 202/262: 503_Reverse_Dislocates" || { echo "FAIL: 503_Reverse_Dislocates"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 202: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/129_Roman_Chair_Side_Bend.mp4" ]; then
  curl -s -L -o "$DIR/129_Roman_Chair_Side_Bend.mp4" "https://player.vimeo.com/progressive_redirect/playback/170147396/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=09b93ae3f07801981ed7bdf8a080c1607276f7735e8086df8add03c6fbdf703a" && echo "OK 203/262: 129_Roman_Chair_Side_Bend" || { echo "FAIL: 129_Roman_Chair_Side_Bend"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 203: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/504_Roman_Chair_with_a_Plate_Twist.mp4" ]; then
  curl -s -L -o "$DIR/504_Roman_Chair_with_a_Plate_Twist.mp4" "https://player.vimeo.com/progressive_redirect/playback/170146183/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=16c8739af6176d45ffe34055b4813b005875ac815fcd4332fc36d17abdf317f5" && echo "OK 204/262: 504_Roman_Chair_with_a_Plate_Twist" || { echo "FAIL: 504_Roman_Chair_with_a_Plate_Twist"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 204: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2851_Sandbag_Single_Arm_Shouldering.mp4" ]; then
  curl -s -L -o "$DIR/2851_Sandbag_Single_Arm_Shouldering.mp4" "https://player.vimeo.com/progressive_redirect/playback/288243466/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=232f39896df8aeb75219eeeb5749bf81165f98453148e61cab4570b4d9544a20" && echo "OK 205/262: 2851_Sandbag_Single_Arm_Shouldering" || { echo "FAIL: 2851_Sandbag_Single_Arm_Shouldering"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 205: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2858_Sandbag_Step_Up.mp4" ]; then
  curl -s -L -o "$DIR/2858_Sandbag_Step_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/288242691/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=c308a70df3b2e0c8a54fb5129e044a05eab5cf3aca43985fe617cc8260f89222" && echo "OK 206/262: 2858_Sandbag_Step_Up" || { echo "FAIL: 2858_Sandbag_Step_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 206: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2610_Seated_Piriformis_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/2610_Seated_Piriformis_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/246689065/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0778b5ad52b57a2b159a4aade9ede5d1b29e827e41e3c24b870193987dfb0400" && echo "OK 207/262: 2610_Seated_Piriformis_Stretch" || { echo "FAIL: 2610_Seated_Piriformis_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 207: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/383_Seated_Reverse_Fly.mp4" ]; then
  curl -s -L -o "$DIR/383_Seated_Reverse_Fly.mp4" "https://player.vimeo.com/progressive_redirect/playback/151124051/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f65b9676c539e2db3417e5fccef0f886db93064b2d3f74a20b0bc233c6da9e23" && echo "OK 208/262: 383_Seated_Reverse_Fly" || { echo "FAIL: 383_Seated_Reverse_Fly"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 208: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/493_Single_Arm_Neutral_Grip_Lat_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/493_Single_Arm_Neutral_Grip_Lat_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/172675102/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ca583f12fb9bf45219d7e8b2dbda86cc90a7d40fbd3d49dd03a184b49910001c" && echo "OK 209/262: 493_Single_Arm_Neutral_Grip_Lat_Pulldown" || { echo "FAIL: 493_Single_Arm_Neutral_Grip_Lat_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 209: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/492_Single_Arm_Wide_Grip_Lat_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/492_Single_Arm_Wide_Grip_Lat_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/172675592/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=9e8c0010bb44bceac4b42ee5b60fb4c558ed2cdb1eec652c59002396c4e7c567" && echo "OK 210/262: 492_Single_Arm_Wide_Grip_Lat_Pulldown" || { echo "FAIL: 492_Single_Arm_Wide_Grip_Lat_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 210: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2895_Sled_Drag_Isometric_Chest_Fly.mp4" ]; then
  curl -s -L -o "$DIR/2895_Sled_Drag_Isometric_Chest_Fly.mp4" "https://player.vimeo.com/progressive_redirect/playback/288240534/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=8b4e077fd0b7a0e7bb8731d2c45153ccf3cb9cd00ff80c554b31aa2e917584e3" && echo "OK 211/262: 2895_Sled_Drag_Isometric_Chest_Fly" || { echo "FAIL: 2895_Sled_Drag_Isometric_Chest_Fly"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 211: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2899_Sled_Reverse_Isometric_Fly_Drag.mp4" ]; then
  curl -s -L -o "$DIR/2899_Sled_Reverse_Isometric_Fly_Drag.mp4" "https://player.vimeo.com/progressive_redirect/playback/288240875/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=73fe60e222d6cc90b66c7a473bfc8d5d47345a2303d050a02863e5a74f91eb89" && echo "OK 212/262: 2899_Sled_Reverse_Isometric_Fly_Drag" || { echo "FAIL: 2899_Sled_Reverse_Isometric_Fly_Drag"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 212: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2548_Slider_Atomic_Push_Up_With_Band.mp4" ]; then
  curl -s -L -o "$DIR/2548_Slider_Atomic_Push_Up_With_Band.mp4" "https://player.vimeo.com/progressive_redirect/playback/224343423/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=8dcc880511de3ada274487a0b1a33236b6cbe2236d3fb1b6b482db3c953d0cfb" && echo "OK 213/262: 2548_Slider_Atomic_Push_Up_With_Band" || { echo "FAIL: 2548_Slider_Atomic_Push_Up_With_Band"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 213: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2546_Slider_Banded_Tuck.mp4" ]; then
  curl -s -L -o "$DIR/2546_Slider_Banded_Tuck.mp4" "https://player.vimeo.com/progressive_redirect/playback/224341872/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0bf61cf244e5e6bc1f82612096c650aaa487d6df7ff6aad12d77e6e881eeb45c" && echo "OK 214/262: 2546_Slider_Banded_Tuck" || { echo "FAIL: 2546_Slider_Banded_Tuck"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 214: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2532_Slider_Lunge_with_Medicine_Ball_Overhead_Press.mp4" ]; then
  curl -s -L -o "$DIR/2532_Slider_Lunge_with_Medicine_Ball_Overhead_Press.mp4" "https://player.vimeo.com/progressive_redirect/playback/224338825/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2d8cc0e95b7f6c8ca4119faaf8ed4548b0c848a525cb2f6bf25ef8e8298f9a98" && echo "OK 215/262: 2532_Slider_Lunge_with_Medicine_Ball_Overhead_Press" || { echo "FAIL: 2532_Slider_Lunge_with_Medicine_Ball_Overhead_Press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 215: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2555_Slider_Mountain_Climbers.mp4" ]; then
  curl -s -L -o "$DIR/2555_Slider_Mountain_Climbers.mp4" "https://player.vimeo.com/progressive_redirect/playback/225260541/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=65c944c661328490b395d6e54e3e4d73c17c3b310b74e116780e87f718da8b2e" && echo "OK 216/262: 2555_Slider_Mountain_Climbers" || { echo "FAIL: 2555_Slider_Mountain_Climbers"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 216: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2534_Slider_Side_Lunge.mp4" ]; then
  curl -s -L -o "$DIR/2534_Slider_Side_Lunge.mp4" "https://player.vimeo.com/progressive_redirect/playback/224339227/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=c94122977f42d05d214242bbebd5eba0688f591e72e152ff0791011404f5e98e" && echo "OK 217/262: 2534_Slider_Side_Lunge" || { echo "FAIL: 2534_Slider_Side_Lunge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 217: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2533_Slider_Side_Lunge_with_Medicine_Ball_Reach.mp4" ]; then
  curl -s -L -o "$DIR/2533_Slider_Side_Lunge_with_Medicine_Ball_Reach.mp4" "https://player.vimeo.com/progressive_redirect/playback/224338783/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0ac7a852bcdef06c10dd8dea1a2603751937c6191659ac2e79d093cf2fefa12f" && echo "OK 218/262: 2533_Slider_Side_Lunge_with_Medicine_Ball_Reach" || { echo "FAIL: 2533_Slider_Side_Lunge_with_Medicine_Ball_Reach"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 218: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2547_Slider_Single_Leg_Tuck_With_Band.mp4" ]; then
  curl -s -L -o "$DIR/2547_Slider_Single_Leg_Tuck_With_Band.mp4" "https://player.vimeo.com/progressive_redirect/playback/224342207/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a60b25228dc3161c89fae2f860791a23f7191b04d8487e2287d38da7c60b63d3" && echo "OK 219/262: 2547_Slider_Single_Leg_Tuck_With_Band" || { echo "FAIL: 2547_Slider_Single_Leg_Tuck_With_Band"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 219: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2535_Slider_Skier.mp4" ]; then
  curl -s -L -o "$DIR/2535_Slider_Skier.mp4" "https://player.vimeo.com/progressive_redirect/playback/224339222/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=74e5e674f1e4604473a2821e558a5b2ebf65ebdb4ef840da532349476e94fef6" && echo "OK 220/262: 2535_Slider_Skier" || { echo "FAIL: 2535_Slider_Skier"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 220: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2554_Slider_Walk_Out_With_Band.mp4" ]; then
  curl -s -L -o "$DIR/2554_Slider_Walk_Out_With_Band.mp4" "https://player.vimeo.com/progressive_redirect/playback/225259737/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=25c458e2578e57752384a1bc132de1837438a76a54f7b4529cafc61fabd76a9e" && echo "OK 221/262: 2554_Slider_Walk_Out_With_Band" || { echo "FAIL: 2554_Slider_Walk_Out_With_Band"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 221: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/694_Spiderman_Push_Up.mp4" ]; then
  curl -s -L -o "$DIR/694_Spiderman_Push_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082386/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=995c851eb53c8ee0fabf15836ba996f0b814dce2a3f126eeff1ce19ed155d690" && echo "OK 222/262: 694_Spiderman_Push_Up" || { echo "FAIL: 694_Spiderman_Push_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 222: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2697_Stability_Ball_Bent_Knee_Glute_Bridge.mp4" ]; then
  curl -s -L -o "$DIR/2697_Stability_Ball_Bent_Knee_Glute_Bridge.mp4" "https://player.vimeo.com/progressive_redirect/playback/288235461/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2c7a2171964082a9b7c896766436e19cf07ad3c52062203bed39bab684919d4b" && echo "OK 223/262: 2697_Stability_Ball_Bent_Knee_Glute_Bridge" || { echo "FAIL: 2697_Stability_Ball_Bent_Knee_Glute_Bridge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 223: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/728_Stability_Ball_Straight_Leg_Roll_Out.mp4" ]; then
  curl -s -L -o "$DIR/728_Stability_Ball_Straight_Leg_Roll_Out.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082813/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=321f2d1034357bdedf85dd681aa51552b7f96103189e7ebe1f4045e07e2f1c1a" && echo "OK 224/262: 728_Stability_Ball_Straight_Leg_Roll_Out" || { echo "FAIL: 728_Stability_Ball_Straight_Leg_Roll_Out"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 224: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2625_Standing_Piriformis_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/2625_Standing_Piriformis_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/250582123/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=1207176fee05cd42bc00926dcbba1046d1696c961b3fea51ddf81d1472ae75b9" && echo "OK 225/262: 2625_Standing_Piriformis_Stretch" || { echo "FAIL: 2625_Standing_Piriformis_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 225: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2644_Static_Frog_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/2644_Static_Frog_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/250582136/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=fc0365c3772849e02e11ad08abf8eaaa2712939296191397567991f33239065c" && echo "OK 226/262: 2644_Static_Frog_Stretch" || { echo "FAIL: 2644_Static_Frog_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 226: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/5042399_Static_Overhead_Reach_with_Thoracic_Extension.mp4" ]; then
  curl -s -L -o "$DIR/5042399_Static_Overhead_Reach_with_Thoracic_Extension.mp4" "https://player.vimeo.com/progressive_redirect/playback/339634529/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2f2f28d9342c4c834efa8beb7af34209e88081ec88320231d58ab148345f0b22" && echo "OK 227/262: 5042399_Static_Overhead_Reach_with_Thoracic_Extension" || { echo "FAIL: 5042399_Static_Overhead_Reach_with_Thoracic_Extension"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 227: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/357_Straight_Leg_Kickback.mp4" ]; then
  curl -s -L -o "$DIR/357_Straight_Leg_Kickback.mp4" "https://player.vimeo.com/progressive_redirect/playback/151126226/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=43ba58501751f0c261d4ca548eb275d0e39827b8bc7ed4364d2222d08a42c12c" && echo "OK 228/262: 357_Straight_Leg_Kickback" || { echo "FAIL: 357_Straight_Leg_Kickback"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 228: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/440_Strict_Knees_To_Elbows.mp4" ]; then
  curl -s -L -o "$DIR/440_Strict_Knees_To_Elbows.mp4" "https://player.vimeo.com/progressive_redirect/playback/151137577/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=faeb2467fa3355f0ca97c1a8ae86de990b51135d0f4096e2f65e2f6072734ffe" && echo "OK 229/262: 440_Strict_Knees_To_Elbows" || { echo "FAIL: 440_Strict_Knees_To_Elbows"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 229: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/375_Superman.mp4" ]; then
  curl -s -L -o "$DIR/375_Superman.mp4" "https://player.vimeo.com/progressive_redirect/playback/151126938/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f90dda18a5dfc8fad4ca2a1cc1fe6bdd0bf3657a81a5204868f5ba05c73d2e40" && echo "OK 230/262: 375_Superman" || { echo "FAIL: 375_Superman"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 230: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6223275_Supine_Chin_Tucks.mp4" ]; then
  curl -s -L -o "$DIR/6223275_Supine_Chin_Tucks.mp4" "https://player.vimeo.com/progressive_redirect/playback/420165887/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=372156196dcdb7bccfc07fc1202c42083e2d1d889fe338b63d8fd3a38eca6364" && echo "OK 231/262: 6223275_Supine_Chin_Tucks" || { echo "FAIL: 6223275_Supine_Chin_Tucks"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 231: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2513_Suspension_Body_Saw_on_Hand.mp4" ]; then
  curl -s -L -o "$DIR/2513_Suspension_Body_Saw_on_Hand.mp4" "https://player.vimeo.com/progressive_redirect/playback/223601573/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=94b78e7ab7228b38de5aae486942686bbd257ebc08a6f4e66cca7863f864165b" && echo "OK 232/262: 2513_Suspension_Body_Saw_on_Hand" || { echo "FAIL: 2513_Suspension_Body_Saw_on_Hand"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 232: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2515_Suspension_Body_Saw_with_Crunch_from_Elbow.mp4" ]; then
  curl -s -L -o "$DIR/2515_Suspension_Body_Saw_with_Crunch_from_Elbow.mp4" "https://player.vimeo.com/progressive_redirect/playback/223603071/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=97877799a1c340810e62740df41e976c3bd1aa66beae5c9544a4b913b13b727c" && echo "OK 233/262: 2515_Suspension_Body_Saw_with_Crunch_from_Elbow" || { echo "FAIL: 2515_Suspension_Body_Saw_with_Crunch_from_Elbow"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 233: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2516_Suspension_Body_Saw_with_Crunch_from_Hand.mp4" ]; then
  curl -s -L -o "$DIR/2516_Suspension_Body_Saw_with_Crunch_from_Hand.mp4" "https://player.vimeo.com/progressive_redirect/playback/223603315/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=6c4aaf8268b25b34968cf853b1dce07521d0ef532560356bcfb48834043386c2" && echo "OK 234/262: 2516_Suspension_Body_Saw_with_Crunch_from_Hand" || { echo "FAIL: 2516_Suspension_Body_Saw_with_Crunch_from_Hand"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 234: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2525_Suspension_Crunch_From_Forearm.mp4" ]; then
  curl -s -L -o "$DIR/2525_Suspension_Crunch_From_Forearm.mp4" "https://player.vimeo.com/external/224337341.hd.mp4?s=e1501e54c8e22ef14d72c36274ecdbe59f7cc47a&profile_id=174&oauth2_token_id=89516033" && echo "OK 235/262: 2525_Suspension_Crunch_From_Forearm" || { echo "FAIL: 2525_Suspension_Crunch_From_Forearm"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 235: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2526_Suspension_Crunch_From_Hand.mp4" ]; then
  curl -s -L -o "$DIR/2526_Suspension_Crunch_From_Hand.mp4" "https://player.vimeo.com/progressive_redirect/playback/224337320/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d251fe35245cefb0d4e68cba5c6b4f0886b6031c09a6fc1fc17debd121a517e4" && echo "OK 236/262: 2526_Suspension_Crunch_From_Hand" || { echo "FAIL: 2526_Suspension_Crunch_From_Hand"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 236: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2524_Suspension_Full_Plank_From_Hand.mp4" ]; then
  curl -s -L -o "$DIR/2524_Suspension_Full_Plank_From_Hand.mp4" "https://player.vimeo.com/progressive_redirect/playback/224337133/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=f7725b4bc93368e7e6bed08a93155ad3301b5277592a28f5fb56421e2f71a240" && echo "OK 237/262: 2524_Suspension_Full_Plank_From_Hand" || { echo "FAIL: 2524_Suspension_Full_Plank_From_Hand"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 237: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2522_Suspension_Knee_Tuck.mp4" ]; then
  curl -s -L -o "$DIR/2522_Suspension_Knee_Tuck.mp4" "https://player.vimeo.com/progressive_redirect/playback/224336761/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=c424e511a3ca5c9114ae160632767cb2394f4859f6130faa42602444df127fe6" && echo "OK 238/262: 2522_Suspension_Knee_Tuck" || { echo "FAIL: 2522_Suspension_Knee_Tuck"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 238: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2572_Suspension_Low_Back_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/2572_Suspension_Low_Back_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/225409152/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=2b23d810e9df36dcb2763e92238b015dc5982d370daaf9bd4d9e7dcb0e62fe8c" && echo "OK 239/262: 2572_Suspension_Low_Back_Stretch" || { echo "FAIL: 2572_Suspension_Low_Back_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 239: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2571_Suspension_Oblique_Atomic_Push_Up.mp4" ]; then
  curl -s -L -o "$DIR/2571_Suspension_Oblique_Atomic_Push_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/225410190/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=045b6f87ab7edecf41fe3b876bfa6015e845e4ebf7b427669eccca06ae5b2849" && echo "OK 240/262: 2571_Suspension_Oblique_Atomic_Push_Up" || { echo "FAIL: 2571_Suspension_Oblique_Atomic_Push_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 240: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2569_Suspension_Pendulum.mp4" ]; then
  curl -s -L -o "$DIR/2569_Suspension_Pendulum.mp4" "https://player.vimeo.com/progressive_redirect/playback/225408345/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=e054a889f49d51ba3ffa33d6d53e05a210bf5d742874c25b8a68b67b34e5f161" && echo "OK 241/262: 2569_Suspension_Pendulum" || { echo "FAIL: 2569_Suspension_Pendulum"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 241: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2493_Suspension_Reverse_Lunge.mp4" ]; then
  curl -s -L -o "$DIR/2493_Suspension_Reverse_Lunge.mp4" "https://player.vimeo.com/progressive_redirect/playback/223015332/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=35c03d3b70391b560919283f509e76c6bc3d18be711a0a28de002707ea298a17" && echo "OK 242/262: 2493_Suspension_Reverse_Lunge" || { echo "FAIL: 2493_Suspension_Reverse_Lunge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 242: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2518_Suspension_Side_Elbow_Plank_with_Rotation.mp4" ]; then
  curl -s -L -o "$DIR/2518_Suspension_Side_Elbow_Plank_with_Rotation.mp4" "https://player.vimeo.com/progressive_redirect/playback/224335944/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=e7631006a896008d06e47a51e6eee3603c51d0ef3fcad40466053d0b0f28b289" && echo "OK 243/262: 2518_Suspension_Side_Elbow_Plank_with_Rotation" || { echo "FAIL: 2518_Suspension_Side_Elbow_Plank_with_Rotation"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 243: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2519_Suspension_Side_Full_Plank.mp4" ]; then
  curl -s -L -o "$DIR/2519_Suspension_Side_Full_Plank.mp4" "https://player.vimeo.com/progressive_redirect/playback/224335942/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=584d8566dec5e57d8ad8051cb3c9011c35ceb8192e13faac954e371b5b85bccd" && echo "OK 244/262: 2519_Suspension_Side_Full_Plank" || { echo "FAIL: 2519_Suspension_Side_Full_Plank"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 244: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2578_Suspension_Standing_Figure_Four_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/2578_Suspension_Standing_Figure_Four_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/225413738/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=b1b3de44240d435d5e27c331547f60b60e8615fb1d2e2d554d97ba50973169e2" && echo "OK 245/262: 2578_Suspension_Standing_Figure_Four_Stretch" || { echo "FAIL: 2578_Suspension_Standing_Figure_Four_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 245: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2511_Suspension_Straight_Leg_Raise.mp4" ]; then
  curl -s -L -o "$DIR/2511_Suspension_Straight_Leg_Raise.mp4" "https://player.vimeo.com/progressive_redirect/playback/223602056/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0742a521811d800f5e4bb0ed0580310c02ddc4ca5606dd9b834426f6c6628af3" && echo "OK 246/262: 2511_Suspension_Straight_Leg_Raise" || { echo "FAIL: 2511_Suspension_Straight_Leg_Raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 246: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2529_Suspension_Wide_Mountain_Climber.mp4" ]; then
  curl -s -L -o "$DIR/2529_Suspension_Wide_Mountain_Climber.mp4" "https://player.vimeo.com/progressive_redirect/playback/224337965/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=8b1222336cffd43bf9bf2f9c7891c61ae29ba97fe1c18b7830ed7324bff6969a" && echo "OK 247/262: 2529_Suspension_Wide_Mountain_Climber" || { echo "FAIL: 2529_Suspension_Wide_Mountain_Climber"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 247: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2476_Suspension_Y_Delt_Fly.mp4" ]; then
  curl -s -L -o "$DIR/2476_Suspension_Y_Delt_Fly.mp4" "https://player.vimeo.com/progressive_redirect/playback/222976018/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=704227fa148c40556f8057f259e6c5a8d9d8c5db8c7a5eaeb446dce877ed547d" && echo "OK 248/262: 2476_Suspension_Y_Delt_Fly" || { echo "FAIL: 2476_Suspension_Y_Delt_Fly"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 248: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2645_T_Push_Up.mp4" ]; then
  curl -s -L -o "$DIR/2645_T_Push_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/250582194/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=e35aa1d1495495027bcc5cb6411228233ee73e13fc5cb31c212854829d6ae51b" && echo "OK 249/262: 2645_T_Push_Up" || { echo "FAIL: 2645_T_Push_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 249: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2614_Trap_Bar_Deadlift.mp4" ]; then
  curl -s -L -o "$DIR/2614_Trap_Bar_Deadlift.mp4" "https://player.vimeo.com/progressive_redirect/playback/250582244/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=4dd4a1920575d21823a16cf5c5c3350aa8178cea695949b0e186f50bc589ec52" && echo "OK 250/262: 2614_Trap_Bar_Deadlift" || { echo "FAIL: 2614_Trap_Bar_Deadlift"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 250: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6257457_T-Spine_Rotation_with_Reach.mp4" ]; then
  curl -s -L -o "$DIR/6257457_T-Spine_Rotation_with_Reach.mp4" "https://player.vimeo.com/progressive_redirect/playback/421679697/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=28e7b8637e292b09544ab36b7400b1622ba5748f50bf4facffa70bcf168e4835" && echo "OK 251/262: 6257457_T-Spine_Rotation_with_Reach" || { echo "FAIL: 6257457_T-Spine_Rotation_with_Reach"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 251: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/6257460_T-Spine_Rotations_with_Rib_Grab.mp4" ]; then
  curl -s -L -o "$DIR/6257460_T-Spine_Rotations_with_Rib_Grab.mp4" "https://player.vimeo.com/progressive_redirect/playback/421678808/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=7ca73a6c1f99a2f38afc0c892de86d99211cc8e232eeb5de540d5ff61d9c7025" && echo "OK 252/262: 6257460_T-Spine_Rotations_with_Rib_Grab" || { echo "FAIL: 6257460_T-Spine_Rotations_with_Rib_Grab"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 252: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/497_Twist_Back_Extension.mp4" ]; then
  curl -s -L -o "$DIR/497_Twist_Back_Extension.mp4" "https://player.vimeo.com/progressive_redirect/playback/169980607/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a3bb12f2f55f5971a245f38f76a89f95605f821f390ad457f0b76fbe8625cbe8" && echo "OK 253/262: 497_Twist_Back_Extension" || { echo "FAIL: 497_Twist_Back_Extension"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 253: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/476_Underhand_Grip_Lat_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/476_Underhand_Grip_Lat_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/172674536/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=9233ce2501fcb509a1c0d44756281b3a55bdde66327d6551bc28b7c80bcf1d12" && echo "OK 254/262: 476_Underhand_Grip_Lat_Pulldown" || { echo "FAIL: 476_Underhand_Grip_Lat_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 254: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/2605_Upper_Calf_Stretch.mp4" ]; then
  curl -s -L -o "$DIR/2605_Upper_Calf_Stretch.mp4" "https://player.vimeo.com/progressive_redirect/playback/246689076/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=6166bc891a41021b9acbd0b9e8bceae2f42f076d170d19cfc22df12279907eb5" && echo "OK 255/262: 2605_Upper_Calf_Stretch" || { echo "FAIL: 2605_Upper_Calf_Stretch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 255: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/701_V_Twist.mp4" ]; then
  curl -s -L -o "$DIR/701_V_Twist.mp4" "https://player.vimeo.com/progressive_redirect/playback/183082585/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=3e246e8c058c12dba5bdb98fd8881ff5c7631a4c59a2b7f1604ee08952b5e5e4" && echo "OK 256/262: 701_V_Twist" || { echo "FAIL: 701_V_Twist"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 256: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/436_Wall_Sit.mp4" ]; then
  curl -s -L -o "$DIR/436_Wall_Sit.mp4" "https://player.vimeo.com/progressive_redirect/playback/151379286/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=0f76a076d5d806dbab72fe3108884f37a66ba3527c6833683db1459f0d2ab274" && echo "OK 257/262: 436_Wall_Sit" || { echo "FAIL: 436_Wall_Sit"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 257: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/571_Weighted_Chin_Up.mp4" ]; then
  curl -s -L -o "$DIR/571_Weighted_Chin_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/170151813/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ff154a1281ab10b808488d317fdee075838dbdbea3d1028954d5ba201eb29010" && echo "OK 258/262: 571_Weighted_Chin_Up" || { echo "FAIL: 571_Weighted_Chin_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 258: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/147_Weighted_Full_Sit_Up.mp4" ]; then
  curl -s -L -o "$DIR/147_Weighted_Full_Sit_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/134985803/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=d047dc29f29336995f7891e609e489f639ca15af0386a96ff2ab602a2eedcc02" && echo "OK 259/262: 147_Weighted_Full_Sit_Up" || { echo "FAIL: 147_Weighted_Full_Sit_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 259: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/570_Weighted_Parallel_Grip_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/570_Weighted_Parallel_Grip_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/170143453/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=a230d90acc32d63faa433fa3835ea9908f891c32bddee4ce2f0d20ec639bcce7" && echo "OK 260/262: 570_Weighted_Parallel_Grip_Pull_Up" || { echo "FAIL: 570_Weighted_Parallel_Grip_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 260: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/452_Wide_Grip_Lat_Pulldown.mp4" ]; then
  curl -s -L -o "$DIR/452_Wide_Grip_Lat_Pulldown.mp4" "https://player.vimeo.com/progressive_redirect/playback/172677267/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=1a36b9337a3bb7c7b005a9dd6552ea6daac85c1c3ef30700cab0a2df1cc6575d" && echo "OK 261/262: 452_Wide_Grip_Lat_Pulldown" || { echo "FAIL: 452_Wide_Grip_Lat_Pulldown"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 261: exists"
fi
COUNT=$((COUNT+1))

if [ ! -f "$DIR/72_Wide_Grip_Pull_Up.mp4" ]; then
  curl -s -L -o "$DIR/72_Wide_Grip_Pull_Up.mp4" "https://player.vimeo.com/progressive_redirect/playback/151380457/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&oauth2_token_id=89516033&signature=ad7c4ab81b2678f4c151e9c682472b1df3041af14183603b8ccf364aa1c7e86c" && echo "OK 262/262: 72_Wide_Grip_Pull_Up" || { echo "FAIL: 72_Wide_Grip_Pull_Up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 262: exists"
fi
COUNT=$((COUNT+1))

echo "=== Vimeo done: $COUNT attempted, $FAIL failed ==="
