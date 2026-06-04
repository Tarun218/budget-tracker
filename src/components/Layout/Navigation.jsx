import { motion } from 'framer-motion';
import { Home, Plus, List, Settings } from 'lucide-react';

export default function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'add', label: 'Add Transaction', icon: Plus },
    { id: 'transactions', label: 'All Transactions', icon: List },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-[0.02] backdrop-blur-sm border-t border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-1 px-6 py-4 transition-all duration-300 relative group ${
                  isActive
                    ? 'text-black'
                    : 'text-[#666666] hover:text-black'
                }`}
              >
                {/* Bookmark style top decoration */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute top-0 left-0 right-0 h-1 bg-black"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                  />
                )}

                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{tab.label}</span>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-[0.02] transition-opacity" />
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
