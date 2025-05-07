import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface AddButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

export function AddButton({ title, onPress, style }: AddButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Ionicons name="add" size={24} color="#333" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderStyle: 'dashed',
    borderRadius: 8,
  },
  text: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
});