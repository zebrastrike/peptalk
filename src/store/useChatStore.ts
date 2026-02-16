import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ChatMessage } from '../types';
import { secureStorage } from '../services/secureStorage';

const MAX_HISTORY = 200; // keep last 200 messages

interface ChatStore {
  messages: ChatMessage[];
  isTyping: boolean;

  addMessage: (message: ChatMessage) => void;
  setTyping: (typing: boolean) => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      messages: [],
      isTyping: false,

      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages, message].slice(-MAX_HISTORY),
        })),

      setTyping: (isTyping) => set({ isTyping }),

      clearChat: () => set({ messages: [] }),
    }),
    {
      name: 'peptalk-chat',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({ messages: state.messages }),
    }
  )
);
