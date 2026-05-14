import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="text-white font-bold text-lg tracking-tight">
        ResumeAI
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
        <a href="#workflow" className="hover:text-white transition-colors">
          How it Works
        </a>
        <a href="#score" className="hover:text-white transition-colors">
          Match Score
        </a>
        <a href="#interview" className="hover:text-white transition-colors">
          Interview Prep
        </a>
      </div>
      <Link href="/login" className="hidden md:block text-sm bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-900/40 hover:shadow-violet-700/40 text-white px-5 py-2 rounded-lg transition-all">
        Login
      </Link>
      {/* Mobile menu icon */}
      <button className="md:hidden text-gray-400 hover:text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}
