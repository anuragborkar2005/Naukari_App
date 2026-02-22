import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Splash } from '../components/SplashScreen';
import { OnboardingScreen } from '../components/OnboardingScreen';
import '../global.css';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isSplash, setIsSplash] = useState(true);
  const [isOnboarding, setIsOnboarding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setIsSplash(false);
      await SplashScreen.hideAsync();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isSplash) {
    return <Splash />;
  }

  if (isOnboarding) {
    return (
      <>
        <OnboardingScreen
          onComplete={async () => {
            setIsOnboarding(false);
            await SplashScreen.hideAsync();
            router.push('(auth)/language');
          }}
        />
        <StatusBar style="auto" />
      </>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Your file-based routes (index, home, etc.) go here */}
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="(auth)/language" />
        <Stack.Screen name="(auth)/user-details" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
