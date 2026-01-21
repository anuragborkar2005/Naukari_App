import { Text, View } from 'react-native';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useState, useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

export const Splash = () => {
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center overflow-hidden bg-emerald-600 p-4">
      <View className="flex flex-row justify-center gap-x-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="7.9196"
            y="24.748"
            width="23.8"
            height="23.8"
            transform="rotate(-45 7.9196 24.748)"
            stroke="#FEFEFE"
            strokeWidth="11.2"
          />
        </svg>

        <Text className="text-4xl font-semibold  text-white">Naukari</Text>
      </View>

      <View className="absolute left-1/2 right-0 -z-50 h-[80rem] w-[80rem] rotate-45 bg-emerald-500" />
      <View className="absolute left-2/3 right-0 -z-10 h-[40rem] w-[40rem] rotate-45  bg-emerald-600" />
    </View>
  );
};
