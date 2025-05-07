import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [tac, setTAC] = useState('');

  const handleSignUp = () => {
    // In a real app, you would validate and create an account here
    // For now, just navigate to the home screen
    router.replace('/(tabs)');
  };


  const navigateToLogin = () => {
    router.push('/login');
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
        
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        
        <Button 
          title="Sign Up" 
          onPress={handleSignUp} 
          style={styles.signUpButton}
        />
        
        <Button 
          title="Log In" 
          onPress={navigateToLogin} 
          variant="secondary"
          style={styles.loginButton}
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
  tacInput: {
    marginBottom: 20,
    width: '60%',
  },
  signUpButton: {
    width: '80%',
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
  loginButton: {
    marginTop: 20,
    width: '80%',
  },
});