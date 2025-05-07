import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Toggle } from './Toggle';

interface DeviceCardProps {
  name: string;
  isOn: boolean;
  onToggle: (value: boolean) => void;
}

export function DeviceCard({ name, isOn, onToggle }: DeviceCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="bulb-outline" size={24} color="#333" />
      </View>
      <Toggle label={name} value={isOn} onValueChange={onToggle} style={styles.toggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  toggle: {
    flex: 1,
    padding: 0,
  },
});
