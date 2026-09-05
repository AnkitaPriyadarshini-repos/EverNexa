import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { PROMO_COUPONS } from "../data/promos";
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Tag, 
  Check, 
  ArrowRight, 
  Gift, 
  Sparkles,
  HeartHandshake
} from "lucide-react";

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    promoDiscount,
    deliveryFee,
    taxes,
    grandTotal,
    appliedPromo,
    setAppliedPromo,
    setIsCheckoutOpen,
    showToast
  } = useApp();

  const [promoInput, setPromoInput] = useState("");
  const [tip, setTip] = useState(20);

  if (!isCartOpen) return null;

  const handleApplyPromo = (codeToApply) => {
    const code = codeToApply || promoInput.toUpperCase().trim();
    const found = PROMO_COUPONS.find((c) => c.code === code);

    if (!found) {
      showToast("Invalid coupon code. Try MIDNIGHT24 or HOTDOG50!", "error");
      return;
    }

    if (subtotal < found.minOrder) {
      showToast(`Min order for ${found.code} is ₹${found.minOrder}`, "error");
      return;
    }

    setAppliedPromo(found);
    showToast(`Coupon ${found.code} applied! Saved ₹${found.discountValue}`);
    setPromoInput("");
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    showToast("Coupon removed.");
  };

  const freeGiftThreshold = 299;
  const freeGiftProgress = Math.min(100, (subtotal / freeGiftThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-fade-in">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col justify-between shadow-2xl animate-slide-up relative">
        
        {/* Cart Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-red-600/20 text-red-500 rounded-xl">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-lg text-white">Your Cart</h2>
              <p className="text-xs text-slate-400">
                {cart.length} item{cart.length === 1 ? "" : "s"} • 24/7 Express Delivery
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Gift Unlock Bar */}
        <div className="bg-slate-950 px-5 py-3 border-b border-slate-800">
          <div className="flex items-center justify-between text-xs mb-1.5 font-semibold">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-yellow-400" />
              {subtotal >= freeGiftThreshold ? (
                <span className="text-emerald-400">🎉 FREE Hazelnut Brownie Unlocked!</span>
              ) : (
                <span>Add ₹{freeGiftThreshold - subtotal} more for FREE Brownie</span>
              )}
            </span>
            <span className="text-yellow-400 font-extrabold">{Math.round(freeGiftProgress)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-500"
              style={{ width: `${freeGiftProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.cartId}
                className="bg-slate-950/70 border border-slate-800 rounded-2xl p-3.5 flex items-center justify-between gap-3 hover:border-slate-700 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl border border-slate-800"
                />

                <div className="flex-1">
                  <h4 className="font-heading font-bold text-white text-xs line-clamp-1">
                    {item.name}
                  </h4>

                  {item.selectedOptions && (
                    <div className="text-[10px] text-slate-400 mt-0.5 space-y-0.5">
                      {item.selectedOptions.temperature && (
                        <div>• {item.selectedOptions.temperature}</div>
                      )}
                      {item.selectedOptions.addons?.length > 0 && (
                        <div>• {item.selectedOptions.addons.join(", ")}</div>
                      )}
                    </div>
                  )}

                  <div className="font-extrabold text-yellow-400 text-xs mt-1">
                    ₹{item.unitPrice * item.quantity}
                    <span className="text-[10px] text-slate-500 font-normal ml-1">
                      (₹{item.unitPrice} each)
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700/80 rounded-xl px-2 py-1">
                  <button
                    onClick={() => updateQuantity(item.cartId, -1)}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold text-white min-w-[14px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.cartId, 1)}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.cartId)}
                  className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <p className="text-slate-400 font-medium text-sm">Your cart is empty</p>
              <p className="text-xs text-slate-500 mt-1">Add some hot food or drinks to order!</p>
            </div>
          )}

          {/* Promo Coupons section */}
          {cart.length > 0 && (
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold text-white">Apply Promo Coupon</span>
              </div>

              {appliedPromo ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="font-extrabold text-xs text-emerald-400">{appliedPromo.code}</span>
                      <p className="text-[10px] text-slate-300">{appliedPromo.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleRemovePromo}
                    className="text-xs text-red-400 font-bold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Enter Coupon (MIDNIGHT24)"
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white uppercase outline-none focus:border-yellow-400"
                  />
                  <button
                    onClick={() => handleApplyPromo()}
                    className="bg-slate-800 hover:bg-slate-700 text-yellow-400 border border-yellow-500/30 px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    Apply
                  </button>
                </div>
              )}

              {/* Quick Coupons Pills */}
              <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
                {PROMO_COUPONS.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => handleApplyPromo(c.code)}
                    className="text-[10px] bg-slate-800/80 text-yellow-400 border border-yellow-500/20 hover:border-yellow-400 px-2.5 py-1 rounded-lg font-mono whitespace-nowrap"
                  >
                    {c.code}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Delivery Rider Tip */}
          {cart.length > 0 && (
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-3.5">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-rose-400" />
                  <span>Tip your 24Seven Rider</span>
                </span>
                <span className="text-yellow-400 font-bold">₹{tip}</span>
              </div>
              <div className="flex gap-2">
                {[10, 20, 30, 50].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setTip(amount)}
                    className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      tip === amount
                        ? "bg-yellow-400 text-black border-yellow-400"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bill Summary & Sticky Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-800 bg-slate-950 space-y-3">
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Item Subtotal</span>
                <span className="text-white font-medium">₹{subtotal}</span>
              </div>
              {promoDiscount > 0 && (
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>Promo Discount</span>
                  <span>-₹{promoDiscount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery Fee (15 min Express)</span>
                <span className={deliveryFee === 0 ? "text-emerald-400 font-bold" : "text-white"}>
                  {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Rider Tip</span>
                <span className="text-white">₹{tip}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Packaging (5% GST)</span>
                <span className="text-white">₹{taxes}</span>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between text-sm text-white font-extrabold">
                <span>To Pay</span>
                <span className="font-heading text-lg text-yellow-400">₹{grandTotal + tip}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-extrabold text-sm py-3.5 rounded-2xl shadow-xl shadow-yellow-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
