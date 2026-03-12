#!/bin/bash
DIR="C:/Users/keyse_pt9dxr4/peptalk/_elevate_audit/trainerize_scrape/videos_s3"
TOTAL=244
COUNT=0
FAIL=0

# 1/244: 1/2 curl full curl
if [ ! -f "$DIR/5395014_12_curl_full_curl.mp4" ]; then
  curl -s -L -o "$DIR/5395014_12_curl_full_curl.mp4" "https://video.trainerize.com/videos/9662607/ea3ccf50-ce6a-4af2-b964-bc449bec1396/HD.mp4" && echo "OK 1/244: 5395014_12_curl_full_curl" || { echo "FAIL: 5395014_12_curl_full_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 1: already exists"
fi
COUNT=$((COUNT+1))

# 2/244: 2/3 squat
if [ ! -f "$DIR/5504419_23_squat.mp4" ]; then
  curl -s -L -o "$DIR/5504419_23_squat.mp4" "https://video.trainerize.com/videos/10632169/2db8c459-7ccb-4668-8069-641955362050/HD.mp4" && echo "OK 2/244: 5504419_23_squat" || { echo "FAIL: 5504419_23_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 2: already exists"
fi
COUNT=$((COUNT+1))

# 3/244: Abduction squat+ forward+upright+leaned back
if [ ! -f "$DIR/5511000_Abduction_squat_forwarduprightleaned_back.mp4" ]; then
  curl -s -L -o "$DIR/5511000_Abduction_squat_forwarduprightleaned_back.mp4" "https://video.trainerize.com/videos/10683132/0ff3719e-8eab-4b24-99c9-7033db264fa7/HD.mp4" && echo "OK 3/244: 5511000_Abduction_squat_forwarduprightleaned_back" || { echo "FAIL: 5511000_Abduction_squat_forwarduprightleaned_back"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 3: already exists"
fi
COUNT=$((COUNT+1))

# 4/244: Alt cable squat/ cable RDL
if [ ! -f "$DIR/5511136_Alt_cable_squat_cable_RDL.mp4" ]; then
  curl -s -L -o "$DIR/5511136_Alt_cable_squat_cable_RDL.mp4" "https://video.trainerize.com/videos/10684238/a9de6d2f-bbe2-40a6-9d66-2bd3dfceb4bd/HD.mp4" && echo "OK 4/244: 5511136_Alt_cable_squat_cable_RDL" || { echo "FAIL: 5511136_Alt_cable_squat_cable_RDL"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 4: already exists"
fi
COUNT=$((COUNT+1))

# 5/244: Alt DB toe taps
if [ ! -f "$DIR/7230521_Alt_DB_toe_taps.mp4" ]; then
  curl -s -L -o "$DIR/7230521_Alt_DB_toe_taps.mp4" "https://video.trainerize.com/videos/26191830/34592821-bbee-402c-b941-04fed28a33da/HD.mp4" && echo "OK 5/244: 7230521_Alt_DB_toe_taps" || { echo "FAIL: 7230521_Alt_DB_toe_taps"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 5: already exists"
fi
COUNT=$((COUNT+1))

# 6/244: Alt frontal raises w/ hold
if [ ! -f "$DIR/7230907_Alt_frontal_raises_w_hold.mp4" ]; then
  curl -s -L -o "$DIR/7230907_Alt_frontal_raises_w_hold.mp4" "https://video.trainerize.com/videos/26194006/6c4157f8-24ad-4de3-a025-956472779a55/HD.mp4" && echo "OK 6/244: 7230907_Alt_frontal_raises_w_hold" || { echo "FAIL: 7230907_Alt_frontal_raises_w_hold"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 6: already exists"
fi
COUNT=$((COUNT+1))

# 7/244: Alt knee to elbow my climbers
if [ ! -f "$DIR/5504400_Alt_knee_to_elbow_my_climbers.mp4" ]; then
  curl -s -L -o "$DIR/5504400_Alt_knee_to_elbow_my_climbers.mp4" "https://video.trainerize.com/videos/10632084/b1706d2a-49e9-4f41-b7ee-5e1e6296dfa7/HD.mp4" && echo "OK 7/244: 5504400_Alt_knee_to_elbow_my_climbers" || { echo "FAIL: 5504400_Alt_knee_to_elbow_my_climbers"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 7: already exists"
fi
COUNT=$((COUNT+1))

# 8/244: ALT SA SB chest press into bilateral chest press
if [ ! -f "$DIR/5486167_ALT_SA_SB_chest_press_into_bilateral_chest_press.mp4" ]; then
  curl -s -L -o "$DIR/5486167_ALT_SA_SB_chest_press_into_bilateral_chest_press.mp4" "https://video.trainerize.com/videos/10457710/926c0a7c-6102-45dd-a98c-94c70105bf62/HD.mp4" && echo "OK 8/244: 5486167_ALT_SA_SB_chest_press_into_bilateral_chest_press" || { echo "FAIL: 5486167_ALT_SA_SB_chest_press_into_bilateral_chest_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 8: already exists"
fi
COUNT=$((COUNT+1))

# 9/244: Alt wall knee to elbows
if [ ! -f "$DIR/6397814_Alt_wall_knee_to_elbows.mp4" ]; then
  curl -s -L -o "$DIR/6397814_Alt_wall_knee_to_elbows.mp4" "https://video.trainerize.com/videos/17422446/985599d2-91ce-4902-9f6f-877a725979ea/HD.mp4" && echo "OK 9/244: 6397814_Alt_wall_knee_to_elbows" || { echo "FAIL: 6397814_Alt_wall_knee_to_elbows"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 9: already exists"
fi
COUNT=$((COUNT+1))

# 10/244: Backwards stair master
if [ ! -f "$DIR/5503989_Backwards_stair_master.mp4" ]; then
  curl -s -L -o "$DIR/5503989_Backwards_stair_master.mp4" "https://video.trainerize.com/videos/10628839/1d11f054-760e-4486-bbea-86ffbdbc22c9/HD.mp4" && echo "OK 10/244: 5503989_Backwards_stair_master" || { echo "FAIL: 5503989_Backwards_stair_master"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 10: already exists"
fi
COUNT=$((COUNT+1))

# 11/244: Banded 2/3 SB squat followed by banded abduction
if [ ! -f "$DIR/7230690_Banded_23_SB_squat_followed_by_banded_abduction.mp4" ]; then
  curl -s -L -o "$DIR/7230690_Banded_23_SB_squat_followed_by_banded_abduction.mp4" "https://video.trainerize.com/videos/26192875/0d20b100-ace3-4461-a819-73233eeddbf7/HD.mp4" && echo "OK 11/244: 7230690_Banded_23_SB_squat_followed_by_banded_abduction" || { echo "FAIL: 7230690_Banded_23_SB_squat_followed_by_banded_abduction"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 11: already exists"
fi
COUNT=$((COUNT+1))

# 12/244: Banded backwards/ forwards shuffle
if [ ! -f "$DIR/5395197_Banded_backwards_forwards_shuffle.mp4" ]; then
  curl -s -L -o "$DIR/5395197_Banded_backwards_forwards_shuffle.mp4" "https://video.trainerize.com/videos/9663508/a0ea80ef-cdb2-4d3f-a6c8-1ac9f56b0364/HD.mp4" && echo "OK 12/244: 5395197_Banded_backwards_forwards_shuffle" || { echo "FAIL: 5395197_Banded_backwards_forwards_shuffle"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 12: already exists"
fi
COUNT=$((COUNT+1))

# 13/244: Banded bent glute kick
if [ ! -f "$DIR/6394080_Banded_bent_glute_kick.mp4" ]; then
  curl -s -L -o "$DIR/6394080_Banded_bent_glute_kick.mp4" "https://video.trainerize.com/videos/17401315/a52a8981-8979-4015-98d5-e38e683d36a1/HD.mp4" && echo "OK 13/244: 6394080_Banded_bent_glute_kick" || { echo "FAIL: 6394080_Banded_bent_glute_kick"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 13: already exists"
fi
COUNT=$((COUNT+1))

# 14/244: Banded fire hydrant
if [ ! -f "$DIR/6394075_Banded_fire_hydrant.mp4" ]; then
  curl -s -L -o "$DIR/6394075_Banded_fire_hydrant.mp4" "https://video.trainerize.com/videos/17401292/c2e68e1d-5be6-4c8e-bba0-0f4ce5191328/HD.mp4" && echo "OK 14/244: 6394075_Banded_fire_hydrant" || { echo "FAIL: 6394075_Banded_fire_hydrant"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 14: already exists"
fi
COUNT=$((COUNT+1))

# 15/244: Banded glute step backs
if [ ! -f "$DIR/6394068_Banded_glute_step_backs.mp4" ]; then
  curl -s -L -o "$DIR/6394068_Banded_glute_step_backs.mp4" "https://video.trainerize.com/videos/17401193/d1ca3056-f749-4675-b84c-3b928d16398a/HD.mp4" && echo "OK 15/244: 6394068_Banded_glute_step_backs" || { echo "FAIL: 6394068_Banded_glute_step_backs"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 15: already exists"
fi
COUNT=$((COUNT+1))

# 16/244: Banded swimmer kicks with DB crunch
if [ ! -f "$DIR/7363919_Banded_swimmer_kicks_with_DB_crunch.mp4" ]; then
  curl -s -L -o "$DIR/7363919_Banded_swimmer_kicks_with_DB_crunch.mp4" "https://video.trainerize.com/videos/27979124/4a26f4cb-ce50-440c-a612-42c23d9076cc/HD.mp4" && echo "OK 16/244: 7363919_Banded_swimmer_kicks_with_DB_crunch" || { echo "FAIL: 7363919_Banded_swimmer_kicks_with_DB_crunch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 16: already exists"
fi
COUNT=$((COUNT+1))

# 17/244: Barbell RDL 2
if [ ! -f "$DIR/5486163_Barbell_RDL_2.mp4" ]; then
  curl -s -L -o "$DIR/5486163_Barbell_RDL_2.mp4" "https://video.trainerize.com/videos/10457694/9a76bcaf-591e-4bd2-a372-93a735441437/HD.mp4" && echo "OK 17/244: 5486163_Barbell_RDL_2" || { echo "FAIL: 5486163_Barbell_RDL_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 17: already exists"
fi
COUNT=$((COUNT+1))

# 18/244: Bent knee lateral kick
if [ ! -f "$DIR/5504000_Bent_knee_lateral_kick.mp4" ]; then
  curl -s -L -o "$DIR/5504000_Bent_knee_lateral_kick.mp4" "https://video.trainerize.com/videos/10628937/4966d3fa-b139-45f3-918a-76d68b739a4c/HD.mp4" && echo "OK 18/244: 5504000_Bent_knee_lateral_kick" || { echo "FAIL: 5504000_Bent_knee_lateral_kick"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 18: already exists"
fi
COUNT=$((COUNT+1))

# 19/244: Bent over DB row
if [ ! -f "$DIR/5395163_Bent_over_DB_row.mp4" ]; then
  curl -s -L -o "$DIR/5395163_Bent_over_DB_row.mp4" "https://video.trainerize.com/videos/9663287/d6fcfc4d-a5af-446c-bba4-707675da7501/HD.mp4" && echo "OK 19/244: 5395163_Bent_over_DB_row" || { echo "FAIL: 5395163_Bent_over_DB_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 19: already exists"
fi
COUNT=$((COUNT+1))

# 20/244: BOSU bicep curl
if [ ! -f "$DIR/5397169_BOSU_bicep_curl.mp4" ]; then
  curl -s -L -o "$DIR/5397169_BOSU_bicep_curl.mp4" "https://video.trainerize.com/videos/9679587/980d48e4-1946-47d6-b652-321b855977f3/HD.mp4" && echo "OK 20/244: 5397169_BOSU_bicep_curl" || { echo "FAIL: 5397169_BOSU_bicep_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 20: already exists"
fi
COUNT=$((COUNT+1))

# 21/244: BOSU burpee
if [ ! -f "$DIR/5397103_BOSU_burpee.mp4" ]; then
  curl -s -L -o "$DIR/5397103_BOSU_burpee.mp4" "https://video.trainerize.com/videos/9679073/2f651aeb-7d6f-4a0f-ac63-330f1a803ee4/HD.mp4" && echo "OK 21/244: 5397103_BOSU_burpee" || { echo "FAIL: 5397103_BOSU_burpee"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 21: already exists"
fi
COUNT=$((COUNT+1))

# 22/244: Bosu modified push up
if [ ! -f "$DIR/5395052_Bosu_modified_push_up.mp4" ]; then
  curl -s -L -o "$DIR/5395052_Bosu_modified_push_up.mp4" "https://video.trainerize.com/videos/9662849/0856930e-4e29-428e-917d-149609e7aad2/HD.mp4" && echo "OK 22/244: 5395052_Bosu_modified_push_up" || { echo "FAIL: 5395052_Bosu_modified_push_up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 22: already exists"
fi
COUNT=$((COUNT+1))

# 23/244: Bosu modified split push up
if [ ! -f "$DIR/5395057_Bosu_modified_split_push_up.mp4" ]; then
  curl -s -L -o "$DIR/5395057_Bosu_modified_split_push_up.mp4" "https://video.trainerize.com/videos/9662868/1e08b5fa-9574-4a95-849c-8698471ef467/HD.mp4" && echo "OK 23/244: 5395057_Bosu_modified_split_push_up" || { echo "FAIL: 5395057_Bosu_modified_split_push_up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 23: already exists"
fi
COUNT=$((COUNT+1))

# 24/244: Bosu push up
if [ ! -f "$DIR/5395054_Bosu_push_up.mp4" ]; then
  curl -s -L -o "$DIR/5395054_Bosu_push_up.mp4" "https://video.trainerize.com/videos/9662866/9081ae63-3e9c-4297-b033-bb87726b5b1a/HD.mp4" && echo "OK 24/244: 5395054_Bosu_push_up" || { echo "FAIL: 5395054_Bosu_push_up"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 24: already exists"
fi
COUNT=$((COUNT+1))

# 25/244: Bosu running man
if [ ! -f "$DIR/5395048_Bosu_running_man.mp4" ]; then
  curl -s -L -o "$DIR/5395048_Bosu_running_man.mp4" "https://video.trainerize.com/videos/9662814/e10f0e7e-7226-40b0-8cf6-d74937af9906/HD.mp4" && echo "OK 25/244: 5395048_Bosu_running_man" || { echo "FAIL: 5395048_Bosu_running_man"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 25: already exists"
fi
COUNT=$((COUNT+1))

# 26/244: BOSU SL shoulder press
if [ ! -f "$DIR/5397100_BOSU_SL_shoulder_press.mp4" ]; then
  curl -s -L -o "$DIR/5397100_BOSU_SL_shoulder_press.mp4" "https://video.trainerize.com/videos/9679061/180588bb-5719-43ca-94e4-517e1f349c9d/HD.mp4" && echo "OK 26/244: 5397100_BOSU_SL_shoulder_press" || { echo "FAIL: 5397100_BOSU_SL_shoulder_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 26: already exists"
fi
COUNT=$((COUNT+1))

# 27/244: Bosu SL squat
if [ ! -f "$DIR/5395084_Bosu_SL_squat.mp4" ]; then
  curl -s -L -o "$DIR/5395084_Bosu_SL_squat.mp4" "https://video.trainerize.com/videos/9662961/00d08dc2-1b6b-45f2-976a-dfc0363275ae/HD.mp4" && echo "OK 27/244: 5395084_Bosu_SL_squat" || { echo "FAIL: 5395084_Bosu_SL_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 27: already exists"
fi
COUNT=$((COUNT+1))

# 28/244: Cable adduction
if [ ! -f "$DIR/5504002_Cable_adduction.mp4" ]; then
  curl -s -L -o "$DIR/5504002_Cable_adduction.mp4" "https://video.trainerize.com/videos/10628963/479b491c-50f5-4580-8df7-e1bb5c0836be/HD.mp4" && echo "OK 28/244: 5504002_Cable_adduction" || { echo "FAIL: 5504002_Cable_adduction"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 28: already exists"
fi
COUNT=$((COUNT+1))

# 29/244: Cable cross over row 2
if [ ! -f "$DIR/5511173_Cable_cross_over_row_2.mp4" ]; then
  curl -s -L -o "$DIR/5511173_Cable_cross_over_row_2.mp4" "https://video.trainerize.com/videos/10684435/1a1d381e-0048-48ce-b20a-d614a443b46b/HD.mp4" && echo "OK 29/244: 5511173_Cable_cross_over_row_2" || { echo "FAIL: 5511173_Cable_cross_over_row_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 29: already exists"
fi
COUNT=$((COUNT+1))

# 30/244: Cable rope hammer curl 2
if [ ! -f "$DIR/5504016_Cable_rope_hammer_curl_2.mp4" ]; then
  curl -s -L -o "$DIR/5504016_Cable_rope_hammer_curl_2.mp4" "https://video.trainerize.com/videos/10629106/e47ef02b-281b-4314-bf5c-0f997d78bc7f/HD.mp4" && echo "OK 30/244: 5504016_Cable_rope_hammer_curl_2" || { echo "FAIL: 5504016_Cable_rope_hammer_curl_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 30: already exists"
fi
COUNT=$((COUNT+1))

# 31/244: Cable SL medial kick back
if [ ! -f "$DIR/5395009_Cable_SL_medial_kick_back.mp4" ]; then
  curl -s -L -o "$DIR/5395009_Cable_SL_medial_kick_back.mp4" "https://video.trainerize.com/videos/9662584/3493222b-41ee-4760-a538-b1c9c9f12f25/HD.mp4" && echo "OK 31/244: 5395009_Cable_SL_medial_kick_back" || { echo "FAIL: 5395009_Cable_SL_medial_kick_back"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 31: already exists"
fi
COUNT=$((COUNT+1))

# 32/244: Cable wood chop low to high
if [ ! -f "$DIR/5504144_Cable_wood_chop_low_to_high.mp4" ]; then
  curl -s -L -o "$DIR/5504144_Cable_wood_chop_low_to_high.mp4" "https://video.trainerize.com/videos/10630801/f394832d-3c27-4f90-83bb-26b38f63a325/HD.mp4" && echo "OK 32/244: 5504144_Cable_wood_chop_low_to_high" || { echo "FAIL: 5504144_Cable_wood_chop_low_to_high"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 32: already exists"
fi
COUNT=$((COUNT+1))

# 33/244: Crab alt knee taps
if [ ! -f "$DIR/6393866_Crab_alt_knee_taps.mp4" ]; then
  curl -s -L -o "$DIR/6393866_Crab_alt_knee_taps.mp4" "https://video.trainerize.com/videos/17399572/8618d53b-1c0b-47d9-b072-b8acabd89c90/HD.mp4" && echo "OK 33/244: 6393866_Crab_alt_knee_taps" || { echo "FAIL: 6393866_Crab_alt_knee_taps"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 33: already exists"
fi
COUNT=$((COUNT+1))

# 34/244: Crab alt knee tucks
if [ ! -f "$DIR/6393952_Crab_alt_knee_tucks.mp4" ]; then
  curl -s -L -o "$DIR/6393952_Crab_alt_knee_tucks.mp4" "https://video.trainerize.com/videos/17400154/f1d5676a-227e-4793-9803-3a593074d19c/HD.mp4" && echo "OK 34/244: 6393952_Crab_alt_knee_tucks" || { echo "FAIL: 6393952_Crab_alt_knee_tucks"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 34: already exists"
fi
COUNT=$((COUNT+1))

# 35/244: Crab hold with alt knee raises
if [ ! -f "$DIR/7230797_Crab_hold_with_alt_knee_raises.mp4" ]; then
  curl -s -L -o "$DIR/7230797_Crab_hold_with_alt_knee_raises.mp4" "https://video.trainerize.com/videos/26193363/2ad52347-871d-4114-81f5-135602672476/HD.mp4" && echo "OK 35/244: 7230797_Crab_hold_with_alt_knee_raises" || { echo "FAIL: 7230797_Crab_hold_with_alt_knee_raises"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 35: already exists"
fi
COUNT=$((COUNT+1))

# 36/244: DB 2/3 squat
if [ ! -f "$DIR/6393676_DB_23_squat.mp4" ]; then
  curl -s -L -o "$DIR/6393676_DB_23_squat.mp4" "https://video.trainerize.com/videos/17397703/30402750-5341-482e-9dc8-0003e6805cfa/HD.mp4" && echo "OK 36/244: 6393676_DB_23_squat" || { echo "FAIL: 6393676_DB_23_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 36: already exists"
fi
COUNT=$((COUNT+1))

# 37/244: DB 2/3 squat into pulses
if [ ! -f "$DIR/5395169_DB_23_squat_into_pulses.mp4" ]; then
  curl -s -L -o "$DIR/5395169_DB_23_squat_into_pulses.mp4" "https://video.trainerize.com/videos/9663309/1cec2b35-cf5f-4a25-b1a3-e467c042a283/HD.mp4" && echo "OK 37/244: 5395169_DB_23_squat_into_pulses" || { echo "FAIL: 5395169_DB_23_squat_into_pulses"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 37: already exists"
fi
COUNT=$((COUNT+1))

# 38/244: DB alt hammer/bicep curl
if [ ! -f "$DIR/6393685_DB_alt_hammerbicep_curl.mp4" ]; then
  curl -s -L -o "$DIR/6393685_DB_alt_hammerbicep_curl.mp4" "https://video.trainerize.com/videos/17397858/2febdf45-8a50-4d01-87f4-3063e558d5d8/HD.mp4" && echo "OK 38/244: 6393685_DB_alt_hammerbicep_curl" || { echo "FAIL: 6393685_DB_alt_hammerbicep_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 38: already exists"
fi
COUNT=$((COUNT+1))

# 39/244: DB AROUND THE WORLD
if [ ! -f "$DIR/6518756_DB_AROUND_THE_WORLD.mp4" ]; then
  curl -s -L -o "$DIR/6518756_DB_AROUND_THE_WORLD.mp4" "https://video.trainerize.com/videos/18576428/39c9dbb2-53e4-42ac-bd60-5bc5e2dbb79b/HD.mp4" && echo "OK 39/244: 6518756_DB_AROUND_THE_WORLD" || { echo "FAIL: 6518756_DB_AROUND_THE_WORLD"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 39: already exists"
fi
COUNT=$((COUNT+1))

# 40/244: DB floor wood chops
if [ ! -f "$DIR/6393980_DB_floor_wood_chops.mp4" ]; then
  curl -s -L -o "$DIR/6393980_DB_floor_wood_chops.mp4" "https://video.trainerize.com/videos/17400357/79d9c3f7-c8de-4a50-a957-8fe9d9fb2195/HD.mp4" && echo "OK 40/244: 6393980_DB_floor_wood_chops" || { echo "FAIL: 6393980_DB_floor_wood_chops"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 40: already exists"
fi
COUNT=$((COUNT+1))

# 41/244: DB frontal raises 2
if [ ! -f "$DIR/5395187_DB_frontal_raises_2.mp4" ]; then
  curl -s -L -o "$DIR/5395187_DB_frontal_raises_2.mp4" "https://video.trainerize.com/videos/9663387/d701921a-4873-469e-bad1-23141100407a/HD.mp4" && echo "OK 41/244: 5395187_DB_frontal_raises_2" || { echo "FAIL: 5395187_DB_frontal_raises_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 41: already exists"
fi
COUNT=$((COUNT+1))

# 42/244: DB hammer curl into bent lat raise
if [ ! -f "$DIR/6518768_DB_hammer_curl_into_bent_lat_raise.mp4" ]; then
  curl -s -L -o "$DIR/6518768_DB_hammer_curl_into_bent_lat_raise.mp4" "https://video.trainerize.com/videos/18576496/2201f5e8-83ad-4f75-aa4a-9e47f8bad9e7/HD.mp4" && echo "OK 42/244: 6518768_DB_hammer_curl_into_bent_lat_raise" || { echo "FAIL: 6518768_DB_hammer_curl_into_bent_lat_raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 42: already exists"
fi
COUNT=$((COUNT+1))

# 43/244: DB KB swings
if [ ! -f "$DIR/6393723_DB_KB_swings.mp4" ]; then
  curl -s -L -o "$DIR/6393723_DB_KB_swings.mp4" "https://video.trainerize.com/videos/17398138/19554efd-c961-4a58-a6ce-f502872ed490/HD.mp4" && echo "OK 43/244: 6393723_DB_KB_swings" || { echo "FAIL: 6393723_DB_KB_swings"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 43: already exists"
fi
COUNT=$((COUNT+1))

# 44/244: DB neutral shoulder press
if [ ! -f "$DIR/6393682_DB_neutral_shoulder_press.mp4" ]; then
  curl -s -L -o "$DIR/6393682_DB_neutral_shoulder_press.mp4" "https://video.trainerize.com/videos/17397837/bee01653-3106-4036-8b99-b83355e73afe/HD.mp4" && echo "OK 44/244: 6393682_DB_neutral_shoulder_press" || { echo "FAIL: 6393682_DB_neutral_shoulder_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 44: already exists"
fi
COUNT=$((COUNT+1))

# 45/244: DB press variation neutral/prone hand position
if [ ! -f "$DIR/7392249_DB_press_variation_neutralprone_hand_position.mp4" ]; then
  curl -s -L -o "$DIR/7392249_DB_press_variation_neutralprone_hand_position.mp4" "https://video.trainerize.com/videos/28369046/37fc42c0-54aa-4110-9963-96e563d970ae/HD.mp4" && echo "OK 45/244: 7392249_DB_press_variation_neutralprone_hand_position" || { echo "FAIL: 7392249_DB_press_variation_neutralprone_hand_position"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 45: already exists"
fi
COUNT=$((COUNT+1))

# 46/244: DB reverse lunge w/ glute lean
if [ ! -f "$DIR/7231243_DB_reverse_lunge_w_glute_lean.mp4" ]; then
  curl -s -L -o "$DIR/7231243_DB_reverse_lunge_w_glute_lean.mp4" "https://video.trainerize.com/videos/26195701/bd8a3b45-1522-4c5d-8fd9-2327f3975f5e/HD.mp4" && echo "OK 46/244: 7231243_DB_reverse_lunge_w_glute_lean" || { echo "FAIL: 7231243_DB_reverse_lunge_w_glute_lean"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 46: already exists"
fi
COUNT=$((COUNT+1))

# 47/244: DB row boats
if [ ! -f "$DIR/6393839_DB_row_boats.mp4" ]; then
  curl -s -L -o "$DIR/6393839_DB_row_boats.mp4" "https://video.trainerize.com/videos/17399273/310e7364-c861-4bf9-94b8-2cbe54ec83bb/HD.mp4" && echo "OK 47/244: 6393839_DB_row_boats" || { echo "FAIL: 6393839_DB_row_boats"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 47: already exists"
fi
COUNT=$((COUNT+1))

# 48/244: DB SA shoulder press
if [ ! -f "$DIR/5486171_DB_SA_shoulder_press.mp4" ]; then
  curl -s -L -o "$DIR/5486171_DB_SA_shoulder_press.mp4" "https://video.trainerize.com/videos/10457742/87b8b9bb-61ae-455a-be19-39306a9bd7e7/HD.mp4" && echo "OK 48/244: 5486171_DB_SA_shoulder_press" || { echo "FAIL: 5486171_DB_SA_shoulder_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 48: already exists"
fi
COUNT=$((COUNT+1))

# 49/244: DB stationary lunges
if [ ! -f "$DIR/5395171_DB_stationary_lunges.mp4" ]; then
  curl -s -L -o "$DIR/5395171_DB_stationary_lunges.mp4" "https://video.trainerize.com/videos/9663332/9e12296b-7aac-4dd5-86e0-caa52ffdce8d/HD.mp4" && echo "OK 49/244: 5395171_DB_stationary_lunges" || { echo "FAIL: 5395171_DB_stationary_lunges"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 49: already exists"
fi
COUNT=$((COUNT+1))

# 50/244: DB tornado twists
if [ ! -f "$DIR/6518779_DB_tornado_twists.mp4" ]; then
  curl -s -L -o "$DIR/6518779_DB_tornado_twists.mp4" "https://video.trainerize.com/videos/18576547/794d0ba5-3db9-4eaa-8432-6fd8995f59f3/HD.mp4" && echo "OK 50/244: 6518779_DB_tornado_twists" || { echo "FAIL: 6518779_DB_tornado_twists"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 50: already exists"
fi
COUNT=$((COUNT+1))

# 51/244: DB tricep kick backs
if [ ! -f "$DIR/5504069_DB_tricep_kick_backs.mp4" ]; then
  curl -s -L -o "$DIR/5504069_DB_tricep_kick_backs.mp4" "https://video.trainerize.com/videos/10629366/f64b9db1-be57-43f4-b7bf-a23ee667bcf5/HD.mp4" && echo "OK 51/244: 5504069_DB_tricep_kick_backs" || { echo "FAIL: 5504069_DB_tricep_kick_backs"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 51: already exists"
fi
COUNT=$((COUNT+1))

# 52/244: DB WIDE ROW
if [ ! -f "$DIR/5504100_DB_WIDE_ROW.mp4" ]; then
  curl -s -L -o "$DIR/5504100_DB_WIDE_ROW.mp4" "https://video.trainerize.com/videos/10629822/6d2969d5-08c9-4ac1-ae9c-4c809a377184/HD.mp4" && echo "OK 52/244: 5504100_DB_WIDE_ROW" || { echo "FAIL: 5504100_DB_WIDE_ROW"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 52: already exists"
fi
COUNT=$((COUNT+1))

# 53/244: DB WIDE sumo squat with pulse
if [ ! -f "$DIR/6518745_DB_WIDE_sumo_squat_with_pulse.mp4" ]; then
  curl -s -L -o "$DIR/6518745_DB_WIDE_sumo_squat_with_pulse.mp4" "https://video.trainerize.com/videos/18576374/02c848c5-2571-4f55-866d-d2b6fa8ffb03/HD.mp4" && echo "OK 53/244: 6518745_DB_WIDE_sumo_squat_with_pulse" || { echo "FAIL: 6518745_DB_WIDE_sumo_squat_with_pulse"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 53: already exists"
fi
COUNT=$((COUNT+1))

# 54/244: DB windmills
if [ ! -f "$DIR/6393720_DB_windmills.mp4" ]; then
  curl -s -L -o "$DIR/6393720_DB_windmills.mp4" "https://video.trainerize.com/videos/17398098/ab28eaa7-c653-4a5b-9304-0702c9d1fcc5/HD.mp4" && echo "OK 54/244: 6393720_DB_windmills" || { echo "FAIL: 6393720_DB_windmills"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 54: already exists"
fi
COUNT=$((COUNT+1))

# 55/244: Decline narrow leg press
if [ ! -f "$DIR/5395001_Decline_narrow_leg_press.mp4" ]; then
  curl -s -L -o "$DIR/5395001_Decline_narrow_leg_press.mp4" "https://video.trainerize.com/videos/9662525/f19bdab1-c77d-4449-8b80-f9dc437ace2e/HD.mp4" && echo "OK 55/244: 5395001_Decline_narrow_leg_press" || { echo "FAIL: 5395001_Decline_narrow_leg_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 55: already exists"
fi
COUNT=$((COUNT+1))

# 56/244: Decline SL leg press
if [ ! -f "$DIR/5395004_Decline_SL_leg_press.mp4" ]; then
  curl -s -L -o "$DIR/5395004_Decline_SL_leg_press.mp4" "https://video.trainerize.com/videos/9662540/91b87b7a-c727-4dcd-9779-5f2aa0d4db2b/HD.mp4" && echo "OK 56/244: 5395004_Decline_SL_leg_press" || { echo "FAIL: 5395004_Decline_SL_leg_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 56: already exists"
fi
COUNT=$((COUNT+1))

# 57/244: Decline SL press+calf raise
if [ ! -f "$DIR/5395094_Decline_SL_presscalf_raise.mp4" ]; then
  curl -s -L -o "$DIR/5395094_Decline_SL_presscalf_raise.mp4" "https://video.trainerize.com/videos/9663001/1729e597-1a03-46b0-a2bf-7a7a1c6ac3bc/HD.mp4" && echo "OK 57/244: 5395094_Decline_SL_presscalf_raise" || { echo "FAIL: 5395094_Decline_SL_presscalf_raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 57: already exists"
fi
COUNT=$((COUNT+1))

# 58/244: Dips on bench
if [ ! -f "$DIR/5504102_Dips_on_bench.mp4" ]; then
  curl -s -L -o "$DIR/5504102_Dips_on_bench.mp4" "https://video.trainerize.com/videos/10629891/b50900c0-5a34-4eed-af3e-9e5469e2e6b0/HD.mp4" && echo "OK 58/244: 5504102_Dips_on_bench" || { echo "FAIL: 5504102_Dips_on_bench"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 58: already exists"
fi
COUNT=$((COUNT+1))

# 59/244: Downward dog shoulder taps
if [ ! -f "$DIR/6394085_Downward_dog_shoulder_taps.mp4" ]; then
  curl -s -L -o "$DIR/6394085_Downward_dog_shoulder_taps.mp4" "https://video.trainerize.com/videos/17401352/820bb6fa-7540-44af-830d-c2e34b6fc7a6/HD.mp4" && echo "OK 59/244: 6394085_Downward_dog_shoulder_taps" || { echo "FAIL: 6394085_Downward_dog_shoulder_taps"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 59: already exists"
fi
COUNT=$((COUNT+1))

# 60/244: Dual tricep DB kickback
if [ ! -f "$DIR/5510985_Dual_tricep_DB_kickback.mp4" ]; then
  curl -s -L -o "$DIR/5510985_Dual_tricep_DB_kickback.mp4" "https://video.trainerize.com/videos/10683027/e919cae2-99d6-4210-bf54-f4b4708c9a5a/HD.mp4" && echo "OK 60/244: 5510985_Dual_tricep_DB_kickback" || { echo "FAIL: 5510985_Dual_tricep_DB_kickback"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 60: already exists"
fi
COUNT=$((COUNT+1))

# 61/244: Duck stance DB row into RDL
if [ ! -f "$DIR/7230956_Duck_stance_DB_row_into_RDL.mp4" ]; then
  curl -s -L -o "$DIR/7230956_Duck_stance_DB_row_into_RDL.mp4" "https://video.trainerize.com/videos/26194219/4b6424b4-3cbe-433a-beae-4d7246876400/HD.mp4" && echo "OK 61/244: 7230956_Duck_stance_DB_row_into_RDL" || { echo "FAIL: 7230956_Duck_stance_DB_row_into_RDL"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 61: already exists"
fi
COUNT=$((COUNT+1))

# 62/244: Elevated heel DB RDL
if [ ! -f "$DIR/7230957_Elevated_heel_DB_RDL.mp4" ]; then
  curl -s -L -o "$DIR/7230957_Elevated_heel_DB_RDL.mp4" "https://video.trainerize.com/videos/26194253/fd41c349-9fe0-4528-a7b3-68b6431f5da2/HD.mp4" && echo "OK 62/244: 7230957_Elevated_heel_DB_RDL" || { echo "FAIL: 7230957_Elevated_heel_DB_RDL"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 62: already exists"
fi
COUNT=$((COUNT+1))

# 63/244: Elevated heel reverse cable curls
if [ ! -f "$DIR/5504058_Elevated_heel_reverse_cable_curls.mp4" ]; then
  curl -s -L -o "$DIR/5504058_Elevated_heel_reverse_cable_curls.mp4" "https://video.trainerize.com/videos/10629339/c0a4fbdc-6c80-452d-b111-1d168a03d15c/HD.mp4" && echo "OK 63/244: 5504058_Elevated_heel_reverse_cable_curls" || { echo "FAIL: 5504058_Elevated_heel_reverse_cable_curls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 63: already exists"
fi
COUNT=$((COUNT+1))

# 64/244: Elevated heel reverse cable squat
if [ ! -f "$DIR/5504055_Elevated_heel_reverse_cable_squat.mp4" ]; then
  curl -s -L -o "$DIR/5504055_Elevated_heel_reverse_cable_squat.mp4" "https://video.trainerize.com/videos/10629325/acb925b1-f05d-4bd6-8d80-a448b9135399/HD.mp4" && echo "OK 64/244: 5504055_Elevated_heel_reverse_cable_squat" || { echo "FAIL: 5504055_Elevated_heel_reverse_cable_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 64: already exists"
fi
COUNT=$((COUNT+1))

# 65/244: Floor leg ext
if [ ! -f "$DIR/5504405_Floor_leg_ext.mp4" ]; then
  curl -s -L -o "$DIR/5504405_Floor_leg_ext.mp4" "https://video.trainerize.com/videos/10632115/93980573-be6b-4dc4-9485-a1c7e039f21e/HD.mp4" && echo "OK 65/244: 5504405_Floor_leg_ext" || { echo "FAIL: 5504405_Floor_leg_ext"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 65: already exists"
fi
COUNT=$((COUNT+1))

# 66/244: Front loaded KB walking lunge with hold
if [ ! -f "$DIR/5486151_Front_loaded_KB_walking_lunge_with_hold.mp4" ]; then
  curl -s -L -o "$DIR/5486151_Front_loaded_KB_walking_lunge_with_hold.mp4" "https://video.trainerize.com/videos/10457657/92673af0-d0f4-440d-ab6c-4d8f4d6e8855/HD.mp4" && echo "OK 66/244: 5486151_Front_loaded_KB_walking_lunge_with_hold" || { echo "FAIL: 5486151_Front_loaded_KB_walking_lunge_with_hold"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 66: already exists"
fi
COUNT=$((COUNT+1))

# 67/244: Frontal raise into lateral raise and reverse
if [ ! -f "$DIR/7230858_Frontal_raise_into_lateral_raise_and_reverse.mp4" ]; then
  curl -s -L -o "$DIR/7230858_Frontal_raise_into_lateral_raise_and_reverse.mp4" "https://video.trainerize.com/videos/26193786/c3d3e7b9-803e-46fa-ab0e-011274f52e82/HD.mp4" && echo "OK 67/244: 7230858_Frontal_raise_into_lateral_raise_and_reverse" || { echo "FAIL: 7230858_Frontal_raise_into_lateral_raise_and_reverse"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 67: already exists"
fi
COUNT=$((COUNT+1))

# 68/244: Glute kickback pulse
if [ ! -f "$DIR/5504003_Glute_kickback_pulse.mp4" ]; then
  curl -s -L -o "$DIR/5504003_Glute_kickback_pulse.mp4" "https://video.trainerize.com/videos/10628969/9770a061-e768-46a1-a784-4c477ecec3bc/HD.mp4" && echo "OK 68/244: 5504003_Glute_kickback_pulse" || { echo "FAIL: 5504003_Glute_kickback_pulse"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 68: already exists"
fi
COUNT=$((COUNT+1))

# 69/244: Glute lifts abs
if [ ! -f "$DIR/6393959_Glute_lifts_abs.mp4" ]; then
  curl -s -L -o "$DIR/6393959_Glute_lifts_abs.mp4" "https://video.trainerize.com/videos/17400199/518a9f52-bcd4-4b6a-a3c6-c9f69307d4a1/HD.mp4" && echo "OK 69/244: 6393959_Glute_lifts_abs" || { echo "FAIL: 6393959_Glute_lifts_abs"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 69: already exists"
fi
COUNT=$((COUNT+1))

# 70/244: Good mornings 2
if [ ! -f "$DIR/5395466_Good_mornings_2.mp4" ]; then
  curl -s -L -o "$DIR/5395466_Good_mornings_2.mp4" "https://video.trainerize.com/videos/9665427/c38f57f1-6e1d-4599-848c-e27f5acbf383/HD.mp4" && echo "OK 70/244: 5395466_Good_mornings_2" || { echo "FAIL: 5395466_Good_mornings_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 70: already exists"
fi
COUNT=$((COUNT+1))

# 71/244: Hamstring ab dolly rolls
if [ ! -f "$DIR/5486142_Hamstring_ab_dolly_rolls.mp4" ]; then
  curl -s -L -o "$DIR/5486142_Hamstring_ab_dolly_rolls.mp4" "https://video.trainerize.com/videos/10457640/b971a77d-09ca-4833-972d-fc355a5c8fe1/HD.mp4" && echo "OK 71/244: 5486142_Hamstring_ab_dolly_rolls" || { echo "FAIL: 5486142_Hamstring_ab_dolly_rolls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 71: already exists"
fi
COUNT=$((COUNT+1))

# 72/244: Hamstring curl into SL curl
if [ ! -f "$DIR/5395099_Hamstring_curl_into_SL_curl.mp4" ]; then
  curl -s -L -o "$DIR/5395099_Hamstring_curl_into_SL_curl.mp4" "https://video.trainerize.com/videos/9663027/28c055c7-0360-40aa-93cb-afdbe14951e7/HD.mp4" && echo "OK 72/244: 5395099_Hamstring_curl_into_SL_curl" || { echo "FAIL: 5395099_Hamstring_curl_into_SL_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 72: already exists"
fi
COUNT=$((COUNT+1))

# 73/244: Handstand pushes
if [ ! -f "$DIR/6518728_Handstand_pushes.mp4" ]; then
  curl -s -L -o "$DIR/6518728_Handstand_pushes.mp4" "https://video.trainerize.com/videos/18576278/4fde56d3-63a3-4895-8eaf-8d2e50010dcf/HD.mp4" && echo "OK 73/244: 6518728_Handstand_pushes" || { echo "FAIL: 6518728_Handstand_pushes"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 73: already exists"
fi
COUNT=$((COUNT+1))

# 74/244: Hanging alt SL release
if [ ! -f "$DIR/5486160_Hanging_alt_SL_release.mp4" ]; then
  curl -s -L -o "$DIR/5486160_Hanging_alt_SL_release.mp4" "https://video.trainerize.com/videos/10457674/f0c637aa-134e-4189-b2ea-9d3be33b6e76/HD.mp4" && echo "OK 74/244: 5486160_Hanging_alt_SL_release" || { echo "FAIL: 5486160_Hanging_alt_SL_release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 74: already exists"
fi
COUNT=$((COUNT+1))

# 75/244: Hanging knee raise holds
if [ ! -f "$DIR/5486162_Hanging_knee_raise_holds.mp4" ]; then
  curl -s -L -o "$DIR/5486162_Hanging_knee_raise_holds.mp4" "https://video.trainerize.com/videos/10457683/91de00f9-4c5d-4d74-bc92-81824aa6b499/HD.mp4" && echo "OK 75/244: 5486162_Hanging_knee_raise_holds" || { echo "FAIL: 5486162_Hanging_knee_raise_holds"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 75: already exists"
fi
COUNT=$((COUNT+1))

# 76/244: Hanging knee raise slow eccentric
if [ ! -f "$DIR/5486158_Hanging_knee_raise_slow_eccentric.mp4" ]; then
  curl -s -L -o "$DIR/5486158_Hanging_knee_raise_slow_eccentric.mp4" "https://video.trainerize.com/videos/10457669/f056b292-8877-49d3-87af-1f87acd4be3a/HD.mp4" && echo "OK 76/244: 5486158_Hanging_knee_raise_slow_eccentric" || { echo "FAIL: 5486158_Hanging_knee_raise_slow_eccentric"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 76: already exists"
fi
COUNT=$((COUNT+1))

# 77/244: Inch worms 2
if [ ! -f "$DIR/6394083_Inch_worms_2.mp4" ]; then
  curl -s -L -o "$DIR/6394083_Inch_worms_2.mp4" "https://video.trainerize.com/videos/17401338/6cee220b-1bac-4dbb-a246-f2e8a0894d11/HD.mp4" && echo "OK 77/244: 6394083_Inch_worms_2" || { echo "FAIL: 6394083_Inch_worms_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 77: already exists"
fi
COUNT=$((COUNT+1))

# 78/244: Incline push ups  2
if [ ! -f "$DIR/5504403_Incline_push_ups_2.mp4" ]; then
  curl -s -L -o "$DIR/5504403_Incline_push_ups_2.mp4" "https://video.trainerize.com/videos/10632099/b893482f-2577-4c8c-a2f8-e78eed082419/HD.mp4" && echo "OK 78/244: 5504403_Incline_push_ups_2" || { echo "FAIL: 5504403_Incline_push_ups_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 78: already exists"
fi
COUNT=$((COUNT+1))

# 79/244: Isometric lunge w/ DB overhead ext
if [ ! -f "$DIR/7230936_Isometric_lunge_w_DB_overhead_ext.mp4" ]; then
  curl -s -L -o "$DIR/7230936_Isometric_lunge_w_DB_overhead_ext.mp4" "https://video.trainerize.com/videos/26194128/45744676-19b1-4e75-b445-387db2f0f704/HD.mp4" && echo "OK 79/244: 7230936_Isometric_lunge_w_DB_overhead_ext" || { echo "FAIL: 7230936_Isometric_lunge_w_DB_overhead_ext"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 79: already exists"
fi
COUNT=$((COUNT+1))

# 80/244: Isometric side lunge with tricep kick back
if [ ! -f "$DIR/7230852_Isometric_side_lunge_with_tricep_kick_back.mp4" ]; then
  curl -s -L -o "$DIR/7230852_Isometric_side_lunge_with_tricep_kick_back.mp4" "https://video.trainerize.com/videos/26193768/ca1a03a3-69ab-4813-be3a-5b60465b796e/HD.mp4" && echo "OK 80/244: 7230852_Isometric_side_lunge_with_tricep_kick_back" || { echo "FAIL: 7230852_Isometric_side_lunge_with_tricep_kick_back"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 80: already exists"
fi
COUNT=$((COUNT+1))

# 81/244: Isometric squat with RB row
if [ ! -f "$DIR/7230975_Isometric_squat_with_RB_row.mp4" ]; then
  curl -s -L -o "$DIR/7230975_Isometric_squat_with_RB_row.mp4" "https://video.trainerize.com/videos/26194367/107fc44d-0bdb-469d-baf5-2bbe112aab8c/HD.mp4" && echo "OK 81/244: 7230975_Isometric_squat_with_RB_row" || { echo "FAIL: 7230975_Isometric_squat_with_RB_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 81: already exists"
fi
COUNT=$((COUNT+1))

# 82/244: KB upright row
if [ ! -f "$DIR/6925724_KB_upright_row.mp4" ]; then
  curl -s -L -o "$DIR/6925724_KB_upright_row.mp4" "https://video.trainerize.com/videos/22670672/c076c4c7-dab8-4bf6-a4c1-b2bc58272120/HD.mp4" && echo "OK 82/244: 6925724_KB_upright_row" || { echo "FAIL: 6925724_KB_upright_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 82: already exists"
fi
COUNT=$((COUNT+1))

# 83/244: Kneeling alt SA press / narrow press
if [ ! -f "$DIR/7230933_Kneeling_alt_SA_press_narrow_press.mp4" ]; then
  curl -s -L -o "$DIR/7230933_Kneeling_alt_SA_press_narrow_press.mp4" "https://video.trainerize.com/videos/26194102/3980a36d-35f5-42c6-9497-0477bdc69256/HD.mp4" && echo "OK 83/244: 7230933_Kneeling_alt_SA_press_narrow_press" || { echo "FAIL: 7230933_Kneeling_alt_SA_press_narrow_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 83: already exists"
fi
COUNT=$((COUNT+1))

# 84/244: Kneeling banded squat
if [ ! -f "$DIR/6394069_Kneeling_banded_squat.mp4" ]; then
  curl -s -L -o "$DIR/6394069_Kneeling_banded_squat.mp4" "https://video.trainerize.com/videos/17401224/fb77cdd0-048d-4056-82d3-14df116ad4f2/HD.mp4" && echo "OK 84/244: 6394069_Kneeling_banded_squat" || { echo "FAIL: 6394069_Kneeling_banded_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 84: already exists"
fi
COUNT=$((COUNT+1))

# 85/244: Kneeling DB around the worlds
if [ ! -f "$DIR/7230949_Kneeling_DB_around_the_worlds.mp4" ]; then
  curl -s -L -o "$DIR/7230949_Kneeling_DB_around_the_worlds.mp4" "https://video.trainerize.com/videos/26194178/80af70ab-5ccc-41cf-aeb6-97de52434dd5/HD.mp4" && echo "OK 85/244: 7230949_Kneeling_DB_around_the_worlds" || { echo "FAIL: 7230949_Kneeling_DB_around_the_worlds"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 85: already exists"
fi
COUNT=$((COUNT+1))

# 86/244: Kneeling rb low row
if [ ! -f "$DIR/7231024_Kneeling_rb_low_row.mp4" ]; then
  curl -s -L -o "$DIR/7231024_Kneeling_rb_low_row.mp4" "https://video.trainerize.com/videos/26194636/a2f09c91-0867-4302-9044-cd5c0cc457fa/HD.mp4" && echo "OK 86/244: 7231024_Kneeling_rb_low_row" || { echo "FAIL: 7231024_Kneeling_rb_low_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 86: already exists"
fi
COUNT=$((COUNT+1))

# 87/244: Kneeling RB straight arm pull downs
if [ ! -f "$DIR/7230965_Kneeling_RB_straight_arm_pull_downs.mp4" ]; then
  curl -s -L -o "$DIR/7230965_Kneeling_RB_straight_arm_pull_downs.mp4" "https://video.trainerize.com/videos/26194306/0b89f865-2fa3-492d-a37f-e4956782b741/HD.mp4" && echo "OK 87/244: 7230965_Kneeling_RB_straight_arm_pull_downs" || { echo "FAIL: 7230965_Kneeling_RB_straight_arm_pull_downs"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 87: already exists"
fi
COUNT=$((COUNT+1))

# 88/244: Land mine hip thrust
if [ ! -f "$DIR/5503997_Land_mine_hip_thrust.mp4" ]; then
  curl -s -L -o "$DIR/5503997_Land_mine_hip_thrust.mp4" "https://video.trainerize.com/videos/10628919/d8d91164-feaa-4824-b8c6-a0bc93540454/HD.mp4" && echo "OK 88/244: 5503997_Land_mine_hip_thrust" || { echo "FAIL: 5503997_Land_mine_hip_thrust"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 88: already exists"
fi
COUNT=$((COUNT+1))

# 89/244: Lateral/ frontal slow eccentric raises
if [ ! -f "$DIR/7211645_Lateral_frontal_slow_eccentric_raises.mp4" ]; then
  curl -s -L -o "$DIR/7211645_Lateral_frontal_slow_eccentric_raises.mp4" "https://video.trainerize.com/videos/25950650/cf625f2c-0de2-4eaa-80e7-3fed598c8d18/HD.mp4" && echo "OK 89/244: 7211645_Lateral_frontal_slow_eccentric_raises" || { echo "FAIL: 7211645_Lateral_frontal_slow_eccentric_raises"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 89: already exists"
fi
COUNT=$((COUNT+1))

# 90/244: Lateral+medial+glute kicks
if [ ! -f "$DIR/5395203_Lateralmedialglute_kicks.mp4" ]; then
  curl -s -L -o "$DIR/5395203_Lateralmedialglute_kicks.mp4" "https://video.trainerize.com/videos/9663531/e18b221d-d230-496d-9f2f-88d1261ecd95/HD.mp4" && echo "OK 90/244: 5395203_Lateralmedialglute_kicks" || { echo "FAIL: 5395203_Lateralmedialglute_kicks"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 90: already exists"
fi
COUNT=$((COUNT+1))

# 91/244: Mt climbers +pop outs
if [ ! -f "$DIR/5395212_Mt_climbers_pop_outs.mp4" ]; then
  curl -s -L -o "$DIR/5395212_Mt_climbers_pop_outs.mp4" "https://video.trainerize.com/videos/9663563/f96c4b9e-5147-4751-a5b1-35a7027f0963/HD.mp4" && echo "OK 91/244: 5395212_Mt_climbers_pop_outs" || { echo "FAIL: 5395212_Mt_climbers_pop_outs"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 91: already exists"
fi
COUNT=$((COUNT+1))

# 92/244: Narrow forward smith squat
if [ ! -f "$DIR/5504425_Narrow_forward_smith_squat.mp4" ]; then
  curl -s -L -o "$DIR/5504425_Narrow_forward_smith_squat.mp4" "https://video.trainerize.com/videos/10632181/082ef597-3346-46b0-a492-843e1e7efea8/HD.mp4" && echo "OK 92/244: 5504425_Narrow_forward_smith_squat" || { echo "FAIL: 5504425_Narrow_forward_smith_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 92: already exists"
fi
COUNT=$((COUNT+1))

# 93/244: Narrow shoulder press into tricep ext
if [ ! -f "$DIR/6518751_Narrow_shoulder_press_into_tricep_ext.mp4" ]; then
  curl -s -L -o "$DIR/6518751_Narrow_shoulder_press_into_tricep_ext.mp4" "https://video.trainerize.com/videos/18576405/99504cf1-6802-4132-b738-98c216822d77/HD.mp4" && echo "OK 93/244: 6518751_Narrow_shoulder_press_into_tricep_ext" || { echo "FAIL: 6518751_Narrow_shoulder_press_into_tricep_ext"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 93: already exists"
fi
COUNT=$((COUNT+1))

# 94/244: Neutral frontal raises w/ steering wheel twist
if [ ! -f "$DIR/6518786_Neutral_frontal_raises_w_steering_wheel_twist.mp4" ]; then
  curl -s -L -o "$DIR/6518786_Neutral_frontal_raises_w_steering_wheel_twist.mp4" "https://video.trainerize.com/videos/18576586/90bb4b4a-99d6-48f9-bf1b-7123866c809b/HD.mp4" && echo "OK 94/244: 6518786_Neutral_frontal_raises_w_steering_wheel_twist" || { echo "FAIL: 6518786_Neutral_frontal_raises_w_steering_wheel_twist"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 94: already exists"
fi
COUNT=$((COUNT+1))

# 95/244: Neutral group floor chest press
if [ ! -f "$DIR/5503987_Neutral_group_floor_chest_press.mp4" ]; then
  curl -s -L -o "$DIR/5503987_Neutral_group_floor_chest_press.mp4" "https://video.trainerize.com/videos/10628832/1fcd2d9b-12fc-46bb-b7a7-1b57c067c10b/HD.mp4" && echo "OK 95/244: 5503987_Neutral_group_floor_chest_press" || { echo "FAIL: 5503987_Neutral_group_floor_chest_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 95: already exists"
fi
COUNT=$((COUNT+1))

# 96/244: Over head cable tri ext
if [ ! -f "$DIR/5395029_Over_head_cable_tri_ext.mp4" ]; then
  curl -s -L -o "$DIR/5395029_Over_head_cable_tri_ext.mp4" "https://video.trainerize.com/videos/9662646/a23f1f8b-ca27-47cb-9d19-93814e282739/HD.mp4" && echo "OK 96/244: 5395029_Over_head_cable_tri_ext" || { echo "FAIL: 5395029_Over_head_cable_tri_ext"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 96: already exists"
fi
COUNT=$((COUNT+1))

# 97/244: Overhead cable rope tri ext
if [ ! -f "$DIR/5504140_Overhead_cable_rope_tri_ext.mp4" ]; then
  curl -s -L -o "$DIR/5504140_Overhead_cable_rope_tri_ext.mp4" "https://video.trainerize.com/videos/10630779/3c71c28e-7263-4f64-a7c1-9a876286669c/HD.mp4" && echo "OK 97/244: 5504140_Overhead_cable_rope_tri_ext" || { echo "FAIL: 5504140_Overhead_cable_rope_tri_ext"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 97: already exists"
fi
COUNT=$((COUNT+1))

# 98/244: Parallel arm wall sit
if [ ! -f "$DIR/6394081_Parallel_arm_wall_sit.mp4" ]; then
  curl -s -L -o "$DIR/6394081_Parallel_arm_wall_sit.mp4" "https://video.trainerize.com/videos/17401330/951e66e7-cadb-4f28-b483-fc8a34aff429/HD.mp4" && echo "OK 98/244: 6394081_Parallel_arm_wall_sit" || { echo "FAIL: 6394081_Parallel_arm_wall_sit"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 98: already exists"
fi
COUNT=$((COUNT+1))

# 99/244: PFM DB alt lower leg lifts
if [ ! -f "$DIR/7490544_PFM_DB_alt_lower_leg_lifts.mp4" ]; then
  curl -s -L -o "$DIR/7490544_PFM_DB_alt_lower_leg_lifts.mp4" "https://video.trainerize.com/videos/29611240/c2c989da-7839-424c-b6c6-1a19e32bb24c/HD.mp4" && echo "OK 99/244: 7490544_PFM_DB_alt_lower_leg_lifts" || { echo "FAIL: 7490544_PFM_DB_alt_lower_leg_lifts"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 99: already exists"
fi
COUNT=$((COUNT+1))

# 100/244: PFM hip hop w/ glute bridge adduction
if [ ! -f "$DIR/7490946_PFM_hip_hop_w_glute_bridge_adduction.mp4" ]; then
  curl -s -L -o "$DIR/7490946_PFM_hip_hop_w_glute_bridge_adduction.mp4" "https://video.trainerize.com/videos/29613785/f88e05bb-0fce-4446-8733-fbb9b798b4af/HD.mp4" && echo "OK 100/244: 7490946_PFM_hip_hop_w_glute_bridge_adduction" || { echo "FAIL: 7490946_PFM_hip_hop_w_glute_bridge_adduction"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 100: already exists"
fi
COUNT=$((COUNT+1))

# 101/244: PFM kick tucks
if [ ! -f "$DIR/7490532_PFM_kick_tucks.mp4" ]; then
  curl -s -L -o "$DIR/7490532_PFM_kick_tucks.mp4" "https://video.trainerize.com/videos/29611009/95e4b016-92a3-44ab-8d99-28a828579f4d/HD.mp4" && echo "OK 101/244: 7490532_PFM_kick_tucks" || { echo "FAIL: 7490532_PFM_kick_tucks"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 101: already exists"
fi
COUNT=$((COUNT+1))

# 102/244: PFM progression table top knee taps
if [ ! -f "$DIR/7490498_PFM_progression_table_top_knee_taps.mp4" ]; then
  curl -s -L -o "$DIR/7490498_PFM_progression_table_top_knee_taps.mp4" "https://video.trainerize.com/videos/29610818/5f3d7415-fb3f-4b3b-9867-bc9424deab84/HD.mp4" && echo "OK 102/244: 7490498_PFM_progression_table_top_knee_taps" || { echo "FAIL: 7490498_PFM_progression_table_top_knee_taps"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 102: already exists"
fi
COUNT=$((COUNT+1))

# 103/244: PFM slow mo mountain climbers
if [ ! -f "$DIR/7490502_PFM_slow_mo_mountain_climbers.mp4" ]; then
  curl -s -L -o "$DIR/7490502_PFM_slow_mo_mountain_climbers.mp4" "https://video.trainerize.com/videos/29610837/709e88e1-77e3-4fdb-88d0-572fe66854b2/HD.mp4" && echo "OK 103/244: 7490502_PFM_slow_mo_mountain_climbers" || { echo "FAIL: 7490502_PFM_slow_mo_mountain_climbers"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 103: already exists"
fi
COUNT=$((COUNT+1))

# 104/244: PFM table top knee taps
if [ ! -f "$DIR/7488550_PFM_table_top_knee_taps.mp4" ]; then
  curl -s -L -o "$DIR/7488550_PFM_table_top_knee_taps.mp4" "https://video.trainerize.com/videos/29596186/ac1c7ec0-62be-48d8-bd75-2a276ed5586f/HD.mp4" && echo "OK 104/244: 7488550_PFM_table_top_knee_taps" || { echo "FAIL: 7488550_PFM_table_top_knee_taps"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 104: already exists"
fi
COUNT=$((COUNT+1))

# 105/244: PFM wall activation
if [ ! -f "$DIR/7364236_PFM_wall_activation.mp4" ]; then
  curl -s -L -o "$DIR/7364236_PFM_wall_activation.mp4" "https://video.trainerize.com/videos/27981750/782033e6-16fb-4338-941b-5b133d1b71a7/HD.mp4" && echo "OK 105/244: 7364236_PFM_wall_activation" || { echo "FAIL: 7364236_PFM_wall_activation"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 105: already exists"
fi
COUNT=$((COUNT+1))

# 106/244: Pilates crunch w/ alt leg raises
if [ ! -f "$DIR/7230475_Pilates_crunch_w_alt_leg_raises.mp4" ]; then
  curl -s -L -o "$DIR/7230475_Pilates_crunch_w_alt_leg_raises.mp4" "https://video.trainerize.com/videos/26191568/8985af08-4df7-4701-8a22-c77a3b425783/HD.mp4" && echo "OK 106/244: 7230475_Pilates_crunch_w_alt_leg_raises" || { echo "FAIL: 7230475_Pilates_crunch_w_alt_leg_raises"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 106: already exists"
fi
COUNT=$((COUNT+1))

# 107/244: Pilates crunch with bent knee adduction
if [ ! -f "$DIR/7231694_Pilates_crunch_with_bent_knee_adduction.mp4" ]; then
  curl -s -L -o "$DIR/7231694_Pilates_crunch_with_bent_knee_adduction.mp4" "https://video.trainerize.com/videos/26198553/b6a898e8-98be-49c5-89ae-2215fd5a5509/HD.mp4" && echo "OK 107/244: 7231694_Pilates_crunch_with_bent_knee_adduction" || { echo "FAIL: 7231694_Pilates_crunch_with_bent_knee_adduction"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 107: already exists"
fi
COUNT=$((COUNT+1))

# 108/244: Pilates low leg circles
if [ ! -f "$DIR/7231575_Pilates_low_leg_circles.mp4" ]; then
  curl -s -L -o "$DIR/7231575_Pilates_low_leg_circles.mp4" "https://video.trainerize.com/videos/26197852/12a3aae2-b95f-4174-b906-45bfc5292266/HD.mp4" && echo "OK 108/244: 7231575_Pilates_low_leg_circles" || { echo "FAIL: 7231575_Pilates_low_leg_circles"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 108: already exists"
fi
COUNT=$((COUNT+1))

# 109/244: Pilates V towel holds lower leg raises
if [ ! -f "$DIR/7231503_Pilates_V_towel_holds_lower_leg_raises.mp4" ]; then
  curl -s -L -o "$DIR/7231503_Pilates_V_towel_holds_lower_leg_raises.mp4" "https://video.trainerize.com/videos/26197494/a1db2890-ae96-41b5-b218-8f148797992d/HD.mp4" && echo "OK 109/244: 7231503_Pilates_V_towel_holds_lower_leg_raises" || { echo "FAIL: 7231503_Pilates_V_towel_holds_lower_leg_raises"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 109: already exists"
fi
COUNT=$((COUNT+1))

# 110/244: Plank jacks w/ plank hold
if [ ! -f "$DIR/6393914_Plank_jacks_w_plank_hold.mp4" ]; then
  curl -s -L -o "$DIR/6393914_Plank_jacks_w_plank_hold.mp4" "https://video.trainerize.com/videos/17399869/36d86122-9c67-4dd3-a235-f9e36197a853/HD.mp4" && echo "OK 110/244: 6393914_Plank_jacks_w_plank_hold" || { echo "FAIL: 6393914_Plank_jacks_w_plank_hold"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 110: already exists"
fi
COUNT=$((COUNT+1))

# 111/244: Plank pushes
if [ ! -f "$DIR/6518772_Plank_pushes.mp4" ]; then
  curl -s -L -o "$DIR/6518772_Plank_pushes.mp4" "https://video.trainerize.com/videos/18576518/11ebd2cc-2d15-4aa8-a590-aaf9f90cc286/HD.mp4" && echo "OK 111/244: 6518772_Plank_pushes" || { echo "FAIL: 6518772_Plank_pushes"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 111: already exists"
fi
COUNT=$((COUNT+1))

# 112/244: Plank with DB roll
if [ ! -f "$DIR/7363913_Plank_with_DB_roll.mp4" ]; then
  curl -s -L -o "$DIR/7363913_Plank_with_DB_roll.mp4" "https://video.trainerize.com/videos/27979018/ff393621-bacc-4136-94be-7b7964011bbf/HD.mp4" && echo "OK 112/244: 7363913_Plank_with_DB_roll" || { echo "FAIL: 7363913_Plank_with_DB_roll"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 112: already exists"
fi
COUNT=$((COUNT+1))

# 113/244: Plate alt mt climbers
if [ ! -f "$DIR/6393871_Plate_alt_mt_climbers.mp4" ]; then
  curl -s -L -o "$DIR/6393871_Plate_alt_mt_climbers.mp4" "https://video.trainerize.com/videos/17399615/ac8057fd-b334-4274-ae1e-4dee22221820/HD.mp4" && echo "OK 113/244: 6393871_Plate_alt_mt_climbers" || { echo "FAIL: 6393871_Plate_alt_mt_climbers"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 113: already exists"
fi
COUNT=$((COUNT+1))

# 114/244: Plate bicep curls
if [ ! -f "$DIR/5504085_Plate_bicep_curls.mp4" ]; then
  curl -s -L -o "$DIR/5504085_Plate_bicep_curls.mp4" "https://video.trainerize.com/videos/10629487/5b244ed1-6e2e-4b4f-9bc7-ad41c31636a0/HD.mp4" && echo "OK 114/244: 5504085_Plate_bicep_curls" || { echo "FAIL: 5504085_Plate_bicep_curls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 114: already exists"
fi
COUNT=$((COUNT+1))

# 115/244: Plate glute reverse lunges slides
if [ ! -f "$DIR/6393745_Plate_glute_reverse_lunges_slides.mp4" ]; then
  curl -s -L -o "$DIR/6393745_Plate_glute_reverse_lunges_slides.mp4" "https://video.trainerize.com/videos/17398417/9c830032-5fd7-4f6c-9c9d-88c187f4d6b4/HD.mp4" && echo "OK 115/244: 6393745_Plate_glute_reverse_lunges_slides" || { echo "FAIL: 6393745_Plate_glute_reverse_lunges_slides"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 115: already exists"
fi
COUNT=$((COUNT+1))

# 116/244: Plate hanging lateral raise
if [ ! -f "$DIR/5511035_Plate_hanging_lateral_raise.mp4" ]; then
  curl -s -L -o "$DIR/5511035_Plate_hanging_lateral_raise.mp4" "https://video.trainerize.com/videos/10683317/c894af71-227e-4283-864a-59a2389b261d/HD.mp4" && echo "OK 116/244: 5511035_Plate_hanging_lateral_raise" || { echo "FAIL: 5511035_Plate_hanging_lateral_raise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 116: already exists"
fi
COUNT=$((COUNT+1))

# 117/244: Plate SL glute slides
if [ ! -f "$DIR/6394072_Plate_SL_glute_slides.mp4" ]; then
  curl -s -L -o "$DIR/6394072_Plate_SL_glute_slides.mp4" "https://video.trainerize.com/videos/17401264/9e9bbdc8-2a60-4ad8-b63e-f536dcc196c0/HD.mp4" && echo "OK 117/244: 6394072_Plate_SL_glute_slides" || { echo "FAIL: 6394072_Plate_SL_glute_slides"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 117: already exists"
fi
COUNT=$((COUNT+1))

# 118/244: Plate slide reverse lunges
if [ ! -f "$DIR/6393736_Plate_slide_reverse_lunges.mp4" ]; then
  curl -s -L -o "$DIR/6393736_Plate_slide_reverse_lunges.mp4" "https://video.trainerize.com/videos/17398318/0f26914b-b9f6-4897-ac20-d6668105fac1/HD.mp4" && echo "OK 118/244: 6393736_Plate_slide_reverse_lunges" || { echo "FAIL: 6393736_Plate_slide_reverse_lunges"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 118: already exists"
fi
COUNT=$((COUNT+1))

# 119/244: Power squat
if [ ! -f "$DIR/5395019_Power_squat.mp4" ]; then
  curl -s -L -o "$DIR/5395019_Power_squat.mp4" "https://video.trainerize.com/videos/9662614/dac1c6f6-d3d1-4c77-a150-525636ee60c9/HD.mp4" && echo "OK 119/244: 5395019_Power_squat" || { echo "FAIL: 5395019_Power_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 119: already exists"
fi
COUNT=$((COUNT+1))

# 120/244: Preacher hammer curls
if [ ! -f "$DIR/5504008_Preacher_hammer_curls.mp4" ]; then
  curl -s -L -o "$DIR/5504008_Preacher_hammer_curls.mp4" "https://video.trainerize.com/videos/10629002/1d473117-9954-4ef8-a30a-e3b3f09140f6/HD.mp4" && echo "OK 120/244: 5504008_Preacher_hammer_curls" || { echo "FAIL: 5504008_Preacher_hammer_curls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 120: already exists"
fi
COUNT=$((COUNT+1))

# 121/244: Rainbow kicks
if [ ! -f "$DIR/6518744_Rainbow_kicks.mp4" ]; then
  curl -s -L -o "$DIR/6518744_Rainbow_kicks.mp4" "https://video.trainerize.com/videos/18576364/a86c7404-5bde-4a63-9fdd-ea6858171dec/HD.mp4" && echo "OK 121/244: 6518744_Rainbow_kicks" || { echo "FAIL: 6518744_Rainbow_kicks"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 121: already exists"
fi
COUNT=$((COUNT+1))

# 122/244: RB kneeling bicep curls
if [ ! -f "$DIR/7230972_RB_kneeling_bicep_curls.mp4" ]; then
  curl -s -L -o "$DIR/7230972_RB_kneeling_bicep_curls.mp4" "https://video.trainerize.com/videos/26194352/21dc4d47-db35-4971-be7c-344db78c3407/HD.mp4" && echo "OK 122/244: 7230972_RB_kneeling_bicep_curls" || { echo "FAIL: 7230972_RB_kneeling_bicep_curls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 122: already exists"
fi
COUNT=$((COUNT+1))

# 123/244: RB lateral frontal raises 2
if [ ! -f "$DIR/5486191_RB_lateral_frontal_raises_2.mp4" ]; then
  curl -s -L -o "$DIR/5486191_RB_lateral_frontal_raises_2.mp4" "https://video.trainerize.com/videos/10457830/e4883541-8524-4b88-b05f-97c3d4f4d69a/HD.mp4" && echo "OK 123/244: 5486191_RB_lateral_frontal_raises_2" || { echo "FAIL: 5486191_RB_lateral_frontal_raises_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 123: already exists"
fi
COUNT=$((COUNT+1))

# 124/244: RB secured bicep curls
if [ ! -f "$DIR/6393842_RB_secured_bicep_curls.mp4" ]; then
  curl -s -L -o "$DIR/6393842_RB_secured_bicep_curls.mp4" "https://video.trainerize.com/videos/17399308/9dc2912e-2e2d-446a-bd7b-998ac2a1b970/HD.mp4" && echo "OK 124/244: 6393842_RB_secured_bicep_curls" || { echo "FAIL: 6393842_RB_secured_bicep_curls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 124: already exists"
fi
COUNT=$((COUNT+1))

# 125/244: RB tricep pull downs
if [ ! -f "$DIR/7231025_RB_tricep_pull_downs.mp4" ]; then
  curl -s -L -o "$DIR/7231025_RB_tricep_pull_downs.mp4" "https://video.trainerize.com/videos/26194672/aff03027-d295-4d6b-a572-d2cd8e2b60ad/HD.mp4" && echo "OK 125/244: 7231025_RB_tricep_pull_downs" || { echo "FAIL: 7231025_RB_tricep_pull_downs"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 125: already exists"
fi
COUNT=$((COUNT+1))

# 126/244: RB tricep supinated pulls in squat
if [ ! -f "$DIR/7230967_RB_tricep_supinated_pulls_in_squat.mp4" ]; then
  curl -s -L -o "$DIR/7230967_RB_tricep_supinated_pulls_in_squat.mp4" "https://video.trainerize.com/videos/26194338/c5b6353f-2bcb-49bf-aeb0-03c7a6f046a8/HD.mp4" && echo "OK 126/244: 7230967_RB_tricep_supinated_pulls_in_squat" || { echo "FAIL: 7230967_RB_tricep_supinated_pulls_in_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 126: already exists"
fi
COUNT=$((COUNT+1))

# 127/244: Resistance band bicep curl 2
if [ ! -f "$DIR/5395158_Resistance_band_bicep_curl_2.mp4" ]; then
  curl -s -L -o "$DIR/5395158_Resistance_band_bicep_curl_2.mp4" "https://video.trainerize.com/videos/9663268/10478589-4906-408b-a1ee-4d090d52d2d3/HD.mp4" && echo "OK 127/244: 5395158_Resistance_band_bicep_curl_2" || { echo "FAIL: 5395158_Resistance_band_bicep_curl_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 127: already exists"
fi
COUNT=$((COUNT+1))

# 128/244: Resistance band chest flies
if [ ! -f "$DIR/5395152_Resistance_band_chest_flies.mp4" ]; then
  curl -s -L -o "$DIR/5395152_Resistance_band_chest_flies.mp4" "https://video.trainerize.com/videos/9663256/567bde51-8503-44f0-a876-68c4fd89899f/HD.mp4" && echo "OK 128/244: 5395152_Resistance_band_chest_flies" || { echo "FAIL: 5395152_Resistance_band_chest_flies"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 128: already exists"
fi
COUNT=$((COUNT+1))

# 129/244: Resistance band incline row
if [ ! -f "$DIR/5395130_Resistance_band_incline_row.mp4" ]; then
  curl -s -L -o "$DIR/5395130_Resistance_band_incline_row.mp4" "https://video.trainerize.com/videos/9663144/ae2cbf34-0406-4a76-9d74-8bf74eb5225b/HD.mp4" && echo "OK 129/244: 5395130_Resistance_band_incline_row" || { echo "FAIL: 5395130_Resistance_band_incline_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 129: already exists"
fi
COUNT=$((COUNT+1))

# 130/244: Resistance band lat pull
if [ ! -f "$DIR/5396639_Resistance_band_lat_pull.mp4" ]; then
  curl -s -L -o "$DIR/5396639_Resistance_band_lat_pull.mp4" "https://video.trainerize.com/videos/9675431/adfc4011-1d6e-4c18-997f-0b7c3eb0f1bf/HD.mp4" && echo "OK 130/244: 5396639_Resistance_band_lat_pull" || { echo "FAIL: 5396639_Resistance_band_lat_pull"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 130: already exists"
fi
COUNT=$((COUNT+1))

# 131/244: Resistance band rows
if [ ! -f "$DIR/5395180_Resistance_band_rows.mp4" ]; then
  curl -s -L -o "$DIR/5395180_Resistance_band_rows.mp4" "https://video.trainerize.com/videos/9663368/f57d3e1e-04a8-4b32-a761-0527d9ab0ef2/HD.mp4" && echo "OK 131/244: 5395180_Resistance_band_rows" || { echo "FAIL: 5395180_Resistance_band_rows"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 131: already exists"
fi
COUNT=$((COUNT+1))

# 132/244: Resistance band SA /SL curl
if [ ! -f "$DIR/5395193_Resistance_band_SA_SL_curl.mp4" ]; then
  curl -s -L -o "$DIR/5395193_Resistance_band_SA_SL_curl.mp4" "https://video.trainerize.com/videos/9663440/2d3a44db-86b5-478e-8e33-ec53dc269562/HD.mp4" && echo "OK 132/244: 5395193_Resistance_band_SA_SL_curl" || { echo "FAIL: 5395193_Resistance_band_SA_SL_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 132: already exists"
fi
COUNT=$((COUNT+1))

# 133/244: Resistance band SA curl
if [ ! -f "$DIR/5395192_Resistance_band_SA_curl.mp4" ]; then
  curl -s -L -o "$DIR/5395192_Resistance_band_SA_curl.mp4" "https://video.trainerize.com/videos/9663432/2e28077d-1f60-4589-bb36-31cf37d5fd69/HD.mp4" && echo "OK 133/244: 5395192_Resistance_band_SA_curl" || { echo "FAIL: 5395192_Resistance_band_SA_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 133: already exists"
fi
COUNT=$((COUNT+1))

# 134/244: Resistance band SA lat pull
if [ ! -f "$DIR/5395175_Resistance_band_SA_lat_pull.mp4" ]; then
  curl -s -L -o "$DIR/5395175_Resistance_band_SA_lat_pull.mp4" "https://video.trainerize.com/videos/9663342/9fa43e49-2748-4f0e-8562-291af672f980/HD.mp4" && echo "OK 134/244: 5395175_Resistance_band_SA_lat_pull" || { echo "FAIL: 5395175_Resistance_band_SA_lat_pull"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 134: already exists"
fi
COUNT=$((COUNT+1))

# 135/244: Resistance band SA over head tricep ext
if [ ! -f "$DIR/5395194_Resistance_band_SA_over_head_tricep_ext.mp4" ]; then
  curl -s -L -o "$DIR/5395194_Resistance_band_SA_over_head_tricep_ext.mp4" "https://video.trainerize.com/videos/9663479/19e9a145-5aad-4e83-a13d-615bce2d83fb/HD.mp4" && echo "OK 135/244: 5395194_Resistance_band_SA_over_head_tricep_ext" || { echo "FAIL: 5395194_Resistance_band_SA_over_head_tricep_ext"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 135: already exists"
fi
COUNT=$((COUNT+1))

# 136/244: Resistance band SA row
if [ ! -f "$DIR/5395138_Resistance_band_SA_row.mp4" ]; then
  curl -s -L -o "$DIR/5395138_Resistance_band_SA_row.mp4" "https://video.trainerize.com/videos/9663177/7bde4078-aff8-4bce-9853-15a5dc2994c8/HD.mp4" && echo "OK 136/244: 5395138_Resistance_band_SA_row" || { echo "FAIL: 5395138_Resistance_band_SA_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 136: already exists"
fi
COUNT=$((COUNT+1))

# 137/244: Resistance band SA row 2
if [ ! -f "$DIR/5395183_Resistance_band_SA_row_2.mp4" ]; then
  curl -s -L -o "$DIR/5395183_Resistance_band_SA_row_2.mp4" "https://video.trainerize.com/videos/9663379/5ca77d0f-36f8-49ff-abe6-9cb6b831015d/HD.mp4" && echo "OK 137/244: 5395183_Resistance_band_SA_row_2" || { echo "FAIL: 5395183_Resistance_band_SA_row_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 137: already exists"
fi
COUNT=$((COUNT+1))

# 138/244: Resistance band scap pulls
if [ ! -f "$DIR/5395178_Resistance_band_scap_pulls.mp4" ]; then
  curl -s -L -o "$DIR/5395178_Resistance_band_scap_pulls.mp4" "https://video.trainerize.com/videos/9663356/d6a58ab7-6fdd-4637-8f72-dede311f8fe6/HD.mp4" && echo "OK 138/244: 5395178_Resistance_band_scap_pulls" || { echo "FAIL: 5395178_Resistance_band_scap_pulls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 138: already exists"
fi
COUNT=$((COUNT+1))

# 139/244: Resistance band straight arm pull down
if [ ! -f "$DIR/5395207_Resistance_band_straight_arm_pull_down.mp4" ]; then
  curl -s -L -o "$DIR/5395207_Resistance_band_straight_arm_pull_down.mp4" "https://video.trainerize.com/videos/9663545/d39627a7-404f-485f-b3fa-cab720dd8c5e/HD.mp4" && echo "OK 139/244: 5395207_Resistance_band_straight_arm_pull_down" || { echo "FAIL: 5395207_Resistance_band_straight_arm_pull_down"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 139: already exists"
fi
COUNT=$((COUNT+1))

# 140/244: Resistance band sup tricep ext
if [ ! -f "$DIR/5395143_Resistance_band_sup_tricep_ext.mp4" ]; then
  curl -s -L -o "$DIR/5395143_Resistance_band_sup_tricep_ext.mp4" "https://video.trainerize.com/videos/9663221/fc1019ff-37f6-4373-81d3-489422b0d054/HD.mp4" && echo "OK 140/244: 5395143_Resistance_band_sup_tricep_ext" || { echo "FAIL: 5395143_Resistance_band_sup_tricep_ext"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 140: already exists"
fi
COUNT=$((COUNT+1))

# 141/244: Resistance band tricep pull downs
if [ ! -f "$DIR/5395147_Resistance_band_tricep_pull_downs.mp4" ]; then
  curl -s -L -o "$DIR/5395147_Resistance_band_tricep_pull_downs.mp4" "https://video.trainerize.com/videos/9663239/52ce60bc-0cfd-4fb0-9b42-53934b715256/HD.mp4" && echo "OK 141/244: 5395147_Resistance_band_tricep_pull_downs" || { echo "FAIL: 5395147_Resistance_band_tricep_pull_downs"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 141: already exists"
fi
COUNT=$((COUNT+1))

# 142/244: Reverse crunch 2
if [ ! -f "$DIR/6393978_Reverse_crunch_2.mp4" ]; then
  curl -s -L -o "$DIR/6393978_Reverse_crunch_2.mp4" "https://video.trainerize.com/videos/17400328/d7905bcd-5d29-47a7-a297-da6ef733381b/HD.mp4" && echo "OK 142/244: 6393978_Reverse_crunch_2" || { echo "FAIL: 6393978_Reverse_crunch_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 142: already exists"
fi
COUNT=$((COUNT+1))

# 143/244: Reverse tricep push + reg tricep push
if [ ! -f "$DIR/7364495_Reverse_tricep_push_reg_tricep_push.mp4" ]; then
  curl -s -L -o "$DIR/7364495_Reverse_tricep_push_reg_tricep_push.mp4" "https://video.trainerize.com/videos/27983633/960410fe-215a-4283-8a49-cf663aeebc7d/HD.mp4" && echo "OK 143/244: 7364495_Reverse_tricep_push_reg_tricep_push" || { echo "FAIL: 7364495_Reverse_tricep_push_reg_tricep_push"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 143: already exists"
fi
COUNT=$((COUNT+1))

# 144/244: SA cable cross over row
if [ ! -f "$DIR/5511178_SA_cable_cross_over_row.mp4" ]; then
  curl -s -L -o "$DIR/5511178_SA_cable_cross_over_row.mp4" "https://video.trainerize.com/videos/10684442/6fd1e4d9-d150-4fbe-b112-abe05236cec5/HD.mp4" && echo "OK 144/244: 5511178_SA_cable_cross_over_row" || { echo "FAIL: 5511178_SA_cable_cross_over_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 144: already exists"
fi
COUNT=$((COUNT+1))

# 145/244: SA HAMMER PREACHER CURLS
if [ ! -f "$DIR/5504007_SA_HAMMER_PREACHER_CURLS.mp4" ]; then
  curl -s -L -o "$DIR/5504007_SA_HAMMER_PREACHER_CURLS.mp4" "https://video.trainerize.com/videos/10628993/1c6e61fd-38d9-4009-997b-57d8087d9204/HD.mp4" && echo "OK 145/244: 5504007_SA_HAMMER_PREACHER_CURLS" || { echo "FAIL: 5504007_SA_HAMMER_PREACHER_CURLS"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 145: already exists"
fi
COUNT=$((COUNT+1))

# 146/244: SA SB DB row
if [ ! -f "$DIR/5486189_SA_SB_DB_row.mp4" ]; then
  curl -s -L -o "$DIR/5486189_SA_SB_DB_row.mp4" "https://video.trainerize.com/videos/10457816/abff33a5-94eb-40f4-ac2d-6d5fda9424f7/HD.mp4" && echo "OK 146/244: 5486189_SA_SB_DB_row" || { echo "FAIL: 5486189_SA_SB_DB_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 146: already exists"
fi
COUNT=$((COUNT+1))

# 147/244: SA STRAIGHT ARM PULL DOWN
if [ ! -f "$DIR/5504137_SA_STRAIGHT_ARM_PULL_DOWN.mp4" ]; then
  curl -s -L -o "$DIR/5504137_SA_STRAIGHT_ARM_PULL_DOWN.mp4" "https://video.trainerize.com/videos/10630769/10db9f73-5885-4dd0-a0b6-cffb4561a9a9/HD.mp4" && echo "OK 147/244: 5504137_SA_STRAIGHT_ARM_PULL_DOWN" || { echo "FAIL: 5504137_SA_STRAIGHT_ARM_PULL_DOWN"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 147: already exists"
fi
COUNT=$((COUNT+1))

# 148/244: SA straight bar frontal raises
if [ ! -f "$DIR/5504063_SA_straight_bar_frontal_raises.mp4" ]; then
  curl -s -L -o "$DIR/5504063_SA_straight_bar_frontal_raises.mp4" "https://video.trainerize.com/videos/10629353/03bfb38d-6137-4208-86af-c7f683827cd9/HD.mp4" && echo "OK 148/244: 5504063_SA_straight_bar_frontal_raises" || { echo "FAIL: 5504063_SA_straight_bar_frontal_raises"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 148: already exists"
fi
COUNT=$((COUNT+1))

# 149/244: SA sup tricep pull down
if [ ! -f "$DIR/5504106_SA_sup_tricep_pull_down.mp4" ]; then
  curl -s -L -o "$DIR/5504106_SA_sup_tricep_pull_down.mp4" "https://video.trainerize.com/videos/10630062/013ea792-b717-46b7-88b9-4e16546daeca/HD.mp4" && echo "OK 149/244: 5504106_SA_sup_tricep_pull_down" || { echo "FAIL: 5504106_SA_sup_tricep_pull_down"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 149: already exists"
fi
COUNT=$((COUNT+1))

# 150/244: SA supinated cable tricep pull
if [ ! -f "$DIR/5395122_SA_supinated_cable_tricep_pull.mp4" ]; then
  curl -s -L -o "$DIR/5395122_SA_supinated_cable_tricep_pull.mp4" "https://video.trainerize.com/videos/9663114/1c08dab2-c804-491e-b03a-a726364628cc/HD.mp4" && echo "OK 150/244: 5395122_SA_supinated_cable_tricep_pull" || { echo "FAIL: 5395122_SA_supinated_cable_tricep_pull"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 150: already exists"
fi
COUNT=$((COUNT+1))

# 151/244: SA tricep overhead ext
if [ ! -f "$DIR/5504097_SA_tricep_overhead_ext.mp4" ]; then
  curl -s -L -o "$DIR/5504097_SA_tricep_overhead_ext.mp4" "https://video.trainerize.com/videos/10629801/a41ddedd-889d-46d6-b821-8925f25e9aef/HD.mp4" && echo "OK 151/244: 5504097_SA_tricep_overhead_ext" || { echo "FAIL: 5504097_SA_tricep_overhead_ext"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 151: already exists"
fi
COUNT=$((COUNT+1))

# 152/244: SA upright row
if [ ! -f "$DIR/5504075_SA_upright_row.mp4" ]; then
  curl -s -L -o "$DIR/5504075_SA_upright_row.mp4" "https://video.trainerize.com/videos/10629399/2f71c184-e2f5-40aa-afa2-fc2bfcbaa8a1/HD.mp4" && echo "OK 152/244: 5504075_SA_upright_row" || { echo "FAIL: 5504075_SA_upright_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 152: already exists"
fi
COUNT=$((COUNT+1))

# 153/244: SB alt ab hold
if [ ! -f "$DIR/6393713_SB_alt_ab_hold.mp4" ]; then
  curl -s -L -o "$DIR/6393713_SB_alt_ab_hold.mp4" "https://video.trainerize.com/videos/17398070/d1358393-a6bb-43ad-b533-0b2a85f7b505/HD.mp4" && echo "OK 153/244: 6393713_SB_alt_ab_hold" || { echo "FAIL: 6393713_SB_alt_ab_hold"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 153: already exists"
fi
COUNT=$((COUNT+1))

# 154/244: SB alternating lateral/ frontal raises
if [ ! -f "$DIR/5395205_SB_alternating_lateral_frontal_raises.mp4" ]; then
  curl -s -L -o "$DIR/5395205_SB_alternating_lateral_frontal_raises.mp4" "https://video.trainerize.com/videos/9663538/01430e13-e30d-4321-9622-4a70fa2c02a1/HD.mp4" && echo "OK 154/244: 5395205_SB_alternating_lateral_frontal_raises" || { echo "FAIL: 5395205_SB_alternating_lateral_frontal_raises"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 154: already exists"
fi
COUNT=$((COUNT+1))

# 155/244: SB bicep curl
if [ ! -f "$DIR/6518748_SB_bicep_curl.mp4" ]; then
  curl -s -L -o "$DIR/6518748_SB_bicep_curl.mp4" "https://video.trainerize.com/videos/18576390/b48ab5f8-3ce9-4ae8-98de-a71e5a50a55f/HD.mp4" && echo "OK 155/244: 6518748_SB_bicep_curl" || { echo "FAIL: 6518748_SB_bicep_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 155: already exists"
fi
COUNT=$((COUNT+1))

# 156/244: SB bridge with DB crunch
if [ ! -f "$DIR/7363926_SB_bridge_with_DB_crunch.mp4" ]; then
  curl -s -L -o "$DIR/7363926_SB_bridge_with_DB_crunch.mp4" "https://video.trainerize.com/videos/27979186/7e82e94f-4fb7-4a4b-8768-b6f0240ce2dc/HD.mp4" && echo "OK 156/244: 7363926_SB_bridge_with_DB_crunch" || { echo "FAIL: 7363926_SB_bridge_with_DB_crunch"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 156: already exists"
fi
COUNT=$((COUNT+1))

# 157/244: SB chest flies
if [ ! -f "$DIR/5395108_SB_chest_flies.mp4" ]; then
  curl -s -L -o "$DIR/5395108_SB_chest_flies.mp4" "https://video.trainerize.com/videos/9663075/b69ef24f-f42c-41df-b867-ff2a0ee30ed5/HD.mp4" && echo "OK 157/244: 5395108_SB_chest_flies" || { echo "FAIL: 5395108_SB_chest_flies"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 157: already exists"
fi
COUNT=$((COUNT+1))

# 158/244: SB chest press
if [ ! -f "$DIR/5395105_SB_chest_press.mp4" ]; then
  curl -s -L -o "$DIR/5395105_SB_chest_press.mp4" "https://video.trainerize.com/videos/9663051/20437cae-bc26-4b5b-82bc-285ebd02d2b3/HD.mp4" && echo "OK 158/244: 5395105_SB_chest_press" || { echo "FAIL: 5395105_SB_chest_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 158: already exists"
fi
COUNT=$((COUNT+1))

# 159/244: SB circles  out , clockwise, counter clockwise
if [ ! -f "$DIR/7230702_SB_circles_out_clockwise_counter_clockwise.mp4" ]; then
  curl -s -L -o "$DIR/7230702_SB_circles_out_clockwise_counter_clockwise.mp4" "https://video.trainerize.com/videos/26192924/868e7cc2-f22e-4856-86a6-104ca3fe28a0/HD.mp4" && echo "OK 159/244: 7230702_SB_circles_out_clockwise_counter_clockwise" || { echo "FAIL: 7230702_SB_circles_out_clockwise_counter_clockwise"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 159: already exists"
fi
COUNT=$((COUNT+1))

# 160/244: SB DB narrow squat
if [ ! -f "$DIR/6518760_SB_DB_narrow_squat.mp4" ]; then
  curl -s -L -o "$DIR/6518760_SB_DB_narrow_squat.mp4" "https://video.trainerize.com/videos/18576454/1427294e-8087-4ced-a67a-89f78dda30f3/HD.mp4" && echo "OK 160/244: 6518760_SB_DB_narrow_squat" || { echo "FAIL: 6518760_SB_DB_narrow_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 160: already exists"
fi
COUNT=$((COUNT+1))

# 161/244: SB froggy 5 sec hold and release
if [ ! -f "$DIR/7363947_SB_froggy_5_sec_hold_and_release.mp4" ]; then
  curl -s -L -o "$DIR/7363947_SB_froggy_5_sec_hold_and_release.mp4" "https://video.trainerize.com/videos/27979305/cb6fc4af-fa0c-4038-b387-5d386dc8b70a/HD.mp4" && echo "OK 161/244: 7363947_SB_froggy_5_sec_hold_and_release" || { echo "FAIL: 7363947_SB_froggy_5_sec_hold_and_release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 161: already exists"
fi
COUNT=$((COUNT+1))

# 162/244: SB hammer curl
if [ ! -f "$DIR/5395112_SB_hammer_curl.mp4" ]; then
  curl -s -L -o "$DIR/5395112_SB_hammer_curl.mp4" "https://video.trainerize.com/videos/9663089/a77fca12-e9b1-415c-a477-295244e2aae7/HD.mp4" && echo "OK 162/244: 5395112_SB_hammer_curl" || { echo "FAIL: 5395112_SB_hammer_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 162: already exists"
fi
COUNT=$((COUNT+1))

# 163/244: SB hamstring rolls with glute raises
if [ ! -f "$DIR/5504066_SB_hamstring_rolls_with_glute_raises.mp4" ]; then
  curl -s -L -o "$DIR/5504066_SB_hamstring_rolls_with_glute_raises.mp4" "https://video.trainerize.com/videos/10629359/97860d97-d90e-48a5-b07a-6ba0f6332617/HD.mp4" && echo "OK 163/244: 5504066_SB_hamstring_rolls_with_glute_raises" || { echo "FAIL: 5504066_SB_hamstring_rolls_with_glute_raises"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 163: already exists"
fi
COUNT=$((COUNT+1))

# 164/244: SB KNEE TUCKS
if [ ! -f "$DIR/6393812_SB_KNEE_TUCKS.mp4" ]; then
  curl -s -L -o "$DIR/6393812_SB_KNEE_TUCKS.mp4" "https://video.trainerize.com/videos/17399048/19c9d11d-3bc8-4db9-bc31-91b6ecf55039/HD.mp4" && echo "OK 164/244: 6393812_SB_KNEE_TUCKS" || { echo "FAIL: 6393812_SB_KNEE_TUCKS"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 164: already exists"
fi
COUNT=$((COUNT+1))

# 165/244: SB lower leg lifts
if [ ! -f "$DIR/6518773_SB_lower_leg_lifts.mp4" ]; then
  curl -s -L -o "$DIR/6518773_SB_lower_leg_lifts.mp4" "https://video.trainerize.com/videos/18576530/22c47bf3-14f6-4b87-b29c-7caddeb56a10/HD.mp4" && echo "OK 165/244: 6518773_SB_lower_leg_lifts" || { echo "FAIL: 6518773_SB_lower_leg_lifts"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 165: already exists"
fi
COUNT=$((COUNT+1))

# 166/244: SB narrow/ wide glute bridge
if [ ! -f "$DIR/6518735_SB_narrow_wide_glute_bridge.mp4" ]; then
  curl -s -L -o "$DIR/6518735_SB_narrow_wide_glute_bridge.mp4" "https://video.trainerize.com/videos/18576314/05c1ac2d-2acd-41d9-b774-70aa47c21640/HD.mp4" && echo "OK 166/244: 6518735_SB_narrow_wide_glute_bridge" || { echo "FAIL: 6518735_SB_narrow_wide_glute_bridge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 166: already exists"
fi
COUNT=$((COUNT+1))

# 167/244: SB overhead tricep extension
if [ ! -f "$DIR/5395116_SB_overhead_tricep_extension.mp4" ]; then
  curl -s -L -o "$DIR/5395116_SB_overhead_tricep_extension.mp4" "https://video.trainerize.com/videos/9663095/ab97e474-5665-44cb-874c-673a0ae59947/HD.mp4" && echo "OK 167/244: 5395116_SB_overhead_tricep_extension" || { echo "FAIL: 5395116_SB_overhead_tricep_extension"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 167: already exists"
fi
COUNT=$((COUNT+1))

# 168/244: SB PELVIC CRUNCH w/  3 count release
if [ ! -f "$DIR/7230451_SB_PELVIC_CRUNCH_w_3_count_release.mp4" ]; then
  curl -s -L -o "$DIR/7230451_SB_PELVIC_CRUNCH_w_3_count_release.mp4" "https://video.trainerize.com/videos/26191336/444000e7-edbb-4726-b277-33bcbe790307/HD.mp4" && echo "OK 168/244: 7230451_SB_PELVIC_CRUNCH_w_3_count_release" || { echo "FAIL: 7230451_SB_PELVIC_CRUNCH_w_3_count_release"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 168: already exists"
fi
COUNT=$((COUNT+1))

# 169/244: SB plank w/ toe taps
if [ ! -f "$DIR/7230895_SB_plank_w_toe_taps.mp4" ]; then
  curl -s -L -o "$DIR/7230895_SB_plank_w_toe_taps.mp4" "https://video.trainerize.com/videos/26193947/e51d5ac3-077e-406a-b2a6-ca2f21f4338b/HD.mp4" && echo "OK 169/244: 7230895_SB_plank_w_toe_taps" || { echo "FAIL: 7230895_SB_plank_w_toe_taps"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 169: already exists"
fi
COUNT=$((COUNT+1))

# 170/244: SB SA chest fly
if [ ! -f "$DIR/5395106_SB_SA_chest_fly.mp4" ]; then
  curl -s -L -o "$DIR/5395106_SB_SA_chest_fly.mp4" "https://video.trainerize.com/videos/9663069/23555e1e-9a2a-4431-9310-cc8682d02ebf/HD.mp4" && echo "OK 170/244: 5395106_SB_SA_chest_fly" || { echo "FAIL: 5395106_SB_SA_chest_fly"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 170: already exists"
fi
COUNT=$((COUNT+1))

# 171/244: SB SA isolated bicep curl
if [ ! -f "$DIR/5395119_SB_SA_isolated_bicep_curl.mp4" ]; then
  curl -s -L -o "$DIR/5395119_SB_SA_isolated_bicep_curl.mp4" "https://video.trainerize.com/videos/9663103/2716304b-a2aa-4483-a174-9310ff035ba5/HD.mp4" && echo "OK 171/244: 5395119_SB_SA_isolated_bicep_curl" || { echo "FAIL: 5395119_SB_SA_isolated_bicep_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 171: already exists"
fi
COUNT=$((COUNT+1))

# 172/244: SB skull crushers
if [ ! -f "$DIR/5395102_SB_skull_crushers.mp4" ]; then
  curl -s -L -o "$DIR/5395102_SB_skull_crushers.mp4" "https://video.trainerize.com/videos/9663038/8d85da48-f126-456a-a3bf-2fb7d858f763/HD.mp4" && echo "OK 172/244: 5395102_SB_skull_crushers" || { echo "FAIL: 5395102_SB_skull_crushers"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 172: already exists"
fi
COUNT=$((COUNT+1))

# 173/244: SB SL glute lift with knee tuck
if [ ! -f "$DIR/6394089_SB_SL_glute_lift_with_knee_tuck.mp4" ]; then
  curl -s -L -o "$DIR/6394089_SB_SL_glute_lift_with_knee_tuck.mp4" "https://video.trainerize.com/videos/17401380/67d6eaaf-59d0-4dd1-b988-0c5e6701431a/HD.mp4" && echo "OK 173/244: 6394089_SB_SL_glute_lift_with_knee_tuck" || { echo "FAIL: 6394089_SB_SL_glute_lift_with_knee_tuck"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 173: already exists"
fi
COUNT=$((COUNT+1))

# 174/244: SB straight DB arm pull overs
if [ ! -f "$DIR/6393729_SB_straight_DB_arm_pull_overs.mp4" ]; then
  curl -s -L -o "$DIR/6393729_SB_straight_DB_arm_pull_overs.mp4" "https://video.trainerize.com/videos/17398184/19431b1f-a08b-4cd9-9eb5-73fcf39ed086/HD.mp4" && echo "OK 174/244: 6393729_SB_straight_DB_arm_pull_overs" || { echo "FAIL: 6393729_SB_straight_DB_arm_pull_overs"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 174: already exists"
fi
COUNT=$((COUNT+1))

# 175/244: SB toe rolls
if [ ! -f "$DIR/7230661_SB_toe_rolls.mp4" ]; then
  curl -s -L -o "$DIR/7230661_SB_toe_rolls.mp4" "https://video.trainerize.com/videos/26192643/77235b3d-a0b8-4ae4-8a1d-57fa766abe42/HD.mp4" && echo "OK 175/244: 7230661_SB_toe_rolls" || { echo "FAIL: 7230661_SB_toe_rolls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 175: already exists"
fi
COUNT=$((COUNT+1))

# 176/244: SB V holds
if [ ! -f "$DIR/7230786_SB_V_holds.mp4" ]; then
  curl -s -L -o "$DIR/7230786_SB_V_holds.mp4" "https://video.trainerize.com/videos/26193300/1a2f39e9-45da-4876-9dc4-6eab4abd6bbc/HD.mp4" && echo "OK 176/244: 7230786_SB_V_holds" || { echo "FAIL: 7230786_SB_V_holds"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 176: already exists"
fi
COUNT=$((COUNT+1))

# 177/244: SB W
if [ ! -f "$DIR/7230681_SB_W.mp4" ]; then
  curl -s -L -o "$DIR/7230681_SB_W.mp4" "https://video.trainerize.com/videos/26192830/ab279eac-fd41-42ff-990f-c22c3c16d2a5/HD.mp4" && echo "OK 177/244: 7230681_SB_W" || { echo "FAIL: 7230681_SB_W"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 177: already exists"
fi
COUNT=$((COUNT+1))

# 178/244: SB wide DB row
if [ ! -f "$DIR/6518626_SB_wide_DB_row.mp4" ]; then
  curl -s -L -o "$DIR/6518626_SB_wide_DB_row.mp4" "https://video.trainerize.com/videos/18575552/2e99001b-4e5e-4909-afea-3b8e716b052c/HD.mp4" && echo "OK 178/244: 6518626_SB_wide_DB_row" || { echo "FAIL: 6518626_SB_wide_DB_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 178: already exists"
fi
COUNT=$((COUNT+1))

# 179/244: Scapula retraction push ups
if [ ! -f "$DIR/5486194_Scapula_retraction_push_ups.mp4" ]; then
  curl -s -L -o "$DIR/5486194_Scapula_retraction_push_ups.mp4" "https://video.trainerize.com/videos/10457871/0daccb53-c9fe-4cbd-b129-17ad583162e8/HD.mp4" && echo "OK 179/244: 5486194_Scapula_retraction_push_ups" || { echo "FAIL: 5486194_Scapula_retraction_push_ups"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 179: already exists"
fi
COUNT=$((COUNT+1))

# 180/244: Shoulder press w/ frontal rotation
if [ ! -f "$DIR/5504096_Shoulder_press_w_frontal_rotation.mp4" ]; then
  curl -s -L -o "$DIR/5504096_Shoulder_press_w_frontal_rotation.mp4" "https://video.trainerize.com/videos/10629778/0b20dc5f-9360-40f0-9f6a-3f7d61e6659a/HD.mp4" && echo "OK 180/244: 5504096_Shoulder_press_w_frontal_rotation" || { echo "FAIL: 5504096_Shoulder_press_w_frontal_rotation"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 180: already exists"
fi
COUNT=$((COUNT+1))

# 181/244: Shoulder Y raises/ lateral drop
if [ ! -f "$DIR/5504089_Shoulder_Y_raises_lateral_drop.mp4" ]; then
  curl -s -L -o "$DIR/5504089_Shoulder_Y_raises_lateral_drop.mp4" "https://video.trainerize.com/videos/10629517/f5627368-9c68-4578-9734-032d86966039/HD.mp4" && echo "OK 181/244: 5504089_Shoulder_Y_raises_lateral_drop" || { echo "FAIL: 5504089_Shoulder_Y_raises_lateral_drop"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 181: already exists"
fi
COUNT=$((COUNT+1))

# 182/244: Side plank abduction kick
if [ ! -f "$DIR/7364202_Side_plank_abduction_kick.mp4" ]; then
  curl -s -L -o "$DIR/7364202_Side_plank_abduction_kick.mp4" "https://video.trainerize.com/videos/27981455/0a9156a5-a3aa-437f-bf30-c01b0d85adf2/HD.mp4" && echo "OK 182/244: 7364202_Side_plank_abduction_kick" || { echo "FAIL: 7364202_Side_plank_abduction_kick"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 182: already exists"
fi
COUNT=$((COUNT+1))

# 183/244: Side plank knee to elbow 2
if [ ! -f "$DIR/6393973_Side_plank_knee_to_elbow_2.mp4" ]; then
  curl -s -L -o "$DIR/6393973_Side_plank_knee_to_elbow_2.mp4" "https://video.trainerize.com/videos/17400302/abf3c211-1501-4b07-8652-e58f98d21207/HD.mp4" && echo "OK 183/244: 6393973_Side_plank_knee_to_elbow_2" || { echo "FAIL: 6393973_Side_plank_knee_to_elbow_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 183: already exists"
fi
COUNT=$((COUNT+1))

# 184/244: Side plank w/ ball/ towel adduction
if [ ! -f "$DIR/7364212_Side_plank_w_ball_towel_adduction.mp4" ]; then
  curl -s -L -o "$DIR/7364212_Side_plank_w_ball_towel_adduction.mp4" "https://video.trainerize.com/videos/27981580/d0eefbd7-51f5-4a17-bf0c-a0f2b815e0ba/HD.mp4" && echo "OK 184/244: 7364212_Side_plank_w_ball_towel_adduction" || { echo "FAIL: 7364212_Side_plank_w_ball_towel_adduction"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 184: already exists"
fi
COUNT=$((COUNT+1))

# 185/244: Side plank w/ reverse fly + hold 2
if [ ! -f "$DIR/7364421_Side_plank_w_reverse_fly_hold_2.mp4" ]; then
  curl -s -L -o "$DIR/7364421_Side_plank_w_reverse_fly_hold_2.mp4" "https://video.trainerize.com/videos/27983122/81b526a2-e9da-4e1a-95c5-82efcf45cd4a/HD.mp4" && echo "OK 185/244: 7364421_Side_plank_w_reverse_fly_hold_2" || { echo "FAIL: 7364421_Side_plank_w_reverse_fly_hold_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 185: already exists"
fi
COUNT=$((COUNT+1))

# 186/244: Side plank with knee tuck
if [ ! -f "$DIR/5510999_Side_plank_with_knee_tuck.mp4" ]; then
  curl -s -L -o "$DIR/5510999_Side_plank_with_knee_tuck.mp4" "https://video.trainerize.com/videos/10683116/55f2db87-3049-4109-a583-5a9c12578de1/HD.mp4" && echo "OK 186/244: 5510999_Side_plank_with_knee_tuck" || { echo "FAIL: 5510999_Side_plank_with_knee_tuck"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 186: already exists"
fi
COUNT=$((COUNT+1))

# 187/244: Side plank with knee tuck /hip dip
if [ ! -f "$DIR/5510996_Side_plank_with_knee_tuck_hip_dip.mp4" ]; then
  curl -s -L -o "$DIR/5510996_Side_plank_with_knee_tuck_hip_dip.mp4" "https://video.trainerize.com/videos/10683086/7e99fd3c-9093-4345-b3ea-60c49f6ca232/HD.mp4" && echo "OK 187/244: 5510996_Side_plank_with_knee_tuck_hip_dip" || { echo "FAIL: 5510996_Side_plank_with_knee_tuck_hip_dip"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 187: already exists"
fi
COUNT=$((COUNT+1))

# 188/244: Side to side DB lunges
if [ ! -f "$DIR/7230901_Side_to_side_DB_lunges.mp4" ]; then
  curl -s -L -o "$DIR/7230901_Side_to_side_DB_lunges.mp4" "https://video.trainerize.com/videos/26193981/e37c49fe-60df-4497-900b-765b3e23a5a4/HD.mp4" && echo "OK 188/244: 7230901_Side_to_side_DB_lunges" || { echo "FAIL: 7230901_Side_to_side_DB_lunges"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 188: already exists"
fi
COUNT=$((COUNT+1))

# 189/244: Single DB narrow press
if [ ! -f "$DIR/7392232_Single_DB_narrow_press.mp4" ]; then
  curl -s -L -o "$DIR/7392232_Single_DB_narrow_press.mp4" "https://video.trainerize.com/videos/28368934/637865c6-70ba-486c-a151-01d78cc8ea9b/HD.mp4" && echo "OK 189/244: 7392232_Single_DB_narrow_press" || { echo "FAIL: 7392232_Single_DB_narrow_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 189: already exists"
fi
COUNT=$((COUNT+1))

# 190/244: Ski erg
if [ ! -f "$DIR/5486146_Ski_erg.mp4" ]; then
  curl -s -L -o "$DIR/5486146_Ski_erg.mp4" "https://video.trainerize.com/videos/10457648/e498522a-7083-4082-b537-568653af9a7b/HD.mp4" && echo "OK 190/244: 5486146_Ski_erg" || { echo "FAIL: 5486146_Ski_erg"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 190: already exists"
fi
COUNT=$((COUNT+1))

# 191/244: Skull crusher glute bridge
if [ ! -f "$DIR/6396343_Skull_crusher_glute_bridge.mp4" ]; then
  curl -s -L -o "$DIR/6396343_Skull_crusher_glute_bridge.mp4" "https://video.trainerize.com/videos/17415064/40a975ce-afdc-4904-bf76-b9d49f5a90b5/HD.mp4" && echo "OK 191/244: 6396343_Skull_crusher_glute_bridge" || { echo "FAIL: 6396343_Skull_crusher_glute_bridge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 191: already exists"
fi
COUNT=$((COUNT+1))

# 192/244: SL cable dead lift
if [ ! -f "$DIR/5504155_SL_cable_dead_lift.mp4" ]; then
  curl -s -L -o "$DIR/5504155_SL_cable_dead_lift.mp4" "https://video.trainerize.com/videos/10630837/156bc51d-78f1-46a2-a3b7-63e2c8588487/HD.mp4" && echo "OK 192/244: 5504155_SL_cable_dead_lift" || { echo "FAIL: 5504155_SL_cable_dead_lift"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 192: already exists"
fi
COUNT=$((COUNT+1))

# 193/244: SL cable hamstring curl
if [ ! -f "$DIR/5395006_SL_cable_hamstring_curl.mp4" ]; then
  curl -s -L -o "$DIR/5395006_SL_cable_hamstring_curl.mp4" "https://video.trainerize.com/videos/9662569/fdbf8f5b-3d43-41d1-9c6a-902199864191/HD.mp4" && echo "OK 193/244: 5395006_SL_cable_hamstring_curl" || { echo "FAIL: 5395006_SL_cable_hamstring_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 193: already exists"
fi
COUNT=$((COUNT+1))

# 194/244: SL DB wide RDL into RDL pulse
if [ ! -f "$DIR/5504160_SL_DB_wide_RDL_into_RDL_pulse.mp4" ]; then
  curl -s -L -o "$DIR/5504160_SL_DB_wide_RDL_into_RDL_pulse.mp4" "https://video.trainerize.com/videos/10630868/2f5673b2-c40f-46c9-be60-8ad44daae877/HD.mp4" && echo "OK 194/244: 5504160_SL_DB_wide_RDL_into_RDL_pulse" || { echo "FAIL: 5504160_SL_DB_wide_RDL_into_RDL_pulse"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 194: already exists"
fi
COUNT=$((COUNT+1))

# 195/244: SL hip thrust on bench
if [ ! -f "$DIR/5504157_SL_hip_thrust_on_bench.mp4" ]; then
  curl -s -L -o "$DIR/5504157_SL_hip_thrust_on_bench.mp4" "https://video.trainerize.com/videos/10630852/a4ff1ea0-8375-487c-b6ef-172e0e019add/HD.mp4" && echo "OK 195/244: 5504157_SL_hip_thrust_on_bench" || { echo "FAIL: 5504157_SL_hip_thrust_on_bench"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 195: already exists"
fi
COUNT=$((COUNT+1))

# 196/244: SL hip thrusts
if [ ! -f "$DIR/5395085_SL_hip_thrusts.mp4" ]; then
  curl -s -L -o "$DIR/5395085_SL_hip_thrusts.mp4" "https://video.trainerize.com/videos/9662968/c291ffce-1769-4a29-b26a-62bdd66f905b/HD.mp4" && echo "OK 196/244: 5395085_SL_hip_thrusts" || { echo "FAIL: 5395085_SL_hip_thrusts"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 196: already exists"
fi
COUNT=$((COUNT+1))

# 197/244: SL kneeling squat w/ KB press
if [ ! -f "$DIR/6925702_SL_kneeling_squat_w_KB_press.mp4" ]; then
  curl -s -L -o "$DIR/6925702_SL_kneeling_squat_w_KB_press.mp4" "https://video.trainerize.com/videos/22670544/42d8b276-bcfc-4a83-9e07-6f733026fd30/HD.mp4" && echo "OK 197/244: 6925702_SL_kneeling_squat_w_KB_press" || { echo "FAIL: 6925702_SL_kneeling_squat_w_KB_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 197: already exists"
fi
COUNT=$((COUNT+1))

# 198/244: SL RDL hold w/ DB row
if [ ! -f "$DIR/6393708_SL_RDL_hold_w_DB_row.mp4" ]; then
  curl -s -L -o "$DIR/6393708_SL_RDL_hold_w_DB_row.mp4" "https://video.trainerize.com/videos/17398037/e389c9e3-71ac-4c18-904c-1633de28ad9c/HD.mp4" && echo "OK 198/244: 6393708_SL_RDL_hold_w_DB_row" || { echo "FAIL: 6393708_SL_RDL_hold_w_DB_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 198: already exists"
fi
COUNT=$((COUNT+1))

# 199/244: SL SPLIT SQUAT
if [ ! -f "$DIR/5504412_SL_SPLIT_SQUAT.mp4" ]; then
  curl -s -L -o "$DIR/5504412_SL_SPLIT_SQUAT.mp4" "https://video.trainerize.com/videos/10632139/1a77ecc4-9969-4fa5-a997-be73feae6e46/HD.mp4" && echo "OK 199/244: 5504412_SL_SPLIT_SQUAT" || { echo "FAIL: 5504412_SL_SPLIT_SQUAT"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 199: already exists"
fi
COUNT=$((COUNT+1))

# 200/244: SL wall bridge
if [ ! -f "$DIR/6518737_SL_wall_bridge.mp4" ]; then
  curl -s -L -o "$DIR/6518737_SL_wall_bridge.mp4" "https://video.trainerize.com/videos/18576332/9ff4cd12-f93e-4494-8c27-942f98305152/HD.mp4" && echo "OK 200/244: 6518737_SL_wall_bridge" || { echo "FAIL: 6518737_SL_wall_bridge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 200: already exists"
fi
COUNT=$((COUNT+1))

# 201/244: Smith machine BW row
if [ ! -f "$DIR/5504162_Smith_machine_BW_row.mp4" ]; then
  curl -s -L -o "$DIR/5504162_Smith_machine_BW_row.mp4" "https://video.trainerize.com/videos/10630877/a82c52ad-5335-4a08-8d97-6ef754b6bb52/HD.mp4" && echo "OK 201/244: 5504162_Smith_machine_BW_row" || { echo "FAIL: 5504162_Smith_machine_BW_row"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 201: already exists"
fi
COUNT=$((COUNT+1))

# 202/244: Smith SL RDL
if [ ! -f "$DIR/5395033_Smith_SL_RDL.mp4" ]; then
  curl -s -L -o "$DIR/5395033_Smith_SL_RDL.mp4" "https://video.trainerize.com/videos/9662674/9b9225be-f236-4712-b383-4d1fad1a689e/HD.mp4" && echo "OK 202/244: 5395033_Smith_SL_RDL" || { echo "FAIL: 5395033_Smith_SL_RDL"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 202: already exists"
fi
COUNT=$((COUNT+1))

# 203/244: Smith split squat
if [ ! -f "$DIR/5395031_Smith_split_squat.mp4" ]; then
  curl -s -L -o "$DIR/5395031_Smith_split_squat.mp4" "https://video.trainerize.com/videos/9662660/7c228547-129c-4ed6-a7e5-05cf791a8c4a/HD.mp4" && echo "OK 203/244: 5395031_Smith_split_squat" || { echo "FAIL: 5395031_Smith_split_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 203: already exists"
fi
COUNT=$((COUNT+1))

# 204/244: Smith sumo squat
if [ ! -f "$DIR/5510947_Smith_sumo_squat.mp4" ]; then
  curl -s -L -o "$DIR/5510947_Smith_sumo_squat.mp4" "https://video.trainerize.com/videos/10682783/4479b7fe-f655-4ff8-b7fc-18dfdc303da6/HD.mp4" && echo "OK 204/244: 5510947_Smith_sumo_squat" || { echo "FAIL: 5510947_Smith_sumo_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 204: already exists"
fi
COUNT=$((COUNT+1))

# 205/244: Split squat w/ lateral/ frontal holds
if [ ! -f "$DIR/6393696_Split_squat_w_lateral_frontal_holds.mp4" ]; then
  curl -s -L -o "$DIR/6393696_Split_squat_w_lateral_frontal_holds.mp4" "https://video.trainerize.com/videos/17397937/b0511ca3-8000-41ba-8b25-b1fa53dc741b/HD.mp4" && echo "OK 205/244: 6393696_Split_squat_w_lateral_frontal_holds" || { echo "FAIL: 6393696_Split_squat_w_lateral_frontal_holds"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 205: already exists"
fi
COUNT=$((COUNT+1))

# 206/244: SQUAT
if [ ! -f "$DIR/5395189_SQUAT.mp4" ]; then
  curl -s -L -o "$DIR/5395189_SQUAT.mp4" "https://video.trainerize.com/videos/9663417/d16efab8-7e73-4fae-b354-aa0af2694c1c/HD.mp4" && echo "OK 206/244: 5395189_SQUAT" || { echo "FAIL: 5395189_SQUAT"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 206: already exists"
fi
COUNT=$((COUNT+1))

# 207/244: Squat w/ DB swing into RDL w/ Db swing
if [ ! -f "$DIR/7230837_Squat_w_DB_swing_into_RDL_w_Db_swing.mp4" ]; then
  curl -s -L -o "$DIR/7230837_Squat_w_DB_swing_into_RDL_w_Db_swing.mp4" "https://video.trainerize.com/videos/26193712/80727cf1-7a16-4d74-a36d-805599c98360/HD.mp4" && echo "OK 207/244: 7230837_Squat_w_DB_swing_into_RDL_w_Db_swing" || { echo "FAIL: 7230837_Squat_w_DB_swing_into_RDL_w_Db_swing"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 207: already exists"
fi
COUNT=$((COUNT+1))

# 208/244: Squatting alt Db bicep curl
if [ ! -f "$DIR/7227542_Squatting_alt_Db_bicep_curl.mp4" ]; then
  curl -s -L -o "$DIR/7227542_Squatting_alt_Db_bicep_curl.mp4" "https://video.trainerize.com/videos/26162654/aa8e5071-b543-499e-bec7-be50ddc0406b/HD.mp4" && echo "OK 208/244: 7227542_Squatting_alt_Db_bicep_curl" || { echo "FAIL: 7227542_Squatting_alt_Db_bicep_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 208: already exists"
fi
COUNT=$((COUNT+1))

# 209/244: Stair master every other step
if [ ! -f "$DIR/5503995_Stair_master_every_other_step.mp4" ]; then
  curl -s -L -o "$DIR/5503995_Stair_master_every_other_step.mp4" "https://video.trainerize.com/videos/10628889/81e2ca68-1dbd-4a0d-a7b1-e36d4753b54f/HD.mp4" && echo "OK 209/244: 5503995_Stair_master_every_other_step" || { echo "FAIL: 5503995_Stair_master_every_other_step"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 209: already exists"
fi
COUNT=$((COUNT+1))

# 210/244: Stair master side walk
if [ ! -f "$DIR/5503990_Stair_master_side_walk.mp4" ]; then
  curl -s -L -o "$DIR/5503990_Stair_master_side_walk.mp4" "https://video.trainerize.com/videos/10628846/756907c9-179e-4568-ab8e-83b320f6cd21/HD.mp4" && echo "OK 210/244: 5503990_Stair_master_side_walk" || { echo "FAIL: 5503990_Stair_master_side_walk"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 210: already exists"
fi
COUNT=$((COUNT+1))

# 211/244: Stair master wide step
if [ ! -f "$DIR/5503992_Stair_master_wide_step.mp4" ]; then
  curl -s -L -o "$DIR/5503992_Stair_master_wide_step.mp4" "https://video.trainerize.com/videos/10628872/1ccb3503-94b9-436d-8485-cb08cc6e94ae/HD.mp4" && echo "OK 211/244: 5503992_Stair_master_wide_step" || { echo "FAIL: 5503992_Stair_master_wide_step"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 211: already exists"
fi
COUNT=$((COUNT+1))

# 212/244: Standing let knee to elbow
if [ ! -f "$DIR/6393966_Standing_let_knee_to_elbow.mp4" ]; then
  curl -s -L -o "$DIR/6393966_Standing_let_knee_to_elbow.mp4" "https://video.trainerize.com/videos/17400226/b459238f-7403-4ca8-80fc-cadf4c2f8986/HD.mp4" && echo "OK 212/244: 6393966_Standing_let_knee_to_elbow" || { echo "FAIL: 6393966_Standing_let_knee_to_elbow"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 212: already exists"
fi
COUNT=$((COUNT+1))

# 213/244: Step up slow down
if [ ! -f "$DIR/5504415_Step_up_slow_down.mp4" ]; then
  curl -s -L -o "$DIR/5504415_Step_up_slow_down.mp4" "https://video.trainerize.com/videos/10632149/5f80e29f-b4d8-4e14-b96e-d14f6a41be56/HD.mp4" && echo "OK 213/244: 5504415_Step_up_slow_down" || { echo "FAIL: 5504415_Step_up_slow_down"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 213: already exists"
fi
COUNT=$((COUNT+1))

# 214/244: Straight bar frontal raises
if [ ! -f "$DIR/5504061_Straight_bar_frontal_raises.mp4" ]; then
  curl -s -L -o "$DIR/5504061_Straight_bar_frontal_raises.mp4" "https://video.trainerize.com/videos/10629347/23fbfa08-21bb-42b3-b52f-6e7bf544c7e5/HD.mp4" && echo "OK 214/244: 5504061_Straight_bar_frontal_raises" || { echo "FAIL: 5504061_Straight_bar_frontal_raises"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 214: already exists"
fi
COUNT=$((COUNT+1))

# 215/244: Straight leg Kickback pulse
if [ ! -f "$DIR/5504004_Straight_leg_Kickback_pulse.mp4" ]; then
  curl -s -L -o "$DIR/5504004_Straight_leg_Kickback_pulse.mp4" "https://video.trainerize.com/videos/10628976/14354e6c-6b97-4a69-bd00-ca1d0b07a513/HD.mp4" && echo "OK 215/244: 5504004_Straight_leg_Kickback_pulse" || { echo "FAIL: 5504004_Straight_leg_Kickback_pulse"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 215: already exists"
fi
COUNT=$((COUNT+1))

# 216/244: Sumo squat step outs
if [ ! -f "$DIR/7230944_Sumo_squat_step_outs.mp4" ]; then
  curl -s -L -o "$DIR/7230944_Sumo_squat_step_outs.mp4" "https://video.trainerize.com/videos/26194155/5585335a-0f60-494b-bbf8-b7b269fdc76c/HD.mp4" && echo "OK 216/244: 7230944_Sumo_squat_step_outs" || { echo "FAIL: 7230944_Sumo_squat_step_outs"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 216: already exists"
fi
COUNT=$((COUNT+1))

# 217/244: Super man banded lat pulls
if [ ! -f "$DIR/7230670_Super_man_banded_lat_pulls.mp4" ]; then
  curl -s -L -o "$DIR/7230670_Super_man_banded_lat_pulls.mp4" "https://video.trainerize.com/videos/26192734/441e4fbf-7b04-4ea6-95d5-d7a0095eea11/HD.mp4" && echo "OK 217/244: 7230670_Super_man_banded_lat_pulls" || { echo "FAIL: 7230670_Super_man_banded_lat_pulls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 217: already exists"
fi
COUNT=$((COUNT+1))

# 218/244: Super man SB holds
if [ ! -f "$DIR/7230646_Super_man_SB_holds.mp4" ]; then
  curl -s -L -o "$DIR/7230646_Super_man_SB_holds.mp4" "https://video.trainerize.com/videos/26192566/f9951b72-abbd-4dae-b628-2efdf66619c5/HD.mp4" && echo "OK 218/244: 7230646_Super_man_SB_holds" || { echo "FAIL: 7230646_Super_man_SB_holds"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 218: already exists"
fi
COUNT=$((COUNT+1))

# 219/244: Suspended pistol squat
if [ ! -f "$DIR/5395037_Suspended_pistol_squat.mp4" ]; then
  curl -s -L -o "$DIR/5395037_Suspended_pistol_squat.mp4" "https://video.trainerize.com/videos/9662691/172d6080-f7fe-45c3-b48e-6067f5773fc2/HD.mp4" && echo "OK 219/244: 5395037_Suspended_pistol_squat" || { echo "FAIL: 5395037_Suspended_pistol_squat"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 219: already exists"
fi
COUNT=$((COUNT+1))

# 220/244: Table top shuffle
if [ ! -f "$DIR/7230925_Table_top_shuffle.mp4" ]; then
  curl -s -L -o "$DIR/7230925_Table_top_shuffle.mp4" "https://video.trainerize.com/videos/26194050/a69fed10-dd43-4774-81d0-6b02566a3e34/HD.mp4" && echo "OK 220/244: 7230925_Table_top_shuffle" || { echo "FAIL: 7230925_Table_top_shuffle"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 220: already exists"
fi
COUNT=$((COUNT+1))

# 221/244: Toe taps cardio
if [ ! -f "$DIR/6918094_Toe_taps_cardio.mp4" ]; then
  curl -s -L -o "$DIR/6918094_Toe_taps_cardio.mp4" "https://video.trainerize.com/videos/22614556/00ebcd1f-3818-4888-9703-66fd46a063b2/HD.mp4" && echo "OK 221/244: 6918094_Toe_taps_cardio" || { echo "FAIL: 6918094_Toe_taps_cardio"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 221: already exists"
fi
COUNT=$((COUNT+1))

# 222/244: Tricep DB overhead ext
if [ ! -f "$DIR/5504099_Tricep_DB_overhead_ext.mp4" ]; then
  curl -s -L -o "$DIR/5504099_Tricep_DB_overhead_ext.mp4" "https://video.trainerize.com/videos/10629813/fd666303-d6ef-4aa2-b435-1d477baed4d1/HD.mp4" && echo "OK 222/244: 5504099_Tricep_DB_overhead_ext" || { echo "FAIL: 5504099_Tricep_DB_overhead_ext"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 222: already exists"
fi
COUNT=$((COUNT+1))

# 223/244: Tricep DB overhead ext 2
if [ ! -f "$DIR/5510983_Tricep_DB_overhead_ext_2.mp4" ]; then
  curl -s -L -o "$DIR/5510983_Tricep_DB_overhead_ext_2.mp4" "https://video.trainerize.com/videos/10683016/cb1a5522-4338-4776-833f-708477c62f7b/HD.mp4" && echo "OK 223/244: 5510983_Tricep_DB_overhead_ext_2" || { echo "FAIL: 5510983_Tricep_DB_overhead_ext_2"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 223: already exists"
fi
COUNT=$((COUNT+1))

# 224/244: Tricep kickback 2 rep grip change
if [ ! -f "$DIR/7231405_Tricep_kickback_2_rep_grip_change.mp4" ]; then
  curl -s -L -o "$DIR/7231405_Tricep_kickback_2_rep_grip_change.mp4" "https://video.trainerize.com/videos/26196765/5ce9ce15-f400-4ad5-a944-d5a6226a028f/HD.mp4" && echo "OK 224/244: 7231405_Tricep_kickback_2_rep_grip_change" || { echo "FAIL: 7231405_Tricep_kickback_2_rep_grip_change"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 224: already exists"
fi
COUNT=$((COUNT+1))

# 225/244: Tricep wall ext w/banded abd hold
if [ ! -f "$DIR/6396316_Tricep_wall_ext_wbanded_abd_hold.mp4" ]; then
  curl -s -L -o "$DIR/6396316_Tricep_wall_ext_wbanded_abd_hold.mp4" "https://video.trainerize.com/videos/17414777/1c80a5b7-7aec-408a-8726-27ca74ae7912/HD.mp4" && echo "OK 225/244: 6396316_Tricep_wall_ext_wbanded_abd_hold" || { echo "FAIL: 6396316_Tricep_wall_ext_wbanded_abd_hold"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 225: already exists"
fi
COUNT=$((COUNT+1))

# 226/244: TRX bicep curl
if [ ! -f "$DIR/5510990_TRX_bicep_curl.mp4" ]; then
  curl -s -L -o "$DIR/5510990_TRX_bicep_curl.mp4" "https://video.trainerize.com/videos/10683061/411c4a5e-b477-4eaa-a87f-9c8ae53ad002/HD.mp4" && echo "OK 226/244: 5510990_TRX_bicep_curl" || { echo "FAIL: 5510990_TRX_bicep_curl"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 226: already exists"
fi
COUNT=$((COUNT+1))

# 227/244: Upright row w/ banded glute kick hold
if [ ! -f "$DIR/6393807_Upright_row_w_banded_glute_kick_hold.mp4" ]; then
  curl -s -L -o "$DIR/6393807_Upright_row_w_banded_glute_kick_hold.mp4" "https://video.trainerize.com/videos/17399000/64cf7816-a660-4206-973f-fb2ff6368aba/HD.mp4" && echo "OK 227/244: 6393807_Upright_row_w_banded_glute_kick_hold" || { echo "FAIL: 6393807_Upright_row_w_banded_glute_kick_hold"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 227: already exists"
fi
COUNT=$((COUNT+1))

# 228/244: V crunches
if [ ! -f "$DIR/6518780_V_crunches.mp4" ]; then
  curl -s -L -o "$DIR/6518780_V_crunches.mp4" "https://video.trainerize.com/videos/18576555/976ef358-44ea-4fc2-846a-bcc3ca3426e3/HD.mp4" && echo "OK 228/244: 6518780_V_crunches" || { echo "FAIL: 6518780_V_crunches"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 228: already exists"
fi
COUNT=$((COUNT+1))

# 229/244: Wall bridge
if [ ! -f "$DIR/6518738_Wall_bridge.mp4" ]; then
  curl -s -L -o "$DIR/6518738_Wall_bridge.mp4" "https://video.trainerize.com/videos/18576352/14699c30-b544-464e-9273-314bec8e260e/HD.mp4" && echo "OK 229/244: 6518738_Wall_bridge" || { echo "FAIL: 6518738_Wall_bridge"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 229: already exists"
fi
COUNT=$((COUNT+1))

# 230/244: Wall hold alt leg plate slides
if [ ! -f "$DIR/6393799_Wall_hold_alt_leg_plate_slides.mp4" ]; then
  curl -s -L -o "$DIR/6393799_Wall_hold_alt_leg_plate_slides.mp4" "https://video.trainerize.com/videos/17398948/7061575a-be73-4900-b55e-b52b80608ee8/HD.mp4" && echo "OK 230/244: 6393799_Wall_hold_alt_leg_plate_slides" || { echo "FAIL: 6393799_Wall_hold_alt_leg_plate_slides"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 230: already exists"
fi
COUNT=$((COUNT+1))

# 231/244: Weighted airplane wall sit
if [ ! -f "$DIR/7230829_Weighted_airplane_wall_sit.mp4" ]; then
  curl -s -L -o "$DIR/7230829_Weighted_airplane_wall_sit.mp4" "https://video.trainerize.com/videos/26193614/864386cb-8f43-4d69-930c-108fde031b70/HD.mp4" && echo "OK 231/244: 7230829_Weighted_airplane_wall_sit" || { echo "FAIL: 7230829_Weighted_airplane_wall_sit"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 231: already exists"
fi
COUNT=$((COUNT+1))

# 232/244: Wide bicep curl into DB press
if [ ! -f "$DIR/7231470_Wide_bicep_curl_into_DB_press.mp4" ]; then
  curl -s -L -o "$DIR/7231470_Wide_bicep_curl_into_DB_press.mp4" "https://video.trainerize.com/videos/26197369/fdee5a8c-4938-400a-8bfa-6286aee9efe5/HD.mp4" && echo "OK 232/244: 7231470_Wide_bicep_curl_into_DB_press" || { echo "FAIL: 7231470_Wide_bicep_curl_into_DB_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 232: already exists"
fi
COUNT=$((COUNT+1))

# 233/244: Wide bicep curl into neutral press
if [ ! -f "$DIR/7227536_Wide_bicep_curl_into_neutral_press.mp4" ]; then
  curl -s -L -o "$DIR/7227536_Wide_bicep_curl_into_neutral_press.mp4" "https://video.trainerize.com/videos/26162529/3738031c-b1c5-4e2b-ac32-fcc2e216e6d1/HD.mp4" && echo "OK 233/244: 7227536_Wide_bicep_curl_into_neutral_press" || { echo "FAIL: 7227536_Wide_bicep_curl_into_neutral_press"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 233: already exists"
fi
COUNT=$((COUNT+1))

# 234/244: Wide cable pull through
if [ ! -f "$DIR/5395012_Wide_cable_pull_through.mp4" ]; then
  curl -s -L -o "$DIR/5395012_Wide_cable_pull_through.mp4" "https://video.trainerize.com/videos/9662593/efbad066-0f86-4b65-b58d-3dac6a0e5983/HD.mp4" && echo "OK 234/244: 5395012_Wide_cable_pull_through" || { echo "FAIL: 5395012_Wide_cable_pull_through"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 234: already exists"
fi
COUNT=$((COUNT+1))

# 235/244: Wide DB 2/3 squats
if [ ! -f "$DIR/7230431_Wide_DB_23_squats.mp4" ]; then
  curl -s -L -o "$DIR/7230431_Wide_DB_23_squats.mp4" "https://video.trainerize.com/videos/26191132/aa8eeaa4-a563-436d-aba6-37bb6519b862/HD.mp4" && echo "OK 235/244: 7230431_Wide_DB_23_squats" || { echo "FAIL: 7230431_Wide_DB_23_squats"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 235: already exists"
fi
COUNT=$((COUNT+1))

# 236/244: WIDE DB RDL
if [ ! -f "$DIR/7230418_WIDE_DB_RDL.mp4" ]; then
  curl -s -L -o "$DIR/7230418_WIDE_DB_RDL.mp4" "https://video.trainerize.com/videos/26191035/173314a1-c152-4637-9e8d-f08249fa3403/HD.mp4" && echo "OK 236/244: 7230418_WIDE_DB_RDL" || { echo "FAIL: 7230418_WIDE_DB_RDL"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 236: already exists"
fi
COUNT=$((COUNT+1))

# 237/244: Wide grip table pulls
if [ ! -f "$DIR/6097208_Wide_grip_table_pulls.mp4" ]; then
  curl -s -L -o "$DIR/6097208_Wide_grip_table_pulls.mp4" "https://video.trainerize.com/videos/14525467/265320c1-1de6-4d0b-b633-6c29ba156a16/HD.mp4" && echo "OK 237/244: 6097208_Wide_grip_table_pulls" || { echo "FAIL: 6097208_Wide_grip_table_pulls"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 237: already exists"
fi
COUNT=$((COUNT+1))

# 238/244: Wide stance cable dead lift
if [ ! -f "$DIR/5504150_Wide_stance_cable_dead_lift.mp4" ]; then
  curl -s -L -o "$DIR/5504150_Wide_stance_cable_dead_lift.mp4" "https://video.trainerize.com/videos/10630817/e658fcaa-621b-43e1-8ea7-906875c5b447/HD.mp4" && echo "OK 238/244: 5504150_Wide_stance_cable_dead_lift" || { echo "FAIL: 5504150_Wide_stance_cable_dead_lift"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 238: already exists"
fi
COUNT=$((COUNT+1))

# 239/244: Wide stance knee to elbows
if [ ! -f "$DIR/6918071_Wide_stance_knee_to_elbows.mp4" ]; then
  curl -s -L -o "$DIR/6918071_Wide_stance_knee_to_elbows.mp4" "https://video.trainerize.com/videos/22614370/554b20f6-bfdd-4de4-8292-b1f2d4b7e894/HD.mp4" && echo "OK 239/244: 6918071_Wide_stance_knee_to_elbows" || { echo "FAIL: 6918071_Wide_stance_knee_to_elbows"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 239: already exists"
fi
COUNT=$((COUNT+1))

# 240/244: Wide to narrow jump squats
if [ ! -f "$DIR/7230843_Wide_to_narrow_jump_squats.mp4" ]; then
  curl -s -L -o "$DIR/7230843_Wide_to_narrow_jump_squats.mp4" "https://video.trainerize.com/videos/26193731/cc48256c-b9f1-411a-9b59-2f4c69a2c288/HD.mp4" && echo "OK 240/244: 7230843_Wide_to_narrow_jump_squats" || { echo "FAIL: 7230843_Wide_to_narrow_jump_squats"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 240: already exists"
fi
COUNT=$((COUNT+1))

# 241/244: Wood chop high to low
if [ ! -f "$DIR/5486145_Wood_chop_high_to_low.mp4" ]; then
  curl -s -L -o "$DIR/5486145_Wood_chop_high_to_low.mp4" "https://video.trainerize.com/videos/10457645/ab269804-09bf-4ec3-b0d3-65261afb2734/HD.mp4" && echo "OK 241/244: 5486145_Wood_chop_high_to_low" || { echo "FAIL: 5486145_Wood_chop_high_to_low"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 241: already exists"
fi
COUNT=$((COUNT+1))

# 242/244: xx
if [ ! -f "$DIR/5395042_xx.mp4" ]; then
  curl -s -L -o "$DIR/5395042_xx.mp4" "https://video.trainerize.com/videos/9751393/482ec9ab-32c9-4b23-b4bb-a90176f89cff/HD.mp4" && echo "OK 242/244: 5395042_xx" || { echo "FAIL: 5395042_xx"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 242: already exists"
fi
COUNT=$((COUNT+1))

# 243/244: xxx
if [ ! -f "$DIR/5395060_xxx.mp4" ]; then
  curl -s -L -o "$DIR/5395060_xxx.mp4" "https://video.trainerize.com/videos/9751404/5fe73b48-1da5-4ce4-8e3a-61d47c7c46ba/HD.mp4" && echo "OK 243/244: 5395060_xxx" || { echo "FAIL: 5395060_xxx"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 243: already exists"
fi
COUNT=$((COUNT+1))

# 244/244: xxxx
if [ ! -f "$DIR/5395070_xxxx.mp4" ]; then
  curl -s -L -o "$DIR/5395070_xxxx.mp4" "https://video.trainerize.com/videos/9751410/2f77fb32-7d5e-4ec1-8d2d-4d26d43e7476/HD.mp4" && echo "OK 244/244: 5395070_xxxx" || { echo "FAIL: 5395070_xxxx"; FAIL=$((FAIL+1)); }
else
  echo "SKIP 244: already exists"
fi
COUNT=$((COUNT+1))

echo "=== Done: $COUNT attempted, $FAIL failed ==="
