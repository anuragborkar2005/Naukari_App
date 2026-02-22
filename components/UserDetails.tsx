import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { ArrowLeft, Calendar, Search, Plus, ChevronDown, LucideIcon } from 'lucide-react-native';
import { router } from 'expo-router';

interface FormFieldProps {
  label: string;
  placeholder: string;
  icon?: LucideIcon;
}

const FormField = ({ label, placeholder, icon: Icon }: FormFieldProps) => {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-lg font-bold text-gray-900">{label}</Text>
      <View className="h-14 flex-row items-center rounded-xl border border-gray-300 bg-white px-4">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          className="flex-1 text-base text-gray-800 focus:outline-none"
        />
        {Icon && <Icon size={20} color="#4b5563" />}
      </View>
    </View>
  );
};

interface ChipProps {
  label: string;
  isSelected?: boolean;
  onPress: () => void;
}

const Chip = ({ label, isSelected = false, onPress }: ChipProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`mb-3 mr-2 rounded-full border px-5 py-2 ${
        isSelected ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300 bg-white'
      }`}>
      <Text className={isSelected ? 'font-medium text-emerald-700' : 'text-gray-400'}>{label}</Text>
    </TouchableOpacity>
  );
};

interface UserDetailsProps {
  step?: number;
}

const UserDetails = ({ step: initialStep = 1 }: UserDetailsProps) => {
  const [step, setStep] = useState(initialStep);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<string | null>(null);

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit logic
      console.log('Form submitted', { selectedGender, selectedEducation });
      router.push('/home');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity className="-ml-2 p-2">
          <ArrowLeft size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text className="ml-2 text-xl font-bold">Enter details</Text>
      </View>

      {/* Progress Bar */}
      <View className="mb-8 px-6">
        <View className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <View className="h-full bg-emerald-600" style={{ width: `${(step / 3) * 100}%` }} />
        </View>
      </View>

      <ScrollView className="flex-1 px-6">
        {step === 1 && (
          <View>
            <Text className="mb-6 text-2xl font-bold text-gray-900">Basic details</Text>
            <FormField label="Name" placeholder="Enter your name" />
            <FormField label="Age" placeholder="Enter your Age" />
            <FormField
              label="Date of Birth"
              placeholder="Enter your date of birth"
              icon={Calendar}
            />

            <Text className="mb-2 text-lg font-bold text-gray-900">Gender</Text>
            <View className="mb-4 flex-row">
              {['Male', 'Female'].map((g) => (
                <Chip
                  key={g}
                  label={g}
                  isSelected={selectedGender === g}
                  onPress={() => setSelectedGender(g)}
                />
              ))}
            </View>

            <Text className="mb-2 text-lg font-bold text-gray-900">Education</Text>
            <View className="flex-row flex-wrap">
              {['10th', 'Below 10th', '12th', 'ITI/Diploma', 'Graduate', 'Post Graduate'].map(
                (edu) => (
                  <Chip
                    key={edu}
                    label={edu}
                    isSelected={selectedEducation === edu}
                    onPress={() => setSelectedEducation(edu)}
                  />
                )
              )}
            </View>
          </View>
        )}

        {step === 2 && (
          <View>
            <Text className="mb-2 text-2xl font-bold text-gray-900">Job Role</Text>
            <Text className="mb-4 text-base font-bold text-gray-800">
              What kind of job are you looking for?
            </Text>

            <View className="mb-2 h-12 flex-row items-center rounded-lg border border-red-200 bg-red-50/30 px-4">
              <Search size={20} color="#9ca3af" />
              <TextInput placeholder="Search by job title/role" className="ml-2 flex-1" />
            </View>
            <Text className="mb-4 text-xs font-bold text-red-600">
              ● Select at least 1 preferred role.
            </Text>

            <View className="rounded-2xl border border-blue-100/50 bg-blue-50/50 p-4">
              <View className="mb-4 flex-row items-center">
                <Text className="text-sm font-bold text-blue-600">✨ AI suggested job roles</Text>
              </View>
              <View className="flex-row flex-wrap">
                {['Telesales', 'Field Sales', 'Delivery', 'Cook / Chef', 'Retail Sales'].map(
                  (role) => (
                    <TouchableOpacity
                      key={role}
                      className="mb-2 mr-2 flex-row items-center rounded-full border border-gray-200 bg-white px-3 py-2">
                      <Text className="mr-1 text-xs text-gray-700">{role}</Text>
                      <Plus size={14} color="#9ca3af" />
                    </TouchableOpacity>
                  )
                )}
              </View>
              <TouchableOpacity className="mt-2 flex-row items-center">
                <Text className="text-sm font-bold text-emerald-600">14 more roles</Text>
                <ChevronDown size={16} color="#059669" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

      <View className="border-t border-gray-100 px-6 py-6">
        <TouchableOpacity
          onPress={handleContinue}
          className="h-14 items-center justify-center rounded-xl bg-emerald-700">
          <Text className="text-lg font-bold text-white">{step === 3 ? 'Submit' : 'Continue'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserDetails;
