import { View, Text, Image, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="mt-10 items-center">
        <Text className="text-2xl font-bold">Profile</Text>
      </View>

      {/* Profile Image + Title */}
      <View className="mt-8 items-center">
        <Text className="text-xl font-semibold">Details</Text>
        <Image
          style={{ height: 140, width: 140 }}
          className="mt-5 rounded-full"
          source={require('assets/profile.png')}
        />
      </View>

      {/* Info Section with vertical dividers */}
      <View className="mt-8 w-full flex-row items-center px-4">
        {/* Left block */}
        <View className="flex-1 items-center">
          <Text className="text-lg font-medium">Age</Text>
          <Text className="text-base text-gray-600">25</Text>
        </View>

        {/* Divider */}
        <View className="mx-2 h-16 w-[1px] bg-slate-950" />

        {/* Middle block */}
        <View className="flex-1 items-center">
          <Text className="text-lg font-medium">Guest Name</Text>
          <Text className="text-base text-gray-600">John Doe</Text>
        </View>

        {/* Divider */}
        <View className="mx-2 h-16 w-[1px] bg-slate-950" />

        {/* Right block */}
        <View className="flex-1 items-center">
          <Text className="text-lg font-medium">Location</Text>
          <Text className="text-base text-gray-600">Mumbai</Text>
        </View>
      </View>

      {/* Additional Info Section */}
      <View className="mt-10 px-6">
        <Text className="mb-2 text-lg font-semibold">About</Text>
        <Text className="text-base leading-6 text-gray-700">
          This is a sample guest profile. You can add more details here such as bio, interests, or
          contact information.
        </Text>
      </View>
    </ScrollView>
  );
}
