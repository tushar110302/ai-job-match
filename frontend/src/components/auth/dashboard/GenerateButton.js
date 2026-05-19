import React from "react";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

const GenerateButton = () => {
  return (
    <Link
      href={"/report/new"}
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
        text-md md:text-lg
        font-bold tracking-wider
      "
    >
      <span>Generate Report</span>
      <ArrowUpRightFromSquare size={16} />
    </Link>
  );
};

export default GenerateButton;
