"use client";

import useAuth from "@/hooks/useAuth";
import { LayoutDashboard, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// ---------------------------------------------------------------------------
// Tiny avatar / initials bubble
// ---------------------------------------------------------------------------
function Avatar({ name, size = 8 }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`w-${size} h-${size} rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-semibold ring-2 ring-violet-500/40 select-none`}
    >
      {initials}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dropdown menu (desktop)
// ---------------------------------------------------------------------------
function UserDropdown({ user, onClose }) {
  return (
    <div className="absolute right-0 top-full mt-3 w-56 rounded-xl border border-white/10 bg-[#13131a] shadow-2xl shadow-black/60 overflow-hidden z-50 animate-fadeIn">
      {/* User info */}
      <div className="px-4 py-3 border-b border-white/10">
        <p className="text-sm font-medium text-white truncate">{user.name}</p>
        <p className="text-xs text-gray-500 truncate">{user.email}</p>
      </div>

      {/* Links */}
      <div className="py-1">
        <Link
          href="/dashboard"
          onClick={onClose}
          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          <svg
            className="w-4 h-4 opacity-60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7h7v7H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 18h7v3H3z"
            />
          </svg>
          Dashboard
        </Link>

        <button
          onClick={() => {
            /* call your signOut here */ onClose();
          }}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-4 h-4 opacity-60" />
          Log out
        </button>
      </div>
    </div>
  );
}

const MobileDropdown = ({ user, onClose, handleLogout }) => {
  <div className="fixed inset-0 z-40 md:hidden">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    />

    {/* Panel */}
    <div className="absolute top-[65px] left-0 right-0 bg-[#0e0e16] border-b border-white/10 shadow-2xl animate-fadeIn">
      {user ? (
        <>
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
            <Avatar name={user?.username} size={10} />
            <div>
              <p className="text-sm font-medium text-white">{user.username}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="px-6 pb-5 pt-1 border-t border-white/10 space-y-1">
            <Link
              href="/dashboard"
              onClick={onClose}
              className="flex items-center gap-3 py-2.5 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 py-2.5 text-sm text-red-400 hover:text-red-300 transition-colors w-full"
            >
              <LogOut className="w-4 h-4" />
              Log out
            </button>
          </div>
        </>
      ) : (
        <Link
          href="/login"
          onClick={onClose}
          className="px-8 flex items-center justify-center gap-2 py-2.5 text-sm text-gray-300 hover:text-white transition-colors"
        >
          Login
          <LogIn className="w-4 h-4" />
        </Link>
      )}

      {/* User info strip (logged-in only) */}
      {/* {user && (
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
                <Avatar name={user?.username} size={10} />
                <div>
                  <p className="text-sm font-medium text-white">
                    {user.username}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            )}


            <div className="px-6 pb-5 pt-1 border-t border-white/10 space-y-1">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4 opacity-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7h7v7H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 18h7v3H3z"
                      />
                    </svg>
                    Dashboard
                  </Link>
                  <button
                    onClick={_logout}
                    className="flex items-center gap-3 py-2.5 text-sm text-red-400 hover:text-red-300 transition-colors w-full"
                  >
                    <svg
                      className="w-4 h-4 opacity-70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                      />
                    </svg>
                    Log out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-sm bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-lg transition-all mt-2"
                >
                  Login
                </Link>
              )}
            </div> */}
    </div>
  </div>;
};

// ---------------------------------------------------------------------------
// Main Navbar
// ---------------------------------------------------------------------------
export default function Navbar() {
  const { user, handleLogout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const _logout = () => {
    handleLogout();
    setMobileOpen(false);
    router.push("/login");
  };

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .animate-fadeIn { animation: fadeIn 0.18s ease forwards; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full md:px-12 px-4 h-16 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
          Prep<span className="text-purple-400">Lens</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-[16px] text-gray-400">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
            
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center">
          {user ? (
            /* ── Logged-in: avatar + dropdown ── */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-white/5 transition-colors"
              >
                <Avatar name={user?.username} size={8} />
                <span className="text-sm text-gray-300 max-w-[120px] truncate">
                  {user.name}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <UserDropdown
                  user={user}
                  onClose={() => setDropdownOpen(false)}
                />
              )}
            </div>
          ) : (
            /* ── Logged-out: Login button ── */
            <Link
              href="/login"
              className="text-sm flex items-center gap-2 bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-900/40 hover:shadow-violet-700/40 text-white px-5 py-2 rounded-lg transition-all"
            >
              Login
              <LogIn className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Mobile: right-side controls */}
        <button
          className="flex md:hidden items-center gap-3"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {user && (
            <div
              // onClick={() => setMobileOpen((v) => !v)}
              className="flex items-center"
              aria-label="Open user menu"
            >
              <Avatar name={user?.username} size={8} />
            </div>
          )}

          {/* Hamburger */}
          <div
            className="text-gray-400 hover:text-white"
            // onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </div>
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <MobileDropdown
          user={user}
          onClose={() => setMobileOpen(false)}
          handleLogout={_logout}
        />
      )}
    </>
  );
}
