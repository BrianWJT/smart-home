import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EnergyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Energy</Text>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.energyCard}>
          <View style={styles.energyHeader}>
            <Ionicons name="flash-outline" size={24} color="#333" />
            <Text style={styles.energyTitle}>Today's Usage</Text>
          </View>
          <Text style={styles.energyValue}>2.4 kWh</Text>
        </View>
        
        <View style={styles.energyCard}>
          <View style={styles.energyHeader}>
            <Ionicons name="calendar-outline" size={24} color="#333" />
            <Text style={styles.energyTitle}>Monthly Usage</Text>
          </View>
          <Text style={styles.energyValue}>48.7 kWh</Text>
        </View>
        
        <View style={styles.energyCard}>
          <View style={styles.energyHeader}>
            <Ionicons name="trending-down-outline" size={24} color="#4CD964" />
            <Text style={styles.energyTitle}>Savings</Text>
          </View>
          <Text style={[styles.energyValue, styles.savingsValue]}>12% less than last month</Text>
        </View>
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
  energyCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  energyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  energyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  energyValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  savingsValue: {
    color: '#4CD964',
  },
});