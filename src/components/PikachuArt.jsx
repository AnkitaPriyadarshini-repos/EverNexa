import React from "react";

export const PikachuArt = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#4EE2EC] via-[#26C6DA] to-[#0097A7] flex items-center justify-center">
      
      {/* Background Soft Ray Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4)_0%,_transparent_70%)]"></div>

      {/* SVG Pikachu Vector Illustration matching Screenshot */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full max-w-[440px] max-h-[440px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] translate-y-4"
      >
        {/* Left Ear */}
        <path
          d="M 120 180 Q 70 80 40 40 Q 60 110 135 210 Z"
          fill="#FFDE00"
          stroke="#E5C100"
          strokeWidth="3"
        />
        {/* Left Ear Black Tip */}
        <path
          d="M 40 40 Q 55 70 75 95 Q 60 70 40 40 Z"
          fill="#111111"
        />

        {/* Right Ear */}
        <path
          d="M 380 180 Q 430 80 460 40 Q 440 110 365 210 Z"
          fill="#FFDE00"
          stroke="#E5C100"
          strokeWidth="3"
        />
        {/* Right Ear Black Tip */}
        <path
          d="M 460 40 Q 445 70 425 95 Q 440 70 460 40 Z"
          fill="#111111"
        />

        {/* Head Base */}
        <ellipse
          cx="250"
          cy="280"
          rx="175"
          ry="155"
          fill="#FFDE00"
          stroke="#E5C100"
          strokeWidth="4"
        />

        {/* Left Eye */}
        <circle cx="170" cy="245" r="26" fill="#1C1C1C" />
        <circle cx="162" cy="237" r="10" fill="#FFFFFF" />

        {/* Right Eye */}
        <circle cx="330" cy="245" r="26" fill="#1C1C1C" />
        <circle cx="322" cy="237" r="10" fill="#FFFFFF" />

        {/* Tiny Nose */}
        <ellipse cx="250" cy="275" rx="5" ry="3.5" fill="#1C1C1C" />

        {/* Mouth */}
        <path
          d="M 230 288 Q 240 298 250 288 Q 260 298 270 288"
          fill="none"
          stroke="#1C1C1C"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Red Cheeks */}
        <circle cx="130" cy="295" r="32" fill="#FF203C" opacity="0.95" />
        <circle cx="370" cy="295" r="32" fill="#FF203C" opacity="0.95" />

        {/* Cheek Highlights */}
        <circle cx="122" cy="287" r="6" fill="#FFFFFF" opacity="0.4" />
        <circle cx="362" cy="287" r="6" fill="#FFFFFF" opacity="0.4" />
      </svg>

    </div>
  );
};
