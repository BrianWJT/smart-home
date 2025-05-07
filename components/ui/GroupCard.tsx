import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Toggle } from './Toggle';

interface GroupCardProps {
  name: string;
  isOn: boolean;
  onToggle: (value: boolean) => void;
  onPress?: () => void;
}

export function GroupCard({ name, isOn, onToggle, onPress }: GroupCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={!onPress}>
      <Toggle label={name} value={isOn} onValueChange={onToggle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
});