import React from 'react';
import { StyleSheet, Switch, Text, View, ViewStyle } from 'react-native';

interface ToggleProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  style?: ViewStyle;
}

export function Toggle({ label, value, onValueChange, style }: ToggleProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#E0E0E0', true: '#E0E0E0' }}
        thumbColor={value ? '#FF3B30' : '#F4F3F4'}
        ios_backgroundColor="#E0E0E0"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});