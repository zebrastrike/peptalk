import React, { useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withRepeat,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { ChatBubble, TypingIndicator } from '../../src/components/ChatBubble';
import { PepTalkCharacter } from '../../src/components/PepTalkCharacter';
import { AnimatedPress } from '../../src/components/AnimatedPress';
import { tapMedium } from '../../src/utils/haptics';
import { useChatStore } from '../../src/store/useChatStore';
import { useCheckinStore } from '../../src/store/useCheckinStore';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { useStackStore } from '../../src/store/useStackStore';
import { useDoseLogStore } from '../../src/store/useDoseLogStore';
import { useHealthProfileStore } from '../../src/store/useHealthProfileStore';
import { generateLocalBotResponse } from '../../src/services/peptalkBot';
import { generateAIResponse, isAIAvailable } from '../../src/services/llmService';
import { canSendToCloud } from '../../src/services/privacyGuard';
import { useJournalStore } from '../../src/store/useJournalStore';
import { ChatMessage, EnhancedBotContext, GoalType } from '../../src/types';
import { getGoalLabel } from '../../src/constants/goals';
import {
  Colors,
  Fonts,
  FontSizes,
  Spacing,
  BorderRadius,
  Gradients,
} from '../../src/constants/theme';

/* ─── Journal Toast Component ────────────────────────────────────── */

const JournalToast: React.FC = () => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(
      300,
      withTiming(1, { duration: 400, easing: Easing.out(Easing.ease) }),
    );
  }, [opacity]);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.journalToast, animStyle]}>
      <LinearGradient
        colors={['rgba(34,197,94,0.12)', 'rgba(6,182,212,0.08)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.journalToastBg}
      >
        <Ionicons name="journal-outline" size={14} color={Colors.success} />
        <Text style={styles.journalToastText}>Saved to journal</Text>
      </LinearGradient>
    </Animated.View>
  );
};

/* ─── Main Screen ────────────────────────────────────────────────── */

export default function PepTalkScreen() {
  const router = useRouter();
  const { prefill, message: prefillMessage } = useLocalSearchParams<{
    prefill?: string;
    message?: string;
  }>();
  const { messages, isTyping, addMessage, setTyping, clearChat } =
    useChatStore();
  const { profile } = useOnboardingStore();
  const { entries: checkIns } = useCheckinStore();
  const { currentStack, savedStacks } = useStackStore();
  const { doses, protocols, alerts } = useDoseLogStore();
  const { profile: healthProfile } = useHealthProfileStore();
  const addJournalEntry = useJournalStore((s) => s.addEntry);

  const [inputText, setInputText] = React.useState('');
  const prefillHandled = useRef(false);
  const messageHandled = useRef(false);
  const flatListRef = useRef<FlatList>(null);

  // Handle prefill from topic screens ("Ask PepTalk" button)
  useEffect(() => {
    if (prefill && !prefillHandled.current) {
      prefillHandled.current = true;
      setInputText(prefill);
    }
  }, [prefill]);

  // Build enhanced context for the bot (includes dose data)
  const buildContext = useCallback((): EnhancedBotContext => {
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const cutoff = fourteenDaysAgo.toISOString().slice(0, 10);

    return {
      userProfile: profile,
      recentCheckIns: checkIns.slice(0, 14),
      currentStack,
      savedStackNames: savedStacks
        .filter((s) => !s.isCurated)
        .map((s) => s.name),
      conversationHistory: messages.slice(-10),
      recentDoses: doses.filter((d) => d.date >= cutoff),
      activeProtocols: protocols.filter((p) => p.isActive),
      recentEffects: [],
      healthAlerts: alerts.filter((a) => !a.dismissed),
      healthProfile: healthProfile.setupComplete ? healthProfile : null,
    };
  }, [
    profile,
    checkIns,
    currentStack,
    savedStacks,
    messages,
    doses,
    protocols,
    alerts,
    healthProfile,
  ]);

  // Determine if we should use AI or local bot
  const useAI = isAIAvailable() && canSendToCloud();

  // Auto-save journal entries from bot responses
  const handleBotResponse = useCallback(
    (response: ChatMessage) => {
      addMessage(response);
      if (response.journalEntry) {
        addJournalEntry({
          category: response.journalEntry.category,
          title: response.journalEntry.title,
          content: response.journalEntry.content,
          tags: response.journalEntry.tags,
          relatedPeptideIds: response.journalEntry.relatedPeptideIds,
          mood: response.journalEntry.mood,
        });
      }
    },
    [addMessage, addJournalEntry],
  );

  // Handle pre-filled message: auto-send it if chat is empty
  useEffect(() => {
    if (prefillMessage && !messageHandled.current && messages.length === 0) {
      messageHandled.current = true;
      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: prefillMessage,
        timestamp: new Date().toISOString(),
      };
      addMessage(userMsg);
      setTyping(true);
      const context = buildContext();
      if (useAI) {
        generateAIResponse(prefillMessage, context).then((aiResponse) => {
          if (aiResponse) {
            handleBotResponse(aiResponse);
            setTyping(false);
          } else {
            setTimeout(() => {
              const botResponse = generateLocalBotResponse(
                prefillMessage,
                context,
              );
              handleBotResponse(botResponse);
              setTyping(false);
            }, 400 + Math.random() * 600);
          }
        });
      } else {
        setTimeout(() => {
          const botResponse = generateLocalBotResponse(
            prefillMessage,
            context,
          );
          handleBotResponse(botResponse);
          setTyping(false);
        }, 400 + Math.random() * 600);
      }
    }
  }, [
    prefillMessage,
    messages.length,
    addMessage,
    setTyping,
    buildContext,
    useAI,
  ]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages.length, isTyping]);

  const handleSend = useCallback(async () => {
    const text = inputText.trim();
    if (!text) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toISOString(),
    };
    addMessage(userMsg);
    setInputText('');
    setTyping(true);

    const context = buildContext();

    if (useAI) {
      // Try Grok AI first, fall back to local bot
      const aiResponse = await generateAIResponse(text, context);
      if (aiResponse) {
        handleBotResponse(aiResponse);
        setTyping(false);
        return;
      }
    }

    // Local fallback (no API key, no consent, or API failure)
    setTimeout(() => {
      const botResponse = generateLocalBotResponse(text, context);
      handleBotResponse(botResponse);
      setTyping(false);
    }, 400 + Math.random() * 600);
  }, [inputText, addMessage, handleBotResponse, setTyping, buildContext, useAI]);

  const handleQuickReply = useCallback(
    async (reply: string) => {
      setInputText(reply);
      setInputText('');

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: reply,
        timestamp: new Date().toISOString(),
      };
      addMessage(userMsg);
      setTyping(true);

      const context = buildContext();

      if (useAI) {
        const aiResponse = await generateAIResponse(reply, context);
        if (aiResponse) {
          handleBotResponse(aiResponse);
          setTyping(false);
          return;
        }
      }

      // Local fallback
      setTimeout(() => {
        const botResponse = generateLocalBotResponse(reply, context);
        handleBotResponse(botResponse);
        setTyping(false);
      }, 400 + Math.random() * 600);
    },
    [addMessage, setTyping, buildContext, useAI],
  );

  // Get quick replies from the last bot message
  const lastBotMessage = [...messages].reverse().find((m) => m.role === 'bot');
  const quickReplies = lastBotMessage?.quickReplies || [];
  const botActions = lastBotMessage?.actions || [];
  const lastBotHasJournal = !!lastBotMessage?.journalEntry;

  const renderMessage = useCallback(
    ({ item }: { item: ChatMessage }) => <ChatBubble message={item} />,
    [],
  );

  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIconWrap}>
          <PepTalkCharacter size={100} variant="full" animated />
        </View>
        <Text style={styles.emptyTitle}>Pepe</Text>
        <Text style={styles.emptySubtitle}>
          Your personal health companion
        </Text>
        <Text style={styles.emptyDesc}>
          I can help you learn about peptides, check interactions, track your
          health journey, and give you personalized insights.
        </Text>
        <View style={styles.emptyChips}>
          {(() => {
            const goals = profile.healthGoals ?? [];
            const defaultChips = [
              'Tell me about BPC-157',
              'What helps with sleep?',
              'Suggest a recovery stack',
            ];
            if (goals.length === 0) return defaultChips;

            const goalChips = goals
              .slice(0, 2)
              .map(
                (g: GoalType) =>
                  `Peptides for ${getGoalLabel(g).toLowerCase()}`,
              );
            return [...goalChips, 'Based on my health data'];
          })().map((prompt, index) => (
            <AnimatedPress
              key={prompt}
              style={styles.starterChip}
              onPress={() => handleQuickReply(prompt)}
              scaleTo={0.97}
            >
              <LinearGradient
                colors={[
                  'rgba(59,130,246,0.08)',
                  'rgba(6,182,212,0.04)',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.starterChipGradient}
              >
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={16}
                  color={Colors.pepBlueLight}
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.starterChipText}>{prompt}</Text>
              </LinearGradient>
            </AnimatedPress>
          ))}
        </View>
      </View>
    ),
    [handleQuickReply],
  );

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* ── Header ─────────────────────────────────────────── */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <PepTalkCharacter size={28} variant="mini" />
            <View>
              <Text style={styles.headerTitle}>PepTalk</Text>
            </View>
            {/* AI status indicator */}
            <View style={styles.statusBadge}>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: useAI ? Colors.success : Colors.pepBlueLight },
                ]}
              />
              <Text style={styles.statusLabel}>
                {useAI ? 'AI' : 'Local'}
              </Text>
            </View>
          </View>
          {messages.length > 0 && (
            <TouchableOpacity onPress={clearChat} style={styles.clearBtn}>
              <Ionicons
                name="trash-outline"
                size={18}
                color={Colors.darkTextSecondary}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* ── Messages ───────────────────────────────────────── */}
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[
            styles.messageList,
            messages.length === 0 && styles.messageListEmpty,
          ]}
          ListEmptyComponent={renderEmpty}
          ListFooterComponent={isTyping ? <TypingIndicator /> : null}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="interactive"
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: false })
          }
        />

        {/* ── Journal toast ──────────────────────────────────── */}
        {lastBotHasJournal && !isTyping && messages.length > 0 && (
          <JournalToast />
        )}

        {/* ── Quick Replies ──────────────────────────────────── */}
        {quickReplies.length > 0 && !isTyping && (
          <View style={styles.quickReplies}>
            {quickReplies.map((reply) => (
              <AnimatedPress
                key={reply}
                style={styles.quickReplyChip}
                onPress={() => handleQuickReply(reply)}
                scaleTo={0.95}
              >
                <LinearGradient
                  colors={['rgba(59,130,246,0.12)', 'rgba(6,182,212,0.06)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.quickReplyGradient}
                >
                  <Text style={styles.quickReplyText}>{reply}</Text>
                </LinearGradient>
              </AnimatedPress>
            ))}
          </View>
        )}

        {/* ── Action Buttons ────────────────────────────────── */}
        {botActions.length > 0 && !isTyping && (
          <View style={styles.actionBtns}>
            {botActions.map((action, idx) => (
              <AnimatedPress
                key={`${action.route}-${idx}`}
                style={styles.actionBtn}
                onPress={() => {
                  tapMedium();
                  router.push(action.route as any);
                }}
                scaleTo={0.95}
              >
                <LinearGradient
                  colors={['rgba(139,92,246,0.18)', 'rgba(59,130,246,0.10)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.actionBtnGradient}
                >
                  {action.icon && (
                    <Ionicons
                      name={action.icon as any}
                      size={16}
                      color="#a78bfa"
                      style={{ marginRight: 6 }}
                    />
                  )}
                  <Text style={styles.actionBtnText}>{action.label}</Text>
                  <Ionicons name="chevron-forward" size={14} color="rgba(167,139,250,0.6)" />
                </LinearGradient>
              </AnimatedPress>
            ))}
          </View>
        )}

        {/* ── Input Bar ──────────────────────────────────────── */}
        <View style={styles.inputBarWrap}>
          <View style={styles.inputRow}>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Ask about peptides..."
                placeholderTextColor={Colors.darkTextSecondary}
                multiline
                maxLength={500}
                onSubmitEditing={handleSend}
                blurOnSubmit={false}
                returnKeyType="send"
              />
            </View>
            <AnimatedPress
              style={styles.sendBtnWrap}
              onPress={() => {
                tapMedium();
                handleSend();
              }}
              disabled={!inputText.trim()}
              scaleTo={0.88}
            >
              <LinearGradient
                colors={
                  inputText.trim()
                    ? ['#3B82F6', '#06B6D4']
                    : [Colors.darkCard, Colors.darkCard]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.sendBtn}
              >
                <Ionicons
                  name="send"
                  size={18}
                  color={
                    inputText.trim()
                      ? '#ffffff'
                      : Colors.darkTextSecondary
                  }
                />
              </LinearGradient>
            </AnimatedPress>
          </View>
        </View>

        {/* ── Disclaimer ─────────────────────────────────────── */}
        <Text style={styles.disclaimer}>
          I'm here to educate — always chat with your doctor for medical
          decisions.
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* ─── Styles ─────────────────────────────────────────────────────── */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.darkBg,
  },
  container: {
    flex: 1,
  },

  /* ── Header ── */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkCardBorder,
    backgroundColor: 'rgba(15,23,32,0.85)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  headerTitle: {
    fontSize: FontSizes.xl,
    fontWeight: '700',
    color: Colors.darkText,
    letterSpacing: 0.3,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
    gap: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  statusLabel: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  clearBtn: {
    padding: Spacing.sm,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },

  /* ── Message list ── */
  messageList: {
    paddingVertical: Spacing.md,
  },
  messageListEmpty: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  /* ── Empty state ── */
  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  emptyIconWrap: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md + 4,
  },
  emptyTitle: {
    fontSize: FontSizes.xxl + 4,
    fontWeight: '800',
    color: Colors.darkText,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  emptySubtitle: {
    fontSize: FontSizes.md,
    color: Colors.pepBlueLight,
    marginBottom: Spacing.md,
    fontWeight: '500',
  },
  emptyDesc: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: Spacing.lg,
  },
  emptyChips: {
    gap: Spacing.sm + 2,
    width: '100%',
  },
  starterChip: {
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,0.15)',
  },
  starterChipGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm + 6,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
  starterChipText: {
    color: Colors.darkText,
    fontSize: FontSizes.md,
    flex: 1,
  },

  /* ── Quick replies ── */
  quickReplies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs + 2,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  quickReplyChip: {
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,0.20)',
  },
  quickReplyGradient: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: BorderRadius.full,
  },
  quickReplyText: {
    color: Colors.pepBlueLight,
    fontSize: FontSizes.sm,
    fontWeight: '500',
  },

  /* ── Action buttons ── */
  actionBtns: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.xs,
  },
  actionBtn: {
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(139,92,246,0.25)',
  },
  actionBtnGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: BorderRadius.md,
    gap: 2,
  },
  actionBtnText: {
    color: '#c4b5fd',
    fontSize: FontSizes.sm,
    fontWeight: '600',
    marginRight: 4,
  },

  /* ── Journal toast ── */
  journalToast: {
    alignItems: 'center',
    paddingBottom: Spacing.xs,
  },
  journalToastBg: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(34,197,94,0.18)',
  },
  journalToastText: {
    fontSize: FontSizes.xs,
    color: Colors.success,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  /* ── Input bar ── */
  inputBarWrap: {
    borderTopWidth: 1,
    borderTopColor: Colors.darkCardBorder,
    backgroundColor: 'rgba(15,23,32,0.90)',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 2,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.sm,
  },
  inputWrap: {
    flex: 1,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,0.15)',
    backgroundColor: Colors.darkCard,
    overflow: 'hidden',
  },
  input: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    color: Colors.darkText,
    fontSize: FontSizes.md,
    maxHeight: 100,
  },
  sendBtnWrap: {
    borderRadius: 22,
    overflow: 'hidden',
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ── Disclaimer ── */
  disclaimer: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
    paddingBottom: 4,
    opacity: 0.5,
  },
});
