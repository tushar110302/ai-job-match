"use client";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { label: "Technical Skills", value: 98, color: "from-violet-500 to-violet-400" },
  { label: "Leadership Context", value: 82, color: "from-pink-500 to-orange-400" },
  { label: "Industry Keywords", value: 100, color: "from-violet-500 to-pink-500" },
];

const features = [
  "Keyword density optimization",
  "Sentiment and tone mapping",
  "Gap analysis & strategic suggestions",
];

function AnimatedBar({ value, color, animate }) {
  return (
    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full bg-linear-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: animate ? `${value}%` : "0%" }}
      />
    </div>
  );
}

function CircleScore({ value, animate }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = animate ? ((100 - value) / 100) * circumference : circumference;

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={radius} fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="4" />
        <circle
          cx="36" cy="36" r={radius}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-white font-bold text-sm relative z-10">{value}%</span>
    </div>
  );
}

export default function MatchScore() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="score" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl bg-[#0d0d1a] border border-white/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: Score card */}
            <div ref={ref} className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/5">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-white font-semibold text-base">Role Compatibility</h3>
                    <p className="text-gray-500 text-xs mt-0.5 uppercase tracking-wider">Senior Product Designer @ TechGiant</p>
                  </div>
                  <CircleScore value={94} animate={animate} />
                </div>
              </div>

              <div className="space-y-5">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{m.label}</span>
                      <span className="text-gray-400 font-medium">{m.value}%</span>
                    </div>
                    <AnimatedBar value={m.value} color={m.color} animate={animate} />
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-2.5">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
                    <div className="w-4 h-4 rounded-full border border-violet-500/50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Description */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                The Kinetic Match Score
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Stop guessing. Our proprietary algorithm evaluates your profile against thousands of high-performance benchmarks in real-time, giving you the clarity needed to apply with confidence.
              </p>

              <div className="space-y-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
