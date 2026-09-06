export interface AppItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  icon: string;
  screenshots?: string[];
  rating?: string;
  ratingCount?: number;
  ageRating?: string;
  version?: string;
  releaseDate?: string;
  price?: string;
  badge?: string;
  developer?: string;
  description?: string;
  appStoreUrl?: string;
  platforms?: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
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

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  image: string;
  inventory: number;
  isAvailable: boolean;
  deliveryTime: string;
}

export interface CartItem {
  id: string;
  product: ProductItem;
  quantity: number;
}

export type OrderStatus = 'PLACED' | 'CONFIRMED' | 'PACKED' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED';

export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  totalAmount: number;
  status: OrderStatus;
  items: OrderItem[];
  createdAt: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'user' | 'admin';
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
  badge?: string;
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

export interface SystemHealth {
  status: string;
  database: string;
  timestamp: string;
  version: string;
  productCount: number;
  orderCount: number;
  appCount: number;
}
