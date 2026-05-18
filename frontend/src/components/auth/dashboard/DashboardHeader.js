"use client";

import React from "react";
import { LogOut } from "lucide-react";

const DashboardHeader = ({ loading, onLogout }) => {
  return (
    <header className="relative z-10 h-16 sm:h-18 px-4 sm:px-6 md:px-8 flex items-center justify-between">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#d6d2ff]">
        ResumeAI
      </h1>

      <button
        onClick={onLogout}
        disabled={loading}
        className="
          flex items-center gap-1.5 sm:gap-2
          px-3 sm:px-4 py-2
          rounded-lg
          border border-red-500/50
          bg-red-500/10
          text-white
          hover:bg-red-500/20
          hover:text-red-400
          transition-all duration-200
          font-medium
          text-sm
          cursor-pointer
        "
      >
        <LogOut size={14} className="sm:w-4 sm:h-4" />

        <span>Logout</span>
      </button>
    </header>
  );
};

export default DashboardHeader;
