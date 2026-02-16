import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Switch,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../src/store/useAuthStore';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { useHealthProfileStore } from '../../src/store/useHealthProfileStore';
import { GlassCard } from '../../src/components/GlassCard';
import { Disclaimer } from '../../src/components/Disclaimer';
import { trackConsentUpdated } from '../../src/services/sbbEvents';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuthStore();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) return;
    await login(email.trim(), password.trim());
  };

  return (
    <View style={styles.loginContainer}>
      {/* SBB Branding */}
      <View style={styles.brandingSection}>
        <View style={styles.brandIconContainer}>
          <Ionicons name="flask" size={40} color="#e3a7a1" />
        </View>
        <Text style={styles.brandTitle}>Science Based Body</Text>
        <Text style={styles.brandSubtitle}>
          Sign in to save your stacks, sync favorites, and access Pro features
        </Text>
      </View>

      {/* Login Form */}
      <GlassCard style={styles.formCard}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={18} color="#9ca3af" />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#e3a7a1"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={18} color="#9ca3af" />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              placeholderTextColor="#6b7280"
              secureTextEntry
              selectionColor="#e3a7a1"
            />
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.loginButton,
            (!email.trim() || !password.trim()) && styles.loginButtonDisabled,
          ]}
          onPress={handleLogin}
          disabled={isLoading || !email.trim() || !password.trim()}
          activeOpacity={0.8}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#0f1720" />
          ) : (
            <Text style={styles.loginButtonText}>Sign In</Text>
          )}
        </TouchableOpacity>
      </GlassCard>
    </View>
  );
}

function UserProfile() {
  const { user, logout, togglePro } = useAuthStore();
  const [darkMode, setDarkMode] = useState(true);

  if (!user) return null;

  return (
    <View>
      {/* User Info Card */}
      <GlassCard variant="elevated" style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {(user.name ?? user.email)[0].toUpperCase()}
            </Text>
          </View>
          {user.isPro && (
            <View style={styles.proBadge}>
              <Text style={styles.proText}>PRO</Text>
            </View>
          )}
        </View>
        <Text style={styles.userName}>{user.name ?? 'Researcher'}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>
              {user.favoritePeptides.length}
            </Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>
              {user.savedStacks.length}
            </Text>
            <Text style={styles.statLabel}>Stacks</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, user.isPro && styles.proActive]}>
              {user.isPro ? 'Active' : 'Free'}
            </Text>
            <Text style={styles.statLabel}>Plan</Text>
          </View>
        </View>
      </GlassCard>

      {/* Settings Section */}
      <View style={styles.settingsSection}>
        <Text style={styles.settingsSectionTitle}>Settings</Text>

        {/* Pro Status Toggle */}
        <GlassCard style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Ionicons name="star-outline" size={20} color="#e3a7a1" />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Pro Status</Text>
              <Text style={styles.settingDescription}>
                Access advanced analysis features
              </Text>
            </View>
          </View>
          <Switch
            value={user.isPro}
            onValueChange={togglePro}
            trackColor={{
              false: 'rgba(255,255,255,0.12)',
              true: 'rgba(227, 167, 161, 0.4)',
            }}
            thumbColor={user.isPro ? '#e3a7a1' : '#9ca3af'}
          />
        </GlassCard>

        {/* Dark Mode Toggle (placeholder) */}
        <GlassCard style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Ionicons name="moon-outline" size={20} color="#c7d7e6" />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Dark Mode</Text>
              <Text style={styles.settingDescription}>
                Toggle dark/light appearance
              </Text>
            </View>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{
              false: 'rgba(255,255,255,0.12)',
              true: 'rgba(199, 215, 230, 0.4)',
            }}
            thumbColor={darkMode ? '#c7d7e6' : '#9ca3af'}
          />
        </GlassCard>
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={logout}
        activeOpacity={0.7}
      >
        <Ionicons name="log-out-outline" size={18} color="#e3a7a1" />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

function ResearchProfileCard() {
  const router = useRouter();
  const {
    profile,
    isComplete,
    setAcceptedSafety,
    setDataShareConsent,
    reset,
  } = useOnboardingStore();

  const handleSafetyToggle = (value: boolean) => {
    setAcceptedSafety(value);
    trackConsentUpdated(value, profile.dataShareConsent);
  };

  const handleShareToggle = (value: boolean) => {
    setDataShareConsent(value);
    trackConsentUpdated(profile.acceptedSafety, value);
  };

  const handleReset = () => {
    Alert.alert(
      'Restart Onboarding',
      'This will clear your research profile selections.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Restart',
          style: 'destructive',
          onPress: () => {
            reset();
            router.push('/onboarding');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.researchSection}>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.settingsSectionTitle}>Research Profile</Text>
        {!isComplete && (
          <Text style={styles.incompleteBadge}>Incomplete</Text>
        )}
      </View>
      <GlassCard style={styles.researchCard}>
        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>Gender</Text>
          <Text style={styles.profileValue}>
            {profile.gender ?? 'Not set'}
          </Text>
        </View>
        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>Age Range</Text>
          <Text style={styles.profileValue}>
            {profile.ageRange ?? 'Not set'}
          </Text>
        </View>
        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>Interests</Text>
          <Text style={styles.profileValue}>
            {profile.interestCategories.length > 0
              ? profile.interestCategories.join(', ')
              : 'Not set'}
          </Text>
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Ionicons name="shield-outline" size={20} color="#f0d68a" />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Safety Acknowledgement</Text>
              <Text style={styles.settingDescription}>
                Research-only usage confirmed
              </Text>
            </View>
          </View>
          <Switch
            value={profile.acceptedSafety}
            onValueChange={handleSafetyToggle}
            trackColor={{
              false: 'rgba(255,255,255,0.12)',
              true: 'rgba(240, 214, 138, 0.4)',
            }}
            thumbColor={profile.acceptedSafety ? '#f0d68a' : '#9ca3af'}
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Ionicons name="analytics-outline" size={20} color="#c7d7e6" />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Data Sharing</Text>
              <Text style={styles.settingDescription}>
                Share anonymous usage insights
              </Text>
            </View>
          </View>
          <Switch
            value={profile.dataShareConsent}
            onValueChange={handleShareToggle}
            trackColor={{
              false: 'rgba(255,255,255,0.12)',
              true: 'rgba(199, 215, 230, 0.4)',
            }}
            thumbColor={profile.dataShareConsent ? '#c7d7e6' : '#9ca3af'}
          />
        </View>
      </GlassCard>

      <View style={styles.profileActions}>
        <TouchableOpacity
          style={styles.profileActionButton}
          onPress={() => router.push('/onboarding?edit=true')}
          activeOpacity={0.7}
        >
          <Ionicons name="create-outline" size={16} color="#c7d7e6" />
          <Text style={styles.profileActionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileActionButton}
          onPress={handleReset}
          activeOpacity={0.7}
        >
          <Ionicons name="refresh-outline" size={16} color="#e3a7a1" />
          <Text style={styles.profileActionText}>Restart Onboarding</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HealthProfileCard() {
  const router = useRouter();
  const { profile, getBMI } = useHealthProfileStore();
  const bmi = getBMI();
  const completeness = profile.profileCompleteness;

  return (
    <View style={styles.researchSection}>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.settingsSectionTitle}>Health Profile</Text>
        {!profile.setupComplete && (
          <Text style={styles.incompleteBadge}>
            {completeness > 0 ? `${completeness}%` : 'Not Started'}
          </Text>
        )}
      </View>
      <GlassCard style={styles.researchCard}>
        {/* Completeness bar */}
        <View style={healthStyles.progressRow}>
          <View style={healthStyles.progressTrack}>
            <View
              style={[
                healthStyles.progressFill,
                { width: `${Math.max(completeness, 2)}%` },
              ]}
            />
          </View>
          <Text style={healthStyles.progressLabel}>{completeness}%</Text>
        </View>

        {/* Quick stats */}
        {(profile.bodyMetrics.weightLbs || bmi !== null) && (
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Body</Text>
            <Text style={styles.profileValue}>
              {[
                profile.bodyMetrics.weightLbs
                  ? `${profile.bodyMetrics.weightLbs} lbs`
                  : null,
                bmi !== null ? `BMI ${bmi.toFixed(1)}` : null,
              ]
                .filter(Boolean)
                .join(' · ')}
            </Text>
          </View>
        )}

        {profile.primaryGoals.length > 0 && (
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Goals</Text>
            <Text style={styles.profileValue} numberOfLines={2}>
              {profile.primaryGoals.slice(0, 3).join(', ')}
            </Text>
          </View>
        )}

        {profile.medical.conditions.length > 0 && (
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Conditions</Text>
            <Text style={styles.profileValue} numberOfLines={2}>
              {profile.medical.conditions.join(', ')}
            </Text>
          </View>
        )}

        {profile.medical.allergies.length > 0 && (
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Allergies</Text>
            <Text style={styles.profileValue} numberOfLines={2}>
              {profile.medical.allergies.join(', ')}
            </Text>
          </View>
        )}

        {profile.peptideExperience !== 'none' && (
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Experience</Text>
            <Text style={styles.profileValue}>
              {profile.peptideExperience.charAt(0).toUpperCase() +
                profile.peptideExperience.slice(1)}
            </Text>
          </View>
        )}
      </GlassCard>

      <TouchableOpacity
        style={healthStyles.editButton}
        onPress={() => router.push('/health-profile')}
        activeOpacity={0.7}
      >
        <Ionicons
          name={profile.setupComplete ? 'create-outline' : 'add-circle-outline'}
          size={16}
          color="#c7d7e6"
        />
        <Text style={styles.profileActionText}>
          {profile.setupComplete ? 'Edit Health Profile' : 'Set Up Health Profile'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function DeleteDataSection() {
  const { deleteAllHealthData } = useHealthProfileStore();

  const handleDelete = () => {
    Alert.alert(
      'Delete All Health Data',
      'This will permanently erase your health profile, dose logs, check-ins, and chat history. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete Everything',
          style: 'destructive',
          onPress: () => {
            deleteAllHealthData();
            Alert.alert('Done', 'All health data has been deleted.');
          },
        },
      ]
    );
  };

  return (
    <View style={{ marginTop: 24 }}>
      <TouchableOpacity
        style={deleteStyles.button}
        onPress={handleDelete}
        activeOpacity={0.7}
      >
        <Ionicons name="trash-outline" size={16} color="#ef4444" />
        <Text style={deleteStyles.text}>Delete My Data</Text>
      </TouchableOpacity>
      <Text style={deleteStyles.hint}>
        Permanently removes all health data, dose logs, check-ins, and chat history from this device.
      </Text>
    </View>
  );
}

const deleteStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
    backgroundColor: 'rgba(239, 68, 68, 0.08)',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ef4444',
  },
  hint: {
    fontSize: 11,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 16,
  },
});

export default function ProfileScreen() {
  const { isAuthenticated } = useAuthStore();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        {/* Content */}
        {isAuthenticated ? <UserProfile /> : <LoginForm />}

        <ResearchProfileCard />

        <HealthProfileCard />

        {/* Delete My Data */}
        <DeleteDataSection />

        {/* Disclaimer and Branding */}
        <View style={styles.footerBranding}>
          <GlassCard style={styles.brandFooterCard}>
            <View style={styles.brandFooterRow}>
              <Ionicons name="flask" size={20} color="#e3a7a1" />
              <Text style={styles.brandFooterName}>Science Based Body</Text>
            </View>
            <Text style={styles.brandFooterTagline}>
              Evidence-driven peptide research tools
            </Text>
          </GlassCard>
        </View>

        <Disclaimer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1720',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f7f2ec',
    letterSpacing: -0.5,
  },

  // ── Login Form ──────────────────────────────────────────────
  loginContainer: {
    marginTop: 16,
  },
  brandingSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  brandIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(227, 167, 161, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#f7f2ec',
    marginBottom: 6,
  },
  brandSubtitle: {
    fontSize: 13,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  formCard: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 18,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#e8e6e3',
    padding: 0,
  },
  loginButton: {
    backgroundColor: '#e3a7a1',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonDisabled: {
    backgroundColor: 'rgba(227, 167, 161, 0.3)',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f1720',
  },

  // ── User Profile ────────────────────────────────────────────
  profileCard: {
    alignItems: 'center',
    paddingVertical: 28,
    marginTop: 16,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(227, 167, 161, 0.2)',
    borderWidth: 2,
    borderColor: '#e3a7a1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#e3a7a1',
  },
  proBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#e3a7a1',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  proText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#0f1720',
    letterSpacing: 0.5,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f7f2ec',
  },
  userEmail: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    width: '100%',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f7f2ec',
  },
  proActive: {
    color: '#b9cbb6',
  },
  statLabel: {
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  // ── Settings ────────────────────────────────────────────────
  settingsSection: {
    marginTop: 28,
  },
  settingsSectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e8e6e3',
    marginBottom: 14,
  },
  researchSection: {
    marginTop: 28,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  incompleteBadge: {
    fontSize: 11,
    fontWeight: '700',
    color: '#f0d68a',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  researchCard: {
    paddingVertical: 6,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
  },
  profileLabel: {
    fontSize: 12,
    color: '#9ca3af',
  },
  profileValue: {
    fontSize: 12,
    color: '#e8e6e3',
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
    marginLeft: 12,
  },
  profileActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  profileActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(199, 215, 230, 0.25)',
    paddingVertical: 10,
    gap: 6,
  },
  profileActionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#c7d7e6',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 4,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e8e6e3',
  },
  settingDescription: {
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 1,
  },

  // ── Logout ──────────────────────────────────────────────────
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(227, 167, 161, 0.3)',
    paddingVertical: 14,
    marginTop: 28,
    gap: 8,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e3a7a1',
  },

  // ── Footer ──────────────────────────────────────────────────
  footerBranding: {
    marginTop: 32,
  },
  brandFooterCard: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  brandFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  brandFooterName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#f7f2ec',
  },
  brandFooterTagline: {
    fontSize: 12,
    color: '#9ca3af',
  },
});

const healthStyles = StyleSheet.create({
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    paddingVertical: 4,
  },
  progressTrack: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: '#b9cbb6',
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#b9cbb6',
    minWidth: 36,
    textAlign: 'right',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(199, 215, 230, 0.25)',
    paddingVertical: 10,
    gap: 6,
    marginTop: 12,
  },
});
