export const HERO_BANNERS = [
  {
    id: "b1",
    title: "MIDNIGHT CRAVINGS DELIVERED 24x7",
    subtitle: "Hot Dogs, Fresh Pizza & Hazelnut Iced Coffee at your door in 15 mins",
    cta: "Order Hot Food Now",
    tag: "⚡ 15 MIN DELIVERY",
    bgGradient: "linear-gradient(135deg, #FF2E55 0%, #0D0F12 100%)",
    categoryFilter: "hot_food"
  },
  {
    id: "b2",
    title: "24SEVEN SIGNATURE HOT DOG FESTIVAL",
    subtitle: "Buy 1 Classic Loaded Cheese Hot Dog & Get 1 Cold Coffee @ 50% OFF!",
    cta: "Claim Hot Dog Deal",
    tag: "🔥 BOGO OFFER",
    bgGradient: "linear-gradient(135deg, #FFC700 0%, #161920 100%)",
    categoryFilter: "hot_food"
  },
  {
    id: "b3",
    title: "ICED SLUSHIES & FRAPPES FROM ₹99",
    subtitle: "Beat the heat with wild berry slushies & double shot espresso frappes",
    cta: "Explore Coolers",
    tag: "❄️ CHILLED 24x7",
    bgGradient: "linear-gradient(135deg, #00E676 0%, #0D0F12 100%)",
    categoryFilter: "coffee_slush"
  }
];

export const PROMO_COUPONS = [
  {
    code: "MIDNIGHT24",
    discountType: "flat",
    discountValue: 50,
    minOrder: 199,
    description: "₹50 OFF on orders above ₹199"
  },
  {
    code: "HOTDOG50",
    discountType: "percent",
    discountValue: 50,
    maxDiscount: 100,
    minOrder: 150,
    description: "50% OFF on all beverages with any hot food item"
  },
  {
    code: "FRESH24",
    discountType: "free_delivery",
    discountValue: 35,
    minOrder: 149,
    description: "FREE Express 15-min delivery on your order"
  }
];
