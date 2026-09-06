import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCartSummary, updateCartQuantity, removeFromCart, clearCart } from '../services/cartService';
import { Trash2, ArrowRight, ShoppingBag, ShoppingCart } from 'lucide-react';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const [summary, setSummary] = useState(getCartSummary());

  const refreshCart = () => {
    setSummary(getCartSummary());
  };

  useEffect(() => {
    refreshCart();
    window.addEventListener('cart-updated', refreshCart);
    return () => window.removeEventListener('cart-updated', refreshCart);
  }, []);

  if (summary.items.length === 0) {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-4">
        <ShoppingCart className="w-16 h-16 text-gray-300 dark:text-zinc-700 mx-auto" />
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Your Cart is Empty</h2>
        <p className="text-sm text-gray-500">Explore 24S Express store for cold coffee, snacks, and daily essentials.</p>
        <button
          onClick={() => navigate('/twenty-four-seven')}
          className="px-6 py-3 rounded-full bg-amber-500 text-white font-bold text-sm shadow-md"
        >
          Browse 24S Store
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 pb-4">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">Your 24S Cart</h1>
        <button onClick={clearCart} className="text-xs text-red-500 font-semibold hover:underline">Clear Cart</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {summary.items.map((item) => {
            const price = item.product.discountPrice || item.product.price;
            return (
              <div key={item.id} className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">{item.product.name}</h4>
                    <p className="text-xs text-gray-500">₹{price} each</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 dark:border-zinc-800 rounded-full px-2 py-0.5">
                    <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="px-2 font-bold text-sm">-</button>
                    <span className="px-2 font-bold text-xs">{item.quantity}</span>
                    <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="px-2 font-bold text-sm">+</button>
                  </div>

                  <div className="text-right min-w-[60px]">
                    <div className="text-sm font-extrabold text-gray-900 dark:text-white">₹{price * item.quantity}</div>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Box */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-xl space-y-4 h-fit">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Order Summary</h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-zinc-400">
            <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold text-gray-900 dark:text-white">₹{summary.subtotal}</span></div>
            <div className="flex justify-between"><span>Express Delivery Fee</span><span className="font-semibold text-gray-900 dark:text-white">₹{summary.deliveryFee}</span></div>
            <div className="border-t border-gray-100 dark:border-zinc-800 pt-2 flex justify-between text-base font-extrabold text-gray-900 dark:text-white">
              <span>Total</span><span>₹{summary.total}</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
