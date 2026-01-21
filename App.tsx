import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { router, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';

import './global.css';

import { Splash } from 'components/SplashScreen';
import { OnboardingScreen } from 'components/OnboardingScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);
  }, []);

  if (isSplash) {
    return <Splash />;
  }

  return (
    <>
      <OnboardingScreen onComplete={() => {}} />
      <StatusBar style="auto" />
    </>
  );
}
