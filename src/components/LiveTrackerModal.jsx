import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { 
  X, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Bike, 
  Navigation,
  KeyRound
} from "lucide-react";

export const LiveTrackerModal = () => {
  const { activeOrder, setActiveOrder } = useApp();

  const [step, setStep] = useState(2); // 0: Placed, 1: Packing, 2: On The Way, 3: Delivered
  const [secondsRemaining, setSecondsRemaining] = useState(720); // 12 mins

  useEffect(() => {
    if (!activeOrder) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setStep(3); // Delivered
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeOrder]);

  if (!activeOrder) return null;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const stepsList = [
    "Order Received",
    "Packing Hot Food",
    "Rider On The Way",
    "Delivered to Doorstep"
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <div>
              <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">
                LIVE 24x7 TRACKING
              </span>
              <h3 className="font-heading font-extrabold text-white text-base">
                Order #{activeOrder.orderId}
              </h3>
            </div>
          </div>

          <button
            onClick={() => setActiveOrder(null)}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Area */}
        <div className="overflow-y-auto flex-1 p-5 space-y-5">
          
          {/* Animated Map Representation */}
          <div className="relative aspect-[16/9] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
            {/* Map Grid Pattern background */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(#FFC700 1px, transparent 1px)`,
                backgroundSize: "20px 20px"
              }}
            ></div>

            {/* Top ETA Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-black/80 backdrop-blur-md border border-yellow-400/40 text-yellow-400 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4 animate-spin text-yellow-400" />
                <span className="font-heading font-extrabold text-sm">
                  {step === 3 ? "DELIVERED!" : `Arriving in ${formattedTime}`}
                </span>
              </div>

              {/* Delivery OTP Badge */}
              <div className="bg-slate-900/90 border border-slate-700 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-mono font-bold">
                <KeyRound className="w-3.5 h-3.5 text-yellow-400" />
                <span>OTP: {activeOrder.otp}</span>
              </div>
            </div>

            {/* Rider Movement Visual representation */}
            <div className="relative z-10 my-auto flex items-center justify-between px-6">
              
              {/* Store Marker */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-yellow-400 text-black font-extrabold rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20 text-xs">
                  24S
                </div>
                <span className="text-[10px] text-slate-400 font-medium mt-1">24Seven Store</span>
              </div>

              {/* Moving Line & Rider Icon */}
              <div className="flex-1 mx-4 relative">
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-emerald-400 transition-all duration-1000"
                    style={{ width: `${step === 3 ? 100 : Math.min(90, ((720 - secondsRemaining) / 720) * 100)}%` }}
                  ></div>
                </div>

                {/* Moving Bike Icon */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 p-2 bg-emerald-500 text-black rounded-full shadow-lg shadow-emerald-500/40 transition-all duration-1000"
                  style={{ left: `${step === 3 ? 92 : Math.min(85, ((720 - secondsRemaining) / 720) * 100)}%` }}
                >
                  <Bike className="w-4 h-4" />
                </div>
              </div>

              {/* Destination Marker */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] text-slate-400 font-medium mt-1">Your Doorstep</span>
              </div>

            </div>

            <div className="relative z-10 text-center">
              <span className="text-[11px] text-emerald-400 font-bold bg-black/60 px-3 py-1 rounded-full border border-emerald-500/30">
                {step === 3 ? "✅ Delivered successfully!" : "📍 Rider is 1.4 km away on TVS iQube EV"}
              </span>
            </div>
          </div>

          {/* Order Progress Stepper */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
              Delivery Progress
            </h4>

            <div className="grid grid-cols-4 gap-1.5">
              {stepsList.map((stLabel, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className={`h-1.5 rounded-full mb-1.5 transition-all ${
                      idx <= step ? "bg-emerald-400 shadow-sm shadow-emerald-400/50" : "bg-slate-800"
                    }`}
                  />
                  <span
                    className={`text-[10px] block font-bold leading-tight ${
                      idx <= step ? "text-white" : "text-slate-600"
                    }`}
                  >
                    {stLabel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Rider Profile Card */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Rider"
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950"></span>
              </div>
              <div>
                <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                  <span>{activeOrder.rider.name}</span>
                  <span className="text-[10px] bg-yellow-400/20 text-yellow-400 px-1.5 py-0.2 rounded font-mono">
                    ⭐ {activeOrder.rider.rating}
                  </span>
                </h4>
                <p className="text-[10px] text-slate-400">{activeOrder.rider.vehicle}</p>
                <span className="text-[10px] text-emerald-400 font-medium">Vaccinated • Hygiene Verified</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${activeOrder.rider.phone}`}
                className="p-2.5 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 rounded-xl border border-emerald-500/30 transition-all"
                title="Call Rider"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                className="p-2.5 bg-slate-800 text-yellow-400 hover:bg-slate-700 rounded-xl border border-slate-700 transition-all"
                title="Message Rider"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Itemized Order Summary */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
              Items Ordered ({activeOrder.items.length})
            </h4>
            <div className="space-y-2 max-h-36 overflow-y-auto">
              {activeOrder.items.map((item) => (
                <div key={item.cartId} className="flex justify-between text-xs text-slate-300">
                  <span>{item.quantity}x {item.name}</span>
                  <span className="font-bold text-white">₹{item.unitPrice * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 mt-2 border-t border-slate-800 flex justify-between text-xs font-bold text-white">
              <span>Total Paid</span>
              <span className="text-yellow-400 font-heading">₹{activeOrder.amount}</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-center">
          <button
            onClick={() => setActiveOrder(null)}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-3 rounded-xl transition-all border border-slate-700"
          >
            Close & Continue Shopping
          </button>
        </div>

      </div>
    </div>
  );
};
