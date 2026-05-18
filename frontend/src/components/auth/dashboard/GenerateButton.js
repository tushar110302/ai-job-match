"use client";

import React from "react";
import { FileText, Loader2 } from "lucide-react";

const GenerateButton = ({ loading, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
        mt-8 sm:mt-10
        w-full
        h-12 sm:h-14
        cursor-pointer
        rounded-xl sm:rounded-2xl
        bg-linear-to-r from-[#5d5af6] to-[#a81d72]
        hover:scale-[1.03]
        active:scale-[0.99]
        disabled:scale-[1]
        disabled:opacity-70
        disabled:cursor-not-allowed
        transition-all duration-200
        shadow-[0_8px_30px_rgba(114,72,255,0.35)]
        flex items-center justify-center gap-2 sm:gap-3
        text-sm sm:text-base
        font-semibold
      "
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={20} />

          <span>Generating Report...</span>
        </>
      ) : (
        <>
          <FileText size={16} className="sm:w-[18px] sm:h-[18px]" />

          <span>Generate Report</span>
        </>
      )}
    </button>
  );
};

export default GenerateButton;
