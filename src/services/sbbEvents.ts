import { getSegmentByProfile } from '../constants/segments';
import { useAuthStore } from '../store/useAuthStore';
import { useOnboardingStore } from '../store/useOnboardingStore';
import { sanitizeForAnalytics } from './privacyGuard';

interface SbbEventPayload {
  event: string;
  timestamp: string;
  userId?: string;
  segmentId?: string;
  metadata?: Record<string, string | number | boolean | null>;
}

const getEndpoint = () => process.env.EXPO_PUBLIC_SBB_EVENTS_URL ?? '';

const canShare = () => {
  const { profile } = useOnboardingStore.getState();
  return profile.dataShareConsent && profile.acceptedSafety;
};

const buildBasePayload = (): Pick<
  SbbEventPayload,
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

export const sendSbbEvent = async (
  event: string,
  metadata: SbbEventPayload['metadata'] = {}
) => {
  if (!canShare()) return;

  const payload: SbbEventPayload = {
    event,
    timestamp: new Date().toISOString(),
    ...buildBasePayload(),
    metadata: sanitizeForAnalytics(metadata),
  };

  const endpoint = getEndpoint();

  if (!endpoint) {
    if (__DEV__) console.info('[SBB Events] Endpoint not configured');
    return;
  }

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.warn('[SBB Events] Failed to send event', error);
  }
};

export const trackPeptideView = (peptideId: string, peptideName: string) => {
  return sendSbbEvent('peptide_view', { peptideId, peptideName });
};

export const trackPeptideSearch = (query: string, resultCount: number) => {
  if (!query.trim()) return;
  return sendSbbEvent('peptide_search', { query, resultCount });
};

export const trackOnboardingComplete = (interestCount: number) => {
  return sendSbbEvent('onboarding_complete', { interestCount });
};

export const trackCheckInSaved = (date: string, hasNotes: boolean) => {
  return sendSbbEvent('checkin_saved', { date, hasNotes });
};

export const trackConsentUpdated = (
  acceptedSafety: boolean,
  dataShareConsent: boolean
) => {
  return sendSbbEvent('consent_updated', { acceptedSafety, dataShareConsent });
};
