import { StatusBar } from 'expo-status-bar';
import { ExpoRoot, router, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import { Splash } from 'components/SplashScreen';
import { OnboardingScreen } from 'components/OnboardingScreen';
import './global.css';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isSplash, setIsSplash] = useState(true);
  const [isOnboarding, setIsOnboarding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
      SplashScreen.hideAsync();
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
          onComplete={() => {
            setIsOnboarding(false);
            router.push('/home');
          }}
        />
        <StatusBar style="auto" />
      </>
    );
  }

  // ✅ Provide the context explicitly
  const ctx = (require as any).context('./app');
  return <ExpoRoot context={ctx} />;
}
