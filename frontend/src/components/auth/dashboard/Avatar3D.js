import React from "react";

const Avatar3D = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* glow */}
      <div className="absolute w-32 h-32 sm:w-40 sm:h-40 bg-violet-500/20 blur-3xl rounded-full" />

      {/* avatar container */}
      <div
        className="
          relative
          w-24 h-24
          sm:w-28 sm:h-28
          md:w-32 md:h-32
          rounded-full
          bg-gradient-to-br from-[#1d275f] to-[#0b1235]
          border border-white/10
          shadow-[0_15px_40px_rgba(0,0,0,0.45)]
          flex items-center justify-center
          overflow-hidden
        "
      >
        {/* glossy layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

        {/* SVG Avatar */}
        <svg
          viewBox="0 0 200 200"
          className="w-[78%] h-[78%] drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="50" r="12" fill="#8B5CF6" opacity="0.25" />

          <circle cx="160" cy="60" r="10" fill="#06B6D4" opacity="0.25" />

          <circle cx="150" cy="145" r="16" fill="#EC4899" opacity="0.2" />

          <rect x="82" y="92" width="36" height="26" rx="12" fill="#F4C7A1" />

          <ellipse cx="100" cy="72" rx="40" ry="44" fill="#FFD7B5" />

          <path
            d="
              M58 72
              C58 35, 85 18, 100 18
              C140 18, 148 48, 144 82
              C135 60, 118 52, 96 52
              C82 52, 68 60, 58 72
            "
            fill="#111827"
          />

          <ellipse cx="85" cy="76" rx="4" ry="5" fill="#111827" />

          <ellipse cx="115" cy="76" rx="4" ry="5" fill="#111827" />

          <path
            d="M88 95 Q100 105 112 95"
            stroke="#111827"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="
              M52 175
              C58 132, 78 118, 100 118
              C122 118, 142 132, 148 175
              Z
            "
            fill="url(#bodyGradient)"
          />

          <defs>
            <linearGradient
              id="bodyGradient"
              x1="52"
              y1="118"
              x2="148"
              y2="175"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8B5CF6" />

              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* online dot */}
      <div
        className="
          absolute bottom-1 right-1
          w-4 h-4 sm:w-5 sm:h-5
          rounded-full
          bg-emerald-400
          border-[3px] border-[#0d153d]
          shadow-[0_0_14px_rgba(74,222,128,0.8)]
        "
      />
    </div>
  );
};

export default Avatar3D;
