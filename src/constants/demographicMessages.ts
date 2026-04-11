/**
 * Demographic-specific motivational messages, reminders, and encouragements.
 * Matched to the 8 user segments from segments.ts.
 */

export interface DemographicMessages {
  motivations: string[];
  reminders: string[];
  aimeeGreetings: string[];
}

export const DEMOGRAPHIC_MESSAGES: Record<string, DemographicMessages> = {
  // ── MALE 18-29: "Send It" ─────────────────────────────────────────────────
  'male-18-29': {
    motivations: [
      "Gains don't sleep. Neither should your commitment. Let's go.",
      "You're building the body you'll have for the next decade. Make it count.",
      "Recovery is where growth happens. Get your 8 hours tonight.",
      "Every rep is a deposit in your future self. Stack those gains.",
      "Your discipline today is your confidence tomorrow. Keep grinding.",
    ],
    reminders: [
      "Time to hit the gym. Your muscles are literally waiting for you.",
      "Post-workout protein window — get 30-40g in the next hour.",
      "Hydrate up. Your muscles are 75% water. Don't be dry.",
    ],
    aimeeGreetings: [
      "What's up! Ready to crush it today?",
      "Let's get after it. What are we working on?",
      "Hey! Need help with your workout or nutrition plan?",
    ],
  },

  // ── FEMALE 18-29: "Main Character" ────────────────────────────────────────
  'female-18-29': {
    motivations: [
      "Your glow-up is science, not luck. Keep showing up for yourself.",
      "Strong is the new everything. You're building strength inside and out.",
      "Self-care isn't selfish — it's the foundation of everything else.",
      "Your body is your home. Treat it like the sanctuary it is.",
      "Consistency is your superpower. Small habits, big transformations.",
    ],
    reminders: [
      "Morning routine check — water, movement, and something nourishing.",
      "Take a moment to check in with yourself. How are you really feeling?",
      "Evening wind-down time. Put the phone away and prioritize sleep.",
    ],
    aimeeGreetings: [
      "Hey gorgeous! What are we focusing on today?",
      "Ready to level up? Let's plan something amazing.",
      "Hey! Want to build a meal plan or talk about your goals?",
    ],
  },

  // ── MALE 30-44: "Beast Mode" ──────────────────────────────────────────────
  'male-30-44': {
    motivations: [
      "You're in your prime. Optimize every aspect — training, nutrition, recovery.",
      "The men who win at 40 are the ones who invested at 30. You're investing.",
      "Testosterone peaks when you sleep well, train hard, and eat clean. Do all three.",
      "Performance isn't just gym metrics. Energy, focus, and drive matter too.",
      "You're building the foundation for the next 30 years. Make it bulletproof.",
    ],
    reminders: [
      "Bloodwork check — when's the last time you got your levels tested?",
      "Recovery day. Active rest improves your next session by 15-20%.",
      "Meal prep Sunday — set up your nutrition for a strong week ahead.",
    ],
    aimeeGreetings: [
      "Ready to optimize? Let's look at your data.",
      "What's the priority this week — training, nutrition, or recovery?",
      "Let's review your progress and plan the next phase.",
    ],
  },

  // ── FEMALE 30-44: "Balance Queen" ─────────────────────────────────────────
  'female-30-44': {
    motivations: [
      "You're balancing everything. Don't forget to balance yourself into the equation.",
      "Strength training isn't just about muscles — it's bone density and longevity.",
      "Your hormones are your allies when you support them. Sleep, nutrition, movement.",
      "You don't have to do it all today. But do something for YOU today.",
      "The woman who invests in her health now will thank herself at 60.",
    ],
    reminders: [
      "Have you tracked your cycle this week? Hormonal patterns affect everything.",
      "Protein check — are you getting 100g+ today? Most women under-eat protein.",
      "Stress check-in. Your cortisol affects everything from weight to sleep.",
    ],
    aimeeGreetings: [
      "Hey! Let's make sure you're taking care of YOU today.",
      "What's on your mind? I can help with workouts, meals, or just a check-in.",
      "Ready to plan the week? Let's set you up for success.",
    ],
  },

  // ── MALE 45-60: "Biohacker" ───────────────────────────────────────────────
  'male-45-60': {
    motivations: [
      "Age is just a data point. Optimize it like everything else.",
      "The science of longevity is on your side. Use it.",
      "Recovery becomes more important with experience. Honor the process.",
      "Your biomarkers tell the real story. Track, analyze, improve.",
      "The best investment at any age is your health. Compound interest applies here too.",
    ],
    reminders: [
      "Time for your morning protocol. Consistency is key at this stage.",
      "Joint mobility work — 10 minutes now prevents 10 weeks of pain later.",
      "Sleep quality check. Are you getting enough deep sleep cycles?",
    ],
    aimeeGreetings: [
      "Good to see you. Let's look at your metrics.",
      "What would you like to optimize today?",
      "Ready to review your health data and plan ahead?",
    ],
  },

  // ── FEMALE 45-60: "Vitality" ──────────────────────────────────────────────
  'female-45-60': {
    motivations: [
      "This is your renaissance. Health, wisdom, and the best is ahead.",
      "Bone density, muscle mass, hormonal balance — you can influence all of it.",
      "Every woman who prioritizes her health at 45 writes her own story at 65.",
      "Your body still responds beautifully to the right inputs. Give it what it needs.",
      "Strength isn't just physical. The clarity and confidence you're building matters.",
    ],
    reminders: [
      "Calcium and vitamin D check — are you supporting your bone health?",
      "Resistance training is essential now. Even 20 minutes makes a difference.",
      "Hormone health check — track your symptoms and patterns.",
    ],
    aimeeGreetings: [
      "Welcome! How are you feeling today?",
      "Let's focus on what matters most to you right now.",
      "I'm here to help with anything — nutrition, exercise, or health questions.",
    ],
  },

  // ── MALE 60+: "Legacy" ───────────────────────────────────────────────────
  'male-60+': {
    motivations: [
      "Movement is medicine. Every step counts, literally.",
      "You're not slowing down — you're getting strategic.",
      "The research is clear: active seniors live longer and better. You're doing it.",
      "Your experience is your edge. Apply it to your health like you do everything else.",
      "Health at this stage is about quality of life. Make every day count.",
    ],
    reminders: [
      "Daily walk completed? Even 20 minutes reduces all-cause mortality significantly.",
      "Protein is critical — aim for 1.2-1.6g per kg of body weight.",
      "Balance and flexibility work today. Falls prevention is longevity insurance.",
    ],
    aimeeGreetings: [
      "Good to see you! How's the body feeling today?",
      "Let's make sure you're on track with your health goals.",
      "What can I help you with today?",
    ],
  },

  // ── FEMALE 60+: "Wisdom" ──────────────────────────────────────────────────
  'female-60+': {
    motivations: [
      "Every day you move is a gift to your future self. Keep going.",
      "Strength training at any age builds independence and confidence.",
      "Your health journey is unique and beautiful. Honor where you are.",
      "The women who thrive at 70 are the ones who invested at 60. That's you.",
      "Community, movement, and nourishment — the three pillars of vibrant aging.",
    ],
    reminders: [
      "Have you moved today? A gentle walk or stretch session works wonders.",
      "Hydration reminder — older adults often don't feel thirst as strongly.",
      "Social connection is health. Reach out to someone you care about today.",
    ],
    aimeeGreetings: [
      "Hello! It's wonderful to see you. How can I help today?",
      "Let's check in on how you're doing. What's on your mind?",
      "I'm here whenever you need me. What would be most helpful right now?",
    ],
  },
};

/** Fallback messages for users without a demographic segment */
export const DEFAULT_MESSAGES: DemographicMessages = {
  motivations: [
    "You're showing up for yourself today. That's the hardest part.",
    "Progress isn't always visible. Trust the process.",
    "Small daily choices compound into massive results. Keep going.",
    "Your consistency is your superpower.",
    "The best investment you'll ever make is in your own health.",
  ],
  reminders: [
    "Time for your daily check-in. How are you feeling?",
    "Have you moved today? Even 10 minutes makes a difference.",
    "Hydration check — are you drinking enough water?",
  ],
  aimeeGreetings: [
    "Hey! What can I help you with today?",
    "Ready to make progress? Let's go.",
    "What's on your mind? I'm here to help.",
  ],
};

/** Get messages for a user's demographic segment */
export function getMessagesForSegment(segmentId: string | null): DemographicMessages {
  if (!segmentId) return DEFAULT_MESSAGES;
  return DEMOGRAPHIC_MESSAGES[segmentId] ?? DEFAULT_MESSAGES;
}

/** Get a random message of a specific type for a segment */
export function getRandomMessage(
  segmentId: string | null,
  type: 'motivations' | 'reminders' | 'aimeeGreetings'
): string {
  const messages = getMessagesForSegment(segmentId);
  const arr = messages[type];
  return arr[Math.floor(Math.random() * arr.length)];
}
