import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppItem } from '../types/appStore';
import { getAppById, getAllApps } from '../services/appService';
import { ExternalLink, Star, ShieldCheck, Share2, ArrowLeft } from 'lucide-react';
import { AppCard } from '../components/AppCard';

export const AppDetailPage: React.FC = () => {
  const { appId } = useParams<{ appId: string }>();
  const navigate = useNavigate();
  const [app, setApp] = useState<AppItem | null>(null);
  const [relatedApps, setRelatedApps] = useState<AppItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      if (appId) {
        const found = await getAppById(appId);
        setApp(found);

        const all = await getAllApps();
        setRelatedApps(all.filter(a => a.id !== appId).slice(0, 6));
      }
      setLoading(false);
    };
    load();
  }, [appId]);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-400">
        Loading App Store details...
      </div>
    );
  }

  if (!app) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">App Not Found</h2>
        <button onClick={() => navigate('/today')} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Back to Today
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      {/* Main Header Block */}
      <div className="flex flex-col sm:flex-row items-start gap-6 pb-6 border-b border-gray-200 dark:border-zinc-800">
        <img
          src={app.icon}
          alt={app.name}
          className="w-32 h-32 rounded-3xl object-cover shadow-lg border border-gray-200 dark:border-zinc-800 shrink-0"
        />

        <div className="flex-1 space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {app.name}
          </h1>
          <p className="text-sm font-medium text-gray-500 dark:text-zinc-400">
            {app.subtitle}
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
            {app.developer || "Developer"}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            {/* Download Button */}
            <button 
              onClick={() => alert(`Installing ${app.name}...`)}
              className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold shadow-md transition-all"
            >
              {app.price || 'GET'}
            </button>

            {/* Interactive Launch Button */}
            <button
              onClick={() => {
                if (app.name.toLowerCase().includes('twenty four seven') || app.id.includes('24s')) {
                  navigate('/twenty-four-seven');
                } else {
                  alert(`Launching ${app.name} interactive session...`);
                }
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-zinc-200 text-sm font-bold transition-all border border-gray-200 dark:border-zinc-700"
            >
              <span>Launch App</span>
              <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Metadata Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 text-center">
        <div>
          <div className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase">RATING</div>
          <div className="flex items-center justify-center gap-1 mt-1 text-sm font-bold text-gray-900 dark:text-white">
            <span>{app.rating || "4.8"}</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase">AGE</div>
          <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">{app.ageRating || "4+"}</div>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase">CATEGORY</div>
          <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">{app.category}</div>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase">DEVELOPER</div>
          <div className="mt-1 text-xs font-bold text-gray-900 dark:text-white truncate">{app.developer}</div>
        </div>
      </div>

      {/* Screenshots Section */}
      {app.screenshots && app.screenshots.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Preview</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {app.screenshots.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Screenshot ${idx + 1}`}
                className="w-60 h-96 object-cover rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-md shrink-0"
              />
            ))}
          </div>
        </div>
      )}

      {/* Description Section */}
      <div className="space-y-3 border-t border-gray-200 dark:border-zinc-800 pt-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Description</h3>
        <p className="text-sm text-gray-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line font-normal">
          {app.description}
        </p>
      </div>

      {/* Version Notes */}
      <div className="space-y-2 border-t border-gray-200 dark:border-zinc-800 pt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">What’s New</h3>
          <span className="text-xs text-gray-400">Version {app.version || "1.0.0"}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-zinc-400">
          General performance improvements, bug fixes, and enhanced user experience for iOS.
        </p>
      </div>

      {/* Related Apps */}
      {relatedApps.length > 0 && (
        <div className="space-y-4 border-t border-gray-200 dark:border-zinc-800 pt-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedApps.map((rel) => (
              <div key={rel.id} onClick={() => navigate(`/app/${rel.id}`)}>
                <AppCard app={rel} layout="compact" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
