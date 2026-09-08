import { AppItem } from '../types/appStore';
import { TOP_APPS_WEEK, HOT_APPS_WEEK } from '../data/appStoreData';

const ALL_LOCAL_APPS: AppItem[] = [...TOP_APPS_WEEK, ...HOT_APPS_WEEK].map((app) => ({
  ...app,
  description: app.subtitle + ". Built with cutting-edge mobile performance and intuitive touch UX.",
  developer: "Official App Store Developer",
  ratingCount: 45200,
  ageRating: "4+",
  version: "3.12.0",
  releaseDate: "2026-01-15",
  appStoreUrl: `/app/${app.id}`,
  screenshots: [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
  ]
}));

export const getAllApps = async (): Promise<AppItem[]> => {
  return ALL_LOCAL_APPS;
};

export const getAppById = async (id: string): Promise<AppItem | null> => {
  const found = ALL_LOCAL_APPS.find(a => a.id === id);
  if (found) return found;

  // Try live iTunes Search / Lookup API if ID is an Apple ID or search term
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&country=in`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const item = data.results[0];
      return {
        id: item.trackId.toString(),
        name: item.trackName,
        subtitle: item.primaryGenreName,
        category: item.primaryGenreName,
        icon: item.artworkUrl512 || item.artworkUrl100,
        screenshots: item.screenshotUrls || [],
        rating: item.averageUserRating ? item.averageUserRating.toFixed(1) : "4.8",
        ratingCount: item.userRatingCount || 1200,
        ageRating: item.contentAdvisoryRating || "4+",
        version: item.version || "1.0",
        releaseDate: item.releaseDate ? item.releaseDate.split('T')[0] : "2026-01-01",
        price: item.formattedPrice || "GET",
        developer: item.artistName,
        description: item.description,
        appStoreUrl: `/app/${item.trackId}`
      };
    }
  } catch (err) {
    console.warn("iTunes lookup fallback failed, returning default app structure:", err);
  }

  return {
    id,
    name: id.toUpperCase(),
    subtitle: "Featured App Store Title",
    category: "General",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=180&q=80",
    rating: "4.9",
    ratingCount: 89000,
    ageRating: "4+",
    version: "2.5.0",
    releaseDate: "2026-02-01",
    price: "GET",
    developer: "Apple Developer Network",
    description: "Experience world-class apps and games on your Apple device.",
    appStoreUrl: `/app/${id}`
  };
};

export const searchApps = async (query: string): Promise<AppItem[]> => {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return ALL_LOCAL_APPS.filter(app => 
    app.name.toLowerCase().includes(q) || 
    app.subtitle.toLowerCase().includes(q) || 
    app.category.toLowerCase().includes(q)
  );
};
