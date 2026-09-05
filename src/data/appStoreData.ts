import { AppItem, EditorialStory, CategoryItem } from "../types";

export const TWENTY_FOUR_SEVEN_APP: AppItem = {
  id: "1049305223",
  slug: "twenty-four-seven",
  url: "https://apps.apple.com/in/app/twenty-four-seven/id1049305223",
  name: "Twenty Four Seven",
  subtitle: "24/7 Convenience Store & Express Delivery",
  developer: "Godfrey Phillips India Retail Ltd",
  seller: "Modi Enterprises",
  icon: "/assets/hotdog.jpg",
  category: "Food & Drink",
  rating: 4.6,
  ratingCount: "2.4K Ratings",
  ageRating: "4+",
  chartRank: "#1 in Food & Drink",
  size: "48.2 MB",
  price: "Free",
  inAppPurchases: true,
  languages: "English, Hindi, Punjabi, Marathi, Bengali",
  compatibility: "Requires iOS 15.0 or later. Compatible with iPhone, iPad, and iPod touch.",
  copyright: "© 2026 Twenty Four Seven Retail Limited",
  version: "4.2.0",
  versionDate: "2 days ago",
  versionNotes: "• Expanded 15-minute express delivery to all Delhi-NCR zones!\n• New 24 Club Stamp loyalty rewards program.\n• Fresh Ready-to-Eat loaded hot dogs menu with sauce customizations.\n• Live rider map tracking and real-time OTP updates.",
  description: `Welcome to Twenty Four Seven - India's premier 24-hour round-the-clock convenience store chain!

Craving signature loaded cheese hot dogs, slow-brewed hazelnut cold coffee, fresh stone-baked pizza slices, hot spicy ramen, or late-night snacks at 2 AM? Twenty Four Seven delivers hot food, chilled beverages, imported chocolates, and daily essentials straight to your door in 15 minutes!

KEY FEATURES:
• 24x7 Round-the-Clock Delivery: We never close! Order fresh hot meals, beverages, and groceries 365 days a year.
• Signature Hot Food Counter: Customize hot dogs, pizzas, kathi rolls, and momos with your choice of melted cheeses, jalapeños, and sauces.
• 24 Club Stamp Card: Collect 1 stamp on every order above ₹149. Earn a FREE Hot Dog & Cold Coffee combo on your 10th stamp!
• Live GPS Order Tracking: Follow your rider on a live animated map with real-time ETA and delivery OTP.
• Instant Customer Chat Support: 24/7 live assistance for order tracking, discounts, and menu inquiries.`,
  screenshots: [
    { title: "24x7 Express 15-Min Delivery", url: "/assets/hotdog.jpg" },
    { title: "Hazelnut Iced Cold Coffee & Slushies", url: "/assets/coffee.jpg" },
    { title: "Fresh Pizza Slices & Loaded Nachos", url: "/assets/pizza.jpg" },
    { title: "24 Club Stamp Card & Reward Points", url: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80" },
    { title: "Live GPS Rider Order Tracking", url: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80" }
  ],
  reviews: [
    {
      id: "r1",
      author: "Rohan V. (CP New Delhi)",
      rating: 5,
      date: "Yesterday",
      title: "Best late night hot dog delivery in Delhi!",
      text: "Ordered a Classic Loaded Cheese Hot Dog and Hazelnut Cold Coffee at 3 AM. Delivered hot and fresh in just 11 minutes! The stamp card reward system is super fun."
    },
    {
      id: "r2",
      author: "Priya Sharma (Gurugram)",
      rating: 5,
      date: "3 days ago",
      title: "Super fast 15-min delivery & great quality",
      text: "Love the custom options for extra cheese and sauces. The live rider tracker map worked flawlessly. Highly recommended!"
    },
    {
      id: "r3",
      author: "Aman Gupta (Noida Sec 18)",
      rating: 4,
      date: "1 week ago",
      title: "Great 24/7 convenience store app",
      text: "Always available when all other apps are closed. Hot dogs and Buldak ramen are top notch."
    }
  ]
};

export const FEATURED_TODAY: EditorialStory[] = [
  {
    id: "story-ai",
    cardType: "HERO_AI",
    eyebrow: "TRY NOW",
    title: "3 AI apps we love",
    subtitle: "Unlock intelligence, creativity, and daily assistance",
    storyId: "id1819964646",
    apps: [
      { id: "ai-1", name: "ChatGPT", category: "Productivity", icon: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=200&q=80" },
      { id: "ai-2", name: "Claude AI", category: "Productivity", icon: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=200&q=80" },
      { id: "ai-3", name: "Midjourney AI", category: "Graphics & Design", icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80" }
    ]
  },
  {
    id: "story-pokemon",
    cardType: "HERO_POKEMON",
    eyebrow: "OUR FAVOURITES",
    title: "Discover Pokémon on the App Store",
    subtitle: "Catch, battle, and sleep alongside your favorite Pokémon",
    storyId: "id1827352615",
    apps: [
      { id: "pk-1", name: "Pokémon GO", category: "Augmented Reality", icon: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=200&q=80" },
      { id: "pk-2", name: "Pokémon Sleep", category: "Health & Fitness", icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&q=80" },
      { id: "pk-3", name: "Pokémon UNITE", category: "Strategy", icon: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80" },
      { id: "pk-4", name: "Pokémon TCG Live", category: "Card Game", icon: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=200&q=80" }
    ]
  },
  {
    id: "story-adobe",
    cardType: "HERO_ADOBE",
    eyebrow: "GET STARTED",
    title: "Edit with Adobe on the go",
    subtitle: "Adobe’s revamped apps – including Photoshop and Premiere – built for mobile creativity.",
    storyId: "id1827352615",
    apps: [
      { id: "ad-1", name: "Adobe Photoshop", category: "Photo & Video", icon: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=200&q=80" },
      { id: "ad-2", name: "Lightroom Photo Editor", category: "Photo & Video", icon: "https://images.unsplash.com/photo-1542744094-3a3121699497?auto=format&fit=crop&w=200&q=80" },
      { id: "ad-3", name: "Adobe Premiere AI", category: "Video Editing", icon: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=200&q=80" },
      { id: "ad-4", name: "Adobe Express", category: "Design", icon: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=200&q=80" }
    ]
  }
];

export const EVENTS_LIST: EditorialStory[] = [
  {
    id: "id6788810046",
    eyebrow: "LEVEL UP",
    title: "Go interstellar in Forge of Empires",
    subtitle: "Build a second city beyond the solar system.",
    url: "https://apps.apple.com/in/iphone/story/id6788810046",
    badge: "NOW AVAILABLE",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "id6796341930",
    eyebrow: "MAJOR UPDATE",
    title: "Venture into the Snowy Forest",
    subtitle: "New Operators join the fray in Arknights: Endfield.",
    url: "https://apps.apple.com/in/iphone/story/id6796341930",
    badge: "NEW SEASON",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "id24sevenevent",
    eyebrow: "24/7 MIDNIGHT",
    title: "24Seven Signature Hot Dog Festival",
    subtitle: "Buy 1 Classic Cheese Hot Dog, Get 1 Iced Cold Coffee @ 50% OFF!",
    url: "https://apps.apple.com/in/app/twenty-four-seven/id1049305223",
    badge: "HOT OFFER",
    image: "/assets/hotdog.jpg",
    is24Seven: true
  }
];

export const OTHER_APPS: AppItem[] = [
  TWENTY_FOUR_SEVEN_APP,
  {
    id: "a1",
    name: "Adobe Photoshop Photo Editor",
    subtitle: "Professional photo retouching & composite editing",
    description: "Transform your photos with Adobe Photoshop on iPad & iPhone.",
    category: "Photo & Video",
    icon: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=200&q=80",
    rating: 4.8,
    ratingCount: "120K Ratings",
    price: "Free"
  },
  {
    id: "a2",
    name: "Lightroom Photo & Video Editor",
    subtitle: "Camera, presets & color grading tool",
    description: "Capture & edit stunning photos with Lightroom presets.",
    category: "Photo & Video",
    icon: "https://images.unsplash.com/photo-1542744094-3a3121699497?auto=format&fit=crop&w=200&q=80",
    rating: 4.7,
    ratingCount: "85K Ratings",
    price: "Free"
  },
  {
    id: "a3",
    name: "Roblox",
    subtitle: "Explore infinite 3D virtual worlds with friends",
    description: "Join millions of experiences created by a global community.",
    category: "Games",
    icon: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80",
    rating: 4.6,
    ratingCount: "2.1M Ratings",
    price: "Free"
  },
  {
    id: "a4",
    name: "Forge of Empires: Build a City",
    subtitle: "Strategy civilization & empire building game",
    description: "Lead your empire through ages of human history.",
    category: "Strategy",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&q=80",
    rating: 4.7,
    ratingCount: "450K Ratings",
    price: "Free"
  }
];

export const CATEGORIES_LIST: CategoryItem[] = [
  { id: "categories", name: "Categories", icon: "LayoutGrid" },
  { id: "photo-video", name: "Photo & Video", icon: "Camera" },
  { id: "health-fitness", name: "Health & Fitness", icon: "Activity" },
  { id: "productivity", name: "Productivity", icon: "Send" },
  { id: "entertainment", name: "Entertainment", icon: "Tv" },
  { id: "food-drink", name: "Food & Drink", icon: "UtensilsCrossed", targetApp: "1049305223" },
  { id: "action", name: "Action", icon: "Zap" },
  { id: "adventure", name: "Adventure", icon: "Map" },
  { id: "puzzle", name: "Puzzle", icon: "Puzzle" },
  { id: "indie", name: "Indie", icon: "Gem" }
];
