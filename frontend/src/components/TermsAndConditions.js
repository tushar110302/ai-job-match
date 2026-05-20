import Link from "next/link";
import Navbar from "./Navbar";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    content: `By accessing or using PrepLens, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you may not use the platform.

These terms apply to all visitors, registered users, and anyone accessing the service.`,
  },
  {
    id: "service",
    title: "Use of the service",
    content: `PrepLens provides AI-powered interview preparation and career analysis tools. You agree to use the platform only for lawful purposes and in a way that does not harm, disrupt, or misuse the service.

You may not attempt to reverse engineer, exploit vulnerabilities, overload infrastructure, or interfere with the normal operation of the platform.`,
  },
  {
    id: "accounts",
    title: "Accounts and access",
    content: `You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.

We reserve the right to suspend or terminate accounts that violate these terms, engage in abuse, or attempt unauthorized access to systems or data.`,
  },
  {
    id: "content",
    title: "Your content",
    content: `You retain ownership of the resumes, job descriptions, and other materials you upload to PrepLens.

By using the platform, you grant us limited permission to process this content solely for generating reports, improving functionality, and operating the service. We do not sell your uploaded content.`,
  },
  {
    id: "accuracy",
    title: "AI-generated output",
    content: `PrepLens uses AI systems to generate interview preparation reports and recommendations. While we aim for high-quality and accurate outputs, we do not guarantee that generated content will always be complete, error-free, or suitable for every situation.

Users should independently verify important information before relying on it for professional decisions.`,
  },
  {
    id: "payments",
    title: "Payments and subscriptions",
    content: `Certain features may require payment or an active subscription. Prices, billing cycles, and included features may change over time.

If subscriptions are introduced, failure to complete payment may result in restricted access to premium functionality.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `We may suspend or terminate access to the service at any time if we believe a user has violated these terms, abused the platform, or created security risks.

You may stop using PrepLens at any time and may request account deletion through your dashboard or by contacting support.`,
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: `PrepLens is provided on an "as is" and "as available" basis. We are not liable for indirect, incidental, or consequential damages arising from your use of the platform.

This includes loss of data, missed opportunities, employment outcomes, or interruptions in service.`,
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: `We may update these Terms & Conditions as the product evolves. Material changes will be communicated through the platform or by email when appropriate.

Continued use of PrepLens after updates means you accept the revised terms.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden relative">
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-violet-900/10 rounded-full blur-[140px]" />

        <div className="absolute top-1/4 left-1/12 w-[400px] h-[400px] bg-pink-900/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px]" />
      </div>

      <Navbar />

      <main className="pt-32 pb-24 relative z-10">
        <div className="w-full md:max-w-[75%] mx-auto px-4 md:px-6">
          {/* Header */}
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
              Terms & Conditions
            </h1>

            <p className="text-white/30 max-w-lg leading-relaxed">
              These terms govern your use of PrepLens, including platform access,
              AI-generated reports, account responsibilities, and service usage.
            </p>

            <p className="text-[11px] text-white/20 mt-4 font-medium tracking-wider">
              Last updated: May 2026
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {/* Sidebar */}
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

            {/* Content */}
            <div className="md:col-span-3 space-y-12">
              {sections.map((s, i) => (
                <div
                  key={i}
                  id={s.id}
                  style={{
                    animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${
                      0.05 + i * 0.06
                    }s both`,
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

              {/* Contact block */}
              <div className="rounded-2xl border border-white/5 bg-[#0f0f1a] p-6 mt-8">
                <h3 className="font-black text-white/70 mb-2">
                  Need clarification?
                </h3>

                <p className="text-sm text-white/25 mb-4 font-light">
                  If you have questions about these terms or need support,
                  contact our team directly.
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

      {/* Footer */}
      <footer className="relative border-t border-white/[0.05] py-8 z-10">
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