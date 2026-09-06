import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { TOP_APPS_WEEK, HOT_APPS_WEEK, DISCOVER_CARDS } from '../data/appStoreData';
import { AppCard } from './AppCard';

interface SearchBarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');

  const allApps = [...TOP_APPS_WEEK, ...HOT_APPS_WEEK];
  const uniqueAppsMap = new Map();
  allApps.forEach(app => uniqueAppsMap.set(app.name, app));
  const uniqueApps = Array.from(uniqueAppsMap.values());

  const filteredApps = query.trim() === '' 
    ? [] 
    : uniqueApps.filter(app => 
        app.name.toLowerCase().includes(query.toLowerCase()) ||
        app.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        app.category.toLowerCase().includes(query.toLowerCase())
      );

  const categories = ['Games', 'Photo & Video', 'Productivity', 'Entertainment', 'Education', 'Utilities', 'Lifestyle'];

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      {/* Search Input Box */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Apps, Games, Stories and More..."
          className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 text-base font-medium transition-all"
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 text-gray-400 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Suggested Category Chips */}
      {query.trim() === '' && (
        <div className="mt-6 space-y-4">
          <h4 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
            Trending Searches
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(cat)}
                className="px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-zinc-900 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-700 dark:text-zinc-300 text-xs font-semibold transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
              Popular Apps
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {uniqueApps.slice(0, 6).map((app) => (
                <AppCard key={app.id} app={app} layout="compact" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Results Grid */}
      {query.trim() !== '' && (
        <div className="mt-6 space-y-4">
          <div className="text-sm font-semibold text-gray-500 dark:text-zinc-400">
            {filteredApps.length} results found for "{query}"
          </div>

          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} layout="compact" />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-gray-400">
              No results match your search query. Try searching for "YouTube", "ChatGPT", "Games", or "Photo".
            </div>
          )}
        </div>
      )}
    </div>
  );
};
