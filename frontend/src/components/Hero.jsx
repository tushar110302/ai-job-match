export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden bg-[#0a0a0f]">
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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
          AI Precision
        </span>
        .
      </h1>

      {/* Subheadline */}
      <p className="relative text-gray-400 text-center text-base md:text-lg max-w-xl mb-10 leading-relaxed">
        Our kinetic analysis engine decodes job descriptions and aligns your resume with exact industry expectations in seconds.
      </p>

      {/* CTAs */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4 mb-16">
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all shadow-lg shadow-violet-900/40 hover:shadow-violet-700/40">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Upload Resume
        </button>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          View Demo
        </button>
      </div>

      {/* Hero visual */}
      <div className="relative w-full max-w-2xl">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 aspect-[16/9] flex items-center justify-center shadow-2xl">
          {/* Abstract visual */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-slate-900/50 to-indigo-900/30" />
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 225" preserveAspectRatio="none">
              {[...Array(10)].map((_, i) => (
                <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="225" stroke="white" strokeWidth="0.5" />
              ))}
              {[...Array(6)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 45} x2="400" y2={i * 45} stroke="white" strokeWidth="0.5" />
              ))}
            </svg>
          </div>

          {/* Central resume card */}
          <div className="relative flex items-center gap-6 p-6">
            {/* Resume doc */}
            <div className="w-24 h-32 rounded-lg bg-slate-700/80 border border-white/10 p-2 flex flex-col gap-1 shadow-xl">
              <div className="h-2 bg-violet-400/60 rounded w-3/4" />
              <div className="h-1.5 bg-white/20 rounded w-full mt-1" />
              <div className="h-1.5 bg-white/20 rounded w-5/6" />
              <div className="h-1.5 bg-white/20 rounded w-4/6" />
              <div className="h-1.5 bg-white/20 rounded w-full mt-2" />
              <div className="h-1.5 bg-white/20 rounded w-5/6" />
              <div className="h-1.5 bg-white/20 rounded w-3/4" />
              <div className="h-1.5 bg-white/20 rounded w-full mt-2" />
              <div className="h-1.5 bg-white/20 rounded w-4/6" />
            </div>

            {/* Connection lines */}
            <div className="flex flex-col gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="w-8 h-px bg-gradient-to-r from-violet-400 to-pink-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                </div>
              ))}
            </div>

            {/* AI chip */}
            <div className="w-24 h-32 rounded-lg bg-slate-700/80 border border-violet-500/30 p-2 flex flex-col items-center justify-center gap-2 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-violet-600/40 border border-violet-400/30 flex items-center justify-center">
                <span className="text-violet-300 font-bold text-xs">AI</span>
              </div>
              <div className="text-center">
                <div className="h-1.5 bg-violet-400/40 rounded w-full" />
                <div className="h-1.5 bg-violet-400/20 rounded w-4/5 mt-1" />
              </div>
            </div>
          </div>

          {/* Score badge overlay */}
          <div className="absolute bottom-4 right-4 bg-slate-800/90 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full border-2 border-green-400 flex items-center justify-center">
              <span className="text-green-400 text-xs font-bold">94</span>
            </div>
            <div>
              <div className="text-white text-xs font-semibold">Match Score</div>
              <div className="text-green-400 text-xs">Excellent fit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
