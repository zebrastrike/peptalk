import * as SecureStore from 'expo-secure-store';

const safeGet = async (key: string) => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch {
    // Never log key names or values — HIPAA compliance
    if (__DEV__) console.warn('[secureStorage] read failed');
    return null;
  }
};

const safeSet = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch {
    if (__DEV__) console.warn('[secureStorage] write failed');
  }
};

const safeRemove = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch {
    if (__DEV__) console.warn('[secureStorage] remove failed');
  }
};

export const secureStorage = {
  getItem: safeGet,
  setItem: safeSet,
  removeItem: safeRemove,
};
