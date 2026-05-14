const cards = [
  {
    type: "AI QUESTION",
    text: '"Can you describe a time you optimized a design system for 20+ teams while maintaining kinetic consistency?"',
    highlight: false,
  },
  {
    type: "PROPOSED STRATEGY",
    text: "Highlight your use of design tokens and the 15% reduction in developer handoff time at your previous role.",
    highlight: true,
  },
  {
    type: "AI QUESTION",
    text: '"What is your approach to handling conflicting stakeholder requirements in a fast-paced environment?"',
    highlight: false,
  },
];

const features = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Behavioral Sync",
    desc: "Tailored STAR method responses for your history.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Technical Deep-Dive",
    desc: "Concept verification based on JD stack.",
  },
];

export default function InterviewPrep() {
  return (
    <section id="interview" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Interview Prep,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                Reimagined
              </span>
            </h2>
            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              {"Don't"} just prepare for an interview; master the conversation. Our AI generates role-specific simulations based on your actual data and the {"employer's"} unique requirements.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-4 rounded-xl bg-[#0f0f1a] border border-white/5 hover:border-violet-500/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3">
                    {f.icon}
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chat cards */}
          <div className="flex flex-col gap-3">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border transition-all ${
                  card.highlight
                    ? "bg-violet-600/10 border-violet-500/30"
                    : "bg-[#0f0f1a] border-white/5"
                } ${i === 2 ? "opacity-60" : ""}`}
              >
                <div className={`text-xs font-semibold tracking-widest mb-2 ${
                  card.highlight ? "text-violet-400" : "text-gray-500"
                }`}>
                  {card.type}
                </div>
                <p className={`text-sm leading-relaxed ${
                  card.highlight ? "text-gray-200" : "text-gray-400 italic"
                }`}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
