import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { X, Send, Bot, User, Sparkles, MessageCircleCode, PhoneCall } from "lucide-react";

export const SupportChatModal = () => {
  const { isSupportOpen, setIsSupportOpen } = useApp();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hi! Welcome to 24Seven 24x7 Customer Support. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputMsg, setInputMsg] = useState("");

  if (!isSupportOpen) return null;

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg;
    const userMsgObj = {
      id: Date.now(),
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsgObj]);
    setInputMsg("");

    // Simulate smart bot response
    setTimeout(() => {
      let replyText = "Thank you for reaching out! Our 24Seven rider team is delivering orders 24x7 in 12-15 minutes.";

      const lower = userText.toLowerCase();
      if (lower.includes("coupon") || lower.includes("discount") || lower.includes("offer")) {
        replyText = "🎉 You can use promo code MIDNIGHT24 for ₹50 OFF on orders above ₹199, or HOTDOG50 for 50% OFF drinks!";
      } else if (lower.includes("hot dog") || lower.includes("recommend") || lower.includes("food")) {
        replyText = "🔥 Our 24Seven Classic Loaded Cheese Hot Dog is our #1 bestseller! Pair it with Hazelnut Cold Coffee for the ultimate late night meal!";
      } else if (lower.includes("track") || lower.includes("order") || lower.includes("status")) {
        replyText = "🚚 You can track your live rider location anytime by clicking 'Track Order' in your active order screen!";
      } else if (lower.includes("stamp") || lower.includes("reward") || lower.includes("point")) {
        replyText = "🎁 Earn 1 stamp on every order above ₹149. 10 stamps unlock a FREE Hot Dog & Cold Coffee!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-slide-up flex flex-col h-[560px]">
        
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold shadow-md shadow-yellow-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-white text-sm">24Seven Support Assistant</h3>
              <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Online 24x7 • Instant Reply
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSupportOpen(false)}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/60">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                  m.sender === "user"
                    ? "bg-yellow-400 text-black font-medium rounded-tr-none"
                    : "bg-slate-800 text-slate-200 border border-slate-700/60 rounded-tl-none"
                }`}
              >
                {m.text}
              </div>
              <span className="text-[9px] text-slate-500 mt-1 px-1">{m.time}</span>
            </div>
          ))}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2 bg-slate-950 border-t border-slate-800/80 flex gap-1.5 overflow-x-auto scrollbar-none">
          {["Promo Codes?", "Best Hot Dog?", "Track Delivery", "24 Club Stamps"].map((chip) => (
            <button
              key={chip}
              onClick={() => {
                setInputMsg(chip);
              }}
              className="text-[10px] bg-slate-900 text-yellow-400 border border-yellow-500/20 hover:border-yellow-400 px-2.5 py-1 rounded-full font-medium whitespace-nowrap"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-slate-900 border border-slate-700/80 rounded-full px-4 py-2.5 text-xs text-white placeholder-slate-400 outline-none focus:border-yellow-400"
          />
          <button
            type="submit"
            className="p-2.5 bg-yellow-400 hover:bg-yellow-300 text-black rounded-full font-bold shadow-md transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
