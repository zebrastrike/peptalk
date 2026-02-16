import {
  Stack,
  useGlobalSearchParams,
  useRouter,
  useSegments,
} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useOnboardingStore } from '../src/store/useOnboardingStore';

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { edit } = useGlobalSearchParams<{ edit?: string }>();
  const isComplete = useOnboardingStore((state) => state.isComplete);
  const hasHydrated = useOnboardingStore((state) => state.hasHydrated);

  useEffect(() => {
    if (!hasHydrated) return;
    const inOnboarding = segments[0] === 'onboarding';
    if (!isComplete && !inOnboarding) {
      router.replace('/onboarding');
      return;
    }
    if (isComplete && inOnboarding && edit !== 'true') {
      router.replace('/(tabs)');
    }
  }, [edit, hasHydrated, isComplete, router, segments]);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#0f1720' },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="peptide/[id]"
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTintColor: '#e8e6e3',
              headerTitle: '',
              headerBackTitle: 'Back',
              headerStyle: { backgroundColor: 'transparent' },
            }}
          />
          <Stack.Screen
            name="research-feed"
            options={{
              headerShown: false,
              presentation: 'modal',
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen
            name="health-profile"
            options={{
              headerShown: false,
              presentation: 'modal',
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen
            name="learn/index"
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="learn/article/[slug]"
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="learn/guides/index"
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="learn/guides/[slug]"
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="learn/videos/index"
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="learn/videos/[slug]"
            options={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          />
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1720',
  },
});
