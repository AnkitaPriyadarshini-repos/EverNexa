import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sparkles, Gamepad2, Layers, Joystick, Search } from 'lucide-react';

export const MobileNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { id: 'today', title: 'Today', path: '/today', icon: Sparkles },
    { id: 'games', title: 'Games', path: '/games', icon: Gamepad2 },
    { id: 'apps', title: 'Apps', path: '/apps', icon: Layers },
    { id: 'arcade', title: 'Arcade', path: '/arcade', icon: Joystick },
    { id: 'search', title: 'Search', path: '/search', icon: Search }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-t border-gray-200/80 dark:border-zinc-800/80 z-40 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path === '/today' && location.pathname === '/');
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center py-1 px-3 rounded-lg text-[10px] font-medium transition-all ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-500 dark:text-zinc-400 hover:text-gray-800 dark:hover:text-zinc-200'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
