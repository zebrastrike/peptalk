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
import { Ionicons } from '@expo/vector-icons';
import { ChatBubble, TypingIndicator } from '../../src/components/ChatBubble';
import { useChatStore } from '../../src/store/useChatStore';
import { useCheckinStore } from '../../src/store/useCheckinStore';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { useStackStore } from '../../src/store/useStackStore';
import { useDoseLogStore } from '../../src/store/useDoseLogStore';
import { useHealthProfileStore } from '../../src/store/useHealthProfileStore';
import { generateLocalBotResponse } from '../../src/services/peptalkBot';
import { generateAIResponse, isAIAvailable } from '../../src/services/llmService';
import { canSendToCloud } from '../../src/services/privacyGuard';
import { ChatMessage, EnhancedBotContext } from '../../src/types';
import {
  Colors,
  Fonts,
  FontSizes,
  Spacing,
  BorderRadius,
} from '../../src/constants/theme';

export default function PepTalkScreen() {
  const { messages, isTyping, addMessage, setTyping, clearChat } =
    useChatStore();
  const { profile } = useOnboardingStore();
  const { entries: checkIns } = useCheckinStore();
  const { currentStack, savedStacks } = useStackStore();
  const { doses, protocols, alerts } = useDoseLogStore();
  const { profile: healthProfile } = useHealthProfileStore();

  const [inputText, setInputText] = React.useState('');
  const flatListRef = useRef<FlatList>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages.length, isTyping]);

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
  }, [profile, checkIns, currentStack, savedStacks, messages, doses, protocols, alerts, healthProfile]);

  // Determine if we should use AI or local bot
  const useAI = isAIAvailable() && canSendToCloud();

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
        addMessage(aiResponse);
        setTyping(false);
        return;
      }
    }

    // Local fallback (no API key, no consent, or API failure)
    setTimeout(() => {
      const botResponse = generateLocalBotResponse(text, context);
      addMessage(botResponse);
      setTyping(false);
    }, 400 + Math.random() * 600);
  }, [inputText, addMessage, setTyping, buildContext, useAI]);

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
          addMessage(aiResponse);
          setTyping(false);
          return;
        }
      }

      // Local fallback
      setTimeout(() => {
        const botResponse = generateLocalBotResponse(reply, context);
        addMessage(botResponse);
        setTyping(false);
      }, 400 + Math.random() * 600);
    },
    [addMessage, setTyping, buildContext, useAI]
  );

  // Get quick replies from the last bot message
  const lastBotMessage = [...messages].reverse().find((m) => m.role === 'bot');
  const quickReplies = lastBotMessage?.quickReplies || [];

  const renderMessage = useCallback(
    ({ item }: { item: ChatMessage }) => <ChatBubble message={item} />,
    []
  );

  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIconWrap}>
          <Ionicons name="chatbubbles" size={48} color={Colors.rose} />
        </View>
        <Text style={styles.emptyTitle}>PepTalk</Text>
        <Text style={styles.emptySubtitle}>
          Your peptide research assistant
        </Text>
        <Text style={styles.emptyDesc}>
          Ask me about any peptide, check interactions, explore categories, or
          get research-based suggestions from your health data.
        </Text>
        <View style={styles.emptyChips}>
          {[
            'Tell me about BPC-157',
            'What helps with sleep?',
            'Suggest a recovery stack',
          ].map((prompt) => (
            <TouchableOpacity
              key={prompt}
              style={styles.starterChip}
              onPress={() => handleQuickReply(prompt)}
            >
              <Text style={styles.starterChipText}>{prompt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    ),
    [handleQuickReply]
  );

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={[styles.headerDot, useAI && styles.headerDotAI]} />
            <Text style={styles.headerTitle}>PepTalk</Text>
            <Text style={styles.headerMode}>{useAI ? 'AI' : 'Local'}</Text>
          </View>
          {messages.length > 0 && (
            <TouchableOpacity onPress={clearChat} style={styles.clearBtn}>
              <Ionicons name="trash-outline" size={18} color={Colors.darkTextSecondary} />
            </TouchableOpacity>
          )}
        </View>

        {/* Messages */}
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

        {/* Quick Replies */}
        {quickReplies.length > 0 && !isTyping && (
          <View style={styles.quickReplies}>
            {quickReplies.map((reply) => (
              <TouchableOpacity
                key={reply}
                style={styles.quickReplyChip}
                onPress={() => handleQuickReply(reply)}
              >
                <Text style={styles.quickReplyText}>{reply}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Input */}
        <View style={styles.inputRow}>
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
          <TouchableOpacity
            style={[
              styles.sendBtn,
              !inputText.trim() && styles.sendBtnDisabled,
            ]}
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <Ionicons
              name="send"
              size={20}
              color={inputText.trim() ? Colors.darkBg : Colors.darkTextSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* Disclaimer */}
        <Text style={styles.disclaimer}>
          Research information only — not medical advice
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.darkBg,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkCardBorder,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  headerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.success,
  },
  headerDotAI: {
    backgroundColor: Colors.rose,
  },
  headerMode: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  headerTitle: {
    fontSize: FontSizes.xl,
    fontWeight: '700',
    color: Colors.darkText,
  },
  clearBtn: {
    padding: Spacing.sm,
  },
  messageList: {
    paddingVertical: Spacing.md,
  },
  messageListEmpty: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  emptyIconWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(227, 167, 161, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  emptyTitle: {
    fontSize: FontSizes.xxl,
    fontWeight: '700',
    color: Colors.darkText,
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: FontSizes.md,
    color: Colors.rose,
    marginBottom: Spacing.md,
  },
  emptyDesc: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: Spacing.lg,
  },
  emptyChips: {
    gap: Spacing.sm,
    width: '100%',
  },
  starterChip: {
    backgroundColor: Colors.darkCard,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.darkCardBorder,
  },
  starterChipText: {
    color: Colors.darkText,
    fontSize: FontSizes.md,
    textAlign: 'center',
  },
  quickReplies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs + 2,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  quickReplyChip: {
    backgroundColor: 'rgba(227, 167, 161, 0.15)',
    borderRadius: BorderRadius.full,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'rgba(227, 167, 161, 0.3)',
  },
  quickReplyText: {
    color: Colors.rose,
    fontSize: FontSizes.sm,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    gap: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: Colors.darkCardBorder,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.darkCard,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.md,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    color: Colors.darkText,
    fontSize: FontSizes.md,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: Colors.darkCardBorder,
  },
  sendBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.rose,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: {
    backgroundColor: Colors.darkCard,
  },
  disclaimer: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
    paddingBottom: 4,
    opacity: 0.5,
  },
});
