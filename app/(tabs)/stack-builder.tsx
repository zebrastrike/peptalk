import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useStackStore } from '../../src/store/useStackStore';
import { PEPTIDES, getPeptideById } from '../../src/data/peptides';
import { SearchBar } from '../../src/components/SearchBar';
import { AnalysisCard } from '../../src/components/AnalysisCard';
import { GlassCard } from '../../src/components/GlassCard';
import { Disclaimer } from '../../src/components/Disclaimer';
import { Peptide } from '../../src/types';

const MAX_STACK_SIZE = 5;

export default function StackBuilderScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSaveInput, setShowSaveInput] = useState(false);
  const [stackName, setStackName] = useState('');

  const {
    currentStack,
    currentAnalysis,
    isAnalyzing,
    addToStack,
    removeFromStack,
    clearStack,
    analyzeCurrentStack,
    saveStack,
  } = useStackStore();

  const filteredPeptides = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];

    return PEPTIDES.filter(
      (p) =>
        !currentStack.includes(p.id) &&
        (p.name.toLowerCase().includes(q) ||
          (p.abbreviation && p.abbreviation.toLowerCase().includes(q)) ||
          p.categories.some((c) => c.toLowerCase().includes(q)))
    );
  }, [searchQuery, currentStack]);

  const stackPeptides = useMemo(
    () =>
      currentStack
        .map((id) => getPeptideById(id))
        .filter(Boolean) as Peptide[],
    [currentStack]
  );

  const handleAnalyze = useCallback(async () => {
    await analyzeCurrentStack();
  }, [analyzeCurrentStack]);

  const handleSave = useCallback(() => {
    const name = stackName.trim();
    if (!name) {
      Alert.alert('Name Required', 'Please enter a name for your stack.');
      return;
    }
    saveStack(name);
    setStackName('');
    setShowSaveInput(false);
    Alert.alert('Saved', `"${name}" has been saved to My Stacks.`);
  }, [stackName, saveStack]);

  const handleAddPeptide = useCallback(
    (peptideId: string) => {
      addToStack(peptideId);
      setSearchQuery('');
    },
    [addToStack]
  );

  const renderPickerItem = ({ item }: { item: Peptide }) => (
    <TouchableOpacity
      style={styles.pickerItem}
      onPress={() => handleAddPeptide(item.id)}
      activeOpacity={0.7}
    >
      <View style={styles.pickerItemContent}>
        <Text style={styles.pickerItemName}>{item.name}</Text>
        <Text style={styles.pickerItemCategories}>
          {item.categories.join(', ')}
        </Text>
      </View>
      <Ionicons name="add-circle-outline" size={22} color="#b9cbb6" />
    </TouchableOpacity>
  );

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
          <Text style={styles.title}>Stack Builder</Text>
          <Text style={styles.subtitle}>
            Combine up to {MAX_STACK_SIZE} peptides and analyze their
            interactions
          </Text>
        </View>

        {/* Workspace: Selected Peptides */}
        <GlassCard style={styles.workspace}>
          <View style={styles.workspaceHeader}>
            <Text style={styles.workspaceTitle}>
              Your Stack ({currentStack.length}/{MAX_STACK_SIZE})
            </Text>
            {currentStack.length > 0 && (
              <TouchableOpacity onPress={clearStack} activeOpacity={0.7}>
                <Text style={styles.clearButton}>Clear All</Text>
              </TouchableOpacity>
            )}
          </View>

          {stackPeptides.length > 0 ? (
            <View style={styles.pillsContainer}>
              {stackPeptides.map((peptide) => (
                <View key={peptide.id} style={styles.peptidePill}>
                  <Text style={styles.pillText}>{peptide.name}</Text>
                  <TouchableOpacity
                    onPress={() => removeFromStack(peptide.id)}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Ionicons
                      name="close-circle"
                      size={18}
                      color="#e3a7a1"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyWorkspace}>
              <Ionicons name="flask-outline" size={36} color="#4b5563" />
              <Text style={styles.emptyText}>
                Search and add peptides below
              </Text>
            </View>
          )}
        </GlassCard>

        {/* Peptide Picker */}
        {currentStack.length < MAX_STACK_SIZE && (
          <View style={styles.pickerSection}>
            <Text style={styles.sectionTitle}>Add Peptides</Text>
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search peptides to add..."
            />
            {filteredPeptides.length > 0 && (
              <View style={styles.pickerList}>
                {filteredPeptides.slice(0, 8).map((peptide) => (
                  <TouchableOpacity
                    key={peptide.id}
                    style={styles.pickerItem}
                    onPress={() => handleAddPeptide(peptide.id)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.pickerItemContent}>
                      <Text style={styles.pickerItemName}>
                        {peptide.name}
                      </Text>
                      <Text style={styles.pickerItemCategories}>
                        {peptide.categories.join(', ')}
                      </Text>
                    </View>
                    <Ionicons
                      name="add-circle-outline"
                      size={22}
                      color="#b9cbb6"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {searchQuery.trim() && filteredPeptides.length === 0 && (
              <Text style={styles.noResultsText}>
                No matching peptides found
              </Text>
            )}
          </View>
        )}

        {/* Analyze Button */}
        <TouchableOpacity
          style={[
            styles.analyzeButton,
            currentStack.length < 2 && styles.analyzeButtonDisabled,
          ]}
          onPress={handleAnalyze}
          disabled={currentStack.length < 2 || isAnalyzing}
          activeOpacity={0.8}
        >
          {isAnalyzing ? (
            <ActivityIndicator size="small" color="#0f1720" />
          ) : (
            <>
              <Ionicons name="analytics-outline" size={20} color="#0f1720" />
              <Text style={styles.analyzeButtonText}>Analyze Stack</Text>
            </>
          )}
        </TouchableOpacity>

        {currentStack.length < 2 && currentStack.length > 0 && (
          <Text style={styles.minWarning}>
            Add at least 2 peptides to analyze interactions
          </Text>
        )}

        {/* Save Stack */}
        {currentStack.length >= 2 && (
          <View style={styles.saveSection}>
            {showSaveInput ? (
              <GlassCard style={styles.saveInputCard}>
                <TextInput
                  style={styles.saveInput}
                  value={stackName}
                  onChangeText={setStackName}
                  placeholder="Enter stack name..."
                  placeholderTextColor="#9ca3af"
                  selectionColor="#e3a7a1"
                  autoFocus
                />
                <View style={styles.saveActions}>
                  <TouchableOpacity
                    style={styles.saveCancelBtn}
                    onPress={() => {
                      setShowSaveInput(false);
                      setStackName('');
                    }}
                  >
                    <Text style={styles.saveCancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.saveConfirmBtn}
                    onPress={handleSave}
                  >
                    <Text style={styles.saveConfirmText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </GlassCard>
            ) : (
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => setShowSaveInput(true)}
                activeOpacity={0.7}
              >
                <Ionicons name="bookmark-outline" size={18} color="#c7d7e6" />
                <Text style={styles.saveButtonText}>Save Stack</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* Analysis Results */}
        {currentAnalysis && (
          <View style={styles.analysisSection}>
            <Text style={styles.sectionTitle}>Analysis Results</Text>
            <AnalysisCard analysis={currentAnalysis} />
          </View>
        )}

        {/* Disclaimer */}
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
  subtitle: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 4,
    lineHeight: 18,
  },
  workspace: {
    marginTop: 20,
    marginBottom: 20,
  },
  workspaceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  workspaceTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#e8e6e3',
  },
  clearButton: {
    fontSize: 13,
    fontWeight: '600',
    color: '#e3a7a1',
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  peptidePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(227, 167, 161, 0.12)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(227, 167, 161, 0.25)',
    paddingLeft: 14,
    paddingRight: 8,
    paddingVertical: 8,
    gap: 8,
  },
  pillText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#e3a7a1',
  },
  emptyWorkspace: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  emptyText: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 8,
  },
  pickerSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e8e6e3',
    marginBottom: 12,
  },
  pickerList: {
    marginTop: 12,
  },
  pickerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  pickerItemContent: {
    flex: 1,
    marginRight: 12,
  },
  pickerItemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e8e6e3',
  },
  pickerItemCategories: {
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 2,
  },
  noResultsText: {
    fontSize: 13,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 16,
  },
  analyzeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3a7a1',
    borderRadius: 14,
    paddingVertical: 16,
    gap: 8,
    marginBottom: 8,
  },
  analyzeButtonDisabled: {
    backgroundColor: 'rgba(227, 167, 161, 0.3)',
  },
  analyzeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f1720',
  },
  minWarning: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  saveSection: {
    marginTop: 12,
    marginBottom: 20,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(199, 215, 230, 0.3)',
    paddingVertical: 12,
    gap: 8,
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#c7d7e6',
  },
  saveInputCard: {
    padding: 16,
  },
  saveInput: {
    fontSize: 15,
    color: '#e8e6e3',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.15)',
    paddingBottom: 10,
    marginBottom: 14,
  },
  saveActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  saveCancelBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  saveCancelText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9ca3af',
  },
  saveConfirmBtn: {
    backgroundColor: '#b9cbb6',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  saveConfirmText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f1720',
  },
  analysisSection: {
    marginTop: 8,
    marginBottom: 16,
  },
});
