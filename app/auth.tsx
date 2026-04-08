/**
 * Auth Screen — Login / Sign Up with tier selection.
 * Full-bleed background image with glass card form overlay.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuthStore } from '../src/store/useAuthStore';
import { useSubscriptionStore } from '../src/store/useSubscriptionStore';
import { Colors, FontSizes, Spacing, BorderRadius } from '../src/constants/theme';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

type Mode = 'login' | 'signup';
type Tier = 'free' | 'plus' | 'pro';

const PLANS: { tier: Tier; name: string; price: string; badge: string; features: string[] }[] = [
  {
    tier: 'free',
    name: 'Free',
    price: '$0',
    badge: '',
    features: ['Peptide dosing calculators', 'Reconstitution & weight-based calc', 'Macro & calorie counter', 'Food nutritional info'],
  },
  {
    tier: 'plus',
    name: 'PepTalk+',
    price: '$9.99/mo',
    badge: 'POPULAR',
    features: ['Everything in Free', 'Aimee AI assistant', 'Stack builder', 'Health calendar & tracking', 'Health device integrations'],
  },
  {
    tier: 'pro',
    name: 'PepTalk Pro',
    price: '$49.99/mo',
    badge: 'ALL ACCESS',
    features: ['Everything in Plus', 'Workout programs & videos', 'Aimee meal & workout plans', 'Full nutrition tools', 'Consult booking ($500/session)'],
  },
];

export default function AuthScreen() {
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState<Mode>('login');

  // Login fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');

  // Signup extra fields
  const [name, setName] = useState('');
  const [selectedTier, setSelectedTier] = useState<Tier>('free');

  // Signup step: 1 = account info, 2 = choose plan
  const [signupStep, setSignupStep] = useState(1);

  const login = useAuthStore((s) => s.login);
  const signup = useAuthStore((s) => s.signup);
  const isLoading = useAuthStore((s) => s.isLoading);
  const setTier = useSubscriptionStore((s) => s.setTier);

  const handleLogin = async () => {
    if (!email.includes('@') || password.length < 6) {
      setError('Enter a valid email and password (6+ chars)');
      return;
    }
    setError('');
    try {
      await login(email, password);
    } catch {
      setError('Invalid email or password');
    }
  };

  const handleSignupNext = () => {
    if (!name.trim()) { setError('Enter your name'); return; }
    if (!email.includes('@')) { setError('Enter a valid email'); return; }
    if (password.length < 6) { setError('Password must be 6+ characters'); return; }
    setError('');
    setSignupStep(2);
  };

  const handleSignupFinish = async () => {
    setError('');
    try {
      await signup(name.trim(), email, password);
      setTier(selectedTier);
    } catch {
      setError('Something went wrong. Try again.');
    }
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setError('');
    setSignupStep(1);
  };

  return (
    <ImageBackground
      source={require('../assets/auth-bg.jpg')}
      style={s.background}
      resizeMode="cover"
    >
      {/* Dark gradient overlay for readability */}
      <LinearGradient
        colors={[
          'rgba(15,23,32,0.25)',
          'rgba(15,23,32,0.5)',
          'rgba(15,23,32,0.85)',
          'rgba(15,23,32,0.97)',
        ]}
        locations={[0, 0.35, 0.6, 0.85]}
        style={StyleSheet.absoluteFill}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={[s.scroll, { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 40 }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* ── Branding area (sits over the sphere image) ── */}
          <View style={s.brandArea}>
            <Text style={s.brandTitle}>PepTalk</Text>
            <Text style={s.brandSub}>Your peptide journey starts here</Text>
          </View>

          {/* ── Glass Card Container ── */}
          <View style={s.glassCard}>
            {/* Frosted border highlight */}
            <View style={s.glassInner}>
              {/* Tab switcher */}
              <View style={s.tabs}>
                <TouchableOpacity
                  style={[s.tab, mode === 'login' && s.tabActive]}
                  onPress={() => switchMode('login')}
                >
                  <Text style={[s.tabText, mode === 'login' && s.tabTextActive]}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[s.tab, mode === 'signup' && s.tabActive]}
                  onPress={() => switchMode('signup')}
                >
                  <Text style={[s.tabText, mode === 'signup' && s.tabTextActive]}>Sign Up</Text>
                </TouchableOpacity>
              </View>

              {/* ─── LOGIN ─── */}
              {mode === 'login' && (
                <View style={s.form}>
                  <View style={s.inputWrap}>
                    <Ionicons name="mail-outline" size={18} color="rgba(255,255,255,0.45)" style={s.inputIcon} />
                    <TextInput
                      style={s.input}
                      placeholder="Email"
                      placeholderTextColor="rgba(255,255,255,0.35)"
                      value={email}
                      onChangeText={setEmail}
                      autoCapitalize="none"
                      keyboardType="email-address"
                    />
                  </View>
                  <View style={s.inputWrap}>
                    <Ionicons name="lock-closed-outline" size={18} color="rgba(255,255,255,0.45)" style={s.inputIcon} />
                    <TextInput
                      style={[s.input, { flex: 1 }]}
                      placeholder="Password"
                      placeholderTextColor="rgba(255,255,255,0.35)"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPw}
                    />
                    <TouchableOpacity onPress={() => setShowPw(!showPw)} style={s.eyeBtn}>
                      <Ionicons name={showPw ? 'eye-off' : 'eye'} size={18} color="rgba(255,255,255,0.45)" />
                    </TouchableOpacity>
                  </View>

                  {!!error && <Text style={s.error}>{error}</Text>}

                  <TouchableOpacity onPress={handleLogin} activeOpacity={0.85} disabled={isLoading}>
                    <LinearGradient
                      colors={['rgba(227,167,161,0.9)', 'rgba(201,138,132,0.9)']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={s.btn}
                    >
                      {isLoading ? (
                        <ActivityIndicator color="#fff" />
                      ) : (
                        <Text style={s.btnText}>Log In</Text>
                      )}
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity style={s.forgotBtn}>
                    <Text style={s.forgotText}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* ─── SIGNUP STEP 1: Account Info ─── */}
              {mode === 'signup' && signupStep === 1 && (
                <View style={s.form}>
                  <View style={s.inputWrap}>
                    <Ionicons name="person-outline" size={18} color="rgba(255,255,255,0.45)" style={s.inputIcon} />
                    <TextInput
                      style={s.input}
                      placeholder="Full Name"
                      placeholderTextColor="rgba(255,255,255,0.35)"
                      value={name}
                      onChangeText={setName}
                    />
                  </View>
                  <View style={s.inputWrap}>
                    <Ionicons name="mail-outline" size={18} color="rgba(255,255,255,0.45)" style={s.inputIcon} />
                    <TextInput
                      style={s.input}
                      placeholder="Email"
                      placeholderTextColor="rgba(255,255,255,0.35)"
                      value={email}
                      onChangeText={setEmail}
                      autoCapitalize="none"
                      keyboardType="email-address"
                    />
                  </View>
                  <View style={s.inputWrap}>
                    <Ionicons name="lock-closed-outline" size={18} color="rgba(255,255,255,0.45)" style={s.inputIcon} />
                    <TextInput
                      style={[s.input, { flex: 1 }]}
                      placeholder="Password (6+ characters)"
                      placeholderTextColor="rgba(255,255,255,0.35)"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPw}
                    />
                    <TouchableOpacity onPress={() => setShowPw(!showPw)} style={s.eyeBtn}>
                      <Ionicons name={showPw ? 'eye-off' : 'eye'} size={18} color="rgba(255,255,255,0.45)" />
                    </TouchableOpacity>
                  </View>

                  {!!error && <Text style={s.error}>{error}</Text>}

                  <TouchableOpacity onPress={handleSignupNext} activeOpacity={0.85}>
                    <LinearGradient
                      colors={['rgba(227,167,161,0.9)', 'rgba(201,138,132,0.9)']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={s.btn}
                    >
                      <Text style={s.btnText}>Next — Choose Plan</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}

              {/* ─── SIGNUP STEP 2: Choose Plan ─── */}
              {mode === 'signup' && signupStep === 2 && (
                <View style={s.form}>
                  <TouchableOpacity onPress={() => setSignupStep(1)} style={s.backRow}>
                    <Ionicons name="arrow-back" size={18} color={Colors.rose} />
                    <Text style={s.backText}>Back to account info</Text>
                  </TouchableOpacity>

                  <Text style={s.planIntro}>Choose the plan that fits your goals. You can change anytime.</Text>

                  {PLANS.map((plan) => {
                    const selected = selectedTier === plan.tier;
                    return (
                      <TouchableOpacity
                        key={plan.tier}
                        style={[s.planCard, selected && s.planCardSelected]}
                        onPress={() => setSelectedTier(plan.tier)}
                        activeOpacity={0.8}
                      >
                        <View style={s.planHeader}>
                          <View style={{ flex: 1 }}>
                            <View style={s.planNameRow}>
                              <Text style={s.planName}>{plan.name}</Text>
                              {!!plan.badge && (
                                <View style={s.planBadge}>
                                  <Text style={s.planBadgeText}>{plan.badge}</Text>
                                </View>
                              )}
                            </View>
                            <Text style={s.planPrice}>{plan.price}</Text>
                          </View>
                          <View style={[s.radio, selected && s.radioSelected]}>
                            {selected && <View style={s.radioDot} />}
                          </View>
                        </View>
                        {plan.features.map((f) => (
                          <View key={f} style={s.featureRow}>
                            <Ionicons name="checkmark" size={14} color={Colors.rose} />
                            <Text style={s.featureText}>{f}</Text>
                          </View>
                        ))}
                      </TouchableOpacity>
                    );
                  })}

                  {!!error && <Text style={s.error}>{error}</Text>}

                  <TouchableOpacity onPress={handleSignupFinish} activeOpacity={0.85} disabled={isLoading}>
                    <LinearGradient
                      colors={['rgba(227,167,161,0.9)', 'rgba(201,138,132,0.9)']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={s.btn}
                    >
                      {isLoading ? (
                        <ActivityIndicator color="#fff" />
                      ) : (
                        <Text style={s.btnText}>Create Account</Text>
                      )}
                    </LinearGradient>
                  </TouchableOpacity>

                  <Text style={s.legal}>
                    By signing up you agree to our Terms of Service and Privacy Policy.
                    Payment processing will be configured before launch.
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  background: {
    flex: 1,
    width: SCREEN_W,
    height: SCREEN_H,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },

  // ── Branding (floats over the sphere image) ──
  brandArea: {
    alignItems: 'center',
    marginBottom: 30,
  },
  brandTitle: {
    fontSize: 42,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: -1.5,
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 12,
  },
  brandSub: {
    fontSize: FontSizes.sm,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 4,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },

  // ── Glass Card ──
  glassCard: {
    marginHorizontal: Spacing.md,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 12,
  },
  glassInner: {
    backgroundColor: 'rgba(15,23,32,0.65)',
    padding: Spacing.lg,
    paddingBottom: Spacing.xl,
  },

  // ── Tabs ──
  tabs: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: BorderRadius.md,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: BorderRadius.sm,
  },
  tabActive: {
    backgroundColor: 'rgba(227,167,161,0.25)',
    borderWidth: 1,
    borderColor: 'rgba(227,167,161,0.4)',
  },
  tabText: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.5)',
  },
  tabTextActive: {
    color: Colors.rose,
  },

  // ── Form ──
  form: {},
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginBottom: 12,
    paddingHorizontal: 14,
  },
  inputIcon: { marginRight: 10 },
  input: {
    flex: 1,
    height: 50,
    fontSize: FontSizes.md,
    color: '#fff',
  },
  eyeBtn: { padding: 8 },
  error: {
    color: '#f87171',
    fontSize: FontSizes.xs,
    marginBottom: 10,
    textAlign: 'center',
  },
  btn: {
    height: 52,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    shadowColor: '#e3a7a1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  btnText: {
    color: '#fff',
    fontSize: FontSizes.md,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  forgotBtn: {
    alignItems: 'center',
    marginTop: 16,
  },
  forgotText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: FontSizes.xs,
  },

  // ── Back ──
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  backText: {
    color: Colors.rose,
    fontSize: FontSizes.sm,
    fontWeight: '600',
  },

  // ── Plan picker ──
  planIntro: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: FontSizes.sm,
    marginBottom: 16,
    textAlign: 'center',
  },
  planCard: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 16,
    marginBottom: 12,
  },
  planCardSelected: {
    borderColor: Colors.rose,
    backgroundColor: 'rgba(227,167,161,0.08)',
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  planNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  planName: {
    fontSize: FontSizes.md,
    fontWeight: '800',
    color: '#fff',
  },
  planPrice: {
    fontSize: FontSizes.sm,
    color: Colors.rose,
    fontWeight: '600',
    marginTop: 2,
  },
  planBadge: {
    backgroundColor: Colors.rose,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  planBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '800',
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: Colors.rose,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.rose,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  featureText: {
    fontSize: FontSizes.xs,
    color: 'rgba(255,255,255,0.6)',
  },
  legal: {
    color: 'rgba(255,255,255,0.25)',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 16,
  },
});
