import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { ChevronLeft, Bell } from 'lucide-react-native';

const NotificationCard = ({
  title,
  description,
  time,
  type,
  onAction,
}: {
  title: string;
  description: string;
  time: string;
  type: string;
  onAction: () => void;
}) => (
  <View className="mx-5 mb-4 rounded-2xl border border-gray-50  p-4 shadow-sm">
    <View className="flex-row">
      <View className="h-12 w-12 rounded-full bg-orange-200" />
      <View className="ml-4 flex-1">
        <View className="flex-row items-start justify-between">
          <Text className="text-[15px] font-bold text-gray-900">{title}</Text>
          {type === 'sent' && (
            <TouchableOpacity>
              <Text className="text-xs font-medium text-red-500">Delete</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text className="mt-1 text-xs leading-5 text-gray-700">{description}</Text>

        <View className="mt-3 flex-row items-center justify-between">
          {type !== 'sent' ? (
            <TouchableOpacity
              className="rounded-lg border border-gray-200 px-4 py-2"
              onPress={onAction}>
              <Text className="text-[10px] font-bold text-gray-600">
                {type === 'new_jobs' ? 'See new job' : 'Application details'}
              </Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
          <Text className="text-[10px] text-gray-500">{time}</Text>
        </View>
      </View>
    </View>
  </View>
);

const EmptyState = () => (
  <View className="flex-1 items-center justify-center px-10">
    <View className="relative mb-8">
      {/* Decorative dots and shapes mimicking the image */}
      <View className="absolute -left-4 -top-4 h-2 w-2 rounded-full bg-green-200" />
      <View className="absolute -right-6 top-10 h-3 w-3 rounded-full bg-yellow-500" />
      <View className="absolute -bottom-2 left-10 h-2 w-2 rounded-full bg-blue-400" />

      <View className="h-48 w-48 items-center justify-center rounded-full bg-orange-50/50">
        <View className="rounded-full bg-blue-500 p-6 shadow-lg">
          <Bell size={60} color="white" fill="white" />
        </View>
      </View>
    </View>

    <Text className="mb-2 text-xl font-bold text-gray-900">No Notifications</Text>
    <Text className="text-center leading-6 text-gray-400">
      You have no notifications at this time{'\n'}Thank You
    </Text>
  </View>
);

export default function NotificationsScreen() {
  // Toggle this to see the Empty vs List state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Application Sent',
      description: 'Applications for Telegram companies have entered for company review',
      time: '25 minutes ago',
      type: 'sent',
    },
    {
      id: 2,
      title: 'Your job notification',
      description: 'Nabila, there are 8 new jobs for UI/UX Designer in California, USA',
      time: '2 Hour',
      type: 'new_jobs',
    },
    {
      id: 3,
      title: 'Your job notification',
      description: 'Applications for Skype have entered for company review',
      time: '1 Day',
      type: 'details',
    },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity className="-ml-2 p-2">
          <ChevronLeft size={28} color="#1f2937" />
        </TouchableOpacity>
        <View className="mr-6 flex-1 items-center">
          <Text className="text-lg font-bold text-gray-800">Notifications</Text>
        </View>
      </View>

      {notifications.length > 0 ? (
        <ScrollView className="flex-1 pt-4" showsVerticalScrollIndicator={false}>
          {notifications.map((item) => (
            <NotificationCard
              key={item.id}
              title={item.title}
              description={item.description}
              time={item.time}
              type={item.type}
              onAction={() => {}}
            />
          ))}
        </ScrollView>
      ) : (
        <EmptyState />
      )}
    </SafeAreaView>
  );
}
