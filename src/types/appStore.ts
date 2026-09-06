export interface AppItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  icon: string;
  rating?: string;
  price?: string;
  badge?: string;
  developer?: string;
  description?: string;
}

export interface EditorialItem {
  id: string;
  kind: string;
  eyebrow?: string;
  title: string;
  shortTitle?: string;
  description?: string;
  heroImage?: string;
  backgroundColor?: string;
  textColor?: string;
  app?: AppItem;
  appsList?: AppItem[];
  badge?: string;
}

export interface Shelf {
  id: string;
  title?: string;
  subtitle?: string;
  items: EditorialItem[];
}

export interface NavItem {
  id: string;
  title: string;
  path: string;
  iconName: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  path: string;
}

export interface LanguageItem {
  code: string;
  name: string;
}
