import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AddButton } from '../../../components/ui/AddButton';
import { DeviceCard } from '../../../components/ui/DeviceCard';

export default function HomeScreen() {
  const [devices, setDevices] = useState([
    { id: '1', name: 'Light 1', isOn: true },
    { id: '2', name: 'Light 2', isOn: false },
    { id: '3', name: 'Light 3', isOn: true },
  ]);

  const toggleDevice = (id: string, value: boolean) => {
    setDevices(
      devices.map(device => 
        device.id === id ? { ...device, isOn: value } : device
      )
    );
  };

  const handleAddDevice = () => {
    // In a real app, navigate to add device screen or show modal
    console.log('Add device pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {devices.map(device => (
          <DeviceCard
            key={device.id}
            name={device.name}
            isOn={device.isOn}
            onToggle={(value) => toggleDevice(device.id, value)}
          />
        ))}
        
        <AddButton title="Add New Device" onPress={handleAddDevice} style={styles.addButton} />
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