import { Upload } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden ">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-pink-900/10 rounded-full blur-[80px]" />
      </div>

      {/* Badge */}
      <div className="relative mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        AI-Powered Career Intelligence
      </div>

      {/* Headline */}
      <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white leading-tight max-w-4xl mb-6">
        Land your dream job with{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-pink-400">
          AI Precision
        </span>
        .
      </h1>

      {/* Subheadline */}
      <p className="relative text-gray-400 text-center text-base md:text-lg max-w-xl mb-10 leading-relaxed">
        Our kinetic analysis engine decodes job descriptions and aligns your
        resume with exact industry expectations in seconds.
      </p>

      {/* CTAs */}
      <button className="flex items-center gap-2 mb-16 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all shadow-lg shadow-violet-900/40 hover:shadow-violet-700/40">
        <Upload size={16} />
        Upload Resume
      </button>

      {/* Hero visual */}
      <Image
        src={"/hero.png"}
        alt="AI Precision"
        width={958}
        height={535}
        className=""
      />
    </section>
  );
}
