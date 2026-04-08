import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ChatMessage } from '../types';
import { secureStorage } from '../services/secureStorage';
import { useSubscriptionStore } from './useSubscriptionStore';

const MAX_HISTORY = 200; // keep last 200 messages
const FREE_DAILY_MESSAGE_LIMIT = 0;

const todayKey = (): string => {
  const d = new Date();
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${day}`;
};

interface ChatStore {
  messages: ChatMessage[];
  isTyping: boolean;
  dailyMessageCount: number;
  lastMessageDate: string;

  addMessage: (message: ChatMessage) => void;
  setTyping: (typing: boolean) => void;
  clearChat: () => void;
  incrementMessageCount: () => void;
  canSendMessage: () => boolean;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      messages: [],
      isTyping: false,
      dailyMessageCount: 0,
      lastMessageDate: '',

      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages, message].slice(-MAX_HISTORY),
        })),

      setTyping: (isTyping) => set({ isTyping }),

      clearChat: () => set({ messages: [] }),

      incrementMessageCount: () => {
        const today = todayKey();
        const { lastMessageDate, dailyMessageCount } = get();
        if (lastMessageDate !== today) {
          // New day — reset counter
          set({ dailyMessageCount: 1, lastMessageDate: today });
        } else {
          set({ dailyMessageCount: dailyMessageCount + 1 });
        }
      },

      canSendMessage: () => {
        const tier = useSubscriptionStore.getState().tier;
        if (tier === 'plus' || tier === 'pro') return true;

        const today = todayKey();
        const { lastMessageDate, dailyMessageCount } = get();
        if (lastMessageDate !== today) return true; // new day, count resets
        return dailyMessageCount < FREE_DAILY_MESSAGE_LIMIT;
      },
    }),
    {
      name: 'peptalk-chat',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({
        messages: state.messages,
        dailyMessageCount: state.dailyMessageCount,
        lastMessageDate: state.lastMessageDate,
      }),
    },
  ),
);
