const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020b22] px-6 py-12">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-blue-700/20 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-violet-700/20 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(59,130,246,0.12)] backdrop-blur-2xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        <div className="mb-10 text-center">
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white">
            {title}
          </h1>

          <p className="mt-4 text-sm text-gray-400">{subtitle}</p>
        </div>

        {children}

        {/* Bottom Decorative Wave */}
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
    </main>
  );
};

export default AuthLayout;
