import { router } from 'expo-router';
import {
  Bell,
  ChevronRight,
  FileTextIcon,
  Grid,
  IndianRupee,
  LucideIcon,
  MapPinCheckIcon,
  PhoneCall,
  Search,
  Share2,
} from 'lucide-react-native';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Assistant Supervisor',
    salary: '₹20000 - ₹25000+',
    company: 'TEAM FIRE EAGLE',
    location: 'Maharashtra',
    vacancies: '40 Vacancies',
    type: 'Work From Home',
  },
  {
    id: '2',
    title: 'Assistant Supervisor',
    salary: '₹20000 - ₹25000+',
    company: 'TEAM FIRE EAGLE',
    location: 'Maharashtra',
    vacancies: '40 Vacancies',
    type: 'Work From Home',
  },
];

const CategoryItem = ({
  icon: Icon,
  label,
  active,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) => (
  <View className="w-1/4 items-center py-2">
    <View
      className={`mb-1 h-12 w-12 items-center justify-center rounded-full ${active ? 'border border-blue-500 bg-blue-100' : 'bg-gray-100'}`}>
      <Icon size={24} color={active ? '#3b82f6' : '#6b7280'} />
    </View>
    <Text className={`text-[10px] ${active ? 'font-bold text-blue-600' : 'text-gray-500'}`}>
      {label}
    </Text>
    {active && <View className="absolute bottom-0 h-[3px] w-full bg-blue-600" />}
  </View>
);

const JobCard = ({
  item,
}: {
  item: {
    id: string;
    title: string;
    salary: string;
    company: string;
    location: string;
    type: string;
    vacancies: string;
  };
}) => (
  <View className="mx-4 mt-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
    <View className="mb-2 flex-row">
      <View className="h-12 w-12 rounded-md bg-zinc-800" />
      <View className="ml-3 flex-1">
        <Text className="text-base font-bold text-gray-900">{item.title}</Text>
        <Text className="text-sm text-gray-500">{item.salary}</Text>
      </View>
      <TouchableOpacity>
        <Share2 size={20} color="#9ca3af" />
      </TouchableOpacity>
    </View>

    <Text className="mb-1 text-sm text-gray-700">🏢 {item.company}</Text>
    <Text className="text-xs text-gray-500">📍 {item.location}</Text>

    <View className="mt-3 flex-row space-x-2">
      <View className="rounded-md bg-gray-100 px-3 py-1">
        <Text className="text-xs text-gray-600">{item.vacancies}</Text>
      </View>
      <View className="rounded-md bg-gray-100 px-3 py-1">
        <Text className="text-xs text-gray-600">{item.type}</Text>
      </View>
    </View>

    <View className="mt-4 flex-row space-x-2">
      <TouchableOpacity className="h-12 flex-1 flex-row items-center justify-center rounded-xl bg-amber-400">
        <PhoneCall size={18} color="black" />
        <Text className="ml-2 font-bold">Call HR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="h-12 w-12 items-center justify-center rounded-xl border border-gray-200"
        onPress={() => router.push('/details')}>
        <ChevronRight size={24} color="#6b7280" />
      </TouchableOpacity>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Header */}
      <View className="bg-white p-5">
        <View className="mb-5 flex-row items-center">
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            className="h-12 w-12 rounded-full bg-gray-200"
          />
          <View className="ml-3">
            <Text className="text-lg font-bold">Selmon Bhai</Text>
            <Text className="text-xs text-gray-500">Mechanic ▾</Text>
          </View>
          <TouchableOpacity className="ml-auto">
            <Bell size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>

        <View className="h-12 flex-row items-center rounded-xl border border-gray-200 bg-white px-4">
          <TextInput placeholder="Search Job" className="flex-1 text-base" />
          <Search size={20} color="#9ca3af" />
        </View>
      </View>

      {/* Categories */}
      <View className="flex-row border-b border-gray-100 bg-white">
        <CategoryItem icon={Grid} label="For you" active />
        <CategoryItem icon={IndianRupee} label="High Salary" />
        <CategoryItem icon={MapPinCheckIcon} label="Nearby" />
        <CategoryItem icon={FileTextIcon} label="New Jobs" />
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
