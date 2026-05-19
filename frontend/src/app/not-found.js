import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#060e20] px-6">
      <div className="text-center max-w-md">
        {/* glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366f1]/10 blur-3xl" />
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white/60 tracking-tight animate-pulse">
          404
        </h1>

        {/* heading */}
        <h2 className="mt-2 md:mt-4 text-xl md:text-2xl font-bold text-white">
          Page not found
        </h2>

        {/* text */}
        <p className="mt-2 md:mt-3 text-[11px] md:text-[15px] leading-relaxed text-[#8b92b7]">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* buttons */}
        <div className="mt-4 md:mt-8 flex items-center justify-center gap-1.5 sm:gap-3 md:gap-5 lg:gap-6">
          <Link
            href="/dashboard"
            className="px-7 md:px-8 lg:px-9 py-2.5 md:py-3 rounded-xl bg-[#3e40dc] text-white text-sm md:text-lg font-semibold hover:bg-[#7476efee] transition-colors flex gap-2 md:gap-3 items-center"
          >
            <span>Dashboard</span>
            <ArrowUpRight className="h-4 w-4 md:w-6 md:h-6" />
          </Link>

          <Link
            href="/"
            className="px-7 md:px-8 lg:px-9 py-2.5 md:py-3 rounded-xl border border-white/10 bg-white/4 text-[#c7c4d7] text-sm md:text-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Home
          </Link>
        </div>

        {/* small tag */}
        <p className="mt-8 text-md tracking-[0.2em] text-[#7b8093] uppercase">
          Error 404
        </p>
      </div>
    </div>
  );
}
