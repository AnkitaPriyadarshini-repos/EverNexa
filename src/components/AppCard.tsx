import React from 'react';
import { AppItem } from '../types/appStore';

interface AppCardProps {
  app: AppItem;
  layout?: 'compact' | 'overlay' | 'horizontal';
  showCategory?: boolean;
  onGetClick?: (app: AppItem) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ 
  app, 
  layout = 'compact',
  showCategory = true,
  onGetClick 
}) => {
  const handleGet = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onGetClick) onGetClick(app);
    else alert(`Downloading ${app.name}...`);
  };

  if (layout === 'overlay') {
    return (
      <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/75 dark:bg-zinc-900/80 backdrop-blur-md border border-white/20 dark:border-zinc-800/50 shadow-lg">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={app.icon}
            alt={app.name}
            className="w-11 h-11 rounded-xl object-cover shadow-sm shrink-0 border border-black/5 dark:border-white/10"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=180&q=80";
            }}
          />
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">
              {app.name}
            </h4>
            <p className="text-xs text-gray-600 dark:text-zinc-400 truncate">
              {app.subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={handleGet}
          className="shrink-0 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold transition-all shadow-sm"
        >
          {app.price || 'GET'}
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-gray-100/70 dark:hover:bg-zinc-900/50 transition-colors group cursor-pointer">
      <div className="flex items-center gap-3 min-w-0">
        <img
          src={app.icon}
          alt={app.name}
          className="w-14 h-14 rounded-2xl object-cover shadow-sm shrink-0 border border-gray-200/50 dark:border-zinc-800 group-hover:scale-[1.02] transition-transform"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=180&q=80";
          }}
        />
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {app.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-zinc-400 truncate mt-0.5">
            {app.subtitle}
          </p>
          {showCategory && app.category && (
            <span className="text-[10px] text-gray-400 dark:text-zinc-500 font-medium">
              {app.category}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 shrink-0">
        <button
          onClick={handleGet}
          className="px-4 py-1.5 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-blue-600 dark:text-blue-400 text-xs font-bold transition-all"
        >
          {app.price || 'GET'}
        </button>
        <span className="text-[9px] text-gray-400 dark:text-zinc-500">
          In-App Purchases
        </span>
      </div>
    </div>
  );
};
