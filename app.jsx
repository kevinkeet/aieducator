// Watershed - AI-Powered Case-Based Medical Learning Platform
const { useState, useEffect, useRef, useCallback } = React;

// ============================================================================
// MASTERY LEVEL SYSTEM
// ============================================================================
const MASTERY_LEVELS = [
  { level: 0, name: 'Not Started', color: 'gray', icon: '○', threshold: 0 },
  { level: 1, name: 'Introduced', color: 'blue', icon: '◔', threshold: 1 },
  { level: 2, name: 'Familiar', color: 'indigo', icon: '◑', threshold: 3 },
  { level: 3, name: 'Proficient', color: 'purple', icon: '◕', threshold: 5 },
  { level: 4, name: 'Mastered', color: 'emerald', icon: '●', threshold: 8 }
];

const getMasteryLevel = (masteryData) => {
  if (!masteryData) return MASTERY_LEVELS[0];
  const points = typeof masteryData === 'number' ? masteryData : (masteryData.points || 0);
  for (let i = MASTERY_LEVELS.length - 1; i >= 0; i--) {
    if (points >= MASTERY_LEVELS[i].threshold) {
      return MASTERY_LEVELS[i];
    }
  }
  return MASTERY_LEVELS[0];
};

const getMasteryPoints = (masteryData) => {
  if (!masteryData) return 0;
  return typeof masteryData === 'number' ? masteryData : (masteryData.points || 0);
};

const getMasteryColorClass = (level) => {
  const colorMap = {
    gray: 'text-gray-400',
    blue: 'text-blue-400',
    indigo: 'text-indigo-400',
    purple: 'text-purple-400',
    emerald: 'text-emerald-400'
  };
  return colorMap[level.color] || 'text-gray-400';
};

const getMasteryBgClass = (level) => {
  const colorMap = {
    gray: 'bg-gray-500/20',
    blue: 'bg-blue-500/20',
    indigo: 'bg-indigo-500/20',
    purple: 'bg-purple-500/20',
    emerald: 'bg-emerald-500/20'
  };
  return colorMap[level.color] || 'bg-gray-500/20';
};

// ============================================================================
// XP & LEVELING SYSTEM
// ============================================================================
const XP_CONFIG = {
  // XP rewards for actions
  rewards: {
    completeHistory: 50,
    completePresentation: 50,
    completeQuiz: 30,
    quizCorrectAnswer: 10,
    readChapter: 20,
    listenPodcast: 15,
    saveArticle: 5,
    completeReasoning: 40,
    completeKnowledge: 40,
    dailyLogin: 25,
    streakBonus: 10, // per day of streak
    firstOfDay: 15,
  },
  // Level thresholds
  levels: [
    { level: 1, title: 'Medical Student', xp: 0, icon: '🩺' },
    { level: 2, title: 'Eager Learner', xp: 100, icon: '📚' },
    { level: 3, title: 'Clinical Apprentice', xp: 250, icon: '🔬' },
    { level: 4, title: 'Junior Clinician', xp: 500, icon: '⚕️' },
    { level: 5, title: 'Resident', xp: 1000, icon: '🏥' },
    { level: 6, title: 'Senior Resident', xp: 1750, icon: '📋' },
    { level: 7, title: 'Chief Resident', xp: 2750, icon: '🎯' },
    { level: 8, title: 'Fellow', xp: 4000, icon: '🔍' },
    { level: 9, title: 'Attending', xp: 5500, icon: '👨‍⚕️' },
    { level: 10, title: 'Master Clinician', xp: 7500, icon: '🏆' },
  ]
};

const getLevel = (xp) => {
  for (let i = XP_CONFIG.levels.length - 1; i >= 0; i--) {
    if (xp >= XP_CONFIG.levels[i].xp) {
      return XP_CONFIG.levels[i];
    }
  }
  return XP_CONFIG.levels[0];
};

const getNextLevel = (xp) => {
  const currentLevel = getLevel(xp);
  const nextIndex = XP_CONFIG.levels.findIndex(l => l.level === currentLevel.level) + 1;
  return nextIndex < XP_CONFIG.levels.length ? XP_CONFIG.levels[nextIndex] : null;
};

const getXPProgress = (xp) => {
  const current = getLevel(xp);
  const next = getNextLevel(xp);
  if (!next) return 100;
  const progressXP = xp - current.xp;
  const neededXP = next.xp - current.xp;
  return Math.round((progressXP / neededXP) * 100);
};

// ============================================================================
// ACHIEVEMENTS SYSTEM
// ============================================================================
const ACHIEVEMENTS = {
  // Learning milestones
  'first-case': { id: 'first-case', name: 'First Steps', description: 'Complete your first case', icon: '🎯', xp: 50 },
  'ten-cases': { id: 'ten-cases', name: 'Case Veteran', description: 'Complete 10 cases', icon: '📚', xp: 100 },
  'fifty-cases': { id: 'fifty-cases', name: 'Case Master', description: 'Complete 50 cases', icon: '🏆', xp: 250 },

  // History taking
  'first-history': { id: 'first-history', name: 'History Taker', description: 'Complete your first history taking', icon: '🩺', xp: 50 },
  'ten-histories': { id: 'ten-histories', name: 'Thorough Historian', description: 'Complete 10 history taking sessions', icon: '📝', xp: 100 },
  'excellent-history': { id: 'excellent-history', name: 'Expert Interviewer', description: 'Get "Excellent" on a history taking', icon: '⭐', xp: 75 },

  // Presentations
  'first-presentation': { id: 'first-presentation', name: 'First Presentation', description: 'Complete your first oral presentation', icon: '📣', xp: 50 },
  'ten-presentations': { id: 'ten-presentations', name: 'Confident Presenter', description: 'Complete 10 presentations', icon: '🎤', xp: 100 },
  'excellent-presentation': { id: 'excellent-presentation', name: 'Star Presenter', description: 'Get "Excellent" on a presentation', icon: '🌟', xp: 75 },

  // Quiz performance
  'quiz-perfect': { id: 'quiz-perfect', name: 'Perfect Score', description: 'Get 100% on a quiz', icon: '💯', xp: 50 },
  'quiz-streak-5': { id: 'quiz-streak-5', name: 'On Fire', description: 'Answer 5 questions correctly in a row', icon: '🔥', xp: 40 },
  'quiz-streak-10': { id: 'quiz-streak-10', name: 'Unstoppable', description: 'Answer 10 questions correctly in a row', icon: '⚡', xp: 75 },
  'hundred-correct': { id: 'hundred-correct', name: 'Century Club', description: 'Answer 100 questions correctly', icon: '💪', xp: 150 },

  // Streaks
  'streak-3': { id: 'streak-3', name: 'Getting Started', description: 'Maintain a 3-day study streak', icon: '📅', xp: 30 },
  'streak-7': { id: 'streak-7', name: 'Week Warrior', description: 'Maintain a 7-day study streak', icon: '🗓️', xp: 75 },
  'streak-30': { id: 'streak-30', name: 'Month Master', description: 'Maintain a 30-day study streak', icon: '📆', xp: 200 },

  // Topic mastery
  'first-mastery': { id: 'first-mastery', name: 'Topic Master', description: 'Master your first topic', icon: '✅', xp: 50 },
  'five-mastery': { id: 'five-mastery', name: 'Knowledge Seeker', description: 'Master 5 topics', icon: '🎓', xp: 100 },
  'specialty-complete': { id: 'specialty-complete', name: 'Specialist', description: 'Master all topics in a specialty', icon: '🏅', xp: 200 },

  // Physical exam
  'first-exam': { id: 'first-exam', name: 'Examiner', description: 'Complete your first physical exam practice', icon: '👁️', xp: 50 },
  'heart-sounds-master': { id: 'heart-sounds-master', name: 'Auscultation Pro', description: 'Master all heart sounds', icon: '❤️', xp: 100 },

  // Speed achievements
  'speed-learner': { id: 'speed-learner', name: 'Speed Learner', description: 'Complete 5 activities in one day', icon: '⚡', xp: 50 },

  // Exploration
  'explorer': { id: 'explorer', name: 'Explorer', description: 'Try all learning modes', icon: '🧭', xp: 75 },
};

// ============================================================================
// DAILY GOALS SYSTEM
// ============================================================================
const DAILY_GOALS = {
  default: [
    { id: 'xp', type: 'xp', target: 100, description: 'Earn 100 XP', icon: '⭐' },
    { id: 'quiz', type: 'quiz', target: 5, description: 'Answer 5 quiz questions', icon: '❓' },
    { id: 'activity', type: 'activity', target: 1, description: 'Complete 1 learning activity', icon: '📚' },
  ],
  easy: [
    { id: 'xp', type: 'xp', target: 50, description: 'Earn 50 XP', icon: '⭐' },
    { id: 'quiz', type: 'quiz', target: 3, description: 'Answer 3 quiz questions', icon: '❓' },
  ],
  hard: [
    { id: 'xp', type: 'xp', target: 200, description: 'Earn 200 XP', icon: '⭐' },
    { id: 'quiz', type: 'quiz', target: 10, description: 'Answer 10 quiz questions', icon: '❓' },
    { id: 'activity', type: 'activity', target: 3, description: 'Complete 3 learning activities', icon: '📚' },
    { id: 'history', type: 'history', target: 1, description: 'Complete 1 history taking', icon: '🩺' },
  ]
};

// ============================================================================
// SPACED REPETITION SYSTEM
// ============================================================================
const SPACED_REPETITION = {
  // Intervals in days based on performance
  intervals: {
    new: 1,           // New topic - review tomorrow
    learning: 3,      // Still learning - review in 3 days
    familiar: 7,      // Getting it - review in a week
    proficient: 14,   // Good - review in 2 weeks
    mastered: 30,     // Mastered - review in a month
  },

  // Calculate next review date based on mastery and last review
  getNextReview: (masteryLevel, lastReview, wasCorrect) => {
    const now = new Date();
    const last = lastReview ? new Date(lastReview) : now;
    const daysSinceReview = Math.floor((now - last) / (1000 * 60 * 60 * 24));

    let interval;
    if (masteryLevel >= 4) interval = SPACED_REPETITION.intervals.mastered;
    else if (masteryLevel >= 3) interval = SPACED_REPETITION.intervals.proficient;
    else if (masteryLevel >= 2) interval = SPACED_REPETITION.intervals.familiar;
    else if (masteryLevel >= 1) interval = SPACED_REPETITION.intervals.learning;
    else interval = SPACED_REPETITION.intervals.new;

    // Adjust based on performance
    if (!wasCorrect) interval = Math.max(1, Math.floor(interval / 2));

    const nextReview = new Date(now);
    nextReview.setDate(nextReview.getDate() + interval);
    return nextReview.toISOString();
  },

  // Check if topic is due for review
  isDueForReview: (topicData) => {
    if (!topicData?.nextReview) return true;
    const now = new Date();
    const dueDate = new Date(topicData.nextReview);
    return now >= dueDate;
  },

  // Get urgency level (0-3) based on how overdue
  getUrgency: (topicData) => {
    if (!topicData?.nextReview) return 3; // Never reviewed = high urgency
    const now = new Date();
    const dueDate = new Date(topicData.nextReview);
    const daysOverdue = Math.floor((now - dueDate) / (1000 * 60 * 60 * 24));

    if (daysOverdue < 0) return 0; // Not due yet
    if (daysOverdue < 3) return 1; // Slightly overdue
    if (daysOverdue < 7) return 2; // Moderately overdue
    return 3; // Very overdue
  }
};

// Get topics due for review, sorted by urgency
const getTopicsDueForReview = (mastery, topics) => {
  const dueTopics = [];

  Object.entries(topics || {}).forEach(([id, topic]) => {
    const topicMastery = mastery[id];
    if (topicMastery && SPACED_REPETITION.isDueForReview(topicMastery)) {
      dueTopics.push({
        id,
        topic,
        mastery: topicMastery,
        urgency: SPACED_REPETITION.getUrgency(topicMastery),
        lastReview: topicMastery.lastReview
      });
    }
  });

  // Sort by urgency (highest first), then by last review (oldest first)
  return dueTopics.sort((a, b) => {
    if (b.urgency !== a.urgency) return b.urgency - a.urgency;
    return new Date(a.lastReview || 0) - new Date(b.lastReview || 0);
  });
};

// ============================================================================
// AUDIO SYNTHESIS FOR PHYSICAL EXAM
// ============================================================================
const AudioSynthesizer = {
  audioContext: null,

  getContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return this.audioContext;
  },

  // Generate heart sounds
  playHeartSound(type, duration = 3) {
    const ctx = this.getContext();
    const now = ctx.currentTime;

    const playBeat = (time, s1Freq, s2Freq, hasS3, hasS4, hasMurmur, murmurType) => {
      // S1 sound (lub)
      const s1 = ctx.createOscillator();
      const s1Gain = ctx.createGain();
      s1.type = 'sine';
      s1.frequency.setValueAtTime(s1Freq || 60, time);
      s1Gain.gain.setValueAtTime(0, time);
      s1Gain.gain.linearRampToValueAtTime(0.3, time + 0.02);
      s1Gain.gain.linearRampToValueAtTime(0, time + 0.12);
      s1.connect(s1Gain);
      s1Gain.connect(ctx.destination);
      s1.start(time);
      s1.stop(time + 0.15);

      // S2 sound (dub)
      const s2 = ctx.createOscillator();
      const s2Gain = ctx.createGain();
      s2.type = 'sine';
      s2.frequency.setValueAtTime(s2Freq || 80, time + 0.3);
      s2Gain.gain.setValueAtTime(0, time + 0.3);
      s2Gain.gain.linearRampToValueAtTime(0.25, time + 0.32);
      s2Gain.gain.linearRampToValueAtTime(0, time + 0.42);
      s2.connect(s2Gain);
      s2Gain.connect(ctx.destination);
      s2.start(time + 0.3);
      s2.stop(time + 0.45);

      // S3 gallop (Kentucky)
      if (hasS3) {
        const s3 = ctx.createOscillator();
        const s3Gain = ctx.createGain();
        s3.type = 'sine';
        s3.frequency.setValueAtTime(40, time + 0.5);
        s3Gain.gain.setValueAtTime(0, time + 0.5);
        s3Gain.gain.linearRampToValueAtTime(0.15, time + 0.52);
        s3Gain.gain.linearRampToValueAtTime(0, time + 0.62);
        s3.connect(s3Gain);
        s3Gain.connect(ctx.destination);
        s3.start(time + 0.5);
        s3.stop(time + 0.65);
      }

      // S4 gallop (Tennessee)
      if (hasS4) {
        const s4 = ctx.createOscillator();
        const s4Gain = ctx.createGain();
        s4.type = 'sine';
        s4.frequency.setValueAtTime(35, time - 0.1);
        s4Gain.gain.setValueAtTime(0, time - 0.1);
        s4Gain.gain.linearRampToValueAtTime(0.12, time - 0.08);
        s4Gain.gain.linearRampToValueAtTime(0, time);
        s4.connect(s4Gain);
        s4Gain.connect(ctx.destination);
        s4.start(time - 0.1);
        s4.stop(time + 0.02);
      }

      // Murmur
      if (hasMurmur) {
        const murmurDuration = murmurType === 'systolic' ? 0.25 : 0.35;
        const murmurStart = murmurType === 'systolic' ? time + 0.12 : time + 0.45;

        // Create noise for murmur
        const bufferSize = ctx.sampleRate * murmurDuration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * 0.3;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(murmurType === 'systolic' ? 200 : 150, murmurStart);
        filter.Q.setValueAtTime(5, murmurStart);

        const murmurGain = ctx.createGain();
        murmurGain.gain.setValueAtTime(0, murmurStart);
        murmurGain.gain.linearRampToValueAtTime(0.15, murmurStart + 0.05);
        murmurGain.gain.linearRampToValueAtTime(0.15, murmurStart + murmurDuration - 0.05);
        murmurGain.gain.linearRampToValueAtTime(0, murmurStart + murmurDuration);

        noise.connect(filter);
        filter.connect(murmurGain);
        murmurGain.connect(ctx.destination);
        noise.start(murmurStart);
      }
    };

    const beatInterval = 0.85; // ~70 bpm
    const numBeats = Math.floor(duration / beatInterval);

    for (let i = 0; i < numBeats; i++) {
      const beatTime = now + (i * beatInterval);
      switch (type) {
        case 'normal':
          playBeat(beatTime, 60, 80, false, false, false);
          break;
        case 's3':
          playBeat(beatTime, 60, 80, true, false, false);
          break;
        case 's4':
          playBeat(beatTime, 60, 80, false, true, false);
          break;
        case 'systolic-murmur':
          playBeat(beatTime, 60, 80, false, false, true, 'systolic');
          break;
        case 'diastolic-murmur':
          playBeat(beatTime, 60, 80, false, false, true, 'diastolic');
          break;
      }
    }

    return duration;
  },

  // Generate lung sounds
  playLungSound(type, duration = 4) {
    const ctx = this.getContext();
    const now = ctx.currentTime;

    const breathCycle = 2.5; // seconds per breath
    const numBreaths = Math.floor(duration / breathCycle);

    for (let i = 0; i < numBreaths; i++) {
      const cycleStart = now + (i * breathCycle);

      // Create base breath sound (filtered noise)
      const bufferSize = ctx.sampleRate * breathCycle;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let j = 0; j < bufferSize; j++) {
        data[j] = (Math.random() * 2 - 1);
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';

      const gainNode = ctx.createGain();

      switch (type) {
        case 'normal':
          filter.frequency.setValueAtTime(800, cycleStart);
          // Inspiration (longer, louder)
          gainNode.gain.setValueAtTime(0, cycleStart);
          gainNode.gain.linearRampToValueAtTime(0.08, cycleStart + 0.3);
          gainNode.gain.linearRampToValueAtTime(0.08, cycleStart + 1.2);
          gainNode.gain.linearRampToValueAtTime(0, cycleStart + 1.5);
          // Expiration (shorter, quieter)
          gainNode.gain.linearRampToValueAtTime(0.04, cycleStart + 1.7);
          gainNode.gain.linearRampToValueAtTime(0.04, cycleStart + 2.1);
          gainNode.gain.linearRampToValueAtTime(0, cycleStart + 2.4);
          break;

        case 'crackles':
          filter.frequency.setValueAtTime(2000, cycleStart);
          gainNode.gain.setValueAtTime(0, cycleStart);
          // Add crackling during inspiration
          for (let k = 0; k < 8; k++) {
            const crackleTime = cycleStart + 0.3 + (k * 0.12);
            gainNode.gain.setValueAtTime(0.15, crackleTime);
            gainNode.gain.setValueAtTime(0, crackleTime + 0.03);
          }
          break;

        case 'wheezes':
          // Wheeze is a tonal sound
          const wheeze = ctx.createOscillator();
          const wheezeGain = ctx.createGain();
          wheeze.type = 'sawtooth';
          wheeze.frequency.setValueAtTime(400, cycleStart + 1.5);
          wheeze.frequency.linearRampToValueAtTime(350, cycleStart + 2.3);
          wheezeGain.gain.setValueAtTime(0, cycleStart + 1.5);
          wheezeGain.gain.linearRampToValueAtTime(0.1, cycleStart + 1.7);
          wheezeGain.gain.linearRampToValueAtTime(0.1, cycleStart + 2.1);
          wheezeGain.gain.linearRampToValueAtTime(0, cycleStart + 2.3);
          wheeze.connect(wheezeGain);
          wheezeGain.connect(ctx.destination);
          wheeze.start(cycleStart + 1.5);
          wheeze.stop(cycleStart + 2.4);

          filter.frequency.setValueAtTime(600, cycleStart);
          gainNode.gain.setValueAtTime(0, cycleStart);
          gainNode.gain.linearRampToValueAtTime(0.05, cycleStart + 0.3);
          gainNode.gain.linearRampToValueAtTime(0, cycleStart + 1.4);
          break;

        case 'rhonchi':
          filter.frequency.setValueAtTime(300, cycleStart);
          filter.Q.setValueAtTime(10, cycleStart);
          gainNode.gain.setValueAtTime(0, cycleStart);
          gainNode.gain.linearRampToValueAtTime(0.12, cycleStart + 0.3);
          gainNode.gain.linearRampToValueAtTime(0.12, cycleStart + 2.0);
          gainNode.gain.linearRampToValueAtTime(0, cycleStart + 2.4);
          break;

        case 'stridor':
          const stridor = ctx.createOscillator();
          const stridorGain = ctx.createGain();
          stridor.type = 'sawtooth';
          stridor.frequency.setValueAtTime(500, cycleStart);
          stridorGain.gain.setValueAtTime(0, cycleStart);
          stridorGain.gain.linearRampToValueAtTime(0.15, cycleStart + 0.2);
          stridorGain.gain.linearRampToValueAtTime(0.15, cycleStart + 1.3);
          stridorGain.gain.linearRampToValueAtTime(0, cycleStart + 1.5);
          stridor.connect(stridorGain);
          stridorGain.connect(ctx.destination);
          stridor.start(cycleStart);
          stridor.stop(cycleStart + 1.6);
          continue; // Skip noise for stridor

        case 'decreased':
          filter.frequency.setValueAtTime(400, cycleStart);
          gainNode.gain.setValueAtTime(0, cycleStart);
          gainNode.gain.linearRampToValueAtTime(0.02, cycleStart + 0.5);
          gainNode.gain.linearRampToValueAtTime(0.02, cycleStart + 2.0);
          gainNode.gain.linearRampToValueAtTime(0, cycleStart + 2.4);
          break;
      }

      noise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      noise.start(cycleStart);
      noise.stop(cycleStart + breathCycle);
    }

    return duration;
  },

  // Generate bowel sounds
  playBowelSound(type, duration = 5) {
    const ctx = this.getContext();
    const now = ctx.currentTime;

    const playGurgle = (time, intensity) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(80 + Math.random() * 60, time);
      osc.frequency.linearRampToValueAtTime(40 + Math.random() * 40, time + 0.3);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, time);

      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(intensity, time + 0.05);
      gain.gain.linearRampToValueAtTime(intensity * 0.5, time + 0.2);
      gain.gain.linearRampToValueAtTime(0, time + 0.4);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + 0.5);
    };

    switch (type) {
      case 'normal':
        // Occasional gurgles every 5-15 seconds (compressed for demo)
        for (let i = 0; i < 4; i++) {
          playGurgle(now + i * 1.2 + Math.random() * 0.3, 0.15);
        }
        break;

      case 'hyperactive':
        // Frequent, loud gurgles
        for (let i = 0; i < 12; i++) {
          playGurgle(now + i * 0.4 + Math.random() * 0.1, 0.25);
        }
        break;

      case 'absent':
        // Just silence - play a very quiet ambient noise
        const silenceBuffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
        const silenceNoise = ctx.createBufferSource();
        silenceNoise.buffer = silenceBuffer;
        const silenceGain = ctx.createGain();
        silenceGain.gain.setValueAtTime(0.01, now);
        silenceNoise.connect(silenceGain);
        silenceGain.connect(ctx.destination);
        silenceNoise.start(now);
        silenceNoise.stop(now + duration);
        break;
    }

    return duration;
  },

  stop() {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
  }
};

// ============================================================================
// PHYSICAL EXAM DATA
// ============================================================================
const PHYSICAL_EXAM_MODULES = {
  cardiac: {
    id: 'cardiac',
    name: 'Cardiac Examination',
    icon: '❤️',
    description: 'Heart sounds, murmurs, and cardiovascular exam',
    findings: [
      {
        id: 'normal-s1s2',
        name: 'Normal S1/S2',
        description: 'Normal first and second heart sounds',
        audioDescription: 'Lub-dub pattern, regular rhythm',
        significance: 'Normal finding indicating proper valve closure',
        audioType: 'heart',
        audioParams: 'normal',
        quiz: { question: 'What causes the S1 heart sound?', options: ['Mitral and tricuspid valve closure', 'Aortic and pulmonic valve closure', 'Ventricular filling', 'Atrial contraction'], correct: 0 }
      },
      {
        id: 's3-gallop',
        name: 'S3 Gallop',
        description: 'Third heart sound (ventricular gallop)',
        audioDescription: 'Ken-tucky rhythm - low-pitched sound after S2',
        significance: 'Can indicate heart failure, volume overload, or be normal in young patients',
        audioType: 'heart',
        audioParams: 's3',
        quiz: { question: 'An S3 gallop in a 65-year-old with dyspnea most likely indicates:', options: ['Normal variant', 'Heart failure', 'Mitral stenosis', 'Aortic stenosis'], correct: 1 }
      },
      {
        id: 's4-gallop',
        name: 'S4 Gallop',
        description: 'Fourth heart sound (atrial gallop)',
        audioDescription: 'Ten-nes-see rhythm - low-pitched sound before S1',
        significance: 'Indicates decreased ventricular compliance (HTN, HCM, ischemia)',
        audioType: 'heart',
        audioParams: 's4',
        quiz: { question: 'An S4 is caused by:', options: ['Rapid ventricular filling', 'Atrial contraction against a stiff ventricle', 'Valve regurgitation', 'Pericardial rub'], correct: 1 }
      },
      {
        id: 'systolic-murmur',
        name: 'Systolic Murmur',
        description: 'Murmur occurring between S1 and S2',
        audioDescription: 'Harsh or blowing sound during systole',
        significance: 'Can indicate aortic stenosis, mitral regurgitation, or flow murmur',
        audioType: 'heart',
        audioParams: 'systolic-murmur',
        quiz: { question: 'A crescendo-decrescendo systolic murmur at the right upper sternal border suggests:', options: ['Mitral regurgitation', 'Aortic stenosis', 'Mitral stenosis', 'Aortic regurgitation'], correct: 1 }
      },
      {
        id: 'diastolic-murmur',
        name: 'Diastolic Murmur',
        description: 'Murmur occurring after S2',
        audioDescription: 'Blowing or rumbling sound during diastole',
        significance: 'Always pathologic - indicates aortic regurgitation or mitral stenosis',
        audioType: 'heart',
        audioParams: 'diastolic-murmur',
        quiz: { question: 'A diastolic murmur is:', options: ['Often benign', 'Always pathologic', 'Only heard in children', 'A normal variant'], correct: 1 }
      },
      {
        id: 'jvd',
        name: 'Jugular Venous Distension',
        description: 'Elevated jugular venous pressure',
        audioDescription: 'Visual finding - distended neck veins above clavicle at 45°',
        significance: 'Indicates elevated right heart pressures (heart failure, PE, tamponade)',
        audioType: null,
        quiz: { question: 'JVD measured at 10cm above the sternal angle indicates a CVP of approximately:', options: ['5 cmH2O', '10 cmH2O', '15 cmH2O', '20 cmH2O'], correct: 2 }
      }
    ]
  },
  pulmonary: {
    id: 'pulmonary',
    name: 'Pulmonary Examination',
    icon: '🫁',
    description: 'Breath sounds, adventitious sounds, and respiratory exam',
    findings: [
      {
        id: 'normal-breath',
        name: 'Normal Breath Sounds',
        description: 'Vesicular breath sounds',
        audioDescription: 'Soft, low-pitched, inspiratory > expiratory',
        significance: 'Normal finding over lung periphery',
        audioType: 'lung',
        audioParams: 'normal',
        quiz: { question: 'Normal vesicular breath sounds are characterized by:', options: ['Equal inspiration and expiration', 'Inspiration longer than expiration', 'Expiration longer than inspiration', 'High-pitched quality'], correct: 1 }
      },
      {
        id: 'crackles',
        name: 'Crackles (Rales)',
        description: 'Discontinuous adventitious sounds',
        audioDescription: 'Popping/crackling sounds, like hair rubbing together',
        significance: 'Fine crackles suggest pulmonary fibrosis or early CHF; coarse crackles suggest pneumonia or severe CHF',
        audioType: 'lung',
        audioParams: 'crackles',
        quiz: { question: 'Bilateral basilar crackles that clear with coughing suggest:', options: ['Pulmonary fibrosis', 'Atelectasis', 'Pneumonia', 'Pleural effusion'], correct: 1 }
      },
      {
        id: 'wheezes',
        name: 'Wheezes',
        description: 'Continuous high-pitched sounds',
        audioDescription: 'Musical, whistling sounds during expiration',
        significance: 'Indicates airway narrowing (asthma, COPD, bronchospasm)',
        audioType: 'lung',
        audioParams: 'wheezes',
        quiz: { question: 'Diffuse expiratory wheezing in a patient with dyspnea most likely indicates:', options: ['Pneumonia', 'Pleural effusion', 'Bronchospasm', 'Pulmonary embolism'], correct: 2 }
      },
      {
        id: 'rhonchi',
        name: 'Rhonchi',
        description: 'Low-pitched continuous sounds',
        audioDescription: 'Snoring or gurgling quality, may clear with cough',
        significance: 'Indicates secretions in large airways',
        audioType: 'lung',
        audioParams: 'rhonchi',
        quiz: { question: 'Rhonchi differ from wheezes in that they are:', options: ['Higher pitched', 'Lower pitched', 'Only inspiratory', 'Only heard in children'], correct: 1 }
      },
      {
        id: 'stridor',
        name: 'Stridor',
        description: 'High-pitched inspiratory sound',
        audioDescription: 'Harsh, crowing sound during inspiration',
        significance: 'EMERGENCY - indicates upper airway obstruction',
        audioType: 'lung',
        audioParams: 'stridor',
        quiz: { question: 'Stridor is most concerning for:', options: ['Lower airway disease', 'Upper airway obstruction', 'Pleural disease', 'Parenchymal disease'], correct: 1 }
      },
      {
        id: 'decreased-breath',
        name: 'Decreased Breath Sounds',
        description: 'Diminished or absent breath sounds',
        audioDescription: 'Quiet or absent sounds over affected area',
        significance: 'Suggests pleural effusion, pneumothorax, or consolidation',
        audioType: 'lung',
        audioParams: 'decreased',
        quiz: { question: 'Unilateral absence of breath sounds with tracheal deviation AWAY from the affected side suggests:', options: ['Pleural effusion', 'Pneumothorax', 'Pneumonia', 'Atelectasis'], correct: 1 }
      }
    ]
  },
  abdominal: {
    id: 'abdominal',
    name: 'Abdominal Examination',
    icon: '🩺',
    description: 'Inspection, auscultation, percussion, and palpation',
    findings: [
      {
        id: 'normal-bowel',
        name: 'Normal Bowel Sounds',
        description: 'Active bowel sounds',
        audioDescription: 'Gurgling sounds every 5-15 seconds',
        significance: 'Normal intestinal peristalsis',
        audioType: 'bowel',
        audioParams: 'normal',
        quiz: { question: 'How long should you listen before declaring bowel sounds absent?', options: ['30 seconds', '1 minute', '2-3 minutes', '5 minutes'], correct: 2 }
      },
      {
        id: 'hyperactive-bowel',
        name: 'Hyperactive Bowel Sounds',
        description: 'Increased, high-pitched bowel sounds',
        audioDescription: 'Frequent, loud, rushing sounds',
        significance: 'May indicate early obstruction, gastroenteritis, or GI bleed',
        audioType: 'bowel',
        audioParams: 'hyperactive',
        quiz: { question: 'High-pitched, hyperactive bowel sounds suggest:', options: ['Paralytic ileus', 'Mechanical obstruction', 'Peritonitis', 'Ascites'], correct: 1 }
      },
      {
        id: 'absent-bowel',
        name: 'Absent Bowel Sounds',
        description: 'No bowel sounds after adequate listening',
        audioDescription: 'Silence after 2-3 minutes of auscultation',
        significance: 'Suggests ileus or peritonitis',
        audioType: 'bowel',
        audioParams: 'absent',
        quiz: { question: 'Absent bowel sounds with abdominal rigidity suggests:', options: ['Constipation', 'Peritonitis', 'Gastroparesis', 'IBS'], correct: 1 }
      },
      {
        id: 'murphy-sign',
        name: "Murphy's Sign",
        description: 'Inspiratory arrest during RUQ palpation',
        audioDescription: 'Patient catches breath when you palpate below the right costal margin',
        significance: 'Positive in acute cholecystitis',
        quiz: { question: "A positive Murphy's sign is most specific for:", options: ['Appendicitis', 'Cholecystitis', 'Hepatitis', 'Pancreatitis'], correct: 1 }
      },
      {
        id: 'rebound-tenderness',
        name: 'Rebound Tenderness',
        description: 'Pain worse on release of pressure',
        audioDescription: 'Pain when you quickly release abdominal pressure',
        significance: 'Suggests peritoneal inflammation/peritonitis',
        quiz: { question: 'Rebound tenderness indicates:', options: ['Constipation', 'Peritoneal irritation', 'Gastritis', 'Hepatomegaly'], correct: 1 }
      },
      {
        id: 'ascites',
        name: 'Ascites',
        description: 'Fluid in the peritoneal cavity',
        audioDescription: 'Shifting dullness and fluid wave on exam',
        significance: 'Indicates liver disease, heart failure, or malignancy',
        quiz: { question: 'The most sensitive physical exam finding for ascites is:', options: ['Bulging flanks', 'Shifting dullness', 'Fluid wave', 'Umbilical eversion'], correct: 1 }
      }
    ]
  },
  neurological: {
    id: 'neurological',
    name: 'Neurological Examination',
    icon: '🧠',
    description: 'Mental status, cranial nerves, motor, sensory, reflexes',
    findings: [
      {
        id: 'pupil-response',
        name: 'Pupillary Response',
        description: 'Direct and consensual pupillary light reflex',
        audioDescription: 'Pupils constrict to light (direct) and in opposite eye (consensual)',
        significance: 'Tests CN II (afferent) and CN III (efferent)',
        quiz: { question: 'A fixed, dilated pupil with ptosis suggests a lesion of:', options: ['CN II', 'CN III', 'CN IV', 'CN VI'], correct: 1 }
      },
      {
        id: 'babinski',
        name: 'Babinski Sign',
        description: 'Plantar reflex response',
        audioDescription: 'Great toe dorsiflexes, other toes fan out',
        significance: 'Positive (upgoing toe) indicates upper motor neuron lesion in adults',
        quiz: { question: 'A positive Babinski sign in an adult indicates:', options: ['Lower motor neuron lesion', 'Upper motor neuron lesion', 'Peripheral neuropathy', 'Normal finding'], correct: 1 }
      },
      {
        id: 'hyperreflexia',
        name: 'Hyperreflexia',
        description: 'Exaggerated deep tendon reflexes',
        audioDescription: 'Brisk, exaggerated response to reflex hammer',
        significance: 'Suggests upper motor neuron lesion',
        quiz: { question: 'Hyperreflexia with clonus suggests:', options: ['Lower motor neuron disease', 'Upper motor neuron disease', 'Myopathy', 'Neuropathy'], correct: 1 }
      },
      {
        id: 'hyporeflexia',
        name: 'Hyporeflexia',
        description: 'Diminished deep tendon reflexes',
        audioDescription: 'Weak or absent response to reflex hammer',
        significance: 'Suggests lower motor neuron lesion or peripheral neuropathy',
        quiz: { question: 'Absent ankle reflexes with preserved knee reflexes suggests:', options: ['Spinal cord lesion', 'Peripheral neuropathy', 'Brain lesion', 'Normal variant'], correct: 1 }
      },
      {
        id: 'pronator-drift',
        name: 'Pronator Drift',
        description: 'Arm pronates and drifts downward',
        audioDescription: 'With arms extended and eyes closed, one arm drifts down and pronates',
        significance: 'Indicates subtle weakness - suggests corticospinal tract lesion',
        quiz: { question: 'Pronator drift is a sign of:', options: ['Cerebellar dysfunction', 'Upper motor neuron weakness', 'Lower motor neuron weakness', 'Sensory loss'], correct: 1 }
      },
      {
        id: 'romberg',
        name: 'Romberg Sign',
        description: 'Postural instability with eyes closed',
        audioDescription: 'Patient sways or falls when standing with feet together and eyes closed',
        significance: 'Positive test indicates proprioceptive or vestibular dysfunction',
        quiz: { question: 'A positive Romberg test indicates dysfunction of:', options: ['Cerebellum', 'Proprioception or vestibular system', 'Motor cortex', 'Visual system'], correct: 1 }
      }
    ]
  }
};

// ============================================================================
// CASE LIBRARY - Pre-built cases
// ============================================================================
const CASE_LIBRARY = {
  featured: [
    {
      id: 'case-of-day',
      title: 'Case of the Day',
      description: 'A new challenging case every day',
      icon: '📅',
      difficulty: 'Varies',
      getCaseForDate: (date) => {
        // Rotate through cases based on day of year
        const cases = Object.values(CASE_LIBRARY.cases);
        const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        return cases[dayOfYear % cases.length];
      }
    }
  ],
  cases: {
    'stemi': {
      id: 'stemi',
      title: 'STEMI',
      category: 'Cardiovascular',
      difficulty: 'Intermediate',
      icon: '❤️',
      description: '62yo M with crushing chest pain',
      caseText: `62 y/o male with PMH of HTN, HLD, T2DM, and 40 pack-year smoking history presents to the ED via EMS with crushing substernal chest pain for 45 minutes.

Pain is 10/10, radiating to left arm and jaw. Associated with diaphoresis and nausea. Patient took 3 sublingual nitroglycerin without relief.

PMH: Hypertension, Hyperlipidemia, Type 2 Diabetes, Former smoker (quit 2 years ago)
Medications: Lisinopril 20mg, Atorvastatin 40mg, Metformin 1000mg BID, Aspirin 81mg
Allergies: NKDA

On exam: BP 165/95, HR 95, RR 20, SpO2 96% on RA. Anxious, diaphoretic. JVP normal. Heart RRR, no murmurs. Lungs clear.

ECG: ST elevations in V1-V4, reciprocal depressions in inferior leads
Troponin: 0.85 ng/mL (normal <0.04)`,
      patientData: { age: '62', sex: 'M', chiefComplaint: 'Chest pain', problems: ['STEMI', 'HTN', 'DM', 'HLD'] },
      teachingPoints: ['Door-to-balloon time', 'STEMI equivalents', 'Antiplatelet therapy', 'Killip classification']
    },
    'copd-exacerbation': {
      id: 'copd-exacerbation',
      title: 'COPD Exacerbation',
      category: 'Pulmonary',
      difficulty: 'Intermediate',
      icon: '🫁',
      description: '68yo F with worsening dyspnea',
      caseText: `68 y/o female with severe COPD (FEV1 35% predicted) presents with 3 days of worsening shortness of breath and increased sputum production.

Sputum has changed from white to yellow-green. She reports fever at home. Using her rescue inhaler every 2 hours without relief. She is on home oxygen 2L but had to increase to 4L. Last exacerbation was 3 months ago requiring hospitalization.

PMH: COPD (GOLD Stage D), CHF (EF 50%), Osteoporosis
Medications: Tiotropium, Budesonide/Formoterol, Albuterol PRN, Home O2 2L, Prednisone taper (just finished)
SHx: 50 pack-year smoking history, quit 5 years ago

On exam: BP 145/85, HR 105, RR 28, SpO2 85% on 4L NC, Temp 101.2°F. Tripoding, using accessory muscles. Diffuse expiratory wheezes, decreased breath sounds at bases. No peripheral edema.

Labs: WBC 14.5, Procalcitonin 0.35
CXR: Hyperinflation, no infiltrate
ABG on 4L: pH 7.32, pCO2 55, pO2 58, HCO3 28`,
      patientData: { age: '68', sex: 'F', chiefComplaint: 'Shortness of breath', problems: ['COPD', 'CHF'] },
      teachingPoints: ['GOLD classification', 'ABG interpretation', 'BiPAP indications', 'Steroid dosing']
    },
    'dka': {
      id: 'dka',
      title: 'DKA',
      category: 'Endocrine',
      difficulty: 'Intermediate',
      icon: '💉',
      description: '28yo M with nausea and vomiting',
      caseText: `28 y/o male with Type 1 diabetes presents with 2 days of nausea, vomiting, and abdominal pain. He reports increased thirst and frequent urination over the past week.

He ran out of insulin 4 days ago and couldn't afford to refill. Has been feeling increasingly tired and weak. Roommate brought him in when he became confused this morning.

PMH: Type 1 Diabetes (diagnosed age 14), no known complications, prior DKA admission 2 years ago
Medications: Insulin glargine 25 units nightly, Insulin lispro per sliding scale (not taking)
SHx: College student, recently lost health insurance

On exam: BP 95/60, HR 118, RR 28 (Kussmaul), SpO2 99% on RA, Temp 98.6°F. Appears ill, dry mucous membranes, fruity breath odor. Diffuse abdominal tenderness without guarding. Skin tenting present. Oriented to person only.

Labs:
- Glucose 520, Na 128, K 5.9, Cl 98, HCO3 8, BUN 35, Cr 1.8
- pH 7.15, pCO2 18, Anion gap 26
- Beta-hydroxybutyrate 6.2
- Urinalysis: Large ketones, glucose`,
      patientData: { age: '28', sex: 'M', chiefComplaint: 'Nausea and vomiting', problems: ['DKA', 'T1DM'] },
      teachingPoints: ['DKA diagnostic criteria', 'Fluid resuscitation', 'Insulin drip protocol', 'Potassium management', 'Anion gap calculation']
    },
    'acute-pancreatitis': {
      id: 'acute-pancreatitis',
      title: 'Acute Pancreatitis',
      category: 'GI',
      difficulty: 'Intermediate',
      icon: '🩺',
      description: '45yo M with epigastric pain',
      caseText: `45 y/o male presents with severe epigastric pain for 12 hours, radiating to the back. Pain is constant, 9/10, and worsened by eating. Associated with nausea and multiple episodes of vomiting.

He admits to drinking heavily at a party last night (approximately 10 beers). He has had similar but milder episodes in the past that resolved on their own.

PMH: "Social drinker" (drinks 6-8 beers most nights), Hyperlipidemia
Medications: None
SHx: Drinks alcohol daily, denies tobacco or drug use

On exam: BP 105/70, HR 110, RR 22, SpO2 98% on RA, Temp 100.8°F. Appears in distress, lying still. Abdomen distended with epigastric tenderness and guarding. Decreased bowel sounds. No jaundice.

Labs:
- Lipase 1850 (normal <60)
- WBC 16.5, Hgb 14.2, Plt 245
- BUN 28, Cr 1.4, Glucose 185
- AST 95, ALT 78, Alk Phos 110, Tbili 1.8
- Triglycerides 180
CT Abdomen: Enlarged pancreas with peripancreatic fat stranding, no necrosis`,
      patientData: { age: '45', sex: 'M', chiefComplaint: 'Epigastric pain', problems: ['Pancreatitis', 'Alcohol use'] },
      teachingPoints: ['Ranson criteria', 'Fluid resuscitation', 'Nutrition in pancreatitis', 'Alcohol cessation']
    },
    'pe': {
      id: 'pe',
      title: 'Pulmonary Embolism',
      category: 'Pulmonary',
      difficulty: 'Advanced',
      icon: '🫁',
      description: '55yo F with sudden dyspnea',
      caseText: `55 y/o female presents with sudden onset shortness of breath and right-sided pleuritic chest pain that started 4 hours ago. She also reports right calf pain and swelling for the past week.

She returned from a 12-hour flight from Europe 5 days ago. She takes oral contraceptives. No prior history of blood clots.

PMH: Obesity (BMI 35), Migraines
Medications: Oral contraceptive pills, Sumatriptan PRN
FHx: Mother had DVT at age 50
SHx: Non-smoker, sedentary job

On exam: BP 110/75, HR 115, RR 24, SpO2 91% on RA, Temp 99.5°F. Anxious appearing. JVP elevated. Heart tachycardic, loud P2. Lungs clear. Right calf is 3cm larger than left with tenderness.

Labs:
- D-dimer 4500 (normal <500)
- Troponin 0.15
- BNP 450
ECG: Sinus tachycardia, S1Q3T3 pattern
CTA Chest: Saddle pulmonary embolism with RV strain`,
      patientData: { age: '55', sex: 'F', chiefComplaint: 'Shortness of breath', problems: ['PE', 'DVT'] },
      teachingPoints: ['Wells criteria', 'Risk stratification (PESI)', 'Anticoagulation choices', 'Thrombolysis indications']
    },
    'meningitis': {
      id: 'meningitis',
      title: 'Bacterial Meningitis',
      category: 'Infectious Disease',
      difficulty: 'Advanced',
      icon: '🧠',
      description: '22yo M with headache and fever',
      caseText: `22 y/o male college student presents with severe headache, fever, and neck stiffness for 18 hours. Roommate reports he has been increasingly confused and had a seizure en route to the hospital.

He was previously healthy. His roommate was diagnosed with meningitis last week.

PMH: None
Medications: None
Allergies: Penicillin (rash as a child)
SHx: College student, lives in dormitory, no tobacco/alcohol/drugs

On exam: BP 100/65, HR 120, RR 22, SpO2 97% on RA, Temp 103.2°F. Ill-appearing, photophobic. Nuchal rigidity present. Positive Kernig and Brudzinski signs. Petechial rash on trunk and extremities. GCS 12 (E3V4M5).

Labs:
- WBC 22,000 with 90% neutrophils
- Lactate 3.5
- Procalcitonin 15
CSF (pending): Opening pressure 32 cmH2O, cloudy appearance
CT Head: No mass lesion, no herniation`,
      patientData: { age: '22', sex: 'M', chiefComplaint: 'Headache and fever', problems: ['Meningitis'] },
      teachingPoints: ['Empiric antibiotics', 'Dexamethasone timing', 'CSF interpretation', 'Close contact prophylaxis']
    }
  }
};

// Get Case of the Day
const getCaseOfTheDay = () => {
  const today = new Date();
  const cases = Object.values(CASE_LIBRARY.cases);
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  return cases[dayOfYear % cases.length];
};

// ============================================================================
// ADAPTIVE LEARNING SYSTEM
// ============================================================================
const AdaptiveLearning = {
  // Categories of topics for tracking weaknesses
  categories: ['cardiovascular', 'pulmonary', 'nephrology', 'gi', 'endocrine', 'neurology', 'hematology', 'infectious', 'rheumatology'],

  // Analyze performance and identify weak areas
  analyzePerformance(quizHistory, mastery) {
    const categoryStats = {};

    // Initialize categories
    this.categories.forEach(cat => {
      categoryStats[cat] = { correct: 0, total: 0, accuracy: 0, topics: [] };
    });

    // Analyze quiz history
    (quizHistory || []).forEach(quiz => {
      const cat = quiz.category || 'general';
      if (categoryStats[cat]) {
        categoryStats[cat].total += 1;
        if (quiz.correct) categoryStats[cat].correct += 1;
        if (quiz.topicId && !categoryStats[cat].topics.includes(quiz.topicId)) {
          categoryStats[cat].topics.push(quiz.topicId);
        }
      }
    });

    // Calculate accuracy
    Object.keys(categoryStats).forEach(cat => {
      const stats = categoryStats[cat];
      stats.accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : null;
    });

    return categoryStats;
  },

  // Get recommended topics based on weaknesses
  getRecommendations(categoryStats, mastery, topics) {
    const recommendations = [];

    // Find weak categories (accuracy < 70%)
    const weakCategories = Object.entries(categoryStats)
      .filter(([_, stats]) => stats.accuracy !== null && stats.accuracy < 70)
      .sort((a, b) => a[1].accuracy - b[1].accuracy)
      .slice(0, 3);

    weakCategories.forEach(([category, stats]) => {
      recommendations.push({
        type: 'weak-category',
        category,
        accuracy: stats.accuracy,
        message: `Your ${category} accuracy is ${stats.accuracy}%. Consider reviewing more topics in this area.`
      });
    });

    // Find topics that need review (low mastery, not recently reviewed)
    const topicsNeedingWork = Object.entries(topics || {})
      .filter(([id, topic]) => {
        const m = mastery[id];
        const points = typeof m === 'number' ? m : (m?.points || 0);
        return points < 5;
      })
      .slice(0, 5);

    topicsNeedingWork.forEach(([id, topic]) => {
      const m = mastery[id];
      const points = typeof m === 'number' ? m : (m?.points || 0);
      recommendations.push({
        type: 'low-mastery',
        topicId: id,
        topicName: topic.name,
        points,
        message: `Continue working on "${topic.name}" to improve your mastery.`
      });
    });

    return recommendations;
  },

  // Generate adaptive quiz questions based on weaknesses
  getAdaptiveQuestions(categoryStats, topics, count = 5) {
    const questions = [];

    // Prioritize weak categories
    const sortedCategories = Object.entries(categoryStats)
      .filter(([_, stats]) => stats.accuracy !== null)
      .sort((a, b) => (a[1].accuracy || 100) - (b[1].accuracy || 100));

    // Get questions from weak categories first
    for (const [category] of sortedCategories) {
      const categoryTopics = Object.values(topics || {})
        .filter(t => t.category === category && t.quizzes?.length > 0);

      categoryTopics.forEach(topic => {
        topic.quizzes.forEach(quiz => {
          if (questions.length < count) {
            questions.push({
              ...quiz,
              topicId: topic.id,
              topicName: topic.name,
              category
            });
          }
        });
      });

      if (questions.length >= count) break;
    }

    // Shuffle and return
    return questions.sort(() => Math.random() - 0.5).slice(0, count);
  }
};

// ============================================================================
// TOPIC MATCHING SYSTEM - Match case content to relevant curriculum topics
// ============================================================================
const TopicMatcher = {
  // Keywords mapped to topic IDs with weights
  keywordMap: {
    // Cardiovascular
    'heart failure': ['hfref', 'hfpef', 'acute-hf', 'cardiogenic-shock'],
    'hfref': ['hfref', 'acute-hf', 'cardiogenic-shock'],
    'hfpef': ['hfpef', 'acute-hf'],
    'ejection fraction': ['hfref', 'hfpef'],
    'ef': ['hfref', 'hfpef'],
    'bnp': ['hfref', 'hfpef', 'acute-hf'],
    'edema': ['hfref', 'hfpef', 'acute-hf', 'dvt', 'hyponatremia'],
    'jvp': ['hfref', 'acute-hf', 'cardiogenic-shock'],
    'jvd': ['hfref', 'acute-hf', 'cardiogenic-shock'],
    'orthopnea': ['hfref', 'acute-hf'],
    'pnd': ['hfref', 'acute-hf'],
    'diuretic': ['hfref', 'acute-hf', 'hyponatremia', 'aki-workup'],
    'lasix': ['hfref', 'acute-hf', 'hyponatremia'],
    'furosemide': ['hfref', 'acute-hf', 'hyponatremia'],
    'cardiogenic': ['cardiogenic-shock', 'acute-hf', 'stemi'],
    'atrial fibrillation': ['afib'],
    'afib': ['afib', 'stemi', 'nstemi'],
    'a-fib': ['afib'],
    'irregular': ['afib', 'vt-vf'],
    'anticoagulation': ['afib', 'pe-treatment', 'dvt'],
    'warfarin': ['afib', 'pe-treatment', 'dvt'],
    'apixaban': ['afib', 'pe-treatment', 'dvt'],
    'rivaroxaban': ['afib', 'pe-treatment', 'dvt'],
    'cha2ds2': ['afib'],
    'chads': ['afib'],
    'stroke risk': ['afib'],
    'stemi': ['stemi', 'nstemi', 'cardiogenic-shock'],
    'nstemi': ['nstemi', 'stemi'],
    'mi': ['stemi', 'nstemi'],
    'myocardial infarction': ['stemi', 'nstemi'],
    'troponin': ['stemi', 'nstemi', 'pe-diagnosis'],
    'chest pain': ['stemi', 'nstemi', 'pe-diagnosis'],
    'st elevation': ['stemi'],
    'cath lab': ['stemi', 'nstemi'],
    'pci': ['stemi', 'nstemi'],
    'syncope': ['syncope', 'afib', 'vt-vf', 'pe-diagnosis'],
    'ventricular tachycardia': ['vt-vf', 'syncope'],
    'vt': ['vt-vf', 'syncope', 'hyperkalemia'],
    'vf': ['vt-vf'],
    'hypertensive emergency': ['hypertensive-emergency'],
    'hypertensive urgency': ['hypertensive-emergency'],
    'malignant hypertension': ['hypertensive-emergency'],

    // Pulmonary
    'copd': ['copd-acute', 'ards'],
    'copd exacerbation': ['copd-acute'],
    'emphysema': ['copd-acute'],
    'asthma': ['asthma-acute'],
    'asthma exacerbation': ['asthma-acute'],
    'bronchodilator': ['copd-acute', 'asthma-acute'],
    'wheezing': ['copd-acute', 'asthma-acute', 'hfref'],
    'pe': ['pe-diagnosis', 'pe-treatment'],
    'pulmonary embolism': ['pe-diagnosis', 'pe-treatment'],
    'dvt': ['dvt', 'pe-diagnosis', 'pe-treatment'],
    'deep vein thrombosis': ['dvt', 'pe-diagnosis'],
    'wells score': ['pe-diagnosis', 'dvt'],
    'd-dimer': ['pe-diagnosis', 'dvt'],
    'anticoagulant': ['pe-treatment', 'dvt', 'afib'],
    'heparin': ['pe-treatment', 'dvt', 'stemi'],
    'ards': ['ards', 'sepsis'],
    'respiratory failure': ['ards', 'copd-acute', 'asthma-acute'],
    'hypoxia': ['ards', 'pe-diagnosis', 'copd-acute'],
    'hypoxemia': ['ards', 'pe-diagnosis', 'copd-acute'],
    'intubation': ['ards', 'copd-acute', 'asthma-acute'],
    'mechanical ventilation': ['ards'],

    // Renal
    'aki': ['aki-workup', 'sepsis'],
    'acute kidney injury': ['aki-workup', 'sepsis'],
    'creatinine': ['aki-workup', 'ckd'],
    'renal failure': ['aki-workup'],
    'dialysis': ['aki-workup', 'hyperkalemia'],
    'hyponatremia': ['hyponatremia'],
    'sodium': ['hyponatremia', 'hyperkalemia'],
    'siadh': ['hyponatremia'],
    'hyperkalemia': ['hyperkalemia', 'aki-workup'],
    'potassium': ['hyperkalemia'],
    'uti': ['uti', 'sepsis'],
    'urinary tract infection': ['uti', 'sepsis'],
    'pyelonephritis': ['uti', 'sepsis'],

    // Endocrine
    'diabetes': ['t2dm-management', 'dka-hhs', 'hypoglycemia'],
    'diabetic': ['t2dm-management', 'dka-hhs', 'hypoglycemia'],
    'hyperglycemia': ['t2dm-management', 'dka-hhs'],
    'dka': ['dka-hhs'],
    'diabetic ketoacidosis': ['dka-hhs'],
    'hhs': ['dka-hhs'],
    'hyperosmolar': ['dka-hhs'],
    'insulin': ['t2dm-management', 'dka-hhs', 'hypoglycemia', 'hyperkalemia'],
    'hypoglycemia': ['hypoglycemia', 't2dm-management'],
    'a1c': ['t2dm-management'],
    'hemoglobin a1c': ['t2dm-management'],
    'metformin': ['t2dm-management'],
    'hypothyroid': ['hypothyroid'],
    'hypothyroidism': ['hypothyroid'],
    'tsh': ['hypothyroid', 'hyperthyroid'],
    'thyroid': ['hypothyroid', 'hyperthyroid'],
    'hyperthyroid': ['hyperthyroid'],
    'hyperthyroidism': ['hyperthyroid'],
    'thyroid storm': ['hyperthyroid'],
    'adrenal': ['adrenal-insufficiency'],
    'adrenal insufficiency': ['adrenal-insufficiency'],
    'addison': ['adrenal-insufficiency'],
    'cortisol': ['adrenal-insufficiency'],

    // GI
    'gi bleed': ['gi-bleed', 'transfusion-triggers'],
    'gi bleeding': ['gi-bleed', 'transfusion-triggers'],
    'melena': ['gi-bleed'],
    'hematemesis': ['gi-bleed'],
    'hematochezia': ['gi-bleed'],
    'varices': ['gi-bleed', 'cirrhosis-complications'],
    'cirrhosis': ['cirrhosis-complications', 'hepatic-encephalopathy'],
    'ascites': ['cirrhosis-complications'],
    'hepatic encephalopathy': ['hepatic-encephalopathy', 'cirrhosis-complications'],
    'lactulose': ['hepatic-encephalopathy'],
    'ammonia': ['hepatic-encephalopathy'],
    'pancreatitis': ['pancreatitis'],
    'lipase': ['pancreatitis'],
    'amylase': ['pancreatitis'],
    'c diff': ['cdiff'],
    'c. diff': ['cdiff'],
    'clostridioides': ['cdiff'],
    'clostridium difficile': ['cdiff'],
    'sbo': ['sbo'],
    'small bowel obstruction': ['sbo'],
    'bowel obstruction': ['sbo'],
    'ileus': ['sbo'],

    // Infectious Disease
    'sepsis': ['sepsis', 'aki-workup'],
    'septic shock': ['sepsis', 'cardiogenic-shock'],
    'infection': ['sepsis', 'uti', 'pneumonia'],
    'fever': ['sepsis', 'pneumonia', 'uti'],
    'pneumonia': ['pneumonia', 'sepsis'],
    'cap': ['pneumonia'],
    'hap': ['pneumonia'],
    'community acquired': ['pneumonia'],
    'antibiotic': ['sepsis', 'pneumonia', 'uti', 'cdiff'],
    'meningitis': ['meningitis'],
    'lumbar puncture': ['meningitis'],
    'csf': ['meningitis'],
    'cellulitis': ['cellulitis'],
    'skin infection': ['cellulitis'],
    'erysipelas': ['cellulitis'],
    'endocarditis': ['endocarditis'],
    'blood culture': ['endocarditis', 'sepsis'],
    'bacteremia': ['sepsis', 'endocarditis'],

    // Hematology
    'anemia': ['anemia-workup', 'transfusion-triggers', 'gi-bleed'],
    'hemoglobin': ['anemia-workup', 'transfusion-triggers'],
    'hgb': ['anemia-workup', 'transfusion-triggers'],
    'transfusion': ['transfusion-triggers'],
    'blood products': ['transfusion-triggers'],
    'vte': ['pe-diagnosis', 'pe-treatment', 'dvt'],
    'anticoagulation management': ['anticoag-management', 'afib', 'pe-treatment'],

    // Neurology
    'stroke': ['stroke', 'afib'],
    'cva': ['stroke'],
    'tpa': ['stroke'],
    'thrombolytic': ['stroke', 'stemi'],
    'altered mental status': ['hepatic-encephalopathy', 'hyponatremia', 'hypoglycemia', 'meningitis', 'sepsis'],
    'ams': ['hepatic-encephalopathy', 'hyponatremia', 'hypoglycemia', 'meningitis'],
    'encephalopathy': ['hepatic-encephalopathy', 'hyponatremia', 'sepsis'],
    'seizure': ['seizure-management', 'hyponatremia', 'hypoglycemia'],
    'status epilepticus': ['seizure-management'],

    // Rheumatology
    'gout': ['gout-flare'],
    'uric acid': ['gout-flare'],
    'colchicine': ['gout-flare'],
    'joint pain': ['gout-flare'],
    'monoarticular': ['gout-flare'],
  },

  // Match case text to relevant topics
  matchTopics(caseText, topics) {
    if (!caseText || !topics) return [];

    const caseTextLower = caseText.toLowerCase();
    const matchedTopics = {};

    // Score each keyword match
    Object.entries(this.keywordMap).forEach(([keyword, topicIds]) => {
      if (caseTextLower.includes(keyword.toLowerCase())) {
        topicIds.forEach(topicId => {
          if (topics[topicId]) {
            if (!matchedTopics[topicId]) {
              matchedTopics[topicId] = {
                id: topicId,
                topic: topics[topicId],
                score: 0,
                matchedKeywords: []
              };
            }
            matchedTopics[topicId].score += 1;
            if (!matchedTopics[topicId].matchedKeywords.includes(keyword)) {
              matchedTopics[topicId].matchedKeywords.push(keyword);
            }
          }
        });
      }
    });

    // Also check topic names and knowledge arrays directly
    Object.entries(topics).forEach(([topicId, topic]) => {
      // Check topic name
      if (caseTextLower.includes(topic.name.toLowerCase())) {
        if (!matchedTopics[topicId]) {
          matchedTopics[topicId] = { id: topicId, topic, score: 0, matchedKeywords: [] };
        }
        matchedTopics[topicId].score += 3; // Higher weight for exact topic name match
      }

      // Check knowledge items
      (topic.knowledge || []).forEach(knowledge => {
        if (caseTextLower.includes(knowledge.toLowerCase())) {
          if (!matchedTopics[topicId]) {
            matchedTopics[topicId] = { id: topicId, topic, score: 0, matchedKeywords: [] };
          }
          matchedTopics[topicId].score += 0.5;
        }
      });
    });

    // Sort by score and return top matches
    return Object.values(matchedTopics)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Return top 10 relevant topics
  },

  // Get related topics based on category and subcategory
  getRelatedTopics(topicId, topics, curriculum) {
    const topic = topics[topicId];
    if (!topic) return [];

    const related = [];
    const category = curriculum[topic.category];

    if (category) {
      // Get all topics in the same subcategory first
      Object.values(category.subcategories || {}).forEach(subcat => {
        (subcat.topics || []).forEach(tid => {
          if (tid !== topicId && topics[tid]) {
            related.push({
              id: tid,
              topic: topics[tid],
              relation: subcat.id === topic.subcategory ? 'same-subcategory' : 'same-category'
            });
          }
        });
      });
    }

    return related.slice(0, 5);
  }
};

// ============================================================================
// IMAGE-BASED LEARNING DATA
// ============================================================================
const IMAGE_LEARNING_MODULES = {
  ecg: {
    id: 'ecg',
    name: 'ECG Interpretation',
    icon: '📈',
    description: 'Learn to read and interpret electrocardiograms',
    cases: [
      {
        id: 'ecg-normal-sinus',
        name: 'Normal Sinus Rhythm',
        description: 'Rate 60-100, regular P waves before each QRS',
        findings: ['P wave before each QRS', 'PR interval 0.12-0.20s', 'QRS < 0.12s', 'Regular R-R intervals'],
        diagram: `
    ┌─────────────────────────────────────────────┐
    │     P       P       P       P       P       │
    │    /\\      /\\      /\\      /\\      /\\      │
    │   /  \\    /  \\    /  \\    /  \\    /  \\     │
    │──/    \\──/    \\──/    \\──/    \\──/    \\─── │
    │         │       │       │       │           │
    │        QRS     QRS     QRS     QRS          │
    └─────────────────────────────────────────────┘`,
        quiz: { question: 'What is the normal PR interval?', options: ['0.08-0.12 seconds', '0.12-0.20 seconds', '0.20-0.28 seconds', '0.28-0.36 seconds'], correct: 1 }
      },
      {
        id: 'ecg-afib',
        name: 'Atrial Fibrillation',
        description: 'Irregularly irregular rhythm, no discrete P waves',
        findings: ['Irregularly irregular R-R intervals', 'No discrete P waves', 'Fibrillatory baseline', 'Variable ventricular rate'],
        diagram: `
    ┌─────────────────────────────────────────────┐
    │  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       │
    │       │         │     │           │         │
    │      QRS       QRS   QRS         QRS        │
    │  ~~~~~│~~~~~~~~~│~~~~~│~~~~~~~~~~~│~~~~~~~  │
    │                                             │
    │   Irregular intervals, no P waves           │
    └─────────────────────────────────────────────┘`,
        quiz: { question: 'The hallmark of atrial fibrillation on ECG is:', options: ['Regular R-R intervals', 'Peaked P waves', 'Irregularly irregular rhythm', 'Wide QRS complexes'], correct: 2 }
      },
      {
        id: 'ecg-stemi',
        name: 'STEMI',
        description: 'ST elevation with reciprocal changes',
        findings: ['ST elevation > 1mm in contiguous leads', 'Reciprocal ST depression', 'Hyperacute T waves early', 'Q waves may develop'],
        diagram: `
    ┌─────────────────────────────────────────────┐
    │            ╱──╲                              │
    │     P     ╱    ╲   ST elevation             │
    │    /\\    │      │                           │
    │   /  \\   │      │                           │
    │──/    \\──│      │──────────────────────     │
    │         QRS     ╲__/                        │
    │                  T                          │
    └─────────────────────────────────────────────┘`,
        quiz: { question: 'ST elevation in V1-V4 with reciprocal changes in II, III, aVF indicates:', options: ['Inferior STEMI', 'Anterior STEMI', 'Lateral STEMI', 'Posterior STEMI'], correct: 1 }
      },
      {
        id: 'ecg-heart-block',
        name: 'Third Degree Heart Block',
        description: 'Complete AV dissociation',
        findings: ['P waves march through at regular rate', 'QRS complexes at slower regular rate', 'No relationship between P and QRS', 'Wide or narrow QRS depending on escape'],
        diagram: `
    ┌─────────────────────────────────────────────┐
    │  P    P    P    P    P    P    P    P       │
    │ /\\  /\\  /\\  /\\  /\\  /\\  /\\  /\\            │
    │                                             │
    │──────│──────────│──────────│────────────    │
    │     QRS        QRS        QRS               │
    │   (independent rhythm)                      │
    └─────────────────────────────────────────────┘`,
        quiz: { question: 'In complete heart block, the P waves and QRS complexes are:', options: ['Always 1:1', 'Completely independent', 'Always 2:1', 'Grouped beating'], correct: 1 }
      }
    ]
  },
  xray: {
    id: 'xray',
    name: 'Chest X-Ray',
    icon: '🩻',
    description: 'Systematic approach to chest radiograph interpretation',
    cases: [
      {
        id: 'cxr-normal',
        name: 'Normal Chest X-Ray',
        description: 'Systematic review of normal anatomy',
        findings: ['Clear lung fields', 'Normal cardiac silhouette (<50% thoracic width)', 'Sharp costophrenic angles', 'Midline trachea', 'Visible clavicles and ribs'],
        diagram: `
    ┌───────────────────────────┐
    │     ══════════════        │  Clavicles
    │        ┌─────┐            │
    │       ╱       ╲           │  Lung apices
    │      │         │          │
    │     │  ┌───┐   │          │  Heart
    │     │  │   │   │          │
    │     │  └───┘   │          │
    │      ╲       ╱            │  Costophrenic
    │       ╲_____╱             │  angles
    └───────────────────────────┘`,
        quiz: { question: 'On a normal PA chest X-ray, the cardiac silhouette should be:', options: ['<30% of thoracic width', '<50% of thoracic width', '<70% of thoracic width', 'Any size is normal'], correct: 1 }
      },
      {
        id: 'cxr-pneumonia',
        name: 'Lobar Pneumonia',
        description: 'Consolidation in a lobar distribution',
        findings: ['Dense opacity in lobar distribution', 'Air bronchograms', 'No volume loss', 'Silhouette sign may be present'],
        diagram: `
    ┌───────────────────────────┐
    │        ┌─────┐            │
    │       ╱       ╲           │
    │      │         │          │
    │     │  ┌───┐   │▓▓▓▓▓▓    │  RLL opacity
    │     │  │   │   │▓▓▓▓▓▓    │  (consolidation)
    │     │  └───┘   │▓▓▓▓▓▓    │
    │      ╲       ╱ ▓▓▓▓▓      │
    │       ╲_____╱             │
    └───────────────────────────┘`,
        quiz: { question: 'Air bronchograms within a pulmonary opacity suggest:', options: ['Pleural effusion', 'Consolidation', 'Pneumothorax', 'Atelectasis'], correct: 1 }
      },
      {
        id: 'cxr-pneumothorax',
        name: 'Pneumothorax',
        description: 'Air in the pleural space',
        findings: ['Visible pleural line', 'Absent lung markings peripherally', 'Possible mediastinal shift if tension', 'Deep sulcus sign on supine film'],
        diagram: `
    ┌───────────────────────────┐
    │        ┌─────┐            │
    │       ╱  │    ╲           │  Visceral pleura
    │      │   │     │          │  visible
    │     │   │      │     │    │
    │     │  ┌│──┐   │     │    │  No lung markings
    │     │  ││  │   │     │    │  lateral to line
    │      ╲ │    ╱        │    │
    │       ╲│___╱              │
    └───────────────────────────┘`,
        quiz: { question: 'Tracheal deviation AWAY from a pneumothorax suggests:', options: ['Simple pneumothorax', 'Tension pneumothorax', 'Hydropneumothorax', 'Spontaneous resolution'], correct: 1 }
      },
      {
        id: 'cxr-chf',
        name: 'Pulmonary Edema',
        description: 'Cardiogenic pulmonary edema pattern',
        findings: ['Cardiomegaly', 'Cephalization of vessels', 'Kerley B lines', 'Bilateral perihilar haziness (bat wing)', 'Pleural effusions'],
        diagram: `
    ┌───────────────────────────┐
    │        ┌─────┐            │  Cephalization
    │    ╲  ╱ ▒▒▒▒▒ ╲  ╱        │  (upper lobe
    │     ││ ▒▒▒▒▒▒▒ ││         │  vessels)
    │     │▒▒┌───┐▒▒▒│          │
    │     │▒▒│███│▒▒▒│          │  Enlarged heart
    │     │▒▒│███│▒▒▒│          │  Perihilar haze
    │     ╲▒▒└───┘▒▒╱▓▓         │
    │      ╲▓▓▓▓▓▓▓╱            │  Effusions
    └───────────────────────────┘`,
        quiz: { question: 'Kerley B lines represent:', options: ['Dilated bronchi', 'Interstitial edema in lung septa', 'Pulmonary arterial congestion', 'Pleural thickening'], correct: 1 }
      }
    ]
  },
  labs: {
    id: 'labs',
    name: 'Lab Interpretation',
    icon: '🧪',
    description: 'Interpret common laboratory patterns',
    cases: [
      {
        id: 'labs-dka',
        name: 'DKA Pattern',
        description: 'Metabolic acidosis with elevated anion gap',
        findings: ['High glucose (>250)', 'Low pH (<7.3)', 'Low bicarbonate (<18)', 'Elevated anion gap (>12)', 'Positive ketones'],
        values: { glucose: '485', pH: '7.18', pCO2: '22', HCO3: '8', Na: '132', K: '5.8', Cl: '98', anionGap: '26', ketones: 'Large' },
        quiz: { question: 'The anion gap in DKA is elevated due to:', options: ['Lactic acid', 'Ketoacids', 'Uremia', 'Chloride loss'], correct: 1 }
      },
      {
        id: 'labs-aki',
        name: 'Acute Kidney Injury',
        description: 'Elevated creatinine with metabolic derangements',
        findings: ['Elevated creatinine', 'Elevated BUN', 'BUN:Cr ratio helps identify cause', 'Hyperkalemia common', 'Metabolic acidosis'],
        values: { BUN: '68', Cr: '4.2', K: '6.1', pH: '7.28', HCO3: '16', 'BUN:Cr': '16:1' },
        quiz: { question: 'A BUN:Cr ratio >20:1 suggests:', options: ['Intrinsic renal disease', 'Prerenal azotemia', 'Postrenal obstruction', 'Rhabdomyolysis'], correct: 1 }
      },
      {
        id: 'labs-sepsis',
        name: 'Sepsis Labs',
        description: 'Inflammatory markers with organ dysfunction',
        findings: ['Leukocytosis or leukopenia', 'Elevated lactate', 'Elevated procalcitonin', 'Possible thrombocytopenia', 'Organ dysfunction markers'],
        values: { WBC: '18.5', lactate: '4.2', procalcitonin: '12.5', platelets: '95', Cr: '2.1', INR: '1.6' },
        quiz: { question: 'In sepsis, lactate elevation primarily reflects:', options: ['Liver dysfunction', 'Tissue hypoperfusion', 'Muscle breakdown', 'Kidney failure'], correct: 1 }
      },
      {
        id: 'labs-hyponatremia',
        name: 'Hyponatremia Workup',
        description: 'Systematic approach to low sodium',
        findings: ['Serum osmolality determines true vs pseudo', 'Urine osmolality: dilute vs concentrated', 'Urine sodium: renal vs extrarenal', 'Volume status crucial'],
        values: { Na: '118', 'serum osm': '248', 'urine osm': '520', 'urine Na': '45', glucose: '100' },
        quiz: { question: 'In SIADH, what urine sodium would you expect?', options: ['<20 mEq/L', '>40 mEq/L', 'Variable', 'Undetectable'], correct: 1 }
      }
    ]
  }
};

// ============================================================================
// DIFFERENTIAL DIAGNOSIS DATA
// ============================================================================
const DIFFERENTIAL_TEMPLATES = {
  'chest-pain': {
    symptom: 'Chest Pain',
    icon: '❤️',
    mustNotMiss: ['ACS/MI', 'Pulmonary embolism', 'Aortic dissection', 'Tension pneumothorax', 'Esophageal rupture', 'Cardiac tamponade'],
    common: ['Musculoskeletal', 'GERD', 'Anxiety', 'Costochondritis', 'Stable angina'],
    categories: {
      cardiac: ['ACS/STEMI/NSTEMI', 'Unstable angina', 'Stable angina', 'Pericarditis', 'Myocarditis', 'Aortic stenosis'],
      pulmonary: ['Pulmonary embolism', 'Pneumonia', 'Pneumothorax', 'Pleuritis'],
      gi: ['GERD', 'Esophageal spasm', 'Esophageal rupture', 'PUD', 'Biliary colic'],
      vascular: ['Aortic dissection', 'Thoracic aneurysm'],
      musculoskeletal: ['Costochondritis', 'Muscle strain', 'Rib fracture'],
      other: ['Anxiety/panic', 'Herpes zoster', 'Referred pain']
    },
    keyQuestions: [
      'Character of pain (sharp, pressure, tearing)?',
      'Radiation (arm, jaw, back)?',
      'Associated symptoms (dyspnea, diaphoresis, nausea)?',
      'Exacerbating/relieving factors?',
      'Cardiac risk factors?'
    ]
  },
  'dyspnea': {
    symptom: 'Dyspnea',
    icon: '🫁',
    mustNotMiss: ['PE', 'Pneumothorax', 'MI', 'Anaphylaxis', 'Foreign body', 'Cardiac tamponade'],
    common: ['COPD exacerbation', 'Asthma', 'CHF', 'Pneumonia', 'Anxiety'],
    categories: {
      cardiac: ['Acute CHF', 'ACS', 'Arrhythmia', 'Tamponade', 'Valvular emergency'],
      pulmonary: ['COPD exacerbation', 'Asthma', 'PE', 'Pneumonia', 'Pneumothorax', 'ARDS', 'Pulmonary fibrosis'],
      airway: ['Anaphylaxis', 'Angioedema', 'Foreign body', 'Epiglottitis'],
      other: ['Anemia', 'Metabolic acidosis', 'Anxiety', 'Neuromuscular disease']
    },
    keyQuestions: [
      'Acute vs chronic onset?',
      'Orthopnea/PND?',
      'Associated cough, fever, chest pain?',
      'Leg swelling or asymmetry?',
      'Recent immobilization or surgery?'
    ]
  },
  'abdominal-pain': {
    symptom: 'Abdominal Pain',
    icon: '🩺',
    mustNotMiss: ['Appendicitis', 'AAA rupture', 'Bowel obstruction', 'Mesenteric ischemia', 'Ectopic pregnancy', 'Perforated viscus'],
    common: ['Gastroenteritis', 'Constipation', 'GERD', 'IBS', 'UTI'],
    categories: {
      ruq: ['Biliary colic', 'Cholecystitis', 'Hepatitis', 'Fitz-Hugh-Curtis'],
      epigastric: ['PUD', 'Pancreatitis', 'GERD', 'MI', 'AAA'],
      luq: ['Splenic pathology', 'Gastritis'],
      rlq: ['Appendicitis', 'Ovarian torsion', 'Ectopic', 'Crohn disease'],
      llq: ['Diverticulitis', 'Ovarian torsion', 'Ectopic', 'Sigmoid volvulus'],
      diffuse: ['Gastroenteritis', 'Obstruction', 'Mesenteric ischemia', 'Peritonitis', 'DKA']
    },
    keyQuestions: [
      'Location and radiation?',
      'Character (colicky, constant, sharp)?',
      'Associated N/V, fever, diarrhea?',
      'Last bowel movement?',
      'Menstrual/pregnancy history?'
    ]
  },
  'altered-mental-status': {
    symptom: 'Altered Mental Status',
    icon: '🧠',
    mustNotMiss: ['Hypoglycemia', 'Stroke', 'Meningitis', 'Intracranial hemorrhage', 'Status epilepticus', 'Hypoxia'],
    common: ['UTI (elderly)', 'Medication effect', 'Delirium', 'Alcohol intoxication'],
    categories: {
      metabolic: ['Hypoglycemia', 'DKA/HHS', 'Hyponatremia', 'Hypercalcemia', 'Uremia', 'Hepatic encephalopathy', 'Thyroid storm/myxedema'],
      infectious: ['Meningitis', 'Encephalitis', 'Sepsis', 'UTI'],
      structural: ['Stroke', 'ICH', 'Subdural', 'Tumor', 'Hydrocephalus'],
      toxic: ['Alcohol', 'Opioids', 'Benzodiazepines', 'Anticholinergics', 'CO poisoning'],
      other: ['Seizure/postictal', 'Hypoxia', 'Hypertensive encephalopathy', 'Psychiatric']
    },
    keyQuestions: [
      'Baseline mental status?',
      'Acute vs gradual onset?',
      'Medications and recent changes?',
      'Substance use?',
      'Fever, headache, neck stiffness?'
    ]
  }
};

// ============================================================================
// CLAUDE API SERVICE
// ============================================================================
const ClaudeAPI = {
  apiKey: null,
  baseUrl: 'https://api.anthropic.com/v1/messages',

  // Usage limits configuration
  DAILY_CALL_LIMIT: 100,
  DAILY_TOKEN_LIMIT: 200000,
  STORAGE_KEY_USAGE: 'watershed-api-usage',

  setApiKey(key) {
    this.apiKey = key;
    localStorage.setItem('watershed-api-key', key);
  },

  getApiKey() {
    if (!this.apiKey) {
      this.apiKey = localStorage.getItem('watershed-api-key');
    }
    return this.apiKey;
  },

  isConfigured() {
    return !!this.getApiKey();
  },

  // Usage tracking methods
  getUsageData() {
    const stored = localStorage.getItem(this.STORAGE_KEY_USAGE);
    if (!stored) return this.resetUsageData();

    const data = JSON.parse(stored);
    const today = new Date().toDateString();

    // Reset if it's a new day
    if (data.date !== today) {
      return this.resetUsageData();
    }
    return data;
  },

  resetUsageData() {
    const data = {
      date: new Date().toDateString(),
      calls: 0,
      inputTokens: 0,
      outputTokens: 0,
      totalTokens: 0,
      estimatedCost: 0,
      history: []
    };
    localStorage.setItem(this.STORAGE_KEY_USAGE, JSON.stringify(data));
    return data;
  },

  updateUsage(inputTokens, outputTokens, model) {
    const data = this.getUsageData();
    data.calls += 1;
    data.inputTokens += inputTokens;
    data.outputTokens += outputTokens;
    data.totalTokens += (inputTokens + outputTokens);

    // Cost estimation (approximate rates for Claude Sonnet)
    const inputCostPer1K = 0.003;
    const outputCostPer1K = 0.015;
    const callCost = (inputTokens / 1000 * inputCostPer1K) + (outputTokens / 1000 * outputCostPer1K);
    data.estimatedCost += callCost;

    // Keep last 20 calls in history
    data.history.unshift({
      timestamp: new Date().toISOString(),
      inputTokens,
      outputTokens,
      cost: callCost.toFixed(4)
    });
    if (data.history.length > 20) data.history.pop();

    localStorage.setItem(this.STORAGE_KEY_USAGE, JSON.stringify(data));
    return data;
  },

  checkLimits() {
    const data = this.getUsageData();
    const errors = [];

    if (data.calls >= this.DAILY_CALL_LIMIT) {
      errors.push(`Daily API call limit reached (${this.DAILY_CALL_LIMIT} calls). Resets at midnight.`);
    }
    if (data.totalTokens >= this.DAILY_TOKEN_LIMIT) {
      errors.push(`Daily token limit reached (${this.DAILY_TOKEN_LIMIT.toLocaleString()} tokens). Resets at midnight.`);
    }

    return {
      allowed: errors.length === 0,
      errors,
      usage: data,
      remainingCalls: Math.max(0, this.DAILY_CALL_LIMIT - data.calls),
      remainingTokens: Math.max(0, this.DAILY_TOKEN_LIMIT - data.totalTokens)
    };
  },

  getUsageStats() {
    const data = this.getUsageData();
    return {
      ...data,
      callsRemaining: Math.max(0, this.DAILY_CALL_LIMIT - data.calls),
      tokensRemaining: Math.max(0, this.DAILY_TOKEN_LIMIT - data.totalTokens),
      callLimitPercent: Math.min(100, (data.calls / this.DAILY_CALL_LIMIT) * 100),
      tokenLimitPercent: Math.min(100, (data.totalTokens / this.DAILY_TOKEN_LIMIT) * 100)
    };
  },

  async call(systemPrompt, userMessage, options = {}) {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('API key not configured. Please add your Anthropic API key in Settings.');
    }

    // Check usage limits before making call
    const limitCheck = this.checkLimits();
    if (!limitCheck.allowed) {
      throw new Error(limitCheck.errors.join(' '));
    }

    // Warn if approaching limits
    if (limitCheck.remainingCalls <= 10) {
      console.warn(`API Warning: Only ${limitCheck.remainingCalls} calls remaining today.`);
    }

    const maxRetries = options.retries || 2;
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(this.baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
          },
          body: JSON.stringify({
            model: options.model || 'claude-sonnet-4-20250514',
            max_tokens: options.maxTokens || 2048,
            system: systemPrompt,
            messages: [{ role: 'user', content: userMessage }]
          })
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage = errorData.error?.message || `API request failed with status ${response.status}`;

          // Handle specific error types
          if (response.status === 401) {
            throw new Error('Invalid API key. Please check your API key in Settings.');
          }
          if (response.status === 429) {
            if (attempt < maxRetries) {
              // Exponential backoff for rate limits
              await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 1000));
              continue;
            }
            throw new Error('Rate limit exceeded. Please wait a moment and try again.');
          }
          if (response.status === 500 || response.status === 503) {
            if (attempt < maxRetries) {
              await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 1000));
              continue;
            }
            throw new Error('Anthropic API is temporarily unavailable. Please try again later.');
          }

          throw new Error(errorMessage);
        }

        const data = await response.json();

        // Track usage from response
        const inputTokens = data.usage?.input_tokens || 0;
        const outputTokens = data.usage?.output_tokens || 0;
        this.updateUsage(inputTokens, outputTokens, options.model || 'claude-sonnet-4-20250514');

        return data.content[0].text;

      } catch (error) {
        lastError = error;

        // Don't retry on non-retryable errors
        if (error.message.includes('API key') || error.message.includes('limit reached')) {
          throw error;
        }

        // Network errors - retry with backoff
        if (attempt < maxRetries && (error.name === 'TypeError' || error.message.includes('network'))) {
          await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 1000));
          continue;
        }
      }
    }

    throw lastError || new Error('API call failed after retries');
  }
};

// ============================================================================
// MEDICAL EDUCATION PROMPTS
// ============================================================================
const PROMPTS = {
  CASE_ANALYSIS: `You are an expert medical educator analyzing a patient case for teaching purposes. You have deep expertise in internal medicine, particularly cardiology, pulmonology, nephrology, and critical care.

Your task is to analyze the provided patient case and identify:
1. The key medical problems/diagnoses present
2. Critical clinical findings that guide management
3. Relevant pathophysiology concepts to teach
4. Common clinical decision points/dilemmas
5. Applicable landmark trials and guidelines

Respond in JSON format:
{
  "problems": [{"name": "...", "acuity": "acute|chronic", "priority": "high|medium|low"}],
  "keyFindings": [{"finding": "...", "significance": "...", "critical": true/false}],
  "teachingTopics": [{"topic": "...", "relevance": "...", "concepts": ["..."]}],
  "clinicalDecisions": [{"decision": "...", "options": ["..."], "evidence": "..."}],
  "relevantTrials": [{"name": "...", "relevance": "..."}]
}`,

  GENERATE_QUESTIONS: `You are a medical educator creating case-based learning questions. Generate challenging but fair multiple-choice questions that test clinical reasoning, not just recall.

Guidelines:
- Questions should be directly relevant to THIS specific patient
- Include clinical context in the question stem
- All distractors should be plausible
- Explanations should teach the "why" not just the "what"
- Reference landmark trials when applicable
- Focus on decision-making that would change outcomes

Respond in JSON format:
{
  "questions": [
    {
      "category": "Diagnosis|Management|Pharmacology|Clinical Reasoning",
      "question": "...",
      "context": "Brief clinical context if needed",
      "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
      "correctIndex": 0-3,
      "explanation": "Detailed teaching explanation",
      "keyTakeaway": "One-sentence pearl",
      "relevantTrials": ["TRIAL-NAME"]
    }
  ]
}`,

  TEACHING_EXPLANATION: `You are an attending physician teaching a resident at the bedside. Explain the requested concept in the context of THIS specific patient.

Teaching style:
- Start with the "why" - help them understand the pathophysiology
- Connect to the specific patient findings
- Highlight common mistakes and pitfalls
- Share clinical pearls from experience
- Reference evidence but make it practical
- Use the Socratic method - pose questions to deepen understanding
- Be warm but rigorous

Keep explanations focused and actionable. Aim for 2-3 paragraphs maximum unless more detail is specifically requested.`,

  SIMULATOR_FEEDBACK: `You are an attending physician providing feedback during a clinical simulation. The learner just made a management decision for this patient.

Your feedback should:
1. Acknowledge what they did well (if anything)
2. Explain why their choice was optimal/suboptimal/poor
3. Describe the likely clinical outcome
4. Teach the underlying principle
5. Reference relevant evidence/guidelines
6. If suboptimal, explain what you would have done differently and why

Be constructive and educational. Frame feedback as teaching moments, not criticism.

Respond in JSON format:
{
  "quality": "optimal|suboptimal|poor",
  "feedback": "Your detailed educational feedback",
  "outcome": "What happens to the patient",
  "teachingPoint": "Key principle to remember",
  "whatIWouldDo": "If different from their choice, explain your approach"
}`,

  FOLLOWUP_QUESTION: `You are a medical educator engaging in Socratic dialogue. Based on the learner's answer and the clinical context, generate a thoughtful follow-up question that:

1. Probes deeper understanding
2. Tests application of the concept
3. Connects to related clinical scenarios
4. Challenges assumptions appropriately

Keep it conversational and encouraging. One question only.`,

  CASE_SUMMARY: `You are a medical educator. Create a concise educational summary of this patient case that:

1. Synthesizes the key clinical problems
2. Highlights the most important teaching points
3. Identifies 3-5 "don't miss" pearls
4. Suggests areas for further study

Format as a brief attending note that a resident could reference.`,

  // Clinical Reasoning Path Prompts
  KEY_FEATURES_FEEDBACK: `You are a clinical reasoning expert evaluating a learner's identification of key features from a patient case.

Analyze their response and provide constructive feedback on:
1. Key features they correctly identified (be specific and affirming)
2. Important features they missed (explain why these matter)
3. Any features they included that aren't truly "key" (gently redirect)

Key features are findings that help narrow the differential - things that distinguish between diagnoses or significantly impact management.

Respond in JSON format:
{
  "overallQuality": "excellent|good|needs_improvement",
  "correctlyIdentified": ["list of correctly identified features with brief praise"],
  "missed": [{"feature": "...", "whyImportant": "..."}],
  "notKey": [{"feature": "...", "explanation": "..."}],
  "summary": "A brief encouraging summary of their performance"
}`,

  SUMMARY_STATEMENT_FEEDBACK: `You are a clinical reasoning expert evaluating a learner's summary statement.

A good summary statement follows this format:
"[Age] [sex] with [relevant PMH/risk factors] presenting with [duration] of [chief complaint] and [key findings] concerning for [leading diagnosis]"

Evaluate their summary for:
1. Completeness - does it include key elements?
2. Accuracy - are the facts correct?
3. Prioritization - are the most important elements emphasized?
4. Clinical reasoning - does it appropriately narrow toward a diagnosis?

Respond in JSON format:
{
  "overallQuality": "excellent|good|needs_improvement",
  "strengths": ["list of what they did well"],
  "improvements": [{"issue": "...", "suggestion": "..."}],
  "exampleStatement": "Your model summary statement for comparison",
  "summary": "Brief encouraging feedback"
}`,

  DIFFERENTIAL_FEEDBACK: `You are a clinical reasoning expert evaluating a learner's differential diagnosis and problem list.

Compare their differential to an expert differential for this case. Consider:
1. Are the most likely diagnoses included?
2. Are dangerous "can't miss" diagnoses considered?
3. Is the ranking/prioritization appropriate?
4. Are there diagnoses that don't fit the presentation?

Respond in JSON format:
{
  "overallQuality": "excellent|good|needs_improvement",
  "correctDiagnoses": ["diagnoses they appropriately included"],
  "missedDiagnoses": [{"diagnosis": "...", "whyConsider": "...", "priority": "high|medium|low"}],
  "inappropriateDiagnoses": [{"diagnosis": "...", "whyUnlikely": "..."}],
  "rankingFeedback": "Feedback on their prioritization",
  "expertDifferential": ["Your ranked differential for comparison"],
  "summary": "Brief encouraging feedback"
}`,

  // Knowledge Path Prompts
  IDENTIFY_TEACHING_POINTS: `You are a medical educator identifying the key teaching points from a patient case.

Identify 3-5 high-yield teaching points that a learner should understand from this case. Focus on:
- Core pathophysiology concepts
- Evidence-based management principles
- Common clinical pitfalls
- Landmark trials and guidelines

For each teaching point, provide educational content that would help a learner deeply understand the concept.

IMPORTANT: Return ONLY valid JSON with no additional text before or after. Start your response with { and end with }.

{
  "teachingPoints": [
    {
      "id": "point_1",
      "topic": "Topic name (brief)",
      "relevance": "Why this is important for this specific case (1 sentence)",
      "explanation": "A thorough explanation of the concept (2-3 paragraphs). Include pathophysiology, clinical application, and practical tips.",
      "clinicalPearl": "One memorable pearl to remember",
      "relevantTrials": ["Trial names if applicable"],
      "testQuestion": {
        "question": "A question to test understanding",
        "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
        "correctIndex": 0,
        "explanation": "Why this is the correct answer"
      }
    }
  ]
}`,

  // Attending Teaching Points - What an attending might highlight on rounds
  ATTENDING_TEACHING_POINTS: `You are an experienced internal medicine attending physician on rounds. Analyze this case and identify the specific teaching points you would highlight to residents and students.

Focus on practical, clinically-relevant points that distinguish excellent clinicians. Include:
1. "Pimp questions" - Classic questions attendings ask on rounds for this type of case
2. Physical exam pearls - What to look for and why it matters
3. Workup insights - What tests tell you and common interpretation pitfalls
4. Management nuances - The details that matter (timing, dosing, monitoring)
5. Disposition considerations - When to escalate, when it's safe to discharge

IMPORTANT: Return ONLY valid JSON with no additional text. Start with { and end with }.

{
  "attendingPoints": [
    {
      "category": "Pimp Question|Physical Exam Pearl|Workup Insight|Management Nuance|Disposition",
      "question": "The question or teaching point title",
      "answer": "The answer or explanation (2-4 sentences)",
      "whyItMatters": "Why this is clinically important (1 sentence)",
      "commonMistake": "What learners often get wrong (optional)"
    }
  ],
  "recommendedArticles": [
    {
      "title": "Article or guideline title",
      "source": "Journal/Organization name",
      "year": "Year if known",
      "type": "Landmark Trial|Clinical Guideline|Review Article|Case Report",
      "relevance": "Why this is relevant to this specific case (1 sentence)",
      "keyTakeaway": "The main point from this article"
    }
  ],
  "boardsReview": {
    "topic": "The boards-relevant topic",
    "highYieldFact": "The key fact that shows up on boards",
    "clinicalVignette": "A typical boards-style presentation"
  }
}`,

  // History Taking Simulation Prompts
  PATIENT_SIMULATION: `You are simulating a patient for a medical student to practice history-taking. You have the following condition and presentation based on this case:

Stay in character as the patient throughout. Key behaviors:
- Answer questions naturally as a patient would (not medically sophisticated)
- Don't volunteer information - wait to be asked
- Show appropriate emotion (worried, uncomfortable, etc.)
- If asked about something not in the case, make up plausible details consistent with the presentation
- Use lay terms, not medical jargon
- Sometimes be vague or need clarification (like real patients)
- Express concerns about your condition

Respond conversationally as the patient. Keep responses 1-3 sentences typically.
If the student asks a closed question, give a brief answer.
If they ask an open question, give more detail but still stay in character.

IMPORTANT: Never break character. Never give medical advice. Never reveal the diagnosis.`,

  HISTORY_FEEDBACK: `You are a clinical skills instructor evaluating a medical student's history-taking performance.

Review their conversation with the simulated patient and provide feedback on:

1. **History Structure** - Did they cover:
   - Chief complaint (HPI: onset, location, duration, character, aggravating/alleviating factors, radiation, timing, severity)
   - Past medical/surgical history
   - Medications and allergies
   - Family history
   - Social history (occupation, smoking, alcohol, drugs, living situation)
   - Review of systems

2. **Questioning Technique**
   - Use of open-ended vs closed questions appropriately
   - Follow-up on red flag symptoms
   - Building rapport
   - Organization and flow

3. **Clinical Reasoning**
   - Did their questions suggest appropriate differential diagnosis thinking?
   - Did they explore pertinent positives and negatives?
   - Did they miss any critical questions for this presentation?

Respond in JSON format:
{
  "overallScore": 1-5,
  "grade": "Excellent|Good|Satisfactory|Needs Improvement|Insufficient",
  "structureScore": {
    "hpiComplete": true/false,
    "pmhAsked": true/false,
    "medicationsAsked": true/false,
    "allergiesAsked": true/false,
    "familyHistoryAsked": true/false,
    "socialHistoryAsked": true/false,
    "rosAsked": true/false
  },
  "strengths": ["list of things done well"],
  "improvements": ["specific suggestions for improvement"],
  "missedQuestions": ["critical questions they should have asked"],
  "clinicalReasoningComment": "Assessment of their diagnostic thinking",
  "summary": "Brief encouraging overall feedback"
}`,

  PRESENTATION_FEEDBACK: `You are an attending physician evaluating a medical student's oral case presentation.

A good oral presentation follows this structure:
1. **One-liner**: Age, sex, relevant PMH, chief complaint, duration
2. **HPI**: Chronological story with pertinent positives/negatives
3. **PMH/PSH/Medications/Allergies**: Brief and relevant
4. **Social/Family History**: Relevant items
5. **Review of Systems**: Pertinent positives and negatives
6. **Physical Exam**: Organized, relevant findings
7. **Labs/Imaging**: Key results
8. **Assessment**: Problem list with leading diagnosis
9. **Plan**: Organized by problem

Evaluate their presentation for:
- **Organization**: Logical flow, appropriate structure
- **Conciseness**: Not too long, not missing key info
- **Relevance**: Emphasizes important findings, minimizes irrelevant details
- **Clinical Reasoning**: Assessment shows appropriate thinking
- **Delivery**: (if applicable) Pace, clarity, confidence

Respond in JSON format:
{
  "overallScore": 1-5,
  "grade": "Excellent|Good|Satisfactory|Needs Improvement|Insufficient",
  "structureAssessment": {
    "oneLinePresent": true/false,
    "hpiOrganized": true/false,
    "pertinentsIncluded": true/false,
    "examOrganized": true/false,
    "assessmentClear": true/false,
    "planByProblem": true/false
  },
  "strengths": ["list of things done well"],
  "improvements": ["specific actionable suggestions"],
  "modelOneLiner": "How you would phrase the opening line",
  "organizationTips": "Specific advice on structure",
  "clinicalReasoningFeedback": "Feedback on their assessment/plan",
  "summary": "Brief encouraging overall feedback"
}`,

  GENERATE_SIMULATION_SCENARIOS: `You are a clinical educator creating realistic simulation scenarios based on a specific patient case. Generate dynamic clinical scenarios that could realistically occur during this patient's hospitalization.

Create 3-4 scenario hooks, each representing a different clinical challenge:
1. Initial management decision (ED/admission priorities)
2. An overnight complication or change in status (e.g., "the nurse calls at 2am because...")
3. A management decision during hospitalization (medication changes, new symptoms)
4. A discharge planning scenario

Each scenario should be grounded in the actual patient's conditions and be clinically plausible.

Respond in JSON format:
{
  "scenarios": [
    {
      "id": "scenario_1",
      "title": "Brief title (e.g., 'Initial ED Management')",
      "hook": "1-2 sentence narrative hook that sets the scene",
      "type": "initial_management|overnight_call|inpatient_decision|discharge_planning",
      "difficulty": "standard|challenging"
    }
  ]
}`,

  DYNAMIC_SIMULATION_STEP: `You are running a clinical simulation for a medical learner. Based on the patient case, the chosen scenario, and any previous decisions, generate the next simulation step.

Consider the learner's previous choices and their consequences when determining the current clinical state.

Generate:
1. The current clinical situation (time, narrative, vitals, exam findings)
2. 3-4 management options with varying quality levels
3. One option should be optimal, 1-2 suboptimal, and 0-1 poor

Respond in JSON format:
{
  "stepNumber": 1,
  "time": "Time stamp (e.g., '2:00 AM - Overnight Call')",
  "narrative": "2-3 sentences describing the current situation",
  "vitals": { "bp": "...", "hr": "...", "rr": "...", "spo2": "...", "temp": "..." },
  "findings": "Relevant physical exam findings",
  "choices": [
    { "text": "Description of the management option", "baseQuality": "optimal|suboptimal|poor" }
  ],
  "isLastStep": false
}`
};

// ============================================================================
// CLINICAL TRIALS DATABASE (for reference in AI responses)
// ============================================================================
const CLINICAL_TRIALS = {
  'PARADIGM-HF': { name: 'PARADIGM-HF', year: 2014, journal: 'NEJM', summary: 'ARNI (sacubitril/valsartan) superior to enalapril in HFrEF' },
  'DAPA-HF': { name: 'DAPA-HF', year: 2019, journal: 'NEJM', summary: 'Dapagliflozin reduces HF hospitalization and CV death regardless of diabetes' },
  'DOSE': { name: 'DOSE', year: 2011, journal: 'NEJM', summary: 'Higher dose IV diuretics achieve better decongestion in ADHF' },
  'RALES': { name: 'RALES', year: 1999, journal: 'NEJM', summary: 'Spironolactone reduces mortality 30% in severe HFrEF' },
  'COPERNICUS': { name: 'COPERNICUS', year: 2001, journal: 'NEJM', summary: 'Carvedilol beneficial even in severe HFrEF' },
  'AFFIRM': { name: 'AFFIRM', year: 2002, journal: 'NEJM', summary: 'No mortality difference between rate and rhythm control in AF' },
  'ARISTOTLE': { name: 'ARISTOTLE', year: 2011, journal: 'NEJM', summary: 'Apixaban superior to warfarin in non-valvular AF' },
  'EMPA-REG': { name: 'EMPA-REG OUTCOME', year: 2015, journal: 'NEJM', summary: 'Empagliflozin reduces CV death in T2DM with ASCVD' }
};

// ============================================================================
// SIMULATOR SCENARIOS (Base scenarios - AI will enhance feedback)
// ============================================================================
const SIMULATOR_SCENARIOS = {
  'adhf-management': {
    id: 'adhf-management',
    title: 'ADHF Management Simulation',
    description: 'Manage acute decompensated heart failure from ED to discharge',
    steps: [
      {
        time: '7:00 AM - ED Arrival',
        narrative: 'Your patient has arrived in the ED. He is sitting upright, appears in respiratory distress, and cannot speak in full sentences.',
        vitals: { bp: '158/94', hr: '102', rr: '28', spo2: '89%', temp: '37.1' },
        findings: 'Severe respiratory distress, diffuse crackles bilaterally, JVP to angle of jaw, 3+ pitting edema to thighs',
        choices: [
          { text: 'Start BiPAP, give IV furosemide 80mg, place Foley catheter', baseQuality: 'optimal' },
          { text: 'Give IV furosemide 40mg, apply oxygen via nasal cannula, monitor', baseQuality: 'suboptimal' },
          { text: 'Prepare for intubation, give IV furosemide and morphine', baseQuality: 'poor' },
          { text: 'Order STAT echocardiogram and cardiac biomarkers before treatment', baseQuality: 'poor' }
        ]
      },
      {
        time: '9:00 AM - 2 Hours Later',
        narrative: 'Patient made 400mL urine in 2 hours. BiPAP weaned to 4L NC. Labs show Cr 1.9 (was 1.8), K 4.8.',
        vitals: { bp: '138/82', hr: '88', rr: '20', spo2: '96%', temp: '37.0' },
        findings: 'Still crackles at bases, JVP elevated at 10cm, 2+ edema',
        choices: [
          { text: 'Give another 80mg IV furosemide, continue monitoring', baseQuality: 'optimal' },
          { text: 'Hold diuretics due to rising creatinine, recheck labs in 6 hours', baseQuality: 'poor' },
          { text: 'Add metolazone 5mg and repeat furosemide 80mg', baseQuality: 'suboptimal' },
          { text: 'Switch to continuous furosemide infusion at 10mg/hr', baseQuality: 'suboptimal' }
        ]
      },
      {
        time: '6:00 PM - Day 1',
        narrative: 'Patient net negative 2.5L. Much improved. Cr now 2.0, K 3.8. Carvedilol was held on admission.',
        vitals: { bp: '118/72', hr: '76', rr: '16', spo2: '97%', temp: '36.8' },
        findings: 'Minimal crackles at bases, JVP 8cm, 1+ edema',
        choices: [
          { text: 'Continue diuretics, restart carvedilol at home dose tonight', baseQuality: 'optimal' },
          { text: 'Hold carvedilol until discharge, too risky right now', baseQuality: 'suboptimal' },
          { text: 'Restart carvedilol at half dose', baseQuality: 'suboptimal' },
          { text: 'Switch to metoprolol tartrate for easier dosing', baseQuality: 'poor' }
        ]
      },
      {
        time: 'Day 3 - Discharge Planning',
        narrative: 'Patient euvolemic, Cr back to baseline 1.3. Home meds: lisinopril 20mg, carvedilol 25mg BID, furosemide 40mg daily, Jardiance 10mg.',
        vitals: { bp: '112/68', hr: '68', rr: '14', spo2: '98%', temp: '36.7' },
        findings: 'No crackles, JVP normal, trace edema',
        choices: [
          { text: 'Increase furosemide to 80mg, add spironolactone 25mg, plan ARNI transition', baseQuality: 'optimal' },
          { text: 'Keep all home medications the same, close outpatient follow-up', baseQuality: 'poor' },
          { text: 'Double the furosemide, stop Jardiance (contributed to dehydration)', baseQuality: 'poor' },
          { text: 'Increase furosemide, add spironolactone, but hold Jardiance until outpatient', baseQuality: 'suboptimal' }
        ]
      }
    ]
  },
  'sepsis-management': {
    id: 'sepsis-management',
    title: 'Sepsis & Septic Shock',
    description: 'Manage a patient presenting with urosepsis',
    steps: [
      {
        time: '2:00 AM - ED Arrival',
        narrative: 'A 72-year-old woman from a nursing home presents with confusion, fever, and hypotension.',
        vitals: { bp: '85/52', hr: '118', rr: '26', spo2: '92%', temp: '38.9' },
        findings: 'Confused, dry mucous membranes, suprapubic tenderness, foul-smelling urine',
        choices: [
          { text: 'Start 30mL/kg crystalloid, draw cultures, give broad-spectrum antibiotics within 1 hour', baseQuality: 'optimal' },
          { text: 'Order CT abdomen to identify source before antibiotics', baseQuality: 'poor' },
          { text: 'Give 500mL fluid bolus, wait to see response before more', baseQuality: 'suboptimal' },
          { text: 'Start norepinephrine immediately for the low blood pressure', baseQuality: 'suboptimal' }
        ]
      },
      {
        time: '3:30 AM - After Initial Resuscitation',
        narrative: 'Received 2L crystalloid. Lactate 4.8. BP now 78/48. Minimal urine output.',
        vitals: { bp: '78/48', hr: '112', rr: '24', spo2: '94%', temp: '38.5' },
        findings: 'Still confused, mottled extremities, MAP 58',
        choices: [
          { text: 'Start norepinephrine to target MAP ≥65, continue fluids, repeat lactate', baseQuality: 'optimal' },
          { text: 'Give more fluids—she needs at least 6L before vasopressors', baseQuality: 'poor' },
          { text: 'Start dopamine for blood pressure support', baseQuality: 'suboptimal' },
          { text: 'Add vasopressin 0.03 units/min as first vasopressor', baseQuality: 'suboptimal' }
        ]
      },
      {
        time: '8:00 AM - ICU Day 1',
        narrative: 'On norepinephrine 12mcg/min, MAP 67. Lactate down to 3.2. Urine culture growing E. coli.',
        vitals: { bp: '92/58', hr: '98', rr: '18', spo2: '96%', temp: '37.8' },
        findings: 'More alert, good urine output, lactate clearing',
        choices: [
          { text: 'Narrow antibiotics to ciprofloxacin based on sensitivities, wean pressors', baseQuality: 'optimal' },
          { text: 'Keep broad-spectrum antibiotics for 7 more days to be safe', baseQuality: 'suboptimal' },
          { text: 'Stop antibiotics—patient is improving', baseQuality: 'poor' },
          { text: 'Add vancomycin for possible MRSA coverage', baseQuality: 'poor' }
        ]
      }
    ]
  }
};

// ============================================================================
// LOCALSTORAGE HOOK
// ============================================================================
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });

  const setValue = useCallback((value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  }, [key, storedValue]);

  return [storedValue, setValue];
}

// ============================================================================
// ICONS
// ============================================================================
const Icons = {
  Settings: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  ArrowLeft: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>,
  Check: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
  ChevronDown: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>,
  ChevronRight: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>,
  Sparkles: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  Brain: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  Send: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
};

// ============================================================================
// LOADING SPINNER
// ============================================================================
function LoadingSpinner({ size = 'md', text = '' }) {
  const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8' };
  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin`} />
      {text && <span className="text-gray-400">{text}</span>}
    </div>
  );
}

// ============================================================================
// API SETTINGS MODAL
// ============================================================================
function ApiSettingsModal({ isOpen, onClose }) {
  const [apiKey, setApiKey] = useState(ClaudeAPI.getApiKey() || '');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [usageStats, setUsageStats] = useState(ClaudeAPI.getUsageStats());

  // Refresh usage stats when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setUsageStats(ClaudeAPI.getUsageStats());
    }
  }, [isOpen]);

  const handleSave = () => {
    ClaudeAPI.setApiKey(apiKey);
    setTestResult({ success: true, message: 'API key saved!' });
    setTimeout(() => onClose(), 1000);
  };

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      ClaudeAPI.setApiKey(apiKey);
      await ClaudeAPI.call(
        'You are a helpful assistant.',
        'Say "API connection successful!" in exactly those words.',
        { maxTokens: 50 }
      );
      setTestResult({ success: true, message: 'Connection successful!' });
      setUsageStats(ClaudeAPI.getUsageStats()); // Update stats after test
    } catch (error) {
      setTestResult({ success: false, message: error.message });
    }
    setTesting(false);
  };

  const handleResetUsage = () => {
    if (confirm('Reset usage statistics? This will clear today\'s usage tracking.')) {
      ClaudeAPI.resetUsageData();
      setUsageStats(ClaudeAPI.getUsageStats());
    }
  };

  if (!isOpen) return null;

  const getUsageColor = (percent) => {
    if (percent >= 90) return 'bg-red-500';
    if (percent >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a24] rounded-xl border border-gray-700 max-w-lg w-full p-6 animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Icons.Settings /> API Settings
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Anthropic API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-ant-..."
            className="w-full bg-[#0f0f17] border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
          <p className="text-xs text-gray-500 mt-2">
            Your API key is stored locally in your browser and never sent to any server except Anthropic.
          </p>
        </div>

        {testResult && (
          <div className={`mb-4 p-3 rounded-lg ${testResult.success ? 'bg-green-900/30 border border-green-700 text-green-400' : 'bg-red-900/30 border border-red-700 text-red-400'}`}>
            {testResult.message}
          </div>
        )}

        <div className="flex gap-3 mb-6">
          <button
            onClick={handleTest}
            disabled={!apiKey || testing}
            className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            {testing ? <LoadingSpinner size="sm" /> : 'Test Connection'}
          </button>
          <button
            onClick={handleSave}
            disabled={!apiKey}
            className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition"
          >
            Save Key
          </button>
        </div>

        {/* Usage Statistics Section */}
        <div className="mb-6 p-4 bg-[#0f0f17] rounded-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-300">Today's Usage</h3>
            <button
              onClick={handleResetUsage}
              className="text-xs text-gray-500 hover:text-gray-300 transition"
            >
              Reset
            </button>
          </div>

          {/* API Calls Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>API Calls</span>
              <span>{usageStats.calls} / {ClaudeAPI.DAILY_CALL_LIMIT}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${getUsageColor(usageStats.callLimitPercent)} transition-all`}
                style={{ width: `${usageStats.callLimitPercent}%` }}
              />
            </div>
          </div>

          {/* Token Usage Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Tokens Used</span>
              <span>{usageStats.totalTokens.toLocaleString()} / {ClaudeAPI.DAILY_TOKEN_LIMIT.toLocaleString()}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${getUsageColor(usageStats.tokenLimitPercent)} transition-all`}
                style={{ width: `${usageStats.tokenLimitPercent}%` }}
              />
            </div>
          </div>

          {/* Cost Estimate */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-2 bg-[#1a1a24] rounded">
              <div className="text-lg font-semibold text-indigo-400">{usageStats.calls}</div>
              <div className="text-xs text-gray-500">Calls</div>
            </div>
            <div className="p-2 bg-[#1a1a24] rounded">
              <div className="text-lg font-semibold text-indigo-400">{(usageStats.totalTokens / 1000).toFixed(1)}k</div>
              <div className="text-xs text-gray-500">Tokens</div>
            </div>
            <div className="p-2 bg-[#1a1a24] rounded">
              <div className="text-lg font-semibold text-green-400">${usageStats.estimatedCost.toFixed(2)}</div>
              <div className="text-xs text-gray-500">Est. Cost</div>
            </div>
          </div>

          {/* Warning if approaching limits */}
          {usageStats.callLimitPercent >= 80 && (
            <div className="mt-3 p-2 bg-yellow-900/30 border border-yellow-700 rounded text-yellow-400 text-xs">
              Approaching daily limit. {usageStats.callsRemaining} calls remaining.
            </div>
          )}
        </div>

        <div className="p-4 bg-[#0f0f17] rounded-lg">
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Getting an API Key</h3>
          <ol className="text-sm text-gray-400 space-y-1">
            <li>1. Go to <a href="https://console.anthropic.com" target="_blank" className="text-indigo-400 hover:underline">console.anthropic.com</a></li>
            <li>2. Sign up or log in</li>
            <li>3. Navigate to API Keys</li>
            <li>4. Create a new key and copy it here</li>
          </ol>
        </div>

        <div className="mt-4 p-3 bg-indigo-900/20 border border-indigo-700/50 rounded-lg">
          <p className="text-xs text-indigo-300">
            <strong>Daily limits:</strong> {ClaudeAPI.DAILY_CALL_LIMIT} API calls and {ClaudeAPI.DAILY_TOKEN_LIMIT.toLocaleString()} tokens.
            Limits reset at midnight local time.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// HEADER COMPONENT
// ============================================================================
function Header({ currentView, onNavigate, streak, userProgress, onOpenSettings }) {
  const isApiConfigured = ClaudeAPI.isConfigured();

  const tabs = [
    { id: 'case', label: 'New Case', icon: '📝' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
    { id: 'library', label: 'Library', icon: '📚' }
  ];

  const currentLevel = getLevel(userProgress?.xp || 0);
  const xpProgress = getXPProgress(userProgress?.xp || 0);

  return (
    <header className="sticky top-0 z-40 bg-[#12121a] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-lg">💧</div>
          <span className="font-bold text-xl">Watershed</span>
          <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded text-xs font-medium">AI-Powered</span>
        </div>

        <nav className="flex gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentView === tab.id
                  ? 'bg-indigo-500/20 text-indigo-400'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Level & XP Badge */}
          <div
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 rounded-full cursor-pointer hover:border-indigo-500/50 transition"
            title={`Level ${currentLevel.level}: ${currentLevel.title}`}
          >
            <span className="text-base">{currentLevel.icon}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-indigo-300">Lv{currentLevel.level}</span>
              <div className="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  style={{ width: `${xpProgress}%` }}
                />
              </div>
            </div>
          </div>
          {/* Streak */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full text-amber-400 text-sm">
            🔥 <span className="font-semibold">{streak}</span>
          </div>
          <button
            onClick={onOpenSettings}
            className={`p-2 rounded-lg transition ${isApiConfigured ? 'text-green-400 hover:bg-gray-800' : 'text-amber-400 hover:bg-gray-800 animate-pulse'}`}
            title={isApiConfigured ? 'API Connected' : 'Configure API Key'}
          >
            <Icons.Settings />
          </button>
        </div>
      </div>
    </header>
  );
}

// ============================================================================
// PRACTICE SCENARIOS FOR STANDALONE MODES
// ============================================================================
const PRACTICE_SCENARIOS = [
  {
    id: 'chest-pain',
    name: 'Chest Pain',
    icon: '❤️',
    category: 'Cardiovascular',
    difficulty: 'Intermediate',
    patientData: { age: '58', sex: 'M', chiefComplaint: 'Chest pain', problems: ['Hypertension', 'Hyperlipidemia'] },
    caseText: `58 y/o male presenting to the ED with 2 hours of substernal chest pressure radiating to his left arm. He describes the pain as "squeezing" and rates it 8/10. Associated with diaphoresis and nausea. Pain started while mowing the lawn.

PMH: Hypertension (on lisinopril 10mg daily), Hyperlipidemia (on atorvastatin 20mg daily), Former smoker (quit 5 years ago, 30 pack-year history)
FHx: Father had MI at age 55
SHx: Works as an accountant, sedentary lifestyle, drinks 2-3 beers on weekends

On exam: BP 158/95, HR 92, RR 18, SpO2 98% on RA. Anxious appearing, diaphoretic. Heart regular rhythm, no murmurs. Lungs clear. No lower extremity edema.`
  },
  {
    id: 'shortness-of-breath',
    name: 'Shortness of Breath',
    icon: '🫁',
    category: 'Pulmonary',
    difficulty: 'Intermediate',
    patientData: { age: '72', sex: 'F', chiefComplaint: 'Shortness of breath', problems: ['COPD', 'CHF'] },
    caseText: `72 y/o female with history of COPD and CHF presenting with 4 days of worsening shortness of breath. She reports increased cough productive of yellow-green sputum. She has been using her albuterol inhaler more frequently (6-8 times daily, up from her usual 2-3 times).

PMH: COPD (on tiotropium, home O2 2L at night), CHF (EF 45%), Type 2 diabetes, Obesity
Medications: Tiotropium, albuterol PRN, metformin 1000mg BID, furosemide 20mg daily
SHx: Former smoker (quit 10 years ago, 40 pack-year history), lives alone

On exam: BP 142/88, HR 98, RR 24, SpO2 88% on RA (improves to 94% on 3L NC). Using accessory muscles. Diffuse expiratory wheezes bilaterally, decreased breath sounds at bases. Trace pedal edema.`
  },
  {
    id: 'abdominal-pain',
    name: 'Abdominal Pain',
    icon: '🩺',
    category: 'GI',
    difficulty: 'Beginner',
    patientData: { age: '45', sex: 'F', chiefComplaint: 'Right upper quadrant pain', problems: ['Obesity', 'Diabetes'] },
    caseText: `45 y/o female presenting with 6 hours of right upper quadrant abdominal pain. Pain is constant, rated 7/10, and radiates to her right shoulder. She had nausea and one episode of non-bloody vomiting. Pain worsened after eating fried chicken for dinner last night.

PMH: Obesity (BMI 34), Type 2 diabetes, had 3 pregnancies
Medications: Metformin 500mg BID
SHx: Works as a nurse, non-smoker, occasional wine

On exam: BP 138/82, HR 88, RR 16, Temp 100.4°F, SpO2 99% on RA. Appears uncomfortable. Abdomen soft, positive Murphy's sign, tenderness in RUQ without rebound or guarding. Bowel sounds present.`
  },
  {
    id: 'confusion',
    name: 'Altered Mental Status',
    icon: '🧠',
    category: 'Neurology',
    difficulty: 'Advanced',
    patientData: { age: '78', sex: 'M', chiefComplaint: 'Confusion', problems: ['Dementia', 'UTI', 'BPH'] },
    caseText: `78 y/o male brought in by his daughter for 2 days of increased confusion. She reports he has baseline mild dementia but has been more disoriented than usual, not recognizing family members. He has had urinary incontinence (new) and decreased oral intake.

PMH: Mild Alzheimer's dementia (diagnosed 2 years ago), BPH, Hypertension, Coronary artery disease s/p stent 5 years ago
Medications: Donepezil 10mg daily, tamsulosin 0.4mg daily, lisinopril 20mg daily, aspirin 81mg daily
SHx: Lives with daughter, former engineer, non-smoker

On exam: BP 108/68, HR 96, RR 18, Temp 101.2°F, SpO2 96% on RA. Oriented to name only. Following simple commands inconsistently. No focal neurologic deficits. Suprapubic tenderness on palpation.`
  },
  {
    id: 'diabetic-emergency',
    name: 'Diabetic Emergency',
    icon: '💉',
    category: 'Endocrine',
    difficulty: 'Intermediate',
    patientData: { age: '32', sex: 'M', chiefComplaint: 'Nausea and vomiting', problems: ['Type 1 Diabetes'] },
    caseText: `32 y/o male with Type 1 diabetes presenting with 2 days of nausea, vomiting, and abdominal pain. He reports polyuria and polydipsia over the past week. He ran out of insulin 3 days ago and couldn't afford to refill it.

PMH: Type 1 Diabetes (diagnosed at age 12), no known complications
Medications: Insulin glargine 20 units at bedtime, insulin lispro sliding scale with meals (currently not taking)
SHx: Works in construction, lost health insurance recently, lives with girlfriend

On exam: BP 98/60, HR 112, RR 24 (deep, rapid breathing), Temp 98.8°F, SpO2 99% on RA. Appears ill, dry mucous membranes, fruity breath odor. Diffuse abdominal tenderness without guarding. Skin tenting present.

Labs: Glucose 485, pH 7.18, HCO3 10, Anion gap 24, BUN 32, Cr 1.6, K 5.8`
  }
];

// ============================================================================
// CASE INPUT WITH AI ANALYSIS
// ============================================================================
function CaseInput({ onAnalyze, isAnalyzing, onStartHistory, onStartReporter }) {
  const [text, setText] = useState('');
  const [showScenarios, setShowScenarios] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const isApiConfigured = ClaudeAPI.isConfigured();

  const sampleCase = `65 y/o male with PMH of HTN, T2DM (HbA1c 8.2%), and HFrEF (EF 35%) presenting with 3 days of progressive dyspnea on exertion and lower extremity edema.

Patient reports 10 lb weight gain over the past week and increasing orthopnea requiring 3 pillows to sleep. He has been compliant with his home medications including lisinopril 20mg daily, carvedilol 25mg BID, and furosemide 40mg daily. Recently started on Jardiance for diabetes.

On exam: BP 145/92, HR 88, RR 22, SpO2 94% on RA. JVP elevated to 12cm. Bilateral crackles at lung bases. 2+ pitting edema to knees bilaterally.

Labs: BNP 1850 (prev 450), Cr 1.8 (baseline 1.2), K 5.2, Na 134
CXR: Cardiomegaly with bilateral pleural effusions and pulmonary vascular congestion`;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3">AI-Powered Case Learning</h1>
        <p className="text-gray-400">Practice clinical skills or analyze patient cases with AI</p>
      </div>

      {!isApiConfigured && (
        <div className="mb-6 p-4 bg-amber-900/30 border border-amber-700 rounded-lg flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <div className="font-semibold text-amber-400">API Key Required</div>
            <p className="text-sm text-gray-300">Click the settings icon in the header to configure your Anthropic API key for AI-powered features.</p>
          </div>
        </div>
      )}

      {/* Clinical Skills Practice Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🎓</span>
          <h2 className="text-lg font-semibold">Clinical Skills Practice</h2>
          <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">For Early Learners</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* History Taking Card */}
          <div
            onClick={() => setShowScenarios('history')}
            className="bg-[#1a1a24] rounded-xl p-5 border-2 border-gray-700 hover:border-blue-500 cursor-pointer transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🩺</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition">History Taking</h3>
                <p className="text-gray-400 text-sm mb-3">Practice eliciting patient history with AI voice simulation</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">🎤 Voice</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">💬 Chat</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">📝 Feedback</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reporter Card */}
          <div
            onClick={() => setShowScenarios('reporter')}
            className="bg-[#1a1a24] rounded-xl p-5 border-2 border-gray-700 hover:border-amber-500 cursor-pointer transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">📣</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-amber-400 transition">Oral Presentation</h3>
                <p className="text-gray-400 text-sm mb-3">Practice presenting cases and get AI feedback</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded">🎙️ Record</span>
                  <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded">⌨️ Type</span>
                  <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded">💡 Tips</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario Selection Modal */}
      {showScenarios && (
        <div className="mb-8 bg-[#1a1a24] rounded-xl border border-gray-700 p-6 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              {showScenarios === 'history' ? '🩺 Choose a Patient for History Taking' : '📣 Choose a Case to Present'}
            </h3>
            <button
              onClick={() => { setShowScenarios(false); setSelectedScenario(null); }}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 mb-4">
            {PRACTICE_SCENARIOS.map(scenario => (
              <div
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedScenario?.id === scenario.id
                    ? 'border-indigo-500 bg-indigo-500/10'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{scenario.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{scenario.name}</h4>
                      <span className="px-2 py-0.5 bg-gray-700 text-gray-400 text-xs rounded">{scenario.category}</span>
                      <span className={`px-2 py-0.5 text-xs rounded ${
                        scenario.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        scenario.difficulty === 'Intermediate' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>{scenario.difficulty}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      {scenario.patientData.age}yo {scenario.patientData.sex} with {scenario.patientData.chiefComplaint}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => { setShowScenarios(false); setSelectedScenario(null); }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (selectedScenario) {
                  if (showScenarios === 'history') {
                    onStartHistory(selectedScenario);
                  } else {
                    onStartReporter(selectedScenario);
                  }
                }
              }}
              disabled={!selectedScenario || !isApiConfigured}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition"
            >
              {showScenarios === 'history' ? 'Start History Taking →' : 'Start Presentation →'}
            </button>
          </div>
        </div>
      )}

      {/* Case Analysis Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">📋</span>
          <h2 className="text-lg font-semibold">Case Analysis</h2>
        </div>

        <div className="bg-[#1a1a24] rounded-xl border border-gray-800 p-6">
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-medium text-gray-300">Patient Case</label>
            <button onClick={() => setText(sampleCase)} className="text-sm text-indigo-400 hover:text-indigo-300 transition">
              Load sample case
            </button>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your patient case here... (H&P, progress note, consult, etc.)"
            className="w-full h-48 bg-[#0f0f17] border border-gray-700 rounded-lg p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 resize-none"
          />

          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {text.length > 0 && `${text.split(/\s+/).filter(Boolean).length} words`}
            </div>
            <button
              onClick={() => text.trim() && onAnalyze(text)}
              disabled={isAnalyzing || !text.trim() || !isApiConfigured}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition-all flex items-center gap-2"
            >
              {isAnalyzing ? (
                <LoadingSpinner size="sm" text="Analyzing with AI..." />
              ) : (
                <>
                  <Icons.Sparkles />
                  Analyze Case
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#1a1a24] rounded-lg p-4 border border-gray-800">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="font-semibold mb-1">Personalized Questions</h3>
          <p className="text-sm text-gray-400">AI generates questions specific to your case</p>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-4 border border-gray-800">
          <div className="text-2xl mb-2">👨‍⚕️</div>
          <h3 className="font-semibold mb-1">Attending-Style Teaching</h3>
          <p className="text-sm text-gray-400">Learn concepts in context of this patient</p>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-4 border border-gray-800">
          <div className="text-2xl mb-2">🏥</div>
          <h3 className="font-semibold mb-1">Clinical Simulations</h3>
          <p className="text-sm text-gray-400">Practice decisions with AI feedback</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PATH SELECTOR - Choose between learning paths including early med student modes
// ============================================================================
function PathSelector({ onSelect, analysis, patientData }) {
  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-3">How would you like to learn?</h2>
        <p className="text-gray-400">Choose your learning approach for this case</p>
      </div>

      {/* Early Med Student Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🎓</span>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Clinical Skills Practice</h3>
          <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">For Early Learners</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* History Taking Card */}
          <div
            onClick={() => onSelect('history')}
            className="bg-[#1a1a24] rounded-xl p-5 border-2 border-gray-700 hover:border-blue-500 cursor-pointer transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🩺</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition">History Taking</h3>
                <p className="text-gray-400 text-sm mb-3">Practice eliciting a patient history with AI voice simulation</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">🎤</span> Voice-to-voice conversation
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">💬</span> Realistic patient responses
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">📝</span> Structured feedback on technique
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reporter Card */}
          <div
            onClick={() => onSelect('reporter')}
            className="bg-[#1a1a24] rounded-xl p-5 border-2 border-gray-700 hover:border-amber-500 cursor-pointer transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">📣</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-amber-400 transition">Oral Presentation</h3>
                <p className="text-gray-400 text-sm mb-3">Practice presenting cases and get AI feedback</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">🎙️</span> Record or type presentation
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">📋</span> Structure & organization tips
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">💡</span> Model one-liner examples
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Learning Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🎯</span>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Clinical Reasoning & Knowledge</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Clinical Reasoning Card */}
          <div
            onClick={() => onSelect('reasoning')}
            className="bg-[#1a1a24] rounded-xl p-5 border-2 border-gray-700 hover:border-purple-500 cursor-pointer transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🧠</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-purple-400 transition">Clinical Reasoning</h3>
                <p className="text-gray-400 text-sm mb-3">Practice diagnostic reasoning like expert clinicians</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-[10px]">1</span>
                    Identify key features
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-[10px]">2</span>
                    Create summary statement
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-[10px]">3</span>
                    Build differential diagnosis
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Knowledge Card */}
          <div
            onClick={() => onSelect('knowledge')}
            className="bg-[#1a1a24] rounded-xl p-5 border-2 border-gray-700 hover:border-emerald-500 cursor-pointer transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">📚</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-emerald-400 transition">Knowledge Deep Dive</h3>
                <p className="text-gray-400 text-sm mb-3">Learn teaching points and test understanding</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Icons.Sparkles className="w-4 h-4 text-emerald-400" />
                    AI-identified teaching points
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.Brain className="w-4 h-4 text-emerald-400" />
                    Deep explanations & pearls
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.Check className="w-4 h-4 text-emerald-400" />
                    Knowledge check questions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick stats from analysis */}
      {analysis && (
        <div className="mt-8 p-4 bg-[#1a1a24] rounded-lg border border-gray-700">
          <div className="text-sm text-gray-500 mb-2">Case Overview</div>
          <div className="flex flex-wrap gap-2">
            {analysis.problems?.slice(0, 4).map((p, i) => (
              <span key={i} className={`px-2 py-1 rounded text-xs ${
                p.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                p.priority === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                'bg-gray-700 text-gray-300'
              }`}>
                {p.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// CLINICAL REASONING PATH - Step-by-step diagnostic reasoning exercise
// ============================================================================
function ClinicalReasoningPath({ caseText, analysis, onComplete, onBack }) {
  const [step, setStep] = useState(1);
  const [userInputs, setUserInputs] = useState({
    keyFeatures: '',
    summaryStatement: '',
    differential: ''
  });
  const [feedback, setFeedback] = useState({});
  const [loading, setLoading] = useState(false);
  const [stepsCompleted, setStepsCompleted] = useState([]);
  const [stepsSkipped, setStepsSkipped] = useState([]);

  const steps = [
    { id: 1, title: 'Identify Key Features', icon: '🔍' },
    { id: 2, title: 'Summary Statement', icon: '📝' },
    { id: 3, title: 'Differential Diagnosis', icon: '📋' }
  ];

  const handleSubmitStep = async () => {
    setLoading(true);
    try {
      let prompt, systemPrompt;

      if (step === 1) {
        systemPrompt = PROMPTS.KEY_FEATURES_FEEDBACK;
        prompt = `PATIENT CASE:\n${caseText}\n\nLEARNER'S IDENTIFIED KEY FEATURES:\n${userInputs.keyFeatures}`;
      } else if (step === 2) {
        systemPrompt = PROMPTS.SUMMARY_STATEMENT_FEEDBACK;
        prompt = `PATIENT CASE:\n${caseText}\n\nLEARNER'S SUMMARY STATEMENT:\n${userInputs.summaryStatement}`;
      } else if (step === 3) {
        systemPrompt = PROMPTS.DIFFERENTIAL_FEEDBACK;
        prompt = `PATIENT CASE:\n${caseText}\n\nLEARNER'S DIFFERENTIAL DIAGNOSIS:\n${userInputs.differential}`;
      }

      const response = await ClaudeAPI.call(systemPrompt, prompt);
      let parsed;
      try {
        parsed = JSON.parse(response);
      } catch {
        parsed = { summary: response, overallQuality: 'good' };
      }

      setFeedback(prev => ({ ...prev, [step]: parsed }));
      setStepsCompleted(prev => [...prev, step]);
    } catch (error) {
      setFeedback(prev => ({ ...prev, [step]: { summary: `Error: ${error.message}`, overallQuality: 'error' } }));
    }
    setLoading(false);
  };

  const handleSkip = () => {
    setStepsSkipped(prev => [...prev, step]);
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete({ stepsCompleted, stepsSkipped, feedback });
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete({ stepsCompleted, stepsSkipped, feedback });
    }
  };

  const getQualityColor = (quality) => {
    if (quality === 'excellent') return 'text-green-400 bg-green-900/30 border-green-700';
    if (quality === 'good') return 'text-amber-400 bg-amber-900/30 border-amber-700';
    return 'text-red-400 bg-red-900/30 border-red-700';
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2">
          <Icons.ArrowLeft /> Back
        </button>
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                stepsCompleted.includes(s.id) ? 'bg-green-500 text-white' :
                stepsSkipped.includes(s.id) ? 'bg-gray-600 text-gray-400' :
                step === s.id ? 'bg-purple-500 text-white' :
                'bg-gray-700 text-gray-400'
              }`}>
                {stepsCompleted.includes(s.id) ? '✓' : s.id}
              </div>
              {i < steps.length - 1 && <div className="w-8 h-0.5 bg-gray-700" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Current Step */}
      <div className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{steps[step - 1].icon}</span>
          <div>
            <h2 className="text-xl font-bold">Step {step}: {steps[step - 1].title}</h2>
            <p className="text-sm text-gray-400">
              {step === 1 && "What findings help narrow down the diagnosis?"}
              {step === 2 && "Synthesize the case into a concise summary"}
              {step === 3 && "List your differential diagnoses in order of likelihood"}
            </p>
          </div>
        </div>

        {/* Step-specific instructions */}
        <div className="mb-4 p-4 bg-[#0f0f17] rounded-lg text-sm text-gray-400">
          {step === 1 && (
            <>
              <p className="mb-2"><strong className="text-gray-300">Key features</strong> are findings that help distinguish between diagnoses:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Symptoms and their characteristics (timing, severity, quality)</li>
                <li>Physical exam findings</li>
                <li>Vital signs and lab abnormalities</li>
                <li>Relevant history and risk factors</li>
              </ul>
            </>
          )}
          {step === 2 && (
            <>
              <p className="mb-2"><strong className="text-gray-300">Format:</strong></p>
              <p className="italic">"[Age] [sex] with [relevant PMH] presenting with [duration] of [chief complaint] and [key findings] concerning for [leading diagnosis]"</p>
            </>
          )}
          {step === 3 && (
            <>
              <p className="mb-2"><strong className="text-gray-300">Consider:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Most likely diagnoses first</li>
                <li>Don't-miss/dangerous diagnoses</li>
                <li>Less likely but possible alternatives</li>
              </ul>
            </>
          )}
        </div>

        {/* Input area */}
        <textarea
          value={step === 1 ? userInputs.keyFeatures : step === 2 ? userInputs.summaryStatement : userInputs.differential}
          onChange={(e) => setUserInputs(prev => ({
            ...prev,
            [step === 1 ? 'keyFeatures' : step === 2 ? 'summaryStatement' : 'differential']: e.target.value
          }))}
          placeholder={
            step === 1 ? "List the key features you identified from this case..." :
            step === 2 ? "Write your summary statement..." :
            "List your differential diagnoses..."
          }
          className="w-full h-40 bg-[#0f0f17] border border-gray-700 rounded-lg p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none"
          disabled={stepsCompleted.includes(step) || loading}
        />

        {/* Feedback display */}
        {feedback[step] && (
          <div className={`mt-4 p-4 rounded-lg border ${getQualityColor(feedback[step].overallQuality)}`}>
            <div className="flex items-center gap-2 mb-3">
              <Icons.Sparkles />
              <span className="font-semibold">AI Feedback</span>
              {feedback[step].overallQuality && (
                <span className={`px-2 py-0.5 rounded text-xs ${getQualityColor(feedback[step].overallQuality)}`}>
                  {feedback[step].overallQuality}
                </span>
              )}
            </div>

            <div className="space-y-3 text-sm">
              {feedback[step].summary && (
                <p className="text-gray-300">{feedback[step].summary}</p>
              )}

              {/* Step 1: Key Features feedback */}
              {step === 1 && feedback[step].correctlyIdentified?.length > 0 && (
                <div>
                  <div className="text-green-400 font-medium mb-1">Correctly Identified:</div>
                  <ul className="list-disc list-inside text-gray-400">
                    {feedback[step].correctlyIdentified.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              )}
              {step === 1 && feedback[step].missed?.length > 0 && (
                <div>
                  <div className="text-amber-400 font-medium mb-1">Missed:</div>
                  {feedback[step].missed.map((m, i) => (
                    <div key={i} className="text-gray-400 ml-4">• {m.feature}: {m.whyImportant}</div>
                  ))}
                </div>
              )}

              {/* Step 2: Summary feedback */}
              {step === 2 && feedback[step].exampleStatement && (
                <div>
                  <div className="text-indigo-400 font-medium mb-1">Example Statement:</div>
                  <p className="text-gray-400 italic">"{feedback[step].exampleStatement}"</p>
                </div>
              )}

              {/* Step 3: Differential feedback */}
              {step === 3 && feedback[step].expertDifferential?.length > 0 && (
                <div>
                  <div className="text-indigo-400 font-medium mb-1">Expert Differential:</div>
                  <ol className="list-decimal list-inside text-gray-400">
                    {feedback[step].expertDifferential.map((d, i) => <li key={i}>{d}</li>)}
                  </ol>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleSkip}
            disabled={loading || stepsCompleted.includes(step)}
            className="px-4 py-2 text-gray-400 hover:text-white transition disabled:opacity-50"
          >
            Skip this step
          </button>
          <div className="flex gap-3">
            {!stepsCompleted.includes(step) ? (
              <button
                onClick={handleSubmitStep}
                disabled={loading || !userInputs[step === 1 ? 'keyFeatures' : step === 2 ? 'summaryStatement' : 'differential'].trim()}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition flex items-center gap-2"
              >
                {loading ? <LoadingSpinner size="sm" /> : 'Get Feedback'}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition"
              >
                {step < 3 ? 'Next Step →' : 'Complete →'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PREPARE FOR ROUNDS VIEW - Teaching points, roadmap topics, key studies
// ============================================================================
function PrepareForRoundsView({ caseText, analysis, onComplete, onBack, onSelectTopic, mastery }) {
  const [teachingPoints, setTeachingPoints] = useState([]);
  const [attendingData, setAttendingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [attendingLoading, setAttendingLoading] = useState(true);
  const [expandedSection, setExpandedSection] = useState('teaching');

  // Get relevant topics from the curriculum based on case content
  const topics = typeof TOPICS !== 'undefined' ? TOPICS : {};
  const relevantTopics = TopicMatcher.matchTopics(caseText, topics);

  // Fetch teaching points
  useEffect(() => {
    const fetchTeachingPoints = async () => {
      if (!ClaudeAPI.isConfigured()) {
        setLoading(false);
        return;
      }
      try {
        const response = await ClaudeAPI.call(
          PROMPTS.IDENTIFY_TEACHING_POINTS,
          `Analyze this patient case and identify key teaching points. Return ONLY valid JSON, no other text:\n\n${caseText}`,
          { maxTokens: 4096 }
        );
        let parsed;
        try {
          parsed = JSON.parse(response);
        } catch {
          const jsonMatch = response.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try { parsed = JSON.parse(jsonMatch[0]); } catch { parsed = null; }
          }
        }
        if (parsed?.teachingPoints?.length > 0) {
          setTeachingPoints(parsed.teachingPoints.map((p, i) => ({ ...p, id: p.id || `point_${i}` })));
        }
      } catch (err) {
        console.error('Teaching points error:', err);
      }
      setLoading(false);
    };
    fetchTeachingPoints();
  }, [caseText]);

  // Fetch attending-level points
  useEffect(() => {
    const fetchAttending = async () => {
      if (!ClaudeAPI.isConfigured()) {
        setAttendingLoading(false);
        return;
      }
      try {
        const response = await ClaudeAPI.call(
          PROMPTS.ATTENDING_TEACHING_POINTS,
          `Analyze this patient case and provide attending-level teaching points:\n\n${caseText}`,
          { maxTokens: 4096 }
        );
        let parsed;
        try {
          parsed = JSON.parse(response);
        } catch {
          const jsonMatch = response.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try { parsed = JSON.parse(jsonMatch[0]); } catch { parsed = null; }
          }
        }
        if (parsed) setAttendingData(parsed);
      } catch (err) {
        console.error('Attending points error:', err);
      }
      setAttendingLoading(false);
    };
    fetchAttending();
  }, [caseText]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2">
          <Icons.ArrowLeft /> Back to Activities
        </button>
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span>📋</span> Prepare for Rounds
        </h2>
        <button
          onClick={() => onComplete({ teachingPoints, attendingData })}
          className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-sm font-medium transition"
        >
          Done Preparing
        </button>
      </div>

      {/* Section Tabs */}
      <div className="flex gap-2 mb-6">
        {['teaching', 'topics', 'studies'].map(section => (
          <button
            key={section}
            onClick={() => setExpandedSection(section)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              expandedSection === section
                ? 'bg-teal-600 text-white'
                : 'bg-[#1a1a24] text-gray-400 hover:text-white border border-gray-700'
            }`}
          >
            {section === 'teaching' ? '💡 Teaching Points' :
             section === 'topics' ? '📖 Roadmap Topics' :
             '📊 Key Studies'}
          </button>
        ))}
      </div>

      {/* Teaching Points Section */}
      {expandedSection === 'teaching' && (
        <div className="space-y-4 animate-fadeIn">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <LoadingSpinner size="lg" text="Generating teaching points..." />
            </div>
          ) : teachingPoints.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No teaching points generated</div>
          ) : (
            teachingPoints.map((point, i) => (
              <div key={point.id} className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{point.topic}</h4>
                    <p className="text-sm text-gray-400 mb-3">{point.relevance}</p>
                    <div className="text-gray-300 text-sm mb-3 whitespace-pre-wrap">{point.explanation}</div>
                    {point.clinicalPearl && (
                      <div className="p-3 bg-teal-900/20 border border-teal-800 rounded-lg text-sm text-teal-300">
                        💎 <strong>Pearl:</strong> {point.clinicalPearl}
                      </div>
                    )}
                    {point.relevantTrials?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {point.relevantTrials.map((trial, j) => (
                          <span key={j} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">
                            {trial}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Roadmap Topics Section */}
      {expandedSection === 'topics' && (
        <div className="space-y-3 animate-fadeIn">
          <p className="text-sm text-gray-400 mb-4">Topics from the curriculum relevant to this case. Click to explore.</p>
          {relevantTopics.length === 0 ? (
            <div className="text-center py-12 text-gray-500">No matching curriculum topics found</div>
          ) : (
            relevantTopics.map((item, i) => (
              <div
                key={item.id || i}
                onClick={() => onSelectTopic && onSelectTopic(item.id)}
                className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700 hover:border-teal-500 cursor-pointer transition-all flex items-center gap-4"
              >
                <div className="text-2xl">📖</div>
                <div className="flex-1">
                  <div className="font-medium">{item.topic?.name || item.id}</div>
                  <div className="text-sm text-gray-400">{item.topic?.category || ''}</div>
                </div>
                {mastery?.[item.id] && (
                  <div className="text-xs text-emerald-400">
                    {typeof mastery[item.id] === 'number' ? mastery[item.id] : mastery[item.id]?.points || 0} pts
                  </div>
                )}
                <Icons.ArrowLeft className="w-4 h-4 text-gray-500 rotate-180" />
              </div>
            ))
          )}
        </div>
      )}

      {/* Key Studies Section */}
      {expandedSection === 'studies' && (
        <div className="space-y-4 animate-fadeIn">
          {attendingLoading ? (
            <div className="flex items-center justify-center py-12">
              <LoadingSpinner size="lg" text="Loading key studies..." />
            </div>
          ) : !attendingData ? (
            <div className="text-center py-12 text-gray-500">No study data available</div>
          ) : (
            <>
              {/* Attending Points */}
              {attendingData.attendingPoints?.map((point, i) => (
                <div key={i} className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-amber-400">👨‍⚕️</span> {point.question || point.topic}
                  </h4>
                  {point.category && (
                    <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 mb-2 inline-block">{point.category}</span>
                  )}
                  <p className="text-sm text-gray-300 mb-3">{point.answer || point.insight || point.explanation}</p>
                  {point.whyItMatters && (
                    <p className="text-xs text-teal-400 mb-3 italic">Why it matters: {point.whyItMatters}</p>
                  )}
                  {point.commonMistake && (
                    <div className="p-3 bg-red-900/20 border border-red-800 rounded-lg text-sm text-red-300 mb-3">
                      ⚠️ <strong>Common Mistake:</strong> {point.commonMistake}
                    </div>
                  )}
                  {point.pearl && (
                    <div className="p-3 bg-amber-900/20 border border-amber-800 rounded-lg text-sm text-amber-300">
                      💎 {point.pearl}
                    </div>
                  )}
                </div>
              ))}

              {/* Recommended Articles / Trials */}
              {attendingData.recommendedArticles?.length > 0 && (
                <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <span>📊</span> Key Literature
                  </h4>
                  <div className="space-y-3">
                    {attendingData.recommendedArticles.map((article, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-[#0f0f17] rounded-lg">
                        <div className="w-6 h-6 bg-indigo-500/20 rounded flex items-center justify-center text-indigo-400 text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{article.title || article.name}</div>
                          <div className="text-xs text-gray-400 mt-1">{article.relevance || article.summary}</div>
                          {article.year && (
                            <span className="text-xs text-gray-500 mt-1 inline-block">{article.journal || ''} {article.year}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick reference from CLINICAL_TRIALS database */}
              {(() => {
                const caseTextLower = caseText.toLowerCase();
                const matchedTrials = Object.values(CLINICAL_TRIALS).filter(t =>
                  caseTextLower.includes(t.name.toLowerCase()) ||
                  (caseTextLower.includes('heart failure') && ['PARADIGM-HF', 'DAPA-HF', 'DOSE', 'RALES', 'COPERNICUS'].includes(t.name)) ||
                  (caseTextLower.includes('atrial fibrillation') && ['AFFIRM', 'ARISTOTLE'].includes(t.name)) ||
                  (caseTextLower.includes('diabetes') && ['EMPA-REG'].includes(t.name))
                );
                if (matchedTrials.length === 0) return null;
                return (
                  <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <span>🏆</span> Landmark Trials to Know
                    </h4>
                    <div className="space-y-2">
                      {matchedTrials.map((trial, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 bg-[#0f0f17] rounded">
                          <span className="font-bold text-indigo-400 text-sm">{trial.name}</span>
                          <span className="text-gray-500 text-xs">({trial.year}, {trial.journal})</span>
                          <span className="text-gray-400 text-xs flex-1">{trial.summary}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// KNOWLEDGE PATH - Learn key teaching points
// ============================================================================
function KnowledgePath({ caseText, analysis, onComplete, onBack, onSelectTopic, mastery }) {
  const [teachingPoints, setTeachingPoints] = useState([]);
  const [attendingData, setAttendingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [attendingLoading, setAttendingLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPoint, setExpandedPoint] = useState(null);
  const [expandedAttending, setExpandedAttending] = useState(null);
  const [pointProgress, setPointProgress] = useState({});
  const [showingQuestion, setShowingQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showTopics, setShowTopics] = useState(true);
  const [showAttending, setShowAttending] = useState(true);
  const [showArticles, setShowArticles] = useState(true);

  // Get relevant topics from the curriculum based on case content
  const topics = typeof TOPICS !== 'undefined' ? TOPICS : {};
  const curriculum = typeof CURRICULUM !== 'undefined' ? CURRICULUM : {};
  const relevantTopics = TopicMatcher.matchTopics(caseText, topics);

  // Track if API is configured
  const [apiConfigured, setApiConfigured] = useState(ClaudeAPI.isConfigured());

  // Fetch attending teaching points
  useEffect(() => {
    const fetchAttendingPoints = async () => {
      try {
        const response = await ClaudeAPI.call(
          PROMPTS.ATTENDING_TEACHING_POINTS,
          `Analyze this patient case and provide attending-level teaching points:\n\n${caseText}`,
          { maxTokens: 4096 } // Higher token limit for detailed attending points
        );
        let parsed;
        try {
          parsed = JSON.parse(response);
        } catch {
          const jsonMatch = response.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try {
              parsed = JSON.parse(jsonMatch[0]);
            } catch {
              console.error('Failed to parse attending points JSON');
              parsed = null;
            }
          }
        }
        if (parsed && (parsed.attendingPoints || parsed.recommendedArticles)) {
          setAttendingData(parsed);
        } else {
          console.error('Attending data missing expected fields:', parsed);
        }
      } catch (err) {
        console.error('Error fetching attending points:', err);
      }
      setAttendingLoading(false);
    };

    const isConfigured = ClaudeAPI.isConfigured();
    setApiConfigured(isConfigured);

    if (isConfigured) {
      fetchAttendingPoints();
    } else {
      setAttendingLoading(false);
    }
  }, [caseText]);

  useEffect(() => {
    const fetchTeachingPoints = async () => {
      if (!ClaudeAPI.isConfigured()) {
        setError('API key not configured. Go to settings to add your API key.');
        setLoading(false);
        return;
      }

      try {
        const response = await ClaudeAPI.call(
          PROMPTS.IDENTIFY_TEACHING_POINTS,
          `Analyze this patient case and identify key teaching points. Return ONLY valid JSON, no other text:\n\n${caseText}`,
          { maxTokens: 4096 }
        );
        let parsed;
        try {
          // Try direct parsing first
          parsed = JSON.parse(response);
        } catch {
          // Try to extract JSON from the response if it has extra text
          const jsonMatch = response.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try {
              parsed = JSON.parse(jsonMatch[0]);
            } catch {
              // If still fails, log the response for debugging
              console.error('Failed to parse teaching points. Response:', response.substring(0, 500));
              parsed = null;
            }
          }
        }

        if (parsed && parsed.teachingPoints && parsed.teachingPoints.length > 0) {
          // Add IDs if missing
          const pointsWithIds = parsed.teachingPoints.map((p, i) => ({
            ...p,
            id: p.id || `point_${i}`
          }));
          setTeachingPoints(pointsWithIds);
        } else {
          // Better fallback - try to create teaching points from the raw response
          console.warn('No teachingPoints array found. Creating from response.');
          setTeachingPoints([{
            id: 'fallback_1',
            topic: 'AI-Generated Teaching Points',
            relevance: 'Analysis of this patient case',
            explanation: response || 'Unable to extract teaching points. The AI response could not be parsed.',
            clinicalPearl: 'Review the case details carefully',
            relevantTrials: [],
            testQuestion: null
          }]);
        }
      } catch (err) {
        console.error('Teaching points fetch error:', err);
        setError(err.message);
      }
      setLoading(false);
    };

    fetchTeachingPoints();
  }, [caseText]);

  const handleTestKnowledge = (pointId) => {
    setShowingQuestion(pointId);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answerIndex, point) => {
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === point.testQuestion.correctIndex;
    setPointProgress(prev => ({
      ...prev,
      [point.id]: { tested: true, correct: isCorrect }
    }));
  };

  const completedCount = Object.values(pointProgress).filter(p => p.tested).length;
  const correctCount = Object.values(pointProgress).filter(p => p.correct).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoadingSpinner size="lg" text="Identifying key teaching points..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-4xl mb-4">⚠️</div>
        <p className="text-gray-400">{error}</p>
        <button onClick={onBack} className="mt-4 text-indigo-400 hover:text-indigo-300">Go back</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2">
          <Icons.ArrowLeft /> Back
        </button>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-400">
            Progress: {completedCount}/{teachingPoints.length} tested
          </div>
          {completedCount > 0 && (
            <div className="text-sm text-green-400">
              {correctCount}/{completedCount} correct
            </div>
          )}
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Knowledge Deep Dive</h2>
        <p className="text-gray-400">Learn the essential concepts from this case and related topics</p>
      </div>

      {/* Relevant Curriculum Topics */}
      {relevantTopics.length > 0 && (
        <div className="mb-8">
          <div
            className="flex items-center justify-between mb-4 cursor-pointer"
            onClick={() => setShowTopics(!showTopics)}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">📚</span>
              <h3 className="font-semibold">Relevant Curriculum Topics</h3>
              <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full">
                {relevantTopics.length} topics
              </span>
            </div>
            <Icons.ChevronDown className={`transform transition text-gray-400 ${showTopics ? 'rotate-180' : ''}`} />
          </div>

          {showTopics && (
            <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-xl p-5 border border-indigo-500/30 animate-fadeIn">
              <p className="text-sm text-gray-400 mb-4">
                These curriculum topics are related to this case. Study them to build comprehensive knowledge.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {relevantTopics.map((item, index) => {
                  const topicMastery = mastery?.[item.id];
                  const masteryLevel = getMasteryLevel(topicMastery);
                  const categoryInfo = curriculum[item.topic.category];

                  return (
                    <div
                      key={item.id}
                      onClick={() => onSelectTopic && onSelectTopic(item.id)}
                      className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700 hover:border-indigo-500 cursor-pointer transition group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {index < 3 && (
                              <span className="text-xs bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded">
                                Top Match
                              </span>
                            )}
                          </div>
                          <h4 className="font-medium text-sm group-hover:text-indigo-400 transition truncate">
                            {item.topic.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500">
                              {categoryInfo?.icon} {categoryInfo?.name || item.topic.category}
                            </span>
                          </div>
                          {item.matchedKeywords?.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {item.matchedKeywords.slice(0, 3).map((kw, i) => (
                                <span key={i} className="text-xs bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded">
                                  {kw}
                                </span>
                              ))}
                              {item.matchedKeywords.length > 3 && (
                                <span className="text-xs text-gray-500">+{item.matchedKeywords.length - 3}</span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className={`text-lg ${getMasteryColorClass(masteryLevel)}`}>
                            {masteryLevel.icon}
                          </span>
                          <span className="text-xs text-gray-500">{masteryLevel.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {onSelectTopic && (
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Click any topic to study its full lesson, articles, podcast, and quiz
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* AI-Generated Teaching Points */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="font-semibold">Case-Specific Teaching Points</h3>
        </div>
        <p className="text-sm text-gray-400 mt-1">AI-identified key concepts from this patient presentation</p>
      </div>

      {/* Teaching Points */}
      <div className="space-y-4">
        {teachingPoints.map((point, index) => (
          <div
            key={point.id || index}
            className="bg-[#1a1a24] rounded-xl border border-gray-700 overflow-hidden"
          >
            {/* Point Header */}
            <div
              onClick={() => setExpandedPoint(expandedPoint === point.id ? null : point.id)}
              className="p-4 cursor-pointer hover:bg-gray-800/50 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  pointProgress[point.id]?.correct ? 'bg-green-500 text-white' :
                  pointProgress[point.id]?.tested ? 'bg-red-500 text-white' :
                  'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {pointProgress[point.id]?.correct ? '✓' :
                   pointProgress[point.id]?.tested ? '✗' :
                   index + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{point.topic}</h3>
                  <p className="text-sm text-gray-400">{point.relevance}</p>
                </div>
              </div>
              <Icons.ChevronDown className={`transform transition ${expandedPoint === point.id ? 'rotate-180' : ''}`} />
            </div>

            {/* Expanded Content */}
            {expandedPoint === point.id && (
              <div className="px-4 pb-4 animate-fadeIn">
                <div className="p-4 bg-[#0f0f17] rounded-lg mb-4">
                  <div className="text-gray-300 whitespace-pre-wrap text-sm">
                    {point.explanation}
                  </div>
                </div>

                {/* Clinical Pearl */}
                <div className="p-3 bg-amber-900/20 border border-amber-700 rounded-lg mb-4">
                  <div className="text-amber-400 text-sm font-medium mb-1">💡 Clinical Pearl</div>
                  <p className="text-gray-300 text-sm">{point.clinicalPearl}</p>
                </div>

                {/* Relevant Trials */}
                {point.relevantTrials?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {point.relevantTrials.map((trial, i) => (
                      <span key={i} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">
                        {trial}
                      </span>
                    ))}
                  </div>
                )}

                {/* Test Question */}
                {point.testQuestion ? (
                  showingQuestion === point.id ? (
                    <div className="p-4 bg-[#0f0f17] rounded-lg border border-gray-700">
                      <h4 className="font-medium mb-3">{point.testQuestion.question}</h4>
                      <div className="space-y-2">
                        {point.testQuestion.options?.map((opt, i) => {
                          let btnClass = 'bg-gray-800 border-gray-700 hover:border-indigo-500';
                          if (selectedAnswer !== null) {
                            if (i === point.testQuestion.correctIndex) {
                              btnClass = 'bg-green-900/30 border-green-500';
                            } else if (i === selectedAnswer) {
                              btnClass = 'bg-red-900/30 border-red-500';
                            }
                          }
                          return (
                            <button
                              key={i}
                              onClick={() => selectedAnswer === null && handleAnswer(i, point)}
                              disabled={selectedAnswer !== null}
                              className={`w-full p-3 rounded-lg border text-left transition ${btnClass}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      {selectedAnswer !== null && (
                        <div className={`mt-4 p-3 rounded-lg ${
                          selectedAnswer === point.testQuestion.correctIndex
                            ? 'bg-green-900/30 border border-green-700'
                            : 'bg-red-900/30 border border-red-700'
                        }`}>
                          <p className="text-sm">{point.testQuestion.explanation}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleTestKnowledge(point.id)}
                      className="w-full p-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition flex items-center justify-center gap-2"
                    >
                      <Icons.Brain /> Test My Knowledge
                    </button>
                  )
                ) : (
                  <div className="p-3 bg-gray-800 rounded-lg text-center text-gray-400 text-sm">
                    No quiz available for this topic
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Attending Teaching Points */}
      <div className="mt-10 mb-8">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={() => setShowAttending(!showAttending)}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">👨‍⚕️</span>
            <h3 className="font-semibold">Attending Teaching Points</h3>
            <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded-full">
              Rounds Prep
            </span>
          </div>
          <Icons.ChevronDown className={`transform transition text-gray-400 ${showAttending ? 'rotate-180' : ''}`} />
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Classic questions and pearls an attending might highlight on rounds for this case
        </p>

        {showAttending && (
          <div className="animate-fadeIn">
            {attendingLoading ? (
              <div className="flex items-center justify-center py-8">
                <LoadingSpinner size="md" text="Preparing attending pearls..." />
              </div>
            ) : attendingData?.attendingPoints?.length > 0 ? (
              <div className="space-y-3">
                {attendingData.attendingPoints.map((point, index) => {
                  const categoryIcons = {
                    'Pimp Question': '❓',
                    'Physical Exam Pearl': '🩺',
                    'Workup Insight': '🔬',
                    'Management Nuance': '💊',
                    'Disposition': '🏥'
                  };
                  const categoryColors = {
                    'Pimp Question': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
                    'Physical Exam Pearl': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
                    'Workup Insight': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
                    'Management Nuance': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
                    'Disposition': 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                  };

                  return (
                    <div
                      key={index}
                      className="bg-[#1a1a24] rounded-xl border border-gray-700 overflow-hidden"
                    >
                      <div
                        onClick={() => setExpandedAttending(expandedAttending === index ? null : index)}
                        className="p-4 cursor-pointer hover:bg-gray-800/50 transition"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="text-xl mt-0.5">{categoryIcons[point.category] || '📋'}</span>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs px-2 py-0.5 rounded border ${categoryColors[point.category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                                  {point.category}
                                </span>
                              </div>
                              <h4 className="font-medium">{point.question}</h4>
                              {expandedAttending !== index && (
                                <p className="text-sm text-gray-500 mt-1 line-clamp-1">{point.answer}</p>
                              )}
                            </div>
                          </div>
                          <Icons.ChevronDown className={`transform transition text-gray-400 flex-shrink-0 ${expandedAttending === index ? 'rotate-180' : ''}`} />
                        </div>
                      </div>

                      {expandedAttending === index && (
                        <div className="px-4 pb-4 animate-fadeIn">
                          <div className="p-4 bg-[#0f0f17] rounded-lg mb-3">
                            <p className="text-gray-300 text-sm">{point.answer}</p>
                          </div>

                          <div className="p-3 bg-rose-900/20 border border-rose-700/50 rounded-lg mb-3">
                            <div className="text-rose-400 text-sm font-medium mb-1">⚡ Why It Matters</div>
                            <p className="text-gray-300 text-sm">{point.whyItMatters}</p>
                          </div>

                          {point.commonMistake && (
                            <div className="p-3 bg-amber-900/20 border border-amber-700/50 rounded-lg">
                              <div className="text-amber-400 text-sm font-medium mb-1">⚠️ Common Mistake</div>
                              <p className="text-gray-300 text-sm">{point.commonMistake}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Boards Review Section */}
                {attendingData.boardsReview && (
                  <div className="mt-4 p-4 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-xl border border-violet-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">📝</span>
                      <h4 className="font-semibold text-violet-400">Boards Review</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Topic</div>
                        <p className="text-sm text-gray-300">{attendingData.boardsReview.topic}</p>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">High-Yield Fact</div>
                        <p className="text-sm text-gray-300 font-medium">{attendingData.boardsReview.highYieldFact}</p>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Classic Boards Vignette</div>
                        <p className="text-sm text-gray-400 italic">"{attendingData.boardsReview.clinicalVignette}"</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                {!apiConfigured ? (
                  <p>Configure your API key in settings to see attending teaching points</p>
                ) : (
                  <div>
                    <p className="mb-2">Attending teaching points could not be loaded.</p>
                    <p className="text-xs">The AI may have had trouble processing this case. Try refreshing the page.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Recommended Articles */}
      {attendingData?.recommendedArticles?.length > 0 && (
        <div className="mb-8">
          <div
            className="flex items-center justify-between mb-4 cursor-pointer"
            onClick={() => setShowArticles(!showArticles)}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">📰</span>
              <h3 className="font-semibold">Recommended Reading</h3>
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                {attendingData.recommendedArticles.length} articles
              </span>
            </div>
            <Icons.ChevronDown className={`transform transition text-gray-400 ${showArticles ? 'rotate-180' : ''}`} />
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Key articles, guidelines, and trials relevant to this specific case
          </p>

          {showArticles && (
            <div className="grid gap-3 animate-fadeIn">
              {attendingData.recommendedArticles.map((article, index) => {
                const typeColors = {
                  'Landmark Trial': 'bg-emerald-500/20 text-emerald-400',
                  'Clinical Guideline': 'bg-blue-500/20 text-blue-400',
                  'Review Article': 'bg-purple-500/20 text-purple-400',
                  'Case Report': 'bg-amber-500/20 text-amber-400'
                };
                const typeIcons = {
                  'Landmark Trial': '🏆',
                  'Clinical Guideline': '📋',
                  'Review Article': '📖',
                  'Case Report': '📄'
                };

                return (
                  <div
                    key={index}
                    className="bg-[#1a1a24] rounded-xl p-4 border border-gray-700 hover:border-blue-500/50 transition"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{typeIcons[article.type] || '📄'}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={`text-xs px-2 py-0.5 rounded ${typeColors[article.type] || 'bg-gray-500/20 text-gray-400'}`}>
                            {article.type}
                          </span>
                          {article.year && (
                            <span className="text-xs text-gray-500">{article.year}</span>
                          )}
                        </div>
                        <h4 className="font-medium text-sm mb-1">{article.title}</h4>
                        <p className="text-xs text-gray-500 mb-2">{article.source}</p>
                        <p className="text-sm text-gray-400 mb-2">{article.relevance}</p>
                        <div className="p-2 bg-[#0f0f17] rounded-lg">
                          <div className="text-xs text-blue-400 font-medium mb-1">Key Takeaway</div>
                          <p className="text-sm text-gray-300">{article.keyTakeaway}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Complete Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => onComplete({ teachingPoints, pointProgress, completedCount, correctCount, attendingData })}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition"
        >
          Complete Learning →
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// HISTORY TAKING - Voice-to-voice patient simulation for early med students
// ============================================================================
function HistoryTaking({ caseText, patientData, onComplete, onBack }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const synthRef = useRef(null);

  // Initialize speech recognition and synthesis
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    synthRef.current = window.speechSynthesis;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Speak text using speech synthesis
  const speakText = (text) => {
    if (!voiceEnabled || !synthRef.current) return;

    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;

    // Try to find a natural sounding voice
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Samantha') || v.name.includes('Karen') || v.name.includes('Daniel'));
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  };

  // Toggle voice recognition
  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser. Please use Chrome.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setInputText('');
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Send message to patient
  const sendMessage = async () => {
    if (!inputText.trim() || loading) return;

    const userMessage = inputText.trim();
    setInputText('');
    setMessages(prev => [...prev, { role: 'student', content: userMessage }]);
    setLoading(true);

    try {
      // Build conversation history for context
      const conversationHistory = messages.map(m =>
        `${m.role === 'student' ? 'Medical Student' : 'Patient'}: ${m.content}`
      ).join('\n');

      const prompt = `${conversationHistory}\nMedical Student: ${userMessage}\n\nPatient response:`;

      const response = await ClaudeAPI.call(
        PROMPTS.PATIENT_SIMULATION + `\n\nPATIENT CASE CONTEXT:\n${caseText}`,
        prompt
      );

      const patientResponse = response.trim();
      setMessages(prev => [...prev, { role: 'patient', content: patientResponse }]);

      // Speak the response
      speakText(patientResponse);

    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: `Error: ${error.message}. Please check your API key.`
      }]);
    }

    setLoading(false);
  };

  // Get feedback on history taking
  const getFeedback = async () => {
    setFeedbackLoading(true);
    setShowFeedback(true);

    try {
      const conversationHistory = messages.map(m =>
        `${m.role === 'student' ? 'Medical Student' : 'Patient'}: ${m.content}`
      ).join('\n');

      const response = await ClaudeAPI.call(
        PROMPTS.HISTORY_FEEDBACK,
        `PATIENT CASE:\n${caseText}\n\nCONVERSATION:\n${conversationHistory}`
      );

      let parsed;
      try {
        parsed = JSON.parse(response);
      } catch {
        parsed = {
          grade: 'Satisfactory',
          summary: response,
          strengths: [],
          improvements: [],
          missedQuestions: []
        };
      }
      setFeedback(parsed);

    } catch (error) {
      setFeedback({
        grade: 'Error',
        summary: `Could not generate feedback: ${error.message}`,
        strengths: [],
        improvements: [],
        missedQuestions: []
      });
    }

    setFeedbackLoading(false);
  };

  // Complete and return results
  const handleComplete = () => {
    onComplete({
      messages,
      feedback,
      messageCount: messages.filter(m => m.role === 'student').length
    });
  };

  const gradeColors = {
    'Excellent': 'text-emerald-400 bg-emerald-500/20',
    'Good': 'text-blue-400 bg-blue-500/20',
    'Satisfactory': 'text-amber-400 bg-amber-500/20',
    'Needs Improvement': 'text-orange-400 bg-orange-500/20',
    'Insufficient': 'text-red-400 bg-red-500/20'
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2">
          <Icons.ArrowLeft /> Back
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`px-3 py-1.5 rounded-lg text-sm transition ${
              voiceEnabled ? 'bg-indigo-500/20 text-indigo-400' : 'bg-gray-700 text-gray-400'
            }`}
          >
            {voiceEnabled ? '🔊 Voice On' : '🔇 Voice Off'}
          </button>
          <span className="text-sm text-gray-500">
            {messages.filter(m => m.role === 'student').length} questions asked
          </span>
        </div>
      </div>

      {/* Instructions */}
      {messages.length === 0 && (
        <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-indigo-400 mb-2">🩺 History Taking Practice</h3>
          <p className="text-gray-300 mb-4">
            Practice taking a patient history. The AI will respond as the patient - ask questions to gather
            information about their chief complaint, history of present illness, past medical history,
            medications, allergies, family history, and social history.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="px-2 py-1 bg-gray-700 rounded">🎤 Use voice</span>
            <span>or</span>
            <span className="px-2 py-1 bg-gray-700 rounded">⌨️ Type</span>
            <span>to ask questions</span>
          </div>
        </div>
      )}

      {/* Patient Info Card */}
      <div className="bg-[#1a1a24] rounded-xl p-4 mb-6 border border-gray-700">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
            {patientData.sex === 'F' ? '👩' : '👨'}
          </div>
          <div>
            <div className="font-medium">Patient: {patientData.age}yo {patientData.sex}</div>
            <div className="text-sm text-gray-400">Chief Complaint: {patientData.chiefComplaint}</div>
          </div>
          {isSpeaking && (
            <div className="ml-auto flex items-center gap-2 text-indigo-400">
              <span className="animate-pulse">●</span> Speaking...
            </div>
          )}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="bg-[#1a1a24] rounded-xl border border-gray-700 mb-6 h-96 overflow-y-auto">
        <div className="p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              <div className="text-4xl mb-3">💬</div>
              <p>Start by greeting the patient and asking about their chief complaint</p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'student' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-4 py-3 ${
                  msg.role === 'student'
                    ? 'bg-indigo-600 text-white'
                    : msg.role === 'patient'
                    ? 'bg-gray-700 text-gray-100'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                <div className="text-xs mb-1 opacity-70">
                  {msg.role === 'student' ? 'You' : msg.role === 'patient' ? 'Patient' : 'System'}
                </div>
                <p>{msg.content}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="animate-pulse">●</span>
                  <span className="text-gray-400">Patient is thinking...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      {!showFeedback && (
        <div className="flex gap-3 mb-6">
          <button
            onClick={toggleListening}
            disabled={loading}
            className={`px-4 py-3 rounded-xl transition flex items-center gap-2 ${
              isListening
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            {isListening ? '⏹️ Stop' : '🎤 Speak'}
          </button>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={isListening ? 'Listening...' : 'Type your question to the patient...'}
            disabled={loading || isListening}
            className="flex-1 bg-[#1a1a24] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
          />

          <button
            onClick={sendMessage}
            disabled={!inputText.trim() || loading}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 rounded-xl transition font-medium"
          >
            Send
          </button>
        </div>
      )}

      {/* Get Feedback / Complete Buttons */}
      {!showFeedback && messages.length >= 4 && (
        <div className="flex justify-center gap-4">
          <button
            onClick={getFeedback}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded-lg font-medium transition"
          >
            📝 Get Feedback on My History
          </button>
        </div>
      )}

      {/* Feedback Display */}
      {showFeedback && (
        <div className="bg-[#1a1a24] rounded-xl border border-gray-700 p-6 animate-fadeIn">
          {feedbackLoading ? (
            <div className="text-center py-8">
              <LoadingSpinner />
              <p className="mt-4 text-gray-400">Analyzing your history-taking skills...</p>
            </div>
          ) : feedback && (
            <div className="space-y-6">
              {/* Grade */}
              <div className="text-center">
                <div className={`inline-block px-4 py-2 rounded-lg text-lg font-bold ${gradeColors[feedback.grade] || 'text-gray-400 bg-gray-700'}`}>
                  {feedback.grade}
                </div>
                {feedback.overallScore && (
                  <div className="text-sm text-gray-500 mt-2">Score: {feedback.overallScore}/5</div>
                )}
              </div>

              {/* Summary */}
              <p className="text-gray-300 text-center">{feedback.summary}</p>

              {/* Structure Checklist */}
              {feedback.structureScore && (
                <div className="bg-[#0f0f17] rounded-lg p-4">
                  <h4 className="font-medium mb-3">History Components</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(feedback.structureScore).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className={value ? 'text-emerald-400' : 'text-gray-500'}>
                          {value ? '✓' : '○'}
                        </span>
                        <span className={value ? 'text-gray-300' : 'text-gray-500'}>
                          {key.replace(/([A-Z])/g, ' $1').replace('Asked', '').trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Strengths */}
              {feedback.strengths?.length > 0 && (
                <div>
                  <h4 className="font-medium text-emerald-400 mb-2">✓ Strengths</h4>
                  <ul className="space-y-1">
                    {feedback.strengths.map((s, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Improvements */}
              {feedback.improvements?.length > 0 && (
                <div>
                  <h4 className="font-medium text-amber-400 mb-2">→ Areas for Improvement</h4>
                  <ul className="space-y-1">
                    {feedback.improvements.map((s, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Missed Questions */}
              {feedback.missedQuestions?.length > 0 && (
                <div>
                  <h4 className="font-medium text-red-400 mb-2">✗ Questions You Should Have Asked</h4>
                  <ul className="space-y-1">
                    {feedback.missedQuestions.map((s, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Complete Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleComplete}
                  className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// REPORTER - Practice oral case presentations with AI feedback
// ============================================================================
function Reporter({ caseText, patientData, onComplete, onBack }) {
  const [mode, setMode] = useState('intro'); // intro, recording, transcribing, typing, feedback
  const [presentationText, setPresentationText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [audioUrl]);

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setMode('recording');
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (error) {
      alert('Could not access microphone. Please check permissions.');
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  // Transcribe audio using browser speech recognition
  const transcribeAudio = async () => {
    setMode('transcribing');

    // For now, we'll prompt the user to type or re-record with live transcription
    // Full audio transcription would require a backend service
    setTimeout(() => {
      setMode('typing');
    }, 1000);
  };

  // Submit presentation for feedback
  const submitPresentation = async () => {
    if (!presentationText.trim()) return;

    setLoading(true);
    setMode('feedback');

    try {
      const response = await ClaudeAPI.call(
        PROMPTS.PRESENTATION_FEEDBACK,
        `ORIGINAL PATIENT CASE:\n${caseText}\n\nSTUDENT'S ORAL PRESENTATION:\n${presentationText}`
      );

      let parsed;
      try {
        parsed = JSON.parse(response);
      } catch {
        parsed = {
          grade: 'Satisfactory',
          summary: response,
          strengths: [],
          improvements: []
        };
      }
      setFeedback(parsed);

    } catch (error) {
      setFeedback({
        grade: 'Error',
        summary: `Could not generate feedback: ${error.message}`,
        strengths: [],
        improvements: []
      });
    }

    setLoading(false);
  };

  // Format time for display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const gradeColors = {
    'Excellent': 'text-emerald-400 bg-emerald-500/20',
    'Good': 'text-blue-400 bg-blue-500/20',
    'Satisfactory': 'text-amber-400 bg-amber-500/20',
    'Needs Improvement': 'text-orange-400 bg-orange-500/20',
    'Insufficient': 'text-red-400 bg-red-500/20'
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2">
          <Icons.ArrowLeft /> Back
        </button>
        <h2 className="text-xl font-bold">📣 Oral Presentation Practice</h2>
      </div>

      {/* Intro Mode */}
      {mode === 'intro' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Practice Your Presentation</h3>
            <p className="text-gray-300 mb-4">
              Practice presenting this case as you would to an attending physician on rounds.
              Record yourself speaking or type out your presentation, then get AI feedback on:
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• <strong>Structure</strong> - One-liner, HPI, pertinents, assessment/plan</li>
              <li>• <strong>Conciseness</strong> - Key information without unnecessary detail</li>
              <li>• <strong>Clinical reasoning</strong> - Clear diagnostic thinking</li>
              <li>• <strong>Organization</strong> - Logical flow and problem-based plan</li>
            </ul>
          </div>

          {/* Patient Summary */}
          <div className="bg-[#1a1a24] rounded-xl p-4 border border-gray-700">
            <h4 className="font-medium mb-2">Patient Summary</h4>
            <p className="text-gray-400 text-sm">
              {patientData.age}yo {patientData.sex} presenting with {patientData.chiefComplaint}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {patientData.problems?.map((p, i) => (
                <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs">{p}</span>
              ))}
            </div>
          </div>

          {/* Mode Selection */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={startRecording}
              className="bg-[#1a1a24] rounded-xl p-6 border-2 border-gray-700 hover:border-indigo-500 transition group"
            >
              <div className="text-4xl mb-3">🎙️</div>
              <h4 className="font-semibold group-hover:text-indigo-400 transition">Record Audio</h4>
              <p className="text-sm text-gray-500 mt-1">Speak your presentation aloud</p>
            </button>

            <button
              onClick={() => setMode('typing')}
              className="bg-[#1a1a24] rounded-xl p-6 border-2 border-gray-700 hover:border-emerald-500 transition group"
            >
              <div className="text-4xl mb-3">⌨️</div>
              <h4 className="font-semibold group-hover:text-emerald-400 transition">Type Presentation</h4>
              <p className="text-sm text-gray-500 mt-1">Write out your presentation</p>
            </button>
          </div>
        </div>
      )}

      {/* Recording Mode */}
      {mode === 'recording' && (
        <div className="text-center py-12 animate-fadeIn">
          <div className="text-6xl mb-4 animate-pulse">🎙️</div>
          <div className="text-3xl font-mono mb-4 text-red-400">{formatTime(recordingTime)}</div>
          <p className="text-gray-400 mb-8">Recording your presentation...</p>

          <div className="flex justify-center gap-4">
            <button
              onClick={stopRecording}
              className="px-8 py-3 bg-red-600 hover:bg-red-500 rounded-lg font-medium transition"
            >
              ⏹️ Stop Recording
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Present the case as if you were talking to your attending on rounds
          </p>
        </div>
      )}

      {/* After Recording */}
      {mode === 'transcribing' && (
        <div className="text-center py-12 animate-fadeIn">
          <LoadingSpinner />
          <p className="mt-4 text-gray-400">Processing recording...</p>
        </div>
      )}

      {/* Typing Mode (or after recording) */}
      {mode === 'typing' && (
        <div className="space-y-6 animate-fadeIn">
          {audioUrl && (
            <div className="bg-[#1a1a24] rounded-xl p-4 border border-gray-700">
              <h4 className="font-medium mb-3">Your Recording ({formatTime(recordingTime)})</h4>
              <audio controls src={audioUrl} className="w-full" />
              <p className="text-sm text-gray-500 mt-2">
                Listen to your recording and type out your presentation below, or re-record.
              </p>
              <button
                onClick={() => {
                  setAudioBlob(null);
                  setAudioUrl(null);
                  setMode('intro');
                }}
                className="mt-2 text-sm text-indigo-400 hover:text-indigo-300"
              >
                ← Re-record
              </button>
            </div>
          )}

          <div>
            <label className="block font-medium mb-2">Your Case Presentation</label>
            <textarea
              value={presentationText}
              onChange={(e) => setPresentationText(e.target.value)}
              placeholder={`Example structure:

"This is a [age] year-old [sex] with a history of [PMH] who presents with [duration] of [chief complaint].

The patient reports that [HPI - chronological story]...

Review of systems is notable for [pertinent positives/negatives]...

On exam, vital signs show [vitals]. Physical exam is notable for [key findings]...

Labs/imaging show [key results]...

In summary, this is a patient with [assessment]. The differential includes [list]. I think the most likely diagnosis is [leading diagnosis] because [reasoning].

For the plan, I would recommend [organized by problem]..."`}
              rows={16}
              className="w-full bg-[#1a1a24] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition resize-none"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>{presentationText.split(/\s+/).filter(w => w).length} words</span>
              <span>Aim for 2-3 minutes when spoken aloud</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setMode('intro')}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition"
            >
              ← Back
            </button>
            <button
              onClick={submitPresentation}
              disabled={!presentationText.trim()}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 rounded-lg font-medium transition"
            >
              Get Feedback →
            </button>
          </div>
        </div>
      )}

      {/* Feedback Mode */}
      {mode === 'feedback' && (
        <div className="space-y-6 animate-fadeIn">
          {loading ? (
            <div className="text-center py-12">
              <LoadingSpinner />
              <p className="mt-4 text-gray-400">Analyzing your presentation...</p>
            </div>
          ) : feedback && (
            <div className="bg-[#1a1a24] rounded-xl border border-gray-700 p-6">
              {/* Grade */}
              <div className="text-center mb-6">
                <div className={`inline-block px-4 py-2 rounded-lg text-lg font-bold ${gradeColors[feedback.grade] || 'text-gray-400 bg-gray-700'}`}>
                  {feedback.grade}
                </div>
                {feedback.overallScore && (
                  <div className="text-sm text-gray-500 mt-2">Score: {feedback.overallScore}/5</div>
                )}
              </div>

              {/* Summary */}
              <p className="text-gray-300 text-center mb-6">{feedback.summary}</p>

              {/* Structure Assessment */}
              {feedback.structureAssessment && (
                <div className="bg-[#0f0f17] rounded-lg p-4 mb-6">
                  <h4 className="font-medium mb-3">Presentation Structure</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(feedback.structureAssessment).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className={value ? 'text-emerald-400' : 'text-gray-500'}>
                          {value ? '✓' : '○'}
                        </span>
                        <span className={value ? 'text-gray-300' : 'text-gray-500'}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Model One-liner */}
              {feedback.modelOneLiner && (
                <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4 mb-6">
                  <h4 className="font-medium text-indigo-400 mb-2">Model One-Liner</h4>
                  <p className="text-gray-300 text-sm italic">"{feedback.modelOneLiner}"</p>
                </div>
              )}

              {/* Strengths */}
              {feedback.strengths?.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-emerald-400 mb-2">✓ Strengths</h4>
                  <ul className="space-y-1">
                    {feedback.strengths.map((s, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Improvements */}
              {feedback.improvements?.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-amber-400 mb-2">→ Areas for Improvement</h4>
                  <ul className="space-y-1">
                    {feedback.improvements.map((s, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Organization Tips */}
              {feedback.organizationTips && (
                <div className="mb-4">
                  <h4 className="font-medium text-blue-400 mb-2">📋 Organization Tips</h4>
                  <p className="text-gray-300 text-sm">{feedback.organizationTips}</p>
                </div>
              )}

              {/* Clinical Reasoning Feedback */}
              {feedback.clinicalReasoningFeedback && (
                <div className="mb-6">
                  <h4 className="font-medium text-purple-400 mb-2">🧠 Clinical Reasoning</h4>
                  <p className="text-gray-300 text-sm">{feedback.clinicalReasoningFeedback}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 pt-4 border-t border-gray-700">
                <button
                  onClick={() => {
                    setMode('typing');
                    setFeedback(null);
                  }}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition"
                >
                  ✏️ Revise Presentation
                </button>
                <button
                  onClick={() => onComplete({ presentationText, feedback })}
                  className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// COMPLETION SUMMARY - Shows after completing any learning path
// ============================================================================
function CompletionSummary({ pathType, results, onSelectPath, onQuiz, onSimulator, onChat, onNewCase }) {
  // Path type configurations
  const pathConfig = {
    reasoning: { icon: '🧠', title: 'Reasoning Exercise Complete!', color: 'purple' },
    knowledge: { icon: '📚', title: 'Knowledge Review Complete!', color: 'emerald' },
    history: { icon: '🩺', title: 'History Taking Complete!', color: 'blue' },
    reporter: { icon: '📣', title: 'Presentation Practice Complete!', color: 'amber' },
    rounds: { icon: '📋', title: 'Rounds Prep Complete!', color: 'teal' },
    dynamicSim: { icon: '🔀', title: 'Simulation Complete!', color: 'orange' }
  };

  const config = pathConfig[pathType] || pathConfig.knowledge;

  // Render stats based on path type
  const renderStats = () => {
    switch (pathType) {
      case 'reasoning':
        return (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-green-400">{results.stepsCompleted?.length || 0}</div>
              <div className="text-sm text-gray-500">Steps Completed</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-gray-400">{results.stepsSkipped?.length || 0}</div>
              <div className="text-sm text-gray-500">Steps Skipped</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-indigo-400">3</div>
              <div className="text-sm text-gray-500">Total Steps</div>
            </div>
          </div>
        );
      case 'knowledge':
        return (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-emerald-400">{results.teachingPoints?.length || 0}</div>
              <div className="text-sm text-gray-500">Teaching Points</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-indigo-400">{results.completedCount || 0}</div>
              <div className="text-sm text-gray-500">Questions Tested</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-green-400">{results.correctCount || 0}</div>
              <div className="text-sm text-gray-500">Correct Answers</div>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-blue-400">{results.messageCount || 0}</div>
              <div className="text-sm text-gray-500">Questions Asked</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-emerald-400">{results.feedback?.grade || 'N/A'}</div>
              <div className="text-sm text-gray-500">Performance</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-indigo-400">{results.feedback?.overallScore || '-'}/5</div>
              <div className="text-sm text-gray-500">Score</div>
            </div>
          </div>
        );
      case 'reporter':
        return (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-amber-400">{results.presentationText?.split(/\s+/).filter(w => w).length || 0}</div>
              <div className="text-sm text-gray-500">Words</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-emerald-400">{results.feedback?.grade || 'N/A'}</div>
              <div className="text-sm text-gray-500">Performance</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-indigo-400">{results.feedback?.overallScore || '-'}/5</div>
              <div className="text-sm text-gray-500">Score</div>
            </div>
          </div>
        );
      case 'rounds':
        return (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-teal-400">{results.teachingPoints?.length || 0}</div>
              <div className="text-sm text-gray-500">Teaching Points</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-indigo-400">{results.attendingData?.attendingPoints?.length || 0}</div>
              <div className="text-sm text-gray-500">Attending Pearls</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-green-400">✓</div>
              <div className="text-sm text-gray-500">Prepared</div>
            </div>
          </div>
        );
      case 'dynamicSim':
        return (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-orange-400">{results.score || 0}/{results.maxScore || 0}</div>
              <div className="text-sm text-gray-500">Score</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-green-400">{results.history?.filter(h => h.quality === 'optimal').length || 0}</div>
              <div className="text-sm text-gray-500">Optimal Choices</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-indigo-400">{results.history?.length || 0}</div>
              <div className="text-sm text-gray-500">Steps</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{config.icon}</div>
        <h2 className="text-2xl font-bold mb-2">{config.title}</h2>
        <p className="text-gray-400">Great work on this case</p>
      </div>

      {/* Stats */}
      <div className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700 mb-6">
        <h3 className="font-semibold mb-4">Session Summary</h3>
        {renderStats()}
      </div>

      {/* Next Actions */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-300">Continue Learning</h3>

        {/* Primary modes */}
        {pathType !== 'rounds' && (
          <button
            onClick={() => onSelectPath('rounds')}
            className="w-full p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-teal-500 transition flex items-center gap-4 text-left"
          >
            <span className="text-2xl">📋</span>
            <div>
              <div className="font-medium">Prepare for Rounds</div>
              <div className="text-sm text-gray-400">Teaching points, key studies, and clinical pearls</div>
            </div>
          </button>
        )}

        {pathType !== 'dynamicSim' && (
          <button
            onClick={() => onSelectPath('dynamicSim')}
            className="w-full p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-orange-500 transition flex items-center gap-4 text-left"
          >
            <span className="text-2xl">🔀</span>
            <div>
              <div className="font-medium">Simulate Variations</div>
              <div className="text-sm text-gray-400">AI-generated scenarios from this case</div>
            </div>
          </button>
        )}

        {/* Clinical Skills section for those who haven't done them */}
        {pathType !== 'history' && (
          <button
            onClick={() => onSelectPath('history')}
            className="w-full p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-blue-500 transition flex items-center gap-4 text-left"
          >
            <span className="text-2xl">🩺</span>
            <div>
              <div className="font-medium">Practice History Taking</div>
              <div className="text-sm text-gray-400">Voice-to-voice patient simulation</div>
            </div>
          </button>
        )}

        {pathType !== 'reporter' && (
          <button
            onClick={() => onSelectPath('reporter')}
            className="w-full p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-amber-500 transition flex items-center gap-4 text-left"
          >
            <span className="text-2xl">📣</span>
            <div>
              <div className="font-medium">Practice Oral Presentation</div>
              <div className="text-sm text-gray-400">Record or type your presentation for feedback</div>
            </div>
          </button>
        )}

        {pathType !== 'reasoning' && (
          <button
            onClick={() => onSelectPath('reasoning')}
            className="w-full p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-purple-500 transition flex items-center gap-4 text-left"
          >
            <span className="text-2xl">🧠</span>
            <div>
              <div className="font-medium">Try Clinical Reasoning</div>
              <div className="text-sm text-gray-400">Practice the diagnostic reasoning process</div>
            </div>
          </button>
        )}

        {pathType !== 'knowledge' && (
          <button
            onClick={() => onSelectPath('knowledge')}
            className="w-full p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-emerald-500 transition flex items-center gap-4 text-left"
          >
            <span className="text-2xl">📚</span>
            <div>
              <div className="font-medium">Try Knowledge Path</div>
              <div className="text-sm text-gray-400">Learn key teaching points from this case</div>
            </div>
          </button>
        )}

        <button
          onClick={onQuiz}
          className="w-full p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-indigo-500 transition flex items-center gap-4 text-left"
        >
          <span className="text-2xl">❓</span>
          <div>
            <div className="font-medium">Take AI Quiz</div>
            <div className="text-sm text-gray-400">Test your knowledge with case-specific questions</div>
          </div>
        </button>

        <button
          onClick={onSimulator}
          className="w-full p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-teal-500 transition flex items-center gap-4 text-left"
        >
          <span className="text-2xl">🏥</span>
          <div>
            <div className="font-medium">Clinical Simulator</div>
            <div className="text-sm text-gray-400">Practice clinical decisions with AI feedback</div>
          </div>
        </button>

        <button
          onClick={onChat}
          className="w-full p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-cyan-500 transition flex items-center gap-4 text-left"
        >
          <span className="text-2xl">💬</span>
          <div>
            <div className="font-medium">Ask AI</div>
            <div className="text-sm text-gray-400">Chat with AI for deeper understanding</div>
          </div>
        </button>

        <button
          onClick={onNewCase}
          className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition flex items-center gap-4 text-left"
        >
          <span className="text-2xl">📝</span>
          <div>
            <div className="font-medium">New Case</div>
            <div className="text-sm text-gray-400">Start fresh with a different patient</div>
          </div>
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// AI CHAT INTERFACE
// ============================================================================
function AIChatInterface({ caseText, context, initialPrompt }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (initialPrompt && messages.length === 0) {
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const systemPrompt = `${PROMPTS.TEACHING_EXPLANATION}

PATIENT CASE:
${caseText}

CURRENT CONTEXT: ${context || 'General case discussion'}

Remember to:
- Always relate explanations back to THIS specific patient
- Use clinical pearls and practical tips
- Reference landmark trials when relevant
- Ask follow-up questions to deepen understanding`;

      const response = await ClaudeAPI.call(systemPrompt, text);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}. Please check your API key in settings.`, isError: true }]);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-[#1a1a24] rounded-xl border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2 text-indigo-400">
          <Icons.Brain />
          <span className="font-semibold">AI Teaching Assistant</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Ask questions about this case or request explanations</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <Icons.Sparkles />
            <p className="mt-2">Ask me anything about this case!</p>
            <div className="mt-4 space-y-2">
              <button onClick={() => handleSend("What are the key teaching points from this case?")} className="block w-full text-left px-3 py-2 bg-[#0f0f17] rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition">
                "What are the key teaching points?"
              </button>
              <button onClick={() => handleSend("Explain the pathophysiology behind this presentation.")} className="block w-full text-left px-3 py-2 bg-[#0f0f17] rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition">
                "Explain the pathophysiology"
              </button>
              <button onClick={() => handleSend("What landmark trials are relevant here?")} className="block w-full text-left px-3 py-2 bg-[#0f0f17] rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition">
                "What trials are relevant?"
              </button>
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${
              msg.role === 'user'
                ? 'bg-indigo-600 text-white'
                : msg.isError
                  ? 'bg-red-900/30 border border-red-700 text-red-300'
                  : 'bg-[#0f0f17] text-gray-300'
            }`}>
              <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#0f0f17] rounded-lg p-3">
              <LoadingSpinner size="sm" text="Thinking..." />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a question about this case..."
            className="flex-1 bg-[#0f0f17] border border-gray-700 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg transition"
          >
            <Icons.Send />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// AI-POWERED QUIZ QUESTION
// ============================================================================
function AIQuizQuestion({ question, caseText, onAnswer, onNext, answered, selectedAnswer, onAskAI }) {
  const [aiExplanation, setAiExplanation] = useState(null);
  const [loadingExplanation, setLoadingExplanation] = useState(false);

  const getAIExplanation = async () => {
    setLoadingExplanation(true);
    try {
      const prompt = `The learner just answered a question about this patient case.

Question: ${question.question}
Their answer: ${question.options[selectedAnswer]}
Correct answer: ${question.options[question.correctIndex]}
They got it ${selectedAnswer === question.correctIndex ? 'CORRECT' : 'WRONG'}.

Provide a detailed, educational explanation that:
1. Explains WHY the correct answer is right
2. Explains WHY the other options are wrong or suboptimal
3. Relates this to the specific patient in the case
4. Includes a memorable clinical pearl
5. Mentions any relevant trials or guidelines

Be encouraging but thorough.`;

      const response = await ClaudeAPI.call(PROMPTS.TEACHING_EXPLANATION + `\n\nPATIENT CASE:\n${caseText}`, prompt);
      setAiExplanation(response);
    } catch (error) {
      setAiExplanation(`Error getting AI explanation: ${error.message}`);
    }
    setLoadingExplanation(false);
  };

  useEffect(() => {
    if (answered && !aiExplanation && ClaudeAPI.isConfigured()) {
      getAIExplanation();
    }
  }, [answered]);

  const categoryIcons = { 'Diagnosis': '🔍', 'Management': '💊', 'Pharmacology': '💉', 'Clinical Reasoning': '🧠' };

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">
          {categoryIcons[question.category] || '📚'} {question.category}
          <span className="px-2 py-0.5 bg-indigo-500/30 rounded text-xs">AI Generated</span>
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>

      {question.context && (
        <div className="mb-6 p-4 bg-gray-800/50 rounded-lg text-gray-300 text-sm">
          📋 {question.context}
        </div>
      )}

      <div className="space-y-3 mb-6">
        {question.options.map((opt, i) => {
          let btnClass = 'bg-[#1a1a24] border-gray-700 hover:border-indigo-500';
          if (answered) {
            if (i === question.correctIndex) btnClass = 'bg-green-900/30 border-green-500';
            else if (i === selectedAnswer) btnClass = 'bg-red-900/30 border-red-500';
            else btnClass = 'bg-[#1a1a24] border-gray-700 opacity-50';
          }

          return (
            <button
              key={i}
              onClick={() => !answered && onAnswer(i)}
              disabled={answered}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all flex items-start gap-3 ${btnClass}`}
            >
              <span className="flex-1">{opt}</span>
              {answered && i === question.correctIndex && <span className="text-green-400">✓</span>}
              {answered && i === selectedAnswer && i !== question.correctIndex && <span className="text-red-400">✗</span>}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="animate-fadeIn space-y-4">
          <div className={`p-4 rounded-lg ${selectedAnswer === question.correctIndex ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'}`}>
            <div className={`font-semibold mb-2 ${selectedAnswer === question.correctIndex ? 'text-green-400' : 'text-red-400'}`}>
              {selectedAnswer === question.correctIndex ? '✓ Correct!' : '✗ Not quite'}
            </div>
          </div>

          {/* AI Explanation */}
          <div className="p-4 rounded-lg bg-indigo-900/20 border border-indigo-700">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-3">
              <Icons.Sparkles /> AI Teaching Explanation
            </div>
            {loadingExplanation ? (
              <LoadingSpinner size="sm" text="Generating personalized explanation..." />
            ) : aiExplanation ? (
              <div className="text-gray-300 text-sm whitespace-pre-wrap">{aiExplanation}</div>
            ) : (
              <p className="text-gray-400 text-sm">Configure API key to get AI explanations</p>
            )}
          </div>

          {question.keyTakeaway && (
            <div className="p-4 rounded-lg bg-amber-900/30 border border-amber-700">
              <div className="text-amber-400 font-semibold text-sm mb-1">💡 Key Takeaway</div>
              <p className="text-gray-300 text-sm">{question.keyTakeaway}</p>
            </div>
          )}

          <div className="flex gap-3">
            <button onClick={onAskAI} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition flex items-center gap-2">
              <Icons.Brain /> Ask AI More
            </button>
            <button onClick={onNext} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
              Continue →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// AI CLINICAL SIMULATOR
// ============================================================================
function AIClinicalSimulator({ scenario, caseText, onComplete, onBack }) {
  const [step, setStep] = useState(0);
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [aiFeedback, setAiFeedback] = useState(null);
  const [loadingFeedback, setLoadingFeedback] = useState(false);

  const currentStep = scenario.steps[step];
  const isComplete = step >= scenario.steps.length;

  const handleChoice = async (index) => {
    if (selectedChoice !== null) return;

    setSelectedChoice(index);
    setLoadingFeedback(true);

    const choice = currentStep.choices[index];

    try {
      const prompt = `SIMULATION STEP: ${currentStep.time}

PATIENT STATUS:
- Vitals: BP ${currentStep.vitals.bp}, HR ${currentStep.vitals.hr}, RR ${currentStep.vitals.rr}, SpO2 ${currentStep.vitals.spo2}
- Exam: ${currentStep.findings}

SITUATION: ${currentStep.narrative}

THE LEARNER CHOSE: "${choice.text}"

This choice is generally considered: ${choice.baseQuality}

Available options were:
${currentStep.choices.map((c, i) => `${i + 1}. ${c.text} (${c.baseQuality})`).join('\n')}

Provide detailed educational feedback on their choice. Explain the clinical reasoning, what would happen to the patient, and what they should learn from this decision.`;

      const response = await ClaudeAPI.call(
        PROMPTS.SIMULATOR_FEEDBACK + `\n\nORIGINAL PATIENT CASE:\n${caseText}`,
        prompt
      );

      // Try to parse JSON, fallback to text
      let feedback;
      try {
        feedback = JSON.parse(response);
      } catch {
        feedback = {
          quality: choice.baseQuality,
          feedback: response,
          outcome: 'See feedback above for patient outcome.',
          teachingPoint: ''
        };
      }

      setAiFeedback(feedback);

      const scoreChange = feedback.quality === 'optimal' ? 10 : feedback.quality === 'suboptimal' ? 3 : -5;
      setScore(prev => prev + scoreChange);
      setHistory(prev => [...prev, { time: currentStep.time, action: choice.text, quality: feedback.quality }]);

    } catch (error) {
      setAiFeedback({
        quality: choice.baseQuality,
        feedback: `Error getting AI feedback: ${error.message}. Based on guidelines, this choice is ${choice.baseQuality}.`,
        outcome: 'Unable to generate detailed outcome.',
        teachingPoint: ''
      });
    }

    setLoadingFeedback(false);
  };

  const handleNext = () => {
    setSelectedChoice(null);
    setAiFeedback(null);
    setStep(prev => prev + 1);
  };

  if (isComplete) {
    const maxScore = scenario.steps.length * 10;
    const percentage = Math.round((Math.max(0, score) / maxScore) * 100);

    return (
      <div className="text-center animate-fadeIn max-w-2xl mx-auto">
        <div className="text-6xl mb-4">{percentage >= 70 ? '🎉' : '📚'}</div>
        <h2 className="text-2xl font-bold mb-2">Simulation Complete!</h2>

        <div className="grid grid-cols-3 gap-4 my-8">
          <div className="bg-[#1a1a24] p-4 rounded-lg">
            <div className="text-2xl font-bold text-indigo-400">{score}</div>
            <div className="text-xs text-gray-500">Points</div>
          </div>
          <div className="bg-[#1a1a24] p-4 rounded-lg">
            <div className="text-2xl font-bold text-gray-300">{maxScore}</div>
            <div className="text-xs text-gray-500">Maximum</div>
          </div>
          <div className="bg-[#1a1a24] p-4 rounded-lg">
            <div className={`text-2xl font-bold ${percentage >= 70 ? 'text-green-400' : 'text-amber-400'}`}>{percentage}%</div>
            <div className="text-xs text-gray-500">Score</div>
          </div>
        </div>

        <div className="text-left bg-[#1a1a24] rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-3">Decision History</h3>
          {history.map((h, i) => (
            <div key={i} className="flex items-start gap-3 mb-2 text-sm">
              <span className={`px-2 py-0.5 rounded text-xs ${
                h.quality === 'optimal' ? 'bg-green-500/20 text-green-400' :
                h.quality === 'suboptimal' ? 'bg-amber-500/20 text-amber-400' :
                'bg-red-500/20 text-red-400'
              }`}>{h.quality}</span>
              <span className="text-gray-400">{h.action}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button onClick={() => { setStep(0); setScore(0); setHistory([]); }} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">
            Try Again
          </button>
          <button onClick={onComplete} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
            Continue Learning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="mb-4">
          <button onClick={onBack} className="text-gray-400 hover:text-white text-sm mb-4 flex items-center gap-2">
            <Icons.ArrowLeft /> Back to Overview
          </button>
          <h2 className="text-xl font-bold">{scenario.title}</h2>
          <p className="text-sm text-gray-400">Step {step + 1} of {scenario.steps.length}</p>
        </div>

        <div className="bg-[#1a1a24] rounded-xl p-6 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 mb-4">
            🕐 {currentStep.time}
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{currentStep.narrative}</p>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {Object.entries(currentStep.vitals).map(([key, value]) => {
              const isCritical = (key === 'bp' && (parseInt(value) > 160 || parseInt(value) < 90)) ||
                               (key === 'hr' && parseInt(value) > 100) ||
                               (key === 'spo2' && parseInt(value.replace('%', '')) < 92);
              return (
                <div key={key} className="bg-[#0f0f17] p-3 rounded-lg text-center">
                  <div className={`text-lg font-semibold ${isCritical ? 'text-red-400' : ''}`}>{value}</div>
                  <div className="text-xs text-gray-500 uppercase">{key}</div>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-[#0f0f17] rounded-lg text-sm text-gray-400">
            <strong className="text-gray-300">Exam:</strong> {currentStep.findings}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-gray-400 mb-3">What do you do?</div>
          <div className="space-y-3">
            {currentStep.choices.map((choice, i) => {
              let btnClass = 'bg-[#1a1a24] border-gray-700 hover:border-indigo-500';
              if (selectedChoice !== null) {
                if (i === selectedChoice) {
                  const q = aiFeedback?.quality || choice.baseQuality;
                  btnClass = q === 'optimal' ? 'bg-green-900/30 border-green-500' :
                            q === 'suboptimal' ? 'bg-amber-900/30 border-amber-500' :
                            'bg-red-900/30 border-red-500';
                } else {
                  btnClass = 'bg-[#1a1a24] border-gray-700 opacity-50';
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleChoice(i)}
                  disabled={selectedChoice !== null}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${btnClass}`}
                >
                  {choice.text}
                </button>
              );
            })}
          </div>
        </div>

        {(loadingFeedback || aiFeedback) && (
          <div className="mt-6 p-6 bg-[#1a1a24] rounded-xl animate-fadeIn">
            {loadingFeedback ? (
              <LoadingSpinner text="AI is analyzing your decision..." />
            ) : aiFeedback && (
              <>
                <div className={`font-semibold mb-3 flex items-center gap-2 ${
                  aiFeedback.quality === 'optimal' ? 'text-green-400' :
                  aiFeedback.quality === 'suboptimal' ? 'text-amber-400' :
                  'text-red-400'
                }`}>
                  <Icons.Sparkles />
                  {aiFeedback.quality === 'optimal' ? '✓ Optimal Choice' :
                   aiFeedback.quality === 'suboptimal' ? '⚠️ Suboptimal' :
                   '✗ Poor Choice'}
                </div>
                <div className="text-gray-300 mb-4 whitespace-pre-wrap text-sm">{aiFeedback.feedback}</div>
                {aiFeedback.outcome && (
                  <div className="text-gray-400 mb-4 text-sm"><strong>Outcome:</strong> {aiFeedback.outcome}</div>
                )}
                {aiFeedback.teachingPoint && (
                  <div className="p-3 bg-amber-900/30 border border-amber-700 rounded-lg text-sm text-amber-300">
                    💡 {aiFeedback.teachingPoint}
                  </div>
                )}
                <button onClick={handleNext} className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
                  {step < scenario.steps.length - 1 ? 'Continue →' : 'See Results →'}
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="bg-[#1a1a24] rounded-xl p-4">
          <div className="text-xs text-gray-500 uppercase mb-2">Performance</div>
          <div className="text-3xl font-bold text-indigo-400">{score}</div>
          <div className="text-sm text-gray-500">Clinical Score</div>
        </div>

        <div className="bg-[#1a1a24] rounded-xl p-4">
          <div className="text-xs text-gray-500 uppercase mb-3">Decision History</div>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {history.length === 0 ? (
              <p className="text-sm text-gray-500">No decisions yet</p>
            ) : (
              history.map((h, i) => (
                <div key={i} className="text-sm">
                  <div className="text-gray-500">{h.time.split(' - ')[0]}</div>
                  <div className={`${
                    h.quality === 'optimal' ? 'text-green-400' :
                    h.quality === 'suboptimal' ? 'text-amber-400' :
                    'text-red-400'
                  }`}>
                    {h.action.substring(0, 40)}...
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// DYNAMIC SIMULATOR VIEW - AI-generated scenarios from the patient case
// ============================================================================
function DynamicSimulatorView({ caseText, analysis, onComplete, onBack }) {
  const [phase, setPhase] = useState('generating'); // generating | selecting | playing | complete
  const [scenarios, setScenarios] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [currentStep, setCurrentStep] = useState(null);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [feedbackData, setFeedbackData] = useState(null);
  const [error, setError] = useState(null);

  // Phase 1: Generate scenarios
  useEffect(() => {
    const generateScenarios = async () => {
      try {
        const response = await ClaudeAPI.call(
          PROMPTS.GENERATE_SIMULATION_SCENARIOS,
          `Generate simulation scenarios for this patient case:\n\n${caseText}`
        );
        let parsed;
        try {
          parsed = JSON.parse(response);
        } catch {
          const jsonMatch = response.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try { parsed = JSON.parse(jsonMatch[0]); } catch { parsed = null; }
          }
        }
        if (parsed?.scenarios?.length > 0) {
          setScenarios(parsed.scenarios);
          setPhase('selecting');
        } else {
          setError('Failed to generate scenarios. Please try again.');
        }
      } catch (err) {
        setError(err.message);
      }
    };
    generateScenarios();
  }, [caseText]);

  // Generate a simulation step
  const generateStep = async (scenario, stepNum, prevHistory) => {
    setLoading(true);
    setFeedbackData(null);
    try {
      const historyContext = prevHistory.length > 0
        ? `\n\nPrevious decisions:\n${prevHistory.map(h => `- Step ${h.step}: ${h.action} (${h.quality})`).join('\n')}`
        : '';

      const response = await ClaudeAPI.call(
        PROMPTS.DYNAMIC_SIMULATION_STEP,
        `Patient Case:\n${caseText}\n\nScenario: ${scenario.title} - ${scenario.hook}\nStep Number: ${stepNum + 1}${historyContext}\n\nGenerate the next simulation step.`
      );

      let parsed;
      try {
        parsed = JSON.parse(response);
      } catch {
        const jsonMatch = response.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          try { parsed = JSON.parse(jsonMatch[0]); } catch { parsed = null; }
        }
      }

      if (parsed) {
        setCurrentStep(parsed);
        setPhase('playing');
      } else {
        setError('Failed to generate simulation step.');
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Handle scenario selection
  const handleSelectScenario = (scenario) => {
    setSelectedScenario(scenario);
    setStepNumber(0);
    setHistory([]);
    setScore(0);
    generateStep(scenario, 0, []);
  };

  // Handle choice selection
  const handleChoice = async (choice, choiceIndex) => {
    setLoading(true);

    // Get feedback
    try {
      const response = await ClaudeAPI.call(
        PROMPTS.SIMULATOR_FEEDBACK,
        `Patient case: ${caseText}\n\nClinical situation: ${currentStep.narrative}\nVitals: ${JSON.stringify(currentStep.vitals)}\nThe learner chose: "${choice.text}"\nThis choice is considered: ${choice.baseQuality}\n\nProvide clinical feedback.`
      );

      let parsed;
      try {
        // Strip markdown code fences if present
        let cleanResponse = response.trim();
        if (cleanResponse.startsWith('```')) {
          cleanResponse = cleanResponse.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '');
        }
        parsed = JSON.parse(cleanResponse);
      } catch {
        // Try to extract JSON from response
        const jsonMatch = response.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          try { parsed = JSON.parse(jsonMatch[0]); } catch { parsed = null; }
        }
        if (!parsed) {
          parsed = { feedback: response.replace(/```json\s?|```/g, '').trim(), outcome: '', teachingPoint: '' };
        }
      }
      setFeedbackData(parsed);
    } catch (err) {
      setFeedbackData({ feedback: 'Unable to generate feedback.', outcome: '', teachingPoint: '' });
    }

    // Update score
    const points = choice.baseQuality === 'optimal' ? 25 : choice.baseQuality === 'suboptimal' ? 10 : 0;
    setScore(prev => prev + points);

    // Update history
    const newHistory = [...history, {
      step: stepNumber + 1,
      time: currentStep.time,
      action: choice.text,
      quality: choice.baseQuality
    }];
    setHistory(newHistory);
    setStepNumber(prev => prev + 1);
    setLoading(false);
  };

  // Advance to next step or complete
  const handleNext = () => {
    if (stepNumber >= 3 || currentStep?.isLastStep) {
      setPhase('complete');
    } else {
      setFeedbackData(null);
      generateStep(selectedScenario, stepNumber, history);
    }
  };

  // Error state
  if (error) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold mb-2">Simulation Error</h2>
        <p className="text-gray-400 mb-6">{error}</p>
        <button onClick={onBack} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">
          Back to Activities
        </button>
      </div>
    );
  }

  // Phase 1: Generating scenarios
  if (phase === 'generating') {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-400">AI is creating scenarios from this case...</p>
          <p className="text-sm text-gray-500 mt-2">Generating realistic clinical situations</p>
        </div>
      </div>
    );
  }

  // Phase 2: Selecting a scenario
  if (phase === 'selecting') {
    return (
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2">
            <Icons.ArrowLeft /> Back to Activities
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🔀</div>
          <h2 className="text-2xl font-bold mb-2">Choose a Scenario</h2>
          <p className="text-gray-400">Select a clinical scenario to simulate</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {scenarios.map((scenario, i) => (
            <div
              key={scenario.id || i}
              onClick={() => handleSelectScenario(scenario)}
              className="bg-[#1a1a24] rounded-xl p-5 border-2 border-gray-700 hover:border-orange-500 cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">
                  {scenario.type === 'initial_management' ? '🚑' :
                   scenario.type === 'overnight_call' ? '🌙' :
                   scenario.type === 'inpatient_decision' ? '🏥' :
                   '📋'}
                </span>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  scenario.difficulty === 'challenging' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                }`}>
                  {scenario.difficulty || 'standard'}
                </span>
              </div>
              <h3 className="font-bold mb-2 group-hover:text-orange-400 transition">{scenario.title}</h3>
              <p className="text-sm text-gray-400">{scenario.hook}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Phase 3: Playing
  if (phase === 'playing' && currentStep) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2">
            <Icons.ArrowLeft /> End Simulation
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Step {stepNumber + (feedbackData ? 0 : 1)}/4</span>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-sm font-medium">
              Score: {score}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Main content */}
          <div className="col-span-2 space-y-4">
            {/* Time & Narrative */}
            <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700">
              <div className="text-orange-400 font-semibold mb-2">{currentStep.time}</div>
              <p className="text-gray-300 mb-4">{currentStep.narrative}</p>
              {currentStep.findings && (
                <div className="text-sm text-gray-400">
                  <strong className="text-gray-300">Exam:</strong> {currentStep.findings}
                </div>
              )}
            </div>

            {/* Vitals */}
            {currentStep.vitals && (
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(currentStep.vitals).map(([key, value]) => (
                  <div key={key} className="bg-[#1a1a24] p-3 rounded-lg text-center border border-gray-700">
                    <div className="font-semibold">{value}</div>
                    <div className="text-xs text-gray-500 uppercase">{key}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Choices or Feedback */}
            {!feedbackData ? (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-300">What would you do?</h3>
                {loading ? (
                  <div className="flex items-center justify-center py-8"><LoadingSpinner /></div>
                ) : (
                  currentStep.choices?.map((choice, i) => (
                    <button
                      key={i}
                      onClick={() => handleChoice(choice, i)}
                      disabled={loading}
                      className="w-full text-left p-4 bg-[#1a1a24] rounded-lg border border-gray-700 hover:border-orange-500 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-gray-300">{choice.text}</span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            ) : (
              <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700 animate-fadeIn">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">
                    {history[history.length - 1]?.quality === 'optimal' ? '✅' :
                     history[history.length - 1]?.quality === 'suboptimal' ? '⚠️' : '❌'}
                  </span>
                  <span className={`font-semibold ${
                    history[history.length - 1]?.quality === 'optimal' ? 'text-green-400' :
                    history[history.length - 1]?.quality === 'suboptimal' ? 'text-amber-400' : 'text-red-400'
                  }`}>
                    {history[history.length - 1]?.quality === 'optimal' ? 'Optimal Choice' :
                     history[history.length - 1]?.quality === 'suboptimal' ? 'Suboptimal Choice' : 'Poor Choice'}
                  </span>
                </div>
                <div className="text-gray-300 mb-4 whitespace-pre-wrap text-sm">
                  {typeof feedbackData.feedback === 'string' ? feedbackData.feedback : JSON.stringify(feedbackData.feedback)}
                </div>
                {feedbackData.outcome && (
                  <div className="text-gray-400 mb-4 text-sm"><strong>Outcome:</strong> {feedbackData.outcome}</div>
                )}
                {feedbackData.teachingPoint && (
                  <div className="p-3 bg-amber-900/30 border border-amber-700 rounded-lg text-sm text-amber-300">
                    💡 {feedbackData.teachingPoint}
                  </div>
                )}
                <button
                  onClick={handleNext}
                  className="mt-4 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-medium transition"
                >
                  {stepNumber >= 3 || currentStep?.isLastStep ? 'See Results →' : 'Continue →'}
                </button>
              </div>
            )}
          </div>

          {/* Sidebar: Score + History */}
          <div className="space-y-4">
            <div className="bg-[#1a1a24] rounded-xl p-4 border border-gray-700">
              <div className="text-xs text-gray-500 uppercase mb-2">Performance</div>
              <div className="text-3xl font-bold text-orange-400">{score}</div>
              <div className="text-sm text-gray-500">Clinical Score</div>
            </div>

            <div className="bg-[#1a1a24] rounded-xl p-4 border border-gray-700">
              <div className="text-xs text-gray-500 uppercase mb-3">Decision History</div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {history.length === 0 ? (
                  <p className="text-sm text-gray-500">No decisions yet</p>
                ) : (
                  history.map((h, i) => (
                    <div key={i} className="text-sm">
                      <div className="text-gray-500">{h.time?.split(' - ')[0]}</div>
                      <div className={`${
                        h.quality === 'optimal' ? 'text-green-400' :
                        h.quality === 'suboptimal' ? 'text-amber-400' : 'text-red-400'
                      }`}>
                        {h.action.substring(0, 50)}...
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Phase 4: Complete
  if (phase === 'complete') {
    const maxScore = history.length * 25;
    const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
    const optimalCount = history.filter(h => h.quality === 'optimal').length;

    return (
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{percentage >= 75 ? '🎉' : percentage >= 50 ? '👍' : '📚'}</div>
          <h2 className="text-2xl font-bold mb-2">Simulation Complete!</h2>
          <p className="text-gray-400">{selectedScenario?.title}</p>
        </div>

        <div className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-orange-400">{score}/{maxScore}</div>
              <div className="text-sm text-gray-500">Score</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-green-400">{optimalCount}/{history.length}</div>
              <div className="text-sm text-gray-500">Optimal Choices</div>
            </div>
            <div className="text-center p-4 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-indigo-400">{history.length}</div>
              <div className="text-sm text-gray-500">Steps</div>
            </div>
          </div>
        </div>

        {/* Decision recap */}
        <div className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700 mb-6">
          <h3 className="font-semibold mb-4">Your Decisions</h3>
          <div className="space-y-3">
            {history.map((h, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-[#0f0f17] rounded-lg">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                  h.quality === 'optimal' ? 'bg-green-500/20 text-green-400' :
                  h.quality === 'suboptimal' ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {h.quality === 'optimal' ? '✓' : h.quality === 'suboptimal' ? '~' : '✗'}
                </span>
                <div>
                  <div className="text-sm text-gray-400">{h.time}</div>
                  <div className="text-sm text-gray-300">{h.action}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              setPhase('selecting');
              setHistory([]);
              setScore(0);
              setStepNumber(0);
              setCurrentStep(null);
              setFeedbackData(null);
            }}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition"
          >
            Try Another Scenario
          </button>
          <button
            onClick={() => onComplete({ score, maxScore, history, scenario: selectedScenario })}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-medium transition"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return null;
}

// ============================================================================
// GENERATE CASE SUMMARY FROM ANALYSIS (no extra API call needed)
// ============================================================================
function generateCaseSummaryFromAnalysis(analysis, patientData) {
  if (!analysis) return 'Case analysis in progress...';

  const problems = analysis.problems?.slice(0, 3).map(p => p.name).join(', ') || 'multiple medical issues';
  const age = patientData?.age || 'Adult';
  const sex = patientData?.sex === 'F' ? 'female' : 'male';
  const cc = patientData?.chiefComplaint || 'medical evaluation';

  const keyDecisions = analysis.clinicalDecisions?.slice(0, 2).map(d => d.decision || d.name).join(' and ') || '';
  const criticalFindings = analysis.keyFindings?.filter(f => f.severity === 'critical' || f.critical).slice(0, 2).map(f => f.finding || f.text).join(', ') || '';

  let summary = `${age}${sex[0].toUpperCase()} presenting with ${cc.toLowerCase()}.`;

  if (problems) {
    summary += ` Key problems include ${problems}.`;
  }

  if (criticalFindings) {
    summary += ` Notable findings: ${criticalFindings}.`;
  }

  if (keyDecisions) {
    summary += ` Important decisions involve ${keyDecisions.toLowerCase()}.`;
  }

  return summary;
}

// ============================================================================
// CASE SUMMARY PANEL - Enhanced sidebar with AI case summary
// ============================================================================
function CaseSummaryPanel({ patientData, analysis, caseSummary }) {
  return (
    <div className="w-80 bg-[#1a1a24] border-r border-gray-800 p-4 overflow-y-auto flex-shrink-0">
      {/* AI Case Summary */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <Icons.Sparkles className="w-4 h-4 text-indigo-400" />
          <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">AI Case Summary</div>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">{caseSummary || 'Generating summary...'}</p>
      </div>

      <div className="border-t border-gray-700 pt-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🏥</span>
          <div>
            <div className="font-bold">{patientData.age}{patientData.sex}</div>
            <div className="text-sm text-gray-400">"{patientData.chiefComplaint}"</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          {Object.entries(patientData.vitals).map(([key, value]) => (
            <div key={key} className="bg-[#0f0f17] p-2 rounded text-center">
              <div className={`font-semibold text-sm ${value !== '--' && ((key === 'bp' && parseInt(value) > 140) || (key === 'hr' && parseInt(value) > 100)) ? 'text-red-400' : ''}`}>
                {value}
              </div>
              <div className="text-xs text-gray-500 uppercase">{key}</div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <div className="text-xs text-gray-500 uppercase mb-2">Key Findings</div>
          <div className="space-y-1">
            {patientData.keyFindings.slice(0, 5).map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span>{f.critical ? '🔴' : '🟡'}</span>
                <span className="text-gray-300">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {patientData.problems.map((p, i) => (
            <span key={i} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PRIMARY MODE SELECTOR - Two primary modes + collapsible activities
// ============================================================================
function PrimaryModeSelector({ onSelect, analysis, patientData }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-3">What would you like to do with this case?</h2>
        <p className="text-gray-400">Choose a primary learning activity</p>
      </div>

      {/* Two Primary Mode Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Prepare for Rounds */}
        <div
          onClick={() => onSelect('rounds')}
          className="bg-[#1a1a24] rounded-xl p-6 border-2 border-teal-800 hover:border-teal-500 cursor-pointer transition-all group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -translate-y-8 translate-x-8" />
          <div className="relative">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition">Prepare for Rounds</h3>
            <p className="text-gray-400 text-sm mb-4">Get ready to present and discuss this case on rounds</p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Teaching points & clinical pearls
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Background knowledge & guidelines
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Key studies & landmark trials
              </div>
            </div>
          </div>
        </div>

        {/* Simulate Variations */}
        <div
          onClick={() => onSelect('dynamicSim')}
          className="bg-[#1a1a24] rounded-xl p-6 border-2 border-orange-800 hover:border-orange-500 cursor-pointer transition-all group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-y-8 translate-x-8" />
          <div className="relative">
            <div className="text-4xl mb-4">🔀</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">Simulate Variations</h3>
            <p className="text-gray-400 text-sm mb-4">Practice managing realistic scenarios from this case</p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                AI-generated clinical scenarios
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                Step-by-step decision making
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                Real-time AI feedback on choices
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible More Activities */}
      <div className="mb-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-gray-200 transition"
        >
          <span className="text-sm font-medium">{showMore ? 'Hide' : 'More'} Activities</span>
          <svg className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showMore && (
          <div className="grid grid-cols-3 gap-3 mt-3 animate-fadeIn">
            <div
              onClick={() => onSelect('history')}
              className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700 hover:border-blue-500 cursor-pointer transition-all group"
            >
              <div className="text-2xl mb-2">🩺</div>
              <h4 className="font-semibold text-sm group-hover:text-blue-400 transition">History Taking</h4>
              <p className="text-xs text-gray-500 mt-1">Voice patient simulation</p>
            </div>

            <div
              onClick={() => onSelect('reporter')}
              className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700 hover:border-amber-500 cursor-pointer transition-all group"
            >
              <div className="text-2xl mb-2">📣</div>
              <h4 className="font-semibold text-sm group-hover:text-amber-400 transition">Oral Presentation</h4>
              <p className="text-xs text-gray-500 mt-1">Practice presenting cases</p>
            </div>

            <div
              onClick={() => onSelect('reasoning')}
              className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700 hover:border-purple-500 cursor-pointer transition-all group"
            >
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="font-semibold text-sm group-hover:text-purple-400 transition">Clinical Reasoning</h4>
              <p className="text-xs text-gray-500 mt-1">Diagnostic reasoning practice</p>
            </div>

            <div
              onClick={() => onSelect('knowledge')}
              className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700 hover:border-emerald-500 cursor-pointer transition-all group"
            >
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-semibold text-sm group-hover:text-emerald-400 transition">Knowledge Deep Dive</h4>
              <p className="text-xs text-gray-500 mt-1">Teaching points & quiz</p>
            </div>

            <div
              onClick={() => onSelect('questions')}
              className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700 hover:border-indigo-500 cursor-pointer transition-all group"
            >
              <div className="text-2xl mb-2">❓</div>
              <h4 className="font-semibold text-sm group-hover:text-indigo-400 transition">Quiz</h4>
              <p className="text-xs text-gray-500 mt-1">Test case knowledge</p>
            </div>

            <div
              onClick={() => onSelect('chat')}
              className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700 hover:border-cyan-500 cursor-pointer transition-all group"
            >
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-semibold text-sm group-hover:text-cyan-400 transition">Ask AI</h4>
              <p className="text-xs text-gray-500 mt-1">Free-form discussion</p>
            </div>
          </div>
        )}
      </div>

      {/* Case Overview */}
      {analysis && (
        <div className="p-4 bg-[#1a1a24] rounded-lg border border-gray-700">
          <div className="text-sm text-gray-500 mb-2">Case Overview</div>
          <div className="flex flex-wrap gap-2">
            {analysis.problems?.slice(0, 6).map((p, i) => (
              <span key={i} className={`px-2 py-1 rounded text-xs ${
                p.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                p.priority === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                'bg-gray-700 text-gray-300'
              }`}>
                {p.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// PATIENT SIDEBAR
// ============================================================================
function PatientSidebar({ patientData, currentQuestion, totalQuestions }) {
  return (
    <div className="w-80 bg-[#1a1a24] border-r border-gray-800 p-4 overflow-y-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🏥</span>
          <div>
            <div className="font-bold">{patientData.age}{patientData.sex}</div>
            <div className="text-sm text-gray-400">"{patientData.chiefComplaint}"</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          {Object.entries(patientData.vitals).map(([key, value]) => (
            <div key={key} className="bg-[#0f0f17] p-2 rounded text-center">
              <div className={`font-semibold ${value !== '--' && ((key === 'bp' && parseInt(value) > 140) || (key === 'hr' && parseInt(value) > 100)) ? 'text-red-400' : ''}`}>
                {value}
              </div>
              <div className="text-xs text-gray-500 uppercase">{key}</div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <div className="text-xs text-gray-500 uppercase mb-2">Key Findings</div>
          <div className="space-y-1">
            {patientData.keyFindings.slice(0, 4).map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span>{f.critical ? '🔴' : '🟡'}</span>
                <span className="text-gray-300">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {patientData.problems.map((p, i) => (
            <span key={i} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">{p}</span>
          ))}
        </div>
      </div>

      <div className="p-3 bg-[#0f0f17] rounded-lg">
        <div className="text-xs text-gray-500 uppercase mb-2">Quiz Progress</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 transition-all" style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }} />
          </div>
          <span className="text-sm text-gray-400">{currentQuestion}/{totalQuestions}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// CASE RESULTS WITH AI
// ============================================================================
function CaseResults({ caseText, onNewCase, onUpdateMastery, onQuizAnswer, mastery, onSelectTopic }) {
  const [activeMode, setActiveMode] = useState('pathSelect'); // New: start with path selection
  const [selectedPath, setSelectedPath] = useState(null); // 'reasoning' | 'knowledge' | null
  const [pathResults, setPathResults] = useState(null); // Results from completed path
  const [analysis, setAnalysis] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [caseSummary, setCaseSummary] = useState(null);

  // Extract patient data for sidebar
  const extractPatientData = (text) => {
    const textLower = text.toLowerCase();
    const ageMatch = text.match(/(\d+)\s*y\/?o/i);
    const bpMatch = text.match(/BP\s*:?\s*(\d+\/\d+)/i);
    const hrMatch = text.match(/HR\s*:?\s*(\d+)/i);
    const rrMatch = text.match(/RR\s*:?\s*(\d+)/i);
    const spo2Match = text.match(/SpO2\s*:?\s*(\d+)/i);

    const keyFindings = [];
    if (textLower.includes('jvp') || textLower.includes('jvd')) keyFindings.push({ text: 'Elevated JVP', critical: true });
    if (textLower.includes('crackles') || textLower.includes('rales')) keyFindings.push({ text: 'Pulmonary crackles', critical: true });
    if (textLower.includes('edema')) keyFindings.push({ text: 'Peripheral edema', critical: false });
    if (textLower.includes('orthopnea')) keyFindings.push({ text: 'Orthopnea', critical: true });
    if (textLower.includes('dyspnea') || textLower.includes('sob')) keyFindings.push({ text: 'Dyspnea', critical: false });

    const problems = [];
    if (textLower.includes('hfref') || textLower.includes('heart failure')) problems.push('HFrEF');
    if (textLower.includes('htn') || textLower.includes('hypertension')) problems.push('HTN');
    if (textLower.includes('t2dm') || textLower.includes('diabetes')) problems.push('T2DM');
    if (textLower.includes('afib') || textLower.includes('atrial fibrillation')) problems.push('AFib');

    return {
      age: ageMatch ? ageMatch[1] : '65',
      sex: textLower.includes('female') || textLower.includes(' f ') ? 'F' : 'M',
      chiefComplaint: keyFindings.length > 0 ? keyFindings[0].text : 'Medical evaluation',
      vitals: {
        bp: bpMatch?.[1] || '--',
        hr: hrMatch?.[1] || '--',
        rr: rrMatch?.[1] || '--',
        spo2: spo2Match?.[1] || '--'
      },
      keyFindings,
      problems
    };
  };

  const patientData = extractPatientData(caseText);

  // Analyze case with AI
  useEffect(() => {
    const analyzeWithAI = async () => {
      setLoading(true);
      setError(null);

      try {
        // Get case analysis
        const analysisResponse = await ClaudeAPI.call(
          PROMPTS.CASE_ANALYSIS,
          `Analyze this patient case:\n\n${caseText}`
        );

        let parsedAnalysis;
        try {
          parsedAnalysis = JSON.parse(analysisResponse);
        } catch {
          parsedAnalysis = { problems: [], keyFindings: [], teachingTopics: [], clinicalDecisions: [] };
        }
        setAnalysis(parsedAnalysis);

        // Generate case summary from analysis (no extra API call)
        const pData = extractPatientData(caseText);
        setCaseSummary(generateCaseSummaryFromAnalysis(parsedAnalysis, pData));

        // Generate questions
        const questionsResponse = await ClaudeAPI.call(
          PROMPTS.GENERATE_QUESTIONS,
          `Generate 5 challenging multiple-choice questions for this case:\n\n${caseText}\n\nFocus on: ${parsedAnalysis.teachingTopics?.map(t => t.topic).join(', ') || 'general medicine'}`
        );

        let parsedQuestions;
        try {
          parsedQuestions = JSON.parse(questionsResponse);
          setQuestions(parsedQuestions.questions || []);
        } catch {
          // Fallback questions if AI fails to generate proper JSON
          setQuestions([{
            category: 'Clinical Reasoning',
            question: 'What is the most likely primary diagnosis for this patient?',
            options: ['A. Acute coronary syndrome', 'B. Acute decompensated heart failure', 'C. Pulmonary embolism', 'D. Pneumonia'],
            correctIndex: 1,
            explanation: 'Based on the presentation with dyspnea, edema, elevated JVP, and elevated BNP, this is most consistent with ADHF.',
            keyTakeaway: 'Volume overload signs + elevated BNP = think heart failure'
          }]);
        }

      } catch (err) {
        setError(err.message);
      }

      setLoading(false);
    };

    if (ClaudeAPI.isConfigured()) {
      analyzeWithAI();
    } else {
      setError('Please configure your API key in settings to use AI features.');
      setLoading(false);
    }
  }, [caseText]);

  const handleQuizAnswer = (answerIndex) => {
    const newAnswers = [...quizAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setQuizAnswers(newAnswers);

    const isCorrect = answerIndex === questions[currentQuestion].correctIndex;
    onQuizAnswer(isCorrect);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setActiveMode('complete');
    }
  };

  // Find applicable scenarios based on analysis
  const applicableScenarios = Object.values(SIMULATOR_SCENARIOS).filter(s => {
    const caseTextLower = caseText.toLowerCase();
    if (s.id === 'adhf-management' && (caseTextLower.includes('heart failure') || caseTextLower.includes('hfref') || caseTextLower.includes('edema'))) return true;
    if (s.id === 'sepsis-management' && (caseTextLower.includes('sepsis') || caseTextLower.includes('infection') || caseTextLower.includes('fever'))) return true;
    return false;
  });

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-400">AI is analyzing your case...</p>
          <p className="text-sm text-gray-500 mt-2">Generating personalized teaching content</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold mb-2">Error Analyzing Case</h2>
        <p className="text-gray-400 mb-6">{error}</p>
        <button onClick={onNewCase} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
          Try Again
        </button>
      </div>
    );
  }

  // Path selection handlers
  const handlePathSelect = (path) => {
    setSelectedPath(path);
    setActiveMode(path);
  };

  const handlePathComplete = (results) => {
    setPathResults(results);
    setActiveMode('summary');
  };

  const handleBackToPathSelect = () => {
    setActiveMode('pathSelect');
    setSelectedPath(null);
    setPathResults(null);
  };

  // Path Selection mode (new default after loading)
  if (activeMode === 'pathSelect') {
    return (
      <div className="flex min-h-screen">
        <CaseSummaryPanel patientData={patientData} analysis={analysis} caseSummary={caseSummary} />
        <div className="flex-1 p-8">
          <div className="flex justify-end mb-4">
            <button onClick={onNewCase} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition">
              ← New Case
            </button>
          </div>
          <PrimaryModeSelector
            onSelect={handlePathSelect}
            analysis={analysis}
            patientData={patientData}
          />
        </div>
      </div>
    );
  }

  // Prepare for Rounds mode
  if (activeMode === 'rounds') {
    return (
      <div className="flex min-h-screen">
        <CaseSummaryPanel patientData={patientData} analysis={analysis} caseSummary={caseSummary} />
        <div className="flex-1 p-8">
          <PrepareForRoundsView
            caseText={caseText}
            analysis={analysis}
            onComplete={handlePathComplete}
            onBack={handleBackToPathSelect}
            onSelectTopic={onSelectTopic}
            mastery={mastery}
          />
        </div>
      </div>
    );
  }

  // Dynamic Simulation mode
  if (activeMode === 'dynamicSim') {
    return (
      <div className="flex min-h-screen">
        <CaseSummaryPanel patientData={patientData} analysis={analysis} caseSummary={caseSummary} />
        <div className="flex-1 p-8">
          <DynamicSimulatorView
            caseText={caseText}
            analysis={analysis}
            onComplete={handlePathComplete}
            onBack={handleBackToPathSelect}
          />
        </div>
      </div>
    );
  }

  // Clinical Reasoning path
  if (activeMode === 'reasoning') {
    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={0} totalQuestions={3} />
        <div className="flex-1 p-8">
          <ClinicalReasoningPath
            caseText={caseText}
            analysis={analysis}
            onComplete={handlePathComplete}
            onBack={handleBackToPathSelect}
          />
        </div>
      </div>
    );
  }

  // Knowledge path
  if (activeMode === 'knowledge') {
    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={0} totalQuestions={5} />
        <div className="flex-1 p-8">
          <KnowledgePath
            caseText={caseText}
            analysis={analysis}
            onComplete={handlePathComplete}
            onBack={handleBackToPathSelect}
            onSelectTopic={onSelectTopic}
            mastery={mastery}
          />
        </div>
      </div>
    );
  }

  // History Taking path (for early med students)
  if (activeMode === 'history') {
    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={0} totalQuestions={0} />
        <div className="flex-1 p-8">
          <HistoryTaking
            caseText={caseText}
            patientData={patientData}
            onComplete={handlePathComplete}
            onBack={handleBackToPathSelect}
          />
        </div>
      </div>
    );
  }

  // Reporter path (oral presentation practice)
  if (activeMode === 'reporter') {
    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={0} totalQuestions={0} />
        <div className="flex-1 p-8">
          <Reporter
            caseText={caseText}
            patientData={patientData}
            onComplete={handlePathComplete}
            onBack={handleBackToPathSelect}
          />
        </div>
      </div>
    );
  }

  // Completion summary
  if (activeMode === 'summary') {
    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={0} totalQuestions={questions.length} />
        <div className="flex-1 p-8">
          <CompletionSummary
            pathType={selectedPath}
            results={pathResults}
            onSelectPath={(path) => {
              setSelectedPath(path);
              setPathResults(null);
              setActiveMode(path);
            }}
            onQuiz={() => setActiveMode('questions')}
            onSimulator={() => {
              if (applicableScenarios.length > 0) {
                setSelectedScenario(applicableScenarios[0]);
                setActiveMode('simulator');
              }
            }}
            onChat={() => setActiveMode('chat')}
            onNewCase={onNewCase}
          />
        </div>
      </div>
    );
  }

  // Chat mode
  if (activeMode === 'chat') {
    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={0} totalQuestions={questions.length} />
        <div className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <button onClick={() => setActiveMode('summary')} className="text-gray-400 hover:text-white mb-4 flex items-center gap-2">
              <Icons.ArrowLeft /> Back
            </button>
            <AIChatInterface caseText={caseText} context="General case discussion" />
          </div>
        </div>
      </div>
    );
  }

  // Simulator mode
  if (activeMode === 'simulator' && selectedScenario) {
    return (
      <div className="p-8">
        <AIClinicalSimulator
          scenario={selectedScenario}
          caseText={caseText}
          onComplete={() => setActiveMode('summary')}
          onBack={() => setActiveMode('summary')}
        />
      </div>
    );
  }

  // Quiz complete
  if (activeMode === 'complete') {
    const correct = quizAnswers.filter((a, i) => a === questions[i]?.correctIndex).length;
    const percentage = Math.round((correct / questions.length) * 100);

    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={questions.length} totalQuestions={questions.length} />
        <div className="flex-1 p-8 flex items-center justify-center">
          <div className="text-center animate-fadeIn max-w-md">
            <div className="text-6xl mb-4">{percentage >= 70 ? '🎉' : '📚'}</div>
            <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
            <p className="text-gray-400 mb-6">{percentage >= 90 ? 'Excellent!' : percentage >= 70 ? 'Great job!' : 'Keep studying!'}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1a1a24] p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-400">{correct}</div>
                <div className="text-xs text-gray-500">Correct</div>
              </div>
              <div className="bg-[#1a1a24] p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-400">{questions.length - correct}</div>
                <div className="text-xs text-gray-500">Incorrect</div>
              </div>
              <div className="bg-[#1a1a24] p-4 rounded-lg">
                <div className="text-2xl font-bold text-indigo-400">{percentage}%</div>
                <div className="text-xs text-gray-500">Score</div>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button onClick={() => setActiveMode('summary')} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">
                Continue Learning
              </button>
              <button onClick={onNewCase} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
                New Case
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Questions mode
  if (activeMode === 'questions' && questions.length > 0) {
    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={currentQuestion + 1} totalQuestions={questions.length} />
        <div className="flex-1 p-8">
          <div className="max-w-3xl">
            <button onClick={() => setActiveMode('summary')} className="text-gray-400 hover:text-white mb-4 flex items-center gap-2">
              <Icons.ArrowLeft /> Back
            </button>
            <div className="text-sm text-gray-400 mb-4">Question {currentQuestion + 1} of {questions.length}</div>
            <AIQuizQuestion
              question={questions[currentQuestion]}
              caseText={caseText}
              onAnswer={handleQuizAnswer}
              onNext={handleNextQuestion}
              answered={quizAnswers[currentQuestion] !== undefined}
              selectedAnswer={quizAnswers[currentQuestion]}
              onAskAI={() => setShowChat(true)}
            />
          </div>
        </div>
        {showChat && (
          <div className="w-96 border-l border-gray-800">
            <div className="p-4">
              <button onClick={() => setShowChat(false)} className="text-gray-400 hover:text-white mb-4">← Close Chat</button>
              <AIChatInterface caseText={caseText} context={`Question: ${questions[currentQuestion]?.question}`} />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default fallback - redirect to path selection
  return (
    <div className="flex min-h-screen">
      <CaseSummaryPanel patientData={patientData} analysis={analysis} caseSummary={caseSummary} />
      <div className="flex-1 p-8">
        <div className="flex justify-end mb-4">
          <button onClick={onNewCase} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition">
            ← New Case
          </button>
        </div>
        <PrimaryModeSelector
          onSelect={handlePathSelect}
          analysis={analysis}
          patientData={patientData}
        />
      </div>
    </div>
  );
}

// ============================================================================
// DASHBOARD
// ============================================================================
function Dashboard({ mastery, library, streak, quizStats, userProgress, onNavigate, onSelectTopic, onStartCase }) {
  const masteredCount = Object.values(mastery).filter(v => {
    const points = typeof v === 'number' ? v : (v?.points || 0);
    return points >= 8; // Mastered threshold
  }).length;
  const totalTopics = Object.keys(TOPICS || {}).length || 44;
  const quizAccuracy = quizStats.total > 0 ? Math.round((quizStats.correct / quizStats.total) * 100) : 0;

  // XP and Level
  const currentLevel = getLevel(userProgress?.xp || 0);
  const nextLevel = getNextLevel(userProgress?.xp || 0);
  const xpProgress = getXPProgress(userProgress?.xp || 0);

  // Daily goals progress
  const today = new Date().toDateString();
  const dailyProgress = userProgress?.dailyProgress?.date === today ? userProgress.dailyProgress : { xp: 0, quizzes: 0, activities: 0 };
  const goals = DAILY_GOALS.default;

  // Topics due for review (spaced repetition)
  const topicsDue = getTopicsDueForReview(mastery, typeof TOPICS !== 'undefined' ? TOPICS : {}).slice(0, 3);

  // Case of the Day
  const caseOfTheDay = getCaseOfTheDay();

  // Recent achievements
  const recentAchievements = (userProgress?.achievements || [])
    .map(id => ACHIEVEMENTS[id])
    .filter(Boolean)
    .slice(-3)
    .reverse();

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Level & XP Header */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl p-6 border border-indigo-500/30 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{currentLevel.icon}</div>
            <div>
              <div className="text-xl font-bold">{currentLevel.title}</div>
              <div className="text-gray-400">Level {currentLevel.level}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-amber-400">{userProgress?.xp || 0} XP</div>
            {nextLevel && (
              <div className="text-sm text-gray-400">{nextLevel.xp - (userProgress?.xp || 0)} XP to {nextLevel.title}</div>
            )}
          </div>
        </div>
        {nextLevel && (
          <div className="mt-4">
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Daily Goals */}
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Daily Goals</h3>
            <span className="text-xs text-amber-400">{streak} day streak</span>
          </div>
          <div className="space-y-3">
            {goals.map(goal => {
              let current = 0;
              if (goal.type === 'xp') current = dailyProgress.xp;
              else if (goal.type === 'quiz') current = dailyProgress.quizzes;
              else if (goal.type === 'activity') current = dailyProgress.activities;
              else if (goal.type === 'history') current = dailyProgress.histories || 0;

              const completed = current >= goal.target;
              const progress = Math.min((current / goal.target) * 100, 100);

              return (
                <div key={goal.id}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="flex items-center gap-2">
                      <span>{goal.icon}</span>
                      <span className={completed ? 'text-emerald-400' : 'text-gray-300'}>{goal.description}</span>
                    </span>
                    <span className="text-gray-500">{current}/{goal.target}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${completed ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <h3 className="font-semibold mb-4">Your Progress</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-indigo-400">{masteredCount}</div>
              <div className="text-xs text-gray-500">Topics Mastered</div>
            </div>
            <div className="text-center p-3 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-emerald-400">{quizAccuracy}%</div>
              <div className="text-xs text-gray-500">Quiz Accuracy</div>
            </div>
            <div className="text-center p-3 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-purple-400">{userProgress?.stats?.casesCompleted || 0}</div>
              <div className="text-xs text-gray-500">Cases Done</div>
            </div>
            <div className="text-center p-3 bg-[#0f0f17] rounded-lg">
              <div className="text-2xl font-bold text-amber-400">{library.length}</div>
              <div className="text-xs text-gray-500">Library Items</div>
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Achievements</h3>
            <span className="text-xs text-gray-500">{userProgress?.achievements?.length || 0}/{Object.keys(ACHIEVEMENTS).length}</span>
          </div>
          {recentAchievements.length > 0 ? (
            <div className="space-y-3">
              {recentAchievements.map(ach => (
                <div key={ach.id} className="flex items-center gap-3 p-2 bg-[#0f0f17] rounded-lg">
                  <span className="text-2xl">{ach.icon}</span>
                  <div>
                    <div className="font-medium text-sm">{ach.name}</div>
                    <div className="text-xs text-gray-500">{ach.description}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm">Complete activities to earn achievements!</p>
            </div>
          )}
        </div>
      </div>

      {/* Review Queue (Spaced Repetition) */}
      {topicsDue.length > 0 && (
        <div className="bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-xl p-5 border border-amber-500/30 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔄</span>
              <h3 className="font-semibold">Topics Due for Review</h3>
            </div>
            <span className="text-xs text-amber-400">{topicsDue.length} topic{topicsDue.length !== 1 ? 's' : ''} due</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {topicsDue.map(item => {
              const urgencyColors = ['text-gray-400', 'text-amber-400', 'text-orange-400', 'text-red-400'];
              const urgencyLabels = ['Due soon', 'Due', 'Overdue', 'Review now'];
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectTopic && onSelectTopic(item.id)}
                  className="bg-[#1a1a24] p-4 rounded-lg border border-gray-700 hover:border-amber-500 cursor-pointer transition"
                >
                  <div className="font-medium mb-1">{item.topic?.name || item.id}</div>
                  <div className={`text-xs ${urgencyColors[item.urgency]}`}>{urgencyLabels[item.urgency]}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Case of the Day */}
      <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-xl p-5 border border-emerald-500/30 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-3xl">📅</div>
            <div>
              <h3 className="font-semibold">Case of the Day</h3>
              <p className="text-gray-400 text-sm">{caseOfTheDay.title} - {caseOfTheDay.description}</p>
            </div>
          </div>
          <button
            onClick={() => onStartCase && onStartCase(caseOfTheDay)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-medium transition"
          >
            Start Case
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div onClick={() => onNavigate('case')} className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700 hover:border-indigo-500 cursor-pointer transition text-center">
          <div className="text-2xl mb-2">📝</div>
          <h3 className="font-medium text-sm">New Case</h3>
        </div>
        <div onClick={() => onNavigate('roadmap')} className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700 hover:border-emerald-500 cursor-pointer transition text-center">
          <div className="text-2xl mb-2">🗺️</div>
          <h3 className="font-medium text-sm">Curriculum</h3>
        </div>
        <div onClick={() => onNavigate('physical-exam')} className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700 hover:border-purple-500 cursor-pointer transition text-center">
          <div className="text-2xl mb-2">🩺</div>
          <h3 className="font-medium text-sm">Physical Exam</h3>
        </div>
        <div onClick={() => onNavigate('case-library')} className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700 hover:border-amber-500 cursor-pointer transition text-center">
          <div className="text-2xl mb-2">📚</div>
          <h3 className="font-medium text-sm">Case Library</h3>
        </div>
      </div>

      {/* New Features Row */}
      <div className="grid grid-cols-3 gap-4">
        <div onClick={() => onNavigate('differential')} className="bg-gradient-to-br from-rose-600/10 to-pink-600/10 rounded-xl p-5 border border-rose-500/30 hover:border-rose-500 cursor-pointer transition">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🔍</div>
            <div>
              <h3 className="font-medium text-sm">Differential Builder</h3>
              <p className="text-xs text-gray-500">Practice building differentials</p>
            </div>
          </div>
        </div>
        <div onClick={() => onNavigate('image-learning')} className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-xl p-5 border border-cyan-500/30 hover:border-cyan-500 cursor-pointer transition">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📊</div>
            <div>
              <h3 className="font-medium text-sm">Image Learning</h3>
              <p className="text-xs text-gray-500">ECG, X-ray, Labs</p>
            </div>
          </div>
        </div>
        <div onClick={() => onNavigate('analytics')} className="bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-xl p-5 border border-violet-500/30 hover:border-violet-500 cursor-pointer transition">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📈</div>
            <div>
              <h3 className="font-medium text-sm">Progress Analytics</h3>
              <p className="text-xs text-gray-500">AI-powered insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PHYSICAL EXAM PRACTICE
// ============================================================================
function PhysicalExam({ onBack, userProgress, onAwardXP }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentFinding, setCurrentFinding] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [completedFindings, setCompletedFindings] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [playDuration, setPlayDuration] = useState(0);
  const playTimeoutRef = useRef(null);

  // Play audio for current finding
  const playAudio = (finding) => {
    if (isPlaying) return;

    let duration = 0;
    if (finding.audioType === 'heart') {
      duration = AudioSynthesizer.playHeartSound(finding.audioParams, 4);
    } else if (finding.audioType === 'lung') {
      duration = AudioSynthesizer.playLungSound(finding.audioParams, 5);
    } else if (finding.audioType === 'bowel') {
      duration = AudioSynthesizer.playBowelSound(finding.audioParams, 5);
    }

    if (duration > 0) {
      setIsPlaying(true);
      setPlayDuration(duration);
      playTimeoutRef.current = setTimeout(() => {
        setIsPlaying(false);
        setPlayDuration(0);
      }, duration * 1000);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
      AudioSynthesizer.stop();
    };
  }, []);

  const modules = Object.values(PHYSICAL_EXAM_MODULES);

  // Reset when changing modules
  const handleSelectModule = (module) => {
    setSelectedModule(module);
    setCurrentFinding(0);
    setShowQuiz(false);
    setQuizAnswer(null);
  };

  const handleQuizAnswer = (index) => {
    if (quizAnswer !== null) return;
    setQuizAnswer(index);

    const finding = selectedModule.findings[currentFinding];
    const isCorrect = index === finding.quiz.correct;

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      onAwardXP && onAwardXP(XP_CONFIG.rewards.quizCorrectAnswer, 'quiz');
    }

    // Mark finding as completed
    setCompletedFindings(prev => ({
      ...prev,
      [`${selectedModule.id}-${finding.id}`]: true
    }));
  };

  const handleNext = () => {
    if (currentFinding < selectedModule.findings.length - 1) {
      setCurrentFinding(prev => prev + 1);
      setShowQuiz(false);
      setQuizAnswer(null);
    } else {
      // Module completed
      onAwardXP && onAwardXP(XP_CONFIG.rewards.completeQuiz, 'activity');
      setSelectedModule(null);
      setCurrentFinding(0);
      setShowQuiz(false);
      setQuizAnswer(null);
    }
  };

  // Module selection view
  if (!selectedModule) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition"
        >
          <span>←</span> Back to Dashboard
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Physical Exam Practice</h1>
          <p className="text-gray-400">Learn to recognize clinical findings through guided examination practice</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {modules.map(module => {
            const completedInModule = module.findings.filter(f =>
              completedFindings[`${module.id}-${f.id}`]
            ).length;
            const progress = Math.round((completedInModule / module.findings.length) * 100);

            return (
              <div
                key={module.id}
                onClick={() => handleSelectModule(module)}
                className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700 hover:border-indigo-500 cursor-pointer transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{module.icon}</div>
                  {completedInModule > 0 && (
                    <span className="text-xs text-emerald-400">{completedInModule}/{module.findings.length} done</span>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{module.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{module.description}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{progress}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Finding detail view
  const finding = selectedModule.findings[currentFinding];
  const isCompleted = completedFindings[`${selectedModule.id}-${finding.id}`];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <button
        onClick={() => setSelectedModule(null)}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition"
      >
        <span>←</span> Back to {selectedModule.name}
      </button>

      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-6">
        {selectedModule.findings.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 flex-1 rounded-full transition ${
              idx < currentFinding ? 'bg-emerald-500' :
              idx === currentFinding ? 'bg-indigo-500' :
              'bg-gray-700'
            }`}
          />
        ))}
      </div>

      <div className="bg-[#1a1a24] rounded-xl border border-gray-700 overflow-hidden">
        {/* Finding header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{selectedModule.icon}</span>
            <span className="text-sm text-gray-500">{selectedModule.name}</span>
          </div>
          <h2 className="text-xl font-bold">{finding.name}</h2>
        </div>

        {/* Finding content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-sm text-gray-400 mb-2">Description</h3>
            <p className="text-gray-200">{finding.description}</p>
          </div>

          {/* Audio Player */}
          {finding.audioType && (
            <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl p-5 border border-purple-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔊</span>
                  <div>
                    <h3 className="font-semibold">Listen to Sound</h3>
                    <p className="text-sm text-gray-400">Click to hear this {finding.audioType === 'heart' ? 'heart sound' : finding.audioType === 'lung' ? 'lung sound' : 'bowel sound'}</p>
                  </div>
                </div>
                <button
                  onClick={() => playAudio(finding)}
                  disabled={isPlaying}
                  className={`px-5 py-2.5 rounded-lg font-medium transition flex items-center gap-2 ${
                    isPlaying
                      ? 'bg-purple-600/50 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-500'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <span className="animate-pulse">▶</span>
                      Playing...
                    </>
                  ) : (
                    <>
                      <span>▶</span>
                      Play Sound
                    </>
                  )}
                </button>
              </div>
              {isPlaying && (
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all"
                    style={{
                      width: '100%',
                      animation: `shrink ${playDuration}s linear forwards`
                    }}
                  />
                </div>
              )}
            </div>
          )}

          <div className="bg-[#0f0f17] rounded-lg p-4">
            <h3 className="font-semibold text-sm text-gray-400 mb-2">What You Hear/See</h3>
            <p className="text-gray-200">{finding.audioDescription}</p>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-4 border-l-4 border-indigo-500">
            <h3 className="font-semibold text-sm text-indigo-400 mb-2">Clinical Significance</h3>
            <p className="text-gray-200">{finding.significance}</p>
          </div>
        </div>

        {/* Quiz section */}
        {!showQuiz ? (
          <div className="p-6 border-t border-gray-700">
            <button
              onClick={() => setShowQuiz(true)}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition"
            >
              Test Your Knowledge
            </button>
          </div>
        ) : (
          <div className="p-6 border-t border-gray-700 space-y-4">
            <h3 className="font-semibold">{finding.quiz.question}</h3>
            <div className="space-y-2">
              {finding.quiz.options.map((option, idx) => {
                let buttonClass = 'bg-[#0f0f17] border-gray-700 hover:border-indigo-500';
                if (quizAnswer !== null) {
                  if (idx === finding.quiz.correct) {
                    buttonClass = 'bg-emerald-500/20 border-emerald-500 text-emerald-400';
                  } else if (idx === quizAnswer && idx !== finding.quiz.correct) {
                    buttonClass = 'bg-red-500/20 border-red-500 text-red-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(idx)}
                    disabled={quizAnswer !== null}
                    className={`w-full p-4 text-left rounded-lg border transition ${buttonClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {quizAnswer !== null && (
              <div className="flex justify-end pt-4">
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition"
                >
                  {currentFinding < selectedModule.findings.length - 1 ? 'Next Finding' : 'Complete Module'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// DIFFERENTIAL DIAGNOSIS BUILDER
// ============================================================================
function DifferentialBuilder({ onBack }) {
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [selectedDiagnoses, setSelectedDiagnoses] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const symptoms = Object.values(DIFFERENTIAL_TEMPLATES);

  const toggleDiagnosis = (diagnosis) => {
    setSelectedDiagnoses(prev =>
      prev.includes(diagnosis)
        ? prev.filter(d => d !== diagnosis)
        : [...prev, diagnosis]
    );
  };

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  const reset = () => {
    setSelectedDiagnoses([]);
    setShowAnswers(false);
  };

  // Symptom selection view
  if (!selectedSymptom) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
          <span>←</span> Back to Dashboard
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Differential Diagnosis Builder</h1>
          <p className="text-gray-400">Practice building differentials for common presenting symptoms</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {symptoms.map(symptom => (
            <div
              key={symptom.symptom}
              onClick={() => setSelectedSymptom(symptom)}
              className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700 hover:border-indigo-500 cursor-pointer transition"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl">{symptom.icon}</span>
                <h3 className="font-semibold text-lg">{symptom.symptom}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                {symptom.mustNotMiss.length} must-not-miss diagnoses
              </p>
              <div className="flex flex-wrap gap-1">
                {symptom.mustNotMiss.slice(0, 3).map(d => (
                  <span key={d} className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs">{d}</span>
                ))}
                {symptom.mustNotMiss.length > 3 && (
                  <span className="px-2 py-0.5 bg-gray-700 text-gray-400 rounded text-xs">+{symptom.mustNotMiss.length - 3} more</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Differential building view
  const allDiagnoses = Object.values(selectedSymptom.categories).flat();
  const mustNotMissSelected = selectedSymptom.mustNotMiss.filter(d => selectedDiagnoses.includes(d));
  const mustNotMissMissed = selectedSymptom.mustNotMiss.filter(d => !selectedDiagnoses.includes(d));

  return (
    <div className="max-w-5xl mx-auto p-8">
      <button onClick={() => { setSelectedSymptom(null); reset(); }} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <span>←</span> Back to Symptoms
      </button>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl">{selectedSymptom.icon}</span>
        <div>
          <h1 className="text-2xl font-bold">{selectedSymptom.symptom}</h1>
          <p className="text-gray-400">Build your differential diagnosis</p>
        </div>
      </div>

      {/* Key Questions */}
      <div className="bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-xl p-5 border border-amber-500/30 mb-6">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span>💡</span> Key History Questions
        </h3>
        <ul className="space-y-2">
          {selectedSymptom.keyQuestions.map((q, i) => (
            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
              <span className="text-amber-400">•</span> {q}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Diagnosis Selection */}
        <div className="col-span-2 space-y-4">
          {Object.entries(selectedSymptom.categories).map(([category, diagnoses]) => (
            <div key={category} className="bg-[#1a1a24] rounded-xl p-4 border border-gray-700">
              <h3 className="font-semibold text-sm text-gray-400 mb-3 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {diagnoses.map(d => {
                  const isSelected = selectedDiagnoses.includes(d);
                  const isMustNotMiss = selectedSymptom.mustNotMiss.includes(d);
                  const missed = showAnswers && isMustNotMiss && !isSelected;
                  const correct = showAnswers && isMustNotMiss && isSelected;

                  return (
                    <button
                      key={d}
                      onClick={() => !showAnswers && toggleDiagnosis(d)}
                      disabled={showAnswers}
                      className={`px-3 py-1.5 rounded-lg text-sm transition ${
                        missed ? 'bg-red-500/30 border-2 border-red-500 text-red-300' :
                        correct ? 'bg-emerald-500/30 border-2 border-emerald-500 text-emerald-300' :
                        isSelected ? 'bg-indigo-500/30 border border-indigo-500 text-indigo-300' :
                        'bg-gray-700/50 border border-gray-600 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      {d}
                      {correct && ' ✓'}
                      {missed && ' ✗'}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Differential */}
        <div className="space-y-4">
          <div className="bg-[#1a1a24] rounded-xl p-4 border border-gray-700 sticky top-4">
            <h3 className="font-semibold mb-3">Your Differential ({selectedDiagnoses.length})</h3>
            {selectedDiagnoses.length === 0 ? (
              <p className="text-gray-500 text-sm">Click diagnoses to add them</p>
            ) : (
              <ul className="space-y-2 mb-4">
                {selectedDiagnoses.map((d, i) => (
                  <li key={d} className="flex items-center justify-between text-sm">
                    <span>{i + 1}. {d}</span>
                    {!showAnswers && (
                      <button onClick={() => toggleDiagnosis(d)} className="text-gray-500 hover:text-red-400">×</button>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {!showAnswers ? (
              <button
                onClick={checkAnswers}
                disabled={selectedDiagnoses.length === 0}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition"
              >
                Check My Differential
              </button>
            ) : (
              <div className="space-y-3">
                <div className="p-3 bg-[#0f0f17] rounded-lg">
                  <div className="text-sm text-emerald-400 mb-1">
                    Must-Not-Miss Found: {mustNotMissSelected.length}/{selectedSymptom.mustNotMiss.length}
                  </div>
                  {mustNotMissMissed.length > 0 && (
                    <div className="text-sm text-red-400">
                      Missed: {mustNotMissMissed.join(', ')}
                    </div>
                  )}
                </div>
                <button onClick={reset} className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// IMAGE-BASED LEARNING
// ============================================================================
function ImageLearning({ onBack, onAwardXP }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentCase, setCurrentCase] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState(null);

  const modules = Object.values(IMAGE_LEARNING_MODULES);

  const handleQuizAnswer = (index) => {
    if (quizAnswer !== null) return;
    setQuizAnswer(index);
    const caseData = selectedModule.cases[currentCase];
    if (index === caseData.quiz.correct) {
      onAwardXP && onAwardXP(XP_CONFIG.rewards.quizCorrectAnswer, 'quiz');
    }
  };

  const handleNext = () => {
    if (currentCase < selectedModule.cases.length - 1) {
      setCurrentCase(prev => prev + 1);
      setShowQuiz(false);
      setQuizAnswer(null);
    } else {
      setSelectedModule(null);
      setCurrentCase(0);
      setShowQuiz(false);
      setQuizAnswer(null);
    }
  };

  // Module selection
  if (!selectedModule) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
          <span>←</span> Back to Dashboard
        </button>

        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Image-Based Learning</h1>
          <p className="text-gray-400">Practice interpreting ECGs, X-rays, and laboratory values</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {modules.map(module => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700 hover:border-indigo-500 cursor-pointer transition"
            >
              <div className="text-4xl mb-4">{module.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{module.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{module.description}</p>
              <p className="text-xs text-indigo-400">{module.cases.length} cases</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const caseData = selectedModule.cases[currentCase];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <button onClick={() => { setSelectedModule(null); setCurrentCase(0); }} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <span>←</span> Back to Modules
      </button>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {selectedModule.cases.map((_, idx) => (
          <div key={idx} className={`h-2 flex-1 rounded-full ${idx <= currentCase ? 'bg-indigo-500' : 'bg-gray-700'}`} />
        ))}
      </div>

      <div className="bg-[#1a1a24] rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{selectedModule.icon}</span>
            <span className="text-sm text-gray-500">{selectedModule.name}</span>
          </div>
          <h2 className="text-xl font-bold">{caseData.name}</h2>
          <p className="text-gray-400">{caseData.description}</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Diagram/Values Display */}
          {caseData.diagram && (
            <div className="bg-[#0a0a12] rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
              <pre>{caseData.diagram}</pre>
            </div>
          )}

          {caseData.values && (
            <div className="bg-[#0a0a12] rounded-lg p-4">
              <h3 className="font-semibold text-sm text-gray-400 mb-3">Lab Values</h3>
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(caseData.values).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-400">{key}:</span>
                    <span className="text-amber-400 font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Findings */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-4 border-l-4 border-indigo-500">
            <h3 className="font-semibold text-sm text-indigo-400 mb-2">Key Findings</h3>
            <ul className="space-y-1">
              {caseData.findings.map((f, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-indigo-400">•</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quiz */}
        {!showQuiz ? (
          <div className="p-6 border-t border-gray-700">
            <button onClick={() => setShowQuiz(true)} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition">
              Test Your Knowledge
            </button>
          </div>
        ) : (
          <div className="p-6 border-t border-gray-700 space-y-4">
            <h3 className="font-semibold">{caseData.quiz.question}</h3>
            <div className="space-y-2">
              {caseData.quiz.options.map((option, idx) => {
                let cls = 'bg-[#0f0f17] border-gray-700 hover:border-indigo-500';
                if (quizAnswer !== null) {
                  if (idx === caseData.quiz.correct) cls = 'bg-emerald-500/20 border-emerald-500 text-emerald-400';
                  else if (idx === quizAnswer) cls = 'bg-red-500/20 border-red-500 text-red-400';
                }
                return (
                  <button key={idx} onClick={() => handleQuizAnswer(idx)} disabled={quizAnswer !== null}
                    className={`w-full p-4 text-left rounded-lg border transition ${cls}`}>
                    {option}
                  </button>
                );
              })}
            </div>
            {quizAnswer !== null && (
              <div className="flex justify-end pt-4">
                <button onClick={handleNext} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition">
                  {currentCase < selectedModule.cases.length - 1 ? 'Next Case' : 'Finish Module'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// PROGRESS ANALYTICS
// ============================================================================
function ProgressAnalytics({ mastery, quizStats, userProgress, library, onBack, onNavigate }) {
  const topics = typeof TOPICS !== 'undefined' ? TOPICS : {};

  // Calculate category performance
  const categoryStats = AdaptiveLearning.analyzePerformance(userProgress?.quizHistory || [], mastery);

  // Calculate weekly activity (mock data for now based on XP)
  const totalXP = userProgress?.xp || 0;
  const weeklyData = [
    { day: 'Mon', xp: Math.floor(totalXP * 0.12) },
    { day: 'Tue', xp: Math.floor(totalXP * 0.18) },
    { day: 'Wed', xp: Math.floor(totalXP * 0.08) },
    { day: 'Thu', xp: Math.floor(totalXP * 0.22) },
    { day: 'Fri', xp: Math.floor(totalXP * 0.15) },
    { day: 'Sat', xp: Math.floor(totalXP * 0.1) },
    { day: 'Sun', xp: Math.floor(totalXP * 0.15) }
  ];
  const maxWeeklyXP = Math.max(...weeklyData.map(d => d.xp), 1);

  // Mastery distribution
  const masteryLevels = { 'Not Started': 0, 'Introduced': 0, 'Familiar': 0, 'Proficient': 0, 'Mastered': 0 };
  Object.values(mastery).forEach(m => {
    const level = getMasteryLevel(m);
    masteryLevels[level.name]++;
  });
  const totalTopics = Object.keys(topics).length || 44;
  masteryLevels['Not Started'] = totalTopics - Object.keys(mastery).length;

  // Recommendations
  const recommendations = AdaptiveLearning.getRecommendations(categoryStats, mastery, topics);

  return (
    <div className="max-w-5xl mx-auto p-8">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <span>←</span> Back to Dashboard
      </button>

      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Progress Analytics</h1>
        <p className="text-gray-400">Track your learning journey and identify areas for improvement</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="text-sm text-gray-500 mb-2">Total XP</div>
          <div className="text-3xl font-bold text-amber-400">{totalXP}</div>
          <div className="text-xs text-gray-500">Level {getLevel(totalXP).level}</div>
        </div>
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="text-sm text-gray-500 mb-2">Quiz Accuracy</div>
          <div className="text-3xl font-bold text-emerald-400">
            {quizStats.total > 0 ? Math.round((quizStats.correct / quizStats.total) * 100) : 0}%
          </div>
          <div className="text-xs text-gray-500">{quizStats.correct}/{quizStats.total} correct</div>
        </div>
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="text-sm text-gray-500 mb-2">Topics Studied</div>
          <div className="text-3xl font-bold text-indigo-400">{Object.keys(mastery).length}</div>
          <div className="text-xs text-gray-500">of {totalTopics}</div>
        </div>
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="text-sm text-gray-500 mb-2">Achievements</div>
          <div className="text-3xl font-bold text-purple-400">{userProgress?.achievements?.length || 0}</div>
          <div className="text-xs text-gray-500">of {Object.keys(ACHIEVEMENTS).length}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Weekly Activity Chart */}
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <h3 className="font-semibold mb-4">Weekly Activity</h3>
          <div className="flex items-end justify-between h-32 gap-2">
            {weeklyData.map(day => (
              <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gray-700 rounded-t relative" style={{ height: `${(day.xp / maxWeeklyXP) * 100}%`, minHeight: '4px' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t" />
                </div>
                <span className="text-xs text-gray-500">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mastery Distribution */}
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <h3 className="font-semibold mb-4">Mastery Distribution</h3>
          <div className="space-y-3">
            {MASTERY_LEVELS.map(level => {
              const count = masteryLevels[level.name] || 0;
              const percent = totalTopics > 0 ? (count / totalTopics) * 100 : 0;
              return (
                <div key={level.level}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center gap-2">
                      <span className={getMasteryColorClass(level)}>{level.icon}</span>
                      <span className="text-gray-300">{level.name}</span>
                    </span>
                    <span className="text-gray-500">{count}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full ${getMasteryBgClass(level).replace('/20', '')}`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      {recommendations.length > 0 && (
        <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-xl p-5 border border-indigo-500/30 mb-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>🎯</span> AI-Powered Recommendations
          </h3>
          <div className="space-y-3">
            {recommendations.slice(0, 5).map((rec, i) => (
              <div key={i} className="flex items-center justify-between bg-[#1a1a24] p-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className={rec.type === 'weak-category' ? 'text-amber-400' : 'text-indigo-400'}>
                    {rec.type === 'weak-category' ? '📊' : '📚'}
                  </span>
                  <span className="text-sm text-gray-300">{rec.message}</span>
                </div>
                {rec.topicId && (
                  <button
                    onClick={() => onNavigate && onNavigate('topic', rec.topicId)}
                    className="text-xs text-indigo-400 hover:text-indigo-300"
                  >
                    Study →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Performance */}
      <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
        <h3 className="font-semibold mb-4">Performance by Category</h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(categoryStats).map(([category, stats]) => {
            if (stats.total === 0) return null;
            const color = stats.accuracy >= 80 ? 'emerald' : stats.accuracy >= 60 ? 'amber' : 'red';
            return (
              <div key={category} className="bg-[#0f0f17] rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium capitalize">{category}</span>
                  <span className={`text-sm font-bold text-${color}-400`}>{stats.accuracy}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-${color}-500`} style={{ width: `${stats.accuracy}%` }} />
                </div>
                <p className="text-xs text-gray-500 mt-2">{stats.correct}/{stats.total} correct</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// CASE LIBRARY VIEW
// ============================================================================
function CaseLibraryView({ onBack, onStartCase }) {
  const caseOfTheDay = getCaseOfTheDay();
  const allCases = Object.values(CASE_LIBRARY.cases);

  // Group cases by category
  const casesByCategory = allCases.reduce((acc, c) => {
    if (!acc[c.category]) acc[c.category] = [];
    acc[c.category].push(c);
    return acc;
  }, {});

  const difficultyColors = {
    'Beginner': 'text-emerald-400 bg-emerald-500/20',
    'Intermediate': 'text-amber-400 bg-amber-500/20',
    'Advanced': 'text-red-400 bg-red-500/20'
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition"
      >
        <span>←</span> Back to Dashboard
      </button>

      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Case Library</h1>
        <p className="text-gray-400">Pre-built clinical cases for practice and learning</p>
      </div>

      {/* Case of the Day */}
      <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-xl p-6 border border-emerald-500/30 mb-8">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📅</div>
            <div>
              <div className="text-xs text-emerald-400 font-medium mb-1">CASE OF THE DAY</div>
              <h2 className="text-xl font-bold mb-2">{caseOfTheDay.title}</h2>
              <p className="text-gray-400 mb-3">{caseOfTheDay.description}</p>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-xs ${difficultyColors[caseOfTheDay.difficulty] || 'text-gray-400 bg-gray-500/20'}`}>
                  {caseOfTheDay.difficulty}
                </span>
                <span className="text-gray-500 text-sm">{caseOfTheDay.category}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onStartCase(caseOfTheDay)}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-medium transition whitespace-nowrap"
          >
            Start Case
          </button>
        </div>
      </div>

      {/* All Cases by Category */}
      {Object.entries(casesByCategory).map(([category, cases]) => (
        <div key={category} className="mb-8">
          <h3 className="font-semibold text-lg mb-4">{category}</h3>
          <div className="grid grid-cols-2 gap-4">
            {cases.map(c => (
              <div
                key={c.id}
                className="bg-[#1a1a24] rounded-xl p-5 border border-gray-700 hover:border-indigo-500 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{c.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{c.title}</h4>
                    <p className="text-sm text-gray-400 mb-3">{c.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-xs ${difficultyColors[c.difficulty] || 'text-gray-400 bg-gray-500/20'}`}>
                        {c.difficulty}
                      </span>
                      <button
                        onClick={() => onStartCase(c)}
                        className="text-sm text-indigo-400 hover:text-indigo-300 transition"
                      >
                        Start →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// ROADMAP
// ============================================================================
function Roadmap({ mastery, onSelectTopic }) {
  const [expandedCats, setExpandedCats] = useState({});

  const curriculum = typeof CURRICULUM !== 'undefined' ? CURRICULUM : {};

  // Calculate mastery level for a topic using new system
  const getTopicMasteryLevel = (topicId) => {
    const topicMastery = mastery[topicId];
    return getMasteryLevel(topicMastery);
  };

  // Calculate category progress based on mastery levels
  const getCategoryProgress = (subcats) => {
    let totalPoints = 0;
    let maxPoints = 0;
    subcats.forEach(sub => {
      sub.topics?.forEach(topicId => {
        maxPoints += 10; // Max 10 points per topic
        totalPoints += getMasteryPoints(mastery[topicId]);
      });
    });
    return maxPoints > 0 ? Math.round((totalPoints / maxPoints) * 100) : 0;
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Learning Roadmap</h1>
        <p className="text-gray-400">Master Internal Medicine through structured, progressive learning</p>
      </div>

      {/* Mastery Legend */}
      <div className="flex flex-wrap gap-3 mb-6 p-4 bg-[#1a1a24] rounded-lg border border-gray-700">
        {MASTERY_LEVELS.map(level => (
          <div key={level.level} className="flex items-center gap-2 text-sm">
            <span className={getMasteryColorClass(level)}>{level.icon}</span>
            <span className="text-gray-400">{level.name}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {Object.values(curriculum).map(category => {
          const subcats = Object.values(category.subcategories || {});
          const totalTopics = subcats.reduce((sum, sub) => sum + (sub.topics?.length || 0), 0);
          const progress = getCategoryProgress(subcats);

          return (
            <div key={category.id} className="bg-[#1a1a24] rounded-xl border border-gray-700 overflow-hidden">
              <div
                className="p-4 cursor-pointer flex items-center gap-4 hover:bg-gray-800/50 transition"
                onClick={() => setExpandedCats(prev => ({ ...prev, [category.id]: !prev[category.id] }))}
              >
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm text-gray-500">{totalTopics} topics</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-indigo-400">{progress}%</div>
                  <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <div className={`transform transition-transform ${expandedCats[category.id] ? 'rotate-180' : ''}`}>
                  <Icons.ChevronDown />
                </div>
              </div>

              {expandedCats[category.id] && (
                <div className="px-4 pb-4 space-y-3 animate-fadeIn">
                  {subcats.map(sub => (
                    <div key={sub.id} className="bg-[#0f0f17] rounded-lg p-4">
                      <div className="font-medium text-sm mb-3 text-gray-300">{sub.name}</div>
                      <div className="space-y-2">
                        {sub.topics?.map(topicId => {
                          const topic = typeof TOPICS !== 'undefined' ? TOPICS[topicId] : null;
                          const level = getTopicMasteryLevel(topicId);
                          const points = getMasteryPoints(mastery[topicId]);
                          return (
                            <div
                              key={topicId}
                              onClick={() => onSelectTopic(topicId)}
                              className="p-3 bg-[#1a1a24] rounded-lg cursor-pointer flex items-center gap-3 hover:bg-gray-800 hover:border-indigo-500/50 border border-transparent transition group"
                            >
                              <span className={`text-lg ${getMasteryColorClass(level)}`}>{level.icon}</span>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-sm group-hover:text-indigo-300 transition truncate">
                                  {topic?.name || topicId}
                                </div>
                                {points > 0 && (
                                  <div className="text-xs text-gray-500">{points}/10 points</div>
                                )}
                              </div>
                              <span className={`px-2 py-1 rounded text-xs whitespace-nowrap ${getMasteryBgClass(level)} ${getMasteryColorClass(level)}`}>
                                {level.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// TOPIC DETAIL - Khan Academy Style Learning
// ============================================================================
function TopicDetail({ topicId, mastery, onUpdateMastery, onAddToLibrary, library, onBack }) {
  const [activeTab, setActiveTab] = useState('chapter');
  const [quizState, setQuizState] = useState({
    currentQ: 0,
    selected: null,
    showExplanation: false,
    results: { correct: 0, total: 0 },
    completed: false
  });

  const topic = typeof TOPICS !== 'undefined' ? TOPICS[topicId] : null;
  const topicMastery = mastery[topicId] || { points: 0 };
  const masteryLevel = getMasteryLevel(topicMastery);
  const points = getMasteryPoints(topicMastery);

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <p className="text-gray-400">Topic not found</p>
        <button onClick={onBack} className="mt-4 text-indigo-400 hover:text-indigo-300">
          Back to Roadmap
        </button>
      </div>
    );
  }

  const categoryName = typeof CURRICULUM !== 'undefined' && CURRICULUM[topic.category]
    ? CURRICULUM[topic.category].name
    : topic.category;

  const tabs = [
    { id: 'chapter', label: 'Chapter', icon: '📖' },
    { id: 'podcast', label: 'Podcast', icon: '🎧' },
    { id: 'articles', label: 'Articles', icon: '📄' },
    { id: 'resources', label: 'Resources', icon: '🔗' },
    { id: 'quiz', label: 'Quiz', icon: '✏️' }
  ];

  // External resources mapped by topic category and specific topics
  const getExternalResources = () => {
    const categoryResources = {
      cardiovascular: [
        { name: 'Clinical Problem Solvers', url: 'https://clinicalproblemsolving.com/category/cardiovascular/', icon: '🧩', description: 'Case-based cardiovascular reasoning' },
        { name: 'ACC Guidelines', url: 'https://www.acc.org/guidelines', icon: '📋', description: 'American College of Cardiology clinical guidelines' },
        { name: 'Curbsiders Cardiology', url: 'https://thecurbsiders.com/category/cardiology', icon: '🎙️', description: 'Internal medicine podcast episodes on cardiology' }
      ],
      pulmonary: [
        { name: 'Clinical Problem Solvers', url: 'https://clinicalproblemsolving.com/category/pulmonary/', icon: '🧩', description: 'Case-based pulmonary reasoning' },
        { name: 'CHEST Guidelines', url: 'https://www.chestnet.org/Guidelines-and-Resources', icon: '📋', description: 'American College of Chest Physicians guidelines' },
        { name: 'PulmCrit', url: 'https://emcrit.org/pulmcrit/', icon: '🫁', description: 'Evidence-based pulmonary and critical care' }
      ],
      renal: [
        { name: 'Clinical Problem Solvers', url: 'https://clinicalproblemsolving.com/category/renal/', icon: '🧩', description: 'Case-based nephrology reasoning' },
        { name: 'NephJC', url: 'https://www.nephjc.com/', icon: '📚', description: 'Nephrology journal club and education' },
        { name: 'KDIGO Guidelines', url: 'https://kdigo.org/guidelines/', icon: '📋', description: 'Kidney Disease: Improving Global Outcomes guidelines' }
      ],
      endocrine: [
        { name: 'Clinical Problem Solvers', url: 'https://clinicalproblemsolving.com/category/endocrine/', icon: '🧩', description: 'Case-based endocrine reasoning' },
        { name: 'ADA Standards of Care', url: 'https://diabetesjournals.org/care/issue/47/Supplement_1', icon: '📋', description: 'American Diabetes Association guidelines' },
        { name: 'Endocrine Society Guidelines', url: 'https://www.endocrine.org/clinical-practice-guidelines', icon: '📋', description: 'Clinical practice guidelines in endocrinology' }
      ],
      infectious: [
        { name: 'Clinical Problem Solvers', url: 'https://clinicalproblemsolving.com/category/infectious-disease/', icon: '🧩', description: 'Case-based ID reasoning' },
        { name: 'IDSA Guidelines', url: 'https://www.idsociety.org/practice-guideline/practice-guidelines/', icon: '📋', description: 'Infectious Diseases Society guidelines' },
        { name: 'Sanford Guide', url: 'https://www.sanfordguide.com/', icon: '💊', description: 'Antimicrobial therapy reference' }
      ],
      gi: [
        { name: 'Clinical Problem Solvers', url: 'https://clinicalproblemsolving.com/category/gi/', icon: '🧩', description: 'Case-based GI reasoning' },
        { name: 'ACG Guidelines', url: 'https://gi.org/clinical-guidelines/', icon: '📋', description: 'American College of Gastroenterology guidelines' },
        { name: 'AASLD Guidelines', url: 'https://www.aasld.org/practice-guidelines', icon: '📋', description: 'Liver disease practice guidelines' }
      ],
      hematology: [
        { name: 'Clinical Problem Solvers', url: 'https://clinicalproblemsolving.com/category/hematology/', icon: '🧩', description: 'Case-based hematology reasoning' },
        { name: 'ASH Guidelines', url: 'https://www.hematology.org/education/clinicians/guidelines-and-quality-care', icon: '📋', description: 'American Society of Hematology guidelines' },
        { name: 'Blood Journal', url: 'https://ashpublications.org/blood', icon: '📚', description: 'Premier hematology research journal' }
      ],
      neurology: [
        { name: 'Clinical Problem Solvers', url: 'https://clinicalproblemsolving.com/category/neurology/', icon: '🧩', description: 'Case-based neurology reasoning' },
        { name: 'AAN Guidelines', url: 'https://www.aan.com/practice/guidelines', icon: '📋', description: 'American Academy of Neurology guidelines' }
      ],
      rheumatology: [
        { name: 'Clinical Problem Solvers', url: 'https://clinicalproblemsolving.com/category/rheumatology/', icon: '🧩', description: 'Case-based rheumatology reasoning' },
        { name: 'ACR Guidelines', url: 'https://www.rheumatology.org/Practice-Quality/Clinical-Support/Clinical-Practice-Guidelines', icon: '📋', description: 'American College of Rheumatology guidelines' }
      ]
    };

    const topicSpecificResources = {
      'afib': [
        { name: 'AF Guidelines Hub', url: 'https://www.acc.org/guidelines/hubs/atrial-fibrillation', icon: '❤️', description: 'Comprehensive AF guideline collection' },
        { name: 'CHA₂DS₂-VASc Calculator', url: 'https://www.mdcalc.com/calc/801/cha2ds2-vasc-score-atrial-fibrillation-stroke-risk', icon: '🧮', description: 'MDCalc stroke risk calculator' }
      ],
      'hfref': [
        { name: 'HF Guidelines Hub', url: 'https://www.acc.org/guidelines/hubs/heart-failure', icon: '❤️', description: 'Heart failure guideline collection' },
        { name: 'GDMT Optimizer', url: 'https://www.acc.org/tools-and-practice-support/clinical-toolkits/heart-failure-practice-solutions', icon: '💊', description: 'Guideline-directed medical therapy tools' }
      ],
      'sepsis': [
        { name: 'Surviving Sepsis', url: 'https://www.sccm.org/SurvivingSepsisCampaign/Guidelines', icon: '🏥', description: 'Surviving Sepsis Campaign guidelines' },
        { name: 'qSOFA Calculator', url: 'https://www.mdcalc.com/calc/2654/qsofa-quick-sofa-score-sepsis', icon: '🧮', description: 'Quick sepsis assessment' }
      ],
      'dka-hhs': [
        { name: 'DKA Protocol', url: 'https://www.mdcalc.com/calc/1927/diabetic-ketoacidosis-dka-calculator', icon: '🧮', description: 'DKA severity and management calculator' }
      ],
      'hyponatremia': [
        { name: 'Hyponatremia Algorithm', url: 'https://www.mdcalc.com/calc/95/sodium-correction-rate-hyponatremia-hypernatremia', icon: '🧮', description: 'Sodium correction calculator' }
      ],
      'pe-diagnosis': [
        { name: 'Wells Score PE', url: 'https://www.mdcalc.com/calc/115/wells-criteria-pulmonary-embolism', icon: '🧮', description: 'PE probability assessment' },
        { name: 'PERC Rule', url: 'https://www.mdcalc.com/calc/347/perc-rule-pulmonary-embolism', icon: '🧮', description: 'Rule out PE without testing' }
      ],
      'aki-workup': [
        { name: 'FeNa Calculator', url: 'https://www.mdcalc.com/calc/60/fractional-excretion-sodium-fena', icon: '🧮', description: 'Fractional excretion of sodium' },
        { name: 'KDIGO AKI Guidelines', url: 'https://kdigo.org/guidelines/acute-kidney-injury/', icon: '📋', description: 'AKI staging and management' }
      ]
    };

    // Return structured object with separate arrays for each resource type
    return {
      topicSpecific: topicSpecificResources[topicId] || [],
      category: categoryResources[topic.category] || [],
      general: [
        { name: 'UpToDate', url: 'https://www.uptodate.com/', icon: '📖', description: 'Evidence-based clinical decision support' },
        { name: 'MDCalc', url: 'https://www.mdcalc.com/', icon: '🧮', description: 'Medical calculators and decision tools' }
      ]
    };
  };

  const isChapterRead = topicMastery.chapterRead;
  const isPodcastListened = topicMastery.podcastListened;
  const articlesSaved = topicMastery.articlesSaved || [];

  const handleMarkChapterRead = () => {
    onUpdateMastery(topicId, {
      ...topicMastery,
      points: (topicMastery.points || 0) + 2,
      chapterRead: true
    });
  };

  const handleMarkPodcastListened = () => {
    onUpdateMastery(topicId, {
      ...topicMastery,
      points: (topicMastery.points || 0) + 1,
      podcastListened: true
    });
  };

  const handleSaveArticle = (article) => {
    const alreadySaved = articlesSaved.includes(article.title);
    if (alreadySaved) return;

    const newArticlesSaved = [...articlesSaved, article.title];
    const pointsToAdd = newArticlesSaved.length <= 2 ? 1 : 0;

    onUpdateMastery(topicId, {
      ...topicMastery,
      points: (topicMastery.points || 0) + pointsToAdd,
      articlesSaved: newArticlesSaved
    });

    onAddToLibrary({
      ...article,
      topicId,
      topicName: topic.name,
      savedAt: new Date().toISOString()
    });
  };

  const isArticleSaved = (article) => {
    return articlesSaved.includes(article.title) ||
      library.some(item => item.title === article.title && item.topicId === topicId);
  };

  const handleQuizAnswer = (index) => {
    if (quizState.showExplanation) return;

    const question = topic.quizzes[quizState.currentQ];
    const isCorrect = index === question.correct;

    if (isCorrect) {
      onUpdateMastery(topicId, {
        ...topicMastery,
        points: (topicMastery.points || 0) + 1,
        quizResults: {
          correct: ((topicMastery.quizResults?.correct || 0) + 1),
          total: ((topicMastery.quizResults?.total || 0) + 1)
        }
      });
    } else {
      onUpdateMastery(topicId, {
        ...topicMastery,
        quizResults: {
          correct: (topicMastery.quizResults?.correct || 0),
          total: ((topicMastery.quizResults?.total || 0) + 1)
        }
      });
    }

    setQuizState(prev => ({
      ...prev,
      selected: index,
      showExplanation: true,
      results: {
        correct: prev.results.correct + (isCorrect ? 1 : 0),
        total: prev.results.total + 1
      }
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQ < topic.quizzes.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQ: prev.currentQ + 1,
        selected: null,
        showExplanation: false
      }));
    } else {
      setQuizState(prev => ({ ...prev, completed: true }));
    }
  };

  const handleRestartQuiz = () => {
    setQuizState({
      currentQ: 0,
      selected: null,
      showExplanation: false,
      results: { correct: 0, total: 0 },
      completed: false
    });
  };

  const sectionStyles = {
    intro: 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-l-4 border-indigo-500',
    concept: 'bg-[#1a1a24] border border-gray-700',
    pearl: 'bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500',
    alert: 'bg-gradient-to-r from-red-500/10 to-pink-500/10 border-l-4 border-red-500'
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition"
      >
        <span>←</span> Back to Roadmap
      </button>

      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{topic.name}</h1>
        <p className="text-gray-400 text-sm mb-4">{categoryName}</p>

        {/* Mastery Progress */}
        <div className="flex items-center gap-4">
          <div className={`px-3 py-1 rounded-full ${getMasteryBgClass(masteryLevel)} ${getMasteryColorClass(masteryLevel)} text-sm font-medium`}>
            {masteryLevel.icon} {masteryLevel.name}
          </div>
          <div className="flex-1 max-w-xs">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                style={{ width: `${Math.min((points / 10) * 100, 100)}%` }}
              />
            </div>
          </div>
          <span className="text-sm text-gray-400">{points}/10 points</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 flex items-center gap-2 border-b-2 transition ${
              activeTab === tab.id
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {/* Chapter Tab */}
        {activeTab === 'chapter' && (
          <div className="space-y-6">
            {topic.lesson?.sections?.map((section, idx) => (
              <div key={idx} className={`p-5 rounded-lg ${sectionStyles[section.type] || sectionStyles.concept}`}>
                {section.title && (
                  <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
                )}
                <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}

            {topic.lesson?.article && (
              <div className="border-t border-gray-700 pt-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl font-semibold">{topic.lesson.article.title}</h2>
                  <span className="text-sm text-gray-500">{topic.lesson.article.readTime}</span>
                </div>
                <div
                  className="prose prose-invert max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: topic.lesson.article.content }}
                />
              </div>
            )}

            {!isChapterRead && (
              <button
                onClick={handleMarkChapterRead}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition"
              >
                Mark Chapter as Read (+2 points)
              </button>
            )}
            {isChapterRead && (
              <div className="text-center py-3 text-emerald-400">
                <span className="text-lg mr-2">✓</span> Chapter completed
              </div>
            )}
          </div>
        )}

        {/* Podcast Tab */}
        {activeTab === 'podcast' && (
          <div>
            {topic.lesson?.podcast ? (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">{topic.lesson.podcast.title}</h2>
                  <p className="text-gray-400">{topic.lesson.podcast.duration}</p>
                </div>

                {/* Visual Audio Player */}
                <div className="bg-[#1a1a24] rounded-xl p-4 flex items-center gap-4 mb-8 border border-gray-700">
                  <button className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition">
                    <span className="text-xl ml-1">▶</span>
                  </button>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-indigo-500 rounded-full" />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0:00</span>
                      <span>{topic.lesson.podcast.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Transcript */}
                <h3 className="font-semibold mb-4">Transcript</h3>
                <div className="space-y-4 bg-[#0f0f17] rounded-lg p-4">
                  {topic.lesson.podcast.transcript?.map((line, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="font-medium text-indigo-400 min-w-[80px]">{line.speaker}:</span>
                      <p className="text-gray-300">{line.text}</p>
                    </div>
                  ))}
                </div>

                {!isPodcastListened && (
                  <button
                    onClick={handleMarkPodcastListened}
                    className="w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition"
                  >
                    Mark as Listened (+1 point)
                  </button>
                )}
                {isPodcastListened && (
                  <div className="text-center mt-6 py-3 text-emerald-400">
                    <span className="text-lg mr-2">✓</span> Podcast completed
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <div className="text-4xl mb-4">🎧</div>
                <p>No podcast available for this topic yet.</p>
              </div>
            )}
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div>
            {topic.literature && topic.literature.length > 0 ? (
              <div className="space-y-4">
                <p className="text-gray-400 mb-4">
                  Key literature and trials related to this topic. Save articles to your library to track your reading.
                </p>
                {topic.literature.map((article, idx) => {
                  const saved = isArticleSaved(article);
                  return (
                    <div
                      key={idx}
                      className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              article.type === 'trial' ? 'bg-blue-500/20 text-blue-400' :
                              article.type === 'guideline' ? 'bg-emerald-500/20 text-emerald-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {article.type}
                            </span>
                            <span className="text-gray-500 text-sm">{article.year}</span>
                          </div>
                          <h3 className="font-semibold mb-2">{article.title}</h3>
                          <p className="text-gray-400 text-sm">{article.summary}</p>
                        </div>
                        <button
                          onClick={() => handleSaveArticle(article)}
                          disabled={saved}
                          className={`px-3 py-1.5 rounded-lg text-sm transition whitespace-nowrap ${
                            saved
                              ? 'bg-emerald-500/20 text-emerald-400 cursor-default'
                              : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                          }`}
                        >
                          {saved ? '✓ Saved' : 'Save to Library'}
                        </button>
                      </div>
                    </div>
                  );
                })}
                <p className="text-sm text-gray-500 mt-4">
                  Save up to 2 articles to earn mastery points (+1 each)
                </p>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <div className="text-4xl mb-4">📄</div>
                <p>No articles available for this topic yet.</p>
              </div>
            )}
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div>
            {(() => {
              const resources = getExternalResources();
              return (
                <div className="space-y-8">
                  {/* Topic-specific resources */}
                  {resources.topicSpecific.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <span>🎯</span> Resources for {topic.name}
                      </h3>
                      <div className="grid gap-4">
                        {resources.topicSpecific.map((resource, idx) => (
                          <a
                            key={idx}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 bg-[#1a1a24] rounded-xl border border-gray-700 hover:border-indigo-500 transition group"
                          >
                            <div className="flex items-start gap-4">
                              <span className="text-2xl">{resource.icon}</span>
                              <div className="flex-1">
                                <h4 className="font-semibold group-hover:text-indigo-400 transition flex items-center gap-2">
                                  {resource.name}
                                  <span className="text-gray-500 text-sm">↗</span>
                                </h4>
                                <p className="text-gray-400 text-sm mt-1">{resource.description}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Category resources */}
                  {resources.category.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <span>📚</span> {topic.category.charAt(0).toUpperCase() + topic.category.slice(1)} Resources
                      </h3>
                      <div className="grid gap-4">
                        {resources.category.map((resource, idx) => (
                          <a
                            key={idx}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 bg-[#1a1a24] rounded-xl border border-gray-700 hover:border-indigo-500 transition group"
                          >
                            <div className="flex items-start gap-4">
                              <span className="text-2xl">{resource.icon}</span>
                              <div className="flex-1">
                                <h4 className="font-semibold group-hover:text-indigo-400 transition flex items-center gap-2">
                                  {resource.name}
                                  <span className="text-gray-500 text-sm">↗</span>
                                </h4>
                                <p className="text-gray-400 text-sm mt-1">{resource.description}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* General resources */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span>🌐</span> General Medical Resources
                    </h3>
                    <div className="grid gap-4">
                      {resources.general.map((resource, idx) => (
                        <a
                          key={idx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 bg-[#1a1a24] rounded-xl border border-gray-700 hover:border-indigo-500 transition group"
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-2xl">{resource.icon}</span>
                            <div className="flex-1">
                              <h4 className="font-semibold group-hover:text-indigo-400 transition flex items-center gap-2">
                                {resource.name}
                                <span className="text-gray-500 text-sm">↗</span>
                              </h4>
                              <p className="text-gray-400 text-sm mt-1">{resource.description}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 text-center mt-6">
                    Links open in a new tab. External resources are curated for educational purposes.
                  </p>
                </div>
              );
            })()}
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div>
            {topic.quizzes && topic.quizzes.length > 0 ? (
              quizState.completed ? (
                /* Quiz Complete */
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
                  <p className="text-xl mb-6">
                    You got <span className="text-emerald-400 font-semibold">{quizState.results.correct}</span> out of{' '}
                    <span className="font-semibold">{quizState.results.total}</span> correct
                  </p>
                  <button
                    onClick={handleRestartQuiz}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                /* Quiz Questions */
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-400">
                      Question {quizState.currentQ + 1} of {topic.quizzes.length}
                    </span>
                    <span className="text-sm text-gray-500">
                      {quizState.results.correct}/{quizState.results.total} correct
                    </span>
                  </div>

                  <div className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700">
                    <p className="text-lg mb-6">{topic.quizzes[quizState.currentQ].question}</p>

                    <div className="space-y-3">
                      {topic.quizzes[quizState.currentQ].options.map((option, idx) => {
                        const isSelected = quizState.selected === idx;
                        const isCorrect = idx === topic.quizzes[quizState.currentQ].correct;
                        const showResult = quizState.showExplanation;

                        let buttonClass = 'bg-[#0f0f17] border-gray-700 hover:border-indigo-500';
                        if (showResult) {
                          if (isCorrect) {
                            buttonClass = 'bg-emerald-500/20 border-emerald-500';
                          } else if (isSelected && !isCorrect) {
                            buttonClass = 'bg-red-500/20 border-red-500';
                          }
                        } else if (isSelected) {
                          buttonClass = 'bg-indigo-500/20 border-indigo-500';
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => handleQuizAnswer(idx)}
                            disabled={quizState.showExplanation}
                            className={`w-full p-4 text-left rounded-lg border transition ${buttonClass}`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>

                    {quizState.showExplanation && (
                      <div className="mt-6 p-4 bg-[#0f0f17] rounded-lg border border-gray-700">
                        <p className="font-medium mb-2">
                          {quizState.selected === topic.quizzes[quizState.currentQ].correct
                            ? '✓ Correct!'
                            : '✗ Incorrect'}
                        </p>
                        <p className="text-gray-400">{topic.quizzes[quizState.currentQ].explanation}</p>
                      </div>
                    )}

                    {quizState.showExplanation && (
                      <button
                        onClick={handleNextQuestion}
                        className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition"
                      >
                        {quizState.currentQ < topic.quizzes.length - 1 ? 'Next Question' : 'See Results'}
                      </button>
                    )}
                  </div>
                </div>
              )
            ) : (
              <div className="text-center py-12 text-gray-400">
                <div className="text-4xl mb-4">✏️</div>
                <p>No quiz questions available for this topic yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// LIBRARY
// ============================================================================
function Library({ library, onRemove, onNavigateToTopic }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  if (library.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <div className="text-5xl mb-4">📖</div>
        <h2 className="text-xl font-bold mb-2">Your Library is Empty</h2>
        <p className="text-gray-400 mb-6">Save articles and trials from topic lessons to build your personal medical reference library.</p>
        <p className="text-sm text-gray-500">Go to the Roadmap, select a topic, and save articles from the Articles tab.</p>
      </div>
    );
  }

  // Group by topic
  const groupedByTopic = library.reduce((acc, item, index) => {
    const topicKey = item.topicId || 'uncategorized';
    if (!acc[topicKey]) {
      acc[topicKey] = {
        topicName: item.topicName || 'Uncategorized',
        items: []
      };
    }
    acc[topicKey].items.push({ ...item, originalIndex: index });
    return acc;
  }, {});

  // Get unique types for filter
  const types = [...new Set(library.map(item => item.type).filter(Boolean))];

  // Filter items
  const filterItems = (items) => {
    return items.filter(item => {
      const matchesFilter = filter === 'all' || item.type === filter;
      const matchesSearch = !searchTerm ||
        (item.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.summary || '').toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  const filteredGroups = Object.entries(groupedByTopic)
    .map(([topicId, group]) => ({
      topicId,
      topicName: group.topicName,
      items: filterItems(group.items)
    }))
    .filter(group => group.items.length > 0);

  const totalFiltered = filteredGroups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">My Library</h1>
        <p className="text-gray-400">{library.length} saved articles and trials</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your library..."
            className="w-full bg-[#1a1a24] border border-gray-700 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-indigo-500 transition"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-[#1a1a24] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500 transition"
        >
          <option value="all">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
          ))}
        </select>
      </div>

      {totalFiltered === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p>No items match your search.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredGroups.map(group => (
            <div key={group.topicId} className="bg-[#1a1a24] rounded-xl border border-gray-700 overflow-hidden">
              <div
                className="p-4 bg-[#0f0f17] flex items-center justify-between cursor-pointer hover:bg-gray-800/50 transition"
                onClick={() => onNavigateToTopic && onNavigateToTopic(group.topicId)}
              >
                <div>
                  <h3 className="font-semibold">{group.topicName}</h3>
                  <p className="text-sm text-gray-500">{group.items.length} item{group.items.length !== 1 ? 's' : ''}</p>
                </div>
                <span className="text-gray-400 text-sm hover:text-indigo-400">View Topic →</span>
              </div>
              <div className="divide-y divide-gray-700">
                {group.items.map((item) => (
                  <div key={item.originalIndex} className="p-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {item.type && (
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              item.type === 'trial' ? 'bg-blue-500/20 text-blue-400' :
                              item.type === 'guideline' ? 'bg-emerald-500/20 text-emerald-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {item.type}
                            </span>
                          )}
                          {item.year && <span className="text-gray-500 text-sm">{item.year}</span>}
                        </div>
                        <h4 className="font-medium mb-1">{item.title || item.name}</h4>
                        <p className="text-sm text-gray-400">{item.summary || item.results}</p>
                        {item.savedAt && (
                          <p className="text-xs text-gray-600 mt-2">
                            Saved {new Date(item.savedAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemove(item.originalIndex);
                        }}
                        className="text-gray-500 hover:text-red-400 transition p-1"
                        title="Remove from library"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MAIN APP
// ============================================================================
function App() {
  const [mastery, setMastery] = useLocalStorage('watershed-mastery', {});
  const [library, setLibrary] = useLocalStorage('watershed-library', []);
  const [streak, setStreak] = useLocalStorage('watershed-streak', 1);
  const [quizStats, setQuizStats] = useLocalStorage('watershed-quiz-stats', { correct: 0, total: 0 });

  // New gamification state
  const [userProgress, setUserProgress] = useLocalStorage('watershed-user-progress', {
    xp: 0,
    achievements: [],
    dailyProgress: { date: null, xp: 0, quizzes: 0, activities: 0, histories: 0 },
    stats: { casesCompleted: 0, historiesCompleted: 0, presentationsCompleted: 0, quizStreak: 0 },
    lastLogin: null
  });

  const [currentView, setCurrentView] = useState('case');
  const [caseText, setCaseText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [standaloneScenario, setStandaloneScenario] = useState(null); // For standalone history/reporter
  const [showAchievement, setShowAchievement] = useState(null); // For achievement popup

  // Check and update daily login bonus on mount
  useEffect(() => {
    const today = new Date().toDateString();
    if (userProgress.dailyProgress?.date !== today) {
      // New day - award login bonus and reset daily progress
      setUserProgress(prev => ({
        ...prev,
        xp: prev.xp + XP_CONFIG.rewards.dailyLogin + (streak > 1 ? XP_CONFIG.rewards.streakBonus * Math.min(streak, 7) : 0),
        dailyProgress: { date: today, xp: XP_CONFIG.rewards.dailyLogin, quizzes: 0, activities: 0, histories: 0 },
        lastLogin: today
      }));
    }
  }, []);

  // Award XP helper function
  const awardXP = (amount, activityType = 'general') => {
    setUserProgress(prev => {
      const today = new Date().toDateString();
      const dailyProgress = prev.dailyProgress?.date === today ? prev.dailyProgress : { date: today, xp: 0, quizzes: 0, activities: 0, histories: 0 };

      return {
        ...prev,
        xp: prev.xp + amount,
        dailyProgress: {
          ...dailyProgress,
          xp: dailyProgress.xp + amount,
          quizzes: activityType === 'quiz' ? dailyProgress.quizzes + 1 : dailyProgress.quizzes,
          activities: activityType === 'activity' ? dailyProgress.activities + 1 : dailyProgress.activities,
          histories: activityType === 'history' ? dailyProgress.histories + 1 : dailyProgress.histories
        }
      };
    });
  };

  // Unlock achievement helper
  const unlockAchievement = (achievementId) => {
    if (userProgress.achievements?.includes(achievementId)) return;
    const achievement = ACHIEVEMENTS[achievementId];
    if (!achievement) return;

    setUserProgress(prev => ({
      ...prev,
      xp: prev.xp + achievement.xp,
      achievements: [...(prev.achievements || []), achievementId]
    }));

    setShowAchievement(achievement);
    setTimeout(() => setShowAchievement(null), 3000);
  };

  // Check achievements after actions
  const checkAchievements = (stats) => {
    if (stats.casesCompleted === 1) unlockAchievement('first-case');
    if (stats.casesCompleted === 10) unlockAchievement('ten-cases');
    if (stats.casesCompleted === 50) unlockAchievement('fifty-cases');
    if (stats.historiesCompleted === 1) unlockAchievement('first-history');
    if (stats.historiesCompleted === 10) unlockAchievement('ten-histories');
    if (stats.presentationsCompleted === 1) unlockAchievement('first-presentation');
    if (stats.presentationsCompleted === 10) unlockAchievement('ten-presentations');
    if (streak >= 3) unlockAchievement('streak-3');
    if (streak >= 7) unlockAchievement('streak-7');
    if (streak >= 30) unlockAchievement('streak-30');
    if (quizStats.correct >= 100) unlockAchievement('hundred-correct');
  }

  const handleAnalyze = async (text) => {
    setIsAnalyzing(true);
    setCaseText(text);
    // Small delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAnalyzing(false);
    setCurrentView('results');
  };

  const handleNewCase = () => {
    setCurrentView('case');
    setCaseText('');
    setStandaloneScenario(null);
  };

  const handleStartHistory = (scenario) => {
    setStandaloneScenario(scenario);
    setCurrentView('standalone-history');
  };

  const handleStartReporter = (scenario) => {
    setStandaloneScenario(scenario);
    setCurrentView('standalone-reporter');
  };

  // Updated to handle both old format (number) and new format (object)
  const handleUpdateMastery = (topicId, data) => {
    if (typeof data === 'number') {
      // Old format - just add points (for backwards compatibility)
      setMastery(prev => {
        const current = prev[topicId];
        if (typeof current === 'number') {
          return { ...prev, [topicId]: current + data };
        } else if (current && typeof current === 'object') {
          return { ...prev, [topicId]: { ...current, points: (current.points || 0) + data } };
        } else {
          return { ...prev, [topicId]: { points: data } };
        }
      });
    } else {
      // New format - replace with full object
      setMastery(prev => ({ ...prev, [topicId]: data }));
    }
  };

  const handleQuizAnswer = (isCorrect) => {
    setQuizStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleNavigate = (view) => {
    if (view === 'case') handleNewCase();
    else setCurrentView(view);
    setSelectedTopic(null);
  };

  const handleSelectTopic = (topicId) => {
    setSelectedTopic(topicId);
    setCurrentView('topic');
  };

  const handleAddToLibrary = (item) => {
    // Check if item already exists
    const exists = library.some(
      existing => existing.title === item.title && existing.topicId === item.topicId
    );
    if (!exists) {
      setLibrary([...library, item]);
    }
  };

  const handleRemoveFromLibrary = (index) => {
    setLibrary(library.filter((_, i) => i !== index));
  };

  // Start a case from the library
  const handleStartCase = (caseData) => {
    setCaseText(caseData.caseText);
    setCurrentView('results');
  };

  return (
    <div className="min-h-screen bg-[#0f0f17]">
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        streak={streak}
        userProgress={userProgress}
        onOpenSettings={() => setShowSettings(true)}
      />

      {/* Achievement Popup */}
      {showAchievement && (
        <div className="fixed top-20 right-4 z-50 animate-slideIn">
          <div className="bg-gradient-to-r from-amber-600/90 to-orange-600/90 rounded-xl p-4 shadow-lg border border-amber-500/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{showAchievement.icon}</div>
              <div>
                <div className="text-xs text-amber-200 font-medium">ACHIEVEMENT UNLOCKED!</div>
                <div className="font-bold">{showAchievement.name}</div>
                <div className="text-sm text-amber-200">+{showAchievement.xp} XP</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentView === 'case' && (
        <div className="p-8">
          <CaseInput
            onAnalyze={handleAnalyze}
            isAnalyzing={isAnalyzing}
            onStartHistory={handleStartHistory}
            onStartReporter={handleStartReporter}
          />
        </div>
      )}

      {currentView === 'standalone-history' && standaloneScenario && (
        <div className="p-8">
          <HistoryTaking
            caseText={standaloneScenario.caseText}
            patientData={standaloneScenario.patientData}
            onComplete={(results) => {
              awardXP(XP_CONFIG.rewards.completeHistory, 'history');
              setUserProgress(prev => ({
                ...prev,
                stats: { ...prev.stats, historiesCompleted: (prev.stats?.historiesCompleted || 0) + 1 }
              }));
              checkAchievements({ ...userProgress.stats, historiesCompleted: (userProgress.stats?.historiesCompleted || 0) + 1 });
              handleNewCase();
            }}
            onBack={handleNewCase}
          />
        </div>
      )}

      {currentView === 'standalone-reporter' && standaloneScenario && (
        <div className="p-8">
          <Reporter
            caseText={standaloneScenario.caseText}
            patientData={standaloneScenario.patientData}
            onComplete={(results) => {
              awardXP(XP_CONFIG.rewards.completePresentation, 'activity');
              setUserProgress(prev => ({
                ...prev,
                stats: { ...prev.stats, presentationsCompleted: (prev.stats?.presentationsCompleted || 0) + 1 }
              }));
              checkAchievements({ ...userProgress.stats, presentationsCompleted: (userProgress.stats?.presentationsCompleted || 0) + 1 });
              handleNewCase();
            }}
            onBack={handleNewCase}
          />
        </div>
      )}

      {currentView === 'results' && (
        <CaseResults
          caseText={caseText}
          onNewCase={handleNewCase}
          onUpdateMastery={handleUpdateMastery}
          onQuizAnswer={(isCorrect) => {
            handleQuizAnswer(isCorrect);
            if (isCorrect) {
              awardXP(XP_CONFIG.rewards.quizCorrectAnswer, 'quiz');
            }
          }}
          mastery={mastery}
          onSelectTopic={handleSelectTopic}
        />
      )}

      {currentView === 'dashboard' && (
        <Dashboard
          mastery={mastery}
          library={library}
          streak={streak}
          quizStats={quizStats}
          userProgress={userProgress}
          onNavigate={handleNavigate}
          onSelectTopic={handleSelectTopic}
          onStartCase={handleStartCase}
        />
      )}

      {currentView === 'roadmap' && (
        <Roadmap mastery={mastery} onSelectTopic={handleSelectTopic} />
      )}

      {currentView === 'topic' && selectedTopic && (
        <TopicDetail
          topicId={selectedTopic}
          mastery={mastery}
          onUpdateMastery={(topicId, data) => {
            handleUpdateMastery(topicId, data);
            // Award XP for topic activities
            if (data.chapterRead && !mastery[topicId]?.chapterRead) {
              awardXP(XP_CONFIG.rewards.readChapter, 'activity');
            }
            if (data.podcastListened && !mastery[topicId]?.podcastListened) {
              awardXP(XP_CONFIG.rewards.listenPodcast, 'activity');
            }
          }}
          onAddToLibrary={(item) => {
            handleAddToLibrary(item);
            awardXP(XP_CONFIG.rewards.saveArticle, 'activity');
          }}
          library={library}
          onBack={() => {
            setSelectedTopic(null);
            setCurrentView('roadmap');
          }}
        />
      )}

      {currentView === 'library' && (
        <Library
          library={library}
          onRemove={handleRemoveFromLibrary}
          onNavigateToTopic={handleSelectTopic}
        />
      )}

      {currentView === 'physical-exam' && (
        <PhysicalExam
          onBack={() => setCurrentView('dashboard')}
          userProgress={userProgress}
          onAwardXP={awardXP}
        />
      )}

      {currentView === 'case-library' && (
        <CaseLibraryView
          onBack={() => setCurrentView('dashboard')}
          onStartCase={handleStartCase}
        />
      )}

      {currentView === 'differential' && (
        <DifferentialBuilder
          onBack={() => setCurrentView('dashboard')}
        />
      )}

      {currentView === 'image-learning' && (
        <ImageLearning
          onBack={() => setCurrentView('dashboard')}
          onAwardXP={awardXP}
        />
      )}

      {currentView === 'analytics' && (
        <ProgressAnalytics
          mastery={mastery}
          quizStats={quizStats}
          userProgress={userProgress}
          library={library}
          onBack={() => setCurrentView('dashboard')}
          onNavigate={(view, topicId) => {
            if (view === 'topic' && topicId) {
              handleSelectTopic(topicId);
            } else {
              handleNavigate(view);
            }
          }}
        />
      )}

      <ApiSettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
