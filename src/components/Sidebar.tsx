import React from 'react';
import { LucideIcon, X } from 'lucide-react';

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, activeTab, setActiveTab, isOpen, toggleSidebar }) => {
  return (
    <aside className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20 h-full overflow-y-auto`}>
      <nav>
        <div className="flex justify-between items-center mb-6 px-4 md:hidden">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <button onClick={toggleSidebar} className="text-white">
            <X size={24} />
          </button>
        </div>
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
              activeTab === item.id ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
            onClick={() => {
              setActiveTab(item.id);
              if (window.innerWidth < 768) {
                toggleSidebar();
              }
            }}
          >
            <item.icon className="h-6 w-6" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;