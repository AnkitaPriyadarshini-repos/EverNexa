import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { X, Check, Plus, SlidersHorizontal, Flame } from "lucide-react";

export const CustomizeModal = () => {
  const { customizeItem, setCustomizeItem, addToCart } = useApp();

  const [selectedSauces, setSelectedSauces] = useState(
    customizeItem?.options?.sauces ? [customizeItem.options.sauces[0]] : []
  );
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedTemp, setSelectedTemp] = useState(
    customizeItem?.options?.temperature ? customizeItem.options.temperature[0] : null
  );
  const [selectedSpice, setSelectedSpice] = useState(
    customizeItem?.options?.spice ? customizeItem.options.spice[0] : null
  );

  if (!customizeItem) return null;

  // Calculate unit price based on selected add-ons
  const addonsTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
  const finalUnitPrice = customizeItem.price + addonsTotal;

  const toggleSauce = (sauce) => {
    setSelectedSauces((prev) =>
      prev.includes(sauce) ? prev.filter((s) => s !== sauce) : [...prev, sauce]
    );
  };

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) =>
      prev.some((a) => a.name === addon.name)
        ? prev.filter((a) => a.name !== addon.name)
        : [...prev, addon]
    );
  };

  const handleConfirm = () => {
    const customOptions = {
      sauces: selectedSauces,
      temperature: selectedTemp,
      spice: selectedSpice,
      addons: selectedAddons.map((a) => `${a.name} (+₹${a.price})`)
    };

    addToCart(customizeItem, customOptions, finalUnitPrice);
    setCustomizeItem(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-slide-up flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
          <img
            src={customizeItem.image}
            alt={customizeItem.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

          <button
            onClick={() => setCustomizeItem(null)}
            className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md rounded-full text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-extrabold text-yellow-400 uppercase tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-yellow-400/30">
              Customise Your Order
            </span>
            <h2 className="font-heading font-extrabold text-xl text-white mt-1">
              {customizeItem.name}
            </h2>
          </div>
        </div>

        {/* Scrollable Options */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
          
          {/* Temperature Choice (For Drinks) */}
          {customizeItem.options?.temperature && (
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2.5">
                Temperature Preference
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {customizeItem.options.temperature.map((temp) => (
                  <button
                    key={temp}
                    onClick={() => setSelectedTemp(temp)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      selectedTemp === temp
                        ? "bg-yellow-400 text-black border-yellow-400 shadow-md"
                        : "bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    {temp}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sauces Selection */}
          {customizeItem.options?.sauces && (
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2.5">
                Choose Sauces (Select any)
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {customizeItem.options.sauces.map((sauce) => {
                  const isChecked = selectedSauces.includes(sauce);
                  return (
                    <button
                      key={sauce}
                      onClick={() => toggleSauce(sauce)}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs font-medium border transition-all ${
                        isChecked
                          ? "bg-slate-800 border-yellow-400 text-white"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span>{sauce}</span>
                      {isChecked && <Check className="w-4 h-4 text-yellow-400" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add-ons Selection */}
          {customizeItem.options?.addons && (
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2.5">
                Add-ons & Toppings
              </h4>
              <div className="space-y-2">
                {customizeItem.options.addons.map((addon) => {
                  const isSelected = selectedAddons.some((a) => a.name === addon.name);
                  return (
                    <button
                      key={addon.name}
                      onClick={() => toggleAddon(addon)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-medium border transition-all ${
                        isSelected
                          ? "bg-slate-800 border-yellow-400 text-white"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span>{addon.name}</span>
                      <span className="font-bold text-yellow-400">
                        +{addon.price === 0 ? "FREE" : `₹${addon.price}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Footer Confirmation */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-slate-400 block font-medium">Total Item Price</span>
            <span className="font-heading font-extrabold text-2xl text-white">₹{finalUnitPrice}</span>
          </div>

          <button
            onClick={handleConfirm}
            className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-sm py-3.5 px-6 rounded-2xl shadow-lg shadow-yellow-500/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Add Item to Cart • ₹{finalUnitPrice}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
