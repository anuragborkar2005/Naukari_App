import { View, Text, TextInput } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { useState } from 'react';

export default function SearchScreen() {
  const [focused, setFocused] = useState(false);
  return (
    <View className="flex-1 items-center px-6 py-8">
      <View className="w-full flex-row items-center rounded-md border px-2 ">
        <TextInput
          placeholder="Search..."
          className=" text-md flex-1 p-3  placeholder:text-black focus:outline-none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {focused ? (
          <X color="black" className="size-6" />
        ) : (
          <Search color="black" className="size-6" />
        )}
      </View>
      <View className="mt-5 w-full">
        <Text className="text-lg font-medium">Recent Search</Text>
      </View>
    </View>
  );
}
