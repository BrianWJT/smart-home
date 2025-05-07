import { router } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    // In a real app, check if user is logged in
    // For now, redirect to login
    router.replace('/login');
  }, []);

  return null;
}