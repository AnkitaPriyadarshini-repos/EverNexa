import React, { useRef } from 'react';
import { AppItem } from '../types/appStore';
import { AppCard } from './AppCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalShelfProps {
  title: string;
  subtitle?: string;
  apps: AppItem[];
}

export const HorizontalShelf: React.FC<HorizontalShelfProps> = ({ 
  title, 
  subtitle, 
  apps 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Group apps into columns of 3 stacked apps
  const columns: AppItem[][] = [];
  for (let i = 0; i < apps.length; i += 3) {
    columns.push(apps.slice(i, i + 3));
  }

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-10 group">
      {/* Header */}
      <div className="flex items-end justify-between mb-4 border-t border-gray-100 dark:border-zinc-900 pt-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 font-medium mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => handleScroll('left')}
            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-200 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-200 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3-Row Grid Column Horizontal Scroll */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {columns.map((col, cIdx) => (
          <div 
            key={cIdx} 
            className="w-[280px] sm:w-[320px] shrink-0 snap-start space-y-2 border-r border-gray-100 dark:border-zinc-900 pr-4 last:border-0"
          >
            {col.map((app) => (
              <AppCard key={app.id} app={app} layout="compact" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
