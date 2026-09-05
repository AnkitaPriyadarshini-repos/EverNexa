import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { OTHER_APPS, TWENTY_FOUR_SEVEN_APP } from "../data/appStoreData";
import { Search, Star, ArrowRight } from "lucide-react";

export const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const allApps = [TWENTY_FOUR_SEVEN_APP, ...OTHER_APPS];
  const filteredApps = allApps.filter(
    (app) =>
      app.name.toLowerCase().includes(query.toLowerCase()) ||
      app.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      app.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-8 animate-fade-in text-white font-sans">
      
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">SEARCH RESULTS</span>
        <h1 className="font-heading font-extrabold text-2xl lg:text-3xl mt-0.5">
          Results for "{query}"
        </h1>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-[#18181B] border border-slate-800 rounded-2xl p-4 flex items-center justify-between hover:border-slate-700 transition-all"
            >
              <div className="flex items-center gap-3">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-12 h-12 rounded-2xl object-cover border border-slate-700"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">{app.name}</h4>
                  <p className="text-xs text-slate-400">{app.category} • ⭐ {app.rating}</p>
                </div>
              </div>

              <Link
                to={app.id === "1049305223" ? "/twenty-four-seven" : "#"}
                className="bg-[#252528] hover:bg-[#323236] text-sky-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase"
              >
                {app.id === "1049305223" ? "VIEW" : "GET"}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-[#18181B] border border-slate-800 rounded-3xl p-12 text-center max-w-md mx-auto">
          <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <h3 className="font-bold text-white text-base">No results found</h3>
          <p className="text-xs text-slate-400 mt-1">
            Try searching for "Twenty Four Seven", "Hot Dogs", "Photoshop", or "Roblox".
          </p>
        </div>
      )}

    </div>
  );
};
