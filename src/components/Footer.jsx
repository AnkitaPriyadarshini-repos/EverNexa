import React from "react";
import { ShieldCheck, Clock, Award, PhoneCall, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 mt-16 pt-12 pb-8 px-4 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top 3 Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-slate-800">
          <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0 font-extrabold text-xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-white text-sm">Open 24/7 • 365 Days</h4>
              <p className="text-xs text-slate-400 mt-0.5">Round the clock hot food & snacks delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 font-extrabold text-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-white text-sm">FSSAI Hygienic Certified</h4>
              <p className="text-xs text-slate-400 mt-0.5">Prepared fresh under strict quality control</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-extrabold text-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-white text-sm">24Seven Stamp Rewards</h4>
              <p className="text-xs text-slate-400 mt-0.5">Earn stamps & points on every order</p>
            </div>
          </div>
        </div>

        {/* Brand Column & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-2 rounded-xl text-black font-extrabold font-heading text-lg">
                24SEVEN
              </div>
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">
                Convenience Store
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              India's premier 24-hour round-the-clock convenience store chain. Enjoy fresh hot dogs, cold coffees, pizzas, instant meals, chocolates, and party essentials delivered to your doorstep in 15 minutes.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="tel:1800247247" className="flex items-center gap-2 text-xs font-bold text-white bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 hover:border-yellow-400 transition-colors">
                <PhoneCall className="w-4 h-4 text-yellow-400" />
                <span>Customer Care: 1800-247-247</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-3">
              Quick Categories
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#hotfood" className="hover:text-yellow-400 transition-colors">Signature Hot Dogs</a></li>
              <li><a href="#coffee" className="hover:text-yellow-400 transition-colors">Iced Coffee & Slushies</a></li>
              <li><a href="#pizza" className="hover:text-yellow-400 transition-colors">Fresh Pizza Slices</a></li>
              <li><a href="#ramen" className="hover:text-yellow-400 transition-colors">Buldak Spicy Ramen</a></li>
              <li><a href="#stamps" className="hover:text-yellow-400 transition-colors">24 Club Loyalty Stamps</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-3">
              Top Locations (24x7)
            </h5>
            <ul className="space-y-2 text-xs">
              <li>Connaught Place, New Delhi</li>
              <li>Cyber Hub, Gurugram</li>
              <li>Hauz Khas Village, Delhi</li>
              <li>Sector 18, Noida</li>
              <li>Greater Kailash 1, Delhi</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Twenty Four Seven Retail Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            <span>for 24x7 Foodies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
