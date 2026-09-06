import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCartSummary } from '../services/cartService';
import { createOrder } from '../services/orderService';
import { ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const summary = getCartSummary();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  if (summary.items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert("Please fill in all delivery details");
      return;
    }

    setLoading(true);
    try {
      const newOrder = await createOrder(name, phone, address);
      navigate(`/orders/${newOrder.id}`);
    } catch (err: any) {
      alert(err.message || "Failed to place order");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-20">
      <h1 className="text-3xl font-black text-gray-900 dark:text-white">Checkout — 24S Express</h1>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-xl space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Delivery Address</h3>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Phone Number</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Delivery Address</label>
            <textarea
              required
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Flat no., building, street address, city, postal code"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm font-medium"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 space-y-2 text-sm text-gray-600 dark:text-zinc-400">
          <div className="flex justify-between"><span>Items Subtotal</span><span className="font-bold text-gray-900 dark:text-white">₹{summary.subtotal}</span></div>
          <div className="flex justify-between"><span>Express Delivery Fee</span><span className="font-bold text-gray-900 dark:text-white">₹{summary.deliveryFee}</span></div>
          <div className="flex justify-between text-base font-extrabold text-gray-900 dark:text-white pt-2 border-t border-gray-100 dark:border-zinc-800">
            <span>Total Payable</span><span>₹{summary.total}</span>
          </div>
        </div>

        <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/50 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Test Payment Mode: Click Place Order to create test order.</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-black text-base shadow-lg transition-all"
        >
          {loading ? 'Processing Order...' : `Pay ₹${summary.total} & Place Order`}
        </button>
      </form>
    </div>
  );
};
