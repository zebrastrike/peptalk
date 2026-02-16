import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TalkToMeBarProps {
  onPress?: () => void;
  label?: string;
  helperText?: string;
}

export const TalkToMeBar: React.FC<TalkToMeBarProps> = ({
  onPress,
  label = 'Talk to me',
  helperText = 'Research assistant • no medical recommendations',
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="chatbubbles-outline" size={20} color="#0f1720" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.helper}>{helperText}</Text>
      </View>
      <Ionicons name="arrow-forward" size={18} color="#e3a7a1" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f2ec',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3a7a1',
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f1720',
  },
  helper: {
    fontSize: 11,
    color: '#6b7280',
    marginTop: 2,
  },
});

export default TalkToMeBar;
