import { CartItem, ProductItem } from '../types/appStore';

const CART_KEY = '24s_store_cart_v1';

export const getCart = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
};

export const saveCart = (items: CartItem[]) => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('cart-updated'));
  } catch (err) {
    console.error("Failed to persist cart:", err);
  }
};

export const addToCart = (product: ProductItem, quantity: number = 1): CartItem[] => {
  const current = getCart();
  const existingIndex = current.findIndex(item => item.product.id === product.id);

  if (existingIndex > -1) {
    current[existingIndex].quantity += quantity;
  } else {
    current.push({
      id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      product,
      quantity
    });
  }

  saveCart(current);
  return current;
};

export const updateCartQuantity = (cartItemId: string, quantity: number): CartItem[] => {
  let current = getCart();
  if (quantity <= 0) {
    current = current.filter(item => item.id !== cartItemId);
  } else {
    const item = current.find(item => item.id === cartItemId);
    if (item) item.quantity = quantity;
  }
  saveCart(current);
  return current;
};

export const removeFromCart = (cartItemId: string): CartItem[] => {
  const current = getCart().filter(item => item.id !== cartItemId);
  saveCart(current);
  return current;
};

export const clearCart = () => {
  saveCart([]);
};

export const getCartSummary = () => {
  const items = getCart();
  const subtotal = items.reduce((acc, item) => {
    const p = item.product.discountPrice || item.product.price;
    return acc + (p * item.quantity);
  }, 0);
  const deliveryFee = subtotal > 0 ? 30 : 0;
  const total = subtotal + deliveryFee;
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return { items, subtotal, deliveryFee, total, itemCount };
};
