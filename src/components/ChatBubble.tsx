import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChatMessage } from '../types';
import { Colors, Fonts, FontSizes, Spacing, BorderRadius } from '../constants/theme';

interface ChatBubbleProps {
  message: ChatMessage;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isBot = message.role === 'bot';

  return (
    <View style={[styles.row, isBot ? styles.rowBot : styles.rowUser]}>
      {isBot && (
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>PT</Text>
        </View>
      )}
      <View
        style={[
          styles.bubble,
          isBot ? styles.bubbleBot : styles.bubbleUser,
        ]}
      >
        <Text style={[styles.text, isBot ? styles.textBot : styles.textUser]}>
          {formatMarkdown(message.content)}
        </Text>
        <Text style={styles.timestamp}>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    </View>
  );
};

// Simple markdown-like bold support for display
function formatMarkdown(text: string): string {
  // Strip ** markers for plain-text display — React Native Text doesn't support inline bold natively
  // For a better approach, we'd use a markdown renderer, but this keeps it simple
  return text.replace(/\*\*/g, '');
}

export const TypingIndicator: React.FC = () => (
  <View style={[styles.row, styles.rowBot]}>
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>PT</Text>
    </View>
    <View style={[styles.bubble, styles.bubbleBot]}>
      <Text style={styles.typingDots}>● ● ●</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: Spacing.sm,
    paddingHorizontal: Spacing.md,
    alignItems: 'flex-end',
  },
  rowBot: {
    justifyContent: 'flex-start',
  },
  rowUser: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.rose,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
    marginBottom: 2,
  },
  avatarText: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.darkBg,
  },
  bubble: {
    maxWidth: '78%',
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.sm + 2,
    paddingHorizontal: Spacing.md,
  },
  bubbleBot: {
    backgroundColor: Colors.darkCard,
    borderBottomLeftRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.darkCardBorder,
  },
  bubbleUser: {
    backgroundColor: Colors.rose,
    borderBottomRightRadius: BorderRadius.sm,
  },
  text: {
    fontSize: FontSizes.md,
    lineHeight: 22,
  },
  textBot: {
    color: Colors.darkText,
  },
  textUser: {
    color: Colors.darkBg,
    fontWeight: '500',
  },
  timestamp: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    marginTop: 4,
    textAlign: 'right',
    opacity: 0.6,
  },
  typingDots: {
    color: Colors.rose,
    fontSize: 16,
    letterSpacing: 4,
  },
});

export default ChatBubble;
