import { Home, Search, FileText, User } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const navItems = [
  { id: 'home', icon: Home },
  { id: 'search', icon: Search },
  { id: 'applications', icon: FileText },
  { id: 'profile', icon: User },
];

export default function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <nav className="safe-area-bottom fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-6 py-3">
      <div className="mx-auto flex max-w-md items-center justify-around">
        {navItems.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`rounded-xl p-3 transition-colors ${
              activeTab === id ? 'text-emerald-600' : 'text-gray-400 hover:text-gray-600'
            }`}>
            <Icon
              size={24}
              fill={activeTab === id ? 'currentColor' : 'none'}
              strokeWidth={activeTab === id ? 0 : 2}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
