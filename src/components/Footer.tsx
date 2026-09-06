import React, { useState } from 'react';
import { INDIAN_LANGUAGES } from '../data/appStoreData';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showRegions, setShowRegions] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  const regionGroups = [
    {
      name: "Africa, Middle East, and India",
      countries: ["India", "Algeria", "Egypt", "Ghana", "Israel", "Kenya", "Nigeria", "Saudi Arabia", "South Africa", "United Arab Emirates"]
    },
    {
      name: "Asia Pacific",
      countries: ["Australia", "China", "Hong Kong", "Indonesia", "Japan", "Malaysia", "New Zealand", "Philippines", "Singapore", "South Korea", "Thailand", "Vietnam"]
    },
    {
      name: "Europe",
      countries: ["Austria", "Belgium", "Denmark", "Finland", "France", "Germany", "Ireland", "Italy", "Netherlands", "Norway", "Spain", "Sweden", "Switzerland", "United Kingdom"]
    },
    {
      name: "Latin America and the Caribbean",
      countries: ["Argentina", "Brazil", "Chile", "Colombia", "Mexico", "Peru"]
    },
    {
      name: "The United States and Canada",
      countries: ["United States", "Canada"]
    }
  ];

  return (
    <footer className="mt-20 pt-10 pb-24 lg:pb-12 border-t border-gray-200 dark:border-zinc-800 text-xs text-gray-500 dark:text-zinc-400 bg-gray-50/50 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Language & Storefront Selector Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200/80 dark:border-zinc-800/80">
          
          {/* Current Country Indicator */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-gray-900 dark:text-zinc-200">
              India
            </span>
          </div>

          {/* 11 Indian Regional Languages Row */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] font-semibold text-gray-400 dark:text-zinc-500">
              Languages:
            </span>
            <button
              onClick={() => setSelectedLang('English')}
              className={`px-2 py-0.5 rounded transition-colors ${selectedLang === 'English' ? 'bg-blue-600 text-white font-bold' : 'hover:text-gray-900 dark:hover:text-zinc-100'}`}
            >
              English
            </button>
            {INDIAN_LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.name)}
                className={`px-2 py-0.5 rounded font-sans transition-colors ${selectedLang === lang.name ? 'bg-blue-600 text-white font-bold' : 'hover:text-gray-900 dark:hover:text-zinc-100'}`}
              >
                {lang.name}
              </button>
            ))}
          </div>

          {/* Select Country / Region Button */}
          <button
            onClick={() => setShowRegions(!showRegions)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-200/80 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 font-medium hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors"
          >
            <span>Select a country or region</span>
            {showRegions ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Region Expander Drawer */}
        {showRegions && (
          <div className="py-6 border-b border-gray-200/80 dark:border-zinc-800/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {regionGroups.map((group, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-bold text-gray-900 dark:text-zinc-200 text-xs tracking-tight">
                  {group.name}
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px]">
                  {group.countries.map((country, cIdx) => (
                    <span key={cIdx} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legal & Copyright Footer Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-400 dark:text-zinc-500">
            Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a href="#" className="hover:underline">Terms of Use</a>
            <span className="text-gray-300 dark:text-zinc-700">|</span>
            <a href="#" className="hover:underline">Sales and Refunds</a>
            <span className="text-gray-300 dark:text-zinc-700">|</span>
            <a href="#" className="hover:underline">Legal</a>
            <span className="text-gray-300 dark:text-zinc-700">|</span>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
