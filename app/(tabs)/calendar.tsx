import React, { useCallback, useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useDoseLogStore } from '../../src/store/useDoseLogStore';
import { useCheckinStore } from '../../src/store/useCheckinStore';
import { getPeptideById, PEPTIDES } from '../../src/data/peptides';
import { getProtocolsByPeptide } from '../../src/data/protocols';
import {
  DoseLogEntry,
  DoseUnit,
  AdministrationRoute,
  ActiveProtocol,
  HealthAlert,
} from '../../src/types';
import {
  Colors,
  FontSizes,
  Spacing,
  BorderRadius,
} from '../../src/constants/theme';

// ---------------------------------------------------------------------------
// Date helpers
// ---------------------------------------------------------------------------

const toDateKey = (d: Date) => {
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const getMonthDays = (year: number, month: number): Date[] => {
  const days: Date[] = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Pad start to align with day of week
  const startPad = firstDay.getDay();
  for (let i = startPad - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    days.push(d);
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i));
  }

  // Pad end to fill last row
  const endPad = 7 - (days.length % 7);
  if (endPad < 7) {
    for (let i = 1; i <= endPad; i++) {
      days.push(new Date(year, month + 1, i));
    }
  }

  return days;
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const ROUTES: AdministrationRoute[] = [
  'subcutaneous', 'intramuscular', 'oral', 'nasal', 'topical', 'sublingual',
];

const UNITS: DoseUnit[] = ['mcg', 'mg', 'IU', 'ml'];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CalendarScreen() {
  const router = useRouter();
  const now = new Date();
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [selectedDate, setSelectedDate] = useState(toDateKey(now));
  const [showLogModal, setShowLogModal] = useState(false);

  // Log form state
  const [logPeptideId, setLogPeptideId] = useState('');
  const [logAmount, setLogAmount] = useState('');
  const [logUnit, setLogUnit] = useState<DoseUnit>('mcg');
  const [logRoute, setLogRoute] = useState<AdministrationRoute>('subcutaneous');
  const [logSite, setLogSite] = useState('');
  const [logNotes, setLogNotes] = useState('');
  const [showPeptidePicker, setShowPeptidePicker] = useState(false);

  const {
    doses,
    protocols,
    alerts,
    logDose,
    deleteDose,
    dismissAlert,
    getDosesByDate,
    getActiveProtocols,
    getDatesWithDoses,
  } = useDoseLogStore();

  const checkins = useCheckinStore((s) => s.entries);

  const datesWithDoses = useMemo(() => getDatesWithDoses(), [doses]);
  const checkinDates = useMemo(
    () => new Set(checkins.map((c) => c.date)),
    [checkins]
  );

  const selectedDayDoses = useMemo(
    () => getDosesByDate(selectedDate),
    [selectedDate, doses]
  );

  const activeProtocols = useMemo(() => getActiveProtocols(), [protocols]);

  const activeAlerts = useMemo(
    () => alerts.filter((a) => !a.dismissed),
    [alerts]
  );

  const monthDays = useMemo(
    () => getMonthDays(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const handleLogDose = () => {
    if (!logPeptideId || !logAmount) {
      Alert.alert('Missing Info', 'Select a peptide and enter an amount.');
      return;
    }

    const amount = parseFloat(logAmount);
    if (isNaN(amount) || amount <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid dose amount.');
      return;
    }

    logDose({
      peptideId: logPeptideId,
      amount,
      unit: logUnit,
      route: logRoute,
      date: selectedDate,
      injectionSite: logSite || undefined,
      notes: logNotes || undefined,
    });

    // Reset form
    setLogPeptideId('');
    setLogAmount('');
    setLogSite('');
    setLogNotes('');
    setShowLogModal(false);
  };

  const alertLevelColor = (level: HealthAlert['level']) => {
    switch (level) {
      case 'info': return Colors.powder;
      case 'caution': return Colors.warning;
      case 'warning': return Colors.rose;
      case 'urgent': return Colors.error;
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Calendar</Text>
          <Text style={styles.headerSub}>Dose tracking & protocols</Text>
        </View>

        {/* Health Alerts */}
        {activeAlerts.length > 0 && (
          <View style={styles.alertSection}>
            {activeAlerts.map((alert) => (
              <View
                key={alert.id}
                style={[
                  styles.alertCard,
                  { borderLeftColor: alertLevelColor(alert.level) },
                ]}
              >
                <View style={styles.alertHeader}>
                  <Text style={styles.alertTitle}>{alert.title}</Text>
                  <TouchableOpacity onPress={() => dismissAlert(alert.id)}>
                    <Ionicons name="close" size={18} color={Colors.darkTextSecondary} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.alertMessage}>{alert.message}</Text>
                <Text style={styles.alertAction}>{alert.actionLabel}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Calendar Grid */}
        <View style={styles.calendarCard}>
          <View style={styles.calendarNav}>
            <TouchableOpacity onPress={prevMonth} style={styles.navBtn}>
              <Ionicons name="chevron-back" size={20} color={Colors.darkText} />
            </TouchableOpacity>
            <Text style={styles.calendarMonth}>
              {MONTHS[viewMonth]} {viewYear}
            </Text>
            <TouchableOpacity onPress={nextMonth} style={styles.navBtn}>
              <Ionicons name="chevron-forward" size={20} color={Colors.darkText} />
            </TouchableOpacity>
          </View>

          <View style={styles.dowRow}>
            {DOW.map((d) => (
              <Text key={d} style={styles.dowText}>{d}</Text>
            ))}
          </View>

          <View style={styles.daysGrid}>
            {monthDays.map((date, idx) => {
              const key = toDateKey(date);
              const isCurrentMonth = date.getMonth() === viewMonth;
              const isToday = key === toDateKey(now);
              const isSelected = key === selectedDate;
              const hasDose = datesWithDoses.has(key);
              const hasCheckin = checkinDates.has(key);

              return (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.dayCell,
                    isSelected && styles.dayCellSelected,
                    isToday && !isSelected && styles.dayCellToday,
                  ]}
                  onPress={() => setSelectedDate(key)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      !isCurrentMonth && styles.dayTextMuted,
                      isSelected && styles.dayTextSelected,
                    ]}
                  >
                    {date.getDate()}
                  </Text>
                  <View style={styles.dotRow}>
                    {hasDose && <View style={[styles.dot, styles.dotDose]} />}
                    {hasCheckin && <View style={[styles.dot, styles.dotCheckin]} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.dot, styles.dotDose]} />
              <Text style={styles.legendText}>Dose logged</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.dot, styles.dotCheckin]} />
              <Text style={styles.legendText}>Check-in</Text>
            </View>
          </View>
        </View>

        {/* Selected Day Detail */}
        <View style={styles.dayDetail}>
          <View style={styles.dayDetailHeader}>
            <Text style={styles.dayDetailTitle}>
              {new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
            <TouchableOpacity
              style={styles.logDoseBtn}
              onPress={() => setShowLogModal(true)}
            >
              <Ionicons name="add" size={18} color={Colors.darkBg} />
              <Text style={styles.logDoseBtnText}>Log Dose</Text>
            </TouchableOpacity>
          </View>

          {selectedDayDoses.length === 0 ? (
            <Text style={styles.noDoses}>No doses logged for this day.</Text>
          ) : (
            selectedDayDoses.map((dose) => {
              const peptide = getPeptideById(dose.peptideId);
              return (
                <View key={dose.id} style={styles.doseCard}>
                  <View style={styles.doseCardLeft}>
                    <Text style={styles.dosePeptideName}>
                      {peptide?.name || dose.peptideId}
                    </Text>
                    <Text style={styles.doseInfo}>
                      {dose.amount} {dose.unit} · {dose.route}
                      {dose.injectionSite ? ` · ${dose.injectionSite}` : ''}
                    </Text>
                    <Text style={styles.doseTime}>{dose.time}</Text>
                    {dose.notes && (
                      <Text style={styles.doseNotes}>{dose.notes}</Text>
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      Alert.alert('Delete Dose', 'Remove this dose log?', [
                        { text: 'Cancel', style: 'cancel' },
                        {
                          text: 'Delete',
                          style: 'destructive',
                          onPress: () => deleteDose(dose.id),
                        },
                      ])
                    }
                  >
                    <Ionicons name="trash-outline" size={18} color={Colors.darkTextSecondary} />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </View>

        {/* Active Protocols */}
        <View style={styles.protocolSection}>
          <Text style={styles.sectionTitle}>Active Protocols</Text>
          {activeProtocols.length === 0 ? (
            <Text style={styles.noDoses}>
              No active protocols. Start one from a peptide's detail page or the
              PepTalk bot.
            </Text>
          ) : (
            activeProtocols.map((proto) => {
              const peptide = getPeptideById(proto.peptideId);
              return (
                <View key={proto.id} style={styles.protocolCard}>
                  <Text style={styles.protocolName}>
                    {peptide?.name || proto.peptideId}
                  </Text>
                  <Text style={styles.protocolInfo}>
                    {proto.dose} {proto.unit} · {proto.route} · {proto.frequency}
                  </Text>
                  <Text style={styles.protocolDates}>
                    Started {proto.startDate}
                    {proto.endDate ? ` · Ends ${proto.endDate}` : ''}
                  </Text>
                </View>
              );
            })
          )}
        </View>

        {/* Medical disclaimer */}
        <View style={styles.disclaimerBox}>
          <Ionicons name="medkit" size={16} color={Colors.warning} />
          <Text style={styles.disclaimerText}>
            If your logged effects indicate concerning symptoms, please consult
            your healthcare provider. PepTalk data can help guide your
            conversation with your doctor.
          </Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* ── Log Dose Modal ──────────────────────────────────────────────── */}
      <Modal
        visible={showLogModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowLogModal(false)}
      >
        <SafeAreaView style={styles.modalSafe}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Log Dose</Text>
              <TouchableOpacity onPress={() => setShowLogModal(false)}>
                <Ionicons name="close" size={24} color={Colors.darkText} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalDate}>
              {new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </Text>

            {/* Peptide selector */}
            <Text style={styles.fieldLabel}>Peptide</Text>
            <TouchableOpacity
              style={styles.pickerBtn}
              onPress={() => setShowPeptidePicker(true)}
            >
              <Text
                style={[
                  styles.pickerBtnText,
                  !logPeptideId && { color: Colors.darkTextSecondary },
                ]}
              >
                {logPeptideId
                  ? getPeptideById(logPeptideId)?.name || logPeptideId
                  : 'Select peptide...'}
              </Text>
              <Ionicons name="chevron-down" size={18} color={Colors.darkTextSecondary} />
            </TouchableOpacity>

            {/* Amount + Unit */}
            <Text style={styles.fieldLabel}>Amount</Text>
            <View style={styles.amountRow}>
              <TextInput
                style={[styles.textInput, { flex: 1 }]}
                value={logAmount}
                onChangeText={setLogAmount}
                placeholder="e.g. 250"
                placeholderTextColor={Colors.darkTextSecondary}
                keyboardType="decimal-pad"
              />
              <View style={styles.unitRow}>
                {UNITS.map((u) => (
                  <TouchableOpacity
                    key={u}
                    style={[
                      styles.unitChip,
                      logUnit === u && styles.unitChipActive,
                    ]}
                    onPress={() => setLogUnit(u)}
                  >
                    <Text
                      style={[
                        styles.unitChipText,
                        logUnit === u && styles.unitChipTextActive,
                      ]}
                    >
                      {u}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Route */}
            <Text style={styles.fieldLabel}>Route</Text>
            <View style={styles.routeRow}>
              {ROUTES.map((r) => (
                <TouchableOpacity
                  key={r}
                  style={[
                    styles.routeChip,
                    logRoute === r && styles.routeChipActive,
                  ]}
                  onPress={() => setLogRoute(r)}
                >
                  <Text
                    style={[
                      styles.routeChipText,
                      logRoute === r && styles.routeChipTextActive,
                    ]}
                  >
                    {r}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Injection site */}
            <Text style={styles.fieldLabel}>Injection Site (optional)</Text>
            <TextInput
              style={styles.textInput}
              value={logSite}
              onChangeText={setLogSite}
              placeholder="e.g. abdomen left, deltoid right"
              placeholderTextColor={Colors.darkTextSecondary}
            />

            {/* Notes */}
            <Text style={styles.fieldLabel}>Notes (optional)</Text>
            <TextInput
              style={[styles.textInput, { minHeight: 60 }]}
              value={logNotes}
              onChangeText={setLogNotes}
              placeholder="How did you feel? Any effects?"
              placeholderTextColor={Colors.darkTextSecondary}
              multiline
            />

            {/* Protocol suggestion */}
            {logPeptideId && (
              <View style={styles.protoSuggest}>
                {(() => {
                  const protos = getProtocolsByPeptide(logPeptideId);
                  if (protos.length === 0) return null;
                  const proto = protos[0];
                  return (
                    <>
                      <Text style={styles.protoSuggestTitle}>
                        Research Protocol Reference
                      </Text>
                      <Text style={styles.protoSuggestInfo}>
                        {proto.name}: {proto.typicalDose.min}-{proto.typicalDose.max}
                        {proto.typicalDose.unit} · {proto.frequencyLabel}
                      </Text>
                      {proto.timing && (
                        <Text style={styles.protoSuggestNote}>
                          Timing: {proto.timing}
                        </Text>
                      )}
                      <Text style={styles.protoSuggestDisclaimer}>
                        Informational only — consult your provider
                      </Text>
                    </>
                  );
                })()}
              </View>
            )}

            <TouchableOpacity style={styles.saveBtn} onPress={handleLogDose}>
              <Text style={styles.saveBtnText}>Log Dose</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>

        {/* Peptide Picker Sub-Modal */}
        <Modal
          visible={showPeptidePicker}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setShowPeptidePicker(false)}
        >
          <SafeAreaView style={styles.modalSafe}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Peptide</Text>
              <TouchableOpacity onPress={() => setShowPeptidePicker(false)}>
                <Ionicons name="close" size={24} color={Colors.darkText} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={PEPTIDES}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingHorizontal: Spacing.md }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.peptidePickerItem,
                    logPeptideId === item.id && styles.peptidePickerItemActive,
                  ]}
                  onPress={() => {
                    setLogPeptideId(item.id);
                    // Auto-set unit/route from protocol if available
                    const protos = getProtocolsByPeptide(item.id);
                    if (protos.length > 0) {
                      setLogUnit(protos[0].typicalDose.unit);
                      setLogRoute(protos[0].route);
                    }
                    setShowPeptidePicker(false);
                  }}
                >
                  <Text style={styles.peptidePickerName}>{item.name}</Text>
                  <Text style={styles.peptidePickerCats}>
                    {item.categories.join(', ')}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        </Modal>
      </Modal>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.darkBg },
  header: { paddingHorizontal: Spacing.md, paddingTop: Spacing.md },
  headerTitle: { fontSize: 28, fontWeight: '800', color: Colors.darkText },
  headerSub: { fontSize: FontSizes.sm, color: Colors.darkTextSecondary, marginTop: 2 },

  // Alerts
  alertSection: { paddingHorizontal: Spacing.md, marginTop: Spacing.md, gap: Spacing.sm },
  alertCard: {
    backgroundColor: Colors.darkCard, borderRadius: BorderRadius.md,
    padding: Spacing.md, borderLeftWidth: 4,
  },
  alertHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  alertTitle: { fontSize: FontSizes.md, fontWeight: '700', color: Colors.darkText },
  alertMessage: { fontSize: FontSizes.sm, color: Colors.darkTextSecondary, marginTop: 6, lineHeight: 20 },
  alertAction: { fontSize: FontSizes.sm, color: Colors.rose, fontWeight: '600', marginTop: 8 },

  // Calendar
  calendarCard: {
    backgroundColor: Colors.darkCard, borderRadius: BorderRadius.lg,
    margin: Spacing.md, padding: Spacing.md,
    borderWidth: 1, borderColor: Colors.darkCardBorder,
  },
  calendarNav: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: Spacing.md,
  },
  navBtn: { padding: Spacing.xs },
  calendarMonth: { fontSize: FontSizes.lg, fontWeight: '700', color: Colors.darkText },
  dowRow: { flexDirection: 'row', marginBottom: Spacing.xs },
  dowText: {
    flex: 1, textAlign: 'center', fontSize: FontSizes.xs,
    fontWeight: '600', color: Colors.darkTextSecondary,
  },
  daysGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  dayCell: {
    width: '14.28%', aspectRatio: 1, alignItems: 'center', justifyContent: 'center',
    borderRadius: BorderRadius.sm,
  },
  dayCellSelected: { backgroundColor: Colors.rose },
  dayCellToday: { borderWidth: 1, borderColor: Colors.rose },
  dayText: { fontSize: FontSizes.sm, color: Colors.darkText, fontWeight: '500' },
  dayTextMuted: { color: Colors.darkTextSecondary, opacity: 0.4 },
  dayTextSelected: { color: Colors.darkBg, fontWeight: '700' },
  dotRow: { flexDirection: 'row', gap: 3, marginTop: 2, height: 6 },
  dot: { width: 5, height: 5, borderRadius: 2.5 },
  dotDose: { backgroundColor: Colors.sage },
  dotCheckin: { backgroundColor: Colors.powder },
  legend: {
    flexDirection: 'row', gap: Spacing.md, marginTop: Spacing.sm,
    justifyContent: 'center',
  },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  legendText: { fontSize: FontSizes.xs, color: Colors.darkTextSecondary },

  // Day detail
  dayDetail: { paddingHorizontal: Spacing.md, marginTop: Spacing.sm },
  dayDetailHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  dayDetailTitle: { fontSize: FontSizes.lg, fontWeight: '700', color: Colors.darkText },
  logDoseBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    backgroundColor: Colors.rose, borderRadius: BorderRadius.full,
    paddingVertical: 8, paddingHorizontal: 14,
  },
  logDoseBtnText: { fontSize: FontSizes.sm, fontWeight: '700', color: Colors.darkBg },
  noDoses: { fontSize: FontSizes.sm, color: Colors.darkTextSecondary, fontStyle: 'italic' },
  doseCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.darkCard,
    borderRadius: BorderRadius.md, padding: Spacing.md, marginBottom: Spacing.sm,
    borderWidth: 1, borderColor: Colors.darkCardBorder,
  },
  doseCardLeft: { flex: 1 },
  dosePeptideName: { fontSize: FontSizes.md, fontWeight: '600', color: Colors.darkText },
  doseInfo: { fontSize: FontSizes.sm, color: Colors.darkTextSecondary, marginTop: 2 },
  doseTime: { fontSize: FontSizes.xs, color: Colors.darkTextSecondary, marginTop: 2 },
  doseNotes: {
    fontSize: FontSizes.xs, color: Colors.sage, fontStyle: 'italic', marginTop: 4,
  },

  // Protocols
  protocolSection: { paddingHorizontal: Spacing.md, marginTop: Spacing.lg },
  sectionTitle: { fontSize: FontSizes.lg, fontWeight: '700', color: Colors.darkText, marginBottom: Spacing.sm },
  protocolCard: {
    backgroundColor: Colors.darkCard, borderRadius: BorderRadius.md,
    padding: Spacing.md, marginBottom: Spacing.sm,
    borderWidth: 1, borderColor: Colors.darkCardBorder,
  },
  protocolName: { fontSize: FontSizes.md, fontWeight: '600', color: Colors.darkText },
  protocolInfo: { fontSize: FontSizes.sm, color: Colors.darkTextSecondary, marginTop: 4 },
  protocolDates: { fontSize: FontSizes.xs, color: Colors.darkTextSecondary, marginTop: 2 },

  // Disclaimer
  disclaimerBox: {
    flexDirection: 'row', gap: Spacing.sm, alignItems: 'flex-start',
    backgroundColor: 'rgba(245, 158, 11, 0.1)', borderRadius: BorderRadius.md,
    padding: Spacing.md, marginHorizontal: Spacing.md, marginTop: Spacing.lg,
    borderWidth: 1, borderColor: 'rgba(245, 158, 11, 0.2)',
  },
  disclaimerText: { flex: 1, fontSize: FontSizes.xs, color: Colors.warning, lineHeight: 18 },

  // Modal
  modalSafe: { flex: 1, backgroundColor: Colors.darkBg },
  modalContent: { padding: Spacing.md, paddingBottom: 40 },
  modalHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.md,
    borderBottomWidth: 1, borderBottomColor: Colors.darkCardBorder,
  },
  modalTitle: { fontSize: FontSizes.xl, fontWeight: '700', color: Colors.darkText },
  modalDate: {
    fontSize: FontSizes.md, color: Colors.darkTextSecondary, marginBottom: Spacing.lg,
  },
  fieldLabel: {
    fontSize: FontSizes.sm, fontWeight: '600', color: Colors.darkText,
    marginBottom: 6, marginTop: Spacing.md,
  },
  pickerBtn: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: Colors.darkCard, borderRadius: BorderRadius.md,
    padding: Spacing.md, borderWidth: 1, borderColor: Colors.darkCardBorder,
  },
  pickerBtnText: { fontSize: FontSizes.md, color: Colors.darkText },
  textInput: {
    backgroundColor: Colors.darkCard, borderRadius: BorderRadius.md,
    padding: Spacing.md, color: Colors.darkText, fontSize: FontSizes.md,
    borderWidth: 1, borderColor: Colors.darkCardBorder,
  },
  amountRow: { gap: Spacing.sm },
  unitRow: { flexDirection: 'row', gap: Spacing.xs },
  unitChip: {
    flex: 1, alignItems: 'center', paddingVertical: 8,
    borderRadius: BorderRadius.md, backgroundColor: Colors.darkCard,
    borderWidth: 1, borderColor: Colors.darkCardBorder,
  },
  unitChipActive: { backgroundColor: Colors.rose, borderColor: Colors.rose },
  unitChipText: { fontSize: FontSizes.sm, color: Colors.darkTextSecondary, fontWeight: '600' },
  unitChipTextActive: { color: Colors.darkBg },
  routeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.xs },
  routeChip: {
    paddingVertical: 8, paddingHorizontal: 12,
    borderRadius: BorderRadius.full, backgroundColor: Colors.darkCard,
    borderWidth: 1, borderColor: Colors.darkCardBorder,
  },
  routeChipActive: { backgroundColor: Colors.sage, borderColor: Colors.sage },
  routeChipText: { fontSize: FontSizes.sm, color: Colors.darkTextSecondary },
  routeChipTextActive: { color: Colors.darkBg, fontWeight: '600' },
  protoSuggest: {
    backgroundColor: 'rgba(185, 203, 182, 0.1)', borderRadius: BorderRadius.md,
    padding: Spacing.md, marginTop: Spacing.md,
    borderWidth: 1, borderColor: 'rgba(185, 203, 182, 0.2)',
  },
  protoSuggestTitle: { fontSize: FontSizes.sm, fontWeight: '700', color: Colors.sage },
  protoSuggestInfo: {
    fontSize: FontSizes.sm, color: Colors.darkTextSecondary, marginTop: 4,
  },
  protoSuggestNote: {
    fontSize: FontSizes.xs, color: Colors.darkTextSecondary, marginTop: 2,
  },
  protoSuggestDisclaimer: {
    fontSize: FontSizes.xs, color: Colors.darkTextSecondary, fontStyle: 'italic',
    marginTop: 6, opacity: 0.6,
  },
  saveBtn: {
    backgroundColor: Colors.rose, borderRadius: BorderRadius.md,
    paddingVertical: 16, alignItems: 'center', marginTop: Spacing.lg,
  },
  saveBtnText: { fontSize: FontSizes.lg, fontWeight: '700', color: Colors.darkBg },

  // Peptide picker
  peptidePickerItem: {
    paddingVertical: Spacing.sm + 4, paddingHorizontal: Spacing.md,
    borderBottomWidth: 1, borderBottomColor: Colors.darkCardBorder,
  },
  peptidePickerItemActive: { backgroundColor: 'rgba(227, 167, 161, 0.15)' },
  peptidePickerName: { fontSize: FontSizes.md, fontWeight: '600', color: Colors.darkText },
  peptidePickerCats: { fontSize: FontSizes.xs, color: Colors.darkTextSecondary, marginTop: 2 },
});
