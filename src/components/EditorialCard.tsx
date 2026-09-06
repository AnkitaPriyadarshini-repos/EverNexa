import React from 'react';
import { EditorialItem } from '../types/appStore';
import { AppCard } from './AppCard';

interface EditorialCardProps {
  item: EditorialItem;
  size?: 'hero' | 'medium' | 'tall';
}

export const EditorialCard: React.FC<EditorialCardProps> = ({ 
  item,
  size = 'hero'
}) => {
  const getContainerHeight = () => {
    switch (size) {
      case 'hero': return 'min-h-[460px] lg:min-h-[520px]';
      case 'medium': return 'min-h-[380px] lg:min-h-[420px]';
      case 'tall': return 'min-h-[420px] lg:min-h-[480px]';
      default: return 'min-h-[460px]';
    }
  };

  return (
    <div 
      className={`relative w-full rounded-3xl overflow-hidden shadow-xl group border border-black/5 dark:border-white/10 flex flex-col justify-between p-6 sm:p-8 transition-all hover:shadow-2xl ${getContainerHeight()}`}
      style={{
        backgroundColor: item.backgroundColor || '#1A1A1A',
        color: item.textColor || '#FFFFFF'
      }}
    >
      {/* Background Image with Dark Vignette */}
      {item.heroImage && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={item.heroImage}
            alt={item.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        </div>
      )}

      {/* Top Content Header */}
      <div className="relative z-10 space-y-1.5 max-w-xl">
        {item.eyebrow && (
          <span className="text-xs font-bold tracking-widest uppercase opacity-80 block">
            {item.eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
          {item.title}
        </h2>
        {item.description && (
          <p className="text-sm sm:text-base opacity-90 font-medium line-clamp-2 mt-2">
            {item.description}
          </p>
        )}
      </div>

      {/* Bottom Content: Single App or Apps List */}
      <div className="relative z-10 mt-6 pt-4">
        {item.app && (
          <div className="max-w-md">
            <AppCard app={item.app} layout="overlay" />
          </div>
        )}

        {item.appsList && item.appsList.length > 0 && (
          <div className="bg-white/80 dark:bg-zinc-900/85 backdrop-blur-md rounded-2xl p-3 border border-white/20 dark:border-zinc-800/50 space-y-1 max-w-md shadow-lg">
            <div className="text-[11px] font-bold text-gray-500 dark:text-zinc-400 px-2 uppercase tracking-wider mb-1">
              Included Apps ({item.appsList.length})
            </div>
            <div className="max-h-48 overflow-y-auto space-y-1 no-scrollbar">
              {item.appsList.map((app) => (
                <AppCard key={app.id} app={app} layout="compact" showCategory={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
