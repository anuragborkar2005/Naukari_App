import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const LanguageCard = ({
  label,
  symbol,
  isSelected,
  onSelect,
}: {
  label: string;
  symbol: string;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <TouchableOpacity
    onPress={onSelect}
    className={`aspect-square w-[45%] items-center justify-center rounded-3xl border-2 ${
      isSelected ? 'border-emerald-600 bg-emerald-50/30' : 'border-gray-200 bg-white'
    }`}>
    <Text className={`mb-2 text-6xl ${isSelected ? 'text-blue-600' : 'text-blue-500'}`}>
      {symbol}
    </Text>
    <Text className="text-lg font-medium text-gray-800">{label}</Text>
  </TouchableOpacity>
);

export default function LanguageSelection() {
  const [selected, setSelected] = useState('English');

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Background Decorative Pattern */}
      <View className="absolute inset-0 opacity-5">
        <View className="absolute -right-20 -top-20 h-80 w-80 rotate-45 bg-emerald-500" />
        <View className="absolute -left-20 top-1/2 h-80 w-80 rotate-45 bg-emerald-500" />
      </View>

      <View className="flex-1 justify-center px-8">
        <Text className="mb-16 text-center text-2xl font-bold text-gray-800">
          Choose your Language
        </Text>

        <View className="flex-row justify-between">
          <LanguageCard
            label="मराठी"
            symbol="अ"
            isSelected={selected === 'Marathi'}
            onSelect={() => setSelected('Marathi')}
          />
          <LanguageCard
            label="English"
            symbol="A"
            isSelected={selected === 'English'}
            onSelect={() => setSelected('English')}
          />
        </View>
      </View>

      <View className="px-8 pb-10">
        <Text className="mb-6 text-center text-xs text-gray-500">
          By clicking ‘Continue’, you agree to the Naukari’s{'\n'}
          <Text className="font-medium text-emerald-600">Terms of Service and Privacy Policy</Text>
        </Text>
        <TouchableOpacity
          className="h-14 items-center justify-center rounded-xl bg-emerald-700"
          onPress={() => router.push('/(auth)/user-details')}>
          <Text className="text-lg font-bold text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
