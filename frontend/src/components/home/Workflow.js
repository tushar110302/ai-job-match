const steps = [
  {
    number: "1",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "Feed the Engine",
    description:
      "Drop your resume and the target job description. Our AI begins immediate kinetic indexing.",
  },
  {
    number: "2",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Deep Analysis",
    description:
      "Get a comprehensive Match Score breakdown, identifying exactly where your experience aligns or deviates.",
  },
  {
    number: "3",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "Master Prep",
    description:
      "Receive bespoke interview questions and strategic talking points generated specifically for that role.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 px-6 ">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Precision Workflow</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-[#0f0f1a] border border-white/5 hover:border-violet-500/20 transition-all group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-5 group-hover:bg-violet-600/20 transition-colors">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-2">{step.number}. {step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

              {/* Step connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 z-10">
                  <div className="w-6 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
