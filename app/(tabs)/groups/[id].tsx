import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AddButton } from '../../../components/ui/AddButton';
import { Toggle } from '../../../components/ui/Toggle';

export default function GroupDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [group, setGroup] = useState({ id: '', name: '', isOn: false });
  const [devices, setDevices] = useState<{ id: string; name: string; isOn: boolean }[]>([]);

  useEffect(() => {
    // In a real app, fetch group and devices from API or storage
    // For now, use mock data
    if (id === '1') {
      setGroup({ id: '1', name: 'Group 1', isOn: true });
      setDevices([
        { id: '1', name: 'Light 1', isOn: true },
        { id: '2', name: 'Light 2', isOn: true },
      ]);
    } else if (id === '2') {
      setGroup({ id: '2', name: 'Group 2', isOn: false });
      setDevices([]);
    }
  }, [id]);

  const toggleGroup = (value: boolean) => {
    setGroup({ ...group, isOn: value });
    // In a real app, toggle all devices in the group
    setDevices(devices.map(device => ({ ...device, isOn: value })));
  };

  const toggleDevice = (deviceId: string, value: boolean) => {
    setDevices(
      devices.map(device => 
        device.id === deviceId ? { ...device, isOn: value } : device
      )
    );
  };

  const handleAddDevice = () => {
    // In a real app, navigate to add device to group screen or show modal
    console.log('Add device to group pressed');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color="#333" 
            onPress={handleGoBack}
            style={styles.backButton}
          />
          <Text style={styles.title}>{group.name}</Text>
        </View>
        <Toggle 
          label={group.name} 
          value={group.isOn} 
          onValueChange={toggleGroup}
          style={styles.groupToggle}
        />
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {devices.map(device => (
          <View key={device.id} style={styles.deviceItem}>
            <Text style={styles.deviceBullet}>•</Text>
            <Text style={styles.deviceName}>{device.name}</Text>
          </View>
        ))}
        
        <AddButton title="New Group" onPress={handleAddDevice} style={styles.addButton} />
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  groupToggle: {
    marginTop: 10,
    backgroundColor: 'transparent',
    padding: 0,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 15,
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  deviceBullet: {
    fontSize: 20,
    marginRight: 8,
    color: '#333',
  },
  deviceName: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    marginTop: 20,
  },
});