import Link from "next/link";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-[120px]" />

        <div className="absolute right-[-10%] top-[-5%] h-[420px] w-[420px] rounded-full bg-blue-700/20 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-700/10 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 mx-auto flex h-16 w-full max-w-7xl items-center px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Prep<span className="text-violet-400">Lens</span>
        </Link>
      </nav>

      {/* Main Layout */}
      <main className="relative z-10 flex md:flex-row flex-col min-h-[calc(100vh-64px)] w-full items-center justify-center gap-12 md:gap-2 px-6 ">
        {/* LEFT SIDE */}
        <div className="md:flex-1 flex flex-col gap-4 items-center text-start">
          <p className=" text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-violet-400/70">
            AI Powered Career Intelligence
          </p>

          <h1 className="text-4xl font-bold text-center leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className=" leading-relaxed text-gray-400 text-sm md:text-lg">
            {subtitle}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full justify-center md:flex-1">
          <div className="relative w-full max-w-md overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6 shadow-[0_0_60px_rgba(59,130,246,0.10)] backdrop-blur-2xl sm:p-8">
            {/* top border glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

            <div className="relative z-10">{children}</div>

            {/* Decorative Wave */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full overflow-hidden opacity-20">
              <svg
                viewBox="0 0 1440 320"
                className="absolute bottom-0 w-full"
                fill="none"
              >
                <path
                  d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,154.7C672,171,768,213,864,218.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
