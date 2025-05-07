import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AddButton } from '../../../components/ui/AddButton';
import { GroupCard } from '../../../components/ui/GroupCard';

export default function GroupsScreen() {
  const [groups, setGroups] = useState([
    { id: '1', name: 'Group 1', isOn: true },
    { id: '2', name: 'Group 2', isOn: false },
  ]);

  const toggleGroup = (id: string, value: boolean) => {
    setGroups(
      groups.map(group => 
        group.id === id ? { ...group, isOn: value } : group
      )
    );
  };

  const handleGroupPress = (id: string) => {
    // Use proper type syntax for Expo Router
    router.push({
      pathname: "/groups/[id]",
      params: { id }
    });
  };

  const handleAddGroup = () => {
    // In a real app, navigate to add group screen or show modal
    console.log('Add group pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Groups</Text>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {groups.map(group => (
          <GroupCard
            key={group.id}
            name={group.name}
            isOn={group.isOn}
            onToggle={(value) => toggleGroup(group.id, value)}
            onPress={() => handleGroupPress(group.id)}
          />
        ))}
        
        <AddButton title="New Group" onPress={handleAddGroup} style={styles.addButton} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    padding: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 15,
  },
  addButton: {
    marginTop: 20,
  },
});
