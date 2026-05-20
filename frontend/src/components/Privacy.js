import Link from "next/link";
import Navbar from "./Navbar";

const sections = [
  {
    id: "information",
    title: "Information we collect",
    content: `When you use PrepLens, we collect the information you provide directly: your email address and username when you create an account, and the content you submit to generate a report — specifically your job description, resume text, and self-description.

We also collect standard usage data such as page visits, report generation events, and error logs. This data is used solely to improve the product and diagnose issues. We do not build advertising profiles.`,
  },
  {
    id: "resume",
    title: "How we handle your resume",
    content: `Your resume content is sent to our AI processing pipeline to generate your report. It is not stored permanently on our servers after the report is created. We do not index, sell, or share your resume content with any third party for any purpose other than generating your report.

If you choose to save a report, the textual content of your inputs is associated with that report in our database and tied to your account. You may delete any report at any time from your dashboard, which permanently removes the associated data.`,
  },
  {
    id: "cookies",
    title: "Cookies and sessions",
    content: `PrepLens uses a single session cookie to keep you logged in. This cookie contains no personal information — only a session token that references your account on our server. We do not use third-party tracking cookies, advertising cookies, or analytics cookies from services like Google Analytics.

You can clear this cookie at any time by logging out, which immediately invalidates the session on our server.`,
  },
  {
    id: "sharing",
    title: "Data sharing",
    content: `We do not sell your data. We do not share your personal information with advertisers, data brokers, or any third party for commercial purposes.

We use a small number of infrastructure providers — cloud hosting and AI model APIs — that process data on our behalf under strict data processing agreements. These providers are prohibited from using your data for any purpose beyond providing the service we require.`,
  },
  {
    id: "retention",
    title: "Data retention",
    content: `Your account data is retained as long as your account is active. Reports you generate are stored until you delete them or close your account. Upon account deletion, all associated personal data and reports are permanently removed within 30 days.

Anonymised, aggregated usage statistics — which cannot be linked back to you — may be retained for product analytics purposes.`,
  },
  {
    id: "rights",
    title: "Your rights",
    content: `You have the right to access the personal data we hold about you, request a copy of it, correct inaccuracies, or request permanent deletion. You can exercise most of these rights directly from your account dashboard.

For requests that go beyond what's available in the dashboard, email us at privacy@preplens.ai and we will respond within 30 days.`,
  },
  {
    id: "security",
    title: "Security",
    content: `All data is transmitted over HTTPS. Passwords are hashed using industry-standard algorithms and are never stored in plaintext. Session tokens are rotated regularly and invalidated on logout.

While we take reasonable precautions, no system is entirely immune to vulnerabilities. If you discover a security issue, please disclose it responsibly to security@preplens.ai.`,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: `We may update this policy as the product evolves. If we make material changes, we will notify you by email or by placing a prominent notice on the dashboard before the change takes effect. The date of the last update is shown at the bottom of this page.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes fade-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-violet-900/10 rounded-full blur-[140px]" />

        <div className="absolute top-1/4 left-1/12 w-[400px] h-[400px] bg-pink-900/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      <main className="pt-32 pb-24 relative z-1">
        <div className="w-full md:max-w-3/4 mx-auto px-4 md:px-6">
          {/* header */}
          <div
            className="mb-16"
            style={{
              animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <p className="text-[11px] font-black text-purple-400/60 uppercase tracking-[0.3em] mb-5">
              Legal
            </p>
            <h1
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-tight tracking-tight mb-5"
              style={{
                color: "rgba(230,225,255,0.95)",
              }}
            >
              Privacy Policy
            </h1>
            <p className="text-white/30 max-w-lg leading-relaxed">
              We believe privacy should be simple to understand. This document
              explains exactly what data we collect, why we collect it, and what
              we don&apos;t do with it. No legalese.
            </p>
            <p className="text-[11px] text-white/20 mt-4 font-medium tracking-wider">
              Last updated: May 2026
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {/* sticky sidebar — table of contents */}
            <aside className="hidden md:block md:col-span-1">
              <div className="sticky top-24 space-y-1">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.25em] mb-4">
                  Contents
                </p>
                {sections.map((s, i) => (
                  <a
                    key={i}
                    href={`#${s.id}`}
                    className="block text-xs text-white/25 hover:text-white/60 py-1.5 pl-3 border-l border-white/[0.06] hover:border-purple-500/30 transition-all duration-200"
                  >
                    {i + 1}. {s.title}
                  </a>
                ))}
              </div>
            </aside>

            {/* content */}
            <div className="md:col-span-3 space-y-12">
              {sections.map((s, i) => (
                <div
                  key={i}
                  id={s.id}
                  style={{
                    animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${0.05 + i * 0.06}s both`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-black text-purple-400/40 tabular-nums w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-lg font-black text-white/80">
                      {s.title}
                    </h2>
                  </div>
                  <div className="pl-8 border-l border-white/[0.05]">
                    {s.content.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-sm text-white/30 leading-relaxed mb-4 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* contact block */}
              <div className="rounded-2xl border border-white/5 bg-[#0f0f1a] p-6 mt-8">
                <h3 className="font-black text-white/70 mb-2">
                  Questions about this policy?
                </h3>
                <p
                  className="text-sm text-white/25 mb-4"
                  style={{
                    fontWeight: 300,
                  }}
                >
                  If anything here is unclear or you have concerns about your
                  data, reach out directly.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-purple-400/70 hover:text-purple-300 transition-colors"
                >
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer
        className="relative border-t border-white/[0.05] py-8"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-sm">
            Prep<span className="text-purple-400">Lens</span>
          </span>
          <div className="flex items-center gap-6 text-xs text-white/20">
            <Link
              href="/about"
              className="hover:text-white/50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-white/50 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white/50 transition-colors"
            >
              Privacy
            </Link>
          </div>
          <p className="text-xs text-white/15">
            © 2026 PrepLens. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
