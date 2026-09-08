import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppItem } from '../types/appStore';
import { Download, Check } from 'lucide-react';

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
  const navigate = useNavigate();
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'open'>('idle');

  const handleCardClick = () => {
    navigate(`/app/${app.id}`);
  };

  const handleGet = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onGetClick) {
      onGetClick(app);
      return;
    }

    if (downloadState === 'open') {
      if (app.name.toLowerCase().includes('twenty four seven') || app.id.includes('24s')) {
        navigate('/twenty-four-seven');
      } else {
        navigate(`/app/${app.id}`);
      }
      return;
    }

    if (downloadState === 'idle') {
      setDownloadState('downloading');
      setTimeout(() => {
        setDownloadState('open');
      }, 1200);
    }
  };

  const renderButtonContent = () => {
    if (downloadState === 'downloading') {
      return (
        <span className="flex items-center gap-1.5 animate-pulse">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
          <span>...</span>
        </span>
      );
    }

    if (downloadState === 'open') {
      return 'OPEN';
    }

    return app.price || 'GET';
  };

  if (layout === 'overlay') {
    return (
      <div 
        onClick={handleCardClick}
        className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/75 dark:bg-zinc-900/80 backdrop-blur-md border border-white/20 dark:border-zinc-800/50 shadow-lg cursor-pointer hover:bg-white/90 transition-colors"
      >
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
          className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
            downloadState === 'open' 
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white'
          }`}
        >
          {renderButtonContent()}
        </button>
      </div>
    );
  }

  return (
    <div 
      onClick={handleCardClick}
      className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-gray-100/70 dark:hover:bg-zinc-900/50 transition-colors group cursor-pointer"
    >
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
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            downloadState === 'open'
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-gray-100 dark:bg-zinc-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-blue-600 dark:text-blue-400'
          }`}
        >
          {renderButtonContent()}
        </button>
        <span className="text-[9px] text-gray-400 dark:text-zinc-500">
          In-App Purchases
        </span>
      </div>
    </div>
  );
};
