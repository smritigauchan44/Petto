import React from 'react';
import { HomeIcon, UserIcon, HeartPulseIcon, StethoscopeIcon, PillIcon, UsersIcon } from 'lucide-react';
interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}
const Navigation = ({
  currentPage,
  setCurrentPage
}: NavigationProps) => {
  const navItems = [{
    id: 'dashboard',
    icon: HomeIcon,
    label: 'Home'
  }, {
    id: 'profile',
    icon: UserIcon,
    label: 'Pets'
  }, {
    id: 'health',
    icon: HeartPulseIcon,
    label: 'Health'
  }, {
    id: 'vet',
    icon: StethoscopeIcon,
    label: 'Vets'
  }, {
    id: 'medicine',
    icon: PillIcon,
    label: 'Meds'
  }, {
    id: 'community',
    icon: UsersIcon,
    label: 'Social'
  }];
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-primary-200/20 flex justify-around items-center h-16 px-2">
      {navItems.map(item => {
      const Icon = item.icon;
      const isActive = currentPage === item.id;
      return <button key={item.id} onClick={() => setCurrentPage(item.id)} className={`flex flex-col items-center justify-center w-1/6 py-1 ${isActive ? 'text-primary-200' : 'text-gray-400'}`}>
            <Icon size={20} className={isActive ? 'text-primary-200' : 'text-gray-400'} />
            <span className="text-xs mt-1">{item.label}</span>
          </button>;
    })}
    </div>;
};
export default Navigation;