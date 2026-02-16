import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SafetyCalloutProps {
  title?: string;
  subtitle?: string;
}

export const SafetyCallout: React.FC<SafetyCalloutProps> = ({
  title = 'Research-Only Guidance',
  subtitle = 'Buy clean, US-made research chemicals with real COAs. Know your source.',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="shield-checkmark-outline" size={18} color="#0f1720" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: 'rgba(240, 214, 138, 0.12)',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(240, 214, 138, 0.35)',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0d68a',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: '#f7f2ec',
  },
  subtitle: {
    fontSize: 11,
    color: '#cbd5e1',
    marginTop: 4,
    lineHeight: 16,
  },
});

export default SafetyCallout;
