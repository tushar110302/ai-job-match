export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white font-bold text-lg tracking-tight">ResumeAI</div>

          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">API Documentation</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Contact Support</a>
          </div>
          <p>© 2024 ResumeAI Analysis. Precision in every match.</p>
        </div>
      </div>
    </footer>
  );
}
