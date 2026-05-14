export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-[#0d0d1a] border border-white/5 p-12 text-center">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-violet-800/20 rounded-full blur-[60px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to get hired?
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-md mx-auto leading-relaxed">
              Join 50,000+ professionals using ResumeAI to decode the hiring process and land high-value roles at top tech companies.
            </p>

            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 hover:-translate-y-0.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Launch Your Precision Career Search
            </button>

            <p className="text-gray-600 text-xs mt-4">
              No credit card required. Free resume analysis included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
