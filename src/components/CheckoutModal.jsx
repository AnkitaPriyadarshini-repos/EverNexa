import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { X, MapPin, CreditCard, Smartphone, Banknote, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, grandTotal, location, placeOrder } = useApp();

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiOption, setUpiOption] = useState("gpay");
  const [instructions, setInstructions] = useState(["Don't ring bell (Midnight Delivery)"]);

  if (!isCheckoutOpen) return null;

  const toggleInstruction = (text) => {
    setInstructions((prev) =>
      prev.includes(text) ? prev.filter((i) => i !== text) : [...prev, text]
    );
  };

  const handlePlaceOrder = () => {
    placeOrder({ method: paymentMethod, upi: upiOption, instructions });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div>
            <h2 className="font-heading font-extrabold text-xl text-white">Checkout & Payment</h2>
            <p className="text-xs text-slate-400">Guaranteed delivery in 12-15 minutes</p>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
          
          {/* Delivery Address Box */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-500" />
                Delivery Location
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                ⚡ 12 MINS AWAY
              </span>
            </div>
            <p className="font-bold text-white text-sm">{location.name}</p>
            <p className="text-xs text-slate-400 mt-0.5">{location.address}</p>
          </div>

          {/* Rider Delivery Instructions */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2.5">
              Rider Delivery Instructions
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Don't ring bell (Midnight Delivery)",
                "Leave at doorstep",
                "Leave with security guard",
                "Call upon arrival"
              ].map((text) => {
                const isSelected = instructions.includes(text);
                return (
                  <button
                    key={text}
                    onClick={() => toggleInstruction(text)}
                    className={`p-3 rounded-xl text-xs font-medium text-left border transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-slate-800 border-yellow-400 text-white"
                        : "bg-slate-950/60 border-slate-800 text-slate-400"
                    }`}
                  >
                    <span>{text}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-yellow-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2.5">
              Select Payment Method
            </h4>
            
            <div className="space-y-3">
              
              {/* UPI Option */}
              <div
                onClick={() => setPaymentMethod("upi")}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === "upi"
                    ? "bg-slate-800 border-yellow-400 text-white shadow-lg shadow-yellow-500/10"
                    : "bg-slate-950/60 border-slate-800 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-yellow-400" />
                    <div>
                      <span className="font-bold text-sm text-white">UPI Instant Payment</span>
                      <p className="text-[11px] text-slate-400">Google Pay, PhonePe, Paytm, BHIM</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                    className="accent-yellow-400 w-4 h-4"
                  />
                </div>

                {paymentMethod === "upi" && (
                  <div className="mt-4 pt-3 border-t border-slate-700/60 grid grid-cols-3 gap-2">
                    {["gpay", "phonepe", "paytm"].map((app) => (
                      <button
                        key={app}
                        onClick={(e) => {
                          e.stopPropagation();
                          setUpiOption(app);
                        }}
                        className={`py-2 text-xs font-bold rounded-xl border uppercase tracking-wider ${
                          upiOption === app
                            ? "bg-yellow-400 text-black border-yellow-400"
                            : "bg-slate-900 text-slate-300 border-slate-700"
                        }`}
                      >
                        {app}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Option */}
              <div
                onClick={() => setPaymentMethod("card")}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === "card"
                    ? "bg-slate-800 border-yellow-400 text-white"
                    : "bg-slate-950/60 border-slate-800 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="font-bold text-sm text-white">Credit / Debit Card</span>
                      <p className="text-[11px] text-slate-400">Visa, Mastercard, RuPay, Amex</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="accent-yellow-400 w-4 h-4"
                  />
                </div>
              </div>

              {/* Cash On Delivery */}
              <div
                onClick={() => setPaymentMethod("cod")}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === "cod"
                    ? "bg-slate-800 border-yellow-400 text-white"
                    : "bg-slate-950/60 border-slate-800 text-slate-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Banknote className="w-5 h-5 text-amber-400" />
                    <div>
                      <span className="font-bold text-sm text-white">Cash on Delivery</span>
                      <p className="text-[11px] text-slate-400">Pay cash or UPI to rider upon doorstep delivery</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-yellow-400 w-4 h-4"
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Encrypted & Safe 24Seven Instant Checkout</span>
          </div>

        </div>

        {/* Footer Place Order */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-slate-400 block font-medium">Grand Total</span>
            <span className="font-heading font-extrabold text-2xl text-yellow-400">₹{grandTotal + 20}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-sm py-3.5 px-6 rounded-2xl shadow-xl shadow-yellow-500/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Pay & Place Order • ₹{grandTotal + 20}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
