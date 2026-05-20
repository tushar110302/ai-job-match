import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f] overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        {/* Top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block text-xl font-bold tracking-tight text-white"
            >
              Prep<span className="text-violet-400">Lens</span>
            </Link>

            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              AI-powered interview preparation and resume intelligence built to
              help candidates prepare smarter and faster.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Product
              </h4>

              <div className="space-y-2 text-sm text-gray-500">
                <Link
                  href="/dashboard"
                  className="block transition-colors hover:text-gray-300"
                >
                  Dashboard
                </Link>

                <Link
                  href="/report/new"
                  className="block transition-colors hover:text-gray-300"
                >
                  Generate Report
                </Link>

                <Link
                  href="/about"
                  className="block transition-colors hover:text-gray-300"
                >
                  About
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Legal
              </h4>

              <div className="space-y-2 text-sm text-gray-500">
                <Link
                  href="/privacy"
                  className="block transition-colors hover:text-gray-300"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="block transition-colors hover:text-gray-300"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Support
              </h4>

              <div className="space-y-2 text-sm text-gray-500">
                <Link
                  href="/contact"
                  className="block transition-colors hover:text-gray-300"
                >
                  Contact
                </Link>

                <a
                  href="mailto:support@preplens.ai"
                  className="block transition-colors hover:text-gray-300"
                >
                  support@preplens.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-gray-600 md:flex-row md:items-center md:justify-between">
          
          <p>
            © 2026 PrepLens. Precision in every interview.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-gray-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-gray-400"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-gray-400"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}