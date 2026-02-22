import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { ArrowLeft, Bookmark, MapPin, DollarSign, Share2 } from 'lucide-react-native';

const SkillTag = ({ label }: { label: string }) => (
  <View className="mb-2 mr-2 rounded-lg border border-gray-300 px-3 py-2">
    <Text className="text-xs font-medium text-gray-500">{label}</Text>
  </View>
);

const InfoColumn = ({
  label,
  value,
  hasBorder,
}: {
  label: string;
  value: string;
  hasBorder?: boolean;
}) => (
  <View className={`flex-1 items-center ${hasBorder ? 'border-r border-gray-200' : ''}`}>
    <Text className="mb-1 text-[10px] text-gray-400">{label}</Text>
    <Text className="text-sm font-bold text-gray-800">{value}</Text>
  </View>
);

export default function JobDetails() {
  const skills = [
    'UI Design',
    'Teamwork',
    'UX Design',
    'Adaptability',
    'Critical Thnking',
    'Analytical Skills',
    'Creative Design',
    'Communication Skills',
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Custom Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <TouchableOpacity className="p-2">
          <ArrowLeft size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">Details</Text>
        <TouchableOpacity className="p-2">
          <Bookmark size={24} color="#1f2937" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-6">
        {/* Company Logo & Title */}
        <View className="mt-4 items-center">
          <View className="mb-4 rounded-2xl border border-gray-50 bg-white p-4 shadow-sm">
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
              }}
              className="h-8 w-16"
              resizeMode="contain"
            />
          </View>
          <Text className="text-base text-gray-500">Netflix</Text>
          <Text className="mt-1 text-2xl font-bold text-gray-900">Carpenter</Text>
        </View>

        {/* Location & Salary */}
        <View className="mt-6 space-y-3">
          <View className="flex-row items-center">
            <MapPin size={20} color="#4b5563" />
            <Text className="ml-3 text-sm text-gray-500">Jakarta, Indonesia - Onsite</Text>
          </View>
          <View className="flex-row items-center">
            <DollarSign size={20} color="#4b5563" />
            <Text className="ml-3 text-sm text-gray-500">12,000</Text>
          </View>
        </View>

        {/* Stats Row */}
        <View className="mt-8 flex-row justify-between py-4">
          <InfoColumn label="Experience" value="2 - 6 Years" hasBorder />
          <InfoColumn label="Job Type" value="Fulltime" hasBorder />
          <InfoColumn label="Level" value="Entry level" />
        </View>
        <Text className="mt-2 text-center text-[10px] text-gray-400">Updated 23 days ago</Text>

        {/* Recruiter Card */}
        <View className="mt-8 rounded-2xl bg-orange-50/40 p-4">
          <Text className="mb-3 text-xs font-medium text-gray-800">
            This job post is managed by
          </Text>
          <View className="flex-row items-center">
            <Image
              source={{ uri: 'https://i.pravatar.cc/100?img=26' }}
              className="h-10 w-10 rounded-full bg-blue-200"
            />
            <View className="ml-3">
              <Text className="text-sm font-bold text-gray-900">Nabila Nanda</Text>
              <Text className="text-[10px] text-gray-400">Online 2 days ago</Text>
            </View>
          </View>
        </View>

        {/* Must Have Skills */}
        <View className="mt-8">
          <Text className="mb-4 text-base font-bold text-gray-900">Must Have Skills</Text>
          <View className="flex-row flex-wrap">
            {skills.map((skill, index) => (
              <SkillTag key={index} label={skill} />
            ))}
          </View>
        </View>

        {/* Job Description */}
        <View className="mb-32 mt-8">
          <Text className="mb-4 text-base font-bold text-gray-900">Job Description</Text>
          <Text className="text-sm leading-6 text-gray-500">
            Netflix is seeking a talented UI Designer to join our design team. In this role, you
            will be responsible for crafting innovative and engaging user interfaces for our...
          </Text>
        </View>
      </ScrollView>

      {/* Footer Actions */}
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center space-x-4 border-t border-gray-100 bg-white px-6 py-4">
        <TouchableOpacity className="p-3">
          <Share2 size={24} color="#1f2937" />
        </TouchableOpacity>
        <TouchableOpacity className="h-14 flex-1 items-center justify-center rounded-xl bg-teal-700">
          <Text className="text-base font-bold text-white">Apply Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
