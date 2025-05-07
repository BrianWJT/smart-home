import { Stack } from 'expo-router';
import React from 'react';

export default function GroupsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Groups',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Group Details',
          headerShown: false,
        }}
      />
    </Stack>
  );
}