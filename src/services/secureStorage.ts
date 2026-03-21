import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

// Use AsyncStorage for large data (stores with arrays that grow over time)
// Use SecureStore only for small secrets (auth tokens, keys)
const safeGet = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    if (__DEV__) console.warn('[storage] read failed');
    return null;
  }
};

const safeSet = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch {
    if (__DEV__) console.warn('[storage] write failed');
  }
};

const safeRemove = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch {
    if (__DEV__) console.warn('[storage] remove failed');
  }
};

export const secureStorage = {
  getItem: safeGet,
  setItem: safeSet,
  removeItem: safeRemove,
};

// Keep SecureStore available for actual secrets (auth tokens etc)
export const secretStorage = {
  getItem: async (key: string) => {
    try { return await SecureStore.getItemAsync(key); } catch { return null; }
  },
  setItem: async (key: string, value: string) => {
    try { await SecureStore.setItemAsync(key, value); } catch {}
  },
  removeItem: async (key: string) => {
    try { await SecureStore.deleteItemAsync(key); } catch {}
  },
};
