import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real app, you would validate credentials here
    // For now, just navigate to the home screen
    router.replace('/(tabs)');
  };

  const navigateToSignUp = () => {
    router.push('/signup');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.formContainer}>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        
        <Button 
          title="Log In" 
          onPress={handleLogin} 
          style={styles.loginButton}
        />
        
        <Button 
          title="Sign Up" 
          onPress={navigateToSignUp} 
          variant="secondary"
          style={styles.signUpButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginBottom: 15,
    width: '100%',
  },
  loginButton: {
    width: '80%',
    marginTop: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    width: '80%',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleText: {
    color: '#333',
    fontSize: 14,
  },
  signUpButton: {
    marginTop: 20,
    width: '80%',
  },
});