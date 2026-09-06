import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PLATFORMS } from '../data/appStoreData';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showPlatforms?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  title = "Today", 
  subtitle,
  showPlatforms = true 
}) => {
  const location = useLocation();
  const todayDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }).toUpperCase();

  return (
    <header className="mb-6 pt-4">
      {/* Date Eyebrow for Today */}
      {title === "Today" && (
        <div className="text-xs font-semibold text-gray-500 dark:text-zinc-400 tracking-wider uppercase mb-1">
          {todayDate}
        </div>
      )}

      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1 font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {/* Storefront Region Badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 border border-gray-200 dark:border-zinc-700/50">
            🇮🇳 India
          </span>
        </div>
      </div>

      {/* Platform Pills Horizontal Row */}
      {showPlatforms && (
        <div className="flex items-center gap-2 mt-4 overflow-x-auto no-scrollbar pb-1">
          {PLATFORMS.map((plat) => {
            const isActive = location.pathname === plat.path;
            return (
              <NavLink
                key={plat.id}
                to={plat.path}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-800'
                }`}
              >
                {plat.name}
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
};
