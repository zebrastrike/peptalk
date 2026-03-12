import { getSegmentByProfile } from '../constants/segments';
import { useAuthStore } from '../store/useAuthStore';
import { useOnboardingStore } from '../store/useOnboardingStore';
import { sanitizeForAnalytics } from './privacyGuard';

interface AnalyticsEventPayload {
  event: string;
  timestamp: string;
  userId?: string;
  segmentId?: string;
  metadata?: Record<string, string | number | boolean | null>;
}

const getEndpoint = () => process.env.EXPO_PUBLIC_ANALYTICS_URL ?? '';

const canShare = () => {
  const { profile } = useOnboardingStore.getState();
  return profile.dataShareConsent && profile.acceptedSafety;
};

const buildBasePayload = (): Pick<
  AnalyticsEventPayload,
  'userId' | 'segmentId'
> => {
  const { user } = useAuthStore.getState();
  const { profile } = useOnboardingStore.getState();
  const segment = getSegmentByProfile(profile.gender, profile.ageRange);
  return {
    userId: user?.id,
    segmentId: segment?.id,
  };
};

export const sendAnalyticsEvent = async (
  event: string,
  metadata: AnalyticsEventPayload['metadata'] = {}
) => {
  if (!canShare()) return;

  const payload: AnalyticsEventPayload = {
    event,
    timestamp: new Date().toISOString(),
    ...buildBasePayload(),
    metadata: sanitizeForAnalytics(metadata),
  };

  const endpoint = getEndpoint();

  if (!endpoint) {
    if (__DEV__) console.info('[Analytics] Endpoint not configured');
    return;
  }

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.warn('[Analytics] Failed to send event', error);
  }
};

export const trackPeptideView = (peptideId: string, peptideName: string) => {
  return sendAnalyticsEvent('peptide_view', { peptideId, peptideName });
};

export const trackPeptideSearch = (query: string, resultCount: number) => {
  if (!query.trim()) return;
  return sendAnalyticsEvent('peptide_search', { query, resultCount });
};

export const trackOnboardingComplete = (interestCount: number) => {
  return sendAnalyticsEvent('onboarding_complete', { interestCount });
};

export const trackCheckInSaved = (date: string, hasNotes: boolean) => {
  return sendAnalyticsEvent('checkin_saved', { date, hasNotes });
};

export const trackConsentUpdated = (
  acceptedSafety: boolean,
  dataShareConsent: boolean
) => {
  return sendAnalyticsEvent('consent_updated', { acceptedSafety, dataShareConsent });
};
