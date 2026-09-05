import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { PRODUCTS } from "../data/products";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState(() => {
    // Initial sample cart with 1 hotdog and 1 coffee for instant visual feedback!
    return [
      {
        cartId: "p1-default",
        ...PRODUCTS[0],
        quantity: 1,
        selectedOptions: {
          sauces: ["Spicy Mustard", "Classic Ketchup"],
          addons: ["Extra Melted Cheddar (+₹29)"]
        },
        unitPrice: 198 // 169 + 29
      },
      {
        cartId: "p2-default",
        ...PRODUCTS[1],
        quantity: 1,
        selectedOptions: {
          temperature: "Iced (Standard)",
          sweetness: "Regular Sweet",
          addons: ["Whipped Cream Swirl (+₹25)"]
        },
        unitPrice: 164 // 139 + 25
      }
    ];
  });

  // Location state
  const [location, setLocation] = useState({
    name: "Connaught Place, New Delhi",
    address: "Flat 402, Block H, Inner Circle, Connaught Place",
    eta: "12 MINS",
    store: "24Seven Flagship CP"
  });

  // 24Seven Club Loyalty Stamps state
  const [stamps, setStamps] = useState(7); // 7 out of 10 stamps collected
  const [userPoints, setUserPoints] = useState(480);
  const [membershipTier, setMembershipTier] = useState("24Seven Gold VIP");

  // Promo code
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isStampModalOpen, setIsStampModalOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [customizeItem, setCustomizeItem] = useState(null);
  const [activeOrder, setActiveOrder] = useState(null);

  // Filters & Search
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Favorites
  const [favorites, setFavorites] = useState(["p1", "p2"]);

  // Mobile Frame Toggle vs Full Web View
  const [phoneFrameMode, setPhoneFrameMode] = useState(false);

  // Toast System
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Add to cart helper
  const addToCart = (product, customOptions = null, unitPrice = null) => {
    const finalPrice = unitPrice || product.price;
    const cartId = customOptions ? `${product.id}-${Date.now()}` : `${product.id}-standard`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartId === cartId);
      if (existingIndex > -1 && !customOptions) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [
        ...prev,
        {
          cartId,
          ...product,
          quantity: 1,
          selectedOptions: customOptions,
          unitPrice: finalPrice
        }
      ];
    });

    showToast(`Added ${product.name} to your cart! 🛒`);
  };

  const updateQuantity = (cartId, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => setCart([]);

  // Cart calculations
  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  
  let promoDiscount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountType === "flat") {
      promoDiscount = appliedPromo.discountValue;
    } else if (appliedPromo.discountType === "percent") {
      promoDiscount = Math.min((subtotal * appliedPromo.discountValue) / 100, appliedPromo.maxDiscount || 100);
    } else if (appliedPromo.discountType === "free_delivery") {
      promoDiscount = 35; // delivery fee waived
    }
  }

  const deliveryFee = subtotal > 199 || appliedPromo?.discountType === "free_delivery" ? 0 : 35;
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = Math.max(0, subtotal - promoDiscount + deliveryFee + taxes);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Trigger celebration confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Toggle Favorite
  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Place Order simulator
  const placeOrder = (paymentDetails) => {
    const newOrder = {
      orderId: `24S-${Math.floor(100000 + Math.random() * 900000)}`,
      items: [...cart],
      amount: grandTotal,
      address: location.address,
      paymentMethod: paymentDetails.method,
      placedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      etaMinutes: 14,
      otp: Math.floor(1000 + Math.random() * 9000),
      rider: {
        name: "Vikram Kumar",
        phone: "+91 98765 43210",
        rating: 4.9,
        deliveriesCount: 1420,
        vehicle: "TVS iQube Electric Scooter (DL 01 EV 2470)"
      }
    };

    setActiveOrder(newOrder);
    setCart([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);

    // Increment stamps!
    setStamps((prev) => {
      const updated = prev + 1;
      if (updated >= 10) {
        showToast("🎉 Stamp Card Full! You unlocked a FREE Hot Dog!");
        return 10;
      }
      return updated;
    });
    setUserPoints((prev) => prev + Math.round(grandTotal / 10));

    triggerConfetti();
    showToast("🔥 Order Placed! Live 24Seven Rider tracking started.");
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        promoDiscount,
        deliveryFee,
        taxes,
        grandTotal,
        appliedPromo,
        setAppliedPromo,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        location,
        setLocation,
        stamps,
        setStamps,
        userPoints,
        membershipTier,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isStampModalOpen,
        setIsStampModalOpen,
        isStoreLocatorOpen,
        setIsStoreLocatorOpen,
        isSupportOpen,
        setIsSupportOpen,
        customizeItem,
        setCustomizeItem,
        activeOrder,
        setActiveOrder,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        favorites,
        toggleFavorite,
        phoneFrameMode,
        setPhoneFrameMode,
        placeOrder,
        triggerConfetti,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
