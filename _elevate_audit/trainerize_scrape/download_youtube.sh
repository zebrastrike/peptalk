#!/bin/bash
DIR="C:/Users/keyse_pt9dxr4/peptalk/_elevate_audit/trainerize_scrape/videos_youtube"
mkdir -p "$DIR"
YTDLP="C:/Users/keyse_pt9dxr4/AppData/Roaming/Python/Python314/Scripts/yt-dlp.exe"
TOTAL=369
COUNT=0
FAIL=0
SKIP=0

# 1/369
if ls "$DIR/16485782_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 1: 16485782 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16485782_howto_Dumbbell_Squats_Best_Beginner_leg_exercise_for_strength_ulissesworld_legd.mp4" "https://www.youtube.com/watch?v=OTyb4YUDYYY" --quiet --no-warnings 2>/dev/null && echo "OK 1/369: 16485782_howto_Dumbbell_Squats_Best_Beginner_leg_e" || { echo "FAIL 1: 16485782_howto_Dumbbell_Squats_Best_Beginner_leg_e"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 2/369
if ls "$DIR/7147365_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 2: 7147365 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7147365_1_Exercise_YOU_NEED_For_A_More_Powerful_SQUAT_amp_DEADLIFT_How_To_Barbell_Duck.mp4" "https://www.youtube.com/watch?v=ffYczJkhdU8" --quiet --no-warnings 2>/dev/null && echo "OK 2/369: 7147365_1_Exercise_YOU_NEED_For_A_More_Powerful_SQ" || { echo "FAIL 2: 7147365_1_Exercise_YOU_NEED_For_A_More_Powerful_SQ"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 3/369
if ls "$DIR/7006906_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 3: 7006906 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006906_14_FREEMOTION_TRICEPS.mp4" "https://www.youtube.com/watch?v=_irBRRXV9G4" --quiet --no-warnings 2>/dev/null && echo "OK 3/369: 7006906_14_FREEMOTION_TRICEPS" || { echo "FAIL 3: 7006906_14_FREEMOTION_TRICEPS"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 4/369
if ls "$DIR/5157240_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 4: 5157240 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5157240_23_cable_squat_with_pulse.mp4" "https://www.youtube.com/watch?v=ojguss7o4wo" --quiet --no-warnings 2>/dev/null && echo "OK 4/369: 5157240_23_cable_squat_with_pulse" || { echo "FAIL 4: 5157240_23_cable_squat_with_pulse"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 5/369
if ls "$DIR/12658636_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 5: 12658636 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/12658636_3_Favorite_Glute_Exercises_Kassem_Hanson_vs_John_Meadows.mp4" "https://www.youtube.com/watch?v=RvaZpyo01vQ" --quiet --no-warnings 2>/dev/null && echo "OK 5/369: 12658636_3_Favorite_Glute_Exercises_Kassem_Hanson_" || { echo "FAIL 5: 12658636_3_Favorite_Glute_Exercises_Kassem_Hanson_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 6/369
if ls "$DIR/6892573_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 6: 6892573 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6892573_3-Way_Landmine_Shoulder_Shocker.mp4" "https://www.youtube.com/watch?v=1Su5ErtgbGc" --quiet --no-warnings 2>/dev/null && echo "OK 6/369: 6892573_3-Way_Landmine_Shoulder_Shocker" || { echo "FAIL 6: 6892573_3-Way_Landmine_Shoulder_Shocker"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 7/369
if ls "$DIR/8967384_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 7: 8967384 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8967384_5_Best_Sciatica_Stretches_for_Piriformis_Syndrome_-_Ask_Doctor_Jo.mp4" "https://www.youtube.com/watch?v=4UoITjubrgE" --quiet --no-warnings 2>/dev/null && echo "OK 7/369: 8967384_5_Best_Sciatica_Stretches_for_Piriformis_S" || { echo "FAIL 7: 8967384_5_Best_Sciatica_Stretches_for_Piriformis_S"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 8/369
if ls "$DIR/14439947_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 8: 14439947 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439947_5_Exercises_to_Alleviate_Back_Pain_Posterior_Chain_Strengthening.mp4" "https://www.youtube.com/watch?v=6SODSts-Afo" --quiet --no-warnings 2>/dev/null && echo "OK 8/369: 14439947_5_Exercises_to_Alleviate_Back_Pain_Poster" || { echo "FAIL 8: 14439947_5_Exercises_to_Alleviate_Back_Pain_Poster"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 9/369
if ls "$DIR/9371445_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 9: 9371445 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9371445_5EW_Exercises_Scapula_Retraction_Push-Up.mp4" "https://www.youtube.com/watch?v=lAJz3EwU1uk" --quiet --no-warnings 2>/dev/null && echo "OK 9/369: 9371445_5EW_Exercises_Scapula_Retraction_Push-Up" || { echo "FAIL 9: 9371445_5EW_Exercises_Scapula_Retraction_Push-Up"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 10/369
if ls "$DIR/2297843_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 10: 2297843 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297843_Ab_dolly_hamstring_rolls.mp4" "https://www.youtube.com/watch?v=_W-li5vJ9Ck" --quiet --no-warnings 2>/dev/null && echo "OK 10/369: 2297843_Ab_dolly_hamstring_rolls" || { echo "FAIL 10: 2297843_Ab_dolly_hamstring_rolls"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 11/369
if ls "$DIR/2297837_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 11: 2297837 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297837_Ab_dolly_hamstringglute_raise.mp4" "https://www.youtube.com/watch?v=zSztSZpX2hg" --quiet --no-warnings 2>/dev/null && echo "OK 11/369: 2297837_Ab_dolly_hamstringglute_raise" || { echo "FAIL 11: 2297837_Ab_dolly_hamstringglute_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 12/369
if ls "$DIR/5249186_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 12: 5249186 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5249186_Ab_dolly_roll_outs.mp4" "https://www.youtube.com/watch?v=KiFBnoGTQMU" --quiet --no-warnings 2>/dev/null && echo "OK 12/369: 5249186_Ab_dolly_roll_outs" || { echo "FAIL 12: 5249186_Ab_dolly_roll_outs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 13/369
if ls "$DIR/5246879_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 13: 5246879 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246879_Abduction_machine_hovering.mp4" "https://www.youtube.com/watch?v=LOIJVU97pCQ" --quiet --no-warnings 2>/dev/null && echo "OK 13/369: 5246879_Abduction_machine_hovering" || { echo "FAIL 13: 5246879_Abduction_machine_hovering"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 14/369
if ls "$DIR/5246682_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 14: 5246682 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246682_Abs_glute_raises_on_bench.mp4" "https://www.youtube.com/watch?v=PFNtHQp6Nmc" --quiet --no-warnings 2>/dev/null && echo "OK 14/369: 5246682_Abs_glute_raises_on_bench" || { echo "FAIL 14: 5246682_Abs_glute_raises_on_bench"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 15/369
if ls "$DIR/9489771_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 15: 9489771 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9489771_Agility_Ladder_Warm_Up.mp4" "https://www.youtube.com/watch?v=iy2NaeKDu5c" --quiet --no-warnings 2>/dev/null && echo "OK 15/369: 9489771_Agility_Ladder_Warm_Up" || { echo "FAIL 15: 9489771_Agility_Ladder_Warm_Up"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 16/369
if ls "$DIR/5249213_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 16: 5249213 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5249213_Airex_backwards_balance.mp4" "https://www.youtube.com/watch?v=BYnkav1wwH8" --quiet --no-warnings 2>/dev/null && echo "OK 16/369: 5249213_Airex_backwards_balance" || { echo "FAIL 16: 5249213_Airex_backwards_balance"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 17/369
if ls "$DIR/5246749_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 17: 5246749 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246749_Alt_knee_to_elbow_abs.mp4" "https://www.youtube.com/watch?v=n9RmTG_joFo" --quiet --no-warnings 2>/dev/null && echo "OK 17/369: 5246749_Alt_knee_to_elbow_abs" || { echo "FAIL 17: 5246749_Alt_knee_to_elbow_abs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 18/369
if ls "$DIR/7771681_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 18: 7771681 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7771681_Alternating_Dumbbell_Hammer_Curls.mp4" "https://www.youtube.com/watch?v=5Mf4Xfuk6-Q" --quiet --no-warnings 2>/dev/null && echo "OK 18/369: 7771681_Alternating_Dumbbell_Hammer_Curls" || { echo "FAIL 18: 7771681_Alternating_Dumbbell_Hammer_Curls"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 19/369
if ls "$DIR/7285820_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 19: 7285820 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7285820_Alternating_Med_Ball_crunch.mp4" "https://www.youtube.com/watch?v=_DjM1Ix9ozI" --quiet --no-warnings 2>/dev/null && echo "OK 19/369: 7285820_Alternating_Med_Ball_crunch" || { echo "FAIL 19: 7285820_Alternating_Med_Ball_crunch"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 20/369
if ls "$DIR/2278833_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 20: 2278833 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278833_Alternating_table_top_abduction.mp4" "https://www.youtube.com/watch?v=gwIHd2cSlDg" --quiet --no-warnings 2>/dev/null && echo "OK 20/369: 2278833_Alternating_table_top_abduction" || { echo "FAIL 20: 2278833_Alternating_table_top_abduction"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 21/369
if ls "$DIR/7147148_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 21: 7147148 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7147148_Amanda_Latona39s_Front_amp_Side_Lateral_Raises_Deltoid_Exercise_2.mp4" "https://www.youtube.com/watch?v=ekXIBmGXjfg" --quiet --no-warnings 2>/dev/null && echo "OK 21/369: 7147148_Amanda_Latona39s_Front_amp_Side_Lateral_Ra" || { echo "FAIL 21: 7147148_Amanda_Latona39s_Front_amp_Side_Lateral_Ra"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 22/369
if ls "$DIR/14440489_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 22: 14440489 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14440489_AMAZING_Exercise_For_His_Shoulder_Pain.mp4" "https://www.youtube.com/watch?v=1cjUbSk37YQ" --quiet --no-warnings 2>/dev/null && echo "OK 22/369: 14440489_AMAZING_Exercise_For_His_Shoulder_Pain" || { echo "FAIL 22: 14440489_AMAZING_Exercise_For_His_Shoulder_Pain"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 23/369
if ls "$DIR/5246831_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 23: 5246831 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246831_Assisted_pull_up_machine_wide_grip.mp4" "https://www.youtube.com/watch?v=5hfY03eyf5k" --quiet --no-warnings 2>/dev/null && echo "OK 23/369: 5246831_Assisted_pull_up_machine_wide_grip" || { echo "FAIL 23: 5246831_Assisted_pull_up_machine_wide_grip"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 24/369
if ls "$DIR/5246835_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 24: 5246835 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246835_Assisted_pull_up_narrow_grip.mp4" "https://www.youtube.com/watch?v=2uG69PCm8E4" --quiet --no-warnings 2>/dev/null && echo "OK 24/369: 5246835_Assisted_pull_up_narrow_grip" || { echo "FAIL 24: 5246835_Assisted_pull_up_narrow_grip"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 25/369
if ls "$DIR/12863179_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 25: 12863179 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/12863179_B_Stance_Smith_Squat.mp4" "https://www.youtube.com/watch?v=PKfp5j6G3Kk" --quiet --no-warnings 2>/dev/null && echo "OK 25/369: 12863179_B_Stance_Smith_Squat" || { echo "FAIL 25: 12863179_B_Stance_Smith_Squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 26/369
if ls "$DIR/5014731_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 26: 5014731 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5014731_Backwardforward_glute_shuffle.mp4" "https://www.youtube.com/watch?v=3ohIkM73sw4" --quiet --no-warnings 2>/dev/null && echo "OK 26/369: 5014731_Backwardforward_glute_shuffle" || { echo "FAIL 26: 5014731_Backwardforward_glute_shuffle"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 27/369
if ls "$DIR/5249199_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 27: 5249199 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5249199_Backwards_banded_walk.mp4" "https://www.youtube.com/watch?v=Sfkhlcb1U-c" --quiet --no-warnings 2>/dev/null && echo "OK 27/369: 5249199_Backwards_banded_walk" || { echo "FAIL 27: 5249199_Backwards_banded_walk"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 28/369
if ls "$DIR/14439907_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 28: 14439907 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439907_Band_Pull_Aparts.mp4" "https://www.youtube.com/watch?v=n6ReA00VbCw" --quiet --no-warnings 2>/dev/null && echo "OK 28/369: 14439907_Band_Pull_Aparts" || { echo "FAIL 28: 14439907_Band_Pull_Aparts"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 29/369
if ls "$DIR/14439910_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 29: 14439910 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439910_Banded_quotPull_Apartsquot_Horizontal_Abduction_3_Ways.mp4" "https://www.youtube.com/watch?v=jo1QWW6tmHE" --quiet --no-warnings 2>/dev/null && echo "OK 29/369: 14439910_Banded_quotPull_Apartsquot_Horizontal_Abd" || { echo "FAIL 29: 14439910_Banded_quotPull_Apartsquot_Horizontal_Abd"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 30/369
if ls "$DIR/5246631_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 30: 5246631 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246631_Banded_abduction.mp4" "https://www.youtube.com/watch?v=AcleuhvdMsQ" --quiet --no-warnings 2>/dev/null && echo "OK 30/369: 5246631_Banded_abduction" || { echo "FAIL 30: 5246631_Banded_abduction"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 31/369
if ls "$DIR/5308779_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 31: 5308779 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308779_Banded_abduction_2.mp4" "https://www.youtube.com/watch?v=Uq8I-CDDDLo" --quiet --no-warnings 2>/dev/null && echo "OK 31/369: 5308779_Banded_abduction_2" || { echo "FAIL 31: 5308779_Banded_abduction_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 32/369
if ls "$DIR/5142170_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 32: 5142170 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142170_Banded_clams.mp4" "https://www.youtube.com/watch?v=Flxa5GTOXlY" --quiet --no-warnings 2>/dev/null && echo "OK 32/369: 5142170_Banded_clams" || { echo "FAIL 32: 5142170_Banded_clams"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 33/369
if ls "$DIR/5246663_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 33: 5246663 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246663_Banded_clams_2.mp4" "https://www.youtube.com/watch?v=Ciy03x2V2Zw" --quiet --no-warnings 2>/dev/null && echo "OK 33/369: 5246663_Banded_clams_2" || { echo "FAIL 33: 5246663_Banded_clams_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 34/369
if ls "$DIR/5246640_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 34: 5246640 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246640_Banded_glute_med_kick.mp4" "https://www.youtube.com/watch?v=Qxbiu1EyTqQ" --quiet --no-warnings 2>/dev/null && echo "OK 34/369: 5246640_Banded_glute_med_kick" || { echo "FAIL 34: 5246640_Banded_glute_med_kick"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 35/369
if ls "$DIR/5246755_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 35: 5246755 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246755_Banded_glute_raises.mp4" "https://www.youtube.com/watch?v=roxFVmctrK4" --quiet --no-warnings 2>/dev/null && echo "OK 35/369: 5246755_Banded_glute_raises" || { echo "FAIL 35: 5246755_Banded_glute_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 36/369
if ls "$DIR/5246896_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 36: 5246896 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246896_Banded_glute_raises_with_clams.mp4" "https://www.youtube.com/watch?v=PaZ2-eKy7HY" --quiet --no-warnings 2>/dev/null && echo "OK 36/369: 5246896_Banded_glute_raises_with_clams" || { echo "FAIL 36: 5246896_Banded_glute_raises_with_clams"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 37/369
if ls "$DIR/5270030_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 37: 5270030 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5270030_Banded_jump_squat.mp4" "https://www.youtube.com/watch?v=SSFJtV1dB7U" --quiet --no-warnings 2>/dev/null && echo "OK 37/369: 5270030_Banded_jump_squat" || { echo "FAIL 37: 5270030_Banded_jump_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 38/369
if ls "$DIR/5142172_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 38: 5142172 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142172_Banded_side_shuffle.mp4" "https://www.youtube.com/watch?v=NzWKBK9xK_E" --quiet --no-warnings 2>/dev/null && echo "OK 38/369: 5142172_Banded_side_shuffle" || { echo "FAIL 38: 5142172_Banded_side_shuffle"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 39/369
if ls "$DIR/5246888_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 39: 5246888 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246888_Banded_side_shuffle_2.mp4" "https://www.youtube.com/watch?v=jHr4d4HHdy0" --quiet --no-warnings 2>/dev/null && echo "OK 39/369: 5246888_Banded_side_shuffle_2" || { echo "FAIL 39: 5246888_Banded_side_shuffle_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 40/369
if ls "$DIR/5308604_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 40: 5308604 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308604_Banded_SL_hamstring_curl.mp4" "https://www.youtube.com/watch?v=LZtmBCen-XE" --quiet --no-warnings 2>/dev/null && echo "OK 40/369: 5308604_Banded_SL_hamstring_curl" || { echo "FAIL 40: 5308604_Banded_SL_hamstring_curl"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 41/369
if ls "$DIR/7941585_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 41: 7941585 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7941585_barbell_situps.mp4" "https://www.youtube.com/watch?v=sq32HfrHMxk" --quiet --no-warnings 2>/dev/null && echo "OK 41/369: 7941585_barbell_situps" || { echo "FAIL 41: 7941585_barbell_situps"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 42/369
if ls "$DIR/8341266_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 42: 8341266 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8341266_BB_Barbell_Curtsy_Lunge.mp4" "https://www.youtube.com/watch?v=3ZQIksygvZs" --quiet --no-warnings 2>/dev/null && echo "OK 42/369: 8341266_BB_Barbell_Curtsy_Lunge" || { echo "FAIL 42: 8341266_BB_Barbell_Curtsy_Lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 43/369
if ls "$DIR/6892547_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 43: 6892547 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6892547_Ben_Bruno_Teaches_the_Landmine_Squat.mp4" "https://www.youtube.com/watch?v=hJ6XnlQ3yBU" --quiet --no-warnings 2>/dev/null && echo "OK 43/369: 6892547_Ben_Bruno_Teaches_the_Landmine_Squat" || { echo "FAIL 43: 6892547_Ben_Bruno_Teaches_the_Landmine_Squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 44/369
if ls "$DIR/5246674_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 44: 5246674 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246674_Bench_lower_leg_lifts.mp4" "https://www.youtube.com/watch?v=HKI_3j_Wpl0" --quiet --no-warnings 2>/dev/null && echo "OK 44/369: 5246674_Bench_lower_leg_lifts" || { echo "FAIL 44: 5246674_Bench_lower_leg_lifts"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 45/369
if ls "$DIR/5244150_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 45: 5244150 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5244150_Bent_lateral_cable_abduction.mp4" "https://www.youtube.com/watch?v=eMs5MH-TYD0" --quiet --no-warnings 2>/dev/null && echo "OK 45/369: 5244150_Bent_lateral_cable_abduction" || { echo "FAIL 45: 5244150_Bent_lateral_cable_abduction"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 46/369
if ls "$DIR/5157241_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 46: 5157241 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5157241_Bent_over_bb_row.mp4" "https://www.youtube.com/watch?v=69Snp6A-zRA" --quiet --no-warnings 2>/dev/null && echo "OK 46/369: 5157241_Bent_over_bb_row" || { echo "FAIL 46: 5157241_Bent_over_bb_row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 47/369
if ls "$DIR/5150240_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 47: 5150240 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5150240_Bent_over_cable_row.mp4" "https://www.youtube.com/watch?v=br7NqCKXzws" --quiet --no-warnings 2>/dev/null && echo "OK 47/369: 5150240_Bent_over_cable_row" || { echo "FAIL 47: 5150240_Bent_over_cable_row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 48/369
if ls "$DIR/5142198_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 48: 5142198 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142198_Booty_tap_cable_squat.mp4" "https://www.youtube.com/watch?v=4bQ5gR5YJ64" --quiet --no-warnings 2>/dev/null && echo "OK 48/369: 5142198_Booty_tap_cable_squat" || { echo "FAIL 48: 5142198_Booty_tap_cable_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 49/369
if ls "$DIR/5142174_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 49: 5142174 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142174_Box_glute_bridge.mp4" "https://www.youtube.com/watch?v=Tw6-wUH1CMU" --quiet --no-warnings 2>/dev/null && echo "OK 49/369: 5142174_Box_glute_bridge" || { echo "FAIL 49: 5142174_Box_glute_bridge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 50/369
if ls "$DIR/10500563_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 50: 10500563 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/10500563_Bracknell_Gym_Kinesis_High_Pull_Station_exercises.mp4" "https://www.youtube.com/watch?v=rx8pSF0NyJY" --quiet --no-warnings 2>/dev/null && echo "OK 50/369: 10500563_Bracknell_Gym_Kinesis_High_Pull_Station_e" || { echo "FAIL 50: 10500563_Bracknell_Gym_Kinesis_High_Pull_Station_e"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 51/369
if ls "$DIR/10925808_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 51: 10925808 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/10925808_B-stance_Dumbbell_RDL.mp4" "https://www.youtube.com/watch?v=KoXAfvFB-YY" --quiet --no-warnings 2>/dev/null && echo "OK 51/369: 10925808_B-stance_Dumbbell_RDL" || { echo "FAIL 51: 10925808_B-stance_Dumbbell_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 52/369
if ls "$DIR/7675001_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 52: 7675001 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7675001_Build_Inner_Chest-Close_Dumbbell_Hammer_Press.mp4" "https://www.youtube.com/watch?v=WCAIi9xvNR8" --quiet --no-warnings 2>/dev/null && echo "OK 52/369: 7675001_Build_Inner_Chest-Close_Dumbbell_Hammer_Pr" || { echo "FAIL 52: 7675001_Build_Inner_Chest-Close_Dumbbell_Hammer_Pr"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 53/369
if ls "$DIR/5246668_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 53: 5246668 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246668_Bulgarian_jump_lunges.mp4" "https://www.youtube.com/watch?v=wTwKfm9w718" --quiet --no-warnings 2>/dev/null && echo "OK 53/369: 5246668_Bulgarian_jump_lunges" || { echo "FAIL 53: 5246668_Bulgarian_jump_lunges"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 54/369
if ls "$DIR/5308537_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 54: 5308537 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308537_Bulgarian_KB_split_squat.mp4" "https://www.youtube.com/watch?v=aMy6OKweV8o" --quiet --no-warnings 2>/dev/null && echo "OK 54/369: 5308537_Bulgarian_KB_split_squat" || { echo "FAIL 54: 5308537_Bulgarian_KB_split_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 55/369
if ls "$DIR/5246665_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 55: 5246665 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246665_Bulgarian_split_squat.mp4" "https://www.youtube.com/watch?v=F2KmFtkrwmk" --quiet --no-warnings 2>/dev/null && echo "OK 55/369: 5246665_Bulgarian_split_squat" || { echo "FAIL 55: 5246665_Bulgarian_split_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 56/369
if ls "$DIR/13459338_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 56: 13459338 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/13459338_Bulgarian_Split_Squat_with_Rotation.mp4" "https://www.youtube.com/watch?v=X64Wq_M3uF0" --quiet --no-warnings 2>/dev/null && echo "OK 56/369: 13459338_Bulgarian_Split_Squat_with_Rotation" || { echo "FAIL 56: 13459338_Bulgarian_Split_Squat_with_Rotation"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 57/369
if ls "$DIR/5103499_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 57: 5103499 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5103499_BW_circuit_push-upalt_knee_toe_tap.mp4" "https://www.youtube.com/watch?v=h6c3a29mW1A" --quiet --no-warnings 2>/dev/null && echo "OK 57/369: 5103499_BW_circuit_push-upalt_knee_toe_tap" || { echo "FAIL 57: 5103499_BW_circuit_push-upalt_knee_toe_tap"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 58/369
if ls "$DIR/5043464_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 58: 5043464 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5043464_Bw_shoulder_W.mp4" "https://www.youtube.com/watch?v=UCbOgoHQvHI" --quiet --no-warnings 2>/dev/null && echo "OK 58/369: 5043464_Bw_shoulder_W" || { echo "FAIL 58: 5043464_Bw_shoulder_W"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 59/369
if ls "$DIR/5146764_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 59: 5146764 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5146764_Cable_bar_bicep_curl.mp4" "https://www.youtube.com/watch?v=ObYexQzFuU0" --quiet --no-warnings 2>/dev/null && echo "OK 59/369: 5146764_Cable_bar_bicep_curl" || { echo "FAIL 59: 5146764_Cable_bar_bicep_curl"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 60/369
if ls "$DIR/5146769_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 60: 5146769 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5146769_Cable_chest_fly.mp4" "https://www.youtube.com/watch?v=BXzw1t4pagc" --quiet --no-warnings 2>/dev/null && echo "OK 60/369: 5146769_Cable_chest_fly" || { echo "FAIL 60: 5146769_Cable_chest_fly"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 61/369
if ls "$DIR/15139660_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 61: 15139660 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/15139660_Cable_Curtsy_Lunge.mp4" "https://www.youtube.com/watch?v=XwgylsSdS3I" --quiet --no-warnings 2>/dev/null && echo "OK 61/369: 15139660_Cable_Curtsy_Lunge" || { echo "FAIL 61: 15139660_Cable_Curtsy_Lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 62/369
if ls "$DIR/2278805_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 62: 2278805 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278805_Cable_dead_lift_booty.mp4" "https://www.youtube.com/watch?v=MX7ldwuRPQ4" --quiet --no-warnings 2>/dev/null && echo "OK 62/369: 2278805_Cable_dead_lift_booty" || { echo "FAIL 62: 2278805_Cable_dead_lift_booty"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 63/369
if ls "$DIR/5246786_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 63: 5246786 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246786_Cable_duel_bicep_curl.mp4" "https://www.youtube.com/watch?v=TYTLiWYL2Js" --quiet --no-warnings 2>/dev/null && echo "OK 63/369: 5246786_Cable_duel_bicep_curl" || { echo "FAIL 63: 5246786_Cable_duel_bicep_curl"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 64/369
if ls "$DIR/5308547_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 64: 5308547 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308547_Cable_fly_no_attachment.mp4" "https://www.youtube.com/watch?v=Q11gm-5TBVs" --quiet --no-warnings 2>/dev/null && echo "OK 64/369: 5308547_Cable_fly_no_attachment" || { echo "FAIL 64: 5308547_Cable_fly_no_attachment"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 65/369
if ls "$DIR/5246694_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 65: 5246694 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246694_Cable_folding_chairs.mp4" "https://www.youtube.com/watch?v=MPjMcOCFqhA" --quiet --no-warnings 2>/dev/null && echo "OK 65/369: 5246694_Cable_folding_chairs" || { echo "FAIL 65: 5246694_Cable_folding_chairs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 66/369
if ls "$DIR/5142202_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 66: 5142202 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142202_Cable_glute_kick_back.mp4" "https://www.youtube.com/watch?v=7mSe2tyMhJM" --quiet --no-warnings 2>/dev/null && echo "OK 66/369: 5142202_Cable_glute_kick_back" || { echo "FAIL 66: 5142202_Cable_glute_kick_back"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 67/369
if ls "$DIR/2280421_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 67: 2280421 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2280421_Cable_glute_pull_through.mp4" "https://www.youtube.com/watch?v=V9qh0GLot9w" --quiet --no-warnings 2>/dev/null && echo "OK 67/369: 2280421_Cable_glute_pull_through" || { echo "FAIL 67: 2280421_Cable_glute_pull_through"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 68/369
if ls "$DIR/7006967_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 68: 7006967 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006967_Cable_Hamstring_RDL.mp4" "https://www.youtube.com/watch?v=00rB7p-Wlxc" --quiet --no-warnings 2>/dev/null && echo "OK 68/369: 7006967_Cable_Hamstring_RDL" || { echo "FAIL 68: 7006967_Cable_Hamstring_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 69/369
if ls "$DIR/7004814_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 69: 7004814 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7004814_Cable_Kayak_Row_Variation.mp4" "https://www.youtube.com/watch?v=J3MIJuxwi5M" --quiet --no-warnings 2>/dev/null && echo "OK 69/369: 7004814_Cable_Kayak_Row_Variation" || { echo "FAIL 69: 7004814_Cable_Kayak_Row_Variation"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 70/369
if ls "$DIR/5150237_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 70: 5150237 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5150237_Cable_lateral_raises.mp4" "https://www.youtube.com/watch?v=cvYAhg9Nh9k" --quiet --no-warnings 2>/dev/null && echo "OK 70/369: 5150237_Cable_lateral_raises" || { echo "FAIL 70: 5150237_Cable_lateral_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 71/369
if ls "$DIR/5246842_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 71: 5246842 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246842_Cable_lateral_raises_2.mp4" "https://www.youtube.com/watch?v=Uxp1h6hnw6I" --quiet --no-warnings 2>/dev/null && echo "OK 71/369: 5246842_Cable_lateral_raises_2" || { echo "FAIL 71: 5246842_Cable_lateral_raises_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 72/369
if ls "$DIR/16527673_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 72: 16527673 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16527673_Cable_Reverse_Lunges.mp4" "https://www.youtube.com/watch?v=E_1cAp2dR04" --quiet --no-warnings 2>/dev/null && echo "OK 72/369: 16527673_Cable_Reverse_Lunges" || { echo "FAIL 72: 16527673_Cable_Reverse_Lunges"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 73/369
if ls "$DIR/5246812_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 73: 5246812 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246812_Cable_rope_bent_over_tricep_ext.mp4" "https://www.youtube.com/watch?v=6ki7s-iD49M" --quiet --no-warnings 2>/dev/null && echo "OK 73/369: 5246812_Cable_rope_bent_over_tricep_ext" || { echo "FAIL 73: 5246812_Cable_rope_bent_over_tricep_ext"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 74/369
if ls "$DIR/5150231_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 74: 5150231 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5150231_Cable_rope_frontal_raises.mp4" "https://www.youtube.com/watch?v=f-4WfgD--a4" --quiet --no-warnings 2>/dev/null && echo "OK 74/369: 5150231_Cable_rope_frontal_raises" || { echo "FAIL 74: 5150231_Cable_rope_frontal_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 75/369
if ls "$DIR/5246821_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 75: 5246821 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246821_Cable_rope_frontal_raises_2.mp4" "https://www.youtube.com/watch?v=s5fRTcUhCZ4" --quiet --no-warnings 2>/dev/null && echo "OK 75/369: 5246821_Cable_rope_frontal_raises_2" || { echo "FAIL 75: 5246821_Cable_rope_frontal_raises_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 76/369
if ls "$DIR/5308540_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 76: 5308540 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308540_Cable_rope_pull_down_2.mp4" "https://www.youtube.com/watch?v=TQQiOdaGPGM" --quiet --no-warnings 2>/dev/null && echo "OK 76/369: 5308540_Cable_rope_pull_down_2" || { echo "FAIL 76: 5308540_Cable_rope_pull_down_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 77/369
if ls "$DIR/5246839_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 77: 5246839 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246839_Cable_rope_squat_with_row.mp4" "https://www.youtube.com/watch?v=f95P26jTxOk" --quiet --no-warnings 2>/dev/null && echo "OK 77/369: 5246839_Cable_rope_squat_with_row" || { echo "FAIL 77: 5246839_Cable_rope_squat_with_row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 78/369
if ls "$DIR/5146870_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 78: 5146870 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5146870_Cable_rope_tricep_pull_down.mp4" "https://www.youtube.com/watch?v=5gSo68dM4V0" --quiet --no-warnings 2>/dev/null && echo "OK 78/369: 5146870_Cable_rope_tricep_pull_down" || { echo "FAIL 78: 5146870_Cable_rope_tricep_pull_down"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 79/369
if ls "$DIR/5246817_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 79: 5246817 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246817_Cable_rope_upright_row.mp4" "https://www.youtube.com/watch?v=j0_BA07YoGE" --quiet --no-warnings 2>/dev/null && echo "OK 79/369: 5246817_Cable_rope_upright_row" || { echo "FAIL 79: 5246817_Cable_rope_upright_row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 80/369
if ls "$DIR/11778950_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 80: 11778950 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/11778950_Cable_Single_Leg_Step_Up.mp4" "https://www.youtube.com/watch?v=ZIyoJhSXskE" --quiet --no-warnings 2>/dev/null && echo "OK 80/369: 11778950_Cable_Single_Leg_Step_Up" || { echo "FAIL 80: 11778950_Cable_Single_Leg_Step_Up"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 81/369
if ls "$DIR/2280423_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 81: 2280423 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2280423_Cable_squat.mp4" "https://www.youtube.com/watch?v=mIb-binZ2A0" --quiet --no-warnings 2>/dev/null && echo "OK 81/369: 2280423_Cable_squat" || { echo "FAIL 81: 2280423_Cable_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 82/369
if ls "$DIR/2297940_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 82: 2297940 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297940_Cable_squat_with_glute_tap.mp4" "https://www.youtube.com/watch?v=FMw39rIQ5p8" --quiet --no-warnings 2>/dev/null && echo "OK 82/369: 2297940_Cable_squat_with_glute_tap" || { echo "FAIL 82: 2297940_Cable_squat_with_glute_tap"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 83/369
if ls "$DIR/5246781_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 83: 5246781 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246781_Cables_flies.mp4" "https://www.youtube.com/watch?v=LF3AySj5M9A" --quiet --no-warnings 2>/dev/null && echo "OK 83/369: 5246781_Cables_flies" || { echo "FAIL 83: 5246781_Cables_flies"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 84/369
if ls "$DIR/5246902_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 84: 5246902 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246902_Calf_raises.mp4" "https://www.youtube.com/watch?v=0orFac5wKus" --quiet --no-warnings 2>/dev/null && echo "OK 84/369: 5246902_Calf_raises" || { echo "FAIL 84: 5246902_Calf_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 85/369
if ls "$DIR/14788084_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 85: 14788084 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14788084_Chin_Tuck_Head_Lift.mp4" "https://www.youtube.com/watch?v=w-W0kOcff4k" --quiet --no-warnings 2>/dev/null && echo "OK 85/369: 14788084_Chin_Tuck_Head_Lift" || { echo "FAIL 85: 14788084_Chin_Tuck_Head_Lift"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 86/369
if ls "$DIR/5135859_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 86: 5135859 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5135859_Core_combo.mp4" "https://www.youtube.com/watch?v=h6c3a29mW1A" --quiet --no-warnings 2>/dev/null && echo "OK 86/369: 5135859_Core_combo" || { echo "FAIL 86: 5135859_Core_combo"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 87/369
if ls "$DIR/2292936_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 87: 2292936 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2292936_Curtsy_reverse_lunge.mp4" "https://www.youtube.com/watch?v=egtamDyAv1k" --quiet --no-warnings 2>/dev/null && echo "OK 87/369: 2292936_Curtsy_reverse_lunge" || { echo "FAIL 87: 2292936_Curtsy_reverse_lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 88/369
if ls "$DIR/2297784_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 88: 2297784 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297784_Curtsy_step_up.mp4" "https://www.youtube.com/watch?v=xJ6kLTTh5n0" --quiet --no-warnings 2>/dev/null && echo "OK 88/369: 2297784_Curtsy_step_up" || { echo "FAIL 88: 2297784_Curtsy_step_up"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 89/369
if ls "$DIR/7851723_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 89: 7851723 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7851723_Day_11_of_EPIC_Dumbbell_Quads_amp_Abs_Workout.mp4" "https://www.youtube.com/watch?v=-Vz0qx7JrPw" --quiet --no-warnings 2>/dev/null && echo "OK 89/369: 7851723_Day_11_of_EPIC_Dumbbell_Quads_amp_Abs_Work" || { echo "FAIL 89: 7851723_Day_11_of_EPIC_Dumbbell_Quads_amp_Abs_Work"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 90/369
if ls "$DIR/2297885_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 90: 2297885 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297885_DB_abduction_slide.mp4" "https://www.youtube.com/watch?v=dRo_piFGqnc" --quiet --no-warnings 2>/dev/null && echo "OK 90/369: 2297885_DB_abduction_slide" || { echo "FAIL 90: 2297885_DB_abduction_slide"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 91/369
if ls "$DIR/5142116_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 91: 5142116 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142116_DB_bicep_curl_slow_ecc.mp4" "https://www.youtube.com/watch?v=kfQrNH5F9G0" --quiet --no-warnings 2>/dev/null && echo "OK 91/369: 5142116_DB_bicep_curl_slow_ecc" || { echo "FAIL 91: 5142116_DB_bicep_curl_slow_ecc"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 92/369
if ls "$DIR/7602931_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 92: 7602931 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7602931_DB_Burpee_Row.mp4" "https://www.youtube.com/watch?v=wETe3j_QaMg" --quiet --no-warnings 2>/dev/null && echo "OK 92/369: 7602931_DB_Burpee_Row" || { echo "FAIL 92: 7602931_DB_Burpee_Row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 93/369
if ls "$DIR/5246853_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 93: 5246853 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246853_DB_chest_fly.mp4" "https://www.youtube.com/watch?v=Ys3rz504_2c" --quiet --no-warnings 2>/dev/null && echo "OK 93/369: 5246853_DB_chest_fly" || { echo "FAIL 93: 5246853_DB_chest_fly"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 94/369
if ls "$DIR/5142134_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 94: 5142134 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142134_DB_chest_press.mp4" "https://www.youtube.com/watch?v=inyPtjTLesw" --quiet --no-warnings 2>/dev/null && echo "OK 94/369: 5142134_DB_chest_press" || { echo "FAIL 94: 5142134_DB_chest_press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 95/369
if ls "$DIR/5246875_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 95: 5246875 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246875_Db_chest_press_2.mp4" "https://www.youtube.com/watch?v=TQFK8JQMx_A" --quiet --no-warnings 2>/dev/null && echo "OK 95/369: 5246875_Db_chest_press_2" || { echo "FAIL 95: 5246875_Db_chest_press_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 96/369
if ls "$DIR/5308594_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 96: 5308594 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308594_DB_front_raise.mp4" "https://www.youtube.com/watch?v=NjZy4Jfu7EE" --quiet --no-warnings 2>/dev/null && echo "OK 96/369: 5308594_DB_front_raise" || { echo "FAIL 96: 5308594_DB_front_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 97/369
if ls "$DIR/5142139_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 97: 5142139 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142139_DB_iso_shoulder_press.mp4" "https://www.youtube.com/watch?v=Vvb1VSiwUAc" --quiet --no-warnings 2>/dev/null && echo "OK 97/369: 5142139_DB_iso_shoulder_press" || { echo "FAIL 97: 5142139_DB_iso_shoulder_press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 98/369
if ls "$DIR/5308589_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 98: 5308589 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308589_DB_lateral_raises.mp4" "https://www.youtube.com/watch?v=PBs3gmLur4I" --quiet --no-warnings 2>/dev/null && echo "OK 98/369: 5308589_DB_lateral_raises" || { echo "FAIL 98: 5308589_DB_lateral_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 99/369
if ls "$DIR/5246869_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 99: 5246869 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246869_DB_Narrow_curl.mp4" "https://www.youtube.com/watch?v=CGuaYKA7b4M" --quiet --no-warnings 2>/dev/null && echo "OK 99/369: 5246869_DB_Narrow_curl" || { echo "FAIL 99: 5246869_DB_Narrow_curl"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 100/369
if ls "$DIR/5246870_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 100: 5246870 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246870_DB_preacher_curls.mp4" "https://www.youtube.com/watch?v=8OG_0HivBCM" --quiet --no-warnings 2>/dev/null && echo "OK 100/369: 5246870_DB_preacher_curls" || { echo "FAIL 100: 5246870_DB_preacher_curls"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 101/369
if ls "$DIR/5246863_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 101: 5246863 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246863_DB_press_up.mp4" "https://www.youtube.com/watch?v=S6XMVPbHmCA" --quiet --no-warnings 2>/dev/null && echo "OK 101/369: 5246863_DB_press_up" || { echo "FAIL 101: 5246863_DB_press_up"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 102/369
if ls "$DIR/5142154_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 102: 5142154 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142154_Db_reverse_fly.mp4" "https://www.youtube.com/watch?v=xCNIaFMWG3E" --quiet --no-warnings 2>/dev/null && echo "OK 102/369: 5142154_Db_reverse_fly" || { echo "FAIL 102: 5142154_Db_reverse_fly"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 103/369
if ls "$DIR/5142129_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 103: 5142129 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142129_DB_skull_crushers.mp4" "https://www.youtube.com/watch?v=cjdrCQcMYcQ" --quiet --no-warnings 2>/dev/null && echo "OK 103/369: 5142129_DB_skull_crushers" || { echo "FAIL 103: 5142129_DB_skull_crushers"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 104/369
if ls "$DIR/5142196_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 104: 5142196 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142196_DB_sumo_squat.mp4" "https://www.youtube.com/watch?v=rzQYVWAQxRs" --quiet --no-warnings 2>/dev/null && echo "OK 104/369: 5142196_DB_sumo_squat" || { echo "FAIL 104: 5142196_DB_sumo_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 105/369
if ls "$DIR/5142107_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 105: 5142107 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142107_DB_tricep_kickback.mp4" "https://www.youtube.com/watch?v=VB5JM3vMoDU" --quiet --no-warnings 2>/dev/null && echo "OK 105/369: 5142107_DB_tricep_kickback" || { echo "FAIL 105: 5142107_DB_tricep_kickback"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 106/369
if ls "$DIR/5246658_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 106: 5246658 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246658_DB_wide_RDL_into_sumo_pulses_drop_set.mp4" "https://www.youtube.com/watch?v=OFMpyeuCWaA" --quiet --no-warnings 2>/dev/null && echo "OK 106/369: 5246658_DB_wide_RDL_into_sumo_pulses_drop_set" || { echo "FAIL 106: 5246658_DB_wide_RDL_into_sumo_pulses_drop_set"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 107/369
if ls "$DIR/7146802_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 107: 7146802 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7146802_Dead_Bug_-_Abdominal_Core_Exercise_Guide.mp4" "https://www.youtube.com/watch?v=4XLEnwUr1d8" --quiet --no-warnings 2>/dev/null && echo "OK 107/369: 7146802_Dead_Bug_-_Abdominal_Core_Exercise_Guide" || { echo "FAIL 107: 7146802_Dead_Bug_-_Abdominal_Core_Exercise_Guide"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 108/369
if ls "$DIR/5243682_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 108: 5243682 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5243682_Decline_23_leg_press.mp4" "https://www.youtube.com/watch?v=p0h2fO_P014" --quiet --no-warnings 2>/dev/null && echo "OK 108/369: 5243682_Decline_23_leg_press" || { echo "FAIL 108: 5243682_Decline_23_leg_press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 109/369
if ls "$DIR/5246788_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 109: 5246788 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246788_Decline_cable_flies.mp4" "https://www.youtube.com/watch?v=K83QwVAx13I" --quiet --no-warnings 2>/dev/null && echo "OK 109/369: 5246788_Decline_cable_flies" || { echo "FAIL 109: 5246788_Decline_cable_flies"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 110/369
if ls "$DIR/5103958_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 110: 5103958 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5103958_Decline_hammer_curl.mp4" "https://www.youtube.com/watch?v=5l4eSNnSpVo" --quiet --no-warnings 2>/dev/null && echo "OK 110/369: 5103958_Decline_hammer_curl" || { echo "FAIL 110: 5103958_Decline_hammer_curl"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 111/369
if ls "$DIR/14439943_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 111: 14439943 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439943_Deep_posterior_chain_stretching_and_sciatic_nerve_stretch.mp4" "https://www.youtube.com/watch?v=cREVjbRo8-8" --quiet --no-warnings 2>/dev/null && echo "OK 111/369: 14439943_Deep_posterior_chain_stretching_and_sciat" || { echo "FAIL 111: 14439943_Deep_posterior_chain_stretching_and_sciat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 112/369
if ls "$DIR/16016959_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 112: 16016959 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16016959_Do_you_struggle_to_feel_step_ups_in_your_glutes_Try_this.mp4" "https://www.youtube.com/watch?v=9w_tWTMlDvo" --quiet --no-warnings 2>/dev/null && echo "OK 112/369: 16016959_Do_you_struggle_to_feel_step_ups_in_your_" || { echo "FAIL 112: 16016959_Do_you_struggle_to_feel_step_ups_in_your_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 113/369
if ls "$DIR/15753572_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 113: 15753572 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/15753572_Doorway_Chest_Stretch_-_Pectoralis_Major_and_Minor_exercise.mp4" "https://www.youtube.com/watch?v=O8rJw_TmC1Y" --quiet --no-warnings 2>/dev/null && echo "OK 113/369: 15753572_Doorway_Chest_Stretch_-_Pectoralis_Major_" || { echo "FAIL 113: 15753572_Doorway_Chest_Stretch_-_Pectoralis_Major_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 114/369
if ls "$DIR/14439923_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 114: 14439923 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439923_Doorway_Lat_Stretch.mp4" "https://www.youtube.com/watch?v=95QO67daOzI" --quiet --no-warnings 2>/dev/null && echo "OK 114/369: 14439923_Doorway_Lat_Stretch" || { echo "FAIL 114: 14439923_Doorway_Lat_Stretch"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 115/369
if ls "$DIR/14201552_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 115: 14201552 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14201552_Doorway_Pec_and_Shoulder_Stretch_with_Dr_Raz.mp4" "https://www.youtube.com/watch?v=Dmm8_S23I74" --quiet --no-warnings 2>/dev/null && echo "OK 115/369: 14201552_Doorway_Pec_and_Shoulder_Stretch_with_Dr_" || { echo "FAIL 115: 14201552_Doorway_Pec_and_Shoulder_Stretch_with_Dr_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 116/369
if ls "$DIR/14439903_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 116: 14439903 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439903_Doorway_Pec_Stretch.mp4" "https://www.youtube.com/watch?v=CEQMx4zFwYs" --quiet --no-warnings 2>/dev/null && echo "OK 116/369: 14439903_Doorway_Pec_Stretch" || { echo "FAIL 116: 14439903_Doorway_Pec_Stretch"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 117/369
if ls "$DIR/8725421_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 117: 8725421 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8725421_Dumbbell_Deficit_Reverse_Lunge.mp4" "https://www.youtube.com/watch?v=S8UKm6oHGis" --quiet --no-warnings 2>/dev/null && echo "OK 117/369: 8725421_Dumbbell_Deficit_Reverse_Lunge" || { echo "FAIL 117: 8725421_Dumbbell_Deficit_Reverse_Lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 118/369
if ls "$DIR/14112046_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 118: 14112046 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14112046_Dumbbell_Exercises_-_DB_Lateral_Lunge.mp4" "https://www.youtube.com/watch?v=fYlTOMUahPM" --quiet --no-warnings 2>/dev/null && echo "OK 118/369: 14112046_Dumbbell_Exercises_-_DB_Lateral_Lunge" || { echo "FAIL 118: 14112046_Dumbbell_Exercises_-_DB_Lateral_Lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 119/369
if ls "$DIR/7707049_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 119: 7707049 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7707049_Dumbbell_Hamstring_Curl.mp4" "https://www.youtube.com/watch?v=cSzoVHHnuu0" --quiet --no-warnings 2>/dev/null && echo "OK 119/369: 7707049_Dumbbell_Hamstring_Curl" || { echo "FAIL 119: 7707049_Dumbbell_Hamstring_Curl"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 120/369
if ls "$DIR/7851720_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 120: 7851720 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7851720_Dumbbell_Heel_Elevated_Hack_Squat_-_Katie_Mack_Fitness.mp4" "https://www.youtube.com/watch?v=6ipS6xpz3ZM" --quiet --no-warnings 2>/dev/null && echo "OK 120/369: 7851720_Dumbbell_Heel_Elevated_Hack_Squat_-_Katie_" || { echo "FAIL 120: 7851720_Dumbbell_Heel_Elevated_Hack_Squat_-_Katie_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 121/369
if ls "$DIR/7616401_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 121: 7616401 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7616401_Dumbbell_Leg_extension.mp4" "https://www.youtube.com/watch?v=MGijb3sdOS4" --quiet --no-warnings 2>/dev/null && echo "OK 121/369: 7616401_Dumbbell_Leg_extension" || { echo "FAIL 121: 7616401_Dumbbell_Leg_extension"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 122/369
if ls "$DIR/7285251_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 122: 7285251 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7285251_DUMBBELL_PULLOVER_FOR_THE_LATS.mp4" "https://www.youtube.com/watch?v=3x4mTtYC_1M" --quiet --no-warnings 2>/dev/null && echo "OK 122/369: 7285251_DUMBBELL_PULLOVER_FOR_THE_LATS" || { echo "FAIL 122: 7285251_DUMBBELL_PULLOVER_FOR_THE_LATS"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 123/369
if ls "$DIR/8693973_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 123: 8693973 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8693973_Dumbbell_Romanian_RDL_Deadlift_TECHNIQUE_for_Beginners.mp4" "https://www.youtube.com/watch?v=hQgFixeXdZo" --quiet --no-warnings 2>/dev/null && echo "OK 123/369: 8693973_Dumbbell_Romanian_RDL_Deadlift_TECHNIQUE_f" || { echo "FAIL 123: 8693973_Dumbbell_Romanian_RDL_Deadlift_TECHNIQUE_f"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 124/369
if ls "$DIR/7707031_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 124: 7707031 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7707031_Dumbbell_Sumo_Plie_Squat.mp4" "https://www.youtube.com/watch?v=GG92d1QZTZg" --quiet --no-warnings 2>/dev/null && echo "OK 124/369: 7707031_Dumbbell_Sumo_Plie_Squat" || { echo "FAIL 124: 7707031_Dumbbell_Sumo_Plie_Squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 125/369
if ls "$DIR/7006741_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 125: 7006741 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006741_Dynamic_Wall_Angel_Facing_Wall.mp4" "https://www.youtube.com/watch?v=OvL3ZoVhX0U" --quiet --no-warnings 2>/dev/null && echo "OK 125/369: 7006741_Dynamic_Wall_Angel_Facing_Wall" || { echo "FAIL 125: 7006741_Dynamic_Wall_Angel_Facing_Wall"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 126/369
if ls "$DIR/7005837_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 126: 7005837 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7005837_Elevated_Squat.mp4" "https://www.youtube.com/watch?v=hqh91-tY7Ss" --quiet --no-warnings 2>/dev/null && echo "OK 126/369: 7005837_Elevated_Squat" || { echo "FAIL 126: 7005837_Elevated_Squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 127/369
if ls "$DIR/16485511_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 127: 16485511 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16485511_Enter_The_Belt_Squat_My_BOS_Review.mp4" "https://www.youtube.com/watch?v=lTUAdgaeavQ" --quiet --no-warnings 2>/dev/null && echo "OK 127/369: 16485511_Enter_The_Belt_Squat_My_BOS_Review" || { echo "FAIL 127: 16485511_Enter_The_Belt_Squat_My_BOS_Review"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 128/369
if ls "$DIR/5246856_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 128: 5246856 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246856_EZ_curls.mp4" "https://www.youtube.com/watch?v=P9mMKrHBZq8" --quiet --no-warnings 2>/dev/null && echo "OK 128/369: 5246856_EZ_curls" || { echo "FAIL 128: 5246856_EZ_curls"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 129/369
if ls "$DIR/5150243_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 129: 5150243 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5150243_Face_pulls_back.mp4" "https://www.youtube.com/watch?v=epQUlI_CzAA" --quiet --no-warnings 2>/dev/null && echo "OK 129/369: 5150243_Face_pulls_back" || { echo "FAIL 129: 5150243_Face_pulls_back"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 130/369
if ls "$DIR/14439958_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 130: 14439958 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439958_Foam_Roller_Wall_Slide_-_Scapular_Winging_Stability_Exercise.mp4" "https://www.youtube.com/watch?v=C0DnpJ3gdv8" --quiet --no-warnings 2>/dev/null && echo "OK 130/369: 14439958_Foam_Roller_Wall_Slide_-_Scapular_Winging" || { echo "FAIL 130: 14439958_Foam_Roller_Wall_Slide_-_Scapular_Winging"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 131/369
if ls "$DIR/5249189_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 131: 5249189 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5249189_Forward_banded_walk.mp4" "https://www.youtube.com/watch?v=F-k6-zeg2MU" --quiet --no-warnings 2>/dev/null && echo "OK 131/369: 5249189_Forward_banded_walk" || { echo "FAIL 131: 5249189_Forward_banded_walk"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 132/369
if ls "$DIR/5014615_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 132: 5014615 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5014615_Froggies_BW.mp4" "https://www.youtube.com/watch?v=Dh75Cgdrk70" --quiet --no-warnings 2>/dev/null && echo "OK 132/369: 5014615_Froggies_BW" || { echo "FAIL 132: 5014615_Froggies_BW"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 133/369
if ls "$DIR/8029343_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 133: 8029343 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8029343_Front_Plate_Raise.mp4" "https://www.youtube.com/watch?v=hFo-LIkCozU" --quiet --no-warnings 2>/dev/null && echo "OK 133/369: 8029343_Front_Plate_Raise" || { echo "FAIL 133: 8029343_Front_Plate_Raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 134/369
if ls "$DIR/13993112_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 134: 13993112 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/13993112_Glute_Emphasis_Smith_Machine_Reverse_Kickbacks.mp4" "https://www.youtube.com/watch?v=9ZpdfodCcWc" --quiet --no-warnings 2>/dev/null && echo "OK 134/369: 13993112_Glute_Emphasis_Smith_Machine_Reverse_Kick" || { echo "FAIL 134: 13993112_Glute_Emphasis_Smith_Machine_Reverse_Kick"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 135/369
if ls "$DIR/5244129_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 135: 5244129 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5244129_Glute_kick_back_2.mp4" "https://www.youtube.com/watch?v=RPXetZT-JkU" --quiet --no-warnings 2>/dev/null && echo "OK 135/369: 5244129_Glute_kick_back_2" || { echo "FAIL 135: 5244129_Glute_kick_back_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 136/369
if ls "$DIR/2278830_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 136: 2278830 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278830_Glute_kick_overs.mp4" "https://www.youtube.com/watch?v=MY_MIwa67j0" --quiet --no-warnings 2>/dev/null && echo "OK 136/369: 2278830_Glute_kick_overs" || { echo "FAIL 136: 2278830_Glute_kick_overs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 137/369
if ls "$DIR/2297794_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 137: 2297794 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297794_Glute_walking_lunge.mp4" "https://www.youtube.com/watch?v=RK-l5IfJWl8" --quiet --no-warnings 2>/dev/null && echo "OK 137/369: 2297794_Glute_walking_lunge" || { echo "FAIL 137: 2297794_Glute_walking_lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 138/369
if ls "$DIR/7006861_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 138: 7006861 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006861_Goblet_Stepup.mp4" "https://www.youtube.com/watch?v=nFA4zpstOnc" --quiet --no-warnings 2>/dev/null && echo "OK 138/369: 7006861_Goblet_Stepup" || { echo "FAIL 138: 7006861_Goblet_Stepup"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 139/369
if ls "$DIR/16485507_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 139: 16485507 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16485507_Gymleco_082_Belt_Squat_Machine_is_your_go-to_for_heavy_lower_body_training_gymle.mp4" "https://www.youtube.com/watch?v=p39ju-dwvcw" --quiet --no-warnings 2>/dev/null && echo "OK 139/369: 16485507_Gymleco_082_Belt_Squat_Machine_is_your_go" || { echo "FAIL 139: 16485507_Gymleco_082_Belt_Squat_Machine_is_your_go"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 140/369
if ls "$DIR/9057211_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 140: 9057211 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9057211_Hack_Squat_Exercise_Guide.mp4" "https://www.youtube.com/watch?v=0tn5K9NlCfo" --quiet --no-warnings 2>/dev/null && echo "OK 140/369: 9057211_Hack_Squat_Exercise_Guide" || { echo "FAIL 140: 9057211_Hack_Squat_Exercise_Guide"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 141/369
if ls "$DIR/5103516_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 141: 5103516 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5103516_Hanging_alt_oblique_swings.mp4" "https://www.youtube.com/watch?v=VMyENQXsh2k" --quiet --no-warnings 2>/dev/null && echo "OK 141/369: 5103516_Hanging_alt_oblique_swings" || { echo "FAIL 141: 5103516_Hanging_alt_oblique_swings"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 142/369
if ls "$DIR/6892657_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 142: 6892657 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6892657_Hanging_Leg_Raise_2.mp4" "https://www.youtube.com/watch?v=lS5B0MmLgZs" --quiet --no-warnings 2>/dev/null && echo "OK 142/369: 6892657_Hanging_Leg_Raise_2" || { echo "FAIL 142: 6892657_Hanging_Leg_Raise_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 143/369
if ls "$DIR/6892654_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 143: 6892654 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6892654_Hanging_Leg_Raise_DONE_RIGHT_Common_KNEE_TUCK_Mistakes.mp4" "https://www.youtube.com/watch?v=lS5B0MmLgZs" --quiet --no-warnings 2>/dev/null && echo "OK 143/369: 6892654_Hanging_Leg_Raise_DONE_RIGHT_Common_KNEE_T" || { echo "FAIL 143: 6892654_Hanging_Leg_Raise_DONE_RIGHT_Common_KNEE_T"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 144/369
if ls "$DIR/2297870_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 144: 2297870 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297870_High_glute_raise.mp4" "https://www.youtube.com/watch?v=3kO5R9lqhKg" --quiet --no-warnings 2>/dev/null && echo "OK 144/369: 2297870_High_glute_raise" || { echo "FAIL 144: 2297870_High_glute_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 145/369
if ls "$DIR/5246715_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 145: 5246715 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246715_Hip_taps.mp4" "https://www.youtube.com/watch?v=TCwyK-K6l2k" --quiet --no-warnings 2>/dev/null && echo "OK 145/369: 5246715_Hip_taps" || { echo "FAIL 145: 5246715_Hip_taps"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 146/369
if ls "$DIR/7942015_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 146: 7942015 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7942015_How_to_Do_a_Cable_Chest_Press_Chest_Workout.mp4" "https://www.youtube.com/watch?v=FVWJglwid4I" --quiet --no-warnings 2>/dev/null && echo "OK 146/369: 7942015_How_to_Do_a_Cable_Chest_Press_Chest_Workou" || { echo "FAIL 146: 7942015_How_to_Do_a_Cable_Chest_Press_Chest_Workou"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 147/369
if ls "$DIR/13459600_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 147: 13459600 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/13459600_How_To_Do_A_Dumbbell_Good_Morning.mp4" "https://www.youtube.com/watch?v=wUbsMNkkpLk" --quiet --no-warnings 2>/dev/null && echo "OK 147/369: 13459600_How_To_Do_A_Dumbbell_Good_Morning" || { echo "FAIL 147: 13459600_How_To_Do_A_Dumbbell_Good_Morning"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 148/369
if ls "$DIR/7004037_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 148: 7004037 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7004037_How_to_Do_a_Dumbbell_Twist_Ab_Workout.mp4" "https://www.youtube.com/watch?v=Tm_qfQTbDHw" --quiet --no-warnings 2>/dev/null && echo "OK 148/369: 7004037_How_to_Do_a_Dumbbell_Twist_Ab_Workout" || { echo "FAIL 148: 7004037_How_to_Do_a_Dumbbell_Twist_Ab_Workout"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 149/369
if ls "$DIR/7004824_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 149: 7004824 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7004824_How_to_do_a_Landmine_Row.mp4" "https://www.youtube.com/watch?v=qxFwGvAdTmY" --quiet --no-warnings 2>/dev/null && echo "OK 149/369: 7004824_How_to_do_a_Landmine_Row" || { echo "FAIL 149: 7004824_How_to_do_a_Landmine_Row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 150/369
if ls "$DIR/8324553_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 150: 8324553 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8324553_How_To_Do_a_Negative_Pull-Up_Exercise_Guide.mp4" "https://www.youtube.com/watch?v=gbPURTSxQLY" --quiet --no-warnings 2>/dev/null && echo "OK 150/369: 8324553_How_To_Do_a_Negative_Pull-Up_Exercise_Guid" || { echo "FAIL 150: 8324553_How_To_Do_a_Negative_Pull-Up_Exercise_Guid"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 151/369
if ls "$DIR/16485853_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 151: 16485853 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16485853_How_to_do_a_proper_dumbbell_rear_delt_fly.mp4" "https://www.youtube.com/watch?v=3oujCQxeCaI" --quiet --no-warnings 2>/dev/null && echo "OK 151/369: 16485853_How_to_do_a_proper_dumbbell_rear_delt_fly" || { echo "FAIL 151: 16485853_How_to_do_a_proper_dumbbell_rear_delt_fly"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 152/369
if ls "$DIR/6919112_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 152: 6919112 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6919112_How_To_Do_A_Single_Leg_Dumbbell_Hip_Thrust.mp4" "https://www.youtube.com/watch?v=5qnzUDDwm6c" --quiet --no-warnings 2>/dev/null && echo "OK 152/369: 6919112_How_To_Do_A_Single_Leg_Dumbbell_Hip_Thrust" || { echo "FAIL 152: 6919112_How_To_Do_A_Single_Leg_Dumbbell_Hip_Thrust"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 153/369
if ls "$DIR/7851791_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 153: 7851791 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7851791_How_to_do_a_Stomach_Vacuum.mp4" "https://www.youtube.com/watch?v=N9msEniBkbU" --quiet --no-warnings 2>/dev/null && echo "OK 153/369: 7851791_How_to_do_a_Stomach_Vacuum" || { echo "FAIL 153: 7851791_How_to_do_a_Stomach_Vacuum"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 154/369
if ls "$DIR/9371455_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 154: 9371455 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9371455_How_to_do_chin_tucks_exercise_correctly_Fix_Forward_head_position.mp4" "https://www.youtube.com/watch?v=gIBoxQ6AlS0" --quiet --no-warnings 2>/dev/null && echo "OK 154/369: 9371455_How_to_do_chin_tucks_exercise_correctly_Fi" || { echo "FAIL 154: 9371455_How_to_do_chin_tucks_exercise_correctly_Fi"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 155/369
if ls "$DIR/8917336_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 155: 8917336 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8917336_How_to_do_Close_Stance_Dumbbell_Front_Squat_Mike_Vazquez.mp4" "https://www.youtube.com/watch?v=U7Y-bY4bZj0" --quiet --no-warnings 2>/dev/null && echo "OK 155/369: 8917336_How_to_do_Close_Stance_Dumbbell_Front_Squa" || { echo "FAIL 155: 8917336_How_to_do_Close_Stance_Dumbbell_Front_Squa"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 156/369
if ls "$DIR/7616371_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 156: 7616371 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7616371_How_to_do_Falling_Hamstring_Curls_for_More_Athletic_Legs.mp4" "https://www.youtube.com/watch?v=m0IahJ49jnM" --quiet --no-warnings 2>/dev/null && echo "OK 156/369: 7616371_How_to_do_Falling_Hamstring_Curls_for_More" || { echo "FAIL 156: 7616371_How_to_do_Falling_Hamstring_Curls_for_More"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 157/369
if ls "$DIR/9783706_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 157: 9783706 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9783706_How_to_do_Wall_Balls.mp4" "https://www.youtube.com/watch?v=ryJoFCMNIr8" --quiet --no-warnings 2>/dev/null && echo "OK 157/369: 9783706_How_to_do_Wall_Balls" || { echo "FAIL 157: 9783706_How_to_do_Wall_Balls"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 158/369
if ls "$DIR/16306268_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 158: 16306268 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16306268_How_to_Feel_Glute_Hyperextensions_in_Your_Glutes_glutegrowth_hyperextension_gymt.mp4" "https://www.youtube.com/watch?v=CvReedcK1TQ" --quiet --no-warnings 2>/dev/null && echo "OK 158/369: 16306268_How_to_Feel_Glute_Hyperextensions_in_Your" || { echo "FAIL 158: 16306268_How_to_Feel_Glute_Hyperextensions_in_Your"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 159/369
if ls "$DIR/16485773_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 159: 16485773 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16485773_How_To_Leg_Press_With_Perfect_Technique.mp4" "https://www.youtube.com/watch?v=nDh_BlnLCGc" --quiet --no-warnings 2>/dev/null && echo "OK 159/369: 16485773_How_To_Leg_Press_With_Perfect_Technique" || { echo "FAIL 159: 16485773_How_To_Leg_Press_With_Perfect_Technique"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 160/369
if ls "$DIR/8616043_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 160: 8616043 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8616043_How_to_Perform_a_Deficit_Deadlift.mp4" "https://www.youtube.com/watch?v=hnuPZZfeRzs" --quiet --no-warnings 2>/dev/null && echo "OK 160/369: 8616043_How_to_Perform_a_Deficit_Deadlift" || { echo "FAIL 160: 8616043_How_to_Perform_a_Deficit_Deadlift"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 161/369
if ls "$DIR/7006749_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 161: 7006749 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006749_How_to_Perform_Wall_Angel_for_Tight_Upper_Back.mp4" "https://www.youtube.com/watch?v=1UU4VvklQ44" --quiet --no-warnings 2>/dev/null && echo "OK 161/369: 7006749_How_to_Perform_Wall_Angel_for_Tight_Upper_" || { echo "FAIL 161: 7006749_How_to_Perform_Wall_Angel_for_Tight_Upper_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 162/369
if ls "$DIR/16164822_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 162: 16164822 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16164822_How_to_Properly_Perform_Cable_Glute_Kickbacks_With_Good_Form_Exercise_Tutorial.mp4" "https://www.youtube.com/watch?v=n-cgsNePyFo" --quiet --no-warnings 2>/dev/null && echo "OK 162/369: 16164822_How_to_Properly_Perform_Cable_Glute_Kickb" || { echo "FAIL 162: 16164822_How_to_Properly_Perform_Cable_Glute_Kickb"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 163/369
if ls "$DIR/8471121_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 163: 8471121 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8471121_How_To_PROPERLY_Perform_the_Seated_Row_3_Cable_Row_Variations_for_Muscle_Gain.mp4" "https://www.youtube.com/watch?v=A77hAjcpN1s" --quiet --no-warnings 2>/dev/null && echo "OK 163/369: 8471121_How_To_PROPERLY_Perform_the_Seated_Row_3_C" || { echo "FAIL 163: 8471121_How_To_PROPERLY_Perform_the_Seated_Row_3_C"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 164/369
if ls "$DIR/7585384_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 164: 7585384 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7585384_How_To_Squat_Push-Press_-_Cardio_Workout_-_Fat_Burning_Workout_Tips.mp4" "https://www.youtube.com/watch?v=JeTzYOJfdL0" --quiet --no-warnings 2>/dev/null && echo "OK 164/369: 7585384_How_To_Squat_Push-Press_-_Cardio_Workout_-" || { echo "FAIL 164: 7585384_How_To_Squat_Push-Press_-_Cardio_Workout_-"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 165/369
if ls "$DIR/9371451_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 165: 9371451 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9371451_How_To_Stretch_The_Latissimus_Dorsi_Tight_Lats_-_Best_3_Lat_Stretches.mp4" "https://www.youtube.com/watch?v=RDnDU4cbRjU" --quiet --no-warnings 2>/dev/null && echo "OK 165/369: 9371451_How_To_Stretch_The_Latissimus_Dorsi_Tight_" || { echo "FAIL 165: 9371451_How_To_Stretch_The_Latissimus_Dorsi_Tight_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 166/369
if ls "$DIR/14439913_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 166: 14439913 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439913_How_to_Stretch_Your_Back_to_Relieve_Back_Pain_Wall_Sag_Trunk_Extension_Physica.mp4" "https://www.youtube.com/watch?v=s6Tj6-_p5n8" --quiet --no-warnings 2>/dev/null && echo "OK 166/369: 14439913_How_to_Stretch_Your_Back_to_Relieve_Back_" || { echo "FAIL 166: 14439913_How_to_Stretch_Your_Back_to_Relieve_Back_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 167/369
if ls "$DIR/7909270_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 167: 7909270 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7909270_How_To_Sumo_Deadlift_The_RIGHT_Way_Jordan_Syatt.mp4" "https://www.youtube.com/watch?v=cDlOSfu-zHY" --quiet --no-warnings 2>/dev/null && echo "OK 167/369: 7909270_How_To_Sumo_Deadlift_The_RIGHT_Way_Jordan_" || { echo "FAIL 167: 7909270_How_To_Sumo_Deadlift_The_RIGHT_Way_Jordan_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 168/369
if ls "$DIR/10500548_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 168: 10500548 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/10500548_How_to_use_LOW_ROW_machine_by_Technogym.mp4" "https://www.youtube.com/watch?v=_sFHnMnLwjM" --quiet --no-warnings 2>/dev/null && echo "OK 168/369: 10500548_How_to_use_LOW_ROW_machine_by_Technogym" || { echo "FAIL 168: 10500548_How_to_use_LOW_ROW_machine_by_Technogym"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 169/369
if ls "$DIR/7157374_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 169: 7157374 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7157374_How_to_Barbell_Curl_and_Press_for_Bigger_Biceps_amp_Shoulders.mp4" "https://www.youtube.com/watch?v=6cd9GoeQJwA" --quiet --no-warnings 2>/dev/null && echo "OK 169/369: 7157374_How_to_Barbell_Curl_and_Press_for_Bigger_B" || { echo "FAIL 169: 7157374_How_to_Barbell_Curl_and_Press_for_Bigger_B"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 170/369
if ls "$DIR/8874874_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 170: 8874874 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8874874_How_To_Barbell_Drag_Curl_Increase_Bicep_Peaks.mp4" "https://www.youtube.com/watch?v=LMdNTHH6G8I" --quiet --no-warnings 2>/dev/null && echo "OK 170/369: 8874874_How_To_Barbell_Drag_Curl_Increase_Bicep_Pe" || { echo "FAIL 170: 8874874_How_To_Barbell_Drag_Curl_Increase_Bicep_Pe"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 171/369
if ls "$DIR/8341289_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 171: 8341289 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8341289_How_To_Dumbbell_Bent-Over_Raise.mp4" "https://www.youtube.com/watch?v=ttvfGg9d76c" --quiet --no-warnings 2>/dev/null && echo "OK 171/369: 8341289_How_To_Dumbbell_Bent-Over_Raise" || { echo "FAIL 171: 8341289_How_To_Dumbbell_Bent-Over_Raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 172/369
if ls "$DIR/8693971_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 172: 8693971 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8693971_How_To_DUMBBELL_ROMANIAN_DEADLIFT_RDL.mp4" "https://www.youtube.com/watch?v=KrRtk8KbJik" --quiet --no-warnings 2>/dev/null && echo "OK 172/369: 8693971_How_To_DUMBBELL_ROMANIAN_DEADLIFT_RDL" || { echo "FAIL 172: 8693971_How_To_DUMBBELL_ROMANIAN_DEADLIFT_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 173/369
if ls "$DIR/6826183_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 173: 6826183 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6826183_How_To_Landmine_Oblique_Twist.mp4" "https://www.youtube.com/watch?v=epdBIT32SS0" --quiet --no-warnings 2>/dev/null && echo "OK 173/369: 6826183_How_To_Landmine_Oblique_Twist" || { echo "FAIL 173: 6826183_How_To_Landmine_Oblique_Twist"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 174/369
if ls "$DIR/8091959_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 174: 8091959 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8091959_How_To_Standing_Overhead_Tricep_Extension_with_E-Z_Curl_Bar.mp4" "https://www.youtube.com/watch?v=xvvN9HZvaBE" --quiet --no-warnings 2>/dev/null && echo "OK 174/369: 8091959_How_To_Standing_Overhead_Tricep_Extension_" || { echo "FAIL 174: 8091959_How_To_Standing_Overhead_Tricep_Extension_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 175/369
if ls "$DIR/16164802_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 175: 16164802 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16164802_How_To_Weighted_Step_Ups.mp4" "https://www.youtube.com/watch?v=PzDbmqL6qo8" --quiet --no-warnings 2>/dev/null && echo "OK 175/369: 16164802_How_To_Weighted_Step_Ups" || { echo "FAIL 175: 16164802_How_To_Weighted_Step_Ups"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 176/369
if ls "$DIR/16164807_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 176: 16164807 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16164807_Hyperextension_-_Glute_focused.mp4" "https://www.youtube.com/watch?v=YGUOyLf6BUg" --quiet --no-warnings 2>/dev/null && echo "OK 176/369: 16164807_Hyperextension_-_Glute_focused" || { echo "FAIL 176: 16164807_Hyperextension_-_Glute_focused"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 177/369
if ls "$DIR/12859244_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 177: 12859244 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/12859244_Hyperextensions_for_GLUTE_focus_Save_this_post_for_your_next_glute_day_shorts.mp4" "https://www.youtube.com/watch?v=S1_eZIIZlIc" --quiet --no-warnings 2>/dev/null && echo "OK 177/369: 12859244_Hyperextensions_for_GLUTE_focus_Save_this" || { echo "FAIL 177: 12859244_Hyperextensions_for_GLUTE_focus_Save_this"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 178/369
if ls "$DIR/9371442_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 178: 9371442 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9371442_Improve_Your_Posture_Doorway_Chest_Stretch.mp4" "https://www.youtube.com/watch?v=rT7rgXQtDcI" --quiet --no-warnings 2>/dev/null && echo "OK 178/369: 9371442_Improve_Your_Posture_Doorway_Chest_Stretch" || { echo "FAIL 178: 9371442_Improve_Your_Posture_Doorway_Chest_Stretch"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 179/369
if ls "$DIR/5246793_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 179: 5246793 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246793_Incline_cable_flies.mp4" "https://www.youtube.com/watch?v=AF604ne6ON4" --quiet --no-warnings 2>/dev/null && echo "OK 179/369: 5246793_Incline_cable_flies" || { echo "FAIL 179: 5246793_Incline_cable_flies"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 180/369
if ls "$DIR/5141796_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 180: 5141796 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5141796_Incline_cable_row.mp4" "https://www.youtube.com/watch?v=CAcGz5YvWEo" --quiet --no-warnings 2>/dev/null && echo "OK 180/369: 5141796_Incline_cable_row" || { echo "FAIL 180: 5141796_Incline_cable_row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 181/369
if ls "$DIR/5142186_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 181: 5142186 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142186_Incline_plate_side_lunge.mp4" "https://www.youtube.com/watch?v=JPcIDjGkdog" --quiet --no-warnings 2>/dev/null && echo "OK 181/369: 5142186_Incline_plate_side_lunge" || { echo "FAIL 181: 5142186_Incline_plate_side_lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 182/369
if ls "$DIR/5246905_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 182: 5246905 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246905_Incline_slow_walk_glute_Burn.mp4" "https://www.youtube.com/watch?v=Xy6UUWQVlt4" --quiet --no-warnings 2>/dev/null && echo "OK 182/369: 5246905_Incline_slow_walk_glute_Burn" || { echo "FAIL 182: 5246905_Incline_slow_walk_glute_Burn"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 183/369
if ls "$DIR/14139777_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 183: 14139777 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14139777_KAS_Hip_thruster.mp4" "https://www.youtube.com/watch?v=ylqOMMVUoVw" --quiet --no-warnings 2>/dev/null && echo "OK 183/369: 14139777_KAS_Hip_thruster" || { echo "FAIL 183: 14139777_KAS_Hip_thruster"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 184/369
if ls "$DIR/2297904_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 184: 2297904 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297904_KB_alt_side_sumo_squat.mp4" "https://www.youtube.com/watch?v=EnkgPDVQKvc" --quiet --no-warnings 2>/dev/null && echo "OK 184/369: 2297904_KB_alt_side_sumo_squat" || { echo "FAIL 184: 2297904_KB_alt_side_sumo_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 185/369
if ls "$DIR/5029329_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 185: 5029329 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5029329_KB_FROGS.mp4" "https://www.youtube.com/watch?v=C1-SOyXl5bI" --quiet --no-warnings 2>/dev/null && echo "OK 185/369: 5029329_KB_FROGS" || { echo "FAIL 185: 5029329_KB_FROGS"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 186/369
if ls "$DIR/2278826_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 186: 2278826 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278826_KB_knee_hip_thrust.mp4" "https://www.youtube.com/watch?v=5C8VnVZRNCo" --quiet --no-warnings 2>/dev/null && echo "OK 186/369: 2278826_KB_knee_hip_thrust" || { echo "FAIL 186: 2278826_KB_knee_hip_thrust"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 187/369
if ls "$DIR/2297861_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 187: 2297861 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297861_KB_RDL.mp4" "https://www.youtube.com/watch?v=dYhRLQ5_R00" --quiet --no-warnings 2>/dev/null && echo "OK 187/369: 2297861_KB_RDL" || { echo "FAIL 187: 2297861_KB_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 188/369
if ls "$DIR/2297863_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 188: 2297863 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297863_KB_SL_RDL.mp4" "https://www.youtube.com/watch?v=Pxa_9y3IfcE" --quiet --no-warnings 2>/dev/null && echo "OK 188/369: 2297863_KB_SL_RDL" || { echo "FAIL 188: 2297863_KB_SL_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 189/369
if ls "$DIR/2297918_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 189: 2297918 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297918_KB_squat_with_pulse.mp4" "https://www.youtube.com/watch?v=KuWIAlOuJtc" --quiet --no-warnings 2>/dev/null && echo "OK 189/369: 2297918_KB_squat_with_pulse" || { echo "FAIL 189: 2297918_KB_squat_with_pulse"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 190/369
if ls "$DIR/2297925_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 190: 2297925 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297925_KB_squats.mp4" "https://www.youtube.com/watch?v=ml1SMhEgVHA" --quiet --no-warnings 2>/dev/null && echo "OK 190/369: 2297925_KB_squats" || { echo "FAIL 190: 2297925_KB_squats"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 191/369
if ls "$DIR/2297911_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 191: 2297911 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297911_KB_sumo_squats.mp4" "https://www.youtube.com/watch?v=Rp9cbeqsMjE" --quiet --no-warnings 2>/dev/null && echo "OK 191/369: 2297911_KB_sumo_squats" || { echo "FAIL 191: 2297911_KB_sumo_squats"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 192/369
if ls "$DIR/2278804_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 192: 2278804 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278804_Kettle_bell_swings.mp4" "https://www.youtube.com/watch?v=vGJGGtc2LEw" --quiet --no-warnings 2>/dev/null && echo "OK 192/369: 2278804_Kettle_bell_swings" || { echo "FAIL 192: 2278804_Kettle_bell_swings"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 193/369
if ls "$DIR/8725388_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 193: 8725388 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8725388_Kettlebell_KBDumbbell_DB_Deadlift.mp4" "https://www.youtube.com/watch?v=DR3RuRgR_50" --quiet --no-warnings 2>/dev/null && echo "OK 193/369: 8725388_Kettlebell_KBDumbbell_DB_Deadlift" || { echo "FAIL 193: 8725388_Kettlebell_KBDumbbell_DB_Deadlift"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 194/369
if ls "$DIR/16485800_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 194: 16485800 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16485800_Key_to_a_Smith_Machine_RDL_shorts.mp4" "https://www.youtube.com/watch?v=LGDq97C_T5M" --quiet --no-warnings 2>/dev/null && echo "OK 194/369: 16485800_Key_to_a_Smith_Machine_RDL_shorts" || { echo "FAIL 194: 16485800_Key_to_a_Smith_Machine_RDL_shorts"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 195/369
if ls "$DIR/16485860_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 195: 16485860 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16485860_Knee_Tucks_Off_Bench.mp4" "https://www.youtube.com/watch?v=o99Zcz9pPvI" --quiet --no-warnings 2>/dev/null && echo "OK 195/369: 16485860_Knee_Tucks_Off_Bench" || { echo "FAIL 195: 16485860_Knee_Tucks_Off_Bench"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 196/369
if ls "$DIR/5249222_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 196: 5249222 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5249222_Kneeling_lateral_raises.mp4" "https://www.youtube.com/watch?v=YTzkqN0M298" --quiet --no-warnings 2>/dev/null && echo "OK 196/369: 5249222_Kneeling_lateral_raises" || { echo "FAIL 196: 5249222_Kneeling_lateral_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 197/369
if ls "$DIR/5249215_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 197: 5249215 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5249215_Kneeling_SA_press.mp4" "https://www.youtube.com/watch?v=p8Wc2QSrDMo" --quiet --no-warnings 2>/dev/null && echo "OK 197/369: 5249215_Kneeling_SA_press" || { echo "FAIL 197: 5249215_Kneeling_SA_press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 198/369
if ls "$DIR/7909279_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 198: 7909279 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7909279_Land_Mine_Reverse_Lunge.mp4" "https://www.youtube.com/watch?v=55rwpcOcB8M" --quiet --no-warnings 2>/dev/null && echo "OK 198/369: 7909279_Land_Mine_Reverse_Lunge" || { echo "FAIL 198: 7909279_Land_Mine_Reverse_Lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 199/369
if ls "$DIR/8325381_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 199: 8325381 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8325381_Landmine_Crunch.mp4" "https://www.youtube.com/watch?v=KEgLz-eYEKE" --quiet --no-warnings 2>/dev/null && echo "OK 199/369: 8325381_Landmine_Crunch" || { echo "FAIL 199: 8325381_Landmine_Crunch"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 200/369
if ls "$DIR/7707057_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 200: 7707057 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7707057_Landmine_Narrow_Stance_Hack_Squats.mp4" "https://www.youtube.com/watch?v=dx0Enc6If7M" --quiet --no-warnings 2>/dev/null && echo "OK 200/369: 7707057_Landmine_Narrow_Stance_Hack_Squats" || { echo "FAIL 200: 7707057_Landmine_Narrow_Stance_Hack_Squats"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 201/369
if ls "$DIR/7585272_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 201: 7585272 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7585272_Landmine_Plank_Position_Row.mp4" "https://www.youtube.com/watch?v=zr1FiAGUqck" --quiet --no-warnings 2>/dev/null && echo "OK 201/369: 7585272_Landmine_Plank_Position_Row" || { echo "FAIL 201: 7585272_Landmine_Plank_Position_Row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 202/369
if ls "$DIR/6892554_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 202: 6892554 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6892554_Landmine_RDL.mp4" "https://www.youtube.com/watch?v=cIYWlhhroVA" --quiet --no-warnings 2>/dev/null && echo "OK 202/369: 6892554_Landmine_RDL" || { echo "FAIL 202: 6892554_Landmine_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 203/369
if ls "$DIR/8341318_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 203: 8341318 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8341318_Landmine_Side-to-Side_Lateral_Squat.mp4" "https://www.youtube.com/watch?v=U1SN4FZJ5Rw" --quiet --no-warnings 2>/dev/null && echo "OK 203/369: 8341318_Landmine_Side-to-Side_Lateral_Squat" || { echo "FAIL 203: 8341318_Landmine_Side-to-Side_Lateral_Squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 204/369
if ls "$DIR/5142163_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 204: 5142163 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142163_Lat_pull_down.mp4" "https://www.youtube.com/watch?v=-AH79dmB9qs" --quiet --no-warnings 2>/dev/null && echo "OK 204/369: 5142163_Lat_pull_down" || { echo "FAIL 204: 5142163_Lat_pull_down"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 205/369
if ls "$DIR/9371448_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 205: 9371448 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9371448_Lat_Stretches_amp_Exercises_Latissimus_dorsi_-_Ask_Doctor_Jo.mp4" "https://www.youtube.com/watch?v=x1SdnOkQoo0" --quiet --no-warnings 2>/dev/null && echo "OK 205/369: 9371448_Lat_Stretches_amp_Exercises_Latissimus_dor" || { echo "FAIL 205: 9371448_Lat_Stretches_amp_Exercises_Latissimus_dor"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 206/369
if ls "$DIR/5246825_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 206: 5246825 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246825_Lateral_frontal_plate_raises.mp4" "https://www.youtube.com/watch?v=Xd6JubvzPEM" --quiet --no-warnings 2>/dev/null && echo "OK 206/369: 5246825_Lateral_frontal_plate_raises" || { echo "FAIL 206: 5246825_Lateral_frontal_plate_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 207/369
if ls "$DIR/5157349_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 207: 5157349 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5157349_Lateral_kick.mp4" "https://www.youtube.com/watch?v=reYKU6QsgkQ" --quiet --no-warnings 2>/dev/null && echo "OK 207/369: 5157349_Lateral_kick" || { echo "FAIL 207: 5157349_Lateral_kick"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 208/369
if ls "$DIR/15753542_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 208: 15753542 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/15753542_lateral_kicks.mp4" "https://www.youtube.com/watch?v=OyB4rqkfD_U" --quiet --no-warnings 2>/dev/null && echo "OK 208/369: 15753542_lateral_kicks" || { echo "FAIL 208: 15753542_lateral_kicks"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 209/369
if ls "$DIR/5142160_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 209: 5142160 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142160_Lateral_plate_raises.mp4" "https://www.youtube.com/watch?v=LM5uY7Unlms" --quiet --no-warnings 2>/dev/null && echo "OK 209/369: 5142160_Lateral_plate_raises" || { echo "FAIL 209: 5142160_Lateral_plate_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 210/369
if ls "$DIR/2297778_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 210: 2297778 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297778_Leg_abduction.mp4" "https://www.youtube.com/watch?v=E6KDNg7MHp8" --quiet --no-warnings 2>/dev/null && echo "OK 210/369: 2297778_Leg_abduction" || { echo "FAIL 210: 2297778_Leg_abduction"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 211/369
if ls "$DIR/5142181_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 211: 5142181 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142181_Leg_ext_slow_ecc.mp4" "https://www.youtube.com/watch?v=1OH6CrBFBcY" --quiet --no-warnings 2>/dev/null && echo "OK 211/369: 5142181_Leg_ext_slow_ecc" || { echo "FAIL 211: 5142181_Leg_ext_slow_ecc"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 212/369
if ls "$DIR/5246851_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 212: 5246851 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246851_Low_back_ext.mp4" "https://www.youtube.com/watch?v=sUcYwM6M65Y" --quiet --no-warnings 2>/dev/null && echo "OK 212/369: 5246851_Low_back_ext" || { echo "FAIL 212: 5246851_Low_back_ext"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 213/369
if ls "$DIR/5246679_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 213: 5246679 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246679_Low_leg_lift_with_glute_raise.mp4" "https://www.youtube.com/watch?v=wy_A2L9QEH8" --quiet --no-warnings 2>/dev/null && echo "OK 213/369: 5246679_Low_leg_lift_with_glute_raise" || { echo "FAIL 213: 5246679_Low_leg_lift_with_glute_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 214/369
if ls "$DIR/10500559_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 214: 10500559 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/10500559_Low_Pull_Technogym.mp4" "https://www.youtube.com/watch?v=jgjm74YJ0mk" --quiet --no-warnings 2>/dev/null && echo "OK 214/369: 10500559_Low_Pull_Technogym" || { echo "FAIL 214: 10500559_Low_Pull_Technogym"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 215/369
if ls "$DIR/2278806_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 215: 2278806 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278806_Lower_leg_lifts_with_glute_raise.mp4" "https://www.youtube.com/watch?v=tvFWCpYao8c" --quiet --no-warnings 2>/dev/null && echo "OK 215/369: 2278806_Lower_leg_lifts_with_glute_raise" || { echo "FAIL 215: 2278806_Lower_leg_lifts_with_glute_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 216/369
if ls "$DIR/7285283_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 216: 7285283 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7285283_Lying_Barbell_or_EZ_Bar_Triceps_Extension.mp4" "https://www.youtube.com/watch?v=hOwZLq1VSRg" --quiet --no-warnings 2>/dev/null && echo "OK 216/369: 7285283_Lying_Barbell_or_EZ_Bar_Triceps_Extension" || { echo "FAIL 216: 7285283_Lying_Barbell_or_EZ_Bar_Triceps_Extension"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 217/369
if ls "$DIR/5142165_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 217: 5142165 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142165_Machine_chest_press.mp4" "https://www.youtube.com/watch?v=mQeErYeW4IY" --quiet --no-warnings 2>/dev/null && echo "OK 217/369: 5142165_Machine_chest_press" || { echo "FAIL 217: 5142165_Machine_chest_press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 218/369
if ls "$DIR/5246609_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 218: 5246609 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246609_Machine_glute_thrust.mp4" "https://www.youtube.com/watch?v=bV2bdzAh348" --quiet --no-warnings 2>/dev/null && echo "OK 218/369: 5246609_Machine_glute_thrust" || { echo "FAIL 218: 5246609_Machine_glute_thrust"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 219/369
if ls "$DIR/7285809_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 219: 7285809 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7285809_Medicine_Ball_Plank.mp4" "https://www.youtube.com/watch?v=C7GOZ8jbqvA" --quiet --no-warnings 2>/dev/null && echo "OK 219/369: 7285809_Medicine_Ball_Plank" || { echo "FAIL 219: 7285809_Medicine_Ball_Plank"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 220/369
if ls "$DIR/5141793_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 220: 5141793 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5141793_Modified_incline_push_up.mp4" "https://www.youtube.com/watch?v=U9hqDgZ5yVA" --quiet --no-warnings 2>/dev/null && echo "OK 220/369: 5141793_Modified_incline_push_up" || { echo "FAIL 220: 5141793_Modified_incline_push_up"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 221/369
if ls "$DIR/2296992_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 221: 2296992 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2296992_Narrow_goblet_squat.mp4" "https://www.youtube.com/watch?v=AwHXugEAr7o" --quiet --no-warnings 2>/dev/null && echo "OK 221/369: 2296992_Narrow_goblet_squat" || { echo "FAIL 221: 2296992_Narrow_goblet_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 222/369
if ls "$DIR/7789072_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 222: 7789072 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7789072_Narrow_Squats.mp4" "https://www.youtube.com/watch?v=qJM0mibGqqY" --quiet --no-warnings 2>/dev/null && echo "OK 222/369: 7789072_Narrow_Squats" || { echo "FAIL 222: 7789072_Narrow_Squats"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 223/369
if ls "$DIR/7909293_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 223: 7909293 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7909293_Negative_Pull_Up_Benefits_Technique_How_to_Use_in_Your_Workouts.mp4" "https://www.youtube.com/watch?v=43hDGudI5ik" --quiet --no-warnings 2>/dev/null && echo "OK 223/369: 7909293_Negative_Pull_Up_Benefits_Technique_How_to" || { echo "FAIL 223: 7909293_Negative_Pull_Up_Benefits_Technique_How_to"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 224/369
if ls "$DIR/9680024_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 224: 9680024 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9680024_Neutral_Shoulder_Press_for_Side_Delts_Weightlifting_Techniques.mp4" "https://www.youtube.com/watch?v=j6DmY8Q_kSE" --quiet --no-warnings 2>/dev/null && echo "OK 224/369: 9680024_Neutral_Shoulder_Press_for_Side_Delts_Weig" || { echo "FAIL 224: 9680024_Neutral_Shoulder_Press_for_Side_Delts_Weig"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 225/369
if ls "$DIR/2280390_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 225: 2280390 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2280390_Oblique_MD_twist.mp4" "https://www.youtube.com/watch?v=a71ergv9IRc" --quiet --no-warnings 2>/dev/null && echo "OK 225/369: 2280390_Oblique_MD_twist" || { echo "FAIL 225: 2280390_Oblique_MD_twist"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 226/369
if ls "$DIR/5146782_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 226: 5146782 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5146782_Overhead_tri_cable_pull.mp4" "https://www.youtube.com/watch?v=w01uxVc10J0" --quiet --no-warnings 2>/dev/null && echo "OK 226/369: 5146782_Overhead_tri_cable_pull" || { echo "FAIL 226: 5146782_Overhead_tri_cable_pull"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 227/369
if ls "$DIR/5246705_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 227: 5246705 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246705_Pilates_bicycle_legs.mp4" "https://www.youtube.com/watch?v=HoRI3N0H1WU" --quiet --no-warnings 2>/dev/null && echo "OK 227/369: 5246705_Pilates_bicycle_legs" || { echo "FAIL 227: 5246705_Pilates_bicycle_legs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 228/369
if ls "$DIR/5246699_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 228: 5246699 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246699_Pilates_low_leg_lifts.mp4" "https://www.youtube.com/watch?v=woquCG6VBuw" --quiet --no-warnings 2>/dev/null && echo "OK 228/369: 5246699_Pilates_low_leg_lifts" || { echo "FAIL 228: 5246699_Pilates_low_leg_lifts"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 229/369
if ls "$DIR/12794068_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 229: 12794068 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/12794068_Pilates_Oblique_Crunch_with_Leg_Raise_Lv_3.mp4" "https://www.youtube.com/watch?v=AlqmBNTcgVY" --quiet --no-warnings 2>/dev/null && echo "OK 229/369: 12794068_Pilates_Oblique_Crunch_with_Leg_Raise_Lv_" || { echo "FAIL 229: 12794068_Pilates_Oblique_Crunch_with_Leg_Raise_Lv_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 230/369
if ls "$DIR/5246710_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 230: 5246710 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246710_Plank.mp4" "https://www.youtube.com/watch?v=knFLgd4uboQ" --quiet --no-warnings 2>/dev/null && echo "OK 230/369: 5246710_Plank" || { echo "FAIL 230: 5246710_Plank"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 231/369
if ls "$DIR/2278821_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 231: 2278821 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278821_Plank_hip_taps.mp4" "https://www.youtube.com/watch?v=JW7qfzkMcgo" --quiet --no-warnings 2>/dev/null && echo "OK 231/369: 2278821_Plank_hip_taps" || { echo "FAIL 231: 2278821_Plank_hip_taps"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 232/369
if ls "$DIR/2278810_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 232: 2278810 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278810_Plank_jacks_with_my_climber.mp4" "https://www.youtube.com/watch?v=kkHkS9qMglg" --quiet --no-warnings 2>/dev/null && echo "OK 232/369: 2278810_Plank_jacks_with_my_climber" || { echo "FAIL 232: 2278810_Plank_jacks_with_my_climber"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 233/369
if ls "$DIR/5246828_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 233: 5246828 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246828_Plate_around_the_worlds.mp4" "https://www.youtube.com/watch?v=-LBgNbMo_4g" --quiet --no-warnings 2>/dev/null && echo "OK 233/369: 5246828_Plate_around_the_worlds" || { echo "FAIL 233: 5246828_Plate_around_the_worlds"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 234/369
if ls "$DIR/7427222_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 234: 7427222 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7427222_Plate_Push.mp4" "https://www.youtube.com/watch?v=isFXOw6lqZs" --quiet --no-warnings 2>/dev/null && echo "OK 234/369: 7427222_Plate_Push" || { echo "FAIL 234: 7427222_Plate_Push"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 235/369
if ls "$DIR/7006586_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 235: 7006586 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006586_Power_Plate_Plank.mp4" "https://www.youtube.com/watch?v=RPKt_CKplRA" --quiet --no-warnings 2>/dev/null && echo "OK 235/369: 7006586_Power_Plate_Plank" || { echo "FAIL 235: 7006586_Power_Plate_Plank"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 236/369
if ls "$DIR/14788090_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 236: 14788090 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14788090_Prone_Chest_Stretch.mp4" "https://www.youtube.com/watch?v=tatrv67rou8" --quiet --no-warnings 2>/dev/null && echo "OK 236/369: 14788090_Prone_Chest_Stretch" || { echo "FAIL 236: 14788090_Prone_Chest_Stretch"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 237/369
if ls "$DIR/14439937_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 237: 14439937 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439937_Prone_Chin_Tuck_off_edge_of_table.mp4" "https://www.youtube.com/watch?v=B_ouHl1zjjQ" --quiet --no-warnings 2>/dev/null && echo "OK 237/369: 14439937_Prone_Chin_Tuck_off_edge_of_table" || { echo "FAIL 237: 14439937_Prone_Chin_Tuck_off_edge_of_table"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 238/369
if ls "$DIR/5142112_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 238: 5142112 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142112_Push_up_decline.mp4" "https://www.youtube.com/watch?v=pA1dplUiOw4" --quiet --no-warnings 2>/dev/null && echo "OK 238/369: 5142112_Push_up_decline" || { echo "FAIL 238: 5142112_Push_up_decline"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 239/369
if ls "$DIR/2278811_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 239: 2278811 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278811_Push_up_into_glute_raise.mp4" "https://www.youtube.com/watch?v=JpD6NuGsYEg" --quiet --no-warnings 2>/dev/null && echo "OK 239/369: 2278811_Push_up_into_glute_raise" || { echo "FAIL 239: 2278811_Push_up_into_glute_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 240/369
if ls "$DIR/6892524_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 240: 6892524 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6892524_QUAD_BLASTER_Landmine_Front_Squat_Purmotion_Wishbone_Attachment.mp4" "https://www.youtube.com/watch?v=_tqd5Yx_Trc" --quiet --no-warnings 2>/dev/null && echo "OK 240/369: 6892524_QUAD_BLASTER_Landmine_Front_Squat_Purmotio" || { echo "FAIL 240: 6892524_QUAD_BLASTER_Landmine_Front_Squat_Purmotio"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 241/369
if ls "$DIR/2278829_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 241: 2278829 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278829_Raised_single_leg_glute_bridge.mp4" "https://www.youtube.com/watch?v=z4uR4jD55oA" --quiet --no-warnings 2>/dev/null && echo "OK 241/369: 2278829_Raised_single_leg_glute_bridge" || { echo "FAIL 241: 2278829_Raised_single_leg_glute_bridge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 242/369
if ls "$DIR/2302014_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 242: 2302014 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2302014_RB_clams.mp4" "https://www.youtube.com/watch?v=5eGnHb4j0YI" --quiet --no-warnings 2>/dev/null && echo "OK 242/369: 2302014_RB_clams" || { echo "FAIL 242: 2302014_RB_clams"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 243/369
if ls "$DIR/2297802_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 243: 2297802 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297802_RB_donkey_kick_backs.mp4" "https://www.youtube.com/watch?v=haf2y2cES54" --quiet --no-warnings 2>/dev/null && echo "OK 243/369: 2297802_RB_donkey_kick_backs" || { echo "FAIL 243: 2297802_RB_donkey_kick_backs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 244/369
if ls "$DIR/7006792_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 244: 7006792 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006792_RB_Front_Raises.mp4" "https://www.youtube.com/watch?v=0oOrmCDLGK4" --quiet --no-warnings 2>/dev/null && echo "OK 244/369: 7006792_RB_Front_Raises" || { echo "FAIL 244: 7006792_RB_Front_Raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 245/369
if ls "$DIR/2297808_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 245: 2297808 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297808_RB_glute_kick_overs.mp4" "https://www.youtube.com/watch?v=apFzVZ7Eh7k" --quiet --no-warnings 2>/dev/null && echo "OK 245/369: 2297808_RB_glute_kick_overs" || { echo "FAIL 245: 2297808_RB_glute_kick_overs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 246/369
if ls "$DIR/2297821_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 246: 2297821 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297821_RB_hip_ext.mp4" "https://www.youtube.com/watch?v=TFYFaHcTSPc" --quiet --no-warnings 2>/dev/null && echo "OK 246/369: 2297821_RB_hip_ext" || { echo "FAIL 246: 2297821_RB_hip_ext"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 247/369
if ls "$DIR/2302017_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 247: 2302017 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2302017_RB_hip_kickbacks.mp4" "https://www.youtube.com/watch?v=GHFwQ0wBZWw" --quiet --no-warnings 2>/dev/null && echo "OK 247/369: 2302017_RB_hip_kickbacks" || { echo "FAIL 247: 2302017_RB_hip_kickbacks"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 248/369
if ls "$DIR/2302019_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 248: 2302019 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2302019_RB_lateral_raises.mp4" "https://www.youtube.com/watch?v=C3xblGcXXbU" --quiet --no-warnings 2>/dev/null && echo "OK 248/369: 2302019_RB_lateral_raises" || { echo "FAIL 248: 2302019_RB_lateral_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 249/369
if ls "$DIR/2297890_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 249: 2297890 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297890_RB_squat_shuffle.mp4" "https://www.youtube.com/watch?v=wf10xZ3oc5E" --quiet --no-warnings 2>/dev/null && echo "OK 249/369: 2297890_RB_squat_shuffle" || { echo "FAIL 249: 2297890_RB_squat_shuffle"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 250/369
if ls "$DIR/7006772_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 250: 7006772 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006772_RB_Standing_Pallof_Press.mp4" "https://www.youtube.com/watch?v=QtwuN2hRZEE" --quiet --no-warnings 2>/dev/null && echo "OK 250/369: 7006772_RB_Standing_Pallof_Press" || { echo "FAIL 250: 7006772_RB_Standing_Pallof_Press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 251/369
if ls "$DIR/12408665_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 251: 12408665 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/12408665_RDL_into_a_Bulgarian_Split_Squat_-_Show_Up_Fitness.mp4" "https://www.youtube.com/watch?v=HA4U6Y1ZM5c" --quiet --no-warnings 2>/dev/null && echo "OK 251/369: 12408665_RDL_into_a_Bulgarian_Split_Squat_-_Show_U" || { echo "FAIL 251: 12408665_RDL_into_a_Bulgarian_Split_Squat_-_Show_U"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 252/369
if ls "$DIR/5246797_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 252: 5246797 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246797_Rear_delt_cable_fly.mp4" "https://www.youtube.com/watch?v=h3vO55JuuLw" --quiet --no-warnings 2>/dev/null && echo "OK 252/369: 5246797_Rear_delt_cable_fly" || { echo "FAIL 252: 5246797_Rear_delt_cable_fly"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 253/369
if ls "$DIR/5037332_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 253: 5037332 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5037332_Reverse_band_glute_walks.mp4" "https://www.youtube.com/watch?v=e8HlUImJIlA" --quiet --no-warnings 2>/dev/null && echo "OK 253/369: 5037332_Reverse_band_glute_walks" || { echo "FAIL 253: 5037332_Reverse_band_glute_walks"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 254/369
if ls "$DIR/2296974_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 254: 2296974 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2296974_Reverse_curtsy_lunge.mp4" "https://www.youtube.com/watch?v=JDWTg9DUvnc" --quiet --no-warnings 2>/dev/null && echo "OK 254/369: 2296974_Reverse_curtsy_lunge" || { echo "FAIL 254: 2296974_Reverse_curtsy_lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 255/369
if ls "$DIR/7006668_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 255: 7006668 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006668_Reverse_Grip_Cable_Row_How_To_Perform_Them_Correctly.mp4" "https://www.youtube.com/watch?v=YUhAXDSL7Ko" --quiet --no-warnings 2>/dev/null && echo "OK 255/369: 7006668_Reverse_Grip_Cable_Row_How_To_Perform_Them" || { echo "FAIL 255: 7006668_Reverse_Grip_Cable_Row_How_To_Perform_Them"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 256/369
if ls "$DIR/2297895_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 256: 2297895 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297895_Reverse_lunge.mp4" "https://www.youtube.com/watch?v=V_2Th64qEoU" --quiet --no-warnings 2>/dev/null && echo "OK 256/369: 2297895_Reverse_lunge" || { echo "FAIL 256: 2297895_Reverse_lunge"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 257/369
if ls "$DIR/14439948_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 257: 14439948 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14439948_Rotator_Cuff_Strengthening_Exercises_Internal_and_External_Rotation.mp4" "https://www.youtube.com/watch?v=t55fsxzzL8M" --quiet --no-warnings 2>/dev/null && echo "OK 257/369: 14439948_Rotator_Cuff_Strengthening_Exercises_Inte" || { echo "FAIL 257: 14439948_Rotator_Cuff_Strengthening_Exercises_Inte"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 258/369
if ls "$DIR/5146773_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 258: 5146773 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5146773_SA_cable_bicep_curl.mp4" "https://www.youtube.com/watch?v=toGCZhWnMWo" --quiet --no-warnings 2>/dev/null && echo "OK 258/369: 5146773_SA_cable_bicep_curl" || { echo "FAIL 258: 5146773_SA_cable_bicep_curl"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 259/369
if ls "$DIR/5246876_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 259: 5246876 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246876_SA_cable_kickback.mp4" "https://www.youtube.com/watch?v=dY5IY1QNA34" --quiet --no-warnings 2>/dev/null && echo "OK 259/369: 5246876_SA_cable_kickback" || { echo "FAIL 259: 5246876_SA_cable_kickback"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 260/369
if ls "$DIR/5141806_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 260: 5141806 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5141806_SA_cable_lat_pull.mp4" "https://www.youtube.com/watch?v=bqlonJylB2E" --quiet --no-warnings 2>/dev/null && echo "OK 260/369: 5141806_SA_cable_lat_pull" || { echo "FAIL 260: 5141806_SA_cable_lat_pull"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 261/369
if ls "$DIR/5150260_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 261: 5150260 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5150260_SA_cross_over_lat_pull.mp4" "https://www.youtube.com/watch?v=SnWzYpBG2Ww" --quiet --no-warnings 2>/dev/null && echo "OK 261/369: 5150260_SA_cross_over_lat_pull" || { echo "FAIL 261: 5150260_SA_cross_over_lat_pull"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 262/369
if ls "$DIR/5142142_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 262: 5142142 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142142_SA_DB_ROW.mp4" "https://www.youtube.com/watch?v=zohIzmrMZh8" --quiet --no-warnings 2>/dev/null && echo "OK 262/369: 5142142_SA_DB_ROW" || { echo "FAIL 262: 5142142_SA_DB_ROW"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 263/369
if ls "$DIR/5142120_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 263: 5142120 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142120_SA_DB_tricep_ext.mp4" "https://www.youtube.com/watch?v=dY5orywQBek" --quiet --no-warnings 2>/dev/null && echo "OK 263/369: 5142120_SA_DB_tricep_ext" || { echo "FAIL 263: 5142120_SA_DB_tricep_ext"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 264/369
if ls "$DIR/5249226_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 264: 5249226 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5249226_SA_KB_sit-up.mp4" "https://www.youtube.com/watch?v=v0_IbMtgFwc" --quiet --no-warnings 2>/dev/null && echo "OK 264/369: 5249226_SA_KB_sit-up" || { echo "FAIL 264: 5249226_SA_KB_sit-up"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 265/369
if ls "$DIR/5246809_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 265: 5246809 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246809_SA_tricep_lateral_ext.mp4" "https://www.youtube.com/watch?v=BQsMdpz8Dvw" --quiet --no-warnings 2>/dev/null && echo "OK 265/369: 5246809_SA_tricep_lateral_ext" || { echo "FAIL 265: 5246809_SA_tricep_lateral_ext"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 266/369
if ls "$DIR/16777355_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 266: 16777355 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16777355_SB_Crunch.mp4" "https://www.youtube.com/watch?v=i9DEwUIUjn4" --quiet --no-warnings 2>/dev/null && echo "OK 266/369: 16777355_SB_Crunch" || { echo "FAIL 266: 16777355_SB_Crunch"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 267/369
if ls "$DIR/2278817_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 267: 2278817 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278817_SB_folding_chair.mp4" "https://www.youtube.com/watch?v=1Qj1vFSZmKE" --quiet --no-warnings 2>/dev/null && echo "OK 267/369: 2278817_SB_folding_chair" || { echo "FAIL 267: 2278817_SB_folding_chair"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 268/369
if ls "$DIR/5246724_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 268: 5246724 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246724_SB_folding_chairs.mp4" "https://www.youtube.com/watch?v=TQqOv14sayw" --quiet --no-warnings 2>/dev/null && echo "OK 268/369: 5246724_SB_folding_chairs" || { echo "FAIL 268: 5246724_SB_folding_chairs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 269/369
if ls "$DIR/5246731_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 269: 5246731 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246731_SB_glute_hamstring_rolls.mp4" "https://www.youtube.com/watch?v=nkUVDZ7ojuE" --quiet --no-warnings 2>/dev/null && echo "OK 269/369: 5246731_SB_glute_hamstring_rolls" || { echo "FAIL 269: 5246731_SB_glute_hamstring_rolls"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 270/369
if ls "$DIR/2297857_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 270: 2297857 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297857_SB_hamstring_roll.mp4" "https://www.youtube.com/watch?v=BHpNkpsytag" --quiet --no-warnings 2>/dev/null && echo "OK 270/369: 2297857_SB_hamstring_roll" || { echo "FAIL 270: 2297857_SB_hamstring_roll"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 271/369
if ls "$DIR/2297852_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 271: 2297852 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297852_SB_hamstring_roll_with_glute_raise.mp4" "https://www.youtube.com/watch?v=XZ_SjWWP8hg" --quiet --no-warnings 2>/dev/null && echo "OK 271/369: 2297852_SB_hamstring_roll_with_glute_raise" || { echo "FAIL 271: 2297852_SB_hamstring_roll_with_glute_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 272/369
if ls "$DIR/5246718_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 272: 5246718 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246718_SB_plank.mp4" "https://www.youtube.com/watch?v=H_JaSAkibAo" --quiet --no-warnings 2>/dev/null && echo "OK 272/369: 5246718_SB_plank" || { echo "FAIL 272: 5246718_SB_plank"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 273/369
if ls "$DIR/5308534_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 273: 5308534 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308534_Sb_roll_out.mp4" "https://www.youtube.com/watch?v=a65vkQW2HrQ" --quiet --no-warnings 2>/dev/null && echo "OK 273/369: 5308534_Sb_roll_out" || { echo "FAIL 273: 5308534_Sb_roll_out"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 274/369
if ls "$DIR/5246880_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 274: 5246880 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246880_Sb_squat_with_booty_tap.mp4" "https://www.youtube.com/watch?v=PQTY7hRQ7V4" --quiet --no-warnings 2>/dev/null && echo "OK 274/369: 5246880_Sb_squat_with_booty_tap" || { echo "FAIL 274: 5246880_Sb_squat_with_booty_tap"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 275/369
if ls "$DIR/14788002_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 275: 14788002 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14788002_Scapular_Clock_Exercise.mp4" "https://www.youtube.com/watch?v=6KW20pgMN2A" --quiet --no-warnings 2>/dev/null && echo "OK 275/369: 14788002_Scapular_Clock_Exercise" || { echo "FAIL 275: 14788002_Scapular_Clock_Exercise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 276/369
if ls "$DIR/7585555_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 276: 7585555 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7585555_Schwinn_Airdyne_Pro_vs_Rogue_Echo_Bike_-_Side_by_Side_Comparison.mp4" "https://www.youtube.com/watch?v=OnI9Xlt-6vQ" --quiet --no-warnings 2>/dev/null && echo "OK 276/369: 7585555_Schwinn_Airdyne_Pro_vs_Rogue_Echo_Bike_-_S" || { echo "FAIL 276: 7585555_Schwinn_Airdyne_Pro_vs_Rogue_Echo_Bike_-_S"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 277/369
if ls "$DIR/5150257_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 277: 5150257 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5150257_Seated_narrow_grip_row.mp4" "https://www.youtube.com/watch?v=1JN69cfMTn4" --quiet --no-warnings 2>/dev/null && echo "OK 277/369: 5150257_Seated_narrow_grip_row" || { echo "FAIL 277: 5150257_Seated_narrow_grip_row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 278/369
if ls "$DIR/7006783_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 278: 7006783 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006783_Seated_Neutral_Grip_DB_Shoulder_Press.mp4" "https://www.youtube.com/watch?v=DbubsKK0OVU" --quiet --no-warnings 2>/dev/null && echo "OK 278/369: 7006783_Seated_Neutral_Grip_DB_Shoulder_Press" || { echo "FAIL 278: 7006783_Seated_Neutral_Grip_DB_Shoulder_Press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 279/369
if ls "$DIR/5043462_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 279: 5043462 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5043462_Shoulder_pushpress.mp4" "https://www.youtube.com/watch?v=gKnx7KLZtWc" --quiet --no-warnings 2>/dev/null && echo "OK 279/369: 5043462_Shoulder_pushpress" || { echo "FAIL 279: 5043462_Shoulder_pushpress"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 280/369
if ls "$DIR/2278812_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 280: 2278812 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278812_Shoulder_swings.mp4" "https://www.youtube.com/watch?v=JAUAq766mSk" --quiet --no-warnings 2>/dev/null && echo "OK 280/369: 2278812_Shoulder_swings" || { echo "FAIL 280: 2278812_Shoulder_swings"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 281/369
if ls "$DIR/2280438_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 281: 2280438 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2280438_Shoulder_T.mp4" "https://www.youtube.com/watch?v=6QmAsvJ09go" --quiet --no-warnings 2>/dev/null && echo "OK 281/369: 2280438_Shoulder_T" || { echo "FAIL 281: 2280438_Shoulder_T"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 282/369
if ls "$DIR/2280457_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 282: 2280457 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2280457_Shoulder_W_2.mp4" "https://www.youtube.com/watch?v=Mwydjl90GlM" --quiet --no-warnings 2>/dev/null && echo "OK 282/369: 2280457_Shoulder_W_2" || { echo "FAIL 282: 2280457_Shoulder_W_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 283/369
if ls "$DIR/2280443_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 283: 2280443 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2280443_Shoulder_W1.mp4" "https://www.youtube.com/watch?v=b4UsS-qJaGY" --quiet --no-warnings 2>/dev/null && echo "OK 283/369: 2280443_Shoulder_W1" || { echo "FAIL 283: 2280443_Shoulder_W1"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 284/369
if ls "$DIR/2280435_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 284: 2280435 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2280435_Shoulder_Y.mp4" "https://www.youtube.com/watch?v=gbDP97r8eaA" --quiet --no-warnings 2>/dev/null && echo "OK 284/369: 2280435_Shoulder_Y" || { echo "FAIL 284: 2280435_Shoulder_Y"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 285/369
if ls "$DIR/5142177_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 285: 5142177 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142177_Side_leg_press.mp4" "https://www.youtube.com/watch?v=c6rW6QnrMio" --quiet --no-warnings 2>/dev/null && echo "OK 285/369: 5142177_Side_leg_press" || { echo "FAIL 285: 5142177_Side_leg_press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 286/369
if ls "$DIR/7602885_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 286: 7602885 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7602885_Side_lunge_with_knee_raise.mp4" "https://www.youtube.com/watch?v=omRxbuocC4w" --quiet --no-warnings 2>/dev/null && echo "OK 286/369: 7602885_Side_lunge_with_knee_raise" || { echo "FAIL 286: 7602885_Side_lunge_with_knee_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 287/369
if ls "$DIR/5246743_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 287: 5246743 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246743_Side_plank_hip_taps.mp4" "https://www.youtube.com/watch?v=QEg7_2c4zDg" --quiet --no-warnings 2>/dev/null && echo "OK 287/369: 5246743_Side_plank_hip_taps" || { echo "FAIL 287: 5246743_Side_plank_hip_taps"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 288/369
if ls "$DIR/2278807_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 288: 2278807 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278807_Side_plank_knee_to_elbow.mp4" "https://www.youtube.com/watch?v=yRFMXUPH6Q0" --quiet --no-warnings 2>/dev/null && echo "OK 288/369: 2278807_Side_plank_knee_to_elbow" || { echo "FAIL 288: 2278807_Side_plank_knee_to_elbow"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 289/369
if ls "$DIR/2297830_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 289: 2297830 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297830_Side_squat_with_towel_slide.mp4" "https://www.youtube.com/watch?v=AvHkm1VViWk" --quiet --no-warnings 2>/dev/null && echo "OK 289/369: 2297830_Side_squat_with_towel_slide" || { echo "FAIL 289: 2297830_Side_squat_with_towel_slide"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 290/369
if ls "$DIR/7147387_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 290: 7147387 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7147387_Side_to_side_squats.mp4" "https://www.youtube.com/watch?v=95dESjJxAdI" --quiet --no-warnings 2>/dev/null && echo "OK 290/369: 7147387_Side_to_side_squats" || { echo "FAIL 290: 7147387_Side_to_side_squats"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 291/369
if ls "$DIR/13459329_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 291: 13459329 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/13459329_Single_Led_RDL_with_a_Twist.mp4" "https://www.youtube.com/watch?v=_5AjwTLXq9A" --quiet --no-warnings 2>/dev/null && echo "OK 291/369: 13459329_Single_Led_RDL_with_a_Twist" || { echo "FAIL 291: 13459329_Single_Led_RDL_with_a_Twist"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 292/369
if ls "$DIR/6919105_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 292: 6919105 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6919105_Single_Leg_DB_Hip_Thrust.mp4" "https://www.youtube.com/watch?v=KW7yo5x7-HI" --quiet --no-warnings 2>/dev/null && echo "OK 292/369: 6919105_Single_Leg_DB_Hip_Thrust" || { echo "FAIL 292: 6919105_Single_Leg_DB_Hip_Thrust"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 293/369
if ls "$DIR/6919107_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 293: 6919107 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6919107_Single_Leg_Dumbbell_Hip_Thrust_Full_Tutorial_-_Glute_Exercises_for_Beginners.mp4" "https://www.youtube.com/watch?v=L4nTaesNm0E" --quiet --no-warnings 2>/dev/null && echo "OK 293/369: 6919107_Single_Leg_Dumbbell_Hip_Thrust_Full_Tutori" || { echo "FAIL 293: 6919107_Single_Leg_Dumbbell_Hip_Thrust_Full_Tutori"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 294/369
if ls "$DIR/6919109_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 294: 6919109 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6919109_Single_Leg_Dumbbell_Hip_Thrusts.mp4" "https://www.youtube.com/watch?v=Udd_p2mm8aM" --quiet --no-warnings 2>/dev/null && echo "OK 294/369: 6919109_Single_Leg_Dumbbell_Hip_Thrusts" || { echo "FAIL 294: 6919109_Single_Leg_Dumbbell_Hip_Thrusts"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 295/369
if ls "$DIR/6892550_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 295: 6892550 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/6892550_Single-Leg_Landmine_RDL.mp4" "https://www.youtube.com/watch?v=F81BrVhUCNk" --quiet --no-warnings 2>/dev/null && echo "OK 295/369: 6892550_Single-Leg_Landmine_RDL" || { echo "FAIL 295: 6892550_Single-Leg_Landmine_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 296/369
if ls "$DIR/15470927_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 296: 15470927 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/15470927_Sissy_Squat.mp4" "https://www.youtube.com/watch?v=Cu2THH1IQDA" --quiet --no-warnings 2>/dev/null && echo "OK 296/369: 15470927_Sissy_Squat" || { echo "FAIL 296: 15470927_Sissy_Squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 297/369
if ls "$DIR/16777111_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 297: 16777111 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16777111_Sissy_Squat_Correct_Form_Gareth_Sapstead.mp4" "https://www.youtube.com/watch?v=DOxGMy258rM" --quiet --no-warnings 2>/dev/null && echo "OK 297/369: 16777111_Sissy_Squat_Correct_Form_Gareth_Sapstead" || { echo "FAIL 297: 16777111_Sissy_Squat_Correct_Form_Gareth_Sapstead"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 298/369
if ls "$DIR/2297875_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 298: 2297875 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297875_SL_DB_adduction_slide.mp4" "https://www.youtube.com/watch?v=P2H_mr64NC0" --quiet --no-warnings 2>/dev/null && echo "OK 298/369: 2297875_SL_DB_adduction_slide" || { echo "FAIL 298: 2297875_SL_DB_adduction_slide"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 299/369
if ls "$DIR/5142189_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 299: 5142189 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142189_SL_DB_RDL.mp4" "https://www.youtube.com/watch?v=3jwRQCTIqJk" --quiet --no-warnings 2>/dev/null && echo "OK 299/369: 5142189_SL_DB_RDL" || { echo "FAIL 299: 5142189_SL_DB_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 300/369
if ls "$DIR/2297002_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 300: 2297002 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297002_SL_DB_split_squat.mp4" "https://www.youtube.com/watch?v=VoBd0VwLq8o" --quiet --no-warnings 2>/dev/null && echo "OK 300/369: 2297002_SL_DB_split_squat" || { echo "FAIL 300: 2297002_SL_DB_split_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 301/369
if ls "$DIR/5142193_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 301: 5142193 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142193_SL_glute_raise.mp4" "https://www.youtube.com/watch?v=U2WTtsRvPc8" --quiet --no-warnings 2>/dev/null && echo "OK 301/369: 5142193_SL_glute_raise" || { echo "FAIL 301: 5142193_SL_glute_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 302/369
if ls "$DIR/2297872_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 302: 2297872 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297872_SL_high_glute_raise.mp4" "https://www.youtube.com/watch?v=aXOpTSPLGAU" --quiet --no-warnings 2>/dev/null && echo "OK 302/369: 2297872_SL_high_glute_raise" || { echo "FAIL 302: 2297872_SL_high_glute_raise"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 303/369
if ls "$DIR/5246738_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 303: 5246738 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246738_SL_MB_hamstring_raises.mp4" "https://www.youtube.com/watch?v=IGDQuR-jfkE" --quiet --no-warnings 2>/dev/null && echo "OK 303/369: 5246738_SL_MB_hamstring_raises" || { echo "FAIL 303: 5246738_SL_MB_hamstring_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 304/369
if ls "$DIR/5077491_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 304: 5077491 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5077491_SL_RDL_row_Tricep_kickback.mp4" "https://www.youtube.com/watch?v=LGqRaarl89w" --quiet --no-warnings 2>/dev/null && echo "OK 304/369: 5077491_SL_RDL_row_Tricep_kickback" || { echo "FAIL 304: 5077491_SL_RDL_row_Tricep_kickback"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 305/369
if ls "$DIR/5245239_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 305: 5245239 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5245239_SL_RDL_INTO_PISTOL.mp4" "https://www.youtube.com/watch?v=KZgwXo5cl2k" --quiet --no-warnings 2>/dev/null && echo "OK 305/369: 5245239_SL_RDL_INTO_PISTOL" || { echo "FAIL 305: 5245239_SL_RDL_INTO_PISTOL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 306/369
if ls "$DIR/2297846_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 306: 2297846 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2297846_SL_SB_hamstring_roll.mp4" "https://www.youtube.com/watch?v=X7VP73azfZQ" --quiet --no-warnings 2>/dev/null && echo "OK 306/369: 2297846_SL_SB_hamstring_roll" || { echo "FAIL 306: 2297846_SL_SB_hamstring_roll"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 307/369
if ls "$DIR/5249233_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 307: 5249233 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5249233_SL_slow_step_up.mp4" "https://www.youtube.com/watch?v=sO19c0fR0vk" --quiet --no-warnings 2>/dev/null && echo "OK 307/369: 5249233_SL_slow_step_up" || { echo "FAIL 307: 5249233_SL_slow_step_up"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 308/369
if ls "$DIR/7006808_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 308: 7006808 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006808_Slider_Jack_Knife.mp4" "https://www.youtube.com/watch?v=1OmwKXqq5bE" --quiet --no-warnings 2>/dev/null && echo "OK 308/369: 7006808_Slider_Jack_Knife" || { echo "FAIL 308: 7006808_Slider_Jack_Knife"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 309/369
if ls "$DIR/7707121_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 309: 7707121 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7707121_Small_Quads_Try_This_SQUAT_TIPS.mp4" "https://www.youtube.com/watch?v=HB8QewGsIX4" --quiet --no-warnings 2>/dev/null && echo "OK 309/369: 7707121_Small_Quads_Try_This_SQUAT_TIPS" || { echo "FAIL 309: 7707121_Small_Quads_Try_This_SQUAT_TIPS"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 310/369
if ls "$DIR/12863185_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 310: 12863185 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/12863185_Smith_Machine_Hip_Thrust_B_Stance.mp4" "https://www.youtube.com/watch?v=hCR90qyhBeI" --quiet --no-warnings 2>/dev/null && echo "OK 310/369: 12863185_Smith_Machine_Hip_Thrust_B_Stance" || { echo "FAIL 310: 12863185_Smith_Machine_Hip_Thrust_B_Stance"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 311/369
if ls "$DIR/16777249_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 311: 16777249 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16777249_Smith_Machine_Incline_Press.mp4" "https://www.youtube.com/watch?v=8urE8Z8AMQ4" --quiet --no-warnings 2>/dev/null && echo "OK 311/369: 16777249_Smith_Machine_Incline_Press" || { echo "FAIL 311: 16777249_Smith_Machine_Incline_Press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 312/369
if ls "$DIR/13974823_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 312: 13974823 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/13974823_Smith_Machine_Sissy_Squat.mp4" "https://www.youtube.com/watch?v=I_JSZnHv5Pg" --quiet --no-warnings 2>/dev/null && echo "OK 312/369: 13974823_Smith_Machine_Sissy_Squat" || { echo "FAIL 312: 13974823_Smith_Machine_Sissy_Squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 313/369
if ls "$DIR/16017083_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 313: 16017083 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16017083_Smith_machine_squats_HACK_squat_squatsworkout_smithmachine_gymshark.mp4" "https://www.youtube.com/watch?v=JVDezxMWr9c" --quiet --no-warnings 2>/dev/null && echo "OK 313/369: 16017083_Smith_machine_squats_HACK_squat_squatswor" || { echo "FAIL 313: 16017083_Smith_machine_squats_HACK_squat_squatswor"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 314/369
if ls "$DIR/15905140_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 314: 15905140 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/15905140_SMITH_MACHINE_step_up_fitness_workout_howto_glutes_growth.mp4" "https://www.youtube.com/watch?v=3ru5VG7sM6E" --quiet --no-warnings 2>/dev/null && echo "OK 314/369: 15905140_SMITH_MACHINE_step_up_fitness_workout_how" || { echo "FAIL 314: 15905140_SMITH_MACHINE_step_up_fitness_workout_how"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 315/369
if ls "$DIR/7392781_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 315: 7392781 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7392781_Smith_Tricep_OH_Extension.mp4" "https://www.youtube.com/watch?v=Byk1bIRiRvk" --quiet --no-warnings 2>/dev/null && echo "OK 315/369: 7392781_Smith_Tricep_OH_Extension" || { echo "FAIL 315: 7392781_Smith_Tricep_OH_Extension"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 316/369
if ls "$DIR/5103946_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 316: 5103946 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5103946_Squat_cable_hammer_curl.mp4" "https://www.youtube.com/watch?v=ohO_7Rr1aM4" --quiet --no-warnings 2>/dev/null && echo "OK 316/369: 5103946_Squat_cable_hammer_curl" || { echo "FAIL 316: 5103946_Squat_cable_hammer_curl"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 317/369
if ls "$DIR/5157362_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 317: 5157362 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5157362_Squat_combo.mp4" "https://www.youtube.com/watch?v=TJ8k5-kfv1g" --quiet --no-warnings 2>/dev/null && echo "OK 317/369: 5157362_Squat_combo" || { echo "FAIL 317: 5157362_Squat_combo"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 318/369
if ls "$DIR/5077697_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 318: 5077697 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5077697_Squat_pulses_into_SL_RDL.mp4" "https://www.youtube.com/watch?v=IzEdVkNXGbQ" --quiet --no-warnings 2>/dev/null && echo "OK 318/369: 5077697_Squat_pulses_into_SL_RDL" || { echo "FAIL 318: 5077697_Squat_pulses_into_SL_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 319/369
if ls "$DIR/5142182_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 319: 5142182 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142182_Squat_wide_narrow_pulse.mp4" "https://www.youtube.com/watch?v=TJ8k5-kfv1g" --quiet --no-warnings 2>/dev/null && echo "OK 319/369: 5142182_Squat_wide_narrow_pulse" || { echo "FAIL 319: 5142182_Squat_wide_narrow_pulse"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 320/369
if ls "$DIR/5308602_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 320: 5308602 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308602_Squat_with_cable_low_to_high_chop.mp4" "https://www.youtube.com/watch?v=fxqSXCtmJyE" --quiet --no-warnings 2>/dev/null && echo "OK 320/369: 5308602_Squat_with_cable_low_to_high_chop" || { echo "FAIL 320: 5308602_Squat_with_cable_low_to_high_chop"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 321/369
if ls "$DIR/5243694_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 321: 5243694 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5243694_Squat_sumo_with_plate_under_toes_into.mp4" "https://www.youtube.com/watch?v=WKpYRjaZ-bU" --quiet --no-warnings 2>/dev/null && echo "OK 321/369: 5243694_Squat_sumo_with_plate_under_toes_into" || { echo "FAIL 321: 5243694_Squat_sumo_with_plate_under_toes_into"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 322/369
if ls "$DIR/9498313_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 322: 9498313 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/9498313_Standing_Banded_Scapular_Retraction_Strength_Rebels.mp4" "https://www.youtube.com/watch?v=SAMbfCzeN3s" --quiet --no-warnings 2>/dev/null && echo "OK 322/369: 9498313_Standing_Banded_Scapular_Retraction_Streng" || { echo "FAIL 322: 9498313_Standing_Banded_Scapular_Retraction_Streng"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 323/369
if ls "$DIR/7147476_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 323: 7147476 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7147476_Standing_Straight_Bar_Cable_Curl_-_The_Proper_Lift_-_BPI_Sports.mp4" "https://www.youtube.com/watch?v=840rgLSw-84" --quiet --no-warnings 2>/dev/null && echo "OK 323/369: 7147476_Standing_Straight_Bar_Cable_Curl_-_The_Pro" || { echo "FAIL 323: 7147476_Standing_Straight_Bar_Cable_Curl_-_The_Pro"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 324/369
if ls "$DIR/12863226_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 324: 12863226 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/12863226_Station_2_-_F45Playoffs_-_Bench_Hops.mp4" "https://www.youtube.com/watch?v=9ODXwMo2Dzc" --quiet --no-warnings 2>/dev/null && echo "OK 324/369: 12863226_Station_2_-_F45Playoffs_-_Bench_Hops" || { echo "FAIL 324: 12863226_Station_2_-_F45Playoffs_-_Bench_Hops"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 325/369
if ls "$DIR/5246847_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 325: 5246847 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246847_Straight_arm_pull_down_with_shoulder_retraction.mp4" "https://www.youtube.com/watch?v=2UubMuWdnac" --quiet --no-warnings 2>/dev/null && echo "OK 325/369: 5246847_Straight_arm_pull_down_with_shoulder_retra" || { echo "FAIL 325: 5246847_Straight_arm_pull_down_with_shoulder_retra"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 326/369
if ls "$DIR/5150246_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 326: 5150246 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5150246_Straight_arm_pull_downs.mp4" "https://www.youtube.com/watch?v=KY8SISDCztc" --quiet --no-warnings 2>/dev/null && echo "OK 326/369: 5150246_Straight_arm_pull_downs" || { echo "FAIL 326: 5150246_Straight_arm_pull_downs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 327/369
if ls "$DIR/5246603_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 327: 5246603 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246603_Straight_bar_hip_thrusts.mp4" "https://www.youtube.com/watch?v=u97Z3f6xiHQ" --quiet --no-warnings 2>/dev/null && echo "OK 327/369: 5246603_Straight_bar_hip_thrusts" || { echo "FAIL 327: 5246603_Straight_bar_hip_thrusts"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 328/369
if ls "$DIR/5308573_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 328: 5308573 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308573_Strict_DB_PRESS.mp4" "https://www.youtube.com/watch?v=dPdY9T0fWMs" --quiet --no-warnings 2>/dev/null && echo "OK 328/369: 5308573_Strict_DB_PRESS" || { echo "FAIL 328: 5308573_Strict_DB_PRESS"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 329/369
if ls "$DIR/5142195_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 329: 5142195 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142195_Sumo_pulses.mp4" "https://www.youtube.com/watch?v=dJr7TWXc_J0" --quiet --no-warnings 2>/dev/null && echo "OK 329/369: 5142195_Sumo_pulses" || { echo "FAIL 329: 5142195_Sumo_pulses"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 330/369
if ls "$DIR/7602938_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 330: 7602938 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7602938_Sumo_Squat_To_Around_The_World.mp4" "https://www.youtube.com/watch?v=tZvYmlz3OLI" --quiet --no-warnings 2>/dev/null && echo "OK 330/369: 7602938_Sumo_Squat_To_Around_The_World" || { echo "FAIL 330: 7602938_Sumo_Squat_To_Around_The_World"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 331/369
if ls "$DIR/5141810_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 331: 5141810 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5141810_Supinated_cable_tricep_pull.mp4" "https://www.youtube.com/watch?v=6_RFbLOdEbo" --quiet --no-warnings 2>/dev/null && echo "OK 331/369: 5141810_Supinated_cable_tricep_pull" || { echo "FAIL 331: 5141810_Supinated_cable_tricep_pull"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 332/369
if ls "$DIR/5142126_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 332: 5142126 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142126_Supinated_DB_chest_fly.mp4" "https://www.youtube.com/watch?v=iUCNaWXw0Po" --quiet --no-warnings 2>/dev/null && echo "OK 332/369: 5142126_Supinated_DB_chest_fly" || { echo "FAIL 332: 5142126_Supinated_DB_chest_fly"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 333/369
if ls "$DIR/5043470_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 333: 5043470 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5043470_Suspended_reverse_fly.mp4" "https://www.youtube.com/watch?v=WuDlkm_ERCM" --quiet --no-warnings 2>/dev/null && echo "OK 333/369: 5043470_Suspended_reverse_fly" || { echo "FAIL 333: 5043470_Suspended_reverse_fly"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 334/369
if ls "$DIR/5308608_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 334: 5308608 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5308608_T_bar_row_2.mp4" "https://www.youtube.com/watch?v=eE7xxIvjxQw" --quiet --no-warnings 2>/dev/null && echo "OK 334/369: 5308608_T_bar_row_2" || { echo "FAIL 334: 5308608_T_bar_row_2"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 335/369
if ls "$DIR/5246766_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 335: 5246766 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246766_T_raises_shoulder.mp4" "https://www.youtube.com/watch?v=DS5f-nzxSPw" --quiet --no-warnings 2>/dev/null && echo "OK 335/369: 5246766_T_raises_shoulder" || { echo "FAIL 335: 5246766_T_raises_shoulder"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 336/369
if ls "$DIR/2302012_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 336: 2302012 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2302012_table_banded_step_outs.mp4" "https://www.youtube.com/watch?v=MkQZuMEn3Zw" --quiet --no-warnings 2>/dev/null && echo "OK 336/369: 2302012_table_banded_step_outs" || { echo "FAIL 336: 2302012_table_banded_step_outs"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 337/369
if ls "$DIR/16485694_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 337: 16485694 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16485694_The_PERFECT_Barbell_Row_5_Steps.mp4" "https://www.youtube.com/watch?v=Nqh7q3zDCoQ" --quiet --no-warnings 2>/dev/null && echo "OK 337/369: 16485694_The_PERFECT_Barbell_Row_5_Steps" || { echo "FAIL 337: 16485694_The_PERFECT_Barbell_Row_5_Steps"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 338/369
if ls "$DIR/13417257_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 338: 13417257 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/13417257_The_Right_Way_to_Smith_Squat_for_MAXIMUM_Quad_Growth.mp4" "https://www.youtube.com/watch?v=1P4f7cNv4Aw" --quiet --no-warnings 2>/dev/null && echo "OK 338/369: 13417257_The_Right_Way_to_Smith_Squat_for_MAXIMUM_" || { echo "FAIL 338: 13417257_The_Right_Way_to_Smith_Squat_for_MAXIMUM_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 339/369
if ls "$DIR/7006828_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 339: 7006828 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006828_Torso_Rotation_Machine.mp4" "https://www.youtube.com/watch?v=xCzO5xScA2U" --quiet --no-warnings 2>/dev/null && echo "OK 339/369: 7006828_Torso_Rotation_Machine" || { echo "FAIL 339: 7006828_Torso_Rotation_Machine"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 340/369
if ls "$DIR/14201546_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 340: 14201546 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14201546_Towel_Stretch_for_Internal_Rotation.mp4" "https://www.youtube.com/watch?v=omeww85Mhkw" --quiet --no-warnings 2>/dev/null && echo "OK 340/369: 14201546_Towel_Stretch_for_Internal_Rotation" || { echo "FAIL 340: 14201546_Towel_Stretch_for_Internal_Rotation"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 341/369
if ls "$DIR/16304900_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 341: 16304900 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16304900_Trap_Bar_quotSquatquot.mp4" "https://www.youtube.com/watch?v=M-3wmzwsUxc" --quiet --no-warnings 2>/dev/null && echo "OK 341/369: 16304900_Trap_Bar_quotSquatquot" || { echo "FAIL 341: 16304900_Trap_Bar_quotSquatquot"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 342/369
if ls "$DIR/2296986_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 342: 2296986 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2296986_Treadmill_narrow_squat_walk.mp4" "https://www.youtube.com/watch?v=6lRpe5YsLz8" --quiet --no-warnings 2>/dev/null && echo "OK 342/369: 2296986_Treadmill_narrow_squat_walk" || { echo "FAIL 342: 2296986_Treadmill_narrow_squat_walk"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 343/369
if ls "$DIR/2296988_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 343: 2296988 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2296988_Treadmill_wide_squat_walk.mp4" "https://www.youtube.com/watch?v=QBm7ZKQ58Pc" --quiet --no-warnings 2>/dev/null && echo "OK 343/369: 2296988_Treadmill_wide_squat_walk" || { echo "FAIL 343: 2296988_Treadmill_wide_squat_walk"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 344/369
if ls "$DIR/5246806_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 344: 5246806 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246806_Tricep_cable_pull_grip_change.mp4" "https://www.youtube.com/watch?v=bbrmxFpsBD8" --quiet --no-warnings 2>/dev/null && echo "OK 344/369: 5246806_Tricep_cable_pull_grip_change" || { echo "FAIL 344: 5246806_Tricep_cable_pull_grip_change"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 345/369
if ls "$DIR/5037354_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 345: 5037354 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5037354_Tricep_plank_dips.mp4" "https://www.youtube.com/watch?v=4OM_O-x7Blo" --quiet --no-warnings 2>/dev/null && echo "OK 345/369: 5037354_Tricep_plank_dips" || { echo "FAIL 345: 5037354_Tricep_plank_dips"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 346/369
if ls "$DIR/5246800_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 346: 5246800 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246800_V_bar_lat_pull_down.mp4" "https://www.youtube.com/watch?v=wtoLE-mreAA" --quiet --no-warnings 2>/dev/null && echo "OK 346/369: 5246800_V_bar_lat_pull_down" || { echo "FAIL 346: 5246800_V_bar_lat_pull_down"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 347/369
if ls "$DIR/5246804_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 347: 5246804 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246804_V_bar_tricep_ext.mp4" "https://www.youtube.com/watch?v=nsW7EQc6jpY" --quiet --no-warnings 2>/dev/null && echo "OK 347/369: 5246804_V_bar_tricep_ext" || { echo "FAIL 347: 5246804_V_bar_tricep_ext"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 348/369
if ls "$DIR/2278814_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 348: 2278814 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278814_V_sits.mp4" "https://www.youtube.com/watch?v=xoVKIb5qmwY" --quiet --no-warnings 2>/dev/null && echo "OK 348/369: 2278814_V_sits" || { echo "FAIL 348: 2278814_V_sits"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 349/369
if ls "$DIR/7006582_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 349: 7006582 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7006582_Vibration_Plate_Exercises_Static_Squat.mp4" "https://www.youtube.com/watch?v=aGqGQwVMqbg" --quiet --no-warnings 2>/dev/null && echo "OK 349/369: 7006582_Vibration_Plate_Exercises_Static_Squat" || { echo "FAIL 349: 7006582_Vibration_Plate_Exercises_Static_Squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 350/369
if ls "$DIR/15863184_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 350: 15863184 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/15863184_V-Squat_Step_Ups_to_Target_the_Glutes_shorts_fitness_legday_legworkout_gluteswor.mp4" "https://www.youtube.com/watch?v=iZdYR0DLwiY" --quiet --no-warnings 2>/dev/null && echo "OK 350/369: 15863184_V-Squat_Step_Ups_to_Target_the_Glutes_sho" || { echo "FAIL 350: 15863184_V-Squat_Step_Ups_to_Target_the_Glutes_sho"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 351/369
if ls "$DIR/5246775_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 351: 5246775 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246775_W_raises_shoulder.mp4" "https://www.youtube.com/watch?v=tz1Wr0F_VUM" --quiet --no-warnings 2>/dev/null && echo "OK 351/369: 5246775_W_raises_shoulder" || { echo "FAIL 351: 5246775_W_raises_shoulder"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 352/369
if ls "$DIR/2278800_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 352: 2278800 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278800_Wall_leg_extension.mp4" "https://www.youtube.com/watch?v=w5DFo0aLhxk" --quiet --no-warnings 2>/dev/null && echo "OK 352/369: 2278800_Wall_leg_extension" || { echo "FAIL 352: 2278800_Wall_leg_extension"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 353/369
if ls "$DIR/15753577_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 353: 15753577 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/15753577_Wall_Plank.mp4" "https://www.youtube.com/watch?v=T-bfBQXfL-I" --quiet --no-warnings 2>/dev/null && echo "OK 353/369: 15753577_Wall_Plank" || { echo "FAIL 353: 15753577_Wall_Plank"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 354/369
if ls "$DIR/14788005_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 354: 14788005 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/14788005_Wall_shoulder_clock_with_band.mp4" "https://www.youtube.com/watch?v=_ivcGm2Nkgc" --quiet --no-warnings 2>/dev/null && echo "OK 354/369: 14788005_Wall_shoulder_clock_with_band" || { echo "FAIL 354: 14788005_Wall_shoulder_clock_with_band"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 355/369
if ls "$DIR/2278813_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 355: 2278813 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/2278813_Wall_single_arm_Tricep_ext.mp4" "https://www.youtube.com/watch?v=f4IHSaxHL1w" --quiet --no-warnings 2>/dev/null && echo "OK 355/369: 2278813_Wall_single_arm_Tricep_ext" || { echo "FAIL 355: 2278813_Wall_single_arm_Tricep_ext"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 356/369
if ls "$DIR/5077487_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 356: 5077487 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5077487_Wall_sitbicep_curl_shld_press.mp4" "https://www.youtube.com/watch?v=dsR6-ybV5Rw" --quiet --no-warnings 2>/dev/null && echo "OK 356/369: 5077487_Wall_sitbicep_curl_shld_press" || { echo "FAIL 356: 5077487_Wall_sitbicep_curl_shld_press"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 357/369
if ls "$DIR/7285410_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 357: 7285410 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7285410_Wall_SquatsSits_with_360lbs_Perfect_Technique_with_Personal_Trainer.mp4" "https://www.youtube.com/watch?v=Sm1VEn-U9Ow" --quiet --no-warnings 2>/dev/null && echo "OK 357/369: 7285410_Wall_SquatsSits_with_360lbs_Perfect_Techni" || { echo "FAIL 357: 7285410_Wall_SquatsSits_with_360lbs_Perfect_Techni"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 358/369
if ls "$DIR/16600191_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 358: 16600191 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16600191_Wall_Supported_Single_Leg_RDL.mp4" "https://www.youtube.com/watch?v=iyF32PWb03g" --quiet --no-warnings 2>/dev/null && echo "OK 358/369: 16600191_Wall_Supported_Single_Leg_RDL" || { echo "FAIL 358: 16600191_Wall_Supported_Single_Leg_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 359/369
if ls "$DIR/8725453_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 359: 8725453 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8725453_Wide_Bicep_Curls.mp4" "https://www.youtube.com/watch?v=Q-TEBTJZt8s" --quiet --no-warnings 2>/dev/null && echo "OK 359/369: 8725453_Wide_Bicep_Curls" || { echo "FAIL 359: 8725453_Wide_Bicep_Curls"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 360/369
if ls "$DIR/8725451_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 360: 8725451 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/8725451_Wide_Biceps_Curl_Dumbbell.mp4" "https://www.youtube.com/watch?v=SPI7Uk54Da0" --quiet --no-warnings 2>/dev/null && echo "OK 360/369: 8725451_Wide_Biceps_Curl_Dumbbell" || { echo "FAIL 360: 8725451_Wide_Biceps_Curl_Dumbbell"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 361/369
if ls "$DIR/5077691_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 361: 5077691 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5077691_Wide_DL_with_sumo_squat.mp4" "https://www.youtube.com/watch?v=fOmLsSFWtCo" --quiet --no-warnings 2>/dev/null && echo "OK 361/369: 5077691_Wide_DL_with_sumo_squat" || { echo "FAIL 361: 5077691_Wide_DL_with_sumo_squat"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 362/369
if ls "$DIR/5142158_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 362: 5142158 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5142158_Wide_grip_cable_row.mp4" "https://www.youtube.com/watch?v=5zqeUOQK4Z0" --quiet --no-warnings 2>/dev/null && echo "OK 362/369: 5142158_Wide_grip_cable_row" || { echo "FAIL 362: 5142158_Wide_grip_cable_row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 363/369
if ls "$DIR/7285258_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 363: 7285258 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/7285258_Wide_Grip_DB_Bent_Over_Row.mp4" "https://www.youtube.com/watch?v=AHvMryUuPAw" --quiet --no-warnings 2>/dev/null && echo "OK 363/369: 7285258_Wide_Grip_DB_Bent_Over_Row" || { echo "FAIL 363: 7285258_Wide_Grip_DB_Bent_Over_Row"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 364/369
if ls "$DIR/5246624_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 364: 5246624 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246624_Wide_stance_glute_thrust.mp4" "https://www.youtube.com/watch?v=AJN77EIbaDY" --quiet --no-warnings 2>/dev/null && echo "OK 364/369: 5246624_Wide_stance_glute_thrust" || { echo "FAIL 364: 5246624_Wide_stance_glute_thrust"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 365/369
if ls "$DIR/5246907_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 365: 5246907 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246907_Wide_step_stair_master.mp4" "https://www.youtube.com/watch?v=6abxJY8lvZc" --quiet --no-warnings 2>/dev/null && echo "OK 365/369: 5246907_Wide_step_stair_master" || { echo "FAIL 365: 5246907_Wide_step_stair_master"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 366/369
if ls "$DIR/5269950_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 366: 5269950 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5269950_Wide_to_narrow_cable_RDL.mp4" "https://www.youtube.com/watch?v=Ion8dCsvtlQ" --quiet --no-warnings 2>/dev/null && echo "OK 366/369: 5269950_Wide_to_narrow_cable_RDL" || { echo "FAIL 366: 5269950_Wide_to_narrow_cable_RDL"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 367/369
if ls "$DIR/5246690_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 367: 5246690 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246690_Windshield_wipers_on_bench.mp4" "https://www.youtube.com/watch?v=CBfemuZLZaw" --quiet --no-warnings 2>/dev/null && echo "OK 367/369: 5246690_Windshield_wipers_on_bench" || { echo "FAIL 367: 5246690_Windshield_wipers_on_bench"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 368/369
if ls "$DIR/16202494_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 368: 16202494 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/16202494_Wrist_Hand_amp_Finger_Stretching_Routine_-_Active_Isolated_Stretching.mp4" "https://www.youtube.com/watch?v=uPO-zST-7EE" --quiet --no-warnings 2>/dev/null && echo "OK 368/369: 16202494_Wrist_Hand_amp_Finger_Stretching_Routine_" || { echo "FAIL 368: 16202494_Wrist_Hand_amp_Finger_Stretching_Routine_"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

# 369/369
if ls "$DIR/5246762_"*.mp4 1>/dev/null 2>&1; then
  echo "SKIP 369: 5246762 exists"; SKIP=$((SKIP+1))
else
  "$YTDLP" -f "best[ext=mp4]/best" --no-playlist -o "$DIR/5246762_Y_shoulder_raises.mp4" "https://www.youtube.com/watch?v=l9_3NqAYyO8" --quiet --no-warnings 2>/dev/null && echo "OK 369/369: 5246762_Y_shoulder_raises" || { echo "FAIL 369: 5246762_Y_shoulder_raises"; FAIL=$((FAIL+1)); }
fi
COUNT=$((COUNT+1))

echo "=== YouTube done: $COUNT total, $SKIP skipped, $FAIL failed ==="
