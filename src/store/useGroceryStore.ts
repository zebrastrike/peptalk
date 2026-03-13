/**
 * Grocery list store — persisted via secure storage.
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { secureStorage } from '../services/secureStorage';
import type { GroceryItem, GroceryCategory } from '../types/fitness';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface GroceryState {
  items: GroceryItem[];
}

interface GroceryActions {
  addItem: (name: string, category: GroceryCategory, addedFrom?: string) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
  clearChecked: () => void;
  clearAll: () => void;
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useGroceryStore = create<GroceryState & GroceryActions>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (name, category, addedFrom) =>
        set({
          items: [
            ...get().items,
            {
              id: `grocery-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
              name,
              category,
              checked: false,
              addedFrom,
            },
          ],
        }),

      removeItem: (id) =>
        set({ items: get().items.filter((i) => i.id !== id) }),

      toggleItem: (id) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, checked: !i.checked } : i,
          ),
        }),

      clearChecked: () =>
        set({ items: get().items.filter((i) => !i.checked) }),

      clearAll: () => set({ items: [] }),
    }),
    {
      name: 'peptalk-grocery',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export default useGroceryStore;
