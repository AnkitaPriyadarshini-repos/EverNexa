import React from "react";

export const DandelionArt = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-r from-[#DCE8F0] via-[#C9DBE8] to-[#99B4C8] flex items-center justify-end">
      
      {/* Background Soft Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(255,255,255,0.7)_0%,_transparent_75%)]"></div>

      {/* Horizontal Radiating Dandelion Fibers SVG matching Screenshot 4 */}
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full object-cover scale-110 translate-x-12"
      >
        <defs>
          <linearGradient id="fiberBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4187C5" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#78B5E3" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E3A8D2" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="stemGrad" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#2A5C84" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#89BCE0" stopOpacity="0.3" />
          </linearGradient>

          <filter id="glowBloom">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Origin Node on the right */}
        <g transform="translate(680, 250)">
          
          {/* Main Horizontal Rays */}
          {Array.from({ length: 65 }).map((_, i) => {
            const angle = -120 + (i * 240) / 65; // Radiating towards left
            const rad = (angle * Math.PI) / 180;
            const len = 220 + (i % 9) * 28;
            const x2 = Math.cos(rad) * len;
            const y2 = Math.sin(rad) * len;

            const isPinkTip = i % 3 === 0;

            return (
              <g key={i}>
                {/* Ray Line */}
                <line
                  x1="0"
                  y1="0"
                  x2={x2}
                  y2={y2}
                  stroke="url(#fiberBlue)"
                  strokeWidth={1.2 + (i % 3) * 0.4}
                  opacity="0.85"
                />

                {/* Feathered Fiber Spikes near tip */}
                {Array.from({ length: 5 }).map((_, j) => {
                  const subLen = len - (j + 1) * 16;
                  const sx = Math.cos(rad) * subLen;
                  const sy = Math.sin(rad) * subLen;
                  const branchAngle = rad + (j % 2 === 0 ? 0.35 : -0.35);
                  const bx = sx + Math.cos(branchAngle) * (12 + j * 3);
                  const by = sy + Math.sin(branchAngle) * (12 + j * 3);

                  return (
                    <line
                      key={j}
                      x1={sx}
                      y1={sy}
                      x2={bx}
                      y2={by}
                      stroke={isPinkTip ? "#E89BC9" : "#6BB5E5"}
                      strokeWidth="1"
                      opacity="0.75"
                    />
                  );
                })}

                {/* Tip Crystal Flower */}
                <circle
                  cx={x2}
                  cy={y2}
                  r={isPinkTip ? 4 : 3}
                  fill={isPinkTip ? "#F0A6D5" : "#59AEE8"}
                  filter="url(#glowBloom)"
                />
                <circle
                  cx={x2}
                  cy={y2}
                  r="1.5"
                  fill="#FFFFFF"
                />
              </g>
            );
          })}

          {/* Core Cluster */}
          <circle cx="0" cy="0" r="35" fill="#3B7CB0" opacity="0.4" filter="url(#glowBloom)" />
          <circle cx="0" cy="0" r="18" fill="#FFFFFF" opacity="0.9" />

        </g>
      </svg>

    </div>
  );
};
