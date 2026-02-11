import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Disclaimer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="information-circle-outline"
        size={16}
        color="#9ca3af"
        style={styles.icon}
      />
      <Text style={styles.text}>
        This information is for research and educational purposes only. These
        products are not intended for human consumption.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(199, 215, 230, 0.1)',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 10,
    marginTop: 1,
  },
  text: {
    flex: 1,
    fontSize: 11,
    color: '#9ca3af',
    lineHeight: 16,
  },
});

export default Disclaimer;
