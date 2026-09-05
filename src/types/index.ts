export interface AppItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  icon: string;
  rating?: number;
  ratingCount?: string;
  ageRating?: string;
  developer?: string;
  seller?: string;
  chartRank?: string;
  size?: string;
  price?: string;
  inAppPurchases?: boolean;
  languages?: string;
  compatibility?: string;
  copyright?: string;
  version?: string;
  versionDate?: string;
  versionNotes?: string;
  screenshots?: { title: string; url: string }[];
  reviews?: AppReview[];
  slug?: string;
  url?: string;
  badge?: string;
  is24Seven?: boolean;
}

export interface AppReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  text: string;
}

export interface EditorialStory {
  id: string;
  cardType?: "HERO_AI" | "HERO_POKEMON" | "HERO_ADOBE" | "HERO_ROBLOX" | "EVENT" | "STANDARD";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  customArt?: React.ReactNode;
  apps?: Partial<AppItem>[];
  route?: string;
  storyId?: string;
  bodyText?: string;
  badge?: string;
  url?: string;
  is24Seven?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  targetApp?: string;
}
