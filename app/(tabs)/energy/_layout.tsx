import { Stack } from 'expo-router';
import React from 'react';

export default function EnergyLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Energy',
          headerShown: false,
        }}
      />
    </Stack>
  );
}