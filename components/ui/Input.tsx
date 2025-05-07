import React from 'react';
import { StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  label?: string;
}

export function Input({ placeholder, value, onChangeText, secureTextEntry = false, style, label }: InputProps) {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#333',
  },
  input: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '100%',
    fontSize: 16,
  },
});