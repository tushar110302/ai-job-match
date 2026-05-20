"use client";

import Link from "next/link";
import { ArrowRight, Target, Zap, ShieldCheck, Users } from "lucide-react";
import Navbar from "./Navbar";

const values = [
  {
    icon: Target,
    title: "Precision over noise",
    body: "We don't give you generic interview tips. Every report is built specifically from your resume and the job you're applying for.",
  },
  {
    icon: Zap,
    title: "Speed that matters",
    body: "A full preparation report in under 30 seconds. Because your time should go into preparing, not waiting.",
  },
  {
    icon: ShieldCheck,
    title: "Your data, your terms",
    body: "We don't store your resume or sell your data. What you upload stays between you and the analysis.",
  },
  {
    icon: Users,
    title: "Built for real candidates",
    body: "Not for recruiters. Not for HR teams. PrepLens is built for the person sitting across the table — you.",
  },
];

const stats = [
  { value: "10k+", label: "Reports generated" },
  { value: "94%", label: "User satisfaction" },
  { value: "30s", label: "Average report time" },
  { value: "50+", label: "Industries covered" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes fade-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .animate-fade-up { animation: fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      {/* glows */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div
          className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(88,28,220,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(30,58,138,0.14) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <Navbar />

      <main className="pt-32 pb-24 relative" style={{ zIndex: 1 }}>
        <div className="w-full md:max-w-3/4 mx-auto px-6">
          {/* hero */}
          <div className="mb-24 max-w-3xl">
            <p className="text-[11px] font-black text-purple-400/60 uppercase tracking-[0.3em] mb-5 animate-fade-up">
              About PrepLens
            </p>
            <h1
              className="text-[clamp(2.8rem,6vw,5rem)] font-black leading-[1.05] tracking-tight mb-8 animate-fade-up"
              style={{
                animationDelay: "0.1s",
                color: "rgba(230,225,255,0.95)",
              }}
            >
              We built the tool
              <br />
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(139,92,246,0.5)",
                }}
              >
                we wished existed.
              </span>
            </h1>
            <p
              className="text-lg leading-relaxed text-white/40 max-w-xl animate-fade-up"
              style={{
                fontWeight: 300,
                animationDelay: "0.2s",
              }}
            >
              PrepLens started from a simple frustration — job seekers spending
              hours trying to figure out what an interviewer actually wants,
              with no data to guide them. We fixed that.
            </p>
          </div>

          {/* stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-[#0f0f1a] p-6 text-center"
                style={{
                  animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s both`,
                }}
              >
                <p
                  className="text-3xl font-black mb-1"
                  style={{
                    color: "rgba(196,181,253,0.9)",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-[11px] font-semibold text-white/25 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* mission block */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div>
              <p className="text-[11px] font-black text-purple-400/50 uppercase tracking-[0.3em] mb-4">
                Our Mission
              </p>
              <h2
                className="text-3xl font-black leading-tight mb-6"
                style={{
                  color: "rgba(226,218,255,0.9)",
                }}
              >
                Level the playing field for every candidate.
              </h2>
              <p
                className="text-white/35 leading-relaxed mb-4"
              >
                Most interview prep tools are built on generic advice. PrepLens
                uses your actual resume and the specific job description to
                generate a report that&apos;s uniquely yours — covering
                technical questions, behavioral questions, skill gaps, and a
                day-by-day preparation plan.
              </p>
              <p
                className="text-white/35 leading-relaxed"
              >
                Whether you&apos;re a fresh graduate or a seasoned engineer, the
                gap between a rejection and an offer is often just preparation.
                We close that gap.
              </p>
            </div>
            <div className="rounded-3xl border border-white/5 bg-[#0f0f1a] p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <p
                className="text-5xl font-black mb-3"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(139,92,246,0.4)",
                }}
              >
                &quot;
              </p>
              <p
                className="text-white/60 leading-relaxed text-lg italic mb-6"
              >
                The best time to prepare for an interview is right after you
                apply. PrepLens makes that possible in minutes.
              </p>
              <p className="text-[11px] font-black text-purple-400/40 uppercase tracking-widest">
                — PrepLens Team
              </p>
            </div>
          </div>

          {/* values */}
          <div className="mb-2">
            <p className="text-[11px] font-black text-purple-400/50 uppercase tracking-[0.3em] mb-4">
              What we stand for
            </p>
            <h2
              className="text-3xl font-black mb-12"
              style={{
                color: "rgba(226,218,255,0.9)",
              }}
            >
              Our values
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/5 bg-[#0f0f1a] p-6 group hover:border-purple-500/20 hover:bg-purple-500/3 transition-all duration-300"
                  style={{
                    animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s both`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center mb-4 group-hover:bg-purple-500/15 transition-colors">
                    <v.icon size={16} className="text-purple-400/70" />
                  </div>
                  <h3
                    className="font-bold text-white/80 mb-2 text-[15px]"
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm text-white/30 leading-relaxed"
                  >
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
